import React, { useEffect, useState } from "react";
import { onConvert } from "../hooks/onConvert";
import Input from "./Input";

const Converter = () => {
  const [value, setValue] = useState({
    BYN: "",
    USD: 0,
    EUR: 0,
    RUB: 0,
    PLN: 0,
    CNY: 0,
    UAH: 0,
    BGN: 0,
    BRL: 0,
    DKK: 0,
    JPY: 0,
    IRR: 0,
    MDL: 0,
    NOK: 0,
    KZT: 0,
    TRY: 0,
  });
  const [dataCurrency, setDataCurrency] = useState({});
  const [data, setData] = useState([
    { name: "USD", show: true, rusName: "доллар США" },
    { name: "EUR", show: true, rusName: "евро" },
    { name: "RUB", show: true, rusName: "российский рубль" },
    { name: "PLN", show: true, rusName: "польский злотый" },
    { name: "CNY", show: true, rusName: "китайский юань" },
    { name: "UAH", show: true, rusName: "гривна" },
    { name: "BGN", show: false, rusName: "болгарский лев" },
    { name: "BRL", show: false, rusName: "бразильский реал" },
    { name: "DKK", show: false, rusName: "датская крона" },
    { name: "JPY", show: false, rusName: "иен" },
    { name: "IRR", show: false, rusName: "иранский реал" },
    { name: "MDL", show: false, rusName: "молдавских лей" },
    { name: "NOK", show: false, rusName: "норвежская крона" },
    { name: "KZT", show: false, rusName: "тенге" },
    { name: "TRY", show: false, rusName: "турецкий лир" },
  ]);

  useEffect(() => {
    fetch("https://api.nbrb.by/exrates/rates?periodicity=0").then((responce) =>
      responce.json().then((data) => {
        setDataCurrency(data);
      })
    );
  }, []);

  const onChangeHandler = (e) => {
    if (e.target.value.length <= 16) {
      setValue(onConvert(e.target.value, dataCurrency));
    }
  };

  const onAddInput = (e) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.name === e.target.value) {
          return { ...item, show: true };
        }
        return item;
      })
    );
  };

  const now = new Date().toLocaleDateString();

  return (
    <div className="max-w-[1000px] m-auto px-10 md:px-20 lg:px-5 pb-8 mt-8 rounded  ">
      <h1 className="text-4xl font-bold w-max m-auto backdrop-blur-sm text-center px-6 py-4 border-[10px] border-x-blue-600 border-y-cyan-600">
        Конвертер валют
      </h1>

      <div className="border flex flex-col justify-center rounded backdrop-blur-sm  items-center m-auto bg-opacity-50 bg-cyan-100 mt-8 p-10 animate-show">
        <p className="text-center lg:text-xl text-md">
          Официальный курс белорусского рубля по отношению к иностранным валютам, устанавливаемый Национальным
          банком на: <span className="font-semibold">{now}</span>
        </p>
        <div className="mt-8">
          <label className="font-semibold text-xl" htmlFor="BYN">
            BYN
          </label>
          <input
            placeholder="Введите сумму"
            onChange={onChangeHandler}
            value={value.BYN}
            className="border ml-4 px-4 py-2 text-2xl rounded focus:outline focus:outline-blue-600 outline-4"
            id="BYN"
            name="BYN"
            type="number"
            min={0}
          />
          <span className="text-sm text-right block">белорусский рубль</span>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6 mt-10">
          {data.map((item) => {
            if (item.show === true) {
              return (
                <Input
                  key={item.name}
                  value={value[item.name]}
                  currencyENG={item.name}
                  currencyRUS={item.rusName}
                />
              );
            }
          })}

          <div className="ml-auto">
            <select
              onChange={onAddInput}
              className="text-xl py-1 px-1 rounded"
              name="currency"
              id="currency-select"
            >
              <option className="text-center" value="">
                Добавить валюту:
              </option>
              {data.map((item) => {
                if (item.show === false) {
                  return (
                    <option key={item.name} value={item.name}>
                      {item.name} - {item.rusName}
                    </option>
                  );
                }
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;

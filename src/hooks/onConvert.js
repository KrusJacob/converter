export const onConvert = (value, dataCurrency) => {
  if (+value === 0) {
    return {
      BYN: "",
      RUB: 0,
      USD: 0,
      EUR: 0,
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
    };
  }

  function getItemByCurrency(currency) {
    return dataCurrency.filter((item) => item.Cur_Abbreviation === currency)[0];
  }

  const dataCurrencyRUB = getItemByCurrency("RUB");
  const dataCurrencyUSD = getItemByCurrency("USD");
  const dataCurrencyEUR = getItemByCurrency("EUR");
  const dataCurrencyPLN = getItemByCurrency("PLN");
  const dataCurrencyCNY = getItemByCurrency("CNY");
  const dataCurrencyUAH = getItemByCurrency("UAH");
  const dataCurrencyBGN = getItemByCurrency("BGN");
  const dataCurrencyBRL = getItemByCurrency("BRL");
  const dataCurrencyDKK = getItemByCurrency("DKK");
  const dataCurrencyJPY = getItemByCurrency("JPY");
  const dataCurrencyIRR = getItemByCurrency("IRR");
  const dataCurrencyMDL = getItemByCurrency("MDL");
  const dataCurrencyNOK = getItemByCurrency("NOK");
  const dataCurrencyKZT = getItemByCurrency("KZT");
  const dataCurrencyTRY = getItemByCurrency("TRY");

  function calcCurrency(itemCurrency) {
    return +((+value / itemCurrency.Cur_OfficialRate) * itemCurrency.Cur_Scale).toFixed(2);
  }

  return {
    RUB: calcCurrency(dataCurrencyRUB),
    USD: calcCurrency(dataCurrencyUSD),
    EUR: calcCurrency(dataCurrencyEUR),
    PLN: calcCurrency(dataCurrencyPLN),
    CNY: calcCurrency(dataCurrencyCNY),
    UAH: calcCurrency(dataCurrencyUAH),
    BGN: calcCurrency(dataCurrencyBGN),
    BRL: calcCurrency(dataCurrencyBRL),
    DKK: calcCurrency(dataCurrencyDKK),
    JPY: calcCurrency(dataCurrencyJPY),
    IRR: calcCurrency(dataCurrencyIRR),
    MDL: calcCurrency(dataCurrencyMDL),
    NOK: calcCurrency(dataCurrencyNOK),
    KZT: calcCurrency(dataCurrencyKZT),
    TRY: calcCurrency(dataCurrencyTRY),
    BYN: +value,
  };
};

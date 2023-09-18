import React from "react";

const Input = ({ value, currencyENG, currencyRUS }) => {
  return (
    <div className="ml-auto">
      <label className="font-semibold text-xl" htmlFor={currencyENG}>
        {currencyENG}
      </label>
      <input
        readOnly
        value={value}
        className="border w-[300px] ml-4 px-4 py-2 text-2xl focus:outline-none rounded"
        id={currencyENG}
        name={currencyENG}
        type="number"
        min={0}
      />
      <span className="text-sm text-right block">{currencyRUS}</span>
    </div>
  );
};

export default Input;

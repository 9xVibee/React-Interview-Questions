import { HiArrowsRightLeft } from "react-icons/hi2";
import DropDown from "./drop-down";
import { useEffect, useState } from "react";

const CurrencyConvertor = () => {
  const [selectedFrom, setSeletedFrom] = useState("USD");
  const [selectedTo, setSelectedTo] = useState("INR");
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [amount, setAmount] = useState(1);
  const [isConverted, setIsConverted] = useState(false);
  const [resConvert, setResConvert] = useState<number>();

  // https://api.frankfurter.app/currencies
  // Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      setCurrencies(Object.keys(data));
    } catch (error) {
      console.log(error);
    }
  };

  const converCurrency = async () => {
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${selectedFrom}&to=${selectedTo}`
      );

      const data = await res.json();
      console.log(data);
      setResConvert(data?.rates[selectedTo]);

      setIsConverted(true);
      setTimeout(() => {
        setIsConverted(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="w-[600px] flex flex-col gap-4 h-auto bg-white rounded-xl pt-10 py-6 px-4">
      <h1 className="text-3xl font-semibold">Currency Convertor</h1>
      <div className="flex justify-between items-center">
        <div>
          <p>From:</p>
          <DropDown
            currencies={currencies}
            selected={selectedFrom}
            setSelected={setSeletedFrom}
          />
        </div>
        <div className="p-2 rounded-full bg-gray-200 mt-4">
          <button
            className="flex justify-center items-center"
            onClick={() => {}}
          >
            <HiArrowsRightLeft className="text-xl text-gray-700" />
          </button>
        </div>
        <div>
          <p>To:</p>
          <DropDown
            currencies={currencies}
            selected={selectedTo}
            setSelected={setSelectedTo}
          />
        </div>
      </div>
      <div>
        <p className="font-semibold">Amount:</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border-2 outline-none rounded-md"
        />
      </div>
      <div className="w-full flex justify-end flex-col items-end">
        <button
          className="px-4 py-2 rounded-md text-white hover:bg-violet-700 transition-colors bg-violet-600"
          onClick={converCurrency}
        >
          Convert
        </button>
        <p
          className={`text-green-600 transition-opacity duration-300 ${
            isConverted ? "opacity-100" : "opacity-0"
          }`}
        >
          {`Converted from ${selectedFrom} to ${selectedTo} is ${resConvert}`}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConvertor;

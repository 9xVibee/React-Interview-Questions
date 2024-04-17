interface DropDownProps {
  currencies: string[];
  selected: string;
  setSelected: (str: string) => void;
}

const DropDown = ({ currencies, selected, setSelected }: DropDownProps) => {
  return (
    <select
      onChange={(e) => {
        setSelected(e.target.value);
      }}
      className="w-32 px-1 rounded-md bg-gray-200 border py-1 font-semibold text-base"
    >
      {currencies.map((currency) => (
        <option
          selected={selected === currency}
          key={currency}
          value={currency}
          className=""
        >
          {currency}
        </option>
      ))}
    </select>
  );
};

export default DropDown;

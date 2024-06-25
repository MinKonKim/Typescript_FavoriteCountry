import React from "react";
import { CountryInfo } from "../model/countryInfo";

type CoutryCardProps = {
  country: CountryInfo;
  onCountryChecked: (country: CountryInfo) => void;
};

const CountryCard: React.FC<CoutryCardProps> = ({
  country,
  onCountryChecked,
}) => {
  const handleClick = () => {
    onCountryChecked(country);
  };
  return (
    <div
      className={`h-[10rem] bg-slate-50 border rounded-lg p-3 shadow-md m-1 flex items-center justify-center flex-col ${
        country.checked
          ? "outline outline-cyan-500 shadow-cyan-400 hover:brightness-110"
          : "hover:outline hover:outline-cyan-500 hover:shadow-cyan-400 hover:brightness-110"
      }`}
      onClick={handleClick}
    >
      <div className="w-[5rem]">
        <img src={country.flags.png} />
      </div>
      <div className="flex items-start flex-col w-[100%]">
        <p className="text-xl font-bold">{country.name.common}</p>
        <p>{country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;

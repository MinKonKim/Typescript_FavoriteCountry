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
      className={`h-[15rem] bg-slate-100 border rounded-lg p-3 shadow-md m-1 flex items-center justify-center flex-col ${
        country.checked
          ? "outline outline-cyan-500 shadow-cyan-400 hover:brightness-110"
          : "hover:outline hover:outline-cyan-500 hover:shadow-cyan-400 hover:brightness-110"
      }`}
      onClick={handleClick}
    >
      <div className=" rounded  h-[100%] overflow-hidden">
        <img className="" src={country.flags.png} />
      </div>
      <div className="flex items-start flex-col w-[100%] mt-2 z-10">
        <p className="text-xl font-bold">{country.name.common}</p>
        <p className="text-sm font-bold text-slate-400">{country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;

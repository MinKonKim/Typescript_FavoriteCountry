import React from "react";
import { CountryInfo } from "../model/countryInfo";
import CountryCard from "./CountryCard";
type SelectedCountryListProps = {
  countries: CountryInfo[];
  onCountryChecked: (country: CountryInfo) => void;
};

const SelectedCountryList: React.FC<SelectedCountryListProps> = ({
  countries,
  onCountryChecked,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
      {countries.map((country, index) => (
        <div key={index}>
          <CountryCard country={country} onCountryChecked={onCountryChecked} />
        </div>
      ))}
    </div>
  );
};

export default SelectedCountryList;

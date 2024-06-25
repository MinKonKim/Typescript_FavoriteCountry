import React from "react";
import { CountryInfo } from "../model/countryInfo";
import CountryCard from "./CountryCard";
type SelectedCountryListProps = {
  countries: CountryInfo[];
};

const SelectedCountryList: React.FC<SelectedCountryListProps> = ({
  countries,
}) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4">
      {countries.map((country, index) => (
        <div key={index}>
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default SelectedCountryList;

import { useEffect, useState } from "react";
import "./App.css";
import { getCountries } from "./api/countryApi";
import CountryList from "./components/CountryList";
import SelectedCountryList from "./components/SelectedCountryList";
import { CountryInfo } from "./model/countryInfo";

function App() {
  const [coutries, setCoutries] = useState<CountryInfo[]>([]);
  useEffect(() => {
    const Countries = async () => {
      const response = await getCountries();
      setCoutries(response);
    };
    Countries();
  }, []);
  return;
  <div>
    <SelectedCountryList />
    <CountryList />
  </div>;
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { getCountries } from "./api/countryApi";
import CountryList from "./components/CountryList";
import SelectedCountryList from "./components/SelectedCountryList";
import { CountryInfo } from "./model/countryInfo";

function App() {
  const [countries, setCountries] = useState<CountryInfo[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<CountryInfo[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchCountries();

    setSelectedCountries(countries.filter((country) => country.checked));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold p-4 m-5">Favorite Contry</h1>
      <SelectedCountryList countries={selectedCountries} />
      <hr className="mt-5 mb-5" />
      <CountryList countries={countries} />
    </div>
  );
}

export default App;

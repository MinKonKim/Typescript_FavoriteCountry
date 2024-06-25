import { useEffect, useState } from "react";
import "./App.css";
import { getCountries } from "./api/countryApi";
import CountryList from "./components/CountryList";
import SelectedCountryList from "./components/SelectedCountryList";
import { CountryInfo } from "./model/countryInfo";

function App() {
  const [countries, setCountries] = useState<CountryInfo[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchCountries();
  }, []);

  const handleCountryChecked = (selectedcountry: CountryInfo) => {
    const updateCountries = countries.map((country) =>
      country.name.common === selectedcountry.name.common
        ? { ...country, checked: !country.checked }
        : country
    );
    setCountries(updateCountries);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold p-4 m-5">Favorite Contry</h1>
      <SelectedCountryList
        countries={countries.filter((country) => country.checked)}
        onCountryChecked={handleCountryChecked}
      />
      <hr className="mt-5 mb-5" />
      <h1 className="text-4xl font-bold p-4 m-5">Countries</h1>
      <CountryList
        countries={countries.filter((country) => !country.checked)}
        onCountryChecked={handleCountryChecked}
      />
    </div>
  );
}

export default App;

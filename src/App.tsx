import { useEffect, useState } from "react";
import "./App.css";
import { getCountries } from "./api/countryApi";
import CountryList from "./components/CountryList";
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
  }, []);

  // favorite 목록에 넣기
  const handleChnageChecked = (selectedcountry: CountryInfo) => {
    const updateCountries = countries.map((country) =>
      country.name.common === selectedcountry.name.common
        ? { ...country, checked: !country.checked }
        : country
    );
    setCountries(updateCountries);
    setSelectedCountries([
      ...selectedCountries,
      { ...selectedcountry, checked: !selectedcountry.checked },
    ]);
  };

  // favorite 목록에서 빼기
  const handleUnChecked = (selectedcountry: CountryInfo) => {
    handleChnageChecked(selectedcountry);

    const updatedCountries = selectedCountries.filter(
      (country) => country.name.common !== selectedcountry.name.common
    );
    setSelectedCountries(updatedCountries);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold p-4 m-5">Favorite Contry</h1>
      <CountryList
        countries={selectedCountries.filter((country) => country.checked)}
        onCountryChecked={handleUnChecked}
      />
      <hr className="mt-5 mb-5" />
      <h1 className="text-4xl font-bold p-4 m-5">Countries</h1>
      <CountryList
        countries={countries.filter((country) => !country.checked)}
        onCountryChecked={handleChnageChecked}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import useCountryQuery from "./hooks/useCountryQuery";
import { CountryInfo } from "./model/countryInfo";

function App() {
  const [selectedCountries, setSelectedCountries] = useState<CountryInfo[]>([]);

  const { data: allCountries = [], isPending, error } = useCountryQuery();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error :{error.message}</div>;
  }

  // const changeCheck = (selectedcountry: CountryInfo) => {
  //   // Update Countries 생성
  //   const updateCountries = allCountries.map((country) =>
  //     country.name.common === selectedcountry.name.common
  //       ? { ...country, checked: !country.checked }
  //       : country
  //   );
  //   // 전체 목록의 상태 변경
  //   setAllCountries(updateCountries);
  // };

  // // favorite 목록에 넣기
  // const handleChecked = (selectedcountry: CountryInfo): void => {
  //   // 선택된 국가의 checked 변경
  //   changeCheck(selectedcountry);

  //   // favorite 목록에 선택된 국가 추가
  //   setSelectedCountries([
  //     ...selectedCountries,
  //     { ...selectedcountry, checked: !selectedcountry.checked },
  //   ]);
  // };

  // // favorite 목록에서 빼기
  // const handleUnChecked = (selectedcountry: CountryInfo): void => {
  //   // 선택된 국가의 checked 변경
  //   changeCheck(selectedcountry);

  //   // 선택된 국가를 favorite 목록에서 빼기 위한 로직
  //   setSelectedCountries(
  //     selectedCountries.filter(
  //       (country) => country.name.common !== selectedcountry.name.common
  //     )
  //   );
  // };
  const isSelected = (country: CountryInfo) => {
    return !!selectedCountries.find(
      (selectedCountry) => selectedCountry.name.common === country.name.common
    );
  };

  const selectedCountry = (country: CountryInfo) => {
    setSelectedCountries((prev) => [...prev, country]);
  };

  const deselectedCountry = (country: CountryInfo) => {
    setSelectedCountries(
      selectedCountries.filter(
        (selectedCountry) => selectedCountry.name.common !== country.name.common
      )
    );
  };

  const handleCountryClick = (country: CountryInfo) => {
    isSelected(country) ? deselectedCountry(country) : selectedCountry(country);
  };

  const filteredCountries = allCountries.filter(
    (country) => !isSelected(country)
  );

  return (
    <div>
      <h1 className="text-4xl font-bold p-4 m-5">Favorite Contry</h1>
      <CountryList
        countries={filteredCountries.filter((country) => country.checked)}
        onCountryChecked={handleCountryClick}
      />
      <hr className="mt-5 mb-5" />
      <h1 className="text-4xl font-bold p-4 m-5">Countries</h1>
      <CountryList
        countries={allCountries.filter((country) => !country.checked)}
        onCountryChecked={handleCountryClick}
      />
    </div>
  );
}

export default App;

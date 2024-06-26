import { useEffect, useState } from "react";
import "./App.css";
import { getCountries } from "./api/countryApi";
import CountryList from "./components/CountryList";
import { CountryInfo } from "./model/countryInfo";

function App() {
  const [allCountries, setAllCountries] = useState<CountryInfo[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<CountryInfo[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getCountries();
      setAllCountries(response);
    };
    fetchCountries();
  }, []);

  /* 로직 설명

    1.  handleChecked 함수 내용
    1-1. checked ===false 인 국가를 선택하면,

    1-2. allCountries에 있는 '선택된 국가'의 'checked'를 true로 바꿔준 뒤, 
        => filter를 통해 랜더링 안되도록 하기 위함.

    1-3. selectedCountries 에 해당 국가를 넣어준다.
        => 선택된 순서대로 넣기 위함.
    
    ---------------------------------------
    2.  handleUnChecked 함수내용
    2-1. checked === true 인 국가를 선택하면,

    2-2. allCountries에 있는 '선택된 국가'의 'checked'를 false로 바꿔준 뒤,
        => 여기 까지가 1-2. 의 함수 내용과 유사

    2-3. selectedCountries 에 해당 국가를 삭제해 준다.
        
 */
  const changeCheck = (selectedcountry: CountryInfo) => {
    // Update Countries 생성
    const updateCountries = allCountries.map((country) =>
      country.name.common === selectedcountry.name.common
        ? { ...country, checked: !country.checked }
        : country
    );
    // 전체 목록의 상태 변경
    setAllCountries(updateCountries);
  };

  // favorite 목록에 넣기
  const handleChecked = (selectedcountry: CountryInfo): void => {
    // 선택된 국가의 checked 변경
    changeCheck(selectedcountry);

    // favorite 목록에 선택된 국가 추가
    setSelectedCountries([
      ...selectedCountries,
      { ...selectedcountry, checked: !selectedcountry.checked },
    ]);
  };

  // favorite 목록에서 빼기
  const handleUnChecked = (selectedcountry: CountryInfo): void => {
    // 선택된 국가의 checked 변경
    changeCheck(selectedcountry);

    // 선택된 국가를 favorite 목록에서 빼기 위한 로직
    setSelectedCountries(
      selectedCountries.filter(
        (country) => country.name.common !== selectedcountry.name.common
      )
    );
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
        countries={allCountries.filter((country) => !country.checked)}
        onCountryChecked={handleChecked}
      />
    </div>
  );
}

export default App;

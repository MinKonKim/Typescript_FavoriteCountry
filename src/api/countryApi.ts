import axios from "axios";
import { CountryInfo, OmitedCountryInfo } from "../model/countryInfo";

export const getCountries = async (): Promise<CountryInfo[]> => {
  try {
    const { data } = await axios.get<OmitedCountryInfo[]>(
      "https://restcountries.com/v3.1/all"
    );
    return data.map(({ name, capital, flags }) => ({
      name,
      capital,
      flags,
      checked: false,
    }));
  } catch (error) {
    console.error("Country 정보 요청 중 에러:", error);
    throw error;
  }
};

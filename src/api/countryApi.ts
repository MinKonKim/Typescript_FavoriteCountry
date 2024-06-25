import axios from "axios";
import { CountryInfo, PickedCountryInfo } from "../model/countryInfo";

export const getCountries = async (): Promise<CountryInfo[]> => {
  try {
    const { data } = await axios.get<PickedCountryInfo[]>(
      "https://restcountries.com/v3.1/all"
    );
    return data.map(({ name, capital, flags }) => ({
      name,
      capital,
      flags,
      checked: false,
    }));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

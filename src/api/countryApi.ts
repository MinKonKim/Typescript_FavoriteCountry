import axios from "axios";
import { CountryInfo } from "../model/countryInfo";

export const getCountries = async (): Promise<
  Pick<CountryInfo, "name" | "capital" | "flags">[]
> => {
  try {
    const { data } = await axios.get<CountryInfo[]>(
      "https://restcountries.com/v3.1/all"
    );
    return data.map(({ name, capital, flags }) => ({
      name,
      capital,
      flags,
      check: false,
    }));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

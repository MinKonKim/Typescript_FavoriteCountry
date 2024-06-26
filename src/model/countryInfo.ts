// api + checked
export type CountryInfo = {
  capital: string[];
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  checked: boolean;
};

// api 받기 위한 타입
export type OmitedCountryInfo = Omit<CountryInfo, "checked">;

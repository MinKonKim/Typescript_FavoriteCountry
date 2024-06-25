// api + checked
export type CountryInfo = {
  name: {
    official: string;
    common: string;
  };
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
  checked: boolean;
};

// api 받기 위한 타입
export type PickedCountryInfo = Pick<CountryInfo, "name" | "capital" | "flags">;

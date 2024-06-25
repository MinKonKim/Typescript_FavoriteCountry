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

import { COUNTRIES, Country } from './data/countries';
import { RU } from './data/countries.ru';

export const getCountries = (): Country[] => COUNTRIES;

export const getCountryByName = (name: string, locale?: string): Country => {
  let localizedCountry: Country | undefined;
  switch (locale) {
    case 'ru':
      localizedCountry = RU.find((c) => c.name === name);
      break;
    case 'en':
      localizedCountry = COUNTRIES.find((c) => c.name === name);
      break;
    default:
      localizedCountry = COUNTRIES.find((c) => c.name === name);
      break;
  }
  if (!localizedCountry) {
    throw new Error('Unknown country');
  }
  const country = locale
    ? COUNTRIES.find((c) => c.alpha2 === localizedCountry?.alpha2)
    : localizedCountry;
  if (!country) {
    throw new Error('Unknown country');
  }
  country.name = localizedCountry.name;
  country.image = `./images/${country.alpha2}.svg`;
  return country;
};

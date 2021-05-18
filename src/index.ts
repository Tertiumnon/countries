import { COUNTRIES, ICountry } from './data';
import { RU } from './localizations/data.ru';

export const getCountryByName = (name: string, locale?: string): ICountry => {
  let localizedCountry: ICountry;
  switch (locale) {
    case 'ru':
      localizedCountry = RU.find((c) => c.name === name)
      break;
    default:
      localizedCountry = COUNTRIES.find((c) => c.name === name)
      break;
  }
  if (!localizedCountry) {
    throw new Error('Unknown country');
  }
  const country = locale ? COUNTRIES.find(c => c.alpha2 === localizedCountry.alpha2) : localizedCountry;
  if (!country) {
    throw new Error('Unknown country');
  }
  country.name = localizedCountry.name;
  country.image = `./images/${country.alpha2}.svg`
  return country;
};

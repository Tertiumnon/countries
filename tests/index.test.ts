import { getCountryByName } from '../src/index';

test('find by name', () => {
  expect(getCountryByName('Afghanistan')).toEqual({
    name: 'Afghanistan',
    numeric: '004',
    alpha2: 'AF',
    alpha3: 'AFG',
    dial: '93',
    image: './images/AF.svg',
  });
});

test('find by localized name', () => {
  expect(getCountryByName('Россия', 'ru')).toEqual({
    name: 'Россия',
    numeric: '643',
    alpha2: 'RU',
    alpha3: 'RUS',
    dial: '7',
    image: './images/RU.svg',
  });
});

# Countries

*Important!* Only EN and RU - please add other languages into [GitHub repo](https://github.com/Tertiumnon/countries)!

## Get country by name

```js
const country = getCountryByName('Afghanistan');
```

Result:

```js
{
  name: 'Afghanistan',
  numeric: '004',
  alpha2: 'AF',
  alpha3: 'AFG',
  dial: '93',
  image: './images/AF.svg',
}
```

## Get country by localized name

```js
const country = getCountryByName('Россия', 'ru');
```

Result:

```js
{
  name: 'Россия',
  numeric: '643',
  alpha2: 'RU',
  alpha3: 'RUS',
  dial: '7',
  image: './images/RU.svg',
}
```

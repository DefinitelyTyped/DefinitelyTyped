import { countries, getEmojiFlag } from 'countries-list';

{
    const countryCode = 'UA';
    const country = countries[countryCode];
    const flag = getEmojiFlag(countryCode);

    flag === country.emoji;
}

import saveCsv from 'json-to-csv-export';

const data = {
    id: 1,
    'First Name': 'Blanch',
    'Last Name': 'Elby',
    Email: 'belby0@bing.com',
    Gender: 'Female',
    'IP Address': '112.81.107.207',
};

saveCsv(data); // $ExpectType void
saveCsv([data]); // $ExpectType void
saveCsv(data, 'data.csv'); // $ExpectType void
saveCsv(data, 'save.csv', ','); // $ExpectType void

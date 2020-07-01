import { CrawlerOptions, dumpLicenses } from 'npm-license-crawler';

const options: CrawlerOptions = {
    start: ['../..'],
    exclude: ['.'],
    json: 'licenses.json',
    unknown: true,
};

dumpLicenses(options, (error, res) => {
    res.name.licenses; // $ExpectType string
    res.name.licenseUrl; // $ExpectType string
    res.name.parents; // $ExpectType string
    res.name.repository; // $ExpectType string
});

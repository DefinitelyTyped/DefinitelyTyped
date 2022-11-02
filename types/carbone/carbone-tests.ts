import carbone = require('carbone');

const buffer = Buffer.alloc(1024);
const convertTo = 'pdf';
const currencySource = 'EUR';
const currencyTarget = 'PLN';
const extension = 'odt';
const lang = 'pl';
const timezone = 'Asia/Tokyo';
const tempPath = '/tmp';
const templatePath = './templates';
const factories = 2;
const startFactory = true;
const attempts = 2;

const emptyCurrencyRates = {};
const currencyRates = {
    ...emptyCurrencyRates,
    EUR: 1,
    PLN: 0.25,
};

const emptyFormatters: carbone.Formatters = {};
const formatters: carbone.Formatters = {
    ...emptyFormatters,
    json: data => JSON.stringify(data),
};

const emptyTranslations: carbone.Translations = {};
const translations: carbone.Translations = {
    ...emptyTranslations,
    en: {
        Hello: 'Hello',
        Goodbye: 'Goodbye',
    },
    pl: {
        Hello: 'Witaj',
        Goodbye: 'Do widzenia',
    },
};

const emptyData = {};
const data = {
    ...emptyData,
    b: true,
    n: 100,
    s: 'carbone',
    o: {
        field: 'value',
    },
};

const emptyEnums: carbone.Enums = {};
const enums: carbone.Enums = {
    ...emptyEnums,
    ARRAY: ['some', 'values'],
    MAP: {
        yes: 'true',
        no: 'false',
    },
};

const emptyOptions: carbone.Options = {};
const options: carbone.Options = {
    ...emptyOptions,
    tempPath,
    templatePath,
    lang,
    timezone,
    translations,
    currencySource,
    currencyTarget,
    currencyRates,
    factories,
    startFactory,
    attempts
};

const emptyRenderOptions: carbone.RenderOptions = {};
const renderOptions: carbone.RenderOptions = {
    ...emptyRenderOptions,
    complement: data,
    convertTo,
    currencyRates,
    currencySource,
    currencyTarget,
    enum: enums,
    lang,
    timezone,
    translations,
    variableStr: '',
};

const variables: carbone.Variable[] = [
    {
        code: 'code1',
        name: 'name1',
        regex: /^/,
    },
    {
        code: 'code2',
        name: 'name2',
        regex: /$/,
    },
];

const emptyRenderXMLOptions: carbone.RenderXMLOptions = {};
const renderXMLOptions: carbone.RenderXMLOptions = {
    ...emptyRenderXMLOptions,
    complement: data,
    formatters,
    lang,
    timezone,
    translations,
    existingVariables: variables,
    extension,
};

carbone.set(emptyOptions);
carbone.set(options);
carbone.reset();

carbone.addFormatters(formatters);

carbone.addTemplate('xml', '<xml>', err => {});
carbone.removeTemplate('xml', err => {});

const conversionFormats: carbone.ConversionFormat[] = carbone.listConversionFormats('document');

carbone.render('./template.odf', data, renderOptions, (err, result: Buffer | string, reportName: string) => {});
carbone.render('./template.odf', data, (err, result: Buffer | string, reportName: string) => {});

carbone.renderXML('<xml>', data, renderXMLOptions, (err, result: Buffer | string) => {});
carbone.renderXML('<xml>', data, (err, result: Buffer | string) => {});

carbone.convert(buffer, 'pdf', {}, (err, result: Buffer) => {});
carbone.convert(buffer, 'pdf', (err, result: Buffer) => {});

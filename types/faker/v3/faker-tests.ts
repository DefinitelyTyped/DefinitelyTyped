

let resultStr: string;
let resultBool: boolean;
let resultNum: number;
let resultStrArr: string[];
let resultDate: Date;

import faker = require('faker');
faker.locale = 'en';

resultStr = faker.address.zipCode();
resultStr = faker.address.zipCode('###');
resultStr = faker.address.city();
resultStr = faker.address.city(0);
resultStr = faker.address.cityPrefix();
resultStr = faker.address.citySuffix();
resultStr = faker.address.streetName();
resultStr = faker.address.streetAddress();
resultStr = faker.address.streetAddress(false);;
resultStr = faker.address.streetSuffix();
resultStr = faker.address.streetPrefix();
resultStr = faker.address.secondaryAddress();
resultStr = faker.address.county();
resultStr = faker.address.country();
resultStr = faker.address.countryCode();
resultStr = faker.address.state();
resultStr = faker.address.state(false);
resultStr = faker.address.stateAbbr();
resultStr = faker.address.latitude();
resultStr = faker.address.longitude();

resultStr = faker.commerce.color();
resultStr = faker.commerce.department();
resultStr = faker.commerce.productName();
resultStr = faker.commerce.price();
resultStr = faker.commerce.price(0, 0, 0, '#');
resultStr = faker.commerce.productAdjective();
resultStr = faker.commerce.productMaterial();
resultStr = faker.commerce.product();

resultStrArr = faker.company.suffixes();
resultStr = faker.company.companyName();
resultStr = faker.company.companyName(0);
resultStr = faker.company.companySuffix();
resultStr = faker.company.catchPhrase();
resultStr = faker.company.bs();
resultStr = faker.company.catchPhraseAdjective();
resultStr = faker.company.catchPhraseDescriptor();
resultStr = faker.company.catchPhraseNoun();
resultStr = faker.company.bsAdjective();
resultStr = faker.company.bsBuzz();
resultStr = faker.company.bsNoun();

resultDate = faker.date.past();
resultDate = faker.date.future();
resultDate = faker.date.between('foo', 'bar');
resultDate = faker.date.between(new Date(), new Date());
resultDate = faker.date.recent();
resultDate = faker.date.recent(100);
resultStr = faker.date.month();
resultStr = faker.date.month({
    abbr: true,
    context: true
});
resultStr = faker.date.weekday();
resultStr = faker.date.weekday({
    abbr: true,
    context: true
});

resultStr = faker.finance.account();
resultStr = faker.finance.account(0);
resultStr = faker.finance.accountName();
resultStr = faker.finance.mask();
resultStr = faker.finance.mask(0, false, false);
resultStr = faker.finance.amount();
resultStr = faker.finance.amount(0, 0, 0, '#');
resultStr = faker.finance.transactionType();
resultStr = faker.finance.currencyCode();
resultStr = faker.finance.currencyName();
resultStr = faker.finance.currencySymbol();

resultStr = faker.hacker.abbreviation();
resultStr = faker.hacker.adjective();
resultStr = faker.hacker.noun();
resultStr = faker.hacker.verb();
resultStr = faker.hacker.ingverb();
resultStr = faker.hacker.phrase();

resultStr = faker.helpers.randomize();
resultNum = faker.helpers.randomize([1,2,3,4]);
resultStr = faker.helpers.randomize(['foo', 'bar', 'quux']);
resultStr = faker.helpers.slugify('foo bar quux');
resultStr = faker.helpers.replaceSymbolWithNumber('foo# bar#');
resultStr = faker.helpers.replaceSymbols('foo# bar? quux#');
resultStrArr = faker.helpers.shuffle(['foo', 'bar', 'quux']);
resultStr = faker.helpers.mustache('{{foo}}{{bar}}', {foo: 'x', bar: 'y'});

const card = faker.helpers.createCard();
resultStr = card.name;
resultStr = card.address.streetA;
const contextualCard = faker.helpers.contextualCard();
resultStr = contextualCard.name;
resultStr = contextualCard.address.suite;
const userCard = faker.helpers.userCard();
resultStr = userCard.name;
resultStr = userCard.address.suite;

resultStr = faker.internet.avatar();
resultStr = faker.internet.email();
resultStr = faker.internet.email('foo', 'bar', 'quux');
resultStr = faker.internet.protocol();
resultStr = faker.internet.url();
resultStr = faker.internet.domainName();
resultStr = faker.internet.domainSuffix();
resultStr = faker.internet.domainWord();
resultStr = faker.internet.ip();
resultStr = faker.internet.userAgent();
resultStr = faker.internet.color();
resultStr = faker.internet.color(0, 0, 0);
resultStr = faker.internet.mac();
resultStr = faker.internet.password();
resultStr = faker.internet.password(0, false, '#', 'foo');

resultStr = faker.lorem.word();
resultStr = faker.lorem.words();
resultStr = faker.lorem.words(0);
resultStr = faker.lorem.sentence();
resultStr = faker.lorem.sentence(0, 0);
resultStr = faker.lorem.sentences();
resultStr = faker.lorem.sentences(0);
resultStr = faker.lorem.paragraph();
resultStr = faker.lorem.paragraph(0);
resultStr = faker.lorem.paragraphs();
resultStr = faker.lorem.paragraphs(0, '');

resultStr = faker.name.firstName();
resultStr = faker.name.firstName(0);
resultStr = faker.name.lastName();
resultStr = faker.name.lastName(0);
resultStr = faker.name.findName();
resultStr = faker.name.findName('', '', 0);
resultStr = faker.name.jobTitle();
resultStr = faker.name.prefix();
resultStr = faker.name.suffix();
resultStr = faker.name.title();
resultStr = faker.name.jobDescriptor();
resultStr = faker.name.jobArea();
resultStr = faker.name.jobType();

resultStr = faker.phone.phoneNumber();
resultStr = faker.phone.phoneNumber('#');
resultStr = faker.phone.phoneNumberFormat();
// https://github.com/Marak/faker.js/blob/master/lib/phone_number.js#L9-L13
resultStr = faker.phone.phoneNumberFormat(0);
resultStr = faker.phone.phoneFormats();

resultNum = faker.random.number();
resultNum = faker.random.number(0);
resultNum = faker.random.number({
    min: 0,
    max: 0,
    precision: 0
});
resultStr = faker.random.arrayElement();
resultStr = faker.random.arrayElement(['foo', 'bar', 'quux'])
resultStr = faker.random.arrayElement(['foo', 'bar', 'quux'] as ReadonlyArray<string>);
resultStr = faker.random.objectElement();
resultStr = faker.random.objectElement({foo: 'bar', field: 'foo'});
resultStr = faker.random.uuid();
resultBool = faker.random.boolean();

resultStr = faker.system.fileName( "foo", "bar" );
resultStr = faker.system.commonFileName( "foo", "bar" );
resultStr = faker.system.mimeType();
resultStr = faker.system.commonFileType();
resultStr = faker.system.commonFileExt();
resultStr = faker.system.fileType();
resultStr = faker.system.fileExt( "foo" );
resultStr = faker.system.semver();

import fakerEn = require('faker/locale/en');
resultStr = faker.name.firstName();

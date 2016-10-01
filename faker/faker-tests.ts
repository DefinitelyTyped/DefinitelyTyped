/// <reference path="faker.d.ts" />

import faker = require('faker');

faker.address.zipCode();
faker.address.zipCode('###');
faker.address.city();
faker.address.city(0);
faker.address.cityPrefix();
faker.address.citySuffix();
faker.address.streetName();
faker.address.streetAddress();
faker.address.streetAddress(false);;
faker.address.streetSuffix();
faker.address.streetPrefix();
faker.address.secondaryAddress();
faker.address.county();
faker.address.country();
faker.address.countryCode();
faker.address.state();
faker.address.state(false);
faker.address.stateAbbr();
faker.address.latitude();
faker.address.longitude();

faker.commerce.color();
faker.commerce.department();
faker.commerce.productName();
faker.commerce.price();
faker.commerce.price(0, 0, 0, '#');
faker.commerce.productAdjective();
faker.commerce.productMaterial();
faker.commerce.product();

faker.company.suffixes();
faker.company.companyName();
faker.company.companyName(0);
faker.company.companySuffix();
faker.company.catchPhrase();
faker.company.bs();
faker.company.catchPhraseAdjective();
faker.company.catchPhraseDescriptor();
faker.company.catchPhraseNoun();
faker.company.bsAdjective();
faker.company.bsBuzz();
faker.company.bsNoun();

faker.date.past();
faker.date.future();
faker.date.between('foo', 'bar');
faker.date.between(new Date(), new Date());
faker.date.recent();
faker.date.recent(100);
faker.date.month();
faker.date.month({
	abbr: true,
	context: true
});
faker.date.weekday();
faker.date.weekday({
	abbr: true,
	context: true
});

faker.finance.account();
faker.finance.account(0);
faker.finance.accountName();
faker.finance.mask();
faker.finance.mask(0, false, false);
faker.finance.amount();
faker.finance.amount(0, 0, 0, '#');
faker.finance.transactionType();
faker.finance.currencyCode();
faker.finance.currencyName();
faker.finance.currencySymbol();

faker.hacker.abbreviation();
faker.hacker.adjective();
faker.hacker.noun();
faker.hacker.verb();
faker.hacker.ingverb();
faker.hacker.phrase();

faker.helpers.randomize();
faker.helpers.randomize([1,2,3,4]);
faker.helpers.randomize(['foo', 'bar', 'quux']);
faker.helpers.slugify('foo bar quux');
faker.helpers.replaceSymbolWithNumber('foo# bar#');
faker.helpers.replaceSymbols('foo# bar? quux#');
faker.helpers.shuffle(['foo', 'bar', 'quux']);
faker.helpers.mustache('{{foo}}{{bar}}', {foo: 'x', bar: 'y'});
faker.helpers.createCard();
faker.helpers.contextualCard();
faker.helpers.userCard();

faker.internet.avatar();
faker.internet.email();
faker.internet.email('foo', 'bar', 'quux');
faker.internet.protocol();
faker.internet.url();
faker.internet.domainName();
faker.internet.domainSuffix();
faker.internet.domainWord();
faker.internet.ip();
faker.internet.userAgent();
faker.internet.color();
faker.internet.color(0, 0, 0);
faker.internet.mac();
faker.internet.password();
faker.internet.password(0, false, '#', 'foo');

faker.lorem.words();
faker.lorem.words(0);
faker.lorem.sentence();
faker.lorem.sentence(0, 0);
faker.lorem.sentences();
faker.lorem.sentences(0);
faker.lorem.paragraph();
faker.lorem.paragraph(0);
faker.lorem.paragraphs();
faker.lorem.paragraphs(0, '');

faker.name.firstName();
faker.name.firstName(0);
faker.name.lastName();
faker.name.lastName(0);
faker.name.findName();
faker.name.findName('', '', 0);
faker.name.jobTitle();
faker.name.prefix();
faker.name.suffix();
faker.name.title();
faker.name.jobDescriptor();
faker.name.jobArea();
faker.name.jobType();

faker.phone.phoneNumber();
faker.phone.phoneNumber('#');
faker.phone.phoneNumberFormat();
// https://github.com/Marak/faker.js/blob/master/lib/phone_number.js#L9-L13
faker.phone.phoneNumberFormat(0);
faker.phone.phoneFormats();

faker.random.number();
faker.random.number(0);
faker.random.number({
	min: 0,
	max: 0,
	precision: 0
});
faker.random.arrayElement();
faker.random.arrayElement(['foo', 'bar', 'quux'])
faker.random.objectElement();
faker.random.objectElement({foo: 'bar', field: 'foo'});
faker.random.uuid();
faker.random.boolean();
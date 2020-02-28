let resultStr: string;
let resultBool: boolean;
let resultNum: number;
let resultStrArr: string[];
let resultDate: Date;

import faker = require('faker');
faker.locale = 'en';

faker.seedValue === undefined;
faker.seed(123);
faker.seedValue === 123;

resultStr = faker.address.zipCode();
resultStr = faker.address.zipCode('###');
resultStr = faker.address.city();
resultStr = faker.address.city(0);
resultStr = faker.address.cityPrefix();
resultStr = faker.address.citySuffix();
resultStr = faker.address.streetName();
resultStr = faker.address.streetAddress();
resultStr = faker.address.streetAddress(false);
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

resultStr = faker.database.column();
resultStr = faker.database.type();
resultStr = faker.database.collation();
resultStr = faker.database.engine();

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
resultStr = faker.finance.routingNumber();
resultStr = faker.finance.mask();
resultStr = faker.finance.mask(0, false, false);
resultStr = faker.finance.amount();
resultStr = faker.finance.amount(0, 0, 0, '#');
resultStr = faker.finance.transactionType();
resultStr = faker.finance.currencyCode();
resultStr = faker.finance.currencyName();
resultStr = faker.finance.currencySymbol();
resultStr = faker.finance.bitcoinAddress();
resultStr = faker.finance.iban();
resultStr = faker.finance.iban(true);
resultStr = faker.finance.bic();

resultStr = faker.git.branch();
resultStr = faker.git.commitEntry();
resultStr = faker.git.commitEntry({ merge: true });
resultStr = faker.git.commitMessage();
resultStr = faker.git.commitSha();
resultStr = faker.git.shortSha();

resultStr = faker.hacker.abbreviation();
resultStr = faker.hacker.adjective();
resultStr = faker.hacker.noun();
resultStr = faker.hacker.verb();
resultStr = faker.hacker.ingverb();
resultStr = faker.hacker.phrase();

resultStr = faker.helpers.randomize();
resultNum = faker.helpers.randomize([1, 2, 3, 4]);
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
resultStr = contextualCard.avatar;
resultStr = contextualCard.address.suite;
const userCard = faker.helpers.userCard();
resultStr = userCard.name;
resultStr = userCard.address.suite;

resultStr = faker.internet.avatar();
resultStr = faker.internet.email();
resultStr = faker.internet.email('foo', 'bar', 'quux');
resultStr = faker.internet.exampleEmail();
resultStr = faker.internet.exampleEmail('foo', 'bar');
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
resultStr = faker.lorem.slug();
resultStr = faker.lorem.slug(0);
resultStr = faker.lorem.sentences();
resultStr = faker.lorem.sentences(0);
resultStr = faker.lorem.paragraph();
resultStr = faker.lorem.paragraph(0);
resultStr = faker.lorem.paragraphs();
resultStr = faker.lorem.paragraphs(0, '');
resultStr = faker.lorem.text();
resultStr = faker.lorem.text(0);
resultStr = faker.lorem.lines();
resultStr = faker.lorem.lines(0);

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
resultStr = faker.random.arrayElement(['foo', 'bar', 'quux']);
resultStr = faker.random.arrayElement(['foo', 'bar', 'quux'] as ReadonlyArray<string>);
resultStr = faker.random.objectElement();
resultStr = faker.random.objectElement({foo: 'bar', field: 'foo'});
resultStr = faker.random.uuid();
resultBool = faker.random.boolean();
resultStr = faker.random.word();
resultStr = faker.random.word("noun");
resultStr = faker.random.words();
resultStr = faker.random.words(0);
resultStr = faker.random.image();
resultStr = faker.random.locale();
resultStr = faker.random.alphaNumeric();
resultStr = faker.random.alphaNumeric(0);

resultStr = faker.system.fileName("foo", "bar");
resultStr = faker.system.commonFileName("foo", "bar");
resultStr = faker.system.mimeType();
resultStr = faker.system.commonFileType();
resultStr = faker.system.commonFileExt();
resultStr = faker.system.fileType();
resultStr = faker.system.fileExt("foo");
resultStr = faker.system.directoryPath();
resultStr = faker.system.filePath();
resultStr = faker.system.semver();

resultStr = faker.vehicle.vehicle();
resultStr = faker.vehicle.manufacturer();
resultStr = faker.vehicle.model();
resultStr = faker.vehicle.type();
resultStr = faker.vehicle.fuel();
resultStr = faker.vehicle.vin();
resultStr = faker.vehicle.color();

import fakerAz = require('faker/locale/az');
resultStr = fakerAz.name.firstName();
import fakerCz = require('faker/locale/cz');
resultStr = fakerCz.name.firstName();
import fakerDe = require('faker/locale/de');
resultStr = fakerDe.name.firstName();
import fakerDeAT = require('faker/locale/de_AT');
resultStr = fakerDeAT.name.firstName();
import fakerdeCH = require('faker/locale/de_CH');
resultStr = fakerdeCH.name.firstName();
import fakerEn = require('faker/locale/en');
resultStr = fakerEn.name.firstName();
import fakerEnAU = require('faker/locale/en_AU');
resultStr = fakerEnAU.name.firstName();
import fakerEnBORK = require('faker/locale/en_BORK');
resultStr = fakerEnBORK.name.firstName();
import fakerEnCA = require('faker/locale/en_CA');
resultStr = fakerEnCA.name.firstName();
import fakerEnGB = require('faker/locale/en_GB');
resultStr = fakerEnGB.name.firstName();
import fakerEnIE = require('faker/locale/en_IE');
resultStr = fakerEnIE.name.firstName();
import fakerEnIND = require('faker/locale/en_IND');
resultStr = fakerEnIND.name.firstName();
import fakerEnUS = require('faker/locale/en_US');
resultStr = fakerEnUS.name.firstName();
import fakerEnAuOcker = require('faker/locale/en_au_ocker');
resultStr = fakerEnAuOcker.name.firstName();
import fakerEs = require('faker/locale/es');
resultStr = fakerEs.name.firstName();
import fakerEsMX = require('faker/locale/es_MX');
resultStr = fakerEsMX.name.firstName();
import fakerFa = require('faker/locale/fa');
resultStr = fakerFa.name.firstName();
import fakerFr = require('faker/locale/fr');
resultStr = fakerFr.name.firstName();
import fakerFrCA = require('faker/locale/fr_CA');
resultStr = fakerFrCA.name.firstName();
import fakerGe = require('faker/locale/ge');
resultStr = fakerGe.name.firstName();
import fakerIdID = require('faker/locale/id_ID');
resultStr = fakerIdID.name.firstName();
import fakerIt = require('faker/locale/it');
resultStr = fakerIt.name.firstName();
import fakerJa = require('faker/locale/ja');
resultStr = fakerJa.name.firstName();
import fakerKo = require('faker/locale/ko');
resultStr = fakerKo.name.firstName();
import fakerNbNO = require('faker/locale/nb_NO');
resultStr = fakerNbNO.name.firstName();
import fakerNep = require('faker/locale/nep');
resultStr = fakerNep.name.firstName();
import fakerNl = require('faker/locale/nl');
resultStr = fakerNl.name.firstName();
import fakerPl = require('faker/locale/pl');
resultStr = fakerPl.name.firstName();
import fakerPtBR = require('faker/locale/pt_BR');
resultStr = fakerPtBR.name.firstName();
import fakerRu = require('faker/locale/ru');
resultStr = fakerRu.name.firstName();
import fakerSk = require('faker/locale/sk');
resultStr = fakerSk.name.firstName();
import fakerSv = require('faker/locale/sv');
resultStr = fakerSv.name.firstName();
import fakerTr = require('faker/locale/tr');
resultStr = fakerTr.name.firstName();
import fakerUk = require('faker/locale/uk');
resultStr = fakerUk.name.firstName();
import fakerVi = require('faker/locale/vi');
resultStr = fakerVi.name.firstName();
import fakerZhCN = require('faker/locale/zh_CN');
resultStr = fakerZhCN.name.firstName();
import fakerZhTW = require('faker/locale/zh_TW');
resultStr = fakerZhTW.name.firstName();

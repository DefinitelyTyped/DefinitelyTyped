import faker = require("faker");
import Faker = require("faker/lib");

Faker; // $ExpectType typeof Faker

let resultStr: string;
let resultBool: boolean;
let resultNum: number;
let resultStrArr: string[];
let resultStrNumArray: Array<string | number>;
let resultDate: Date;

faker.locale = "en";

faker.seedValue === undefined;
faker.seed(123);
faker.seedValue === 123;

resultStr = faker.address.zipCodeByState("foo");
resultStr = faker.address.zipCode();
resultStr = faker.address.zipCode("###");
resultStr = faker.address.city();
resultStr = faker.address.city('{{name.lastName}}{{address.citySuffix}}');
resultStr = faker.address.cityName();
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
resultStr = faker.address.countryCode("foo");
resultStr = faker.address.state();
resultStr = faker.address.state(false);
resultStr = faker.address.stateAbbr();
resultStr = faker.address.latitude();
resultStr = faker.address.latitude(0, 0);
resultStr = faker.address.longitude();
resultStr = faker.address.longitude(0, 0);
resultStr = faker.address.direction();
resultStr = faker.address.direction(true);
resultStr = faker.address.cardinalDirection();
resultStr = faker.address.cardinalDirection(true);
resultStr = faker.address.ordinalDirection();
resultStr = faker.address.ordinalDirection(true);
resultStrArr = faker.address.nearbyGPSCoordinate();
resultStrArr = faker.address.nearbyGPSCoordinate(["0", "0"], 0, true);
resultStrArr = faker.address.nearbyGPSCoordinate([0, 0], 0, true);
resultStr = faker.address.timeZone();

resultStr = faker.commerce.color();
resultStr = faker.commerce.department();
resultStr = faker.commerce.productName();
resultStr = faker.commerce.price();
resultStr = faker.commerce.price(0, 0, 0, "#");
resultStr = faker.commerce.productAdjective();
resultStr = faker.commerce.productMaterial();
resultStr = faker.commerce.product();
resultStr = faker.commerce.productDescription();

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

resultNum = faker.datatype.number();
resultNum = faker.datatype.number(0);
resultNum = faker.datatype.number({
    min: 0,
    max: 0,
    precision: 0,
});
resultNum = faker.datatype.float();
resultNum = faker.datatype.float(0);
resultNum = faker.datatype.float({
    min: 0,
    max: 0,
    precision: 0,
});
resultDate = faker.datatype.datetime();
resultDate = faker.datatype.datetime(0);
resultDate = faker.datatype.datetime({
    min: 0,
    max: 0,
});
resultStr = faker.datatype.string();
resultStr = faker.datatype.string(0);
resultStr = faker.datatype.uuid();
resultBool = faker.datatype.boolean();
resultStr = faker.datatype.hexaDecimal();
resultStr = faker.datatype.hexaDecimal(0);
resultStr = faker.datatype.json();
resultStrNumArray = faker.datatype.array();
resultStrNumArray = faker.datatype.array(0);

resultDate = faker.date.past();
resultDate = faker.date.future();
resultDate = faker.date.between("foo", "bar");
resultDate = faker.date.between(new Date(), new Date());
resultDate = faker.date.recent();
resultDate = faker.date.recent(100, new Date());
resultDate = faker.date.soon();
resultDate = faker.date.soon(100, new Date());
resultStr = faker.date.month();
resultStr = faker.date.month({
    abbr: true,
    context: true,
});
resultStr = faker.date.weekday();
resultStr = faker.date.weekday({
    abbr: true,
    context: true,
});

resultStr = faker.finance.account();
resultStr = faker.finance.account(0);
resultStr = faker.finance.accountName();
resultStr = faker.finance.routingNumber();
resultStr = faker.finance.mask();
resultStr = faker.finance.mask(0, false, false);
resultStr = faker.finance.amount();
resultStr = faker.finance.amount(0, 0, 0, "#");
resultStr = faker.finance.transactionType();
resultStr = faker.finance.currencyCode();
resultStr = faker.finance.currencyName();
resultStr = faker.finance.currencySymbol();
resultStr = faker.finance.bitcoinAddress();
resultStr = faker.finance.litecoinAddress();
resultStr = faker.finance.creditCardNumber();
resultStr = faker.finance.creditCardNumber("foo");
resultStr = faker.finance.creditCardCVV();
resultStr = faker.finance.ethereumAddress();
resultStr = faker.finance.iban();
resultStr = faker.finance.iban(true);
resultStr = faker.finance.bic();
resultStr = faker.finance.transactionDescription();

resultStr = faker.hacker.abbreviation();
resultStr = faker.hacker.adjective();
resultStr = faker.hacker.noun();
resultStr = faker.hacker.verb();
resultStr = faker.hacker.ingverb();
resultStr = faker.hacker.phrase();

resultStr = faker.helpers.randomize();
resultNum = faker.helpers.randomize([1, 2, 3, 4]);
resultStr = faker.helpers.randomize(["foo", "bar", "quux"]);
resultStr = faker.helpers.slugify("foo bar quux");
resultStr = faker.helpers.replaceSymbolWithNumber("foo# bar#");
resultStr = faker.helpers.replaceSymbols("foo# bar? quux#");
resultStr = faker.helpers.replaceCreditCardSymbols();
resultStr = faker.helpers.replaceCreditCardSymbols("foo#", "*");
resultStr = faker.helpers.repeatString("foo", 2);
resultStr = faker.helpers.regexpStyleStringParse("foo");
resultStrArr = faker.helpers.shuffle(["foo", "bar", "quux"]);
resultStr = faker.helpers.mustache("{{foo}}{{bar}}", { foo: "x", bar: "y" });

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

resultStr = faker.image.abstract();
resultStr = faker.image.abstract(0, 0);
resultStr = faker.image.animals();
resultStr = faker.image.animals(0, 0);
resultStr = faker.image.avatar();
resultStr = faker.image.business();
resultStr = faker.image.business(0, 0);
resultStr = faker.image.cats();
resultStr = faker.image.cats(0, 0);
resultStr = faker.image.city();
resultStr = faker.image.city(0, 0);
resultStr = faker.image.dataUri();
resultStr = faker.image.dataUri(0, 0, "blue");
resultStr = faker.image.fashion();
resultStr = faker.image.fashion(0, 0);
resultStr = faker.image.food();
resultStr = faker.image.food(0, 0);
resultStr = faker.image.image();
resultStr = faker.image.imageUrl();
resultStr = faker.image.imageUrl(0, 0, "cats", true, true);
resultStr = faker.image.nature();
resultStr = faker.image.nature(0, 0);
resultStr = faker.image.nightlife();
resultStr = faker.image.nightlife(0, 0);
resultStr = faker.image.people();
resultStr = faker.image.people(0, 0);
resultStr = faker.image.sports();
resultStr = faker.image.sports(0, 0);
resultStr = faker.image.technics();
resultStr = faker.image.technics(0, 0);
resultStr = faker.image.transport();
resultStr = faker.image.transport(0, 0);

resultStr = faker.internet.avatar();
resultStr = faker.internet.email();
resultStr = faker.internet.email("foo", "bar", "quux");
resultStr = faker.internet.exampleEmail();
resultStr = faker.internet.exampleEmail("foo", "bar");
resultStr = faker.internet.protocol();
resultStr = faker.internet.url();
resultStr = faker.internet.domainName();
resultStr = faker.internet.domainSuffix();
resultStr = faker.internet.domainWord();
resultStr = faker.internet.ip();
resultNum = faker.internet.port();
resultStr = faker.internet.userAgent();
resultStr = faker.internet.color();
resultStr = faker.internet.color(0, 0, 0);
resultStr = faker.internet.mac();
resultStr = faker.internet.mac("#");
resultStr = faker.internet.password();
resultStr = faker.internet.password(0, false, "#", "foo");

resultStr = faker.lorem.word();
resultStr = faker.lorem.word(0);
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
resultStr = faker.lorem.paragraphs(0, "");
resultStr = faker.lorem.text();
resultStr = faker.lorem.text(0);
resultStr = faker.lorem.lines();
resultStr = faker.lorem.lines(0);

resultStr = faker.music.genre();

resultStr = faker.name.firstName();
resultStr = faker.name.firstName(0);
resultStr = faker.name.lastName();
resultStr = faker.name.lastName(0);
resultStr = faker.name.middleName();
resultStr = faker.name.middleName(0);
resultStr = faker.name.findName();
resultStr = faker.name.findName("", "", 0);
resultStr = faker.name.jobTitle();
resultStr = faker.name.prefix();
resultStr = faker.name.suffix();
resultStr = faker.name.title();
resultStr = faker.name.jobDescriptor();
resultStr = faker.name.jobArea();
resultStr = faker.name.jobType();

resultStr = faker.phone.phoneNumber();
resultStr = faker.phone.phoneNumber("#");
resultStr = faker.phone.phoneNumberFormat();
resultStr = faker.phone.phoneNumberFormat(0);
resultStr = faker.phone.phoneFormats();

resultNum = faker.random.number();
resultNum = faker.random.number(0);
resultNum = faker.random.number({
    min: 0,
    max: 0,
    precision: 0,
});
resultNum = faker.random.float();
resultNum = faker.random.float(0);
resultNum = faker.random.float({
    min: 0,
    max: 0,
    precision: 0,
});
resultStr = faker.random.arrayElement();
resultStr = faker.random.arrayElement(["foo", "bar", "quux"]);
resultStr = faker.random.arrayElement(["foo", "bar", "quux"] as ReadonlyArray<string>);
resultStrArr = faker.random.arrayElements();
resultStrArr = faker.random.arrayElements(["foo", "bar", "quux"]);
(resultStrArr as ReadonlyArray<string>) = faker.random.arrayElements(["foo", "bar", "quux"] as ReadonlyArray<string>);
resultStr = faker.random.objectElement();
resultStr = faker.random.objectElement({ foo: "bar", field: "foo" });
resultStr = faker.random.uuid();
resultBool = faker.random.boolean();
resultStr = faker.random.word();
resultStr = faker.random.word("noun");
resultStr = faker.random.words();
resultStr = faker.random.words(0);
resultStr = faker.random.image();
resultStr = faker.random.locale();
resultStr = faker.random.alpha();
resultStr = faker.random.alpha({ count: 0, upcase: false });
resultStr = faker.random.alphaNumeric();
resultStr = faker.random.alphaNumeric(0);
resultStr = faker.random.hexaDecimal();
resultStr = faker.random.hexaDecimal(0);

resultStr = faker.system.fileName();
resultStr = faker.system.commonFileName();
resultStr = faker.system.commonFileName('foo');
resultStr = faker.system.mimeType();
resultStr = faker.system.commonFileType();
resultStr = faker.system.commonFileExt();
resultStr = faker.system.fileType();
resultStr = faker.system.fileExt();
resultStr = faker.system.fileExt('foo');
resultStr = faker.system.directoryPath();
resultStr = faker.system.filePath();
resultStr = faker.system.semver();

resultNum = faker.time.recent();
resultNum = faker.time.recent("unix");
resultStr = faker.time.recent("abbr");
resultStr = faker.time.recent("wide");

resultStr = faker.vehicle.vehicle();
resultStr = faker.vehicle.manufacturer();
resultStr = faker.vehicle.model();
resultStr = faker.vehicle.type();
resultStr = faker.vehicle.fuel();
resultStr = faker.vehicle.vin();
resultStr = faker.vehicle.color();
resultStr = faker.vehicle.vrm();
resultStr = faker.vehicle.bicycle();

resultNum = faker.unique(faker.random.number);
resultNum = faker.unique(faker.random.number, undefined, { maxTime: new Date("3000-01-01").getTime() });
resultNum = faker.unique(faker.random.number, undefined, { maxRetries: 999 });
resultNum = faker.unique(faker.random.number, [{ min: 0, max: 100, precision: 2 }]);
resultStr = faker.unique(faker.random.word);
resultStr = faker.unique(faker.random.word, ["noun"]);
resultStr = faker.unique(faker.random.words, [10]);
resultDate = faker.unique(faker.date.past);
resultDate = faker.unique<typeof faker.date.between>(faker.date.between, ["foo", "bar"]);
resultDate = faker.unique(faker.date.between, [new Date(), new Date()]);
resultDate = faker.unique(faker.date.soon, [100, new Date()]);

// locale test
import faker_af_ZA = require("faker/locale/af_ZA");
resultStr = faker_af_ZA.name.firstName();
import faker_ar = require("faker/locale/ar");
resultStr = faker_ar.name.firstName();
import faker_az = require("faker/locale/az");
resultStr = faker_az.name.firstName();
import faker_cz = require("faker/locale/cz");
resultStr = faker_cz.name.firstName();
import faker_de = require("faker/locale/de");
resultStr = faker_de.name.firstName();
import faker_de_AT = require("faker/locale/de_AT");
resultStr = faker_de_AT.name.firstName();
import faker_de_CH = require("faker/locale/de_CH");
resultStr = faker_de_CH.name.firstName();
import faker_el = require("faker/locale/el");
resultStr = faker_el.name.firstName();
import faker_en = require("faker/locale/en");
resultStr = faker_en.name.firstName();
import faker_en_AU = require("faker/locale/en_AU");
resultStr = faker_en_AU.name.firstName();
import faker_en_AU_ocker = require("faker/locale/en_AU_ocker");
resultStr = faker_en_AU_ocker.name.firstName();
import faker_en_BORK = require("faker/locale/en_BORK");
resultStr = faker_en_BORK.name.firstName();
import faker_en_CA = require("faker/locale/en_CA");
resultStr = faker_en_CA.name.firstName();
import faker_en_GB = require("faker/locale/en_GB");
resultStr = faker_en_GB.name.firstName();
import faker_en_GH = require("faker/locale/en_GH");
resultStr = faker_en_GH.name.firstName();
import faker_en_IE = require("faker/locale/en_IE");
resultStr = faker_en_IE.name.firstName();
import faker_en_IND = require("faker/locale/en_IND");
resultStr = faker_en_IND.name.firstName();
import faker_en_NG = require("faker/locale/en_NG");
resultStr = faker_en_NG.name.firstName();
import faker_en_US = require("faker/locale/en_US");
resultStr = faker_en_US.name.firstName();
import faker_en_ZA = require("faker/locale/en_ZA");
resultStr = faker_en_ZA.name.firstName();
import faker_es = require("faker/locale/es");
resultStr = faker_es.name.firstName();
import faker_es_MX = require("faker/locale/es_MX");
resultStr = faker_es_MX.name.firstName();
import faker_fa = require("faker/locale/fa");
resultStr = faker_fa.name.firstName();
import faker_fi = require("faker/locale/fi");
resultStr = faker_fi.name.firstName();
import faker_fr = require("faker/locale/fr");
resultStr = faker_fr.name.firstName();
import faker_fr_CA = require("faker/locale/fr_CA");
resultStr = faker_fr_CA.name.firstName();
import faker_fr_CH = require("faker/locale/fr_CH");
resultStr = faker_fr_CH.name.firstName();
import faker_ge = require("faker/locale/ge");
resultStr = faker_ge.name.firstName();
import faker_he = require("faker/locale/he");
resultStr = faker_he.name.firstName();
import faker_hr = require("faker/locale/hr");
resultStr = faker_hr.name.firstName();
import faker_hy = require("faker/locale/hy");
resultStr = faker_hy.name.firstName();
import faker_id_ID = require("faker/locale/id_ID");
resultStr = faker_id_ID.name.firstName();
import faker_it = require("faker/locale/it");
resultStr = faker_it.name.firstName();
import faker_ja = require("faker/locale/ja");
resultStr = faker_ja.name.firstName();
import faker_ko = require("faker/locale/ko");
resultStr = faker_ko.name.firstName();
import faker_nb_NO = require("faker/locale/nb_NO");
resultStr = faker_nb_NO.name.firstName();
import faker_ne = require("faker/locale/ne");
resultStr = faker_ne.name.firstName();
import faker_nl = require("faker/locale/nl");
resultStr = faker_nl.name.firstName();
import faker_nl_BE = require("faker/locale/nl_BE");
resultStr = faker_nl_BE.name.firstName();
import faker_pl = require("faker/locale/pl");
resultStr = faker_pl.name.firstName();
import faker_pt_BR = require("faker/locale/pt_BR");
resultStr = faker_pt_BR.name.firstName();
import faker_pt_PT = require("faker/locale/pt_PT");
resultStr = faker_pt_PT.name.firstName();
import faker_ro = require("faker/locale/ro");
resultStr = faker_ro.name.firstName();
import faker_ru = require("faker/locale/ru");
resultStr = faker_ru.name.firstName();
import faker_sk = require("faker/locale/sk");
resultStr = faker_sk.name.firstName();
import faker_sv = require("faker/locale/sv");
resultStr = faker_sv.name.firstName();
import faker_tr = require("faker/locale/tr");
resultStr = faker_tr.name.firstName();
import faker_uk = require("faker/locale/uk");
resultStr = faker_uk.name.firstName();
import faker_vi = require("faker/locale/vi");
resultStr = faker_vi.name.firstName();
import faker_zh_CN = require("faker/locale/zh_CN");
resultStr = faker_zh_CN.name.firstName();
import faker_zh_TW = require("faker/locale/zh_TW");
resultStr = faker_zh_TW.name.firstName();
import faker_zu_ZA = require("faker/locale/zu_ZA");
resultStr = faker_zu_ZA.name.firstName();

namespace adoneTests.fake {
    const {
        fake
    } = adone;

    { const a: string = fake.address.zipCode(); }
    { const a: string = fake.address.zipCode('###'); }
    { const a: string = fake.address.city(); }
    { const a: string = fake.address.city(0); }
    { const a: string = fake.address.cityPrefix(); }
    { const a: string = fake.address.citySuffix(); }
    { const a: string = fake.address.streetName(); }
    { const a: string = fake.address.streetAddress(); }
    { const a: string = fake.address.streetAddress(false); }
    { const a: string = fake.address.streetSuffix(); }
    { const a: string = fake.address.streetPrefix(); }
    { const a: string = fake.address.secondaryAddress(); }
    { const a: string = fake.address.county(); }
    { const a: string = fake.address.country(); }
    { const a: string = fake.address.countryCode(); }
    { const a: string = fake.address.state(); }
    { const a: string = fake.address.state(false); }
    { const a: string = fake.address.stateAbbr(); }
    { const a: string = fake.address.latitude(); }
    { const a: string = fake.address.longitude(); }

    { const a: string = fake.commerce.color(); }
    { const a: string = fake.commerce.department(); }
    { const a: string = fake.commerce.productName(); }
    { const a: string = fake.commerce.price(); }
    { const a: string = fake.commerce.price(0, 0, 0, '#'); }
    { const a: string = fake.commerce.productAdjective(); }
    { const a: string = fake.commerce.productMaterial(); }
    { const a: string = fake.commerce.product(); }

    { const a: string[] = fake.company.suffixes(); }
    { const a: string = fake.company.companyName(); }
    { const a: string = fake.company.companyName(0); }
    { const a: string = fake.company.companySuffix(); }
    { const a: string = fake.company.catchPhrase(); }
    { const a: string = fake.company.bs(); }
    { const a: string = fake.company.catchPhraseAdjective(); }
    { const a: string = fake.company.catchPhraseDescriptor(); }
    { const a: string = fake.company.catchPhraseNoun(); }
    { const a: string = fake.company.bsAdjective(); }
    { const a: string = fake.company.bsBuzz(); }
    { const a: string = fake.company.bsNoun(); }

    { const a: string = fake.database.column(); }
    { const a: string = fake.database.type(); }
    { const a: string = fake.database.collation(); }
    { const a: string = fake.database.engine(); }

    { const a: Date = fake.date.past(); }
    { const a: Date = fake.date.future(); }
    { const a: Date = fake.date.between('foo', 'bar'); }
    { const a: Date = fake.date.between(new Date(), new Date()); }
    { const a: Date = fake.date.recent(); }
    { const a: Date = fake.date.recent(100); }
    { const a: Date = fake.date.soon(); }
    { const a: Date = fake.date.soon(30); }
    { const a: string = fake.date.month(); }
    { const a: string = fake.date.month({
        abbr: true,
        context: true
    }); }
    { const a: string = fake.date.weekday(); }
    { const a: string = fake.date.weekday({
        abbr: true,
        context: true
    }); }

    { const a: string = fake.finance.account(); }
    { const a: string = fake.finance.account(0); }
    { const a: string = fake.finance.accountName(); }
    { const a: string = fake.finance.mask(); }
    { const a: string = fake.finance.mask(0, false, false); }
    { const a: string = fake.finance.amount(); }
    { const a: string = fake.finance.amount(0, 0, 0, '#'); }
    { const a: string = fake.finance.transactionType(); }
    { const a: string = fake.finance.currencyCode(); }
    { const a: string = fake.finance.currencyName(); }
    { const a: string = fake.finance.currencySymbol(); }
    { const a: string = fake.finance.bitcoinAddress(); }
    { const a: string = fake.finance.ethereumAddress(); }
    { const a: string = fake.finance.iban(); }
    { const a: string = fake.finance.iban(true); }
    { const a: string = fake.finance.bic(); }

    { const a: string = fake.hacker.abbreviation(); }
    { const a: string = fake.hacker.adjective(); }
    { const a: string = fake.hacker.noun(); }
    { const a: string = fake.hacker.verb(); }
    { const a: string = fake.hacker.ingverb(); }
    { const a: string = fake.hacker.phrase(); }

    { const a: string = fake.helpers.randomize(); }
    { const a: number = fake.helpers.randomize([1, 2, 3, 4]); }
    { const a: string = fake.helpers.randomize(['foo', 'bar', 'quux']); }
    { const a: string = fake.helpers.slugify('foo bar quux'); }
    { const a: string = fake.helpers.replaceSymbolWithNumber('foo# bar#'); }
    { const a: string = fake.helpers.replaceSymbols('foo# bar? quux#'); }
    { const a: string[] = fake.helpers.shuffle(['foo', 'bar', 'quux']); }
    { const a: string = fake.helpers.mustache('{{foo}}{{bar}}', {foo: 'x', bar: 'y'}); }

    const card = fake.helpers.createCard();
    { const a: string = card.name; }
    { const a: string = card.address.streetA; }
    const contextualCard = fake.helpers.contextualCard();
    { const a: string = contextualCard.name; }
    { const a: string = contextualCard.address.suite; }
    const userCard = fake.helpers.userCard();
    { const a: string = userCard.name; }
    { const a: string = userCard.address.suite; }

    { const a: string = fake.internet.avatar(); }
    { const a: string = fake.internet.email(); }
    { const a: string = fake.internet.email('foo', 'bar', 'quux'); }
    { const a: string = fake.internet.exampleEmail(); }
    { const a: string = fake.internet.exampleEmail('foo', 'bar'); }
    { const a: string = fake.internet.protocol(); }
    { const a: string = fake.internet.url(); }
    { const a: string = fake.internet.domainName(); }
    { const a: string = fake.internet.domainSuffix(); }
    { const a: string = fake.internet.domainWord(); }
    { const a: string = fake.internet.ip(); }
    { const a: string = fake.internet.userAgent(); }
    { const a: string = fake.internet.color(); }
    { const a: string = fake.internet.color(0, 0, 0); }
    { const a: string = fake.internet.mac(); }
    { const a: string = fake.internet.password(); }
    { const a: string = fake.internet.password(0, false, '#', 'foo'); }

    { const a: string = fake.lorem.word(); }
    { const a: string = fake.lorem.words(); }
    { const a: string = fake.lorem.words(0); }
    { const a: string = fake.lorem.sentence(); }
    { const a: string = fake.lorem.sentence(0, 0); }
    { const a: string = fake.lorem.slug(); }
    { const a: string = fake.lorem.slug(0); }
    { const a: string = fake.lorem.sentences(); }
    { const a: string = fake.lorem.sentences(0); }
    { const a: string = fake.lorem.paragraph(); }
    { const a: string = fake.lorem.paragraph(0); }
    { const a: string = fake.lorem.paragraphs(); }
    { const a: string = fake.lorem.paragraphs(0, ''); }
    { const a: string = fake.lorem.text(); }
    { const a: string = fake.lorem.text(0); }
    { const a: string = fake.lorem.lines(); }
    { const a: string = fake.lorem.lines(0); }

    { const a: string = fake.name.firstName(); }
    { const a: string = fake.name.firstName(0); }
    { const a: string = fake.name.lastName(); }
    { const a: string = fake.name.lastName(0); }
    { const a: string = fake.name.findName(); }
    { const a: string = fake.name.findName('', '', 0); }
    { const a: string = fake.name.jobTitle(); }
    { const a: string = fake.name.prefix(); }
    { const a: string = fake.name.suffix(); }
    { const a: string = fake.name.title(); }
    { const a: string = fake.name.jobDescriptor(); }
    { const a: string = fake.name.jobArea(); }
    { const a: string = fake.name.jobType(); }

    { const a: string = fake.phone.phoneNumber(); }
    { const a: string = fake.phone.phoneNumber('#'); }
    { const a: string = fake.phone.phoneNumberFormat(); }
    { const a: string = fake.phone.phoneNumberFormat(0); }
    { const a: string = fake.phone.phoneFormats(); }

    { const a: number = fake.random.number(); }
    { const a: number = fake.random.number(0); }
    { const a: number = fake.random.number({
        min: 0,
        max: 0,
        precision: 0
    }); }
    { const a: string = fake.random.arrayElement(); }
    { const a: string = fake.random.arrayElement(['foo', 'bar', 'quux']); }
    { const a: string = fake.random.objectElement(); }
    { const a: string = fake.random.objectElement({foo: 'bar', field: 'foo'}); }
    { const a: string = fake.random.uuid(); }
    { const a: boolean = fake.random.boolean(); }
    { const a: string = fake.random.word(); }
    { const a: string = fake.random.word("noun"); }
    { const a: string = fake.random.words(); }
    { const a: string = fake.random.words(0); }
    { const a: string = fake.random.image(); }
    { const a: string = fake.random.locale(); }
    { const a: string = fake.random.alphaNumeric(); }
    { const a: string = fake.random.alphaNumeric(0); }
    { const a: string = fake.random.hexaDecimal(); }
    { const a: string = fake.random.hexaDecimal(3); }

    { const a: string = fake.system.fileName("foo", "bar"); }
    { const a: string = fake.system.commonFileName("foo", "bar"); }
    { const a: string = fake.system.mimeType(); }
    { const a: string = fake.system.commonFileType(); }
    { const a: string = fake.system.commonFileExt(); }
    { const a: string = fake.system.fileType(); }
    { const a: string = fake.system.fileExt("foo"); }
    { const a: string = fake.system.directoryPath(); }
    { const a: string = fake.system.filePath(); }
    { const a: string = fake.system.semver(); }
}

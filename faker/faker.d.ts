// Type definitions for faker
// Project: http://marak.com/faker.js/
// Definitions by: Bas Pennings <https://github.com/basp/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Faker {
	interface Post {
		words: string;
		sentence: string;
		sentences: string;
		paragraph: string;
	}
	
	interface Address {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lon: string
		}
	}
	
	interface Transaction {
		amount: number,
		date: Date,
		business: string,
		name: string,
		type: string,
		account: string
	}
	
	interface Company {
		name: string;
		catchPhrase: string;
		bs: string;
	}
	
	interface Card {
		name: string;
		username: string;
		email: string;
		address: Address;
		phone: string,
		website: string,
		company: Company;
		posts: Post[],
		accountHistory: Transaction[]
	}
	
	interface ContextualCard {
		name: string;
		username: string;
		avatar: string;
		email: string;
		dob: Date;
		phone: string;
		address: Address;
		website: string;
		company: Company;
	}
	
	interface UserCard {
		name: string;
		username: string;
		email: string;
		address: Address;
		phone: string;
		website: string;
		company: Company;
	}
	
	interface AddressGenerators {
		zipCode(format?: string): string;
		city(format?: number): string;
		cityPrefix(): string;
		citySuffix(): string;
		streetName(): string;
		streetAddress(useFullAddress?: boolean): string;
		streetSuffix(): string;
		streetPrefix(): string;
		secondaryAddress(): string;
		county(): string;
		country(): string;
		countryCode(): string;
		state(useAbbr?: boolean): string;
		stateAbbr(): string;
		latitude(): string;
		longitude(): string;
	}
	
	interface CommerceGenerators {
		color(): string;
		department(): string;
		productName(): string;
		price(min?: number, max?: number, dec?: number, symbol?: string): string;
		productAdjective(): string;
		productMaterial(): string;
		product(): string;
	}
	
	interface CompanyGenerators {
		suffixes(): string[];
		companyName(format?: number): string;
		companySuffix(): string;
		catchPhrase(): string;
		bs(): string;
		catchPhraseAdjective(): string;
		catchPhraseDescriptor(): string;
		catchPhraseNoun(): string;
		bsAdjective(): string;
		bsBuzz(): string;
		bsNoun(): string;
	}
	
	interface DateGenerators {
		past(years?: number, refDate?: Date|string): Date;
		future(years?: number, refDate?: Date|string): Date;
		between(from: Date|string, to: Date|string): Date; 
		recent(days?: number): Date;
		month(options?: {
			abbr?: boolean, 
			context?: boolean
		}): string;
		weekday(options?: {
			abbr?: boolean,
			context?: boolean
		}): string;
	}
	
	interface FinanceGenerators {
		account(length?: number): string;
		accountName(): string;
		mask(length?: number, parens?: boolean, elipsis?: boolean): string;
		amount(min?: number, max?: number, dec?: number, symbol?: string): string;
		transactionType(): string;
		currencyCode(): string;
		currencyName(): string;
		currencySymbol(): string;
	}
	
	interface HackerGenerators {
		abbreviation(): string;
		adjective(): string;
		noun(): string;
		verb(): string;
		ingverb(): string;
		phrase(): string;
	}
	
	interface Helpers {
		randomize<T>(array?: Array<T>): T;
		slugify(str: string): string;
		replaceSymbolWithNumber(s: string, symbol?: string): string;
		replaceSymbols(str: string): string;
		shuffle<T>(array: Array<T>): Array<T>;
		mustache(str: string, data: Object): string;
		createCard(): Card;
		contextualCard(): Card;
		userCard(): UserCard;
		createTransaction(): Transaction;
	}
	
	interface ImageGenerators {
		image(): string;
		avator(): string;
		imageUrl(width?: number, height?: number, category?: string): string;
		abstract(width?: number, height?: number): string;
		animals(width?: number, height?: number): string;
		business(width?: number, height?: number): string;
		cats(width?: number, height?: number): string;
		city(width?: number, height?: number): string;
		food(width?: number, height?: number): string;
		nightlife(width?: number, height?: number): string;
		fashion(width?: number, height?: number): string;
		people(width?: number, height?: number): string;
		nature(width?: number, height?: number): string;
		sports(width?: number, height?: number): string;
		technics(width?: number, height?: number): string;
		transport(width?: number, height?: number): string;
	}
	
	interface InternetGenerators {
		avatar(): string;
		email(firstName?: string, lastName?: string, provider?: string): string;
		userName(firstName?: string, lastName?: string): string;
		protocol(): string;
		url(): string;
		domainName(): string;
		domainSuffix(): string;
		domainWord(): string;
		ip(): string;
		userAgent(): string;
		color(baseRed255?: number, baseGreen255?: number, baseBlue255?: number): string;
		mac(): string;
		password(len?: number, memorable?: boolean, pattern?: string, prefix?: string): string;
	}
	
	interface LoremGenerators {
		words(num?: number): string[];
		sentence(wordCount?: number, range?: number): string;
		sentences(sentenceCount?: number): string;
		paragraph(sentenceCount?: number): string;
		paragraphs(paragraphCount?: number, separator?: string): string;
	}
	
	interface NameGenerators {
		firstName(gender?: number): string;
		lastName(gender?: number): string;
		findName(firstName?: string, lastName?: string, gender?: number): string;
		jobTitle(): string;
		prefix(): string;
		suffix(): string;
		title(): string;
		jobDescriptor(): string;
		jobArea(): string;
		jobType(): string;
	}
	
	interface PhoneGenerators {
		phoneNumber(format?: string): string;
		// https://github.com/Marak/faker.js/blob/master/lib/phone_number.js#L9-L13
		phoneNumberFormat(phoneFormatsArrayIndex?: number): string;
		phoneFormats(): string;
	}
	
	interface RandomGenerators {
		number(max: number): number;
		number(options?: {
			min?: number,
			max?: number,
			precision?: number
		}): number;
		arrayElement<T>(array?: Array<T>): T;
		objectElement(object?: Object, field?: string): any;
		uuid(): string;
		boolean(): boolean;
	}	
}

declare module "faker" {
	var faker: {
		address: Faker.AddressGenerators;
		commerce: Faker.CommerceGenerators;
		company: Faker.CompanyGenerators;
		date: Faker.DateGenerators;
		finance: Faker.FinanceGenerators;
		hacker: Faker.HackerGenerators;
		helpers: Faker.Helpers;
		image: Faker.ImageGenerators;
		internet: Faker.InternetGenerators;
		lorem: Faker.LoremGenerators;
		name: Faker.NameGenerators;
		phone: Faker.PhoneGenerators;
		random: Faker.RandomGenerators;
	}
	
	export = faker;
}

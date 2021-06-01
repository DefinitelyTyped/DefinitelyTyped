// Type definitions for faker 5.5
// Project: http://marak.com/faker.js/
// Definitions by: Ben Swartz <https://github.com/bensw>
//                 Bas Pennings <https://github.com/basp>
//                 Yuki Kokubun <https://github.com/Kuniwak>
//                 Matt Bishop <https://github.com/mattbishop>
//                 Leonardo Testa <https://github.com/testica>
//                 Sebastian Pettersson <https://github.com/TastefulElk>
//                 Daniel Montesinos <https://github.com/damonpam>
//                 Shinya Ohyanagi <https://github.com/heavenshell>
//                 Piotr Kuczynski <https://github.com/pkuczynski>
//                 Jérémie Parker <https://github.com/p-j>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Faker = require("./lib/index");

export as namespace faker;

declare const faker: Faker & {
    locales: Record<
        string,
        {
            [prop: string]: any;
        }
    >;
};

declare namespace faker {
    interface Card {
        name: string;
        username: string;
        email: string;
        address: FullAddress;
        phone: string;
        website: string;
        company: Company;
        posts: Post[];
        accountHistory: string[];
    }

    interface FullAddress {
        streetA: string;
        streetB: string;
        streetC: string;
        streetD: string;
        city: string;
        state: string;
        county: string;
        zipcode: string;
        geo: Geo;
    }

    interface Geo {
        lat: string;
        lng: string;
    }

    interface Company {
        name: string;
        catchPhrase: string;
        bs: string;
    }

    interface Post {
        words: string;
        sentence: string;
        sentences: string;
        paragraph: string;
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

    interface Address {
        street: string;
        suite: string;
        city: string;
        state: string;
        zipcode: string;
        geo: Geo;
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

    interface Transaction {
        amount: string;
        date: Date;
        business: string;
        name: string;
        type: string;
        account: string;
    }
}

export = faker;

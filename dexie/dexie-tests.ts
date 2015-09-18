/// <reference path="dexie.d.ts" /> 

import Dexie = require("dexie");

module Utils {

    export class Console {
        textarea: HTMLTextAreaElement;

        constructor() {
            this.textarea = document.createElement('textarea');
        }

        log(txt: string, type?: string) {
            if (type) this.textarea.value += type + " ";
            this.textarea.value += txt + "\n";
        }
        error = function (txt: string) {
            this.log(txt, "ERROR!");
        }
    }

}

module AppDb {

    export class AppDatabase extends Dexie {

        contacts: Dexie.Table<Contact, number>;
        emails: Dexie.Table<IEmailAddress, number>;
        phones: Dexie.Table<IPhoneNumber, number>;

        constructor() {

            super("MyTypeScriptAppDb");

            var db = this;

            //
            // Define tables and indexes
            //
            db.version(1).stores({
                contacts: '++id, first, last',
                emails: '++id, contactId, type, email',
                phones: '++id, contactId, type, phone',
            });

            // Let's physically map Contact class to contacts table.
            // This will make it possible to call loadEmailsAndPhones()
            // directly on retrieved database objects.
            db.contacts.mapToClass(Contact);
        }
    }

    /* Just for code completion and compilation - defines
     * the interface of objects stored in the emails table.
     */
    export interface IEmailAddress {
        id?: number;
        contactId: number;
        type: string;
        email: string;
    }

    /* Just for code completion and compilation - defines
     * the interface of objects stored in the phones table.
     */
    export interface IPhoneNumber {
        id?: number;
        contactId: number;
        type: string;
        phone: string;
    }

    /* This is a 'physical' class that is mapped to
     * the contacts table. We can have methods on it that
     * we could call on retrieved database objects.
     */
    export class Contact {
        id: number;
        first: string;
        last: string;
        emails: IEmailAddress[];
        phones: IPhoneNumber[];

        constructor(first: string, last: string, id?: number) {
            this.first = first;
            this.last = last;
            if (id) this.id = id;
        }

        loadEmailsAndPhones() : Dexie.Promise<Contact> {
            return Dexie.Promise.all<any>(
                db.emails
                    .where('contactId').equals(this.id)
                    .toArray(emails => this.emails = emails)
                ,
                db.phones
                    .where('contactId').equals(this.id)
                    .toArray(phones => this.phones = phones)

                ).then(() => this);
        }

        save() {
            return db.transaction('rw', db.contacts, db.emails, db.phones, () => {
                Dexie.Promise.all(
                    // Save existing arrays
                    Dexie.Promise.all(this.emails.map(email => db.emails.put(email))),
                    Dexie.Promise.all(this.phones.map(phone => db.phones.put(phone))))
                    .then(results => {
                        // Remove items from DB that is was not saved here:
                        var emailIds = results[0], // array of resulting primary keys
                            phoneIds = results[1]; // array of resulting primary keys

                        db.emails.where('contactId').equals(this.id)
                            .and(email => emailIds.indexOf(email.id) === -1)
                            .delete();

                        db.phones.where('contactId').equals(this.id)
                            .and(phone => phoneIds.indexOf(phone.id) === -1)
                            .delete();

                        // At last, save our own properties.
                        // (Must not do put(this) because we would get
                        // reduntant emails/phones arrays saved into db)
                        db.contacts.put(
                            new Contact(this.first, this.last, this.id))
                            .then(id => this.id = id);
                    });
            });
        }
    }

    export var db = new AppDatabase();
    db.open();
}


import Console = Utils.Console;
import db = AppDb.db;

document.addEventListener('DOMContentLoaded', () => {

    // Initialize our Console widget - it will log browser window.
    var console = new Console();
    document.getElementById('consoleArea').appendChild(console.textarea);

    // Test it:
    console.log("Hello world!");

    // Make sure to never miss any unexpected error:
    Dexie.Promise.on.error.subscribe(e => {
        // Log any uncatched error:
        console.error(e);
    });

    //
    // Let's clear and re-seed the database:
    //
    clearDatabase()
        .then(seedDatabase)
        .then(playALittle_add_phone_to_adam)
        .then(printContacts);

    function clearDatabase() {
        console.log("Clearing database...");
        return Dexie.Promise.all(
            db.contacts.clear(),
            db.emails.clear(),
            db.phones.clear());
    }

    function seedDatabase() {
        console.log("Seeding database with some contacts...");
        return db.transaction('rw', db.contacts, db.emails, db.phones, () => {
            // Populate a contact
            db.contacts.add(new AppDb.Contact('Arnold', 'Fitzgerald')).then(id => {
                // Populate some emails and phone numbers for the contact
                db.emails.add({ contactId: id, type: 'home', email: 'arnold@email.com' });
                db.emails.add({ contactId: id, type: 'work', email: 'arnold@abc.com' });
                db.phones.add({ contactId: id, type: 'home', phone: '12345678' });
                db.phones.add({ contactId: id, type: 'work', phone: '987654321' });
            });

            // ... and another one...
            db.contacts.add(new AppDb.Contact('Adam', 'Tensta')).then(id => {
                // Populate some emails and phone numbers for the contact
                db.emails.add({ contactId: id, type: 'home', email: 'adam@tensta.se' });
                db.phones.add({ contactId: id, type: 'work', phone: '88888888' });
            });
        });
    }

    function playALittle_add_phone_to_adam() {
        // Now, just to examplify how to use the save() method as an alternative
        // to db.phones.add(), we will add yet another phone number
        // to an existing contact and then re-save it:
        console.log("Playing a little: adding another phone entry for Adam Tensta...");
        return db.contacts
            .where('last').equals('Tensta').first(c => c.loadEmailsAndPhones())
            .then(contact => {
                // Also add another phone number to Adam Tensta:
                contact.phones.push({
                    contactId: contact.id,
                    type: 'custom',
                    phone: '112'
                });
                contact.save();
            });
    }

    function printContacts() {

        // Now we're gonna list all contacts starting with letter 'A'
        // and print them out.
        // For each contact, also resolve its collection of
        // phone number entries and email addresses by reverse-quering
        // the foreign tables.

        // For atomicity and speed, use a single transaction for the
        // queries to make:
        db.transaction('r', [db.contacts, db.phones, db.emails], () => {

            // Query some contacts
            return db.contacts
                .where('first').startsWithIgnoreCase('a')
                .sortBy('id')
                .then(contacts =>

                    // Resolve array properties 'emails' and 'phones'
                    // on each and every contact:
                    Dexie.Promise.all(
                        contacts.map(contact =>
                            contact.loadEmailsAndPhones()))
                );

        }).then(contacts => {

                // Print result
                console.log("Database contains the following contacts:");
                contacts.forEach(contact => {
                    console.log(contact.id + ". " + contact.first + " " + contact.last);
                    console.log("   Phone numbers: ");
                    contact.phones.forEach(phone => {
                        console.log("     " + phone.phone + "(" + phone.type + ")");
                    });
                    console.log("   Emails: ");
                    contact.emails.forEach(email => {
                        console.log("     " + email.email + "(" + email.type + ")");
                    });
                });
            });
    }
});


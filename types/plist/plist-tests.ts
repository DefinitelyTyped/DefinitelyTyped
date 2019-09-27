import * as fs from "fs";
import * as plist from "plist";

///
/// Typing for test
///

// Person
interface Person {
    id: number;
    name: string;
    birthday: Date;
    data: Buffer;
}

// instanceOfPerson(obj)
function instanceOfPerson(obj: any): obj is Person {
    return (
        "id" in obj && typeof obj.id === "number" &&
        "name" in obj && typeof obj.name === "string" &&
        "birthday" in obj && obj.birthday instanceof Date &&
        "data" in obj && obj.data instanceof Buffer);
}

///
/// parse()
///

// parsing a plist from string
const plistString = `
    <plist>
        <array>
            <dict>
                <key>id</key>
                <integer>123</integer>
                <key>name</key>
                <string>Alice</string>
                <key>birthday</key>
                <date>2000-01-01T01:01:01Z</date>
                <key>data</key>
                <data>QWxpY2U=</data>
            </dict>
            <dict>
                <key>id</key>
                <integer>456</integer>
                <key>name</key>
                <string>Bob</string>
                <key>birthday</key>
                <date>2000-12-31T23:59:59Z</date>
                <key>data</key>
                <data>Qm9i</data>
            </dict>
        </array>
    </plist>`;

const plistValue1 = plist.parse(plistString);
if (plistValue1 instanceof Array) {
    for (const elem of plistValue1) {
        if (instanceOfPerson(elem)) {
            console.log(`id: ${elem.id}`);
            console.log(`name: ${elem.name}`);
            console.log(`birthday: ${elem.birthday.toDateString()}`);
            console.log(`data: ${elem.data.toString()}`);
        }
    }
}

// parsing a plist from filename
const plistValue2 = plist.parse(
    fs.readFileSync("plist/sample.plist", "utf8"));
console.log(plistValue2);

///
/// build()
///

const plistString1 = plist.build(plistValue1);
console.log(plistString1);

const plistString2 = plist.build(plistValue2, {pretty: false});
console.log(plistString2);

function f(a: ReadonlyArray<string>) {
    plist.build(a);
}

// $ExpectError
plist.build(() => 0);

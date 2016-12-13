

/*Globalize.culture("fr");
console.log(Globalize.culture().name);

Globalize.culture("fr-FR");
console.log(Globalize.culture().name);

Globalize.culture(["es-MX", "fr-FR"]);
console.log(Globalize.culture().name);

Globalize.culture("fr;q=0.4, es;q=0.5, he");

Globalize.format(1234.567, "n");
Globalize.format(1234.567, "n1");
Globalize.format(1234.567, "n0");

Globalize.format(new Date(1955, 10, 5), "yyyy/MM/dd");
Globalize.format(new Date(1955, 10, 5), "dddd MMMM d, yyyy");

Globalize.addCultureInfo("fr", { messages: { "translate": "traduire" } });
console.log(Globalize.localize("translate", "fr"));

Globalize.parseInt("1,234.56"); 
Globalize.parseInt("1.234,56", 10);
Globalize.parseInt("1.234,56", 10, "de");
Globalize.parseFloat("1,234.56"); 
Globalize.parseFloat("1.234,56", 10);
Globalize.parseFloat("1.234,56", 10, "de");
Globalize.parseDate("1/2/2003");
Globalize.parseDate("15 Jun 2012", "dd MMM yyyy");
Globalize.parseDate("15 Jun 2012", ["dd MMM yyyy"]);
Globalize.culture("fr");
Globalize.parseDate("1/2/2003"); 

Globalize.addCultureInfo({ numberFormat: { billionZeroes: 12 } });
Globalize.addCultureInfo("fr", { numberFormat: { billionZeroes: 12 } });
Globalize.addCultureInfo("de-DE", "de", { numberFormat: { billionZeroes: 12 } });

//Globalize.culture().calendar = Globalize.culture().calendars.SomeOtherCalendar;
//Globalize.culture().calendar = Globalize.culture().calendars.standard;

Globalize.format(123.45, "n"); 
Globalize.format(123.45, "n0");
Globalize.format(123.45, "n1");

Globalize.format(123.45, "d");
Globalize.format(12, "d3"); 

Globalize.format(123.45, "c"); 
Globalize.format(123.45, "c0");
Globalize.format(123.45, "c1");
Globalize.format(-123.45, "c");

Globalize.format(0.12345, "p"); 
Globalize.format(0.12345, "p0");
Globalize.format(0.12345, "p4");

Globalize.format(1234.56, "c");
Globalize.culture("en-US").numberFormat.currency.symbol = '\u20ac';

var currSym;
Globalize.culture().numberFormat.currency.symbol = currSym;

Globalize.format(new Date(2012, 1, 20), 'd');
Globalize.format(new Date(2012, 1, 20), 'D');


Globalize.load[ "default" ] = {
    name: "English",
    englishName: "English",
    nativeName: "English",
    isRTL: false,
    language: "en",
    numberFormat: {
        pattern: [ "-n" ],
        decimals: 2,
        ",": ",",
        ".": ".",
        groupSizes: [ 3 ],
        "+": "+",
        "-": "-",
        percent: {
            pattern: [ "-n %", "n %" ],
            decimals: 2,
            groupSizes: [ 3 ],
            ",": ",",
            ".": ".",
            symbol: "%"
        },
        currency: {
            pattern: [ "($n)", "$n" ],
            decimals: 2,
            groupSizes: [ 3 ],
            ",": ",",
            ".": ".",
            symbol: "$"
        }
    },
    calendars: {
        standard: {
            name: "Gregorian_USEnglish",
            "/": "/",
            ":": ":",
            firstDay: 0,
            days: {
                names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
            },
            //months: [
            //  names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
            //  namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
            //],
            AM: [ "AM", "am", "AM" ],
            PM: [ "PM", "pm", "PM" ],
            eras: [
                {"name":"A.D.","start":null,"offset":0}
            ],
            twoDigitYearMax: 2029,
            patterns: {
                d: "M/d/yyyy",
                D: "dddd, MMMM dd, yyyy",
                t: "h:mm tt",
                T: "h:mm:ss tt",
                f: "dddd, MMMM dd, yyyy h:mm tt",
                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                M: "MMMM dd",
                Y: "yyyy MMMM",
                S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
            }
        }
    },
    messages: {}
}*/
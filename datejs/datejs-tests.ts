/// <reference path="datejs.d.ts" />
/// <reference path="sugarpak.d.ts" />

function tests() {
    // TypeScript alias
    var DateJS: IDateJSStatic = <any>Date;

	// What date is next thursday?
	DateJS.today().next().thursday();

	// Add 3 days to Today
	DateJS.today().add(3).days();

	// Is today Friday?
	DateJS.today().is().friday();

    var is = DateJS.today().is();

	// Number fun
	(3).days().ago();
    
	// 6 months from now
	var n = 6;
	n.months().fromNow();

	// Set to 8:30 AM on the 15th day of the month
	DateJS.today().set(<any>{ day: 15, hour: 8, minute: 30 });

    DateJS.today().is().january();
    DateJS.today().is().november();
    DateJS.today().add(1).day().is().saturday();

	// Convert text into Date
	DateJS.parse('today');
	DateJS.parse('t + 5 d'); // today + 5 days
	DateJS.parse('next thursday');
	DateJS.parse('February 20th 1973');
	DateJS.parse('Thu, 1 July 2004 22:30:00');

    var future: IDateJS = DateJS.today().add(2).months();
    var someDate: IDateJS = DateJS.today().next().april().add(2).days();
    someDate.same().week(future); // true|false;
    someDate.same().day(); // true|false;
    DateJS.today().toObject().day;
}
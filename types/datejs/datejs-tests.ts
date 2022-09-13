


function tests() {
    // What date is next thursday?
    Date.today().next().thursday();

    // Add 3 days to Today
    Date.today().add(3).days();

    // Is today Friday?
    Date.today().is().friday();

    var is = Date.today().is();

    // Number fun
    (3).days().ago();
    
    // 6 months from now
    var n = 6;
    n.months().fromNow();

    // Set to 8:30 AM on the 15th day of the month
    Date.today().set({ day: 15, hour: 8, minute: 30 });

    Date.today().is().january();
    Date.today().is().november();
    Date.today().add(1).day().is().saturday();

    // Convert text into Date
    Date.parse('today');
    Date.parse('t + 5 d'); // today + 5 days
    Date.parse('next thursday');
    Date.parse('February 20th 1973');
    Date.parse('Thu, 1 July 2004 22:30:00');

    var future: IDateJS = Date.today().add(2).months();
    var someDate: IDateJS = Date.today().next().april().add(2).days();
    someDate.same().week(future); // true|false;
    someDate.same().day(); // true|false;
    Date.today().toObject().day;
}

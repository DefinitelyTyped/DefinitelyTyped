

// test dateFormat
var now : string = dateFormat();
var nowFullDate : string = dateFormat( dateFormat.masks.fullDate );

// test format() (on the prototype of Date)
var then : Date = new Date( 2014, 1, 1 );
var thenDefaultFormat : string = then.format();
var thenCustomFormat : string = then.format('yyyy/m/d HH:MM');

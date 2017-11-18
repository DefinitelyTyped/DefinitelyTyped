

//Those classes were tested by compile time only!

namespace XDate_Test
{

    class test_base
    {
	public assert( ref : boolean )
	{
	    if( true == ref)
	    {
		console.info("OK");
	    }
	    else
	    {
		console.warn("NG");
	    }
	}
    }

    //based on  xdate/test/adding.js
    class adding extends test_base
    {

	private addYears() : boolean
	{

	    var d1 = new XDate(2011, 2, 1);
	    d1.addYears(10);
	    var d2 = new XDate(2011, 2, 1);
	    d2.addYears(-2);
	    return d1.getFullYear() == 2021 &&
		d1.getMonth() == 2 &&
		d1.getDate() == 1 &&
		d2.getFullYear() == 2009 &&
		d2.getMonth() == 2 &&
		d2.getDate() == 1;

	}

	private addMonths() : boolean
	{

	    var d1 = new XDate(2012, 2, 6);
	    d1.addMonths(3);
	    var d2 = new XDate(2012, 2, 6);
	    d2.addMonths(-3);
	    return d1.getFullYear() == 2012 &&
		d1.getMonth() == 5 &&
		d1.getDate() == 6 &&
		d2.getFullYear() == 2011 &&
		d2.getMonth() == 11 &&
		d2.getDate() == 6;
	}

	private addMonths_prevent_overflow() : boolean
	{

	    var d1 = new XDate(2010, 11, 30); // dec 30
	    d1.addMonths(2, true);
	    var d2 = new XDate(2011, 5, 30); // jun 30
	    d2.addMonths(-4, true);
	    return d1.getFullYear() == 2011 &&
		d1.getMonth() == 1 &&
		d1.getDate() == 28 &&
		d2.getFullYear() == 2011 &&
		d2.getMonth() == 1 &&
		d2.getDate() == 28;

	}

	private addMonths_prevent_overflow_backwards_january_bug() : boolean {
	    var d1 = new XDate(2013, 0, 28); // Jan 28
	    var d2 = new XDate(2013, 0, 14); // Jan 14
	    return d1.addMonths(-1, true).toString('yyyy-MM-dd') == '2012-12-28' && // Dec 28
	    d2.addMonths(-1, true).toString('yyyy-MM-dd') == '2012-12-14'; // Dec 14
	}


	private addDays() : boolean {
	    var d1 = new XDate(2009, 5, 8);
	    d1.addDays(30);
	    var d2 = new XDate(2009, 5, 8);
	    d2.addDays(-4);
	    return d1.getFullYear() == 2009 &&
		d1.getMonth() == 6 &&
		d1.getDate() == 8 &&
		d2.getFullYear() == 2009 &&
		d2.getMonth() == 5 &&
		d2.getDate() == 4;
	}


	private addHours_addMinutes_addSeconds_addMilliseconds() : boolean {
	    var d = new XDate(2010, 0, 1, 5, 30, 24, 500);
	    d.addHours(2);
	    d.addMinutes(15);
	    d.addSeconds(6);
	    d.addMilliseconds(50);
	    return d.getHours() == 7 &&
		d.getMinutes() == 45 &&
		d.getSeconds() == 30 &&
		d.getMilliseconds() == 550;
	}


	private addWeeks() : boolean {
	    return new XDate(2011, 7, 12).addWeeks(2).getDate() == 26 &&
		new XDate(2011, 7, 12).addWeeks(-2).getDate() == 29;
	}

	public constructor()
	{
	    super();
	    super.assert( this.addYears() );
	    super.assert( this.addMonths_prevent_overflow() );
	    super.assert( this.addMonths_prevent_overflow_backwards_january_bug()  );
	    super.assert( this.addDays() );
	    super.assert( this.addHours_addMinutes_addSeconds_addMilliseconds() );
	    super.assert( this.addWeeks() );
	}

    }


    class constructors extends test_base
    {

	public no_args() : boolean {
	    var xdate = new XDate();
	    var time = +new Date();
	    return Math.abs(xdate.getTime() - time) < 1000 && !xdate.getUTCMode();
	}

	public only_utcMode_false(): boolean {
	    var xdate = new XDate(false);
	    var time = +new Date();
	    return Math.abs(xdate.getTime() - time) < 1000 && !xdate.getUTCMode();
	}

	public only_utcMode_true() : boolean {
	    var xdate = new XDate(true);
	    var time = +new Date();
	    return Math.abs(xdate.getTime() - time) < 1000 && xdate.getUTCMode();
	}

	public from_XDate_XDate() : boolean {
	    var xdate1 = new XDate();
	    var xdate2 = new XDate(xdate1);
	    return xdate1.getTime() == xdate2.getTime() &&
		!xdate1.getUTCMode() && !xdate2.getUTCMode();
	}

	public from_XDate_XDate_with_utcMode_true() : boolean {
	    var xdate1 = new XDate().setUTCMode(true);
	    var xdate2 = new XDate(xdate1);
	    //return xdate1.getTime() == xdate2.getTime() &&
	    //xdate1.getUTCMode() && xdate2.getUTCMode();
	    return true;
	}

	public from_XDate_XDate_override_with_utcMode_true() : boolean {
	    var xdate1 = new XDate();
	    var xdate2 = new XDate(xdate1, true);
	    return xdate1.getTime() == xdate2.getTime() &&
		!xdate1.getUTCMode() && xdate2.getUTCMode();
	}

	public from_XDate_XDate_override_with_utcMode_false() : boolean {
	    var xdate1 = new XDate().setUTCMode(true);
	    var xdate2 = new XDate(xdate1, false);
	    return xdate1.getTime() == xdate2.getTime() &&
		xdate1.getUTCMode() && !xdate2.getUTCMode();
	}

	public from_native_Date_utcMode_false() : boolean {
	    var date = new Date();
	    var xdate1 = new XDate(date);
	    var xdate2 = new XDate(date, false);
	    return date.getTime() == xdate1.getTime() &&
		date.getTime() == xdate2.getTime() &&
		!xdate1.getUTCMode() && !xdate2.getUTCMode();
	}

	public from_native_Date_utcMode_true(): boolean {
	    var date = new Date();
	    var xdate = new XDate(date, true);
	    return date.getTime() == xdate.getTime() &&
		xdate.getUTCMode();
	}

	public from_milliseconds_time_utcMode_false() : boolean {
	    var MS = 933490800000;
	    var xdate1 = new XDate(MS);
	    var xdate2 = new XDate(MS, false);
	    return !xdate1.getUTCMode() &&
		!xdate2.getUTCMode() &&
		xdate1.getTime() == MS &&
		xdate2.getTime() == MS;
	}

	public from_milliseconds_time_utcMode_true() : boolean {
	    var MS = 933490800000;
	    var xdate = new XDate(MS, true);
	    return xdate.getUTCMode() && xdate.getTime() == MS;
	}

	public year_month_date_utcMode_false() : boolean {
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var xdate1 = new XDate(YEAR, MONTH, DATE);
	    //var xdate2 = new XDate(YEAR, MONTH, DATE, false);
	    var xdate2 = new XDate(YEAR, MONTH, DATE);
	    xdate2.setUTCMode(false);
	    return !xdate1.getUTCMode() && !xdate2.getUTCMode() &&
		xdate1.getTime() == xdate2.getTime() &&
		xdate1.getFullYear() == YEAR &&
		xdate1.getMonth() == MONTH &&
		xdate1.getDate() == DATE &&
		!xdate1.getHours() &&
		!xdate1.getMinutes() &&
		!xdate1.getSeconds() &&
		!xdate1.getMilliseconds();
	}

	public toString_utcMode_undefined_true() : boolean {
	    var xdate1 = new XDate('2012-09-21');
	    var xdate2 = new XDate('2012-09-21', true);
	    return xdate1.toString('yyyy-MM-dd HH-mm-ss') == '2012-09-21 00-00-00' &&
		xdate2.toString('yyyy-MM-dd HH-mm-ss') == '2012-09-21 00-00-00';
	}

	public year_month_date_minutes_seconds_milliseconds_utcMode_false() : boolean {
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var HOURS = 13;
	    var MINUTES = 45;
	    var SECONDS = 20;
	    var MILLISECONDS = 750;
	    var xdate1 = new XDate(YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS);
	    var xdate2 = new XDate(YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS, false);
	    return !xdate1.getUTCMode() && !xdate2.getUTCMode() &&
		xdate1.getTime() == xdate2.getTime() &&
		xdate1.getFullYear() == YEAR &&
		xdate1.getMonth() == MONTH &&
		xdate1.getDate() == DATE &&
		xdate1.getHours() == HOURS &&
		xdate1.getMinutes() == MINUTES &&
		xdate1.getSeconds() == SECONDS &&
		xdate1.getMilliseconds() == MILLISECONDS;
	}

	public year_month_date_utcMode_true() : boolean {
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    //var xdate = new XDate(YEAR, MONTH, DATE, true);
	    var xdate = new XDate(YEAR, MONTH, DATE);
	    xdate.setUTCMode(true);
	    return xdate.getUTCMode() &&
	    xdate.getFullYear() == YEAR &&
		xdate.getMonth() == MONTH &&
		xdate.getDate() == DATE &&
		!xdate.getHours() &&
		!xdate.getMinutes() &&
		!xdate.getSeconds() &&
		!xdate.getMilliseconds();
	}

	public year_month_date_minutes_seconds_milliseconds_utcMode_true() : boolean {
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var HOURS = 13;
	    var MINUTES = 45;
	    var SECONDS = 20;
	    var MILLISECONDS = 750;
	    var xdate = new XDate(YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS, true);
	    return xdate.getUTCMode() &&
		xdate.getFullYear() == YEAR &&
		xdate.getMonth() == MONTH &&
		xdate.getDate() == DATE &&
		xdate.getHours() == HOURS &&
		xdate.getMinutes() == MINUTES &&
		xdate.getSeconds() == SECONDS &&
		xdate.getMilliseconds() == MILLISECONDS;
	}

	/*
	  public without_new_operator() : boolean {
	  return XDate("Sun Aug 14 2011 00:28:53 GMT-0700 (PDT)") &&
	  !XDate("asdf").valid();
	  }
	*/


	public constructor()
	{
	    super();
	    super.assert( this.no_args() );
	    super.assert( this.only_utcMode_false() );
	    super.assert( this.only_utcMode_true() );
	    super.assert( this.from_XDate_XDate() );

	    super.assert(this.from_XDate_XDate_with_utcMode_true());
	    super.assert(this.from_XDate_XDate_override_with_utcMode_true());
	    super.assert(this.from_XDate_XDate_override_with_utcMode_false());
	    super.assert(this.from_native_Date_utcMode_false());
	    super.assert(this.from_native_Date_utcMode_true());
	    super.assert(this.from_milliseconds_time_utcMode_false());
	    super.assert(this.from_milliseconds_time_utcMode_true());
	    super.assert(this.year_month_date_utcMode_false());
	    super.assert(this.toString_utcMode_undefined_true());
	    super.assert(this.year_month_date_minutes_seconds_milliseconds_utcMode_false());
	    super.assert(this.year_month_date_utcMode_true());
	    super.assert(this.year_month_date_minutes_seconds_milliseconds_utcMode_true());
	}
    }


    // based on xdate/test/diffing.js
    class diffing extends test_base
    {


	public diffWeeks() : boolean{
	    return Math.floor(new XDate(2011, 4, 18).diffWeeks(new XDate(2011, 4, 26))) == 1 &&
		//Math.abs(new XDate(2011, 4, 18).diffWeeks(new XDate(2011, 4, 26), true) - (1+1/7)) < .001 &&
		Math.floor(new XDate(2011, 4, 18).diffWeeks(new XDate(2011, 4, 24))) == 0 &&
		//Math.abs(new XDate(2011, 4, 18).diffWeeks(new XDate(2011, 4, 24), true) - (1-1/7)) < .001 &&
		Math.floor(new XDate(2011, 4, 18).diffWeeks(new XDate('2011-05-26'))) == 1;
	}


	public diffYears() :boolean {
	    return new XDate('2011-04-10').diffYears('2013-04-10') == 2 &&
		new XDate('2011-01-01T06:06:06').diffYears('2013-07-01T06:06:06') == 2.5;
	}


	public diffMonths() :boolean {
	    return new XDate('2011-06-05').diffMonths('2012-07-05') == 13 &&
		new XDate('2012-07-05').diffMonths('2011-06-05') == -13;
	}


	public diffDays() :boolean {
	    return new XDate('2012-12-25').diffDays('2012-12-30') == 5;
	}


	public diffHours() :boolean {
	    return new XDate('2012-05-05T06:30:00').diffHours('2012-05-05T04:00:00') == -2.5;
	}


	public diffMinutes() :boolean {
	    return new XDate('2012-05-01T05:50').diffMinutes('2012-05-01T06:10:30') == 20.5;
	}


	public diffSeconds() :boolean {
	    return new XDate('2012-03-01T00:00:45').diffSeconds('2012-03-01T00:01:15') == 30;
	}


	public diffMilliseconds() :boolean {
	    return new XDate('2011-06-06T05:05:05').diffMilliseconds('2011-06-06T05:05:08.100') == 3100;
	}



	public constructor()
	{
	    super();
	    super.assert( this.diffWeeks() );
	    super.assert( this.diffYears() );
	    super.assert( this.diffMonths() );
	    super.assert( this.diffDays() );
	    super.assert( this.diffHours() );
	    super.assert( this.diffMinutes() );
	    super.assert( this.diffSeconds() );
	    super.assert( this.diffMilliseconds() );
	}

    }

    // based on xdate/test/formatting.js
    class formatting extends test_base
    {

	public numbers_am() : boolean  {
	    return new XDate(1986, 5, 8, 4, 3, 2)
		.toString('MM/dd/yyyy hh:mm:ss tt') == "06/08/1986 04:03:02 am";
	}


	public numbers_am_uppercase() : boolean  {
	    return new XDate(1986, 5, 8, 4, 3, 2)
		.toString('MM/dd/yyyy hh:mm:ss TT') == "06/08/1986 04:03:02 AM";
	}


	public numbers_am_mini() : boolean  {
	    return new XDate(1986, 5, 8, 4, 3, 2)
		.toString('M/d/yy h:m:s t') == "6/8/86 4:3:2 a";
	}


	public numbers_pm() : boolean  {
	    return new XDate(1986, 5, 8, 14, 3, 2)
		.toString('MM/dd/yyyy hh:mm:ss tt') == "06/08/1986 02:03:02 pm";
	}


	public numbers_pm_uppercase() : boolean  {
	    return new XDate(1986, 5, 8, 14, 3, 2)
		.toString('MM/dd/yyyy hh:mm:ss TT') == "06/08/1986 02:03:02 PM";
	}


	public numbers_pm_mini() : boolean  {
	    return new XDate(1986, 5, 8, 14, 3, 2)
		.toString('M/d/yy h:m:s t') == "6/8/86 2:3:2 p";
	}


	public no_am_pm_confusion() : boolean  {
	    return new XDate(2012, 5, 8).toString('tt') == 'am' &&
		new XDate(2012, 5, 8, 12).toString('tt') == 'pm';
	}


	public numbers_24_hour_clock() : boolean  {
	    return new XDate(1986, 5, 8, 14, 3, 2)
		.toString('dd/MM/yyyy HH:mm:ss') == "08/06/1986 14:03:02";
	}


	public short_names() : boolean  {
	    return new XDate(2011, 10, 5)
		.toString('ddd, MMM dd, yyyy') == "Sat, Nov 05, 2011";
	}


	public long_namesu() : boolean  {
	    return new XDate(2011, 10, 5)
		.toString('dddd, MMMM dd, yyyy') == "Saturday, November 05, 2011";
	}


	public ordinals() : boolean  {
	    return new XDate(2011, 1, 1).toString('dS') == "1st" &&
		new XDate(2011, 1, 2).toString('dS') == "2nd" &&
		new XDate(2011, 1, 3).toString('dS') == "3rd" &&
		new XDate(2011, 1, 4).toString('dS') == "4th" &&
		new XDate(2011, 1, 23).toString('dS') == "23rd" &&
		new XDate(2011, 1, 11).toString('dS') == "11th";
	}


	public fff_milliseconds() : boolean  {
	    var d = new XDate();
	    var s = d.toString('fff');
	    return d.getMilliseconds() === parseInt(s, 10) && s.length==3;
	}


	public timezone() : boolean  {
	    var d1 = new XDate();
	    d1.getTimezoneOffset = function() { return 7 * 60 + 15 };
	    var d2 = new XDate();
	    d2.getTimezoneOffset = function() { return -(7 * 60 + 15) };
	    return d1.toString('z') == '-7' &&
		d1.toString('zz') == '-07' &&
		d1.toString('zzz') == '-07:15' &&
		d2.toString('z') == '+7' &&
		d2.toString('zz') == '+07' &&
		d2.toString('zzz') == '+07:15';
	}


	public toString_i() : boolean  {
	    var d = new XDate(2011, 5, 8, 14, 35, 21);
	    return d.toString('i') == '2011-06-08T14:35:21';
	}

	public toString_i_utcMode_true() : boolean  {
	    var d = new XDate(2011, 5, 8, 14, 35, 21);
	    d.setUTCMode(true);
	    return d.toString('i') == '2011-06-08T14:35:21';
	}

	public toString_u() : boolean  {
	    var d = new XDate(2011, 5, 8, 14, 35, 21);
	    return d.toString('u').indexOf('2011-06-08T14:35:21') == 0;
	}

	public toString_u_utcMode_true() : boolean  {
	    var d = new XDate(2011, 5, 8, 14, 35, 21);
	    d.setUTCMode(true);
	    return d.toString('u') == '2011-06-08T14:35:21Z';
	}

	public toUTCString_i() : boolean  {
	    var d = new XDate(Date.UTC(2011, 5, 8, 14, 35, 21));
	    return d.toUTCString('i') == '2011-06-08T14:35:21';
	}

	public toUTCString_i_utcMode_true() : boolean  {
	    var d = new XDate(Date.UTC(2011, 5, 8, 14, 35, 21), true);
	    return d.toUTCString('i') == '2011-06-08T14:35:21';
	}

	public toUTCString_u() : boolean  {
	    var d = new XDate(Date.UTC(2011, 5, 8, 14, 35, 21));
	    return d.toUTCString('u') == '2011-06-08T14:35:21Z';
	}

	public toUTCString_u_utcMode_true() : boolean  {
	    var d = new XDate(Date.UTC(2011, 5, 8, 14, 35, 21), true);
	    return d.toUTCString('u') == '2011-06-08T14:35:21Z';
	}


	public non_zero_parenthesis() : boolean  {
	    var d1 = new XDate(2010, 5, 8, 1);
	    var d2 = new XDate(2010, 5, 8, 14, 30);
	    return d1.toString('M/d/yyyy h(:mm)tt') == "6/8/2010 1am" &&
		d2.toString('M/d/yyyy h(:mm)tt') == "6/8/2010 2:30pm";
	}

	public non_zero_parenthesis_nested() : boolean  {
	    return new XDate(2011, 5, 8).toString("(h(:mm)tt)") == "12am" &&
		new XDate(2011, 5, 8, 6).toString("(h(:mm)tt)") == "6am" &&
		new XDate(2011, 5, 8, 6, 30).toString("(h(:mm)tt)") == "6:30am";
	}


	public non_zero_parenthesis_crazy_quotes() : boolean  {
	    return new XDate(2010, 5, 8, 14, 30)
		.toString("M/d/yyyy h(:mm')')tt") == "6/8/2010 2:30)pm";
	}


	public string_literal() : boolean  {
	    var d = new XDate(2011, 5, 8);
	    return d.toString("MMM dS 'yyyy!mm'") == "Jun 8th yyyy!mm";
	}


	public escaped_single_quote() : boolean  {
	    var d = new XDate(2011, 5, 8);
	    return d.toString("''MMM dS yyyy''") == "'Jun 8th 2011'";
	}


	public toString_toUTCString_settings_param() : boolean  {
	    var settings = {
		dayNames: ['Sunday', 'Benduday', 'Zhellday', 'Taungsday', 'Centaxday', 'Primeday', 'Saturday']
	    };
	    return new XDate(2011, 3, 29).toString('dddd yyyy', settings) == 'Primeday 2011' &&
		new XDate(2011, 3, 4, 12).toUTCString('dddd yyyy', settings) == 'Benduday 2011';
	}


	public iso_week_correct_digits() : boolean  {
	    return new XDate(2011, 2, 1).toString('w') == '9' &&
		new XDate(2011, 2, 1).toUTCString('w') == '9' &&
		new XDate(2011, 2, 1).toString('ww') == '09' &&
		new XDate(2011, 2, 1).toUTCString('ww') == '09';
	}


	public toString_toUTCString_different_locale() : boolean  {
	    XDate.locales['starwars'] = {
		dayNames: ['Sunday', 'Benduday', 'Zhellday', 'Taungsday', 'Centaxday', 'Primeday', 'Saturday']
	    };
	    return new XDate(2011, 3, 29).toString('dddd yyyy', 'starwars') == 'Primeday 2011' &&
		new XDate(2011, 3, 4, 12).toUTCString('dddd yyyy', 'starwars') == 'Benduday 2011';
	}


	public toString_toUTCString_new_default_locale() : boolean  {
	    XDate.locales['starwars'] = {
		dayNames: ['Sunday', 'Benduday', 'Zhellday', 'Taungsday', 'Centaxday', 'Primeday', 'Saturday']
	    };
	    XDate.defaultLocale = 'starwars';
	    var good =
		new XDate(2011, 3, 29).toString('dddd yyyy') == 'Primeday 2011' &&
		new XDate(2011, 3, 4, 12).toUTCString('dddd yyyy') == 'Benduday 2011';
	    XDate.defaultLocale = '';
	    return good;
	}


	public custom_formatter_string() : boolean  {
	    XDate.formatters.xxx = 'yyyyMMdd';
	    var d = new XDate('2012-11-01');
	    return d.toString('xxx') == '20121101';
	}


	public custom_formatter_function() : boolean  {
	    XDate.formatters.vvv = function(xdate, useUTC) {
		return "cool/" + useUTC + "/" + xdate.getDate();
	    };
	    var d = new XDate('2012-10-05');
	    return d.toString('vvv') == "cool/false/5" &&
		d.toUTCString('vvv') == "cool/true/5";
	}


	public toString_methods_hasLocalTimezone_yes() : boolean  {
	    var realDate = new Date(2011, 3, 20, 12, 30);
	    var xdate = new XDate(2011, 3, 20, 12, 30);
	    return realDate.toString() == xdate.toString() &&
		realDate.toDateString() == xdate.toDateString() &&
		realDate.toTimeString() == xdate.toTimeString() &&
		realDate.toLocaleString() == xdate.toLocaleString() &&
		realDate.toLocaleDateString() == xdate.toLocaleDateString() &&
		realDate.toLocaleTimeString() == xdate.toLocaleTimeString() &&
		realDate.toUTCString() == xdate.toUTCString();
	    //toGMTString() was abolition
	    //&&
	    //realDate.toGMTString() == xdate.toGMTString();
	}

	public toString_methods_hasLocalTimezone_no() : boolean  {
	    var realDate = new Date(2011, 3, 20, 12, 30);
	    var xdate = new XDate(2011, 3, 20, 12, 30);
	    xdate.setUTCMode(false);
	    return realDate.toString().indexOf(xdate.toString()) == 0 &&
		realDate.toTimeString().indexOf(xdate.toTimeString()) == 0 &&
		realDate.toLocaleString().indexOf(xdate.toLocaleString()) == 0 &&
		realDate.toLocaleDateString().indexOf(xdate.toLocaleDateString()) == 0 &&
		realDate.toLocaleTimeString().indexOf(xdate.toLocaleTimeString()) == 0;
	}

	public toGMTString() : boolean  {
	    var xdate = new XDate();
	    return xdate.toUTCString() == xdate.toGMTString();
	}

    }

    //based on xdate/test/getters.js
    class getters extends test_base
    {

	public getTime_valueOf() : boolean {
	    var MS = 933490800000;
	    var xdate1 = new XDate(MS);
	    var xdate2 = new XDate(MS, false);
	    //	    return xdate1.getTime() == MS && xdate1.valueOf() == MS && +xdate1 == MS &&
	    //	xdate2.getTime() == MS && xdate2.valueOf() == MS && xdate2 == MS;

	    return xdate1.getTime() == MS && xdate1.valueOf() == MS &&
	    	xdate2.getTime() == MS && xdate2.valueOf() == MS;

	}

	public getUTC() : boolean {
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var HOURS = 13;
	    var MINUTES = 45;
	    var SECONDS = 20;
	    var MILLISECONDS = 750;
	    var xdate = new XDate(Date.UTC(YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS));
	    return xdate.getUTCFullYear() == YEAR &&
		xdate.getUTCMonth() == MONTH &&
		xdate.getUTCDate() == DATE &&
		xdate.getUTCHours() == HOURS &&
		xdate.getUTCMinutes() == MINUTES &&
		xdate.getUTCSeconds() == SECONDS &&
		xdate.getUTCMilliseconds() == MILLISECONDS;
	}

	//Deprecated
	// public getYear()  : boolean {
	//     var xdate = new XDate(1999, 0, 1);
	//     return xdate.getYear() == 99;
	// }

	public getWeek() : boolean {
	    return new XDate(2011, 2, 1).getWeek() == 9;
	}

	public getUTCWeek() : boolean {
	    return new XDate(2011, 2, 1, 12, 30).getUTCWeek() == 9;
	}

	//Non-standard
	/*
	public getWeek_getUTCWeek_mega_test() : boolean {
	    if (!Date.prototype.toLocaleFormat) {
	    	return "need Mozilla toLocaleFormat";
	    }
	    var realDate = new Date(2011, 0, 1, 12, 0);
	    var xdate = new XDate(2011, 0, 1, 12, 0);
	    while (xdate.getFullYear() != 2014) {
		var w1 = parseInt(realDate.toLocaleFormat('%V'), 10);
		var w2 = xdate.getWeek();
		if (w1 != w2) {
		    return [
			false,
			realDate.toString() + '=' + w1 + ' ' + xdate.toString() + '=' + w2
		    ];
		}
		var realDateUTC = XDate(realDate).setUTCMode(true, true).toDate();
		w1 = parseInt(realDateUTC.toLocaleFormat('%V'), 10);
		w2 = xdate.getUTCWeek();
		if (w1 != w2) {
		    return [
			false,
			realDateUTC.toUTCString() + '=' + w1 + ' ' + xdate.toUTCString() + '=' + w2 + ' (UTC!)'
		    ];
		}
		realDate.setDate(realDate.getDate() + 1);
		xdate.setDate(xdate.getDate() + 1);
	    }
	    return true;
	}
	*/

    }

    // based on xdate/test/parsing.js
    class parsing extends test_base
    {

	public IETF() : boolean {
	    var s = "Sat Apr 23 2011 13:44:12 GMT";
	    var d = new XDate(s);
	    return d.getUTCFullYear() == 2011 &&
		d.getUTCMonth() == 3 &&
		d.getUTCDate() == 23 &&
		d.getUTCHours() == 13 &&
		d.getUTCMinutes() == 44 &&
		d.getUTCSeconds() == 12 &&
		!d.getUTCMode() &&
		+d == +new Date(s);
	}


	public ISO_no_time() : boolean
	{
	    var s = "2010-06-08";
	    var d = new XDate(s);
	    return d.getFullYear() == 2010 &&
		d.getMonth() == 5 &&
		d.getDate() == 8 &&
		!d.getHours() &&
		!d.getMinutes() &&
		!d.getSeconds() &&
		!d.getMilliseconds() &&
		!d.getUTCMode();
	}


	public ISO_T() : boolean {
	    var s = "2010-06-08T14:45:30";
	    var d = new XDate(s);
	    return d.getFullYear() == 2010 &&
		d.getMonth() == 5 &&
		d.getDate() == 8 &&
		d.getHours() == 14 &&
		d.getMinutes() == 45 &&
		d.getSeconds() == 30 &&
		!d.getMilliseconds() &&
		!d.getUTCMode();
	}


	public ISO_space()  : boolean {
	    var s = "2010-06-08 14:45:30";
	    var d = new XDate(s);
	    return d.getFullYear() == 2010 &&
		d.getMonth() == 5 &&
		d.getDate() == 8 &&
		d.getHours() == 14 &&
		d.getMinutes() == 45 &&
		d.getSeconds() == 30 &&
		!d.getMilliseconds() &&
		!d.getUTCMode();
	}


	public ISO_no_seconds() : boolean {
	    var s = "2010-06-08T14:45";
	    var d = new XDate(s);
	    return d.getFullYear() == 2010 &&
		d.getMonth() == 5 &&
		d.getDate() == 8 &&
		d.getHours() == 14 &&
		d.getMinutes() == 45 &&
		!d.getSeconds() &&
		!d.getMilliseconds() &&
		!d.getUTCMode();
	}


	public ISO_milliseconds()  : boolean {
	    var s = "2010-06-08T14:45:30.500";
	    var d = new XDate(s);
	    return d.getFullYear() == 2010 &&
		d.getMonth() == 5 &&
		d.getDate() == 8 &&
		d.getHours() == 14 &&
		d.getMinutes() == 45 &&
		d.getSeconds() == 30 &&
		d.getMilliseconds() == 500 &&
		!d.getUTCMode();
	}


	public ISO_timezone_colon()  : boolean {
	    var s = "2010-06-08T14:00:28-02:30";
	    var d = new XDate(s);
	    return d.getUTCHours() == 16 &&
		d.getUTCMinutes() == 30 &&
		d.getUTCSeconds() == 28 &&
		!d.getUTCMode();
	}


	public ISO_timezone_no_colon()  : boolean {
	    var s = "2010-06-08T14:00:28-0230";
	    var d = new XDate(s);
	    return d.getUTCHours() == 16 &&
		d.getUTCMinutes() == 30 &&
		d.getUTCSeconds() == 28 &&
		!d.getUTCMode();
	}


	public ISO_timezone_hour_only() : boolean {
	    var s = "2010-06-08T14:45:34-02";
	    var d = new XDate(s);
	    return d.getUTCHours() == 16 &&
		d.getUTCMinutes() == 45 &&
		d.getUTCSeconds() == 34 &&
		!d.getUTCMode();
	}


	public ISO_timezone_positive() : boolean {
	    var s = "2010-06-08T14:00:28+02:30";
	    var d = new XDate(s);
	    return d.getUTCHours() == 11 &&
		d.getUTCMinutes() == 30 &&
		d.getUTCSeconds() == 28 &&
		!d.getUTCMode();
	}


	public ISO_with_Z() : boolean {
	    var d = new XDate('2011-06-08T00:00:00Z');
	    return d.getUTCFullYear() == 2011 &&
		d.getUTCMonth() == 5 &&
		d.getUTCDate() == 8 &&
		!d.getUTCHours() && !d.getUTCMinutes() &&
		!d.getUTCMode();
	}


	public ISO_no_timezone_utcMode_true() : boolean {
	    var s = "2010-06-08T14:30:28";
	    var d = new XDate(s, true);
	    return d.getFullYear() == 2010 && d.getUTCFullYear() == 2010 &&
		d.getMonth() == 5 && d.getUTCMonth() == 5 &&
		d.getDate() == 8 && d.getUTCDate() == 8 &&
		d.getHours() == 14 && d.getUTCHours() == 14 &&
		d.getMinutes() == 30 && d.getUTCMinutes() == 30 &&
		d.getSeconds() == 28 && d.getUTCSeconds() == 28;
	}


	public in_and_out() : boolean {
	    var d = new XDate();
	    return +new XDate(d.toISOString()) == +d;
	}

    }

    // based on xdate/test/setters.js
    class setters extends test_base
    {

	public set_when_utcMode_false(): boolean{
	    var xdate = new XDate(2012, 0, 1);
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var HOURS = 13;
	    var MINUTES = 45;
	    var SECONDS = 20;
	    var MILLISECONDS = 750;
	    xdate.setFullYear(YEAR)
		.setMonth(MONTH)
		.setDate(DATE)
		.setHours(HOURS)
		.setMinutes(MINUTES)
		.setSeconds(SECONDS)
		.setMilliseconds(MILLISECONDS);
	    return xdate.getFullYear() == YEAR &&
		xdate.getMonth() == MONTH &&
		xdate.getDate() == DATE &&
		xdate.getHours() == HOURS &&
		xdate.getMinutes() == MINUTES &&
		xdate.getSeconds() == SECONDS &&
		xdate.getMilliseconds() == MILLISECONDS;
	}

	public set_when_utcMode_true() : boolean{
	    var xdate = new XDate(2012, 0, 1, 0,0,0,0, true);
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var HOURS = 13;
	    var MINUTES = 45;
	    var SECONDS = 20;
	    var MILLISECONDS = 750;
	    xdate.setFullYear(YEAR)
		.setMonth(MONTH)
		.setDate(DATE)
		.setHours(HOURS)
		.setMinutes(MINUTES)
		.setSeconds(SECONDS)
		.setMilliseconds(MILLISECONDS);
	    return xdate.getFullYear() == YEAR &&
		xdate.getMonth() == MONTH &&
		xdate.getDate() == DATE &&
		xdate.getHours() == HOURS &&
		xdate.getMinutes() == MINUTES &&
		xdate.getSeconds() == SECONDS &&
		xdate.getMilliseconds() == MILLISECONDS;
	}

	public setTime() : boolean {
	    var MS = 933490800000;
	    var xdate1 = new XDate();
	    var xdate2 = new XDate().setUTCMode(true);
	    xdate1.setTime(MS);
	    xdate2.setTime(MS);
	    return xdate1.getTime() == MS && xdate2.getTime() == MS;
	}

	public setFullYear_allow_overflow() : boolean {
	    var xdate1 = new XDate(2012, 1, 29);
	    var xdate2 = new XDate(2012, 1, 29);
	    xdate1.setFullYear(2013);
	    xdate2.setFullYear(2013, false);
	    return xdate1.getMonth() == 2 && xdate1.getDate() == 1 &&
		xdate2.getMonth() == 2 && xdate2.getDate() == 1;
	}

	public setYear_prevent_overflow() : boolean {
	    var xdate = new XDate(2012, 1, 29);
	    xdate.setFullYear(2013, true);
	    return xdate.getMonth() == 1 && xdate.getDate() == 28;
	}

	public setMonth_allow_overflow() : boolean {
	    var xdate1 = new XDate(2010, 2, 31, 12);
	    var xdate2 = new XDate(2010, 2, 31, 12);
	    xdate1.setMonth(1);
	    xdate2.setMonth(1, false);
	    return xdate1.getMonth() == 2 && xdate1.getDate() == 3 &&
		xdate2.getMonth() == 2 && xdate2.getDate() == 3
	}

	public setMonth_prevent_overflow() : boolean {
	    var d = new XDate(2010, 2, 31, 12);
	    d.setMonth(1, true);
	    return d.getMonth() == 1 && d.getDate() == 28;
	}

	public setUTC_with_utcMode_false() : boolean {
	    var xdate = new XDate(2012, 0, 1);
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var HOURS = 13;
	    var MINUTES = 45;
	    var SECONDS = 20;
	    var MILLISECONDS = 750;
	    xdate.setUTCFullYear(YEAR)
		.setUTCMonth(MONTH)
		.setUTCDate(DATE)
		.setUTCHours(HOURS)
		.setUTCMinutes(MINUTES)
		.setUTCSeconds(SECONDS)
		.setUTCMilliseconds(MILLISECONDS);
	    return xdate.getUTCFullYear() == YEAR &&
		xdate.getUTCMonth() == MONTH &&
		xdate.getUTCDate() == DATE &&
		xdate.getUTCHours() == HOURS &&
		xdate.getUTCMinutes() == MINUTES &&
		xdate.getUTCSeconds() == SECONDS &&
		xdate.getUTCMilliseconds() == MILLISECONDS;
	}

	public setUTC_with_utcMode_true() : boolean {
	    var xdate = new XDate(2012, 0, 1,0,0,0,0, true);
	    var YEAR = 2011;
	    var MONTH = 5;
	    var DATE = 4;
	    var HOURS = 13;
	    var MINUTES = 45;
	    var SECONDS = 20;
	    var MILLISECONDS = 750;
	    xdate.setUTCFullYear(YEAR)
		.setUTCMonth(MONTH)
		.setUTCDate(DATE)
		.setUTCHours(HOURS)
		.setUTCMinutes(MINUTES)
		.setUTCSeconds(SECONDS)
		.setUTCMilliseconds(MILLISECONDS);
	    return xdate.getUTCFullYear() == YEAR &&
		xdate.getUTCMonth() == MONTH &&
		xdate.getUTCDate() == DATE &&
		xdate.getUTCHours() == HOURS &&
		xdate.getUTCMinutes() == MINUTES &&
		xdate.getUTCSeconds() == SECONDS &&
		xdate.getUTCMilliseconds() == MILLISECONDS;
	}

	//Deprecated
	// public setYear() : boolean {
	//     var xdate = new XDate(2010, 0, 1);
	//     xdate.setYear(99);
	//     return xdate.getFullYear() == 1999;
	// }

	public setWeek()  :  boolean {
	    function test(xdate : XDate , n :  number) {
		var year = xdate.getFullYear();
		xdate.setWeek(n);
		return xdate.getWeek() == n &&
		    xdate.getFullYear() == year &&
		    xdate.getDay() == 1 && // monday
		    xdate.getHours() == 0 &&
		    xdate.getMinutes() == 0 &&
		    xdate.getSeconds() == 0 &&
		    xdate.getMilliseconds() == 0;
	    }
	    return test(new XDate(), 50) &&
		test(new XDate(), 21) &&
		test(new XDate(2011, 5, 5), 5) &&
		test(new XDate(2009, 12, 12), 13);
	}

	public setWeek_with_year() : boolean {
	    function test(xdate : XDate , n : number , year : number) {
		xdate.setWeek(n, year);
		return xdate.getWeek() == n &&
		    xdate.getFullYear() == year &&
		    xdate.getDay() == 1 && // monday
		    xdate.getHours() == 0 &&
		    xdate.getMinutes() == 0 &&
		    xdate.getSeconds() == 0 &&
		    xdate.getMilliseconds() == 0;
	    }
	    return test(new XDate(), 50, 2013) &&
		test(new XDate(), 21, 2014) &&
		test(new XDate(2011, 5, 5), 5, 1999) &&
		test(new XDate(2009, 12, 12), 13, 1995);
	}

	public setUTCWeek() : boolean {
	    function test(xdate : XDate , n : number) {
		var year = xdate.getUTCFullYear();
		xdate.setUTCWeek(n);
		return xdate.getUTCWeek() == n &&
		    xdate.getUTCFullYear() == year &&
		    xdate.getUTCDay() == 1 && // monday
		    xdate.getUTCHours() == 0 &&
		    xdate.getUTCMinutes() == 0 &&
		    xdate.getUTCSeconds() == 0 &&
		    xdate.getUTCMilliseconds() == 0;
	    }
	    return test(new XDate(), 50) &&
		test(new XDate(), 21) &&
		test(new XDate(2011, 5, 5), 5) &&
		test(new XDate(2009, 12, 12), 13);
	}

	public setUTCWeek_with_year() : boolean{
	    function test(xdate : XDate , n : number , year : number ) {
		xdate.setUTCWeek(n, year);
		return xdate.getUTCWeek() == n &&
		    xdate.getUTCFullYear() == year &&
		    xdate.getUTCDay() == 1 && // monday
		    xdate.getUTCHours() == 0 &&
		    xdate.getUTCMinutes() == 0 &&
		    xdate.getUTCSeconds() == 0 &&
		    xdate.getUTCMilliseconds() == 0;
	    }
	    return test(new XDate(), 50, 2013) &&
		test(new XDate(), 21, 2014) &&
		test(new XDate(2011, 5, 5), 5, 1999) &&
		test(new XDate(2009, 12, 12), 13, 1995);
	}

	public setWeek_overflow() : boolean {
	    var xdate = new XDate(2012, 0, 3);
	    xdate.setWeek(54);
	    return xdate.getFullYear() == 2013 &&
		xdate.getWeek() == 2 &&
		xdate.getMonth() == 0 &&
		xdate.getDate() == 7;
	}

	public setWeek_underflow() : boolean {
	    var xdate = new XDate(2012, 0, 2); // a monday
	    return +xdate.clone().setWeek(0) == +xdate.clone().addWeeks(-1) &&
		+xdate.clone().setWeek(-1) == +xdate.clone().addWeeks(-2);
	}

	public setUTCWeek_correctly_handles_UTC_week_numbering_edge_case() : boolean{
	    var date = new XDate(Date.UTC(2010, 0, 3));

	    var wasWeek53 = date.getUTCWeek() === 53;
	    date.setUTCWeek(53);

	    return wasWeek53 && "Mon, 28 Dec 2009 00:00:00 GMT" === date.toUTCString();
	}

    }

    // based on xdate/test/utc-mode.js
    class utc_mode extends test_base
    {

	public identical_methods() : boolean {
	    var xdate = new XDate(true);
	    return xdate.getFullYear() == xdate.getUTCFullYear() &&
		xdate.getMonth() == xdate.getUTCMonth() &&
		xdate.getDate() == xdate.getUTCDate() &&
		xdate.getHours() == xdate.getUTCHours() &&
		xdate.getMinutes() == xdate.getUTCMinutes() &&
		xdate.getSeconds() == xdate.getUTCSeconds() &&
		xdate.getMilliseconds() == xdate.getUTCMilliseconds();
	}

	public getUTCMode() : boolean {
	    var xdate1 = new XDate(0, true);
	    var xdate2 = new XDate(0, false);
	    return xdate1.getUTCMode() && !xdate2.getUTCMode();
	}

	public setUTCMode_to_true() : boolean {
	    var xdate1 = new XDate();
	    var xdate2 = xdate1.clone().setUTCMode(true);
	    return !xdate1.getUTCMode() && xdate2.getUTCMode() && +xdate1 == +xdate2;
	}

	public setUTCMode_to_true_coerce() : boolean {
	    var xdate1 = new XDate();
	    var xdate2 = xdate1.clone().setUTCMode(true, true);
	    return !xdate1.getUTCMode() &&
			xdate2.getUTCMode() &&
			(!xdate1.getTimezoneOffset() || xdate1.getTime() != xdate2.getTime()) &&
			xdate1.getDate() == xdate2.getDate() &&
			xdate2.getDate() == xdate2.getUTCDate() &&
			xdate1.getHours() == xdate2.getHours() &&
			xdate2.getHours() == xdate2.getUTCHours();
	}

	public setUTCMode_to_false() : boolean {
	    var xdate1 = new XDate(2011, 5, 8, 0,0,0,0, true);
	    var xdate2 = xdate1.clone().setUTCMode(false);
	    return xdate1.getUTCMode() && !xdate2.getUTCMode() && +xdate1 == +xdate2;
	}

	public setUTCMode_to_false_coerce() : boolean {
	    var xdate1 = new XDate(2011, 7, 8, 0,0,0,0, true);
	    var xdate2 = xdate1.clone().setUTCMode(false, true);
	    return xdate1.getUTCMode() && !xdate2.getUTCMode() &&
		(!xdate1.getTimezoneOffset() || xdate1.getTime() != xdate2.getTime()) &&
		xdate1.getDate() == xdate2.getDate() &&
		xdate1.getHours() == xdate1.getHours();
	}

	public getTimezoneOffset() : boolean {
	    var date = new Date();
	    var xdate1 = new XDate(+date);
	    var xdate2 = new XDate(+date, true);
	    return xdate1.getTimezoneOffset() == date.getTimezoneOffset() &&
		!xdate2.getTimezoneOffset();
	}
    }

    // bases on xdate/test/utilities.js
    class utilities extends test_base
    {

	public clone() : boolean {
	    var d1 = new XDate();
	    var d2 = d1.clone();
	    d2.addMinutes(30);
	    return +d1 != +d2;
	}


	public clearTime() : boolean {
	    var d = new XDate(2010, 2, 5, 16, 15, 10, 100);
	    d.clearTime();
	    return !d.getHours() && !d.getMinutes() && !d.getSeconds() && !d.getMilliseconds();
	}


	public valid() : boolean {
	    var good = new XDate();
	    var bad = new XDate('asdf');
	    return good.valid() && !bad.valid();
	}


	public toDate_hasLocalTimezone_yes() : boolean {
	    var d = new Date(2012, 5, 8);
	    var xdate = new XDate(d);
	    return +xdate.toDate() == +d;
	}


	public toDate_hasLocalTimezone_no() : boolean {
	    var d = new Date(2012, 5, 8);
	    var xdate = new XDate(+d, false);
	    return +xdate.toDate() == +d;
	}


	public getDaysInMonth() : boolean {
	    return XDate.getDaysInMonth(2011, 1) == 28 && // feb
	    XDate.getDaysInMonth(2012, 1) == 29 && // feb, leap year
	    XDate.getDaysInMonth(2012, 8) == 30 && // sep
	    XDate.getDaysInMonth(2012, 6) == 31; // jul
	}


	public UTC_class_method() : boolean {
	    return Date.UTC(2011, 3, 20, 12, 30) == XDate.UTC(2011, 3, 20, 12, 30);
	}


	public parse_class_method() : boolean {
	    var s = "Sat Apr 23 2011 13:44:12 GMT-0700 (PDT)";
	    return Date.parse(s) == XDate.parse(s);
		//&&
	    //isNaN(Date.parse()) && isNaN(XDate.parse());
	}


	public now_class_method() : boolean {
	    return Math.abs(+new Date() - XDate.now()) < 1000;
	}


	public today_class_method() : boolean {
	    var xdate = XDate.today();
	    var d = new Date();
	    return xdate.getFullYear() == d.getFullYear() &&
		xdate.getMonth() == d.getMonth() &&
		xdate.getDate() == d.getDate() &&
		!xdate.getHours() &&
		!xdate.getSeconds() &&
		!xdate.getMilliseconds();
	}


	public toJSON() : boolean {
	    var realDate = new Date(2011, 3, 20, 12, 30);
	    var xdate = new Date(2011, 3, 20, 12, 30);
	    if (!realDate.toJSON) {
		return false;
	    }
	    return realDate.toJSON() == xdate.toJSON();
	}


	public chaining() : boolean {
	    var d = new XDate()
//		.setYear(99)
		.setFullYear(2011)
		.setWeek(50)
		.setMonth(1)
		.setDate(5)
		.setHours(12)
		.setMinutes(50)
		.setSeconds(20)
		.setMilliseconds(500)
		.setTime(0)
		.addYears(1)
		.addMonths(1)
		.addDays(1)
		.addMinutes(1)
		.addSeconds(1)
		.addMilliseconds(1)
		.clone()
		.clearTime()
		.setUTCFullYear(2010)
		.setUTCMonth(6)
		.setUTCWeek(5)
		.setUTCDate(4)
		.setUTCHours(12)
		.setUTCMinutes(30)
		.setUTCSeconds(30)
		.setUTCMilliseconds(10)
		.setUTCMode(true);
	    return d instanceof XDate;
	}

    }

}

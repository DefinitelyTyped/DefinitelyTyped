import * as moment from "moment";

const dp = $("#picker").datetimepicker().data("DateTimePicker");

function test_cases() {
    $("#datetimepicker").datetimepicker();
    $("#datetimepicker").datetimepicker({
        minDate: "2012-12-31"
    });

    $("#datetimepicker").data("DateTimePicker").maxDate("2012-12-31");

    let startDate = moment(new Date(2012, 1, 20));
    const endDate = moment(new Date(2012, 1, 25));

    $("#datetimepicker2")
        .datetimepicker()
        .on("dp.change", ev => {
            if (ev.date.valueOf() > endDate.valueOf()) {
                $("#alert").show().find("strong").text("The start date must be before the end date.");
            } else {
                $("#alert").hide();
                startDate = ev.date;
                $("#date-start-display").text($("#date-start").data("date"));
            }
        })
        .on("dp.error", ev => {
            console.log(`Error: ${ev.date.format("YYYY-MM-DD")}`);
        })
        .on("dp.update", ev => {
            console.log(`Change: ${ev.change}, ${ev.viewDate.format("YYYY-MM-DD")}`);
        });
}

function test_date() {
    let momentObj = moment("20111031", "YYYYMMDD");

    dp.date(null);
    dp.date("1969-07-21");
    dp.date(new Date());
    dp.date(momentObj);

    momentObj = dp.date();
}

function test_format() {
    let boolFormat = false;
    let strFormat = "YYYY-MM-DD";
    let momentFormat = moment.ISO_8601;

    $("#picker").datetimepicker({
        format: boolFormat
    });

    $("#picker").datetimepicker({
        format: strFormat
    });

    $("#picker").datetimepicker({
        format: momentFormat
    });

    dp.format(boolFormat);
    boolFormat = dp.format() as boolean;

    dp.format(strFormat);
    strFormat = dp.format() as string;

    dp.format(momentFormat);
    momentFormat = dp.format() as moment.MomentBuiltinFormat;
}

function test_extraFormats() {
    let boolFormat = false;
    let strFormats = ["YYYYMMDD", "YYYY/MM/DD"];
    let mixFormats = ["YYYYMMDD", moment.ISO_8601];

    $("#picker").datetimepicker({
        extraFormats: boolFormat
    });

    $("#picker").datetimepicker({
        extraFormats: strFormats
    });

    $("#picker").datetimepicker({
        extraFormats: mixFormats
    });

    dp.extraFormats(boolFormat);
    boolFormat = dp.extraFormats() as boolean;

    dp.extraFormats(strFormats);
    strFormats = dp.extraFormats() as string[];

    dp.extraFormats(mixFormats);
    mixFormats = dp.extraFormats() as Array<(string | moment.MomentBuiltinFormat)>;
}

function test_timeZone() {
    let nullTz = null;
    let strFormats = "Africa/Abidjan";

    $("#picker").datetimepicker({
        timeZone: nullTz
    });

    $("#picker").datetimepicker({
        timeZone: strFormats
    });

    dp.timeZone(nullTz);
    nullTz = dp.timeZone() as null;

    dp.timeZone(strFormats);
    strFormats = dp.timeZone() as string;
}

function test_widgetParent() {
    let nullW: null = null;
    let str = "myId";
    let jquery = $("#element");

    $("#picker").datetimepicker({
        widgetParent: nullW
    });

    $("#picker").datetimepicker({
        widgetParent: str
    });

    $("#picker").datetimepicker({
        widgetParent: jquery
    });

    dp.widgetParent(nullW);
    nullW = dp.widgetParent() as null;

    dp.widgetParent(str);
    str = dp.widgetParent() as string;

    dp.widgetParent(jquery);
    jquery = dp.widgetParent() as JQuery;
}

function inputParser(inputDate: string | Date | moment.Moment) {
    const relativeDatePattern = /[0-9]+\s+(days ago)/;

    if (moment.isMoment(inputDate) || inputDate instanceof Date) {
        return moment(inputDate);
    } else {
        const relativeDate = inputDate.match(relativeDatePattern);
        if (relativeDate !== null) {
            const subDays = +relativeDate[0].replace("days ago", "").trim();
            return moment().subtract(subDays, "day");
        } else {
            return moment();
        }
    }
}

function test_parseInputDate() {
    let undef: undefined;
    let parser: BootstrapV3DatetimePicker.InputParser;

    $("#picker").datetimepicker();

    $("#picker").datetimepicker({
        parseInputDate: inputParser
    });

    undef = dp.parseInputDate() as undefined;
    parser = dp.parseInputDate() as BootstrapV3DatetimePicker.InputParser;
}

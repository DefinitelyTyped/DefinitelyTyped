import IntlRelativeFormat from "intl-relativeformat";

let dateFormatter = new IntlRelativeFormat("en-US");

dateFormatter = new IntlRelativeFormat("en-US", {
    units: "day"
});
dateFormatter = new IntlRelativeFormat("en-US", {
    units: "day",
    style: "numeric"
});

console.log(dateFormatter.resolvedOptions().locale);

dateFormatter.format(new Date());
dateFormatter.format(new Date(), { now: new Date() });

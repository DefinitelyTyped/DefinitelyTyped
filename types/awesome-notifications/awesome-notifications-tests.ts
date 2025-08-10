import AWN = require("awesome-notifications");

const awn = new AWN({
    icons: {
        enabled: true,
        prefix: "",
        suffix: "",
    },
});

const confirmed = () => console.log("Confirmed");
const cancelled = () => console.log("Cancelled");

awn.confirm(`Tests new confirmOk property name`, confirmed, cancelled, {
    labels: {
        confirmOk: "New property name works",
    },
});

import AWN from "awesome-notifications";

const awn = new AWN();

const confirmed = () => console.log("Confirmed");
const cancelled = () => console.log("Cancelled");

awn.confirm(`Tests current confirmOK property name`, confirmed, cancelled, {
  labels: {
    confirmOK: "Current property name does not work"
  }
});

awn.confirm(`Tests new confirmOk property name`, confirmed, cancelled, {
  labels: {
    confirmOk: "New property name works"
  }
});

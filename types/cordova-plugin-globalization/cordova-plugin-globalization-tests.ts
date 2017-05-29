navigator.globalization.dateToString(new Date(),
    (date) => { console.log(JSON.stringify(date)); },
    (error) => { alert(error.message); },
    { formatLength: "short", selector: "date" });

navigator.globalization.getDateNames(
    (names) => {
        names.value.forEach((name) => { console.log(name); });
    },
    (error) => { alert(error.message); },
    { item: "months", type: "wide" });
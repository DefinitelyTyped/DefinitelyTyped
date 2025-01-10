import winattr = require("winattr");

function get() {
    winattr.get("/home/test", (error, attrs) => {
        if (error === null) {
            console.log(attrs.hidden);
        } else {
            console.error(error.message);
        }
    });
}

function getSync() {
    try {
        const attrs = winattr.getSync("/home/test");
        console.log(attrs.hidden);
    } catch (ex) {
        console.error(ex.message);
    }
}

function set() {
    winattr.set("/home/test", { hidden: true }, (error) => {
        if (error === null) {
            console.log("success");
        } else {
            console.error(error.message);
        }
    });
}

function setSync() {
    try {
        winattr.setSync("/home/test", { hidden: true });
        console.log("success");
    } catch (ex) {
        console.error(ex.message);
    }
}

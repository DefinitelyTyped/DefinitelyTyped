import * as Awesomplete from 'awesomplete';

const input = document.getElementById("myinput");
new Awesomplete(input, {list: "#mylist"});

new Awesomplete(input, {list: document.querySelector("#mylist")});

new Awesomplete(input, {
    list: ["Ada", "Java", "JavaScript", "LOLCODE", "Node.js", "Ruby on Rails"]
});

const awesomplete = new Awesomplete(input);
awesomplete.list = ["Ada", "Java", "JavaScript", "LOLCODE", "Node.js", "Ruby on Rails"];

new Awesomplete(input, {
    list: [
        { label: "Belarus", value: "BY" },
        { label: "China", value: "CN" },
        { label: "United States", value: "US" }
    ]
});

// Same with arrays:
new Awesomplete(input, {
    list: [
        [ "Belarus", "BY" ],
        [ "China", "CN" ],
        [ "United States", "US" ]
    ]
});

new Awesomplete('input[type="email"]', {
    list: ["aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com",
           "gmx.com", "googlemail.com", "google.com", "hotmail.com",
           "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com",
           "live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk"],
    data: (text: string, input: string) => {
        return input.slice(0, input.indexOf("@")) + "@" + text;
    },
    filter: Awesomplete.FILTER_STARTSWITH
});

new Awesomplete('input[data-multiple]', {
    filter: (text: string, input: any) => {
        return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
    },

    replace: (text: string) => {
        const before = this.input.value.match(/^.+,\s*|/)[0];
        this.input.value = before + text + ", ";
    }
});

const ajax = new XMLHttpRequest();
ajax.open("GET", "https://restcountries.eu/rest/v1/lang/fr", true);
ajax.onload = () => {
    const list = JSON.parse(ajax.responseText).map((i: any) => i.name);
    new Awesomplete(document.querySelector("#ajax-example input"), { list });
};
ajax.send();

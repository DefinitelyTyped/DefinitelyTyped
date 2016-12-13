clipboard.copy("Hello World");
clipboard.copy(document.body).then(() => console.log("success"));

clipboard.paste().then(val => console.log(val));

Rellax(".js-rellax");

const elm = document.getElementById("#id");
if (elm) {
    new Rellax(elm);
}

const options: Rellax.RellaxOptions = {
    center: true,
    horizontal: false,
    vertical: true,
    round: true,
    speed: 3000,
    wrapper: "#wrap",
    callback: pos => {}
};

Rellax(".rellax", options);

const instance = new Rellax(".rellax", options);

instance.destroy();
instance.refresh();

console.log(instance.elms);
console.log(instance.options);

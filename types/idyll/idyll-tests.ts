import idyll = require("idyll");

// $ExpectType IdyllInstance
idyll({
    watch: true,
    datasets: "."
});

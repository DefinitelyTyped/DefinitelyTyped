

var egg = new Egg();
egg
    .addCode("up,up,down,down,left,right,left,right,b,a", function () {
    alert("Konami!");
}, "konami-code")
    .addHook(function () {
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
})
    .listen();

var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function () {
    alert("Konami!");
}).listen();

// EGGSAMPLE
var egg = new Egg();
egg
    .AddCode("up,up,down,down,left,right,left,right,b,a", function () {
    alert("Konami!");
}, "konami-code")
    .AddHook(function () {
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
}).Listen();

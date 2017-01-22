var wdFrp = require("wonder-frp");

wdFrp.fromArray([1,2,3])
    .subscribe(null,null,function(){
        console.log("completed");
    });

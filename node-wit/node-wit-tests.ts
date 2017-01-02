import { Wit, log } from "node-wit";

var wit = new Wit({accessToken: "", logger: new log.Logger(log.DEBUG)});
wit.message("Hello", {}).then((res) => {
    console.log(res._text);

    for (let entity of res.entities) {
        
        console.log(entity.value + ": " + entity.confidence * 100 + "%");
    }

}).catch((err) => {

});
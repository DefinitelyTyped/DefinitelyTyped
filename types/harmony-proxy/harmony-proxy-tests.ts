

import * as Proxy from "harmony-proxy";

interface IKatana {
    use: () => void;
}

class Katana implements IKatana {
    public use() {
        console.log("Used Katana!");
    }
}

let handler = {
    apply: function(target: any, thisArg: any, argArray: any) {
        console.log(`Starting: ${performance.now()}`);
        let result = target.apply(thisArg, argArray);
        console.log(`Finished: ${performance.now()}`);
        return result;
    }
};

let katana = new Katana();

let katanaProxy =  new Proxy<IKatana>(katana, handler);
katanaProxy.use();

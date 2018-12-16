import { modal } from 'tingle.js';

let instance = new modal();
instance.open();
instance.checkOverflow();
instance.close();
instance.close();

instance = new modal({
    onOpen() {
        this.checkOverflow();
    },
    beforeClose() {
        return this.isOverflow();
    },
});

instance.addFooterBtn('text', undefined, function(e) {
    e.x;
    this.innerText;
});

instance.setStickyFooter(false);

/// <reference path="utf8.d.ts" />

import utf8 = require("utf8");

    utf8.encode("\x49");
    utf8.encode("\uD800\uDC01");
}

    utf8.decode("\xC2\x49");
    utf8.decode("\xF0\x90\x80\x81");
}

    if (typeof utf8.version === "string") {
        console.log(utf8.version);
    }
}

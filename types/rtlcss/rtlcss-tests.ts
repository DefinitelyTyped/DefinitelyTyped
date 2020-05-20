import * as rtlcss from "rtlcss";

rtlcss.process("body { direction:ltr; }");

const config = {
    autoRename: false,
    autoRenameStrict: false,
    blacklist: {},
    clean: true,
    greedy: false,
    processUrls: false,
    stringMap: [
        {
            name    : 'left-right',
            priority: 100,
            search  : ['left', 'Left', 'LEFT'],
            replace : ['right', 'Right', 'RIGHT'],
            options : {
                scope : '*',
                ignoreCase : false
            }
        }
    ],
    useCalc: false
};

rtlcss.configure(config);

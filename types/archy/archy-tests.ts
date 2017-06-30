
import archy = require("archy");

var opts: archy.Options = {
};

var data: archy.Data = {
    label: 'beep',
    nodes: [
        'ity',
        {
            label: 'boop',
            nodes: [
                {
                    label: 'o_O',
                    nodes: [
                        {
                            label: 'oh',
                            nodes: ['hello', 'puny']
                        },
                        'human'
                    ]
                },
                'party\ntime!'
            ]
        }
    ]
};

var str = archy(data);
console.log(str);

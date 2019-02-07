import psList = require('ps-list');

(async () => {
    const processes: psList.ProcessDescriptor[] = await psList();
    psList({ all: false });

    processes[0].pid; // $ExpectType number
    processes[0].name; // $ExpectType string
    processes[0].ppid; // $ExpectType number
    processes[0].cmd; // $ExpectType string | undefined
    processes[0].cpu; // $ExpectType number | undefined
    processes[0].memory; // $ExpectType number | undefined
})();

import ps_tree from "ps-tree";

ps_tree(1, () => {}); // $ExpectType void
ps_tree(1, (error: Error, children: ReadonlyArray<ps_tree.PS>) => {
    children[0].COMMAND; // $ExpectType string
    children[0].PID; // $ExpectType string
    children[0].PPID; // $ExpectType string
    children[0].STAT; // $ExpectType string
});

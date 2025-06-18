import ps_tree from "ps-tree";

ps_tree(1, () => {}); // $ExpectType void
ps_tree(1, (error: Error | null, children: readonly ps_tree.PS[]) => {
    if (error) return error;
    error; // $ExpectType null
    children[0].COMMAND; // $ExpectType string
    children[0].PID; // $ExpectType string
    children[0].PPID; // $ExpectType string
    children[0].STAT; // $ExpectType string
});

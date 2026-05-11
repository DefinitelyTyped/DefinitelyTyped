import addGitMsg from "rollup-plugin-add-git-msg";

addGitMsg(); // $ExpectType Plugin || Plugin<any>

addGitMsg({ copyright: "Myself" }); // $ExpectType Plugin || Plugin<any>

addGitMsg({ copyright: "Myself", showCommitID: true, showDate: false, showTag: false }); // $ExpectType Plugin || Plugin<any>

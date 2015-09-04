/// <reference path="js-git.d.ts" />

var obj:Object;
var bool:boolean;
var num:number;
var str:string;
var x:any = null;
var arr:any[];
var exp:RegExp;
var strArr:string[];
var numArr:string[];

var readable:any;
var git_object:JSGit.GitObject;
var commit:JSGit.GitCommit;
var author:JSGit.GitAuthor;
var tree:JSGit.GitTree;

var elem:JSGit.GitTreeElem;
var map:JSGit.StringMap;
var remote:JSGit.Remote;

var db:JSGit.DB;

db.get(str, (err:any, value:any) => {});
db.set(str, x, (err:any) => {});

db.has(str, (err:any, hasKey:boolean) => {});

db.del(str, (err:any) => {});

db.keys(str, (err:any, str:string[]) => {});

db.init((err:any) => {});

db.clear((err:any) => {});


var repo:JSGit.Repo;

repo.load(str, (err:any, git_object:JSGit.GitObject) => {});

repo.save(git_object, (err:any, str:string) => {});

repo.loadAs(str, str, (err:any, body:any) => {});

repo.saveAs(str, x, (err:any, str:string) => {});

repo.remove(str, (err:any) => {});

repo.unpack(x, obj, (err:any) => {});

repo.logWalk(str, (err:any, log_stream:any) => {});

repo.treeWalk(str, (err:any, file_stream:any) => {});

repo.walk(x, x, x, x);

repo.resolveHashish(str, (err:any, str:string) => {});

repo.updateHead(str, (err:any) => {});

repo.getHead((err:any, str:string) => {});

repo.setHead(str, (err:any) => {});

repo.fetch(remote, obj, (err:any) => {});

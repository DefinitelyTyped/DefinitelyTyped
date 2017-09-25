import * as RxJsExec from 'rxjs-exec';
import * as RxJs from 'rxjs';

const _exec = RxJsExec.exec("", {binary: true});
const _execFilter = RxJsExec.execFilter("");
const _mapeExecr = RxJsExec.mapExec("", {input: "String"});
const _mapExecFilter = RxJsExec.mapExecFilter("", {stdin: true});
// RxJsExec.patch(RxJs);

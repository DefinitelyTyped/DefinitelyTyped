/// <reference path="jxcore.d.ts" />
/// <reference path="../node/node.d.ts" />


var testBool: boolean;
var testString: string;
var testNumber: number;
var testObj: any = {
  test: 123
}

process.keepAlive();
process.keepAlive(testNumber);
process.release();
process.sendToMain(testString);
process.sendToMain(testObj);
process.sendToThread(testNumber, testObj);
process.sendToThread(testNumber, testString);
process.sendToThreads(testString);
process.sendToThreads(testObj);
testBool = process.subThread;
testNumber = process.threadId;
process.unloadThread();

var runMe = function (params: any) {

}

jxcore.monitor.followMe();
jxcore.monitor.followMe(function (err: boolean, message: string): void {

}, function (delay: number): void {

});
jxcore.monitor.leaveMe();
jxcore.monitor.leaveMe(function (err: boolean, message: string): void {

});

testBool = jxcore.store.exists(testString, testString);
testString = jxcore.store.get(testString);
testString = jxcore.store.read(testString);
jxcore.store.remove(testString);
jxcore.store.set(testString, testString);
jxcore.store.shared.expires(testString, testNumber);
testNumber = jxcore.store.shared.getBlockTimeout();
jxcore.store.shared.safeBlock(testString, function (): void {

});
jxcore.store.shared.safeBlock(testString, function (): void {

}, function (err: Error): void {

});

jxcore.store.shared.setBlockTimeout(testNumber);
testBool = jxcore.store.shared.setIfEqualsTo(testString, testString, testString);
testBool = jxcore.store.shared.setIfEqualsToOrNull(testString, testString, testString);
testBool = jxcore.store.shared.setIfNotExists(testString, testString);

jxcore.tasks.addTask(function (): string {
  return testString;
});
jxcore.tasks.addTask(function (param: number): string {
  return testString;
}, testNumber, function (result: string) {
  
});
jxcore.tasks.addTask(function (param: number): string {
  return testString;
}, testNumber, function (obj: number, result: string) {

}, testNumber);

var newTask: JXcore.Task = {
  define: function (): void {

  },
  logic: function (param: string): number {
    return testNumber;
  }
};
jxcore.tasks.addTask(newTask, testString);
jxcore.tasks.runOnce(function (): any {
  return;
});
jxcore.tasks.runOnce(function (param: string): any {
  return;
}, testString, true);

jxcore.tasks.runOnThread(testNumber, function (): number { return testNumber; });
jxcore.tasks.runOnThread(testNumber, function (param: string): number { return testNumber; }, testString, function (result: number): void {

});
jxcore.tasks.runOnThread(testNumber, function (param: number): string { return testString }, testNumber, function (obj: any, result: string) {

}, testObj);

jxcore.tasks.forceGC();
testNumber = jxcore.tasks.getThreadCount();
jxcore.tasks.setThreadCount(testNumber);
testNumber = jxcore.tasks.jobCount();
jxcore.tasks.killThread(testNumber);
jxcore.tasks.unloadThreads();

jxcore.utils.console.log(testString, "green");
jxcore.utils.console.log(testObj, testNumber, testString);
jxcore.utils.console.write(testString, "green");
jxcore.utils.console.write(testObj, testNumber, testString);
var yellow = jxcore.utils.console.setColor(testString, "yellow");

jxcore.utils.getCPU(function (percent:number, timeout: number) {
  
}, 1000);
jxcore.utils.getCPU();
jxcore.utils.pause();
jxcore.utils.jump();
jxcore.utils.continue();

var osInfo = jxcore.utils.OSInfo();
testString = osInfo.fullName;
testBool = osInfo.isUbuntu;
testBool = osInfo.isDebian;
testBool = osInfo.isMac;
testBool = osInfo.is64;
testBool = osInfo.is32;
testBool = osInfo.isARM;
testBool = osInfo.isRH;
testBool = osInfo.isSuse;
testBool = osInfo.isBSD;
testBool = osInfo.isArch;
testBool = osInfo.isWindows;
testString = osInfo.OS_STR;

var smart_require = jxcore.utils.smartRequire(require);
var express = smart_require(testString);

testNumber = jxcore.utils.uniqueId();


runMe.runOnce();
runMe.runOnce(testObj, function (result: any) { });
runMe.runOnce(testObj, function (obj: any, result: any) { }, testObj);
runMe.runTask();
runMe.runTask(testObj, function (result: any) { });
runMe.runTask(testObj, function (obj: any, result: any) { }, testObj);



jxcore.tasks.on("event", function () {

});
import * as captureconsole from "capture-console";

captureconsole.capture(process.stdout, () => { }); // $ExpectType string[]
captureconsole.capture(process.stdout, {}, () => { }); // $ExpectType string[]
captureconsole.capture(process.stdout, { quiet: true }, () => { }); // $ExpectType string[]

captureconsole.capture([process.stdout, process.stdin], () => { }); // $ExpectType string[]
captureconsole.capture([process.stdout, process.stdin], {}, () => { }); // $ExpectType string[]
captureconsole.capture([process.stdout, process.stdin], { quiet: true }, () => { }); // $ExpectType string[]

captureconsole.captureStderr(() => { }); // $ExpectType string
captureconsole.captureStderr({}, () => { }); // $ExpectType string
captureconsole.captureStderr({ quiet: true }, () => { }); // $ExpectType string

captureconsole.captureStdio(() => { }); // $ExpectType { stdout: string; stderr: string; }
captureconsole.captureStdio({}, () => { }); // $ExpectType { stdout: string; stderr: string; }
captureconsole.captureStdio({ quiet: true }, () => { }); // $ExpectType { stdout: string; stderr: string; }

captureconsole.captureStdout(() => { }); // $ExpectType string
captureconsole.captureStdout({}, () => { }); // $ExpectType string
captureconsole.captureStdout({ quiet: true }, () => { }); // $ExpectType string

captureconsole.hook(process.stdout, (string: string, encoding?: string, fd?: (error?: any) => void) => { }); // $ExpectType () => boolean
captureconsole.hook(process.stdout, {}, (string: string, encoding?: string, fd?: (error?: any) => void) => { }); // $ExpectType () => boolean
captureconsole.hook(process.stdout, { quiet: true }, (string: string, encoding?: string, fd?: (error?: any) => void) => { }); // $ExpectType () => boolean

captureconsole.intercept(process.stdout, () => { }); // $ExpectType string[]
captureconsole.intercept(process.stdout, {}, () => { }); // $ExpectType string[]
captureconsole.intercept(process.stdout, { quiet: true }, () => { }); // $ExpectType string[]

captureconsole.interceptStderr(() => { }); // $ExpectType string
captureconsole.interceptStderr({}, () => { }); // $ExpectType string
captureconsole.interceptStderr({ quiet: true }, () => { }); // $ExpectType string

captureconsole.interceptStdio(() => { }); // $ExpectType { stdout: string; stderr: string; }
captureconsole.interceptStdio({}, () => { }); // $ExpectType { stdout: string; stderr: string; }
captureconsole.interceptStdio({ quiet: true }, () => { }); // $ExpectType { stdout: string; stderr: string; }

captureconsole.interceptStdout(() => { }); // $ExpectType string
captureconsole.interceptStdout({}, () => { }); // $ExpectType string
captureconsole.interceptStdout({ quiet: true }, () => { }); // $ExpectType string

captureconsole.startCapture(process.stdout, (string: string, encoding?: string, fd?: (error?: any) => void) => { }); // $ExpectType boolean
captureconsole.startCapture(process.stdout, {}, (string: string, encoding?: string, fd?: (error?: any) => void) => { }); // $ExpectType boolean
captureconsole.startCapture(process.stdout, { quiet: true }, (string: string, encoding?: string, fd?: (error?: any) => void) => { }); // $ExpectType boolean

captureconsole.startIntercept(process.stdout, () => { }); // $ExpectType boolean
captureconsole.startIntercept(process.stdout, {}, () => { }); // $ExpectType boolean
captureconsole.startIntercept(process.stdout, { quiet: true }, () => { }); // $ExpectType boolean

captureconsole.stopCapture(process.stdout); // $ExpectType boolean

captureconsole.stopIntercept(process.stdout); // $ExpectType boolean

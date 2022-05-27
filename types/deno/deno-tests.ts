// Although this isn't a complete test, it tests most basic Deno runtime types.
// They are already tested in denoland/deno, so this is more of a sanity check
// than an actual test.

Deno.version.typescript; // $ExpectType string
Deno.version.deno; // $ExpectType string
Deno.version.v8; // $ExpectType string
Deno.cwd(); // $ExpectType string
Deno.permissions.query({ name: 'run' }); // $ExpectType Promise<PermissionStatus>
Deno.permissions.query({ name: 'some-random-nonexistent-permission' }); // $ExpectError
Deno.test('test', () => {}); // $ExpectType void
Deno.chdir(''); // $ExpectType void
Deno.readFile(''); // $ExpectType Promise<Uint8Array>
Deno.readFileSync(''); // $ExpectType Uint8Array
Deno.writeFile('', new Uint8Array(0)); // $ExpectType Promise<void>
Deno.writeFileSync('', new Uint8Array(0)); // $ExpectType void

WebAssembly.instantiateStreaming(fetch('')); // $ExpectType Promise<WebAssemblyInstantiatedSource>
WebAssembly.compileStreaming(fetch('')); // $ExpectType Promise<Module>

Deno.run({ cmd: ['echo', 'hello'], stdout: 'piped' }); // $ExpectType Process<{ cmd: [string, string]; stdout: "piped"; }>
Deno.run({ cmd: 'not-allowed' }); // $ExpectError

window; // $ExpectType Window & typeof globalThis
location; // $ExpectType Location
localStorage; // $ExpectType Storage
sessionStorage; // $ExpectType Storage
navigator; // $ExpectType Navigator
self; // $ExpectType Window & typeof globalThis

window.close(); // $ExpectType void
window.alert(''); // $ExpectType void
window.confirm(''); // $ExpectType boolean
window.crypto.getRandomValues(new Uint8Array(0)); // $ExpectType Uint8Array
window.performance.now(); // $ExpectType number
window.location.href; // $ExpectType string
window.fetch(''); // $ExpectType Promise<Response>

// Make sure that it's not mixing Node/Browser types
navigator.product; // $ExpectError
process; // $ExpectError
__dirname; // $ExpectError

setInterval(() => {}, 0); // $ExpectType number
clearInterval(0); // $ExpectType void
setTimeout(() => {}, 0); // $ExpectType number
clearTimeout(0); // $ExpectType void

new Worker(''); // $ExpectType Worker
new Request(''); // $ExpectType Request
new Response(); // $ExpectType Response
new Blob(); // $ExpectType Blob

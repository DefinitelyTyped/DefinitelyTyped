// It would be better to put all the tests in one file,
// but the TypeScript does not allow using global namespaces
// in the files with module imports.
// And we have no way to disable this behavior.
// https://github.com/Microsoft/TypeScript/issues/12461
// https://github.com/microsoft/TypeScript/issues/19139

let dirty = '<script>alert("hi")</script><p>Totally safe<p><p onerror="blowUp()">Totally not safe</p>';
DOMPurify.sanitize(dirty)

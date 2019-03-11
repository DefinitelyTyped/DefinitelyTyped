import protocPlugin, {
  CodeGeneratorRequest, CodeGeneratorResponse, CodeGeneratorResponseError,
  OutputFile
} from 'protoc-plugin';

protocPlugin(filesToGenerate => {
  const files: OutputFile[] = [];
  files.push({ name: "my_file.ts.d", content: "example" });
  return files;
})

CodeGeneratorRequest()
  .then(req => {
    const files: OutputFile[] = [];
    files.push({ name: "my_file.ts.d", content: "example" });
    return files;
  })
  .then(CodeGeneratorResponse())
  .catch(CodeGeneratorResponseError())
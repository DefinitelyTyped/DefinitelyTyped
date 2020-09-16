import protocPlugin = require('protoc-plugin');
import {
  CodeGeneratorResponse as pb_CodeGeneratorResponse
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import FileObject = pb_CodeGeneratorResponse.File.AsObject;

const {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
  CodeGeneratorResponseError
} = protocPlugin;

protocPlugin(filesToGenerate => {
  const files: FileObject[] = [];
  files.push({ name: "my_file.ts.d", content: "example" });
  return files;
});

CodeGeneratorRequest()
  .then(req => {
    const files: FileObject[] = [];
    files.push({ name: "my_file.ts.d", content: "example" });
    return files;
  })
  .then(CodeGeneratorResponse())
  .catch(CodeGeneratorResponseError());

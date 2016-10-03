///<reference path="../react/react.d.ts" />
///<reference path="./react-file-reader-input.d.ts" />

import * as React from "react";
import FileReaderInput = require("react-file-reader-input");

class MyComponent extends React.Component<{}, {}> {
  handleChange = (event: React.SyntheticEvent, results: any) => {
    results.forEach((result: any) => {
      const [event, file] = result;
      console.log(`Selected file ${file.name}!`);
    });
  }

  render(): React.ReactElement<{}> {
    return (
      <form>
        <label htmlFor="my-file-input">Upload a File: </label>
        <FileReaderInput as="binary" onChange={this.handleChange} >
          <button>Select a file!</button>
        </FileReaderInput>
      </form>
    );
  }
}

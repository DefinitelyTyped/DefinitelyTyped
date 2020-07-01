import * as React from 'react';
import FileReaderInput from 'react-file-reader-input';

class MyComponent extends React.Component {
  handleChange = (event: React.SyntheticEvent<any>, results: FileReaderInput.Result[]) => {
    results.forEach(result => {
      const [event, file] = result;
      console.log(`Selected file ${file.name}!`);
    });
  }

  render(): React.ReactElement<{}> {
    return (
      <form>
        <label htmlFor="my-file-input">Upload a File: </label>
        <FileReaderInput as="binary" onChange={this.handleChange} accept=".txt">
          <button>Select a file!</button>
        </FileReaderInput>
      </form>
    );
  }
}

import * as React from 'react';
import ReactFileReader from 'react-file-reader';

class MyComponent extends React.Component {
  handleUploadedFiles = (event: React.SyntheticEvent<any>, fileList: ReactFileReader.FileList[]) => {
    const fileToUpload: File = fileList[0];
    console.log('File to upload:', fileToUpload);
    const fileReader: FileReader = new FileReader();

    fileReader.onload = (e) => {
      try {
        if (typeof e !== undefined && e.target !== null) {
          const fileContents: any = JSON.parse(e.target.result);
          console.log('File contents:', fileContents);
        }
      } catch (e) {
        console.error('Error uploading file: ', e);
      }
    };

    fileReader.readAsText(fileToUpload);
  }

  render(): React.ReactElement<{}> {
    return (
      <form>
        <label htmlFor="my-file-input">Upload a File: </label>
        <ReactFileReader
          fileTypes={['.json']}
          base64={false}
          multipleFiles={false}
          handleFiles={this.handleUploadedFiles}
        >
          <button>Select a file!</button>
        </ReactFileReader>
      </form>
    );
  }
}

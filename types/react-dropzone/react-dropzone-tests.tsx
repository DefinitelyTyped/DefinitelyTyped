import * as React from "react";
import { DragEvent, SyntheticEvent } from "react";
import Dropzone, { ImageFile } from "react-dropzone";

class Test extends React.Component {

  dz: Dropzone;

  open() {
    this.dz.open();
  }

  handleDropFile = (files: ImageFile[], e: DragEvent<HTMLDivElement>) => {};

  handleDropFiles = (accepted: File[], rejected: File[], event: DragEvent<HTMLDivElement>) => {};

  handleDefault = (e: SyntheticEvent<HTMLDivElement>) => {}

  handleFileDialog = () => {}

  render() {
    return (
      <div>
        <Dropzone
          ref={(node) => { this.dz = node }}
          onClick={this.handleDefault}
          onDrop={this.handleDropFiles}
          onDropAccepted={this.handleDropFile }
          onDropRejected={this.handleDropFile }
          onDragStart={this.handleDefault}
          onDragEnter={this.handleDefault}
          onDragLeave={this.handleDefault}
          onFileDialogCancel={this.handleFileDialog}
          style={{ borderStyle: "dashed" }}
          activeStyle={{ borderStyle: "dotted" }}
          acceptStyle={{ borderStyle: "dotted" }}
          rejectStyle={{ borderStyle: "dotted" }}
          disabledStyle={{ borderStyle: "dotted" }}
          className="regular"
          activeClassName="active"
          acceptClassName="accept"
          rejectClassName="reject"
          disabledClassName="disabled"
          minSize={2000}
          maxSize={Infinity}
          disablePreview
          disableClick
          disabled
          multiple={false}
          accept="*.png"
          name="dropzone"
          inputProps={{ id : "dropzone" }}
        />
      </div>
    );
  }
}

export default Test;

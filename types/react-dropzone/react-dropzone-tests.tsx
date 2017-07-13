import * as React from "react";
import * as Dropzone from "react-dropzone";

class Test extends React.Component {

  dz: Dropzone;

  open() {
    this.dz.open();
  }

  handleDropFile = (files: File[]) => {};

  handleDropFiles = (accepted: File[], rejected?: File[]) => {};

  render() {
    return (
      <div>
        <Dropzone
          ref={(node) => { this.dz = node } }
          onClick={ (e: any) => { e.preventDefault(); } }
          onDrop={ this.handleDropFiles }
          onDropAccepted={ this.handleDropFile }
          onDropRejected={ this.handleDropFile }
          onDragStart={ (e: any) => { e.preventDefault(); } }
          onDragEnter={ (e: any) => { e.preventDefault(); } }
          onDragLeave={ (e: any) => { e.preventDefault(); } }
          onFileDialogCancel={ () => undefined }
          style={{ borderStyle: "dashed" }}
          activeStyle={{ borderStyle: "dotted" }}
          rejectStyle={{ borderStyle: "dotted" }}
          className="regular"
          activeClassName="active"
          rejectClassName="reject"
          minSize={ 2000 }
          maxSize={ Infinity }
          disablePreview
          disableClick
          multiple={ false }
          accept="*.png"
          name="dropzone"
          inputProps={ { id : "dropzone" } }
        />
      </div>


    );
  }
}

export default Test;

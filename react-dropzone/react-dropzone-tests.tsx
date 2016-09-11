///<reference path='../react/react.d.ts' />
///<reference path='../react-dropzone/react-dropzone.d.ts' />
import * as React from 'react';
import Dropzone = require('react-dropzone');

class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<div>
      <Dropzone
        onDrop={(e: any) => { e.preventDefault(); } }
        onDropAccepted={(e: any) => { e.preventDefault(); } }
        onDropRejected={(e: any) => { e.preventDefault(); } }
        onDragStart={(e: any) => { e.preventDefault(); } }
        onDragEnter={(e: any) => { e.preventDefault(); } }
        onDragLeave={(e: any) => { e.preventDefault(); } }
        style={{ borderStyle: "dashed" }}
        activeStyle={{ borderStyle: "dotted" }}
        rejectStyle={{ borderStyle: "dotted" }}
        className="regular"
        activeClassName="active"
        rejectClassName="reject"
        minSize={2000}
        maxSize={Infinity}
        disablePreview={true}
        disableClick={true}
        multiple={false}
        accept="*.png"
        name="dropzone"
        inputProps={{ id: "dropzone" }}
        />
      </div>);
  }
}

export default Test;

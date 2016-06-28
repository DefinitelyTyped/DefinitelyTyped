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
        onDragEnter={(e: any) => { e.preventDefault(); } }
        onDragLeave={(e: any) => { e.preventDefault(); } }
        style={{ borderStyle: "dashed" }}
        activeStyle={{ borderStyle: "dotted" }}
        className="regular"
        activeClassName="active"
        rejectClassName="reject"
        disableClick={true}
        multiple={false}
        accept="*.png"
        />
      </div>);
  }
}

export default Test;

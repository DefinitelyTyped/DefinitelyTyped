import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_SyncLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.SyncLoader />
    )
  }
}

class HalogenTests_SyncLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.SyncLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" margin="10px" size="100px" />
    )
  }
}

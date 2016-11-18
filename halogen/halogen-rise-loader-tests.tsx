import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_RiseLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.RiseLoader />
    )
  }
}

class HalogenTests_RiseLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.RiseLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" margin="10px" size="100px" />
    )
  }
}

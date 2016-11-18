import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_GridLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.GridLoader />
    )
  }
}

class HalogenTests_GridLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.GridLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" margin="10px" size="100px" />
    )
  }
}

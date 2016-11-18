import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_ScaleLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.ScaleLoader />
    )
  }
}

class HalogenTests_ScaleLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.ScaleLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle"
        size="100px" margin="10px" height="200px" width="200px" radius="5px" />
    )
  }
}

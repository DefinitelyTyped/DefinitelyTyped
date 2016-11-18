import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_DotLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.DotLoader />
    )
  }
}

class HalogenTests_DotLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.DotLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" size="200px" />
    )
  }
}

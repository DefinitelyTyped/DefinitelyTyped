import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_BounceLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.BounceLoader />
    )
  }
}

class HalogenTests_BounceLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.BounceLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" size="200px" />
    )
  }
}

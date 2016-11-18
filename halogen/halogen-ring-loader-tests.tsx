import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_RingLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.RingLoader />
    )
  }
}

class HalogenTests_RingLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.RingLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" size="200px" />
    )
  }
}

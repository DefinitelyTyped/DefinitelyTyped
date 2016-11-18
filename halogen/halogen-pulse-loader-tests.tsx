import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_PulseLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.PulseLoader />
    )
  }
}

class HalogenTests_PulseLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.PulseLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" margin="10px" size="100px" />
    )
  }
}

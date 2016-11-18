import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_BeatLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.BeatLoader />
    )
  }
}

class HalogenTests_BeatLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.BeatLoader loading={true} color="blue" id="MyAwesomeLoader" className="loader-new" verticalAlign="top" margin="10" size="70px" />
    )
  }
}

import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_SkewLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.SkewLoader />
    )
  }
}

class HalogenTests_SkewLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.SkewLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" size="200px" />
    )
  }
}

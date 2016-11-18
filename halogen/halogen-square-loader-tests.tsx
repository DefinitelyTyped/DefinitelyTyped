import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_SquareLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.SquareLoader />
    )
  }
}

class HalogenTests_SquareLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.SquareLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" size="200px" />
    )
  }
}

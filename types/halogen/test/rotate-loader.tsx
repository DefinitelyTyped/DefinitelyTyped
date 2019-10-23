import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_RotateLoader_withNoProps extends React.Component<React.Props<{}>> {
  render() {
    return (
      <Halogen.RotateLoader />
    );
  }
}

class HalogenTests_RotateLoader_withAllProps extends React.Component<React.Props<{}>> {
  render() {
    return (
      <Halogen.RotateLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" margin="10px" size="100px" />
    );
  }
}

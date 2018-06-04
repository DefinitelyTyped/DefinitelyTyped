import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_FadeLoader_withNoProps extends React.Component<React.Props<{}>> {
  render() {
    return (
      <Halogen.FadeLoader />
    );
  }
}

class HalogenTests_FadeLoader_withAllProps extends React.Component<React.Props<{}>> {
  render() {
    return (
      <Halogen.FadeLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle"
        size="100px" margin="10px" height="200px" width="200px" radius="5px" />
    );
  }
}

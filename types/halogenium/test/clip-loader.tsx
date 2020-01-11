import * as React from "react";
import * as Halogenium from "halogenium";

class HalogenTests_ClipLoader_withNoProps extends React.Component<React.Props<{}>> {
  render() {
    return (
      <Halogenium.ClipLoader />
    );
  }
}

class HalogenTests_ClipLoader_withAllProps extends React.Component<React.Props<{}>> {
  render() {
    return (
      <Halogenium.ClipLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="bottom" size="200px" />
    );
  }
}

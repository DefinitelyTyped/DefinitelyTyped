import * as React from "react";
import * as Halogen from "halogen";

class HalogenTests_MoonLoader_withNoProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.MoonLoader />
    )
  }
}

class HalogenTests_MoonLoader_withAllProps extends React.Component<React.Props<{}>, {}>{
  render() {
    return (
      <Halogen.MoonLoader loading={false} color="black" id="MyLoader" className="loader" verticalAlign="middle" size="200px" />
    )
  }
}

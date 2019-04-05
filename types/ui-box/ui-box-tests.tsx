import * as React from "react";
import Box, { extractStyles } from "ui-box";

export default class TestComp extends React.Component {
  refNode: React.ReactNode = null;

  componentDidMount() {
    const { cache, styles } = extractStyles();
    console.log(cache, styles);
  }

  render() {
    return (
      <div>
        <Box alignItems="center"> weeee </Box>
        <Box is={CustomComp}> hii </Box>
        <Box is="span"> hii </Box>
        <Box innerRef={ (node: React.ReactNode) => (this.refNode = node) } />
        <Box whatever="bla" />
      </div>
    );
  }
}

function CustomComp() {
  return <div>custom!</div>;
}

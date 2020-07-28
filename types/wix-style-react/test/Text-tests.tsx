import * as React from 'react';
import Text from 'wix-style-react/Text';

function TextWithMandatoryProps() {
  return <Text />;
}

function TextWithAllProps() {
  return (
    <Text
      className="cssssss"
      size="tiny"
      ellipsis
      light
      secondary
      showTooltip
      skin="standard"
      tagName="marquee"
      weight="thin"
    />
  );
}

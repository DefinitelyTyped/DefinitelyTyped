import * as React from 'react';
import Dotdotdot from 'react-dotdotdot';
import * as ReactDOM from "react-dom";

ReactDOM.render(
  <Dotdotdot
    clamp={3}
    useNativeClamp={false}
    splitOnChars={[',']}
    animate={false}
    truncationChar={"…"}
    tagName={"div"}
  >
    <p>
      Long, long <br />
      content,<br />
      3 lines <br />
      will be shown.
    </p>
  </Dotdotdot>, document.body);

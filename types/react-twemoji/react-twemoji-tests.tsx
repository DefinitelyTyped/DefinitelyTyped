import * as React from "react";
import Twemoji from "react-twemoji";

const ReactTwemojiTests: React.FC = _ => (
    <div>
        <Twemoji>
            <p>No params</p>
        </Twemoji>

        <Twemoji options={{a: "b"}} tag={"tag"} noWrapper={false}>
            <p>Some params</p>
        </Twemoji>
    </div>
);

import * as React from "react";
import JSONPretty = require("react-json-pretty");

export class Test extends React.Component {
    render() {
        const json = {
            foo: "bar"
        };

        const fn = (key: string, value: any) => {
          return value;
        };

        return (
          <div>
            <JSONPretty json={json} />
            <JSONPretty json={JSON.stringify(json)} />
            <JSONPretty json={json} replacer={fn} />
            <JSONPretty json={json} space={1} />
            <JSONPretty json={json} themeClassName="themeName" />
          </div>
        );
    }
}

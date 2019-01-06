import * as React from "react";
import { Fetch } from "react-request";

interface ServerResponse {
  foo: string;
}

export default class BasicReactRequest extends React.Component {
  render() {
    return <Fetch<ServerResponse> url='/api/server'>
      {({ fetching, failed, data, response }) => {
        if (fetching || !response) {
          return <p>Loading...</p>;
        }
        if (failed) {
          return <h2>Failed to load</h2>;
        }
        return <p>{data ? data.foo : 'data was null'}</p>;
      }}
    </Fetch>;
  }
}

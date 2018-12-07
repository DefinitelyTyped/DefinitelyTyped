import * as React from 'react';
import { Broadcast, Subscriber } from 'react-broadcast';

class ExampleOfUsingReactBroadcast extends React.Component {
  render() {
    const value = 42;
    return (
      <Broadcast channel="my-channel" value={42}>
        <div>
          <Subscriber channel="my-channel">
            {state => <div>{state}</div>}
          </Subscriber>
        </div>
      </Broadcast>
    );
  }
}

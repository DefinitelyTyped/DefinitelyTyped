import * as React from 'react';
import { Route, RouteProps } from 'react-router';

interface CustomRouteInterface extends RouteProps {
  aProperty: string;
  anotherOne: boolean;
  willItEnd?: number;
}

// React advocates composition over inheritance, but doesn't prevent us from using it
export default class CustomRoute extends Route<CustomRouteInterface> {
  render() {
    const maybeElement = super.render();
    return maybeElement && <div className="meaningfulClass">{React.cloneElement(maybeElement, this.props)}</div>;
  }
}

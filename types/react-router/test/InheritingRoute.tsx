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
    // react-fiber's render function can also return an array of elements,
    // but in this case it's assumed that a JSX.Element is returned.
    const maybeElement = super.render() as JSX.Element;
    const aProperty: string = this.props.aProperty;
    const anotherOne: boolean = this.props.anotherOne;
    const willItEnd: number | undefined = this.props.willItEnd;
    return maybeElement && <div className="meaningfulClass">{React.cloneElement(maybeElement, this.props)}</div>;
  }
}

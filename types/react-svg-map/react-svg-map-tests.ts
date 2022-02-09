import { SVGMap } from 'react-svg-map';
import * as React from 'react';

const mockFunction = () => null;

const SVGMapContainer: JSX.Element = React.createElement(SVGMap, {
  map: {
    viewBox: 'viewBox',
    locations: [{
        path: 'path',
        id: 'id',
        name: 'name'
    }],
    label: 'label',
  },
  className: 'className',
  role: 'role',
  locationClassName: 'locationClassName',
  locationTabIndex: 'locationTabIndex',
  locationRole: 'locationRole',
  onLocationMouseOver: mockFunction,
  onLocationMouseOut: mockFunction,
  onLocationMouseMove: mockFunction,
  onLocationClick: mockFunction,
  onLocationKeyDown: mockFunction,
  onLocationFocus: mockFunction,
  onLocationBlur: mockFunction,
  isLocationSelected: mockFunction,
});

const SVGMapContainerNoOptional: JSX.Element = React.createElement(SVGMap, {
  map: {
    viewBox: 'viewBox',
    locations: [{
        path: 'path',
        id: 'id',
    }],
    label: 'label',
  },
});

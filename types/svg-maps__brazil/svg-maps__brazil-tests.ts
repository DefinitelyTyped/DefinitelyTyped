import * as brazil from 'svg-maps__brazil';

const SVGMapContainer: brazil.Map = {
  viewBox: 'viewBox',
  locations: [{
    path: 'path',
    id: 'id',
    name: 'name'
  }],
  label: 'label'
};

const SVGMapContainerNoOptional: brazil.Map = {
  viewBox: 'vieweBox',
  locations: [{
  path: 'path',
  id: 'id',
  }],
};

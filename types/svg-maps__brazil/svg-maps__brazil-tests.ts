import Brazil, { Map } from '@svg-maps/brazil';

const map: Map = Brazil;

const SVGMapContainer: Map = {
  viewBox: 'viewBox',
  locations: [{
    path: 'path',
    id: 'id',
    name: 'name'
  }],
  label: 'label'
};

const SVGMapContainerNoOptional: Map = {
  viewBox: 'vieweBox',
  locations: [{
  path: 'path',
  id: 'id',
  }],
};

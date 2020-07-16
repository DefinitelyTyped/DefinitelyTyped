import USA, { Map } from '@svg-maps/usa';

const map: Map = USA;

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

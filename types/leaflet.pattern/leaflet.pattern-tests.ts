import * as L from 'leaflet';

const map = new L.Map('#id');

const patternOptions: L.PatternOptions = {
    x: 10,
    y: 10,
    width: 10,
    height: 10,
    patternUnits: 'userSpaceOnUse',
    patternContentUnits: 'userSpaceOnUse',
    patternTransform: 'translateX(10px)',
    angle: 45,
};

const stripePatternOptions: L.StripePatternOptions = {
    ...patternOptions,
    weight: 10,
    spaceWeight: 10,
    color: '#FF0000',
    spaceColor: '#00FF00',
    opacity: 0.5,
    spaceOpacity: 0.2,
};

const patternShapeOptions: L.PatternShapeOptions = {
    stroke: true,
    color: '#0000FF',
    weight: 10,
    opacity: 10,
    lineCap: 'butt',
    lineJoin: 'butt',
    dashArray: [1, 2],
    dashOffset: 2,
    fill: true,
    fillColor: '#FF0000',
    fillOpacity: 0.5,
    fillRule: 'evenodd',
    fillPattern: new L.Pattern(),
};

const patternCircleOptions: L.PatternCircleOptions = {
    ...patternShapeOptions,
    x: 10,
    y: 10,
    radius: 50,
};

const patternRectOptions: L.PatternRectOptions = {
    x: 10,
    y: 10,
    width: 10,
    height: 10,
    rx: 10,
    ry: 10,
};

const patternPathOptions: L.PatternPathOptions = {
    d: 'M10 0 L7 20 L25 20 Z',
};

const pattern = new L.Pattern(patternOptions);
pattern.initialize(patternOptions);
pattern.onAdd(map);
pattern.onRemove();
pattern.redraw();
pattern.setStyle(patternOptions);
pattern.addTo(map);
pattern.remove();
pattern.removeFrom(map);
pattern.addShape(new L.PatternShape());
pattern.addShape(new L.PatternCircle());
pattern.addShape(new L.PatternPath());
pattern.addShape(new L.PatternRect());

const patternShape = new L.PatternShape(patternShapeOptions);
patternShape.initialize(patternShapeOptions);
patternShape.onAdd(new L.Pattern());
patternShape.onAdd(new L.StripePattern());
patternShape.addTo(new L.Pattern());
patternShape.addTo(new L.StripePattern());
patternShape.redraw();
patternShape.setStyle(patternShapeOptions);
patternShape.setShape(new L.PatternCircle());
patternShape.setShape(new L.PatternPath());
patternShape.setShape(new L.PatternRect());

const stripePattern = new L.StripePattern(stripePatternOptions);
stripePattern.initialize(stripePatternOptions);
stripePattern.onAdd(map);
stripePattern.onRemove();
stripePattern.redraw();
stripePattern.setStyle(stripePatternOptions);
stripePattern.addTo(map);
stripePattern.remove();
stripePattern.removeFrom(map);
stripePattern.addShape(new L.PatternShape());
stripePattern.addShape(new L.PatternCircle());
stripePattern.addShape(new L.PatternPath());
stripePattern.addShape(new L.PatternRect());

const patternCircle = new L.PatternCircle(patternCircleOptions);
patternCircle.initialize(patternCircleOptions);
patternCircle.onAdd(new L.Pattern());
patternCircle.onAdd(new L.StripePattern());
patternCircle.addTo(new L.Pattern());
patternCircle.addTo(new L.StripePattern());
patternCircle.redraw();
patternCircle.setStyle(patternCircleOptions);
patternCircle.setShape(new L.PatternCircle());
patternCircle.setShape(new L.PatternPath());
patternCircle.setShape(new L.PatternRect());

const patternPath = new L.PatternPath(patternPathOptions);
patternPath.initialize(patternPathOptions);
patternPath.onAdd(new L.Pattern());
patternPath.onAdd(new L.StripePattern());
patternPath.addTo(new L.Pattern());
patternPath.addTo(new L.StripePattern());
patternPath.redraw();
patternPath.setStyle(patternPathOptions);
patternPath.setShape(new L.PatternCircle());
patternPath.setShape(new L.PatternPath());
patternPath.setShape(new L.PatternRect());

const patternRect = new L.PatternRect(patternRectOptions);
patternRect.initialize(patternRectOptions);
patternRect.onAdd(new L.Pattern());
patternRect.onAdd(new L.StripePattern());
patternRect.addTo(new L.Pattern());
patternRect.addTo(new L.StripePattern());
patternRect.redraw();
patternRect.setStyle(patternRectOptions);
patternRect.setShape(new L.PatternCircle());
patternRect.setShape(new L.PatternPath());
patternRect.setShape(new L.PatternRect());

map.addPattern(pattern);
map.addPattern(stripePattern);

map.removePattern(pattern);
map.removePattern(stripePattern);

map.hasPattern(pattern);
map.hasPattern(stripePattern);

const pathOptions: L.PathOptions = {};
pathOptions.fillPattern = pattern;
pathOptions.fillPattern = stripePattern;

google.load("earth", "1", {"other_params":"sensor=true_or_false"});

google.earth.createInstance("map3d", initCB, failureCB);

function failureCB(error: any) {}

function initCB(ge: google.earth.GEPlugin) {

  ge.getWindow().setVisibility(true);


  // Create the placemark.
  var placemark = ge.createPlacemark('');
  placemark.setName("placemark");

  // Set the placemark's location.
  var point = ge.createPoint('');
  point.setLatitude(12.345);
  point.setLongitude(54.321);
  placemark.setGeometry(point);

  // Create a style map.
  var styleMap = ge.createStyleMap('');

  // Create normal style for style map.
  var normalStyle = ge.createStyle('');
	var normalIcon = ge.createIcon('');
  normalIcon.setHref('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
  normalStyle.getIconStyle().setIcon(normalIcon);

  // Create highlight style for style map.
  var highlightStyle = ge.createStyle('');
  var highlightIcon = ge.createIcon('');
  highlightIcon.setHref('http://google-maps-icons.googlecode.com/files/girlfriend.png');
  highlightStyle.getIconStyle().setIcon(highlightIcon);
  highlightStyle.getIconStyle().setScale(5.0);

  styleMap.setNormalStyle(normalStyle);
  styleMap.setHighlightStyle(highlightStyle);

  // Apply stylemap to a placemark.
  placemark.setStyleSelector(styleMap);

  //Add the placemark to Earth.
  ge.getFeatures().appendChild(placemark);


  // balloons
  var balloon = ge.createHtmlDivBalloon('');
  balloon.setFeature(placemark);
  var div = document.createElement('DIV');
  div.innerHTML = 'Any <em>HTML</em>, CSS, or JavaScript goes here.';
  balloon.setContentDiv(div);
  ge.setBalloon(balloon);

    // Create the ScreenOverlay
  var screenOverlay = ge.createScreenOverlay('');

  // Specify a path to the image and set as the icon
  var icon = ge.createIcon('');
  icon.setHref('http://www.google.com/intl/en_ALL/images/logo.gif');
  screenOverlay.setIcon(icon);

  // Set the ScreenOverlay's position in the window
  screenOverlay.getOverlayXY().setXUnits(ge.UNITS_PIXELS);
  screenOverlay.getOverlayXY().setYUnits(ge.UNITS_PIXELS);
  screenOverlay.getOverlayXY().setX(200);
  screenOverlay.getOverlayXY().setY(200);

  // Set the overlay's size in pixels
  screenOverlay.getSize().setXUnits(ge.UNITS_PIXELS);
  screenOverlay.getSize().setYUnits(ge.UNITS_PIXELS);
  screenOverlay.getSize().setX(250);
  screenOverlay.getSize().setY(75);

  // Specify the point in the image around which to rotate
  screenOverlay.getRotationXY().setXUnits(ge.UNITS_FRACTION);
  screenOverlay.getRotationXY().setYUnits(ge.UNITS_FRACTION);
  screenOverlay.getRotationXY().setX(0.5);
  screenOverlay.getRotationXY().setY(0.5);

  // Rotate the overlay
  screenOverlay.setRotation(25);

  // Add the ScreenOverlay to Earth
  ge.getFeatures().appendChild(screenOverlay);


  // network link
  var link = ge.createLink('');
  var href = 'http://code.google.com/'
             + 'apis/earth/documentation/samples/kml_example.kml'
  link.setHref(href);

  var networkLink = ge.createNetworkLink('');
  networkLink.set(link, true, true); // Sets the link, refreshVisibility, and flyToView

  ge.getFeatures().appendChild(networkLink);

  // Get the current view.
  var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);

  // Set new latitude and longitude values.
  lookAt.setLatitude(36.584207);
  lookAt.setLongitude(-121.754322);

  // Update the view in Google Earth.
  ge.getView().setAbstractView(lookAt);

  // time
  ge.getTime().getControl().setVisibility(ge.VISIBILITY_SHOW);
  ge.getTime().setHistoricalImageryEnabled(true);
  var extents = ge.getTime().getControl().getExtents();
  var begin = extents.getBegin().get();
  var end = extents.getEnd().get();

  // tour
  ge.getTourPlayer().play();


  // controls
  ge.getNavigationControl().getScreenXY().setXUnits(ge.UNITS_INSET_PIXELS);
  ge.getNavigationControl().getScreenXY().setYUnits(ge.UNITS_PIXELS);


  // sky
  ge.getOptions().setMapType(ge.MAP_TYPE_SKY);
  ge.getOptions().setMapType(ge.MAP_TYPE_EARTH);
}

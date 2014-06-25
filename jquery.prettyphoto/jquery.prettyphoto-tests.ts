// Tests for prettyPhoto library 

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.prettyphoto.d.ts" />

// JQUERY

$('#id').prettyPhoto();

$('#id').prettyPhoto({ animation_speed: 'fast' });

// JQUERYSTATIC

$.prettyPhoto.changeGalleryPage('next');

$.prettyPhoto.changeGalleryPage('previous');

$.prettyPhoto.changePage('next');

$.prettyPhoto.changePage('previous');

$.prettyPhoto.close();

$.prettyPhoto.open();

$.prettyPhoto.open('test.jpg', 'title', 'description');

$.prettyPhoto.open(['test1.jpg', 'test2.jpg'], ['title1', 'title2'], ['description1', 'description2']);

$.prettyPhoto.startSlideshow();

$.prettyPhoto.stopSlideshow();

$.prettyPhoto.version;

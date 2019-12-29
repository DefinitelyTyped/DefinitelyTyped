function test_ctor() {
  // element
  imagesLoaded(document.querySelector('#container'), function(instance) {
    console.log('all images are loaded');
  });

  // selector string
  imagesLoaded('#container', function() { console.log('all images are loaded'); });

  // multiple elements
  var posts = document.querySelectorAll('.post');
  imagesLoaded(posts, function() { console.log('all images are loaded'); });

  // options
  imagesLoaded('#container', { background: true }, function() {
      console.log('all images are loaded');
  });
  imagesLoaded('#container', { background: '.item' }, function() {
      console.log('all images are loaded');
  });
}

function test_events_basic() {
  var elem = document.querySelector('body');
  var imgLoad = imagesLoaded(elem);
  function onAlways(instance: ImagesLoaded.ImagesLoaded) {
    console.log('all images are loaded');
  }

  // bind with .on()
  imgLoad.on('always', onAlways);
  // unbind with .off()
  imgLoad.off('always', onAlways);
  // bind once with .once()
  imgLoad.once('always', onAlways);
}

function test_events_full() {
  var elem = document.querySelector('body');
  var imgLoad = imagesLoaded(elem);

  // always
  imgLoad.on('always', function(instance) {
    console.log('ALWAYS - all images have been loaded');
  });

  // done
  imgLoad.on('done', function(instance) {
    console.log('DONE - all images have been successfully loaded');
  });

  // fail
  imgLoad.on('fail', function(instance) {
    console.log('FAIL - all images loaded, at least one is broken');
  });

  // progress
  imgLoad.on('progress', function(instance, image) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log('image is ' + result + ' for ' + image.img.src);
  });
}

function test_always_images() {
  var imgLoad = imagesLoaded('#container');
  imgLoad.on('always', function() {
    console.log(imgLoad.images.length + ' images loaded');
    // detect which image is broken
    for (var i = 0, len = imgLoad.images.length; i < len; i++) {
      var image = imgLoad.images[i];
      var result = image.isLoaded ? 'loaded' : 'broken';
      console.log('image is ' + result + ' for ' + image.img.src);
    }
  });
}

function test_jquery() {
  $('#container').imagesLoaded(function() {
    console.log('images have loaded');
  });
  $('#container').imagesLoaded({ background: true }, function() {
    console.log('images have loaded');
  });
  $('#container').imagesLoaded({ background: '.item' }, function() {
    console.log('images have loaded');
  });
}

function test_jquery_deferred() {
  $('#container').imagesLoaded()
    .always(function(instance) {
      console.log('all images loaded');
    })
    .done(function(instance) {
      console.log('all images successfully loaded');
    })
    .fail(function() {
      console.log('all images loaded, at least one is broken');
    })
    .progress(function(instance, image) {
      var result = image.isLoaded ? 'loaded' : 'broken';
      console.log('image is ' + result + ' for ' + image.img.src);
    });
}

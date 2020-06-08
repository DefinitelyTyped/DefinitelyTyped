import ImageViewer, { FullScreenViewer, ImageViewer as DestructuredImageViewer, Options } from 'iv-viewer';

const iv = new ImageViewer(new Element());
iv.destroy(); // $ExpectType void
iv.destroy(); // $ExpectType void
iv.hideSnapView(); // $ExpectType void
iv.load(''); // $ExpectType void
iv.refresh(); // $ExpectType void
iv.resetZoom(); // $ExpectType void
iv.showSnapView(); // $ExpectType void
iv.zoom(0); // $ExpectType void

new DestructuredImageViewer(new Element(), ImageViewer.defaults);

const options: Options = {};

const fsv = new FullScreenViewer(options);
fsv.destroy(); // $ExpectType void
fsv.destroy(); // $ExpectType void
fsv.hide(); // $ExpectType void
fsv.hideSnapView(); // $ExpectType void
fsv.load(''); // $ExpectType void
fsv.refresh(); // $ExpectType void
fsv.resetZoom(); // $ExpectType void
fsv.show(''); // $ExpectType void
fsv.showSnapView(); // $ExpectType void
fsv.zoom(0); // $ExpectType void

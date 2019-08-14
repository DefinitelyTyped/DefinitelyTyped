import * as Cropper from 'cropperjs';

const image = <HTMLImageElement> document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  crop(e) {
    console.log(e.detail.x);
    console.log(e.detail.y);
    console.log(e.detail.width);
    console.log(e.detail.height);
    console.log(e.detail.rotate);
    console.log(e.detail.scaleX);
    console.log(e.detail.scaleY);
  }
});

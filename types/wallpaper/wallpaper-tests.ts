import wallpaper = require('wallpaper');

wallpaper.set('unicorn.jpg').then(() => {});
wallpaper.set('unicorn.jpg', {scale: 'fill'}).then(() => {});

wallpaper.get().then(imagePath => {
    const str: string = imagePath;
});

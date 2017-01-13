import * as lwip from 'lwip';

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .blur(10)
        .writeFile('lena_blur.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .border(10, 'green')
        .writeFile('lena_border.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);

    image.batch()
        .scale(0.75)
        .border(5, [50, 100, 75, 75])
        .exec(function(err, image) {
            if (err) return console.log(err);

            image.clone(function(err, clone1) {
                if (err) return console.log("clone1:", err);
                clone1.batch()
                    .mirror('y')
                    .hue(100)
                    .writeFile('lena_clone1.png', function(err) {
                        if (err) return console.log(err);
                        console.log('clone1: done');
                    });
            });

            image.clone(function(err, clone2) {
                if (err) return console.log("clone2:", err);
                clone2.batch()
                    .fade(0.5)
                    .mirror('x')
                    .writeFile('lena_clone2.png', function(err) {
                        if (err) return console.log(err);
                        console.log('clone2: done');
                    });
            });

        });

});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.contain(400,700,'green',function(err, image){
        image.writeFile('lena_contain.jpg', function(err){
            if (err) return console.log(err);
            console.log('done');
        });
    });
});

lwip.open('lena.gif', function(err, image) {
    if (err) return console.log(err);
    image.writeFile('lena_from_gif.png', function(err) {
        if (err) return console.log(err);
        console.log('done')
    });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.cover(400,800,function(err, image){
        image.writeFile('lena_cover.jpg', function(err){
            if (err) return console.log(err);
            console.log('done');
        });
    });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .crop(400, 400)
        .writeFile('lena_crop.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);

    image.extract(230, 230, 370, 300, function(err, eyes) {
        eyes.writeFile('lena_eyes.jpg', function(err) {
            if (err) return console.log("eyes:", err);
            console.log('eyes: done');
        });

        eyes.extract(0, 0, 70, 71, function(err, left_eye) {
            left_eye.writeFile('lena_eyes_left.jpg', function(err) {
                if (err) return console.log("eyes left:", err);
                console.log('eyes left: done');
            });
        });

        eyes.extract(71, 0, 141, 71, function(err, right_eye) {
            right_eye.writeFile('lena_eyes_right.jpg', function(err) {
                if (err) return console.log("eyes right:", err);
                console.log('eyes right: done');
            });
        });
    });

    image.extract(240, 320, 350, 380, function(err, eyes) {
        eyes.writeFile('lena_mouth.jpg', function(err) {
            if (err) return console.log("mouth:", err);
            console.log('mouth: done');
        });
    });

});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .fade(0.5)
        .writeFile('lena_fade.png', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.writeFile('lena_interlaced.gif', {
        colors: 222,
        interlaced: true
    }, function(err) {
        if (err) return console.log(err);
        console.log('done');
    });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .hue(50)
        .writeFile('lena_hue.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .lighten(0.5)
        .writeFile('lena_lighten.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .mirror('x')
        .writeFile('lena_mirror.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open(new Buffer(1000), { width: 10, height: 10 }, function(err, image) {
    if (err) return console.log("err open", err);
    image.batch()
    	.blur(9)
    	.writeFile('image_from_pixelbuffer.png', function(err){
    		if (err) return console.log("err write", err);
        console.log('done');
    	});
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .pad(10, 5, 10, 5, 'blue')
        .writeFile('lena_pad.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.writeFile('lena_interlaced.png', {
        compression: 'high',
        interlaced: true
    }, function(err) {
        if (err) return console.log(err);
        console.log('done');
    });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.writeFile('lena_low_quality.jpg', {
        quality: 10
    }, function(err) {
        if (err) return console.log(err);
        console.log('done');
    });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .rotate(45, {
            r: 90,
            g: 55,
            b: 40
        })
        .writeFile('lena_rotate.gif', function(err) {
            if (err) return console.log(err);
            console.log('done')
        });
});

lwip.open('lena.png', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .rotate(-33, 'white')
        .scale(1.5)
        .blur(5)
        .writeFile('lena_rotate_scale_blur.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .saturate(0.5)
        .writeFile('lena_saturate.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

lwip.create(3, 3, function(err, image){
    if (err) return console.log(err);

    var batch = image.batch();

    // set the same color for each columns in the image
    for (let x = 0; x < 3 ; x++){
        let c = {r: 100, g: 100, b: 100};
        for (let y = 0; y < 3; y++){
            batch.setPixel(x, y, c);
        }
    }

    batch.writeFile('rainbow.png', function(err){
        if (err) console.log(err);
    });
});

lwip.open('lena.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .sharpen(200)
        .writeFile('lena_sharpen.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
});

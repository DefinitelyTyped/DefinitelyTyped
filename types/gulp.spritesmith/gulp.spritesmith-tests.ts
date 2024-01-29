import spritesmith = require("gulp.spritesmith");

// $ExpectType GulpSpriteSmithResult
const ss = spritesmith({
    imgName: "sprite.png",
    cssName: "sprite.css",
});

ss.img; // $ExpectType Readable
ss.css; // $ExpectType Readable

// $ExpectType GulpSpriteSmithResult
spritesmith({
    retinaSrcFilter: "src/*@2x.png",
    imgName: "sprite.png",
    retinaImgName: "sprite@2x.png",
    cssName: "sprite.css",
});

// $ExpectType GulpSpriteSmithResult
spritesmith({
    retinaSrcFilter: "src/*@2x.png",
    imgName: "sprite.png",
    retinaImgName: "sprite@2x.png",
    cssVarMap(sprite) {
        sprite.name = sprite.name.replace("@2x", "");
    },
    cssName: "sprite.css",
});

// $ExpectType GulpSpriteSmithResult
spritesmith({
    imgName: "sprite.png",
    cssName: "sprite.css",
    cssTemplate(data) {
        data; // $ExpectType SpritesmithData
        data.sprites; // $ExpectType Sprite[]
        return "";
    },
});

// $ExpectType GulpSpriteSmithResult
spritesmith({
    imgName: "sprite.png",
    cssName: "sprite.css",
    retinaSrcFilter: "src/*@2x.png",
    retinaImgName: "sprite-2x.png",
    cssTemplate(data) {
        data; // $ExpectType SpritesmithRetinaData
        data.retina_sprites; // $ExpectType Sprite[]
        return "";
    },
});

// $ExpectType GulpSpriteSmithResult
spritesmith({
    retinaSrcFilter: "src/*@2x.png",
    imgName: "sprite.png",
    retinaImgName: "sprite@2x.png",
    cssName: "sprite.scss",
    cssSpritesheetName: "icons",
    cssVarMap(sprite) {
        sprite.name = sprite.name.replace("sprite", "icon");
    },
    cssRetinaSpritesheetName: "retina-icons",
    cssRetinaGroupsName: "icon-groups",
    algorithm: "top-down",
});

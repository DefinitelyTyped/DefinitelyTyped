import getCharm = require("charm");
const charm = getCharm();
charm.pipe(process.stdout);
charm.reset();

var colors: getCharm.CharmColor[] = [ 'red', 'cyan', 'yellow', 'green', 'blue' ];
var text = 'Always after me lucky charms.';

var offset = 0;
var iv = setInterval(() => {
    var y = 0, dy = 1;
    for (var i = 0; i < 40; i++) {
        var color = colors[(i + offset) % colors.length];
        var c = text[(i + offset) % text.length];
        charm
            .move(1, dy)
            .foreground(color)
            .write(c)
        ;
        y += dy;
        if (y <= 0 || y >= 5) dy *= -1;
    }
    charm.position(0, 1);
    offset ++;
}, 150);

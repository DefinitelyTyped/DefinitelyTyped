import getCharm = require("charm");
const charm = getCharm();
charm.pipe(process.stdout);
charm.reset();

const colors: getCharm.CharmColor[] = [ 'red', 'cyan', 'yellow', 'green', 'blue' ];
const text = 'Always after me lucky charms.';

let offset = 0;
const iv = setInterval(() => {
    let y = 0;
    let dy = 1;
    for (let i = 0; i < 40; i++) {
        const color = colors[(i + offset) % colors.length];
        const c = text[(i + offset) % text.length];
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

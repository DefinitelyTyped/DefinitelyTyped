import {
    mx_perlin_noise_float,
    mx_cell_noise_float,
    mx_worley_noise_float,
    mx_fractal_noise_float,
} from 'three/examples/jsm/nodes/materialx/functions/lib/mx_noise';

import { mx_hsvtorgb, mx_rgbtohsv } from 'three/examples/jsm/nodes/materialx/functions/lib/mx_hsv';

mx_perlin_noise_float(1);
mx_cell_noise_float(1);
mx_worley_noise_float(1);
mx_fractal_noise_float(1, 1, 1, 1);
mx_hsvtorgb(1);
mx_rgbtohsv(1);

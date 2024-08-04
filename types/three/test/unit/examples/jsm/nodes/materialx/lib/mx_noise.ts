import {
    mx_bilerp,
    mx_bits_to_01,
    mx_bjfinal,
    mx_bjmix,
    mx_cell_noise_float,
    mx_cell_noise_vec3,
    mx_fade,
    mx_floor,
    mx_floorfrac,
    mx_fractal_noise_float,
    mx_fractal_noise_vec2,
    mx_fractal_noise_vec3,
    mx_fractal_noise_vec4,
    mx_gradient_float,
    mx_gradient_scale2d,
    mx_gradient_scale3d,
    mx_gradient_vec3,
    mx_hash_int,
    mx_hash_vec3,
    mx_negate_if,
    mx_perlin_noise_float,
    mx_perlin_noise_vec3,
    mx_rotl32,
    mx_select,
    mx_trilerp,
    mx_worley_distance,
    mx_worley_noise_float,
    mx_worley_noise_vec2,
    mx_worley_noise_vec3,
} from "three/src/nodes/materialx/lib/mx_noise.js";
import { float, vec2 } from "three/webgpu";

mx_select(true, 1, 0);
mx_negate_if(true, 1);
mx_floor(0.5);
mx_floorfrac(0.5, float().toVar());
mx_bilerp(0, 1, 2, 3, 0.5, 0.5);
mx_trilerp(0, 1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5);
mx_gradient_float(42, 0, 0);
mx_gradient_float(42, 0, 0, 0);
mx_gradient_vec3(42, 0, 0);
mx_gradient_vec3(42, 0, 0, 0);
mx_gradient_scale2d(1);
mx_gradient_scale3d(1);
mx_rotl32(1, 1);
mx_bjmix(float(1).toVar(), float(2).toVar(), float(3).toVar());
mx_bjfinal(1, 2, 3);
mx_bits_to_01(0xffffffff);
mx_fade(0.5);
mx_hash_int(1);
mx_hash_int(1, 2);
mx_hash_int(1, 2, 3);
mx_hash_int(1, 2, 3, 4);
mx_hash_int(1, 2, 3, 4, 5);
mx_hash_vec3(1, 2);
mx_hash_vec3(1, 2, 3);
mx_perlin_noise_float(vec2(0));
mx_perlin_noise_vec3(vec2(0));
mx_cell_noise_float(vec2(0));
mx_cell_noise_vec3(vec2(0));
mx_fractal_noise_float(vec2(0), 3, 2, 0.5);
mx_fractal_noise_vec3(vec2(0), 3, 2, 0.5);
mx_fractal_noise_vec2(vec2(0), 3, 2, 0.5);
mx_fractal_noise_vec4(vec2(0), 3, 2, 0.5);
mx_worley_distance(vec2(0), 1, 2, 3, 0, 0, 0, 1, 1);
mx_worley_noise_float(vec2(0), 1, 1);
mx_worley_noise_vec2(vec2(0), 1, 1);
mx_worley_noise_vec3(vec2(0), 1, 1);

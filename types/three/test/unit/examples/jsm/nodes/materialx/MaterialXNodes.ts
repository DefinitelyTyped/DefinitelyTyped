import {
    mx_aastep,
    mx_cell_noise_float,
    mx_contrast,
    mx_fractal_noise_float,
    mx_fractal_noise_vec2,
    mx_fractal_noise_vec3,
    mx_fractal_noise_vec4,
    mx_hsvtorgb,
    mx_noise_float,
    mx_noise_vec3,
    mx_noise_vec4,
    mx_ramplr,
    mx_ramptb,
    mx_rgbtohsv,
    mx_safepower,
    mx_splitlr,
    mx_splittb,
    mx_srgb_texture_to_lin_rec709,
    mx_transform_uv,
    mx_worley_noise_float,
    mx_worley_noise_vec2,
    mx_worley_noise_vec3,
    vec2,
    vec3,
} from "three/webgpu";

mx_aastep(0, 1);

mx_ramplr(0, 1);
mx_ramplr(0, 1, vec2(0));
mx_ramptb(0, 1);
mx_ramptb(0, 1, vec2(0));

mx_splitlr(0, 1, 0.5);
mx_splitlr(0, 1, 0.5, vec2(0));
mx_splittb(0, 1, 0.5);
mx_splittb(0, 1, 0.5, vec2(0));

mx_transform_uv();
mx_transform_uv(1, 0, vec2(0));

mx_safepower(1);
mx_safepower(1, 2);

mx_contrast(1);
mx_contrast(1, 1, 0.5);

mx_noise_float();
mx_noise_float(vec2(0), 1, 0);
mx_noise_vec3();
mx_noise_vec3(vec2(0), 1, 0);
mx_noise_vec4();
mx_noise_vec4(vec2(0), 1, 0);

mx_worley_noise_float();
mx_worley_noise_float(vec2(0), 1);
mx_worley_noise_vec2();
mx_worley_noise_vec2(vec2(0), 1);
mx_worley_noise_vec3();
mx_worley_noise_vec3(vec2(0), 1);

mx_cell_noise_float();
mx_cell_noise_float(vec2(0));

mx_fractal_noise_float();
mx_fractal_noise_float(vec2(0), 3, 2, 0.5, 1);
mx_fractal_noise_vec2();
mx_fractal_noise_vec2(vec2(0), 3, 2, 0.5, 1);
mx_fractal_noise_vec3();
mx_fractal_noise_vec3(vec2(0), 3, 2, 0.5, 1);
mx_fractal_noise_vec4();
mx_fractal_noise_vec4(vec2(0), 3, 2, 0.5, 1);

mx_hsvtorgb(vec3(0));
mx_rgbtohsv(vec3(0));
mx_srgb_texture_to_lin_rec709(vec3(0));

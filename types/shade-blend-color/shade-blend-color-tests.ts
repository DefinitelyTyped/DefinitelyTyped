import shadeBlend from 'shade-blend-color';

shadeBlend(0.42, 'rgb(20,60,200)'); // $ExpectType string | null
shadeBlend(0.42, 'rgb(20,60,200)', 'c'); // $ExpectType string | null
shadeBlend(0.42, 'rgb(20,60,200)', 'rgba(200,60,20,0.98631)'); // $ExpectType string | null

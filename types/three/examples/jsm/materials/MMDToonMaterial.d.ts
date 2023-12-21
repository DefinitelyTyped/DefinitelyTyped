import { ShaderMaterial, Color, Texture, ShaderMaterialParameters, TangentSpaceNormalMap } from '../../../src/Three.js';

export class MMDToonMaterial extends ShaderMaterial {
    private _matcapCombine: number;
    private _shininess: number;

	isMMDToonMaterial: boolean;
    type: "MMDToonMaterial";
    
    // emissiveIntensity is used to control the intensity or strength of emissive light emitted by a material
    emissiveIntensity: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    lights: boolean;

    normalMapType: number;
    matcapCombine: number;
    combine: number;

    specular: Color;
	opacity: number;
	diffuse: Color;

	map: Texture;
	matcap: Texture;
	gradientMap: Texture;

	lightMap: Texture;
	lightMapIntensity: number;

	aoMap: Texture;
	aoMapIntensity: number;

	emissive: Color;
	emissiveMap: Texture;

	bumpMap: Texture;
    bumpScale: number;

	normalMap: Texture;
	normalScale: number;

	displacemantBias: number;
	displacemantMap: Texture;
	displacemantScale: number;

	specularMap: Texture;
	alphaMap: Texture;

	reflectivity: number;
	refractionRatio: number;
    
    shininess: number;
    color: Color;

	// constructor( parameters?: ShaderMaterialParameters );
	// copy( source: MMDToonMaterial ): this;

}
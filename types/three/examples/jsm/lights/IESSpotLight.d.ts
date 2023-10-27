import { SpotLight, Texture } from 'three';

export default class IESSpotLight extends SpotLight {
    iesMap: Texture | null;
}

import * as THREE from 'three';

import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper';
import { Octree } from 'three/examples/jsm/math/Octree';

const camera = new Octree();
const viewHelper = new ViewHelper(camera, document.body); // $ExpectType ViewHelper

/**
 * Parameters
 */
viewHelper.animating; // $ExpectType boolean
viewHelper.center; // $ExpectType Vector3
viewHelper.isViewHelper; // $ExpectType true

/**
 * Methods
 */
const renderer = new THREE.WebGLRenderer();
viewHelper.render(renderer); // $ExpectType void
viewHelper.update(0); // $ExpectType void
viewHelper.dispose(); // $ExpectType void
viewHelper.handleClick(new PointerEvent('click')); // $ExpectType boolean

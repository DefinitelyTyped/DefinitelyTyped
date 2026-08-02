import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/**
 * Generic camera type inference
 */

// PerspectiveCamera is inferred as TCamera
const c0 = new OrbitControls(new THREE.PerspectiveCamera());
c0.object; // $ExpectType PerspectiveCamera

// OrthographicCamera is inferred as TCamera
const c2 = new OrbitControls(new THREE.OrthographicCamera());
c2.object; // $ExpectType OrthographicCamera

/**
 * Explicit type argument
 */
const c1 = new OrbitControls<THREE.PerspectiveCamera>(new THREE.PerspectiveCamera());
c1.object; // $ExpectType PerspectiveCamera

/**
 * Default type (backward compatibility): Camera
 */
const c3: OrbitControls = new OrbitControls(new THREE.PerspectiveCamera());
c3.object; // $ExpectType Camera

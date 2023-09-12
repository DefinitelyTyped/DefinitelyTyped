/**
 * @see https://en.wikipedia.org/wiki/Euler_method
 */
export const INTEGRATION_TYPE_EULER: "EULER";

/**
 * @see http://web.mit.edu/10.001/Web/Course_Notes/Differential_Equations_Notes/node5.html
 */
export const INTEGRATION_TYPE_RK2: "RUNGE_KUTTA_2";

/**
 * @see http://web.mit.edu/10.001/Web/Course_Notes/Differential_Equations_Notes/node5.html
 */
export const INTEGRATION_TYPE_RK4: "RUNGE_KUTTA_4";

/**
 * @see https://en.wikipedia.org/wiki/Verlet_integration
 */
export const INTEGRATION_TYPE_VERLET: "VERLET";

export type INTEGRATION_TYPES =
    | typeof INTEGRATION_TYPE_EULER
    | typeof INTEGRATION_TYPE_RK2
    | typeof INTEGRATION_TYPE_RK4
    | typeof INTEGRATION_TYPE_VERLET;

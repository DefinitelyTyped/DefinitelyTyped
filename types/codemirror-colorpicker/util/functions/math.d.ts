export function round(n: number, k?: number): number;

export function degreeToRadian(angle: number): number;

/**
 * convert radian to degree
 *
 * @param {*} radian
 * @returns {Number} 0..360
 */
export function radianToDegree(radian: number): number;

export function getXInCircle(angle: number, radius: number, centerX?: number): number;

export function getYInCircle(angle: number, radius: number, centerY?: number): number;

export function caculateAngle(rx: number, ry: number): number;

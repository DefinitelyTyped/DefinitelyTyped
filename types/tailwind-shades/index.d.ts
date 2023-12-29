/**
 * Generate Tailwind-compatible shades from a single color
 * @param {string} hex The hex code to generate shades from
 * @param {boolean} [halfShades=false] Generate additional shades, e.g. at 150
 * @returns {{[key: number]: string}}
 */
export default function shadesOf(
    hex: string,
    halfShades?: boolean,
): { [key: number]: string };

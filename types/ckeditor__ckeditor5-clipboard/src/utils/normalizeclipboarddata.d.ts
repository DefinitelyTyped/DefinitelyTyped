/**
 * Removes some popular browser quirks out of the clipboard data (HTML).
 * Removes all HTML comments. These are considered an internal thing and it makes little sense if they leak into the editor data.
 */
export default function normalizeClipboardData(data: string): string;

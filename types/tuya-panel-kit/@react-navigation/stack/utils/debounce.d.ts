export default function debounce<T extends (...args: any[]) => void>(func: T, duration: number): T;

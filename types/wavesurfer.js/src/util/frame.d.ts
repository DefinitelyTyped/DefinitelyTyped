export default function frame<T>(fn: (arg: T) => void): (arg: T) => void;

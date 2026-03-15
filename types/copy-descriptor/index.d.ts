/**
 * Copy a descriptor from one object to another.
 *
 * @param receiver - The target object
 * @param provider - The source object
 * @param from - The property name to copy
 * @param to - Optional new property name on receiver
 */
declare function copyDescriptor(receiver: object, provider: object, from: string, to?: string): void;

export = copyDescriptor;

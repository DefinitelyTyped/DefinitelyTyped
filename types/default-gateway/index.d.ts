export function gateway4async(): Promise<Result<4>>;
export function gateway6async(): Promise<Result<6>>;
export function gateway4sync(): Result<4>;
export function gateway6sync(): Result<6>;

export interface Result<Family extends 4 | 6> {
    /**
     * The IP address of the default gateway.
     */
    gateway: string;

    /**
     * The IP address version of `gateway`.
     */
    version: Family;

    /**
     * Name of the interface.
     * On Windows, this is the network adapter name.
     * This can be `null` if it cannot be determined.
     */
    int: string | null;
}

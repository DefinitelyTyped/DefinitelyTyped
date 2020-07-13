/**
 * Simple Guacamole protocol parser that invokes an oninstruction event when
 * full instructions are available from data received via receive().
 */
export class Parser {
    /**
     * Appends the given instruction data packet to the internal buffer of
     * this Guacamole.Parser, executing all completed instructions at
     * the beginning of this buffer, if any.
     * @param packet The instruction data to receive.
     */
    receive(packet: string): void;

    /**
     * Fired once for every complete Guacamole instruction received, in order.
     * @event
     * @param opcode The Guacamole instruction opcode.
     * @param parameters The parameters provided for the instruction, if any.
     */
    oninstruction: null | ((opcode: string, params: unknown[]) => void);
}

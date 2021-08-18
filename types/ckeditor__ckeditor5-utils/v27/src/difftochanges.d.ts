import { Change } from "./diff";
import { DeleteChange, InsertChange } from "./fastdiff";

/**
 * Creates a set of changes which need to be applied to the input in order to transform
 * it into the output. This function can be used with strings or arrays.
 *
 *  const input = Array.from( 'abc' );
 *  const output = Array.from( 'xaby' );
 *  const changes = diffToChanges( diff( input, output ), output );
 *
 *  changes.forEach( change => {
 *   if ( change.type == 'insert' ) {
 *    input.splice( change.index, 0, ...change.values );
 *   } else if ( change.type == 'delete' ) {
 *    input.splice( change.index, change.howMany );
 *   }
 *  } );
 *
 *  input.join( '' ) == output.join( '' ); // -> true
 *
 * in order to transform it into the output.
 */
export default function diffToChanges(diff: Change[], output: string | string[]): Array<DeleteChange | InsertChange>;

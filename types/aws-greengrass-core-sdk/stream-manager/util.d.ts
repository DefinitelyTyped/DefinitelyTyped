/**
 * Validate And Serialize an instance of class to Json bytes
 * @param o a instance object
 * @return byte array
 * @exception throws ValidationException
 */
export function validateAndSerializeToJsonBytes(o: unknown): Buffer;

interface FromMap<T> {
    fromMap(m: any): T;
}

/**
 * Deserialize the json byte array to an instance of class
 * @param bytes a bytes array
 * @param type instance type
 * @return object
 */
export function deserializeJsonBytesToObj<T>(bytes: Buffer, type: FromMap<T>): T;

export {};

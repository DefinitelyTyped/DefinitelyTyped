/**
 * Validate And Serialize an instance of class to Json bytes
 * @param o a instance object
 * @return byte array
 * @exception throws ValidationException
 */
export const validateAndSerializeToJsonBytes: <T extends unknown>(o: T) => Buffer;

interface FromMap<T> {
  fromMap(m: any): T;
}

/**
 * Deserialize the json byte array to an instance of class
 * @param bytes a bytes array
 * @param type instance type
 * @return object
 */
export const deserializeJsonBytesToObj: <T>(bytes: Buffer, type: FromMap<T>) => T;

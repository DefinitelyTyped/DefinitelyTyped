import Error from '@ember/error';

export default function validateErrorHandler(callback?: (error: Error) => void): { isValid: boolean, message: string };

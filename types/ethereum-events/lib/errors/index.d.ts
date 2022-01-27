export class CustomError extends Error {
  constructor(message: any);
}

export class BlockNotFoundError extends CustomError {
  constructor();
}


export interface IntercomError {
  statusCode: number,
  body: {
      type: "error.list",
      request_id: string,
      errors: [
          {
              code: string, //"400",
              message: string
          }
      ]
  },
  headers: { status: string } & {[k: string]: string}
}


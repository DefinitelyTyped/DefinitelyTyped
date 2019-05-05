import { RequestHandler } from 'express'

declare const errorOverlayMiddleware : () => RequestHandler
export = errorOverlayMiddleware

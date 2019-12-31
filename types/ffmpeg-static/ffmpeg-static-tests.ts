import * as pathToFfmpeg from 'ffmpeg-static'

if (typeof pathToFfmpeg !== "string") {
  throw new TypeError("invalid import")
}

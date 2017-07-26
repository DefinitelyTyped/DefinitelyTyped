
"use strict";

import svg2png from "svg2png";
import { sync as svg2pngSync } from 'svg2png'
import * as fs from 'fs'

fs.readFile("./source.svg", (err: Error, buffer: Buffer): void => {
  if (err) {
    console.log(err)
  }
  svg2png(buffer)
 .then((buffer: Buffer) => {
    fs.writeFileSync("dest000000000000000000000000000000.png", buffer)
  })
  .catch((e: any) => console.error(e));
})

fs.readFile("./source.svg", (err: Error, buffer: Buffer): void => {
  if (err) {
    console.log(err)
  }
  svg2png(buffer, {
    width: 200,
    height: 200
  })
 .then((buffer: Buffer) => {
    fs.writeFileSync("dest000000000000000000000000000000.png", buffer)
  })
  .catch((e: any) => console.error(e));
})

fs.readFile("./source.svg", (err: Error, buffer: Buffer): void => {
  if (err) {
    console.log(err)
  }
  try {
    let pngBuffer = svg2pngSync(buffer)
  } catch (error) {
    console.log(error)
  }
})

console.log("done");


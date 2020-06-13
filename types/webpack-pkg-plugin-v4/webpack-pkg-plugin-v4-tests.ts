import { Plugin } from "webpack"
import { WebpackPkgPlugin } from "webpack-pkg-plugin-v4"

function acceptWebpackPlugin(_: Plugin) {}

acceptWebpackPlugin(new WebpackPkgPlugin({
  output: "pkg"
}))

acceptWebpackPlugin(new WebpackPkgPlugin({
  assets: "assets/**/*",
  output: "pkg",
  scripts: "build/**/*.js",
  targets: ["host"],
}))

acceptWebpackPlugin(new WebpackPkgPlugin({
  assets: ["assets/**/*", "images/**/*"],
  output: "pkg",
  scripts: ["build/**/*.js"],
  targets: ["host"],
}))

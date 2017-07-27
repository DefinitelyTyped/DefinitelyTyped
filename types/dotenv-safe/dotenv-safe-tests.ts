import env = require("dotenv-safe")

env.load({
  allowEmptyValues: true,
  path: "/foo/bar/baz.env",
  sample: "/foo/bar/qux.env"
})

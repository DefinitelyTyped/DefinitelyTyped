# react-bootstrap

## Intended compatibilty
This library is intended for releases of react-bootstrap prior to `v1.0.0`, e.g. `v0.32.4`.

The reason is that react-bootstrap `v1.0.0` targets Bootstrap v4, and includes its own
typings. react-bootstrap prior to `v1.0.0` targets Bootstrap v3 and does not include any
typings.

It does not make sense for everyone to upgrade to Bootstrap v4, therefore these typings
are useful for everyone that wants to stay on Bootstrap v3 and react-bootstrap prior to `v1.0.0`.

The typings for `v1.0.0` were merged in [this pull request](https://github.com/react-bootstrap/react-bootstrap/commit/2079b2292afb835d036fcceef47e8938c4a8d86a).

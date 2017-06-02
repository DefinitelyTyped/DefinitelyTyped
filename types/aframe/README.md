# aframe typings

### build

From the `tests` directory run:

* `npm i`
* `npm run build`

This will build the both `aframe-tests.ts` and the `tests` directory using the provided typings.

Note: If you do not want to install node modules then a basic test can be ran by compiling `aframe-tests.ts`
by typing `tsc`.

### test

* build using the instructions above
* open `tests/tests.html` in a browser

The testing framework uses [intern](https://theintern.github.io/) to run tests. The tests ensure that typings are
actually written against real aframe constructs by exercising the code and validating assertions. Intern also supports
local execution using Selenium by running `npm run test`.


## Contributing

These typings cover much of the core of A-Frame. Help is welcomed to provide typings for A-Frame bundled components and
additional intern tests <3

React Redux Starter
=======================

Node `^4.0.0` or `^5.0.0` ([npm3](https://www.npmjs.com/package/npm3) recommended).

Features
--------

* [React](https://github.com/facebook/react) (`^0.14.0`)
  * Includes react-addons-test-utils (`^0.14.0`)
* [Redux](https://github.com/gaearon/redux) (`^3.0.0`)
  * react-redux (`^4.0.0`)
  * redux-devtools
    * use `npm run dev:nw` to display in a separate window.
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^1.0.0`)
* [redux-simple-router](https://github.com/jlongster/redux-simple-router) (`^0.0.10`)
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ Chai, Sinon-Chai, and Chai-as-Promised
  * PhantomJS
  * Code coverage reports
* [Babel](https://github.com/babel/babel)
  * `react-transform-hmr` for hot reloading
  * `react-transform-catch-errors` with `redbox-react` for more visible error reporting
  * Uses babel runtime rather than inline transformations
* [Webpack](https://github.com/webpack/webpack)
  * Separates application code from vendor dependencies
  * dev middleware and HMR via Express middleware
  * sass-loader with CSS extraction
  * postcss-loader with cssnano for style autoprefixing and minification
  * Pre-configured folder aliases and globals
* [ESLint](http://eslint.org)
  * Uses [Airbnb's ESLint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (with some softened rules)
  * Includes separate test-specific `.eslintrc` to work with Mocha and Chai

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone git@github.com:luankefei/react-redux-starter.git
$ cd react-redux-starter
$ npm install
$ npm start
```

Usage
-----

Before delving into the descriptions for each available npm script, here's a brief summary of the three which will most likely be your bread and butter:

* Doing live development? Use `npm start` to spin up the dev server.
* Compiling the application to disk? Use `npm run compile`.
* Deploying to an environment? `npm run deploy` can help with that.

**NOTE**: Deploying to a specific environment? Make sure to specify your target NODE_ENV so webpack will use the correct configuration. For example: `NODE_ENV=production npm run compile` will compile your application with `~/build/webpack/production.js`.

Great, now that introductions have been made here's everything in full detail:

#### `npm start` (alias for `npm run dev`)
Runs the webpack build system with HMR enabled (by default found at `localhost:3000`).

#### `npm run dev:nw`
Same as `npm start` but opens the redux dev tools in a new window.

**Note:** you'll need to allow popups in Chrome for this to work. Refer to [Troubleshooting](#troubleshooting) for more on this.

#### `npm run dev:no-debug`
Same as `npm start` but disables redux dev tools.

#### `npm run compile`
Runs the webpack build system **with your current NODE_ENV** and compiles the application to disk (`~/dist` by default).

#### `npm run test`
Runs unit tests with Karma and generates coverage reports.

#### `npm run test:dev`
Similar to `npm run test`, but will watch for changes and re-run tests; does not generate coverage reports.

#### `npm run lint`
Runs ESLint against all `.js` files in `~/src`. This used to be a webpack preloader, but the browser console output could get fairly ugly. If you want development-time linting, consider using an ESLint plugin for your text editor.

#### `npm run lint:tests`
Lints all `.spec.js` files in of `~/tests`.

#### `npm run deploy`
Helper script to run linter, tests, and then, on success, compile your application to disk.

### Configuration

Basic project configuration can be found in `~/config/index.js`. Here you'll be able to redefine your `src` and `dist` directories, add/remove aliases, tweak your vendor dependencies, and more. For the most part, you should be able to make your changes in here without ever having to touch the webpack build configuration.

Common configuration options:

* `dir_src` - application source code base path
* `dir_dist` - path to build compiled application to
* `server_host` - hostname for the express server
* `server_port` - port for the express server
* `production_enable_source_maps` - create source maps in production?
* `vendor_dependencies` - packages to separate into to the vendor bundle.

Structure
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Express application (uses webpack middleware)
│   └── app.js               # Server application entry point
├── src                      # Application source code
│   ├── actions              # Redux action creators
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── containers           # Components that provide context (e.g. Redux Provider)
│   ├── layouts              # Components that dictate major page structure
│   ├── reducers             # Redux reducers
│   ├── routes               # Application route definitions
│   ├── store                # Redux store configuration
│   ├── utils                # Generic utilities
│   ├── views                # Components that live at a route
│   └── app.js               # Application bootstrap and rendering
└── tests                    # Unit tests
```

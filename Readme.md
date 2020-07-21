# Trusstor exercise - Tv shows search

## Scripts

* To install all dependencies: `yarn install-all`.
* To run the app (after install): `yarn start`.
* To install all packages and run the app in one command: `yarn install-and-start`

## Structure & libraries

### Client (`./client`)

* The code located in `scr` folder.
* `src/contexts` folder contains the context used throughout the app.
* `src/containers` contains the main components of the app:
  * `Search` - Input that handles the tv shows search.
  * `Shows` - Displays the found tv shows.
* Libraries:
  * The basic structure is created with react-create-app, which is a fast way to create a React app.
  * `styled-components` - Library that uses tagged template literals to style your components (also takes care of compatibility and more).
  * `animejs` - Lightweight JavaScript animation library.
  8 `react-select` - A flexible Select Input control for React with ajax support.

### Server (`./server`)

* The main module is `server.js` - Set-ups and runs our express server.
* `routes` folder contains the route handlers.
  * `routes/health.js` - Basic server status check.
  * `routes/tv_shows.js` - Handles the tv shows search requests.
* Libraries:
  * `express` - Framework that helps in fast-tracking development of server-based applications.
  * `cors` - Package for providing a middleware that can be used to enable CORS with various options.
  * `node-fetch` - Implementation of the native Fetch API for Node.js.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Instructions for ServiceNow instance
- Add `https://naseemali925.github.io/gs-snowclient-na` or your own GitHub pages URL in **CORS Rules** with all request methods checked.
- Use REST Api Explorer for testing if the incident table is available for use.

## Instruction for running the app
1. Fork/Download the project.
2. Execute the following commands in the top to bottom order
`npm i`
`npm run build`
`npm run deploy` 
(Please change GitHub pages URL for your repository so it can be hosted on your GitHub pages. )
3. Now visit https://naseemali925.github.io/gs-snowclient-na or your GitHub pages URL.
4. Use your Service Now instance credentials to log in.

## Technologies used
- [React](https://reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Material-ui](https://material-ui.com/)
- [Material-table](https://material-table.com/#/)
- [ESLint](https://eslint.org/)
- [GitHub Pages](https://pages.github.com/)
- [React-toastify](https://www.npmjs.com/package/react-toastify)

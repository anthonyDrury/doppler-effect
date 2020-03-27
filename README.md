This project is designed to help illustrate the doppler effect and its changes to an objects colours with different velocities.

## About

This project was developed for an interview challenge.

I decided to use React (create-react-app) due to its quick development time, easy integration with Typescript and testing, as well as personal familiarity.

This project would be simple enough as a plain JS file, though less opportunities to display personal development strengths.

## Pitfalls

If more development time was pursued, then a few things could have been improved:

Much greater test coverage, acquiring full test coverage as well as the addition of e2e testing would be beneficial.

Support for IE and older browsers. This could have been added as a simple backgroundColor change instead of using the CSS mask (which IE does not support). However I wanted to only shift the colour image and leave the whitespace as is, using the not fully supported mask was a nice way of displaying this. However if it were to be productionised, then a fallthrough would be added.

Greater designs, accessibility and added teaching feedback. All would be beneficial and I would think increase student attention.

The exponential growth of the sliders on velocity was decided on due to its range in displaying colours, with added research the exact formula for the detail change during blue/redshift could be found. Similar with the exact formula of colour shift in relation to velocity.

## Getting started

This is a simple react project, to get it started you should clone the project locally, navigate to it in a terminal, and run:

### `npm i && npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
`npm i &&` can be excluded on subsequent runs.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
I have added a few simple tests, ideally this would have much larger coverage.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

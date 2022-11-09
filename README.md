# React.js-Assessment-project

[Assessment Project- Building an Event Finder App in React]

• Project description-
You are a web developer at a company called FindMyMovies. 
The company has decided to launch a new app called FindMyEvents where users can view and add upcoming events in their region.
 bBackend development has been outsourced and frontend will be developed in-house. 
During sprint planning, you agree to lead this project and develop an app that will let users find events using APIs that backend engineers will provide. The tasks you are responsible for: 
--> Building the application in React
--> Setting up a JSON server for testing until backend APIs are ready
--> Managing the state using Redux

• Technologies Used-

| ReactJS | 16.14.0 |
| ------ | ------- |
| redux | 4.0.5 | 
| react-redux | 7.2.1 |
| parcel-bundler | 1.12.4 |
| json-server | 0.16.2 |


• Project Structure-
Starting with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Available Scripts
In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. 

All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

• File Structure

├── README.md
├── db.json
├── package.json
├── src
│   ├── actions
│   │   ├── alertActions.js
│   │   ├── eventActions.js
│   │   ├── index.js
│   │   └── searchActions.js
│   ├── components
│   │   ├── App.js
│   │   ├── CreateEvent.js
│   │   ├── DeleteEvent.js
│   │   ├── Event.js
│   │   ├── EventsCatalog.js
│   │   ├── Landing.js
│   │   ├── Navbar.js
│   │   ├── Routes.js
│   │   └── SearchBar.js
│   ├── configureStore.js
│   ├── constants
│   │   ├── alertConstants.js
│   │   ├── eventConstants.js
│   │   └── index.js
│   ├── index.html
│   ├── index.js
│   ├── reducers
│   │   ├── alertReducer.js
│   │   ├── eventReducer.js
│   │   └── searchReducer.js
│   ├── reducers.js
│   └── services
│       ├── eventService.js
│       └── index.js
├── yarn-error.log
└── yarn.lock
![image](https://user-images.githubusercontent.com/105660197/200902896-0393f3d2-380e-4df0-816f-92ec7ceb5608.png)

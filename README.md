# react-demo
This repo is made to explain some concepts of react. 
The best way to master these concepts, is by implementing these concepts yourself. 
Follow this readme To end up with the same result.

## Initialise the react app. 

Bootstrap a react app. A react app is easily created with the npx command. This will setup following files and folder:
 - Public folder - This folder contains the main index.html file and other artifacts that will be served to clients. For example logo's and manifests.
 - package.json - This file is used to track all dependencies and its versions
 - src/index.js - This file is the main js file. It manipulates the original index.html file in your public folder
 - src/index.css - The main css file to define the style of the webapp
 - src/app.js - The first react component. From here the web app is build up with different components.

### Exercise
1) Create you own react app.
```bash
npx create-react-app react-demo 
```
2) Browse through the created files.
3) Run the application
```bash
npm install
npm start 
```

## Class vs hook components
The first concept is the difference between class components and Hooks. As the class component explains by itself that it is defined in a js class. 
In this class we define methods to mount, update, unmount and what we should render in this class component.
A hook is a simple js function, where we return what should be rendered. To define what should happen on mount, update or unmount we use react hooks.

In the source folder, you can find an example of the react hook and class component under the folder Components. 
Also note the difference in handling state in the differen components

### Exercise
1) Create your own class component. Make sure the class contains a state.
2) Create your own hook component. Make sure the hook contains a state
3) Implement a button that updates the state and rerenders both components.
4) Implement some class component functions like componentDidMount and componentDidUpdate.
5) Implement the useEffect hook.

## Callbacks
A callback is core js feature. It is comparable with the java Supplier. 
In Js a function can be seen as a normal object. When this function A is passed to another function B, Function B can execute function A. 
When this function is passed through the next function, this is called a callback function.
### Exercise
1) Refactor the state update in previous hook, to a callback function.

## Promises
A promise is also a core js feature. Promises are used for asynchronous tasks. 
It represents a value that can be available now, in the future, or maybe never.

### Exercise
1) Perform an asynchronous call to an api (F.e. https://ifconfig.me/ip) and adapt state when a response is retrieved.
2) Create a custom promise with a timeout. 
3) Tryout the custom promise with a reject. 

## Redux
Redux is a state management tool. It provides state over all your components and avoids propagating data through props in multiple components.

### Exercise
1) Install Redux packages
2) Add redux provider with a redux store.
3) Implement your first reducer.
4) Dispatch to first reducer
5) Implement first Redux action
6) Dispatch to action.
# Getting Started with Page Rank Calculator App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



App.js contains 
- implementation of myGraph and it's functions
- page rank algorithms
- some html to take input from user and make calculations


## myGraph implementation
Constructor of myGraph creates two objects
- directedList 
- undirectedList

## addNode()
Each node (number) represents a unique website. 

This function will take an input of a number and add it to our instance of my graph.

For example: addNode(1)
             addNode(2) 
             addNode(3)
             addNode(4)

will result in:   directedList = { 1 : [], 2 : [] , 3 : [] , 4 : [] } and undirectedList { 1 : [], 2: [], 3 : [], 4 : [] }

creating key value pairs where key represents node and values an array of nodes it is pointing to.

## addEdge()
An edge between 1 and 2 means website 2 has a link to website 1

This function will take an input of two numbers and add the second number in the array of the first numbers key within the graph.


For example: addEdge(1, 2)
             addEdge(1, 3)
             addEdge(2, 4)
             addEdge(3, 1)
             addEdge(3, 2)
             addEdge(3, 4)
             addEdge(4, 3)

result in: directedList = { 1 : [2, 3], 2 : [4] , 3 : [1, 2 , 4], 4 : [3] } and undirectedList { 1 : [2, 3], 2: [1, 3, 4] , 3 : [1, 2, 4], 4 : [2, 3] };

## showNeighboringNodes()
This function will take an input node (number) and return all the nodes it is pointing to and all the nodes it is being pointed from (directed and undirected)

For example: when 4 is passed into showNeighboringNodes() -> it will return : [2, 3] since these are the nodes it is pointing too or being pointed from

          when 2 is passed into showNeighboringNodes() -> it will return = [1, 3, 4]


## pageRank()

This function takes in two parameters
- myGraph list we created
- number of iterations


It then finds the page rank values for each node over number of iterations passed into the function.

For example: if we pass in the myGraph instance we have so far with number of iterations = 2;

The function will return

1 : 0.25,0.08333333333333333,0.125

2 : 0.25,0.20833333333333331,0.16666666666666666

3 : 0.25,0.375,0.375

4 : 0.25,0.3333333333333333,0.3333333333333333


## Results

The last element in the array of the values is the page rank calculation for that specific key (node) over the number of iterations passed.

so node 1 has page rank value of 0.125

   node 2 has page rank value of 0.166
   
   node 3 has page rank value of 0.375
   
   node 4 has page rank value of 0.333
   
   Node 3 has the highest page rank value followed by node 4 then node 2 and finally node 1.

## Before starting the server

After you have cloned the git repository. Please make sure the directory has node_module folder. 
If it doesn't have the node_module folder.

Enter 'npm install'


### `npm start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

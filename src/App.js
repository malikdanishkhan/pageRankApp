import logo from './logo.svg';
import './App.css';


function App() {

//Implement my graph class
class myGraph {

    //Create new object
    constructor() {
        this.directedList = {};
        this.undirectedList = {};
    }

    // This function adds a node to our graph
    addNode(node) {
        // check if passed value is a number
        if (isNaN(node) == false) {
            //check if node already exists
            if (!this.directedList[node]) {
                // add key to adj list with a number representing the node
                // and set it's value to an empty array
                this.directedList[node] = [];
                this.undirectedList[node] = [];
            } else {
                console.log("node already exists");
            }
        } else {
            console.log("wrong input");
        }
    }

    //helper function to check if array contains value
    //i.e to avoid duplicate values being added to the array of all the nodes
    containsDuplicates(array, value) {

        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return true;
            }
        }
        return false;
    }

    // This functions takes in two parameters that must be numbers
    // it adds the finalNode to the array of the initalNode
    addEdge(initialNode, finalNode) {

        // check if the values of initialNode and finalNode are numbers
        if ((isNaN(initialNode) == false) && (isNaN(finalNode) == false)) {

            // console error if value of initialNode and finalNode do not exist within graph
            if ((!this.directedList[initialNode]) || (!this.directedList[finalNode])) {
                console.log("one or more nodes do not exist");
            } else {

                // check if the key for directed graph already contains value of finalNode in it's array
                if ((this.containsDuplicates(this.directedList[initialNode], finalNode)) == false) {

                    // add finalNode to the array of the initialNode key
                    this.directedList[initialNode].push(finalNode);
                }

                // check if the key for undirected graph already contains value of finalNode in it's array 
                if ((this.containsDuplicates(this.undirectedList[initialNode], finalNode)) == false) {
                    this.undirectedList[initialNode].push(finalNode);
                }

                //check if the key for undirected graph already contains value of initialNode in it's array
                if ((this.containsDuplicates(this.undirectedList[finalNode], initialNode)) == false) {
                    this.undirectedList[finalNode].push(initialNode);
                }

            }

        } else {
            console.log("wrong input")
        }

    }


    showNeighboringNodes(node) {
        // return the array corresponding to the value of node within graph
        // i.e the neighboring nodes
        return this.undirectedList[node];
    }

}

// create an instance of myGraph
var list = new myGraph();

// Takes the input value of node on front end
// and adds it to our instance of myGraph
function addNodeFront(){
    var node = document.getElementById('inputNode').value;
    list.addNode(node);
    console.log(node);
    console.log("Added node");
 
    document.getElementById('inputNode').value = '';

    alert("Added " + node + "!");
}


// Takes the input of two nodes
// and passes it to AddEdge along with our instance of myGraph
// to add the second node as a value corresponding to key of first node
function addEdgeFront(){

    var nodeOne = document.getElementById('firstNode').value;
    var nodeTwo = document.getElementById('secondNode').value;
    list.addEdge(nodeOne, nodeTwo);

    document.getElementById('firstNode').value = '';
    document.getElementById('secondNode').value = '';
    console.log("Added Edge");

    alert("Joined edge from " + nodeOne + " to " + nodeTwo);

}

// Takes the input node value 
// and finds all nodes that are 
// stored in the undirectedList object of myGraph
function getNodesFront(){

    var inputNode = document.getElementById('inputNeighborNode').value;
    const span = document.getElementById('neighborNodeValue');

    span.textContent = '';

    for (var i = 0; i < list.undirectedList[inputNode].length; i++){
            if(i==0){
                span.textContent = list.undirectedList[inputNode][i];
            }else{
                span.textContent = span.textContent + ' , ' + list.undirectedList[inputNode][i];
            }
          
    }

    document.getElementById('inputNeighborNode').value = '';
    
}


// Takes the number of iterations as input
// and passes it into our pageRank function
// with the instance of myGraph
function calculatePRFront(){

    const iterations =document.getElementById('prIterations').value;
    var result = pageRank(list, iterations);
    document.getElementById('prIterations').value = '';
    var text = "<br>";

    var yourDiv = document.getElementById('showResults');
        result.forEach(function (value, key) {
        
    
             document.getElementById('showResults').innerHTML += text;

        var yourSpan = document.createElement('span');
        yourSpan.innerText = key + "  :  " + value;
        yourDiv.appendChild(yourSpan);

      

        document.getElementById("showResults").innerHTML += text;

    });
   
}
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);
// list.addNode(4);


// list.addEdge(1, 2);
// list.addEdge(1, 3);
// list.addEdge(2, 4);
// list.addEdge(3, 1);
// list.addEdge(3, 2);
// list.addEdge(3, 4);
// list.addEdge(4, 3);
console.log(list);

console.log(list.showNeighboringNodes(6));

console.log(Object.keys(list.directedList));



// Calcules the pageRank values
// of the keys in our instance of myGraph
function pageRank(list, numOfIterations) {

    // point numOfNodes to the number of different nodes within the directedList
    // each node represents a unique website
    var numOfNodes = (Object.keys(list.directedList)).length;

    // Create an instance of a map
    // to save nodes as key and pagerank values
    // as elements of the array corresponding to saved key
    var pageRankList = new Map();

    // set pageRankList key as value of every node
    // and initialize the value of corresponding key
    for (var i = 0; i < numOfNodes; i++) {

        var currentNode = Object.keys(list.directedList)[i];

        // initialize pagerank of every node as 1 divided by number of nodes
        // this is for the 0th iteration of pagerank algorithm
        pageRankList.set(currentNode, [1 / numOfNodes]);
    }


    // tmp will be used to save result of a nodes pagerank at ith iteration
    // lastValue will be used to store the intermediate result of the nodes pagerank
    // results will be used to store the pagerank of each node
    var tmp = 0;
    var lastValue = 0;
    var results = [];

    // For each iteration u
    for (var u = 0; u < numOfIterations; u++) {

        // For every node (unique website)
        // check what nodes are pointing towards currentNode
        for (var i = 0; i < numOfNodes; i++) {

            var currentNode = Object.keys(list.directedList)[i];


            pageRankList.forEach(function (value, key) {

                for (var j = 0; j < list.directedList[key].length; j++) {

                    if (list.directedList[key][j] == currentNode) {

                        tmp = pageRankList.get(key)[u] / list.directedList[key].length;
                        tmp = tmp + lastValue;
                        lastValue = tmp;

                    }
                }
            })

            results.push(tmp);
            tmp = 0;
            lastValue = 0
        }

        // Loop for every key-value 
        var m = 0;
        pageRankList.forEach(function (value, key) {
            value.push(results[m]);
            m++;
        })

        results = [];

    }

    pageRankList.forEach(function (value, key) {
        console.log(key + ' = ' + value)

    });

    return pageRankList;

}



  return (
    <>
  <h1>Page Rank Calculator by Danish Malik</h1>
  <h3>Please enter Node value (as a number) :</h3>
  <input type="number"  id="inputNode" placeholder="Enter Node"/>
  <button type="button" onClick={addNodeFront}>Add Node</button>

    <h3>Please enter the two nodes you want to join (form an edge) :</h3>
    <p>join edge from node </p>
    <input placeholder="Enter First Node" type="number" id="firstNode"/>
    <p>to node</p>
    <input placeholder="Enter Second Node" type="number" id="secondNode"/>
    <button onClick={addEdgeFront}>Join Nodes</button>


    <p>Get neighboring nodes:</p>
    <input placeholder="Enter Node" type="number" id="inputNeighborNode"/>
    <button onClick={getNodesFront}>Find Neighboring Nodes</button>
    <span id="neighborNodeValue"></span>


    <p>Enter number of iterations for page rank and start calculation.</p>
    <input placeholder="Enter Number of Iterations" type="number" id="prIterations"/>
    <button onClick={calculatePRFront}>Calculate PageRank</button>

    <div id="showResults">
    <p>Values in last column is final page rank result for nodes.</p>
    </div>
    </>
  );
}

export default App;

/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
 
  var findSum = function(row, col) {
    var rowSum = solution.get(row).reduce((a, b) => a + b, 0);
    var colSum = 0;
    for (var row = 0; row < solution.rows().length; row++) {
      if (solution.get(row)[col] === 1){
        colSum++;
      }
    }
    return rowSum + colSum;
  }

  for (var r = 0; r < solution.rows().length; r++) {
    for (var c = 0; c < solution.rows().length; c++) {
      if (findSum(r, c) < 1) {
        solution.togglePiece(r, c);
      } 
    }
  } 
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
// var rooksLocations = [];
//   var rowIndices = Array.from(Array(n).keys());
//   var colIndices = [];
//   for (var r = 0; r < n; r++) {

//   }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

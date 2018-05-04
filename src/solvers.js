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
  var solutions = [];
  var solutionCounter = 0;
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      var newSol = solutionFinder(row,col, n);
      if (alreadyExist(solutions, newSol) === false) {
        solutions.push(newSol);
      }
    }
  }
  function solutionFinder (rowIndex, colIndex, n) {
    var newBoard = new Board({n: n});
    // debugger;
    newBoard.togglePiece(rowIndex, colIndex);
    for (var r = 0; r < newBoard.rows().length; r++) {
      for (var c = 0; c < newBoard.rows().length; c++) {
        if (newBoard.get(r)[c] === 0) {
          newBoard.togglePiece(r,c);
          if (newBoard.hasAnyRooksConflicts()) {
            newBoard.togglePiece(r,c);
          }    
        }
      }
    }
    return newBoard;
  }
  function alreadyExist (solutions, newSol) {
    for (var s = 0; s < solutions.length; s++) {
      if (checkDuplicates(newSol, solutions[s])) {
        return true;
      }
    }
    return false;  
  } 
  
  function checkDuplicates (newSol, existingSol) {
    if (JSON.stringify(newSol) === JSON.stringify(existingSol)) {
      return true;
    }
    return false;
  }
  console.log(solutions);
  solutionCount = solutions.length;
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
window.solutionFinder = function(rowIndex, colIndex, n) {
    var newBoard = new Board({n: n});
    // debugger;
    newBoard.togglePiece(rowIndex, colIndex);
    for (var r = 0; r < newBoard.rows().length; r++) {
      for (var c = 0; c < newBoard.rows().length; c++) {
        if (newBoard.get(r)[c] === 0) {
          newBoard.togglePiece(r,c);
          if (newBoard.hasAnyRooksConflicts()) {
            newBoard.togglePiece(r,c);
          }    
        }
      }
    }
    return newBoard;
  }

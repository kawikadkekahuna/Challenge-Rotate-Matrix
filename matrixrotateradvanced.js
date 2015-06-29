/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *  
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix) {
  this.matrix = matrix;

};

// [9,0,3,4,8],             // [8,0,1,9,3],
// [0,6,3,5,0],             // [4,5,2,9,7],
// [3,8,6,2,1],             // [3,3,6,9,0],
// [8,8,9,9,9],             // [0,6,8,8,3],
// [7,3,0,7,3]              // [9,0,3,8,7],


//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here 

  var rotatedMatrix = this.matrix;
  var matrixLength = this.matrix.length;
  var INDEX = matrixLength - 1;
  var BASE = 0;
  var self = this;

  function leftArr() {
    var arr = [];
    for (var i = 0; i < matrixLength; i++) {
      arr.push(self.matrix[INDEX][i]);
    }
    // console.log('leftArr', arr)
    return arr;
  }

  function rightArr() {
    var arr = [];

    for (var i = 0; i < matrixLength; i++) {
      arr.push(self.matrix[BASE][i]);
    }

    // console.log('rightArr', arr);
    return arr;
  }

  function botArr() {
    var arr = [];

    for (var i = 1; i < INDEX; i++) {
      arr.push(self.matrix[i][INDEX]);
    }
    // console.log('botArr',arr);
    return arr;
  }

  function topArr() {
    var arr = [];

    for (var i = 0; i < matrixLength; i++) {
      arr.push(self.matrix[i][BASE]);
    }
    // console.log('topArr', arr.reverse());
    return arr.reverse();
  }


  var leftArr = leftArr();
  var rightArr = rightArr();
  var botArr = botArr();
  var topArr = topArr();

  function buildCW() {
    for (var i = 1; i < leftArr.length; i++) {
      rotatedMatrix[i][BASE] = leftArr[BASE + i];
    }

    for (var i = BASE; i < matrixLength; i++) {
      rotatedMatrix[BASE][i] = topArr[i];
    }

    for(var i = BASE; i < matrixLength; i++ ){
      console.log(rotatedMatrix[INDEX][i]);
    }

     console.log('rightArr',rightArr); 

    console.log(rotatedMatrix);
  }

  buildCW();

}
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

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW

// [8,0,1,9,3],      -------->                            // [9,0,3,4,8],
// [4,5,2,9,7],                                           // [0,6,3,5,0],
// [3,3,6,9,0],                                           // [3,8,6,2,1],
// [0,6,8,8,3],                                           // [8,8,9,9,9],
// [9,0,3,8,7],                                           // [7,3,0,7,3]

MatrixRotator.prototype.rotate = function(direction) {
  // do work here
  // must be a valid Direction, see Direction.js
  var MATRIX_LENGTH = this.matrix.length;
  var reformedMatrix = [];
  for (var i = 0; i < MATRIX_LENGTH; i++) {
    var tmpMatrix = [];
    for (var j = 0; j < MATRIX_LENGTH; j++) {
      tmpMatrix.push(this.matrix[j][i]);
    }
    reformedMatrix.push(tmpMatrix.reverse());
  }
  // console.log(reformedMatrix);
  this.matrix = reformedMatrix;

};
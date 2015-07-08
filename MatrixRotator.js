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
MatrixRotator.prototype.rotate = function(direction) {
  // do work here

  // must be a valid Direction, see Direction.js
  var matrixDimensions = this.matrix.length;
  var SCHEMA;

  function assignValues(matrix, layer) {
    var schema = {};
    var counter = 1;
    var newMatrix = [];

    layer = layer || 0;

    for (var i = 0 + layer; i < matrixDimensions - layer; i++) {
      var row = []
      for (var j = 0 + layer; j < matrixDimensions - layer; j++) {
        schema[counter] = matrix[i][j];
        row.push(counter++);
      }
      newMatrix.push(row);
    }
    SCHEMA = schema;
    return newMatrix;
  }

  var matrixMask = assignValues(this.matrix);
  // console.log('SCHEMA', SCHEMA);
  // console.log('matrixMask', matrixMask);

  // [9,0,3,4,8],
  // [0,6,3,5,0],
  // [3,8,6,2,1],
  // [8,8,9,9,9],
  // [7,3,0,7,3]

  function turnCW(matrix,layer) {
    var newMatrix = matrix;
    var FIRST_INDEX = 0;
    var LAST_INDEX = matrixDimensions - 1;

    for (var i = 0; i < matrixDimensions; i++) {
      for (var j = 0; j < matrixDimensions; j++) {

        switch(true){
          case i === FIRST_INDEX:
          if(j === FIRST_INDEX){
            newMatrix[i][j] += matrixDimensions;
          }else{
            newMatrix[i][j] -= 1;
          }
          break;

          case i > FIRST_INDEX && i < LAST_INDEX:
          if(j === FIRST_INDEX){
            newMatrix[i][j] += matrixDimensions;
          }
          if(j === matrixDimensions - 1){
            newMatrix[i][j] -= matrixDimensions;
          }
          break;

          case i === LAST_INDEX:
          if(j >= FIRST_INDEX && j < LAST_INDEX){
            newMatrix[i][j] +=1
          }
          if(j === LAST_INDEX){
          newMatrix[i][j] -= matrixDimensions;
          }

        }
        //end j for
      }
      //end i for
    }
    return newMatrix;
  }

  var test = turnCW(matrixMask);
  console.log('test', test);

  function matchMatrixToSchema(matrix){
    for(var key in SCHEMA){
       console.log('SCHEMA[key]',SCHEMA[key]); 
    }


  }
  matchMatrixToSchema(test);

};

//                    Must be Direction.CW               |-- Must be a valid Number
//                        or Direction.CCW ---v          v   between 1 and [radius]
MatrixRotator.prototype.rotateStep = function(direction, layer) {
  // do work here


};
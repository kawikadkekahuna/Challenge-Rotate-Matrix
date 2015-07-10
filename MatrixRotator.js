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


  var SCHEMA;
  var newMatrix;
  if (direction === Direction.CW) {
    var outer = shiftMatrix(this.matrix);
    for (var i = 0; i < this.matrix.length - 2; i++) {
      inner = shiftMatrix(inner);
    }
    var inner = shiftMatrix(this.matrix, 1);
     for (var i = 0; i < this.matrix.length - 2; i++) {
      inner = shiftMatrix(inner);
    }



  }



  function shiftMatrix(matrix, layer) {
    layer = layer || null;
    var shiftedMatrix = assignValues(matrix, layer, matrix.length);
    shiftedMatrix = turnCW(shiftedMatrix, layer, shiftedMatrix.length);
    shiftedMatrix = matchMatrixToSchema(shiftedMatrix);

    return shiftedMatrix;
  }

  function assignValues(matrix, layer, dimensions) {
    var schema = {};
    var matrixDimensions = dimensions;
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


  function turnCW(matrix, layer, dimensions) {
    layer = layer || 0;
    var matrixDimensions = dimensions;
    var newMatrix = matrix;
    var FIRST_INDEX = 0;
    var LAST_INDEX = matrixDimensions - 1;
    for (var i = 0; i < matrixDimensions; i++) {
      for (var j = 0; j < matrixDimensions; j++) {
        switch (true) {
          case i === FIRST_INDEX:
            if (j === FIRST_INDEX) {
              newMatrix[i][j] += matrixDimensions;
            } else {
              newMatrix[i][j] -= 1;


            }
            break;

          case i > FIRST_INDEX && i < LAST_INDEX:
            if (j === FIRST_INDEX) {
              newMatrix[i][j] += matrixDimensions;
            }
            if (j === LAST_INDEX) {
              newMatrix[i][j] -= matrixDimensions;
            }
            break;

          case i === LAST_INDEX:
            if (j >= FIRST_INDEX && j < LAST_INDEX) {
              newMatrix[i][j] += 1
            }
            if (j === LAST_INDEX) {
              newMatrix[i][j] -= matrixDimensions;
            }
        }
        //end j fo
      }
      //end i for
    }
    return newMatrix;
  }


  /*  function turnCW(matrix, layer, dimensions) {
    layer = layer || 0;
    var matrixDimensions = dimensions;
    var newMatrix = matrix;
    var FIRST_INDEX = 0;
    var LAST_INDEX = matrixDimensions-1;
    for (var i = 0; i < matrixDimensions; i++) {
      for (var j = 0; j < matrixDimensions; j++) {
        switch (true) {
          case i === FIRST_INDEX:
            if (j === FIRST_INDEX) {
              newMatrix[i][j] += matrixDimensions;

            } else {
              newMatrix[i][j] -= 1;


            }
            break;

          case i > FIRST_INDEX && i < LAST_INDEX:
            if (j === FIRST_INDEX) {
              newMatrix[i][j] += matrixDimensions;
            }
            if (j === LAST_INDEX) {
              newMatrix[i][j] -= matrixDimensions;
            }
            break;

          case i === LAST_INDEX:
            if (j >= FIRST_INDEX && j < LAST_INDEX) {

              newMatrix[i][j] += 1
            }
            if (j === LAST_INDEX) {
              console.log('in');
              newMatrix[i][j] -= matrixDimensions;
            }
        }
        //end j fo
      }
      //end i for
    }
    return newMatrix;
  }
*/

  function matchMatrixToSchema(matrix) {
    var newMatrix = matrix;
    var counter = 0;
    var innerCounter = 0;

    newMatrix.forEach(function(current) {
      for (var i = 0; i < current.length; i++) {
        var index = current[i];
        var replace = SCHEMA[index];
        current[i] = replace;
      }
    });

    return newMatrix;

  }



};

//                    Must be Direction.CW               |-- Must be a valid Number
//                        or Direction.CCW ---v          v   between 1 and [radius]
MatrixRotator.prototype.rotateStep = function(direction, layer) {
  // do work here


};
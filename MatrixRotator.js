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


  var matrixDimensions = this.matrix.length;
  var SCHEMA;

  function loop(matrix) {
    var d = matchMatrixToSchema(turnCW(assignValues(matrix, 1), 1));
    // var d = matchMatrixToSchema(turnCW(assignValues(matrix, 1),1));
    console.log('matrix', matrix);
    console.log('d', d);
    var f = matchMatrixToSchema(turnCW(assignValues(d, 2)));
    console.log('f', f);
    // var f = matchMatrixToSchema(turnCW(assignValues(d)));

    // console.log(matchMatrixToSchema(turnCW(assignValues(d))));
    // console.log('f', f);
  }

  loop(this.matrix);

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


  function turnCW(matrix, layer) {
    console.log('turnCw started');
    layer = layer || 0;
    var newMatrix = matrix;
    var FIRST_INDEX = 0;
    var LAST_INDEX = matrixDimensions - 1;

    for (var i = 0 + layer; i < matrixDimensions - layer; i++) {
      for (var j = 0 + layer; j < matrixDimensions - layer; j++) {

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
            if (j === matrixDimensions - 1) {
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
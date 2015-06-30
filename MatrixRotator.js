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


// [3,7,0,3,7],
// [9,9,9,8,8],
// [1,2,6,8,3],
// [0,5,3,6,0],
// [8,4,3,0,9]

MatrixRotator.prototype.rotate = function(direction, layer) {
  var self = this;
  var MATRIX_LENGTH = this.matrix.length - 1;
  var LAYER = layer || 0;

  function getTopLayer() {
    var arr = [];
    for (var i = LAYER; i <= MATRIX_LENGTH - LAYER; i++) {
      arr.push(self.matrix[LAYER][i]);
    }
    console.log(arr);
    return arr; // console.log(cwRotate());
  }

  function getRightLayer() {
    var arr = [];
    if (LAYER === 0) {
      for (var i = LAYER; i <= MATRIX_LENGTH - LAYER; i++) {
        arr.push(self.matrix[i][MATRIX_LENGTH]);
      }
      console.log(arr);
      return arr;
    }else{
      for (var i = LAYER; i <= MATRIX_LENGTH - LAYER; i++) {
        arr.push(self.matrix[i][MATRIX_LENGTH - LAYER]);
      }
      console.log(arr);
      return arr;

    }
  }

  function getBottomLayer() {
    var arr = [];
    for (var i = LAYER; i <= MATRIX_LENGTH - LAYER; i++) {
      arr.push(self.matrix[MATRIX_LENGTH - LAYER][i]);
    }
    console.log(arr);
    return arr;
  }

  function getLeftLayer() {
    var arr = [];
    for (var i = LAYER; i <= MATRIX_LENGTH - LAYER; i++) {
      arr.push(self.matrix[i][LAYER]);
    }
    console.log(arr);
    return arr;
  }


  var topLayer = getTopLayer();
  var rightLayer = getRightLayer();
  var bottomLayer = getBottomLayer();
  var leftLayer = getLeftLayer();

  function cwRotate() {
    var rotatedMatrix = self.matrix;


    function topToRight() {
      for (var i = 0; i < MATRIX_LENGTH; i++) {
        rotatedMatrix[i][MATRIX_LENGTH] = topLayer[i];
      }
    }

    function rightToBottom() {
      for (var i = 0; i < MATRIX_LENGTH; i++) {
        rotatedMatrix[MATRIX_LENGTH][i] = rightLayer[i];
      }
    }

    function bottomToLeft() {
      for (var i = 0; i < MATRIX_LENGTH; i++) {
        rotatedMatrix[i][0] = bottomLayer[i];
      }

    }

    function leftToTop() {
      for (var i = 0; i < MATRIX_LENGTH; i++) {
        rotatedMatrix[0][i] = leftLayer[i];
      }
    }

    topToRight();
    rightToBottom();
    bottomToLeft();
    leftToTop();
    return rotatedMatrix;
  }
  // console.log(cwRotate());

};
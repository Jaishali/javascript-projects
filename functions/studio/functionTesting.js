//1.makeLine(size) function:
function makeLine(size) {
    let line = '#';

    for (let i = 0; i < size; i++) {
      line += '#' + '\n';
      
      
    }
     return line;
}
console.log(makeLine(5));
//2.makeSquare(size) function:
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#' +'\n';
    }
    return line;
  }
  console.log(makeLine(5));

//3.makeRectangle(width, height) function:
function makeRectangle(width, height)
 {
    let rectangle = '';
    
    for (let i = 0; i < height; i++)
     {
      rectangle += (makeLine(width) + '\n');
      
    }
    return rectangle.slice(0, -1);
    
  }
  console.log(makeRectangle(5, 3));

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  };
  //4.makeDownwardStairs(height) function:
  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));
  function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  };
  //5.makeSpaceLine(numSpaces, numChars) function:
  function makeSpaceLine(numSpaces, numChars) {
    let SpaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
      SpaceLine += (makeLine(i+1) + '\n');
    }
    return SpaceLine;
  }
  console.log(makeSpaceLine(3, 5));
  function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  };
  //6.makeIsoscelesTriangle(height) function:
  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log(makeIsoscelesTriangle(5));
  function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
          return line;
  };
  
//7.makeDiamond(height) function:
  function makeDiamond(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
console.log(makeDiamond(5));
function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}
  function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
          return line;
  };
  
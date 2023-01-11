
export default class Snail {

 

  constructor(sizeOfArray) {
    this.setArray=sizeOfArray;
  }


  //creating memory space to support an array of NxN 
  set setArray(sizeOfArray) {
    if (sizeOfArray > 1 && Number.isInteger(sizeOfArray)) {
      this.array = new Array(sizeOfArray - 1);
      for (var i = 0; i < sizeOfArray; i++) {
        this.array[i] = new Array(sizeOfArray - 1);
      }
    }else{
      this.array=0; //error
    }
  }
  snail() {
    let n = this.array.length;
    if (n > 1) {
      let startPosition = 0;
      var arr = new Array(n - 1);
      for (var i = 0; i < n; i++) {
        arr[i] = new Array(n - 1);
      }

      for (let i = n; i > 0; i = i - 2) {
        // startPosition is not a coordinate, is more like a code because you know if startPosition=0 in down() it will be the coordinate [length-1,1] because that is the first time that down() writes a value
        this.right(i, arr, startPosition);
        // does the snail shell drawing end with a left turn?
        if (i > 1) {
          this.down(i - 1, arr, startPosition);
          this.left(i - 1, arr, startPosition);
        }
        // does the snail shell drawing end with a up turn?
        if (i > 2)
        this.up(i - 2, arr, startPosition);
        startPosition++;
      }
      this.printOnDocument(arr);
      return (arr)
    }
    else {
      document.getElementById("returnedArray").innerHTML = "error el numero ingresado debe ser entero>=1";
      return "error el numero ingresado debe ser entero"
    }
  }

  right(steps, arr, startPosition) {
    let summation = 0;
    for (let i = 1; i <= startPosition; i++) {
      summation += (arr.length - 1 * startPosition) * 4
    }
    for (let i = 1; i <= steps; i++) {
      arr[startPosition][i - 1 + startPosition] = summation + i;
    }
  }
  down(steps, arr, startPosition) {
    let summation = 0;
    for (let i = 0; i <= startPosition; i++) {
      if (i === 0)
        summation += arr.length
      else if (i === 1)
        summation += (arr.length - 1) * 4 - 2
      else
        summation += (arr.length - i * 2) * 4 + 2
    }

    for (let i = 1; i <= steps; i++) {
      arr[i + startPosition][arr.length - 1 - startPosition] = summation + i;
    }
  }
  left(steps, arr, startPosition) {
    let summation = 0;
    for (let i = 1; i <= startPosition; i++) {
      summation += (arr.length - i * 2) * 4
    }
    for (let i = 1; i <= steps; i++) {
      arr[arr.length - 1 - startPosition][arr.length - i - 1 - startPosition] = arr.length * 2 - 1 + summation + i
    }
  }

  up(steps, arr, startPosition) {
    let summation = 0;
    for (let i = 1; i < startPosition + 1; i++) {
      summation += (arr.length - i * 2) * 4 - 2
    }
    for (let i = 1; i <= steps; i++) {
      arr[arr.length - startPosition - i - 1][startPosition] = summation + i + arr.length * 3 - 2;
    }
  }
  printOnDocument(arr) {
    let n = arr.length;
    let returnedString = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        returnedString += (arr[i][j] + " \t")
      }
      returnedString += "<br></br>"
    }
    if (typeof window === "object") // check if it is running in a browser environment or is a test
      document.getElementById("returnedArray").innerHTML = returnedString;
  }
}

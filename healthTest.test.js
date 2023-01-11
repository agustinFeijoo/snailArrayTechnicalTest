import Snail from "./Snail";

let snail;
let arr;
describe("Snail", () => {
  beforeEach(() => {
    snail = new Snail(5);

    arr = [[0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]];
  })


  it('right should be writting the right spots ', () => {
    let startPosition = 2;
    let steps = 1;
    let expectedArr =
      [[0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 25, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]]

    snail.right(steps, arr, startPosition)

    expect(arr).toEqual(expectedArr)
  })

  it('down should be writting the right spots ', () => {
    let startPosition = 0;
    let steps = 4;
    let expectedArr =
      [[0, 0, 0, 0, 0],
      [0, 0, 0, 0, 6],
      [0, 0, 0, 0, 7],
      [0, 0, 0, 0, 8],
      [0, 0, 0, 0, 9]];
    snail.down(steps, arr, startPosition)
    expect(arr).toEqual(expectedArr)
  })

  it('left should be writting the right spots ', () => {
    let startPosition = 0;
    let steps = 4;
    let expectedArr =
      [[0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [13, 12, 11, 10, 0]];
    snail.left(steps, arr, startPosition)
    expect(arr).toEqual(expectedArr)
  }
  )
  it('up should be writting the right spots ', () => {
    let startPosition = 0;
    let steps = 3;
    let expectedArr =
      [[0, 0, 0, 0, 0],
      [16, 0, 0, 0, 0],
      [15, 0, 0, 0, 0],
      [14, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]];
    snail.up(steps, arr, startPosition)
    expect(arr).toEqual(expectedArr)
  })
  it('integral test', () => {
  
    let expectedArr =
      [[1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9]];
    
    expect(snail.snail()).toEqual(expectedArr)
  })
})
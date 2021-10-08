// Basic types
let id1: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = "hello"

// for an array of numbers
let ids: number[] = [1,2,3,4,5]

// so if we try to add a string to that array of numbers, we will get an error
// ids.push('hello');

let arr: any[] = [1, true, 'Hello']

// we also have whats called a Tuple where you can declare the order of the data types in the array

let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple array 
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// Union

let newID: string | number = 22;
newID = '22'

// Enum 

enum Direction1 {
    Up = 1, 
    Down,
    Left, 
    Right
}
enum Direction2 {
    Up = "Up", 
    Down = 'Down',
    Left = 'Left', 
    Right = 'Right',
}


console.log(Direction1.Up)

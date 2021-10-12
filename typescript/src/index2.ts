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

// Objects 

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion - this explicitly tells the compiler to treat an entity as a different type 
let cid: any = 1
//let customerId = <number>cid
// another way to do it
let customerId = cid as number

customerId = 5

// functions 

function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2))

// Void 

function log(message: string | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

// generally for objects, use Interfaces instead of types

// there are some differences, like a type can be used with primatives and unions

// Interfaces can also be used with functions


interface MathFunc {
    (x: number, y: number) : number 
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x + y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string 

    constructor(id: number, name: string) {
        this.id = id 
        this.name = name

    }
    register() {
        return `${this.name} is now registered`
    }
}



const brad = new Person(1, 'Reese RJ Kaz')
const mike = new Person(2, 'Roberty Downey Jr') 

console.log(brad.register())

console.log(brad, mike)

//Subclasses
class Employee extends Person {
    position: string 
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.name)
console.log(emp.register())

// Generics 
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
 }

 let numArray = getArray<number>([1,2,3,4])
 let strArray = getArray<string>(['Brad', 'John', 'Jill'])

 strArray.push('hello')






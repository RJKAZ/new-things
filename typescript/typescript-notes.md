TypeScript is an open source language and is a superset of JavaScript

- offers additional features to JavaScript including static types
- Using types is completely optional
- compiles down to regular JS
- Can be used for front end JS as well as backend with Node.js
- Includes most features from ES6, ES7 (classes, arrow functions, etc)
- Types from 3rd party libraries can be added with type definitions

- Its included with Angular by default, but can also be used with React and Vue
- The biggest feature is having Static Types

Dynamic vs Static Typing

In dynamically typed languages, the types are assoicated with the run-time values and not named explicitly in your code.

In statically typed languages, you explicitly assing types to variables, function parameters, return values, etc
So Strings have to be declared as strings, and Numbers need to be declared as numbers, etc

Static Examples: Java, C, C++, Rust, Go
Dynamic Examples: JavaScript, Python, Ruby, PHP

Pros and Cons to using TypeScript

Pro
: More Robust
: Easily Spot Bugs
: Predictability
: Readability
: Popular

Cons
: More Code to Write
: More to learn
: Required Compilation
: Not true Static typing

Compiling TypeScript

- TypeScript uses ts. and tsx. extensions (tsx is for jsx with react)
- TSC (TypeScript Compiler) is used to compile .ts files down to JS
- Can watch files and report errors at compile time
- Many tools include TS compilation by default
- Most IDE's have great support for TS
- The tsconfig.json file is used to configure how TypeScript works.

To install it, in you base terminal

To install it globally on a Mac (such as mine)

sudo npm i -g typescript

and then to check to make sure it worked

tsc -v

and that should show the currnt version

let off on Brads Video at the 24:19 mark

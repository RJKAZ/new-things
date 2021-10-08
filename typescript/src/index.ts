// so we create a variable of "id" and set its value to the number of 5, adding the colan and the datatype defines it as a number value
// let id: number = 5;
// so it we try to redefine the variable to a different data type, such as a String, we will get an error message. 
// id = '5'

//however TypeScript will make this determination by default, so adding ": number" isn't nessesary. 

let id: number = 5
//id = '5'

// now to compile this into a Javascript file, in the terminal type tsc and target the index file
// so in terminal ' tsc index ' 

// which gives me in the terminal the same error I got above 

// it also creates a new javascript file with the same name and omits the type script portions like ': number' 

// it also by default changes the variable from a 'let' in the TS file to a 'var' in the JS file. But this you can configure away 

// you can also compule in watch mode. 

// in this case you would type into the termianl - 'tsc --watch index'


// now to set up a configuration file, in the terminal type 

// " tsc --init " 


// this will create a tsconfig.json file 

// Now the config file can be scary looking, but to change the whole var/let thing to ES6 standards, just change the target

// "target": "es5",  

// to "target": "es6",  

// so now when we recompile it, it will be at es6 standards. 

// for this purpose just type in tsc in the terminal since by default running that will compile any typescript files it finds in the project 

// no when we check index.js, it will not be a let variable instead of var

// also in config we will change the "outDir" to folder called "./dist", and then create the dist folder 

// we will do the same and set the rootDir to the source folder "./src"

// so lets also create the source folder, and we'll move this file into that folder

// so now if we do a tsc compile, it should compile it into dist (although mine didn't for some reason, but moving on)

console.log('ID:' , id)
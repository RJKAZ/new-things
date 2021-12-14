Jest is a JavaScript Testing Framework designed to ensure correctness of any JavaScript Code Base.

Jest is installed using

npm install --save-dev jest

Lets get started by writing a test for a hypothetical function that adds two numbers

Create a sum.js file with this code in it

function sum(a, b) {
return a + b;
}
module.exports = sum;

Then create a file named sum.test.js - this contains the actual test

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});

add to the package JSON

{
"scripts": {
"test": "jest"
}
}

Finally, run yarn test or npm run test and Jest will print this message:

PASS ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)

the test used expect and toBe to test that two values were exactly identical.

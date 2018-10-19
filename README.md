# JavaScript + ES6 + Babel
My JS training following the Rocketseat ES6+ course.

## Babel: Step-by-Step
1. `yarn add @babel/cli`
2. `yarn add @babel/core`
3. `yarn add @babel/preset-env`
4. Create `.babelrc` (config file)
    - **preset-env** will analyse the system environtment, in other words, the client that maybe will not understand ES6+
5. Add the following code to the `package.json` file:
``` json
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
}
```   
This code will watch your files, updating the `bundle.js` after every change on `main.js`

## Webpack Configuration
With the Webpack, it will be possible use as many files as you want to, then they'll be compressed in one file.
1. 

## JavaScript

### Array Operations

#### Filter
``` js
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(function (item) {
    return item % 2 === 0)
});

console.log(arr); // 1, 2, 3, 4, 5
console.log(newArr); // 2, 4
```

#### Map
``` js
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item * 2 );

console.log(arr); // 1, 2, 3, 4, 5
console.log(newArr); // 2, 4, 6, 8, 10
```

#### Reduce
``` js
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((total, item) => { return total + item });

console.log(arr); // 1, 2, 3, 4, 5
console.log(sum); // 15
```

### Objects

#### Desestruturação
``` js
const user = {
    "name": "John Doe",
    "age": 42,
    "address": {
        "city": "Chicago",
        "state": "Illinois"
    }
}

const { name, age, address: {city} } = user;
console.log(name);
console.log(city);

function showData({ name, address: {city} }) {
    console.log(`${name}: ${city}`);
}
showData(user);
```


### Webpack
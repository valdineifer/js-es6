# JavaScript + ES6 + Babel
My JS training following the Rocketseat ES6+ course.

## Step-by-Step
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
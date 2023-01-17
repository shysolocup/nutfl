# nutfl
A package for JavaScript that is essentially just a library of functions I use while scripting. It includes recreations of some Python package functions as well as a few custom ones that might help with development. Most of the functions work for both Node JS and Web JS.


**NOTE:** None of these ports are official I just ported them over because it made it easier for me.

## Python Ports
**Random:**
```js
var {random} = require('./nutfl');
```
- random.randint(min, max);
- random.choice(array);
- random.randopp(chance, min, max);

**Asyncio:**
```js
var {asyncio} = require('./nutfl");
```
- asyncio.sleep(seconds);
- asyncio.sleepMs(milliseconds);

**Datetime:**
```js
var {datetime} = require('./nutfl');
```
- datetime.datetime.now(datestring);

**Json:**
*(only works on Node JS)*
```js
var {json} = require('./nutfl');
```
- json.load(data);
- json.clear(file);
- json.dump(data, file, args)
#### *these kinda need examples so here:* 
```js
// these should be separated by a sleep or else they'll break, use await asyncio.sleepMs(5); that should work
json.dump({"a": "b"}, './file.json', {indent: 4});

json.set(".a", "b", './file.json', {indent: 4});
json.set('["a"]', "b", './file.json');

json.clear('./file.json');
```

## Custom
**Html:**
```js
var {html} = require('./nutfl');
```
- html.clear();
- html.isFullscreen;

**ExtMath:**
```js
var {extMath} = require('./nutfl');
```
- extMath.divmod(x, y);
- divmod(x, y);

**File & Link:**
```js
var {file} = require('./nutfl');
var {link} = require('./nutfl');
```
*main file*
- file.isJS;
- file.isHTML;
```js
/* index.js */
var {file} = require('./nutfl');

console.log(file.isJS); // true
console.log(file.isHTML); // false
```
*files and links*
- file.isImage(file, includeGIFS`default false`);
- file.isGIF(file);
- file.isVideo(file);
- file.isAudio(file);
- file.isType(file, type);
- string.isImage(includeGIFS`default false`);
- string.isGIF();
- string.isVideo();
- string.isAudio();
- string.isType(type);
```html
<html>
  <head>
    <script type="text/javascript" src="./nutfl/index.js"></script>
  </head>
  <body>
    <script>
      document.write(file.isJS); // false
      document.write(file.isHTML); // true
    </script>
  </body>
</html>
```

## Miscellaneous
**Objects:**
- object.keys;
- object.values;
- object.length;
- object.stringify(replacer, indent`(optional)`);
- object.parse(reviver`(optional)`);
- object.indexOf(name);
- object.fetchKey(index);
- object.fetchValues(index);
```js
let data = {
  "a": "b",
  "c": ["d", "e"]
};

console.log(data.length); // 2
console.log(data.keys); // ["a", "c"]
console.log(data.values); // ["b",  ["d", "e"]]
console.log(data.indexOf("c")); // 1
console.log(data.fetchKey(1)); // "c"
console.log(data.fetchValues(1)); // ["d", "e"]
```

**Array:**
- array.randomChoice();
- array.endsWithC(string);
- array.startsWithC(string);
- array.equalFor(array);
- array.remove(index);
- array.flip(index1, index2);
- array.includesFor(array);

**Strings:**
- string.replaceFor(array);
- string.endsWithC(string);
- string.startsWithC(string);
- string.get(index, type`word or letter`);
- string.includesFor(array);
- string.startsWithFor(array);
- string.endsWithFor(array);
- string.isImage(includeGIFS`default false`);
- string.isGIF();
- string.isVideo();
- string.isAudio();
- string.isType(type);

# Usage
**Node JS:**
```js
var {random, asyncio} = require("./nutfl");
```

**Web JS / HTML:**
```html
<head>
  <script type="text/javascript" src="./nutfl/index.js"></script>
</head>
```

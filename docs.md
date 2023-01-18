# nutfl Documentation
## Random
**random.randint(min, max);**
```js
// random number generator
random.randint(1, 2);
```
**random.choice(array);**
```js
// randomly chooses between objects in an array
random.randint([1, 2, 3]);
random.randint(["a", "b", "c"]);
```
**random.randopp(chance, min, max);**
```js
// a little thing I added that's a replication of a part of the FNAF AI
// chance is the difficulty the FNAF AI runs on 0-20 so that would be like this:
let dif = 10;
random.randopp(dif, 0, 20);
```
## Asyncio
**asyncio.sleep(seconds);**
```js
// sleep to make second long delays in your code
async function func() {
  console.log("a");
  await asyncio.sleep(1);
  console.log("b");
}
```
**asyncio.sleepMs(milliseconds);**
```js
// a more precise sleep that uses milliseconds instead of seconds
async function func() {
  console.log("a");
  await asyncio.sleepMs(1000);
  console.log("b");
}
```
## Datetime
**datetime.datetime.now(datestring);**
```js
// way to get the current time and date
datetime.datetime.now("\nToday is %A, %B %dth %Y.\n");
```
- %H: hour
- %M: minute
- %S: second
- %A: full day (Monday)
- %d: day number (31)
- %b: month number (12)
- %B: full month (December)
- %Y: full year (2023)
- %y: short year (23)
- %x: full date mm/dd/yy (12/31/23)
## ExtMath
**divmod(x, y);**
```js
// used for time mostly
// this goes for both extMath.divmod() and just divmod()
let seconds = 120;
[minutes, seconds] = divmod(seconds, 60);
console.log(minutes); // 2
```
## Html
**html.clear();**
```js
// I don't think I need an example to explain this one it just clears the page
```
**html.isFullScreen;**
```js
// don't think I really need an example to explain this one either because it just checks if the html page is fullscreen
```
## File & Link
**file.isImage(includeGIFS);**
```js
// check if a link or file name is an image
let link = 'https://link.png';
let link2 = 'https://link2.gif';

link.isImage(); // true
link2.isImage(); // false
link2.isImage(true); // true
```
**file.isGIF();**
```js
// don't need to explain this
```
**file.isVideo();**
```js
// don't need to explain this
```
**file.isAudio();**
```js
// don't need to explain this
```
**file.isType(type);**
```js
let link = 'https://link.json';

link.isType("png"); // false
link.isType("json"); // true
```
**file.isJS;**
```js
// just checks if the main file is a .js file
```
**file.isHTML;**
```js
// just checks if the main file is a .html file
```
## Json
**json.dump(data, file, args);**
- json.dumps();
- json.write();
```js
// overwrites the contents of a JSON file with given data
// should have a sleep inbetween uses so it doesn't break
// args are replacer and indent and are all by default null

let data = {"a": "b"};
json.dump(data, './file.json', {indent: 4});
```
**json.clear(file);**
- json.reset();
```js
// resets the json file back to {}
json.clear("./file.json");
```
**json.set(keys, values, file, args);**
- json.edit();
- json.change();
- json.append();
- json.create();
- json.new();
```js
// changes the values of a key in a JSON file
// follows pretty much the same rules as json.dump
// I should probably put it outside of that but put a sleep inbetween so it doesn't break

json.set(".key", "value", './file.json', {indent: 4});
json.set("['key']", "value", './file.json', {indent:4});
```
**object.length;**
```js
// length for an object
var variable = {
  "a": "b",
  "c": ["d", "e"],
  "f": {"g": "h"}
};

variable.length; // 3
```
**object.keys;**
```js
// same as Object.keys() but better
var variable = {
  "a": "b",
  "c": ["d", "e"],
  "f": {"g": "h"}
};

variable.keys; // ["a", "c", "f"]
```
**object.values;**
```js
// same as Object.values() but better
var variable = {
  "a": "b",
  "c": ["d", "e"],
  "f": {"g": "h"}
};

variable.values; // ["b", ["d", "e"], {"g": "h"}]
```
**object.stringify(replacer, indent);**
```js
// same as JSON.stringify() but better
```
**object.parse(reviver);**
```js
// same as JSON.parse() but better
```
**object.indexOf(key);**
```js
// find the index of a key
var variable = {
  "a": "b",
  "c": ["d", "e"],
  "f": {"g": "h"}
};

variable.indexOf("c"); // 1
```
**object.fetchKey(index);**
```js
// fetch a key from an index
var variable = {
  "a": "b",
  "c": ["d", "e"],
  "f": {"g": "h"}
};

variable.fetchKey(1); // "c"
```
**object.fetchValues(index);**
```js
// fetch values from an index
var variable = {
  "a": "b",
  "c": ["d", "e"],
  "f": {"g": "h"}
};

variable.fetchValues(1); // ["d", "e"]
```
## Miscellaneous
**string.replaceFor(array, replaceWith);**
```js
// the equivalent of using a for loop to replace stuff
let string = "number stuffs object this is an array";

string.replaceFor(["number", "object", "array"], "string"); // "string stuffs string this is a string"
```
**string.endsWithC(char);**
```js
// check if a string ends with a given character instead of word
let string = "abc def";

string.endsWithC("f"); // true
string.endsWithC("e"); // false
```
**string.startsWithC(char);**
```js
// check if a string starts with given a given character instead of word
let string = "abc def";

string.startsWithC("a"); // true
string.startsWithC("b"); // false
```
**string.get(index, type);**
```js
// lets you get parts of strings without having to split
// type can be "letter" or "l" for letters and "word" or "w" for words
let string = "string stuff";

string.get(1, "l"); // "t"
string.get(1, "w"); // "stuff"
```
**string.includesFor(array);**
```js
// equivalent to using a for loop to check if the string includes stuff
let string = "string stuff";

string.includesFor( ["string", "stuff"] ); // true
string.includesFor( ["array", "stuff"] ); // true because it includes "stuff"
string.includesFor( ["array", "thing"] ); // false
```
**string.startsWithFor(array);**
```js
// equivalent to using a for loop to check if the string starts with stuff
let string = "string stuff";

string.startsWithFor( ["string", "array"] ); // true because it starts with "string"
string.startsWithFor( ["stuff", "array"] ); // false
```
**string.endsWithFor(array);**
```js
// equivalent to using a for loop to check if the string ends with stuff
let string = "string stuff";

string.endsWithFor( ["stuff", "thing"] ); // true because it starts with "string"
string.endsWithFor( ["thing", "other thing"] ); // false
```
**string.isImage(includeGIFS);**
```js
// check if a link or file name is an image
// includeGIFS is automatically false
let link = "https://file.png";

string.isImage(); // true
```
**string.isGIF();**
```js
// check if a link or file name is a GIF
let link = "https://file.gif";

string.isGIF(); // true
```
**string.isVideo();**
```js
// check if a link or file name is a video
let link = "https://file.mp4";

string.isVideo(); // true
```
**string.isAudio();**
```js
// check if a link or file name is an audio
let link = "https://file.mp3";

string.isAudio(); // true
```
**string.isType(type);**
```js
// check if a link or file name is a given type
let link = "https://file.json";

string.isType("json"); // true
```
**array.randomChoice();**
```js
// randomly chooses between things in the array
let array = [1, 2, 3, 4, 5];

array.randomChoice(); // would randomly pick
```
**array.prune(amount, direction);**
```js
// removes a given amount of items in an array in a given direciton
let array = ["a", "b", "c", "d"];

array.prune(2, "<"); // ["a", "b"]
array.prune(2, ">"); // ["c", "d"]
```
**array.remove(index);**
```js
// removes a part of an array
let array = ["a", "b", "c", "d"];

array.remove(1); // ["a", "c", "d"]
```
**array.flip(index1, index2);**
```js
// flips two items in an array
let array = ["a", "c", "b", "d"];

array.flip(1, 2); // ["a", "b", "c", "d"]
```
**array.includesFor(array);**
```js
// the equivalent of using a for loop to chcek if an array includes stuff
// works pretty much the same as string.includesFor() so I won't explain much
```
**divmod(x, y);**
```js
// port of the divmod() function from python
// used mostly for time stuff
let seconds = 120;

let [minutes, seconds] = divmod(seconds, 60); // minutes = 2
```

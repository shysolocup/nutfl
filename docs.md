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

console.log(link.isImage()); // true
console.log(link2.isImage()); // false
console.log(link2.isImage(true)); // true
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

console.log(link.isType("png")); // false
console.log(link.isType("json")); // true
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

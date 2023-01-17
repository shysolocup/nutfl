# nutfl Documentation
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

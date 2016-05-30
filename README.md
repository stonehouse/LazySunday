# LazySunday
A Simple and Flexible Promise Library

Goal of this library is to add a bit more flexibility and scalability to promises. A problem with promises is that they don't really scale very well to a series of tasks that involve a lot of computations or network calls. For example if you had a process that required 1,000 network calls, it wouldn't work well to create a 1,000 promises, but they would all be executed in parallel. LazySunday allows you to create Promises that delay execution, and let you have control about how many and in what order they execute.

```JavaScript
// This will only start getting executed once you call
// then or pass it through an array helper
let lazy = new LazyWrapper((resolve, reject) => {
  // Encrypt all the things!
  resolve();
});

// Later delays execution until put through the method below
lazy.later(result => {
  console.log(result);
});

let promises = [lazy];

LazySunday.allSequentially(promises);
```

Note this is currently exclusively using ES6 syntax.

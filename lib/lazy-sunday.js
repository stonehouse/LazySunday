
/**
* Core class, with static method for interacting with
* groups of 'lazy' promises. Allows you to prepare a
* large set of async jobs and have a few run in parallel,
* or just have them all run sequentially.
*
* @author Alexander Stonehouse
*/
class LazySunday {

  allSequentially(promises) {
    function popPromise() {
      if (promises.length === 0) {
        return;
      }
      let nextPromise = promises.shift();

      if (nextPromise instanceof LazyWrapper) {
        // Actually starting executing the promise
        nextPromise.run();
      }
      nextPromise.then(popPromise);
    }

    popPromise();
  }
}

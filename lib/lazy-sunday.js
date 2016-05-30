
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

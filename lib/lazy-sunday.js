
class LazySunday {

  allSequentially(promises) {
    function popPromise() {
      if (promises.length === 0) {
        return;
      }
      let nextPromise = promises.shift();

      if (nextPromise instanceof LazyPromise) {
        nextPromise.execute();
      }
      nextPromise.then(popPromise);
    }

    popPromise();
  }
}

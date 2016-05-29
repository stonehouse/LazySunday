

class LazyPromise {

  constructor(executor) {
    this.executor = executor;
    this.callbacks = [];
    this.catchers = [];
  }

  then(callback) {
    if (this.promise) {
      this.promise.then(callback);
    } else {
      this.callbacks.push(callback);
    }
  }

  catch(catcher) {
    if (this.promise) {
      this.promise.catch(catcher);
    } else {
      this.catchers.push(catcher);
    }
  }

  run() {
    this.promise = new Promise(executor);
    this.callbacks.forEach(callback => {
      this.promise.then(callback);
    });
    this.catchers.forEach(catcher => {
      this.promise.catch(catcher);
    });
  }
}

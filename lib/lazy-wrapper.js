
/**
* Super basic 'lazy' promise, simply wrapping the native Promise.
*
* @author Alexander Stonehouse
*/
class LazyWrapper {

  constructor(executor) {
    this.executor = executor;
    this.callbacks = [];
    this.catchers = [];
  }

  /**
  * then immediately starts execution, lazier than a normal
  * promise, but see {@link #later} for more flexibility and laziness.
  *
  * @param callback
  */
  then(callback) {
    later(callback);
    run();
  }

  /**
  * Simply adds callback to queue, execution won't start until
  * handed to a method in {@link LazySunday}.
  *
  * @param callback
  */
  later(callback) {
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

export default class Timer {
  constructor(callback, delay) {
    this.callback = callback;
    this.remaining = delay;
    this.timerId;
    this.start;

    this.resume();
  }

  pause() {
    clearTimeout(this.timerId);
    this.remaining -= new Date() - this.start;
  }

  resume() {
    this.start = new Date();
    clearTimeout(this.timerId);
    this.timerId = setTimeout(this.callback, this.remaining);
  }
}

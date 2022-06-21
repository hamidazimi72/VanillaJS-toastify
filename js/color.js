export default class Color {
  #r = 0;
  #g = 0;
  #b = 0;
  constructor(r = 0, g = 0, b = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  // r setter, getter
  set r(value) {
    if (value >= 0 && value <= 255) {
      this.#r = parseInt(value);
    } else {
      throw new RangeError("Value must between 0 and 255");
    }
  }

  get r() {
    return this.#r;
  }

  // g setter, getter
  set g(value) {
    if (value >= 0 && value <= 255) {
      this.#g = parseInt(value);
    } else {
      throw new RangeError("Value must between 0 and 255");
    }
  }

  get g() {
    return this.#g;
  }

  // b setter, getter
  set b(value) {
    if (value >= 0 && value <= 255) {
      this.#b = parseInt(value);
    } else {
      throw new RangeError("Value must between 0 and 255");
    }
  }

  get b() {
    return this.#b;
  }

  static hexToRgb(hex) {
    const regex = new RegExp("^[0-9a-f]{6}$", "i");
    if (regex.test(hex)) {
      return new Color(
        parseInt(hex.substring(0, 2), 16),
        parseInt(hex.substring(2, 4), 16),
        parseInt(hex.substring(4, 6), 16)
      );
    }
  }

  // [util.inspect.custom]() {
  //   return `rgb(${this.r}, ${this.g}, ${this.b})`;
  // }
}

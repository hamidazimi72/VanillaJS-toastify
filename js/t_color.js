import Color from "./color.js";

export class TColor extends Color {
  #a = 1;
  constructor(r = 0, g = 0, b = 0, a = 1) {
    super(r, g, b);
    this.a = a;
  }

  set a(alpha) {
    if (alpha >= 0 && alpha <= 1) {
      this.#a = Math.floor(parseFloat(alpha) * 1000) / 1000;
    } else {
      throw new RangeError("Alpha must between 0 and 1");
    }
  }

  get a() {
    return this.#a;
  }

  static hexToRgb(hex) {
    const regex = new RegExp("^([0-9a-f]{6})|([0-9a-f]{8})$", "i");
    if (regex.test(hex)) {
      if (hex.length === 6) {
        return new TColor(
          parseInt(hex.substring(0, 2), 16),
          parseInt(hex.substring(2, 4), 16),
          parseInt(hex.substring(4, 6), 16)
        );
      } else {
        return new TColor(
          parseInt(hex.substring(0, 2), 16),
          parseInt(hex.substring(2, 4), 16),
          parseInt(hex.substring(4, 6), 16),
          parseInt(hex.substring(6, 8), 16) / 255
        );
      }
    } else {
      throw new Error("hex value is not ok!");
    }
  }
}

// const hex = (r, g, b) => {
//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// };

// const rgb = (r, g, b) => {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// ==== MEMBUAT OBJECT DENGAN FACTORY FUNCTION ====
function convertColor(red, green, blue) {
  color = {
    r: red,
    g: green,
    b: blue
  };

  color.rgb = function () {
    const { r, g, b } = this;

    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return color;
}

// const c = convertColor(255, 255, 0)
// console.log(c.rgb())
// console.log(c.hex())

// ==== MEMBUAT OBJECT DENGAN CLASS ====
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;

  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

let color = new Color(1,2,3);
console.log(color.rgb());
console.log(color.hex());
console.log(color.rgba(0.2));

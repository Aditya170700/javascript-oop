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

// ==== MEMBUAT OBJECT DENGAN CONSTRUCTOR FUNCTION ====
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;

//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;

//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;

//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// let color = new Color(1,2,3);
// console.log(color.rgb());
// console.log(color.hex());
// console.log(color.rgba(0.2));

// ==== MEMBUAT OBJECT DENGAN CLASS ====
// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.h = 0;
//     this.s = 0;
//     this.l = 0;
//     this.name = name;
//     this.calcHSL();
//   }

//   formatRGB() {
//     const { r, g, b } = this;

//     return `${r}, ${g}, ${b}`;
//   }

//   formatHSL() {
//     const { h, s, l } = this;

//     return `${h}, ${s}%, ${l}%`;
//   }

//   colorName() {
//     return this.name;
//   }

//   rgb() {
//     return `rgb(${this.formatRGB()})`;
//   };

//   hex() {
//     const { r, g, b } = this;

//     return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
//   };

//   rgba(a = 1.0) {
//     return `rgba(${this.formatRGB()}, ${a})`;
//   };

//   hsl() {
//     return `hsl(${this.formatHSL()})`;
//   };

//   hsla(a = 1.0) {
//     return `hsla(${this.formatHSL()}, ${a})`;
//   };

//   hslFullSaturated() {
//     const { h, l } = this;

//     return `hsl(${h}, 100%, ${l}%)`;
//   };

//   hslOpposite() {
//     const { h, s, l } = this;
//     const newHue = (h + 180) % 360;

//     return `hsl(${newHue}, ${s}%, ${l}%)`;
//   };

//   calcHSL() {
//     let { r, g, b } = this;

//     // Make RGB fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;

//     if (delta == 0) h = 0;
//     else if (cmax == r)
//       // Red is max
//       h = ((g - b) / delta) % 6;
//     else if (cmax == g)
//       // Green is max
//       h = (b - r) / delta + 2;
//     else
//       // Blue is max
//       h = (r - g) / delta + 4;
    
//     h = Math.round(h * 60);

//     // Make negative hue positive behind 360
//     if (h < 0) h += 360;

//     // Calculate lightness
//     l = (cmax + cmin) / 2;

//     // Calculate saturation
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     // Multiply l and s by 100
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);

//     this.h = h;
//     this.s = s;
//     this.l = l;
//   }
// }

// let color = new Color(185, 243, 252, 'sky');
// console.log(color)
// console.log(color.colorName())
// console.log(color.rgb())
// console.log(color.hex())
// console.log(color.rgba(0.3))
// console.log(color.hsl())
// console.log(color.hsla(0.4))
// console.log(color.hslFullSaturated())
// console.log(color.hslOpposite())

// ==== OOP, EXTEND & FUNGSI SUPER ====
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, lives) { // child constructor dieksekusi dulu, baru eksekusi parent constructor
    super(name, age); // merubah nilai name, age di Pet
    this.lives = lives;
  }

  voiced() {
    return 'Meoung';
  }
  
  countLives() {
    return this.lives;
  }
}

class Dog extends Pet {
  voiced() {
    return 'Gukgukguk';
  }
}

const moci = new Cat('Moci', 1, 1);
console.log(moci.eat());
console.log(moci.voiced());
console.log(moci.countLives());

const dogi = new Dog('Dogi', 1);
console.log(dogi.eat());
console.log(dogi.voiced());

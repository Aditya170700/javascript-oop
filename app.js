// const hex = (r, g, b) => {
//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// };

// const rgb = (r, g, b) => {
//   return `rgb(${r}, ${g}, ${b})`;
// }

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

const c = convertColor(255, 255, 0)
console.log(c.rgb())
console.log(c.hex())

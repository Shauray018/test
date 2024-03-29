// map()
const ass = (input, fn) => {
  output = [];
  for (i = 0; i < input.length; i++) {
    output.push(fn(input[i]));
  }
  return output;
};

const sq2 = (b) => {
  return b ** 2;
};

a = [1, 2, 3, 4, 5];
let x = ass(a, sq2);
console.log(x);

function steamrollArray(arr) {
   return arr.reduce((x, y) => Array.isArray(y) ? x.concat(steamrollArray(y)) : x.concat(y), []);
};


steamrollArray([1, [2], [3, [[4]]]]);
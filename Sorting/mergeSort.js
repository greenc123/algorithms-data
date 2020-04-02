// https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php
// ***Two Sorted Arrays***

const merge = (left, right) => {
  const sorted = [];
  while (left && left.length > 0 && right && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.round(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const arr = [234, 526, 6, 3, 2, 5];
console.log(mergeSort(arr));

console.log(mergeSort([1, 3, 4], [3, 7, 9]))
console.log(mergeSort([10, 30, 44], [32, 79, 91]))
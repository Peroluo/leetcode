// 暴力法
function forFn(arr = []) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const newMax = (j - i) * Math.min(arr[i], arr[j]);
      max = newMax > max ? newMax : max;
    }
  }
  return max;
}

// 动态滑窗(最大高度法)
function animateDoor(arr = []) {
  let max = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let water = (right - left) * Math.min(arr[right], arr[left]);
    max = water > max ? water : max;
    if (arr[left] > arr[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
}

// const testArr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const testArr = [1, 4, 1, 10, 4];

console.log(forFn(testArr));

console.log(animateDoor(testArr));

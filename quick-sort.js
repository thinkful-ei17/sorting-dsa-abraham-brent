const testArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}
function altPartition(array, start, end) {
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  console.log(pivot);
  let i = start;
  let j = end;
  console.log('this is i and j', i, j);
  while (i < array[j] && j > array[i]) {
    if (array[i] > pivot && array[j] < pivot) {
      swap(array, i, j);
    }
    i++;
    j--;
    console.log(array);
  }
  // // loop over left half to middle
  // for (let i = 0; i < pivotIndex; i++){
  //   if (array[i] <= pivot) {
  //     swap(array,)
  //   }
  // }
  // // loop over right half towards middle
  // for(let j = array.length -1; j > pivotIndex; j--){
  // }
}

function quickSort(array, start = 0, end = array.length) {
  start = start;
  end = end;
  if (start >= end) {
    return array;
  }
  const middle = altPartition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

console.log(quickSort(testArr));

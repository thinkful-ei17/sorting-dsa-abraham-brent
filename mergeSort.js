

const mergeSort = (array) =>{
  // base case
  if (array.length <=1) {
    return array;
  }

  const middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle+1, array.length);
  console.log(`middle: ${middle}, left: ${left}, right: ${right}`);

  mergeSort(left);
  mergeSort(right);

  console.log(`left: ${left}, right: ${right}`);
  merge(left, right, array);
  return array;
};

const merge = (left, right, array) => {
  console.log('left is ', left);
  console.log('right is ', right);
  console.log('array is ', array);
  let i = 0; // left
  let j = 0; // right
  let k = 0; // array

  while (i < array.length && j < array.length) {
    // comparison
    if (left[i] < right[j]) {
      array[k++] = left[i++];
    } else {
      array[k++] = right[j++];
    }
  }
  console.log('Array from within merge is: ', array);
  return array;
};


const dataSet = [1, 9, 8, 7, 5, 15, 65, 98, 22, 75, 13];

console.log(mergeSort(dataSet));

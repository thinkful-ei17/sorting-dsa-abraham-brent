function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

/*
Consider a pivot
Consider i to keep track of left and j to keep track of right side
While i <= j
Keep moving i to right, until you find element > = pivot
Keep moving j to left until you find element < = pivot
When i & j stops, swap elements at i and j
When i > j, swap i with pivot
while (array[i] < pivot) { i++; } 
while (array[j] > pivot) { j--; }
while (i <= j)
*/
function altPartition(array, start, end) {
  const pivot = array[Math.floor(array.length / 2)];
  let i = start;
  let j = end;
  while (i <= j){
    while (array[i] < pivot) { 
      i++; 
    }
    while (array[j] > pivot) { 
      j--; 
    }
    swap(array, i, j);
  }
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



/*
An elegant algorithm
Different than Merge sort in that it operates in-place
Key element in Quicksort
Pivot: an element in the array that you select so you can compare every other element against it
Partitioning: divide and conquer approach, partition array in halves
​Consider an element in the array as the pivot
Rearrange the elements in the array such that
All elements less than pivot on the left side
All elements greater than pivot on the right side
*/

function qSort(array) {
// find the middle element
// 
}

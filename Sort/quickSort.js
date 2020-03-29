const quickSort = (array) => {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[0]

  const left = []
  const right = []

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i])
  }
  
  return quickSort(left).concat(pivot, quickSort(right))
}

const unsorted = [23, 45, 16, 3, 99, 22];
const sorted = quickSort(unsorted)

console.log('QuickSort', sorted)

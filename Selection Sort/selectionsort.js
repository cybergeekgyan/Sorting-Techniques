function selectionSort(arr){
  for(let i=0; i<arr.length; i++){
    let minIndex = i
    for(j=i; j<arr.length; j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  return arr
}

selectionSort([5,3,2,6,8,9]) // returns [2,3,5,6,8,9]

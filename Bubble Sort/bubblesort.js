function bubble_Sort(arr){
    for (i=0; i < arr.length; i++){
      let swap = true
        for (j=0; j < arr.length-i; j++){
            if (arr[j] > arr[j+1]){
              [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
              swap = false
            }
        }
      if(swap) break
    }
    return arr;
}

//  bubble_Sort([3,2,1,5,-1,4,0])  returns [-1,0,1,2,3,4,5]

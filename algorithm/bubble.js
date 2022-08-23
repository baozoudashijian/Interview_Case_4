const bubbleSort = (arr) => {
    const { length } = arr
    for(let r=0; r<length-1; r++) { // length-1就是最后一个不用排序
        for(let i=0; i<length-r-1; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    }
    return arr
}
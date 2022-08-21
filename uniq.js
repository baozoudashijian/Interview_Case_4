function uniq(arr) {
    let result = []
    for(let i=0; i<arr.length; i++) {
        if(result.indexOf(arr[i]) < 0) {
            result.push(arr[i])
        }
    }
    return result
}

function uniq2(arr) {
    let obj = {}
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]]) {
            continue
        }else{
            obj[arr[i]] = true
        }
    }
    return Object.keys(obj)
}

function uniq3(arr) {
    return [...new Set(arr)]
}

function uniq4(arr) {
    for(let r=0; r<arr.length; r++) {
        for(let i=r+1; i<arr.length; i++) {
            if(arr[r] === arr[i]) {
                arr.splice(i, 1)
            }
        }
    }
}
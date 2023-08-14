function countZeroes(arr) {
    let zeroArr = [];
    
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == 0){
            zeroArr.push(arr[i])
        }
    }

    return zeroArr.length
}

module.exports = countZeroes
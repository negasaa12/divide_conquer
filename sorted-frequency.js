function sortedFrequency(arr, num) {
    const firstIndex = findFirstIndex(arr, num);
    if (firstIndex === -1) {
        return -1; // Number not found
    }

    const lastIndex = findLastIndex(arr, num);
    return lastIndex - firstIndex + 1; // Count of occurrences
}

// Binary search to find the first index of the given number
function findFirstIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;
            right = mid - 1; // Search left half for earlier occurrences
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Binary search to find the last index of the given number
function findLastIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;
            left = mid + 1; // Search right half for later occurrences
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}



module.exports = sortedFrequency
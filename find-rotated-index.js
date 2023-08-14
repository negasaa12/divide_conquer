function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            return mid; // Found the element
        }

        // Check which side of the rotation the mid is on
        if (arr[left] <= arr[mid]) {
            // Left side is sorted
            if (arr[left] <= num && num < arr[mid]) {
                right = mid - 1; // Search left half
            } else {
                left = mid + 1; // Search right half
            }
        } else {
            // Right side is sorted
            if (arr[mid] < num && num <= arr[right]) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
    }

    return -1; // Element not found
}


module.exports = findRotatedIndex
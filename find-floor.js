function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= x) {
            floor = arr[mid]; // Update the floor
            left = mid + 1; // Search right half for larger floor
        } else {
            right = mid - 1; // Search left half
        }
    }

    return floor;
}

module.exports = findFloor
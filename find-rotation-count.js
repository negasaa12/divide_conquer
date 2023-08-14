function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            return left; // Array is not rotated or rotated 0 times
        }

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid + arr.length - 1) % arr.length;

        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid; // Rotation point found
        } else if (arr[mid] <= arr[right]) {
            right = mid - 1; // Search left half
        } else if (arr[mid] >= arr[left]) {
            left = mid + 1; // Search right half
        }
    }

    return -1; // No rotation found (not a rotated array)
}
module.exports = findRotationCount
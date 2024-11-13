// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4




function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Target would be in the right half
        } else {
            right = mid - 1; // Target would be in the left half
        }
    }
    
    // If we exit the loop, left is the index where target should be inserted
    return left;
}

// Example usage
const nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 5)); // Output: 2 (target found)
console.log(searchInsert(nums, 2)); // Output: 1 (target would be inserted here)
console.log(searchInsert(nums, 7)); // Output: 4 (target would be inserted at the end)
console.log(searchInsert(nums, 0)); // Output: 0 (target would be inserted at the beginning)


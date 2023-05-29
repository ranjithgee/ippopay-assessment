export default function minimumAbsoluteDifference(nums) {
    const n = nums.length / 2; // Length of each array
  
    let minDiff = Infinity; // Initialize minimum difference as infinity
  
    // Helper function to generate all partitions recursively
    function partition(nums, i, subset1, subset2) {
      if (i === nums.length) {
        // Base case: all elements have been assigned to subsets
        if (subset1.length === n && subset2.length === n) {
          const diff = Math.abs(sum(subset1) - sum(subset2)); // Calculate absolute difference
          minDiff = Math.min(minDiff, diff); // Update minimum difference
        }
      } else {
        // Recursive case: try adding the current element to each subset
        subset1.push(nums[i]);
        partition(nums, i + 1, subset1, subset2);
        subset1.pop();
  
        subset2.push(nums[i]);
        partition(nums, i + 1, subset1, subset2);
        subset2.pop();
      }
    }
  
    // Helper function to calculate the sum of an array
    function sum(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0);
    }
  
    partition(nums, 0, [], []); // Start the recursive partitioning
  
    return minDiff;
}
function strongPasswordChecker(password) {
  // Check password length
  let lengthSteps = Math.max(0, 6 - password.length) + Math.max(0, password.length - 20);

  // Check for lowercase, uppercase, and digit
  let lowercase = 1;
  let uppercase = 1;
  let digit = 1;
  for (let i = 0; i < password.length; i++) {
    let char = password.charAt(i);
    if (char.match(/[a-z]/)) {
      lowercase = 0;
    } else if (char.match(/[A-Z]/)) {
      uppercase = 0;
    } else if (char.match(/[0-9]/)) {
      digit = 0;
    }
  }

  let typeSteps = lowercase + uppercase + digit;

  // Check for repeating characters
  let repeatSteps = 0;
  let i = 2;
  while (i < password.length) {
    if (password.charAt(i) === password.charAt(i - 1) && password.charAt(i) === password.charAt(i - 2)) {
      repeatSteps++;
      i += 2;
    } else {
      i++;
    }
  }

  // Check if password is already strong
  if (password.length >= 6 && password.length <= 20 && typeSteps === 0 && repeatSteps === 0) {
    return 0;
  }

  return Math.max(lengthSteps, typeSteps, repeatSteps);
}

// Unit tests
console.log(strongPasswordChecker("a"));  // Output: 5
console.log(strongPasswordChecker("aA1"));  // Output: 3
console.log(strongPasswordChecker("1337C0d3"));  // Output: 0

function minimumAbsoluteDifference(nums) {
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
  
  // Test cases
  console.log(minimumAbsoluteDifference([3, 9, 7, 3])); // Output: 2
  console.log(minimumAbsoluteDifference([-36, 36])); // Output: 72
  console.log(minimumAbsoluteDifference([2, -1, 0, 4, -2, -9])); // Output: 0
  

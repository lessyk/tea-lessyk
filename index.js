// Define a helper function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Function to use the helper function
  function calculateFactorial(number) {
    return factorial(number);
  }
  
  // Test the calculateFactorial function
  const num = 5;
  console.log(`Factorial of ${num} is:`, calculateFactorial(num));
  
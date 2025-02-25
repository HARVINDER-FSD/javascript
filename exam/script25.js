function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  let num = parseInt(prompt("Enter your favorite number:"));
  console.log(isPrime(num) ? "It's a prime number!" : "It's not a prime number.");
  
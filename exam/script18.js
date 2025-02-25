function number(n) {
    n = 1
    if (n > 0) {
      return "Positive";
    } else if (n < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
   
  }
   console.log(number(5))
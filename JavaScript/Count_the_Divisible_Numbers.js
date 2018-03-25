//Write function divisibleCount(x, y, k) that takes in 3 numbers x, y and k, and returns the number of integers within the range [x..y] that are divisible by k i.e.: 
//{ i : x ≤ i ≤ y, i mod k = 0 }
//For example:
//x = 6, y = 11 and k = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
//Note: x<=y
//6kyu

function divisibleCount(x, y, k) {
    var xCha = x % k;
     if (xCha !== 0)
       x += (k - xCha);
     y -= y % k;
     if (x > y)
       return 0;
     else
       return (y - x) / k + 1;
   
 }
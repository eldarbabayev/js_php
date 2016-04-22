function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var sum = 0;
    for (var i = 0; i < A.length; i++) {
        sum = sum + A[i];
    }
    
    var sum2 = (A.length + 1) * (A.length + 2) / 2;
    
    return sum2 - sum;
}

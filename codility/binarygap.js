function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    var num = N;
    var count = 0;
    var max = 0;
    if (num % 2 === 0) {
        while (num %2 === 0) {
            num = num / 2;
        }
    }
    
    while (num !== 0) {
        
        if (num % 2 === 0) {
            
            count = count + 1;
        } else {
            if (count > max) {
                max = count;
            }
            count = 0;
        }
        
        num = Math.floor(num / 2);
    }
    return max;
}

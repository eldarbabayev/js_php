
function solution(A) {
    
    
    var first = A[0];
    var second = 0;
    
    for (var i = 1; i < A.length; i++) {
        second = second + A[i];
    }
        
    var min = Infinity;
    
    for (var j=1; j < A.length; j++) {
        if (Math.abs(second - first) < min) {
            min = Math.abs(second - first);
        }
        
        first = first + A[j];
        second = second - A[j];
        
    }
    
    return min;
    
}

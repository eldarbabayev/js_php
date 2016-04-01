// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($A) {
    // write your code in PHP5.5
    $begin = 0;
    $end = count($A)-1;
    $answer = 0;
    for ($i = 1; $i < count($A); $i++) {
        $m = $A[$begin];
        $n = $A[$end];
        if (abs($m) < abs($n)) {
            $end -= 1;
            $answer += 1;
        } else if (abs($m) == abs($n)) {
            $begin += 1;
        } else {
            $begin += 1;
            $answer += 1;
        }
    }
    
    return $answer + 1;
}

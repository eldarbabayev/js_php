// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($A) {
    // write your code in PHP5.5
    $begin = 0;
    $end = length($A);
    $answer = 0;
    for ($i = 1; $i < length($A)-1; $i++) {
    	if (abs($A[$begin]) < abs($A[$end])) {
	   $begin += 1;
	} else if (abs($A[$begin]) = abs($A[$end])) {
	  $answer += 1;
	  $begin += 1;
	} else {
	  $end -= 1;
	}
    }

    return $answer;
}

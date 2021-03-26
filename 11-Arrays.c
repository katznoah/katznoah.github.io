#include <stdio.h>

int main(void) {
    int x[2] = {5,8};
    printf("0: %d, 1: %d",x[0],x[1]);
    return 0;
}

/*
------------------------------------------------------
I'm getting tired sorry if this doesn't make complete 
    sense.
Try running this and seeing what happens.
What we have here is an array. An array is simply
    a group of values. This is an array of ints.
One way to create an array is with square brackets
    contianing a number, which indicates the size.
However, notice in the print statement that I use
    x[0] and x[1] to reference 5 and 8, not x[1] and 
    x[2].
This is because an array's index starts at 0, and
    ends at the size of the array minus 1.
So, an array of size 1 has an index 0, but no index 1.
Likewise, an array of size 256 has an index 0, 
    an index 255, but no index 256.
------------------------------------------------------
*/
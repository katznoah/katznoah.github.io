#include <stdio.h>

int main(void) {
    float f = 5.5;
    printf("f: %f",f);
    return 0;
}

/*
------------------------------------------------------
This is a float variable type.
It behaves similar to an integer in some ways, 
    but in some ways it does not.
What do you think is different about a float?
Run this code and come back.
What you'll notice is that 5.5 is printed out.
What you'll also notice is that in my printf statement
    I use %f instead of the %d I have been using to print
    ints.
A float variable is, unlike an int, able to represent
    values with a decimal.
Note how I haven't used any values with a decimal on them.
That's because an int simply can't do that.
A float is also printed using %f rather than %d.
The reason for %f should be obvious, and %d probably still
    doesn't make sense. Don't worry though, we'll get there!
------------------------------------------------------
*/
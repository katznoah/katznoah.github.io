#include <stdio.h>

int main(void) {
    int x;
    x = 5;
    x = x + 1;
    printf("x: %d",x);
    return 0;
}

/*
------------------------------------------------------
The above code shows how you can declare a variable without
    definining it
This is important because there may be some cases in which
    you want a variable to exist without a value at a certain
    point.
After I declare the variable with int x;, I go on to set the
    value of variable x equal to 5, and then increase the
    value of variable x by 1, using x = x + 1.
Operations like these are important to coding, so try
    messing around with it and making it print different things,
    which shouldn't be too hard.
------------------------------------------------------
*/
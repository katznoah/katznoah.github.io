#include <stdio.h>

int main(void) {
    int x = 15;
    int y = 12;
    printf("%d %d",x,y);
    return 0;
}

/*
------------------------------------------------------
What in god's name is going on up there?
Well, run the program and see what happens.
I'm sure by now you've realized that this
program prints the values of the variables x and y.
But how? Why?
Well, the short version is that %d means that an
int will take its place, and the ints following
the quotes will replace the %d, in order.
Later we'll go into further detail on why it is specifically %d.
But for now, just understand what goes on here between the quoted
area and the variables.
------------------------------------------------------
*/
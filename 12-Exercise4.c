#include <stdio.h>

int main(void) {
    x[0] = x + 1;
    printf("%d = 55", x[0]);
    return 0;
}

/*
------------------------------------------------------
Right now, trying to compile this code will give you
    an error. That's because variable x doesn't exist.
By ONLY adding one line, make the printed statement
    accurate.
------------------------------------------------------
*/
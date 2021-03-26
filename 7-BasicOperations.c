#include <stdio.h>

int main(void) {
    int x = 10;
    int y = 5;
    int a = x + y; // addition
    int b = x - y; // subtraction
    int c = x * y; // multiplication
    int d = x / y; // division
    printf("a: %d .. b: %d .. c: %d .. d: %d", a, b, c, d);
    return 0;
}

/*
------------------------------------------------------
There's a few things going on here. Most of it should
be review from the previous lessons.
However, you have some new operations here...
+ like before adds two numbers
- subtracts two numbers (big surprise)
* is actually the multiplication symbol
/ is the division symbol
Something you might not recognize here is the comments I've made
Using // signifies a single line comment, and the computer doesn't read it
Using /* signifies a multi-line comment, which is what I've been using...
A multi-line comment can exist anywhere in code... even between actual code.
Can you guess what a multi-line comment ends with?
------------------------------------------------------
*/
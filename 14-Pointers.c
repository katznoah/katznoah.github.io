#include <stdio.h>

int main(void) {
    int x = 5;
    int *xx = &x;
    printf("%d",xx);
    return 0;
}

/*
------------------------------------------------------
There's a whole lot going on here, and I think you can
    handle it, just read carefully.
Compiling this code will give you a warning, but not an error.
Therefore, running it is possible.
Don't worry about the warning it gives you just yet, you'll
    learn more about the issue it is bringing to your 
    attention later.
First of all, we have int *xx = &x
What this does is it creates a pointer to a variable.
This means that the variable xx contains the memory
    address of the variable x.
The correct way of doing this is an asterisk (*)
    before the new variable name, and an ampersand (&)
    before the target variable's name.
Every variable that exists has a memory address, which is
    something the computer handles when you run the program.
A memory address is a really big number which, since the
    computer handles it, you don't really need to know.
A pointer's benefits are that it allows you to reference
    a variable in a different way.
A reference to *xx would give you the value 5. A change
    to *xx would also change x. *xx can be read as
    "the variable pointed to by xx".
However, a reference to xx gives you the memory address
    of x, and a change to xx would NOT change x.
Try messing around with the pointers here and see what you can do
    using what I've explained to you. Don't worry if you get some
    errors, pointers aren't easy at first and they take a while to
    fully understand.
------------------------------------------------------
*/
#include <stdio.h>

int main(void) {
    int x = 5;
    printf("%d", x);
    return 0;
}

/*
------------------------------------------------------
This is more of just an information page, but don't skip
this, it's important.
You've been making programs so far using things like
#include <stdio.h>, int main(void), and return 0
but do you know what they mean?
Well, here's a brief overview.
#include <stdio.h>:
    This includes the stdio.h library.
    This is important because C is stupid.
    It can only do a couple of things on its own.
    It has some libraries of commands which you can import
        which will allow it to do more things.
    In this program, the printf command comes from
        the stdio.h library
    stdio specifically means standard input/output
int main(void):
    This is a function.
    This is important because C needs to know what to run
    Every command contained in the int main(void) function will run
    We will cover functions in excruciating detail in the future.
    Right now, just remember the term "function".
return 0:
    This returns a value to the function.
    What that means is when the function is used (known as called),
        the function will have the value of the value returned to it.
    Don't expect this to make any sense at all yet, just remember that
        returning is a thing specific to functions.
Also, take note that all the commands contained
    in the body of your main function end with a
    semicolon (;). This applies to all commands.
    Later, we will look at certain parts of your
    code which do not use semicolons at the end,
    but for now, just know that commands end with
    semicolons and functions do not.
------------------------------------------------------
*/
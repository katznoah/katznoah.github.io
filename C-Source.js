var one = `#include &#60;stdio.h&#62;

int main(void) {
    printf("Hello World");
    return 0;
}

/*
------------------------------------------------------
This is a simple C program.
You don't need to know what it means right now
This is just to teach you how to run your code.
In your terminal, run the following command:
    gcc 1-Intro.c
After doing this, you should see a new file "a.out"
This is an executable you've created by comiling this code.
To run this executable, run the following command:
    ./a.out
Take a look at what happens.
See if you can change the code above and repeat the 
terminal commands to change the output.
------------------------------------------------------
*/`;

var two = `#include &#60;stdio.h&#62;

int main(void) {
    printf("");
    return 0;
}

/*
------------------------------------------------------
You've now explored a little bit of output.
Using what you've learned, change the above code
to print out your name.
Then compile and run the code, just like you did
in the previous lesson.
------------------------------------------------------
*/`;

var three = `#include &#60;stdio.h&#62;

int main(void) {
    int x = 5;
    return 0;
}

/*
------------------------------------------------------
Don't worry, this program isn't supposed to give you any output.
This program just shows you how a variable can be made.
A variable is just a reference to a value.
There are different types of variables.
The variable I created here is an "int".
How does the computer know?
Well, at the most basic level, making a variable
has three parts.
In the first part, you tell the computer what kind
of variable you're creating.
In this case, you can see I've told the computer this
variable is an "int", which is just a number.
In the second part, I tell the computer that the variable's
name is "x".
In the third part, I tell the computer that the variable has
a value of 5.
We don't use this variable here, but you will use variables soon.
Variables are EXTREMELY important to programming in any language.
------------------------------------------------------
*/`;

var four = `#include &#60;stdio.h&#62;

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
*/`;

var five = `#include &#60;stdio.h&#62;

int main(void) {
    int x = 0;
    printf("I am %d years old!", x);
    return 0;
}

/*
------------------------------------------------------
Using what you've learned, make this program print
your age.
------------------------------------------------------
*/`;

var six = `#include &#60;stdio.h&#62;

int main(void) {
    int x = 5;
    int y = 7;
    int z = x + y;
    printf("%d + %d = %d",x,y,z);
    return 0;
}

/*
------------------------------------------------------
Before you run this code, guess what will be printed.
This shouldn't be too hard.
Then, try to make it print something else by only changing z.
------------------------------------------------------
*/`;

var seven = `#include &#60;stdio.h&#62;

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
*/`;

var eight = `#include &#60;stdio.h&#62;

int main(void) {
    int a = 5;
    int b = 4;
    int c = 2;
    int z = 0;
    printf("5 * 4 / 2 = %d", z);
}

/*
------------------------------------------------------
Using what you've learned in previous lessons,
    ONLY changing the value of z to equal a 
    mathematical expression, I want you to make the 
    output into a mathematically correct statement.
------------------------------------------------------
*/`;

var nine = `#include &#60;stdio.h&#62;

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
#include &#60;stdio.h&#62;, int main(void), and return 0
but do you know what they mean?
Well, here's a brief overview.
#include &#60;stdio.h&#62;:
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
*/`;

var ten = `#include &#60;stdio.h&#62;

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
*/`;

var eleven = `#include &#60;stdio.h&#62;

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
*/`;

var twelve = `#include &#60;stdio.h&#62;

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
*/`;

var thirteen = `#include &#60;stdio.h&#62;

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
*/`;

var fourteen = `#include &#60;stdio.h&#62;

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
*/`;

function getFile(num) {
    var strs = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, ""];
    document.getElementById("display").innerHTML = strs[num-1];
}
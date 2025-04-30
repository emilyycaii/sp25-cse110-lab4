1. Line 12 prints: 3

    The loop stops when the variable i reaches 3. Therefore, after the for loop ends, the variable i will exist holding the value 3. Since i is declared as a var, it is function-scoped, so i is accessible outside of the for loop. Therefore, "3" will be printed in the console log without an error.

2. Line 13 prints: 150

    The variable discountedPrice will hold it's last declared value in the final for loop iteration. It's last value was 150. Since discountedPrice is declared as a var, it is function-scoped, so discountedPrice is accessible outside of the for loop. Therefore, "150" will be printed in the console log without an error.

3. Line 14 prints: 150

    The variable finalPrice will hold it's last assigned value in the final for loop iteration. It's last value was 150. Since finalPrice is declared as a var, it is function-scoped, so finalPrice is accessible anywhere within the its declared function. Therefore, "150" will be printed in the console log without an error.

4. The function will return: [50, 100, 150]

    Line 16 returns the discounted array. The array holds the final discounted price of each item in the prices array. Since the discounted array is declared as a var, it is function-scoped, so it is accessible anywhere within the its declared function. Therefore "[50, 100, 150]" is returned without an error.

5. Line 12 causes an error because the variable i is declared as a let variable. A let variable is block-scoped, so the variable i can only be accessed in the for loop. Since Line 12 calls the variable i outside of it's declared for loop, an error is returned.
   
6. Line 13 causes an error because discountedPrice is declared as a let variable. A let variable is block-scoped, so the discountedPrice can only be accessed in the for loop. Since Line 13 calls discountedPrice outside of it's declared for loop, an error is returned.

7. Line 14 prints: 150

    The variable finalPrice will hold it's last assigned value in the final for loop iteration. It's last value was 150. Since finalPrice is declared as a let variable, it is block-scoped. The block it is declared in is the entire function, so finalPrice is accessible anywhere in the discountPrices function. Therefore, "150" will be printed in the console log without an error.

8. The function will return: [50, 100, 150]

    Line 16 returns the discounted array. The array holds the final discounted price of each item in the prices array. Since the discounted array is declared as a let variable, it is block-scoped.  The block it is declared in is the entire function, so the discounted array is accessible anywhere in the discountPrices function. Therefore "[50, 100, 150]" is returned without an error.

9. Line 11 will cause an error because the variable i is declared as a let variable. A let variable is block-scoped, so the variable i can only be accessed in the for loop. Since Line 11 calls the variable i outside of it's declared for loop, an error is returned.

10. Line 12 will return: 3

    The variable length holds the length of the prices array. Since length is declared as a const variable, it is block-scoped. The block it is declared in is the entire function, so length is accessible anywhere in the discountPrices function. Therefore, "3" will be printed in the console log without an error.

11. The function will return: [50, 100, 150]

    Line 14 returns the discounted array. The array holds the final discounted price of each item in the prices array. Since the discounted array is declared as a const variable, it is block-scoped.  The block it is declared in is the entire function, so the discounted array is accessible anywhere in the discountPrices function. Also, it is important to note that you cannot reassign a const variable. Line 8 does not causes an error because .push() modifies the discounted array without reassigning the variable itself, so no error occurs. Therefore "[50, 100, 150]" is returned without an error.

12. 
    A. student.name;

    B. student['Grad Year'];

    C. student.greeting();

    D. student['Favorite Teacher'].name;

    E. student.courseLoad[0];

13. 
    A. '3' + 2 = '32' because when an integer is added to a string, a string conversion occurs. Integers map to their exact string representation and the two strings are concatenated.

    B. '3' - 2 = 1 because when a string is subtracted by an integer, a numeric conversion occurs. If the string represents an integer, the string map to its exact integer representation and then an arithmetic operation is performed.
    
    C. 3 + null = 3 because when null is added to an integer, a numeric conversion occurs. Null maps to it's numeric representation of 0 and then an arithmetic operation is performed.

    D. '3' + null = '3null' because when null is added to a string, a string conversion occurs. null becomes 'null' and the two strings are concatenated.

    E. true + 3 = 4 because when an integer is added to a boolean, a numeric conversion occurs. Booleans map to their numeric value. True becomes 1 and an arithmetic operation is performed.
    
    F. false + null = 0 because when null is added to a boolean, two numeric numeric conversions occur. Null maps to its numeric representation of 0. Booleans map to their numeric value and in this case, false becomes 0. Then, an arithmetic operation is performed.

    G. '3' + undefined = '3undefined' because when undefined is added to a string, a string conversion occurs. undefined becomes 'undefined' and the two strings are concatenated.
    
    H. '3' - undefined = NaN because when a string is subtracted by undefined, two numeric conversions occur. If the string represents an integer, the string map to its exact integer representation. undefined becomes NaN because it cannot be converted to an integer. Then an arithmetic operation is performed.

14. 
    A. '2' > 1 is true because when a string is compared with an integer, a numeric conversion occurs. If the string represents an integer, the string map to its exact integer representation. Then a comparison operation is performed.

    B. '2' < '12' is false because when a string is compared with another string, a string comparison is performed. A string comparison compares characters one by one from left to right, based on their Unicode values. The '2' is first compared with the '1'. Since, '2' is considered greater than '1', the comparison returns false.

    C. 2 == '2' is true because when an integer is compared with a string, a numeric conversion occurs. If the string represents an integer, the string map to its exact integer representation. Then a comparison operation is performed. 

    D. 2 === '2' is false because === checks both type and value. Although they both represent the number two, one is an integer and the other is a string. The difference in types returns false.

    E. true == 2 is false because when a boolean is compared with an integer, a numeric comparison occurs. Booleans map to their numeric value. True becomes 1 and the comparison operation is performed.

    F. true === Boolean(2) is true because Boolean() converts the integer 2 to a boolean. Any non-zero integers converts to true, so the right side of the comparison becomes true. Then, a comparison operation is performed. true is compared with true. The === operator checks both type and value. Since both sides hold the same type and value, true is returned.

15. The == operator compares the values of two objects for equality. It also allows for type conversions. On the other hand, the === operator compares both the type and the value of two objects for equality. It does not perform type conversions.

17. The function will return: [2, 4, 6]

    Line 13 calls the modifyArray function with the arguments [1,2,3] and doSomething. The modifyArray function holds the argument names array and callback. The function first creates a new array called newArray. Then, it runs a for loop, iterating over the elements of array and performs the callback function on it and pushes the result into newArr. In this case, our callback function is doSomething, which multiplies each element by 2. Therefore, at the end of the for loop, newArr holds [2, 4, 6]. Finally, the function returns the newArr array, which is [2, 4, 6].

19. The output of the code:
    
    1

    4

    3

    2

    Line 2 executes immediately. In Line 3, the setTimeout() function is used which moves its code to the callback queue and schedules it to run in 1 second. In line 4, the setTimeout() function is used again which moves its code to the callback queue and schedules it to run in 0 milliseconds. The code in line 4 runs before the code in line 3 because the callback time is less. Line 5 executes immediately. Therefore, the line 2 code will run, then line 5 code, then line 4 code and finally line 3 code.


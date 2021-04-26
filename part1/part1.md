## Part 1a
1. 20
2. 20
3. 20
4. Error because line 13 is outside of the block the let variable is in, and let variables are only visible within their block.
5. Error, cant reassign the const variable
6. Error, line 13 is outside of the scope of the const variable

## Part 1b
1. Line 12 will print the last value of i which is prices.length - 1 because i is a "var" and therefore has a "function scope", so when i is used in the for loop it is actually usable within the entire function.
2. Line 13 will print the last value of discountedPrice used in the for loop because discountedPrice is a "var" and therefore has a function scope.
3. Line 14 will print the last value of finalPrice used in the for loop because finalPrice is a "var" and therefore has a function scope.
4. The function returns an array of discounted prices according to their original prices and the discount. The function also rouns any values after the hundredths place because nothing is smaller than the cent.
5. Error, line 12 is outside of the scope of the let variable i, which is used in the for loop.
6. Error, line 13 is outside of the scope of the let variable discountedPrice, which is used in the for loop.
7. Line 14 will print the last value of finalPrice because the finalPrice let variable is declared within the block of code that the for loop is inside of, and line 14 is also within the code block.
8. The function will work the same as before and return an array of discounted prices according to their original prices and the discount. This is because the return statement is in the same block, or in other words, within the scope of the let variable discounted.
9. Error because i is a let variable and line 11 is outside of its block.
10. Line 12 will print out the length of the array prices because line 12 is within the block/scope the const variable length is in.
11. The function will work the same as before and return an array of discounted prices according to their original prices and the discount. This is because although the discounted array is now a const variable, declaring a variable as const only means you can't reassign a value to the variable. If you assign const variable a to array x, you can still change the contents of x, you just can't assign a to array y.
12. 
    1.  a. student.name  
    2.  b. student['Grad Year']  
    3.  c. student.greeting()  
    4.  d. student['Favorite Teacher'].name  
    5.  e. student.courseLoad[0]  
13. 
    1.  a. 32 because integers map to their exact string representation, and you can't add an integer to a string so the integer is converted into a string and concatenated.  
    2.  b. 1 because you can't subtract an integer from a string, so the string converts into an integer.  
    3.  c. 3 because the integer value of null is 0.  
    4.  d. 3null because the string value of null is 'null', and '3' is a string so the plus sign is actually string concatenation.  
    5.  e. 4 because the integer value of true is 1. Also, you can't do arithmetic with a boolean so the boolean is converted to an integer.  
    6.  f. 0 because the integer value of false is 0, and the integer value of null is 0. Also, you can't do arithmetic with a boolean so the boolean is converted to an integer.  
    7.  g. 3undefined because the string value of undefined is 'undefined', and '3' is a string so the plus sign is actually string concatenation.  
    8.  h. NaN because undefined does not have an integer value, which it needs for the arithmetic.  
14. 
    1.  a. true because when comparing values of different types, Javascript converts the values to numbers.  
    2.  b. false because when comparing strings, Javascript uses lexicographical order and '2' is not less than '1'.  
    3.  c. true because == is a regular equality check and when comparing values of different types, Javascript converts the values to numbers.  
    4.  d. false because === is a strict equality check which checks equality without type conversion, and since 2 and '2' are of different types it immediately returns false.  
    5.  e. false because when comparing values of different types, Javascript converts the values to numbers, and true's value is 1, which is not equal to 2.  
    6.  f. true because Boolean(2) returns true because 2 is greater than 0, and true is equal to true.  
15. == is a regular equality check, so it considers equality after type conversion. === is a strict equality check, so it considers different variables of different types inequal, and if the variables are of the same type then it performs a normal equality check.
16.  The result will be that modifyArray([1,2,3], doSomething) will return the array [2,4,6]. This is because modifyArray creates a new array using the values of the original array after modifying them with the function 'callback', which in this case was our function doSomething which doubled the values. 
17.  1, 4, 3, 2
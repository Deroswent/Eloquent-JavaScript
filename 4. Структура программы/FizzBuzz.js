/*FizzBuzz
//Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.*/

for (var num=1; num<=100; num++)
    if (num % 3 ==0  && num % 5 !== 0)
        console.log("Fizz");
    else
    if (num % 5 ==0 && num % 3 !== 0)
        console.log("Buzz");
    else
    if(num % 3==0 && num % 5 == 0)
        console.log("FizzBuzz");
    else
        console.log(num);
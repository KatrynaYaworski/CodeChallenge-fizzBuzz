/*Write a program that counts from 1 to 50 in fizzbuzz fashion.

To do so, loop from 1 to 50 (inclusive). 
Each time through, if the number is evenly divisible by 3, say ‘fizz’. 
If the number is evenly divisible by 5, say ‘buzz’. 
If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. 
Otherwise, say the number.

For example:
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
17
fizz
19
buzz
*/

let number = 50
function fizzBuzz(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(number)

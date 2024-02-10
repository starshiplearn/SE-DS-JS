import {cpuTimeReport, memoryUsageReport} from '../_monitor/_benchmark.js';

/**
 * Solution 1
 * @param {number} num
 * @return {string}
 */
var intToRomanTable = function (num) {
    const all_thousands = ["", "M", "MM", "MMM"];
    const all_hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const all_tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const all_ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let thousands = Math.floor(num / 1000);
    let hundreds = Math.floor((num % 1000) / 100);
    let tens = Math.floor((num % 100) / 10);
    let ones = Math.floor(num % 10);

    return all_thousands[thousands] + all_hundreds[hundreds] + all_tens[tens] + all_ones[ones];
};

/**
 * Solution 2
 * @param {number} num
 * @return {string}
 */
var intToRomanMap = function (num){
    if (num < 0 || num > 3999){
        throw new Error('Input should be between 1 and 3999');
    }

    const roman_object = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC':90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let result = '';

    Object.entries(roman_object).forEach(([letter, n]) => {
        result += letter.repeat(Math.floor(num / n));

        num %= n;
    });

    return result;
}

console.log(intToRomanMap(1402));

cpuTimeReport(process.cpuUsage());

memoryUsageReport(process.memoryUsage());
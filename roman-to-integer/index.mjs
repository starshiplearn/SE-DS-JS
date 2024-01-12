import {cpuTimeReport, memoryUsageReport} from '../_monitor/_benchmark.js';

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {

    let roman_object = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let current_char_number = roman_object[s[i]];
        let next_char_number;

        if (s[i + 1] !== undefined) {
            next_char_number = roman_object[s[i + 1]];
        }

        if (next_char_number !== undefined && next_char_number > current_char_number) {
            answer -= current_char_number;
        } else {
            answer += current_char_number;
        }
    }

    return answer;
};

// MMXXIII = 2023
// MMXXIV = 2024
// MMXXIX = 2029
// CXL = 140

let result = romanToInt('MMXXIV');

console.log(result);

cpuTimeReport(process.cpuUsage());
memoryUsageReport(process.memoryUsage());
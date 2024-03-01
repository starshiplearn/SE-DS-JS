/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2);
    //let nums = [...nums1, ...nums2];

    nums.sort((second, first) => second - first);

    let array_size = nums.length;

    let median_index = Math.floor(array_size / 2);

    //shows array length is odd or even
    // & -> bitwise operator
    if(array_size & 1){
        return nums[median_index];
    }

    return ( nums[median_index - 1] + nums[median_index] ) / 2;
};

let nums1 = [3];
let nums2 = [1,2];

nums1 = [6,8];
nums2 = [2,4];


let result = findMedianSortedArrays(nums1, nums2);

console.log(result);




function decimal_to_32bit_binary_string(number)
{
    return (number).toString(2).padStart(32, "0");
}
let arr = [7, 1, 8, 5];
let target = 9;
let result = getTowSum(arr, target);
console.log(result);
function getTowSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(arr[i], i);
        }
    }
    return [];
}

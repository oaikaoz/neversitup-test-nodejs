/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (text) => {
    return [...new Set(text)].find(num => {
        let sum = text.filter(o => o === num).length
        if(sum %2 !== 0) return true
    }) ?? null;
}

module.exports = {
    findOddNumber
}
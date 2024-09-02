/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
    let textArray = text.split('')
    let result = [];
    for (let i = 0; i < textArray.length; i++) {
        let tempTextArray = JSON.parse(JSON.stringify(textArray));
        result.push(
            ..._insertAtAllPositions(tempTextArray.sort(), i),
            ..._insertAtAllPositions(tempTextArray.reverse(), i)
        )
    }
   return [...new Set(result)].sort()
}

/**
 * Insert character at all positions in array of strings
 *
 * @param {string[]} textArray - array of strings to manipulate
 * @param {number} position - position
 * @returns {string[]} - array of strings with the character inserted at all positions
 */
const _insertAtAllPositions = ((textArray, position) => {
    let tempTextArray = JSON.parse(JSON.stringify(textArray));
    const char = tempTextArray.splice(position, 1);
    let result = [];
    for (let j = 0; j <= tempTextArray.length; j++) {
        let temp = JSON.parse(JSON.stringify(tempTextArray));
        temp.splice(j, 0, char)
        result.push(temp.join(''))
    }
    return [...new Set(result)]
})

module.exports = {
    manipulate
}
/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (text) => {
    return text.filter((v)=>/^([:|;]{1})([-|~]{1})?([)|D]{1})$/g.test(v)).length
}

module.exports = {
    countSmilyFace
}
/**
 * 
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]) : number {
    return texts.filter((v)=>/^([:|;]{1})([-|~]{1})?([)|D]{1})$/g.test(v)).length
}
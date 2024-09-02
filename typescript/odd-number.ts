/**
 * 
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */
export function findOddNumber(numbers: number[]): number | null {
    return [...new Set(numbers)].find(num => {
        let sum = numbers.filter(o => o === num).length

        if (sum % 2 !== 0) return true
    }) ?? null;
}
export const copyMultidimensionalArray = arr => { 
    // a shroud of darkness is embracing my eternal soul
    return JSON.parse(JSON.stringify(arr));
}
export const arraySum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arraySum(num) : num * 1),
        0
    );
let j = 0
function cubeArray(list){
    for (let i = 0; i < list.length; i++){
        list[i] = list[i]**3;
        j += list[i];
    }
    return j;
}
const cubes = [1, 5, 9];
console.log(cubeArray(cubes))

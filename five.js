const array = [2, 7, 9, 1, 6, 1, 6, 3];
function isSpecial(list){
    for (let i = 0; i < list.length; i++){
        if (i%2 == 0 && list[i]%2 !== 0){
            return "Not Special";
        }
        if (i%2 !== 0 && list[i]%2 == 0){
            return "Not Special"
        }
    }
    return "Special"
}
console.log(isSpecial(array))

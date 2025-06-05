function stringFilter(list){
    const newArray=[]
    for (let i = 0; i < list.length; i++){
        if (typeof list[i] === "number"){
            newArray.push(list[i])
        }
    }
    return newArray
}
const testArray = [1, "a", "b", 0, 15]
console.log(stringFilter(testArray))

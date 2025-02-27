const input = prompt("Enter a list of comma-separated froyo flavors")
console.log(input);

let array = input.split(",");
console.log(array);

function countFlavors (array){
    const object = {}
    for (let i = 0; i < array.length; i++) {
        if (array[i] in object ) {
            object[array[i]]++;
        } else {
            object[array[i]] = 1;
        }
    }
    return object;
}

console.log(countFlavors(array));
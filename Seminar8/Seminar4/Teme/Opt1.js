function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}

const original = {
    name: "Marian",
    age: 21,
    hobbies:["gaming", "gym"],
    address: {
        city: "Bucuresti",
        zip: 12345
    }
}

const copy = deepClone(original)
copy.name = "Andrei"
copy.address.city = "Galati"

console.log("Original:", original)
console.log("Copia: ", copy)
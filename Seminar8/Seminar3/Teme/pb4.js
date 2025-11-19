function reduce(array, functie, valoareInitiala){
    let rezultat = valoareInitiala
    for(let i=0;i<array.length;i++){
        rezultat = functie(rezultat, array[i])
    }
    return rezultat
}

const numere = [1,2,3,4,5]

const suma = reduce(numere, function(a,b){
    return a+b
},0)

console.log(suma)
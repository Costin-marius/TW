function sumaDivizibile(numere, divizor){
    return numere 
    .filter(function(x){
        return x % divizor ===0
    })
    .reduce(function(a,b){
        return a+b
    },0)
}
console.log(sumaDivizibile([2,3,4,6,9,12],3));
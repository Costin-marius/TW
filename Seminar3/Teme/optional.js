function mediaNumere(arr){
    let suma = arr.reduce((a,b)=> a+b)
    return suma / arr.length
}
console.log("Media este:",mediaNumere([2,4,6,8]));

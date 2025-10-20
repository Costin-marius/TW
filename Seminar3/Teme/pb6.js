function sorteazaDupaCheie(array, cheie){
    return array.sort(function(a,b){
        if(a[cheie] < b[cheie]){
            return -1
        }else{
            return 1;
        }
    })
}
const persoane = [
    {nume:"Alin", varsta: 25},
    {nume:"Ion", varsta: 20},
    {nume:"Marian", varsta: 19},

]
console.log(sorteazaDupaCheie(persoane, "varsta"));
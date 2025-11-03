function cenzureaza(text, dictionar){
    let rezultat = text
    for(let i = 0;i<dictionar.length;i++){
        let cuvant = dictionar[i]
        if(rezultat.includes(cuvant)){
            rezultat=rezultat.replace(cuvant, cuvant[0] + "**" + cuvant[cuvant.length -1])
        }
    }
    return rezultat
}

console.log(cenzureaza("javascript este minunat", ["este"]))
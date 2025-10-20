const aniNastere=[2005,1999,2010,1980,2012]
const anulCurent=2025

const varsta = aniNastere.map(function(an){
    return anulCurent - an
})

const peste18 = varsta.filter(function(v){
    return v >=18
})

console.log(peste18)
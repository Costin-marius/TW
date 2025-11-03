function formatString(text, valori){
    for(let cheie in valori){
        text = text.replace("{" + cheie + "}", valori[cheie])
    }
    return text
}

console.log(formatString("un {substantiv} este {adjectiv}",{
    substantiv:"calut",
    adjectiv:"dragut"
}));
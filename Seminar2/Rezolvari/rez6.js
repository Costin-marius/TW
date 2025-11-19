const sampleString = 'the quick brown fox jumps over the lazy dog'

const getLetterCounts = (text) => {
    const result = {}
    for(let char of text){
        if(char==='')continue
        if(char in result) result[char]++
        else result[char] = 1
    }
    const lengthWithoutSpaces = text.replace(/ /g, '').length
    for(let char in result){
        result[char] /= lengthWithoutSpaces
    }

return result
};

console.log(getLetterCounts(sampleString));
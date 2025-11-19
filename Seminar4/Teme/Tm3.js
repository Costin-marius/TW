function powGen(){
    const cache = {}

    function pow(base,exp){
        const key = base + '^' + exp

        if(key in cache){
            console.log('gasit' + key)
            return cache[key]
        }

        if(exp===0){
            cache[key] = 1
        }else{
            console.log("calculat" + key)
            cache[key]  =base * pow(base, exp -1)
        }

        return cache[key]
    }

    return pow
}

const pow = powGen()
console.log(pow(2,3))
console.log(pow(2,5))
console.log(pow(2,3))

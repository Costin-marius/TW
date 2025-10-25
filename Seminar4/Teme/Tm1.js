class EvenNumbers{
    constructor(start){
        this.value=start
        if(this.value % 2 !== 0){
            this.value++
        }
    }

    next(){
        this.value = this.value +2
        return this.value
    }
}

const sirPar = new EvenNumbers(3)

for (let i = 0 ; i < 10;i++){
    console.log(sirPar.next())
}
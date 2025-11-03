Number.prototype.times = function (fn){
    for(let i = 0; i<this; i++){
        fn()
    }
};

(3).times(()=> {
    console.log("Salutare lume buna , bine v am gasit!!!!")
})
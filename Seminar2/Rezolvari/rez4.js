function mix(a, b){
    let r = []
    for(i in a) r.push(a[i],b[i])
        return r
};

console.log(mix(["a", "b","c"], [1, 2, 3]));
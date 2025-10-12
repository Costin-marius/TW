function diff(a,b){
    if(a.length != b.length) return -1;
    let d = 0;
    for(let i in a ) if (a[i] != b[i]) d++;
    return d;
};

console.log(diff('mama', 'maraa'));
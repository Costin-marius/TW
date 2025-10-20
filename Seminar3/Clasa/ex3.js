const formatString = (s, ...format)=>{
    let modified = s
    for(let i = 0;i<format.length;i++){
        if(modified.indexOf('{' + i + '}') !== -1){
            modified = modified.replace('{' + '}', format[i])
        }
    }

return modified
 }

console.log(formatString("this is a {0} string and we ve {1}",'nice','modified'));
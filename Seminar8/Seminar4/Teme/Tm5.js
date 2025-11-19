function increaseSalary(salaries, percent){
    if(!Array.isArray(salaries)){
        throw new Error("Primul parametru trebuie sa fie un array, amice!!!")
    }

    if(typeof percent !== "number"){
        throw new Error("Al doilea parametru trebuie sa fie un nr!!!")
    }

    const newSalaries = salaries.map(s=>s+s*(percent / 100))
    return newSalaries
}

try{
    console.log(increaseSalary([1000,2000,3000],10))
    console.log(increaseSalary("nu e array", 10))
}catch(err){
    console.log("Eroare: ", err.message)
}
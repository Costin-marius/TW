async function getPlanesOverRomania(){
    try{
        const response = await fetch("https://opensky-network.org/api/states/all")
        const data = await response.json()


        const planes = data.states.filter(plane=>{
            const lat = plane[6]
            const lon = plane[5]
            return lat > 43 && lat <49 &&lon >20 && lon<30
        })

        console.log("Avioanele deasupra Romaniei: ", planes)
    }catch(err){
        console.log("Eroare:",err.message)
    }
}

getPlanesOverRomania();
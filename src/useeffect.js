useEffect(() => {
    fetch()
    .then(response=>{
        if(response.ok){
            return response.json()
        }
    })
}, [])
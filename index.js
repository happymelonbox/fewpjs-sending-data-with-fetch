function submitData(name, email){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
    .then(function(response){
        return response.json()
    }).then(function(json){
        let p = document.createElement('p')
        document.body.appendChild(p)
        p.innerHTML = json.id
    }).catch(function(error){
        let p = document.createElement('p')
        document.body.appendChild(p)
        p.innerHTML = error.message
    })
}
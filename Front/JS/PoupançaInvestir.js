const value = document.getElementById("inputValue")
const jsInputButton = document.getElementById("inputButton")

const login = async function (url, method,body) {
    

    const req = await fetch(url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: method,
            body: JSON.stringify(body)
        })
        
    const result = await req.json();
    
    if (result.open)
        alert("Poupança criada com sucesso")
    else
        alert("Erro")
}

    const Pattern = async function(){
        const url = "https://localhost:7156/Saving/NewSaving"
        const method = "POST"
        const body = { value: value.value, ownerID: 1}
        
        await login(url,method,body)
    }

jsInputButton.addEventListener("click", () => Pattern())
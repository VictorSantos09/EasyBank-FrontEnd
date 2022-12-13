const amount = document.getElementById("inputValue")
const confirmed = document.getElementById("confirmed")
const userID = 1

const login = async function (url, method, body) {


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
        
    if (result.successful){
        document.location.href = "pixConfirm.html"
    }

    else
    alert(result.message)
}
const Pattern = async function () {
    const url = "https://localhost:7156/Saving/NewSaving"
    const method = "POST"
    const body = { value: amount.value, ownerID: userID }
    await login(url, method, body)
}

confirmed.addEventListener("click", () => Pattern())
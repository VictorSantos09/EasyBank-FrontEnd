const emailOrCpf = document.getElementById("cpf")
const password = document.getElementById("senha")
const button = document.getElementById("inputButton")

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

    if (result.successful)
        document.location.href = "menu.html"
    else
        alert("não logado!")
}
const Pattern = async function () {
    const url = "https://localhost:7156/Login/Login"
    const method = "POST"
    const body = { emailOrCPF: emailOrCpf.value, password: password.value }
    await login(url, method, body)
}

button.addEventListener("click", () => Pattern())
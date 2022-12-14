const userName = document.getElementById("nomeCompleto")
const userDateBorn = document.getElementById("dataNasc")
const userEmail = document.getElementById("Email")
const userPhone = document.getElementById("telefoneCelular")
const userCpf = document.getElementById("cpf")
const userRg = document.getElementById("RG")
const userMonthlyIncome = document.getElementById("renda")
const userPassword = document.getElementById("senha")
const userSafetyKey = document.getElementById("confirmletras")

const jsInputButton = document.getElementById("enviarBotao")

const userCep = document.getElementById("cep")
const userState = document.getElementById("estado")
const userCity = document.getElementById("cidade")
const userNeiborhood = document.getElementById("bairro")
const userStreet = document.getElementById("rua")
const userHouseNumber = document.getElementById("numero")
const userHouseComplement = document.getElementById("complemento")

const register = async function (url, method, body) {


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

    alert(result.message ? result.message : result.title)
}

const Pattern = async function () {
    const url = "https://localhost:7156/User/RegisterUser"
    const method = "POST"
    const body = {
        monthlyIncome: userMonthlyIncome.value,
        name: userName.value,
        email: userEmail.value,
        cpf: userCpf.value,
        rg: userRg.value,
        phoneNumber: userPhone.value,
        password: userPassword.value,
        safetyKey: userSafetyKey.value,
        dateBorn: userDateBorn.value,

        city: userCity.value,
        state: userState.value,
        neiborhood: userNeiborhood.value,
        street: userStreet.value,
        houseNumber: userHouseNumber.value,
        houseComplement: userHouseComplement.value
    }

    await register(url, method, body)
}

jsInputButton.addEventListener("click", () => Pattern())
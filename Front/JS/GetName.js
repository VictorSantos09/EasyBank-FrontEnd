const userID = 1
const hello = "OLÁ, "
const money = "R$ "

const login = async function () {

    const req = await fetch("https://localhost:7156/UserName/GetUserName",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ userID: userID })
        })

    const result = await req.json();

    if (result.successful) {
        document.getElementById("userName").innerHTML = hello.concat(result.name)
        document.getElementById("moneyInAccount").innerHTML = money.concat(result.moneyAvaible)
    }

    else
        document.getElementById("userName").innerHTML = "Bem Vindo"
}
login()
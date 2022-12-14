
const getDate = async function () {

    const req = await fetch("https://localhost:7156/UserName/GetDateNow",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify()
        })

    const result = await req.json();

    if (result.successful)
        document.getElementById("dateToday").innerHTML = result.today
    
}
getDate()
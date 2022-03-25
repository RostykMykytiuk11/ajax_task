const url = 'http://localhost:8080/';
const btn = document.querySelector(".fetch_button");
btn.addEventListener("click",getUserInfo(url))
function getUserInfo(url){
    fetch(url)
    .then(response => response.json())
    .then(function(json){
        for(let i=0;i<json.length;i++){
            const user = document.createElement("div")
            user.innerHTML = `<h1> User: ${json[i].id}</h1>
            <br>Name: ${json[i].first_name}<br>Lastname: ${json[i].last_name}
            <br>Email:${json[i].email}<br><img src="${json[i].photo}">`
            document.body.appendChild(user)    
        }
    })
}


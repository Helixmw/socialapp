
let container = document.querySelector('.container-1');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://reqres.in/api/users');
xhr.onload = () => {
    let data = JSON.parse(xhr.response);
    for(let i = 0; i <= data.data.length; i++){
        let id =  data.data[i].id;
        let box = document.createElement("div");
        box.className="box";
        box.addEventListener("click", () => {
            xhr.open('GET', 'https://reqres.in/api/users/' + id);
            xhr.onload = () => {
                let details = JSON.parse(xhr.response);
                document.querySelector('.modal').classList.add('visible');
                document.querySelector('.mainimg').src = details.data.avatar;
                document.querySelector('.fullname').innerHTML = details.data.first_name + " " + details.data.last_name;
                document.querySelector('.email').innerHTML = details.data.email;
                document.querySelector('.bttn').addEventListener("click", () => {
                document.querySelector('.modal').classList.remove('visible');
                });
            }
            xhr.send();
        });
        let img = document.createElement("img");
        img.className="profimg";
        img.src = data.data[i].avatar;
        let info = document.createElement("div");
        info.className = "info"
        let nme = document.createElement("div");
        nme.className = "name";
        nme.innerHTML = data.data[i].first_name + " " + data.data[i].last_name;
        let stat = document.createElement("div");
        stat.className = "status";
        if(data.data[i].id == 3 || data.data[i].id ==5){
            stat.style.color = "red";
            stat.innerHTML = "Inactive";
        }else{
            stat.innerHTML = "Active";
        }
        container.appendChild(box);
        box.appendChild(img);
        box.appendChild(info);
        info.appendChild(nme);
        info.appendChild(stat); 
           
        }
}
xhr.send();

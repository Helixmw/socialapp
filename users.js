export class Users{
    
    constructor(middle){
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://reqres.in/api/users');
        xhr.onload = () => {
            let pple = JSON.parse(xhr.response).data;
            for(let i = 0; i <= pple.length; i++){
                let data = {
                    id: pple[i].id,
                    fname: pple[i].first_name,
                    lname: pple[i].last_name,
                    email: pple[i].email,
                    image: pple[i].avatar,
                };
                this.createList(middle,data);
            }  
        }
        xhr.send();
    }

    createList(middle,data){
        let user = document.createElement("div");
        let img = document.createElement("div");
        let testimg = document.createElement("img");
        let tagname = document.createElement("div");
        let left = document.createElement("div");
        let right = document.createElement("div");
        let name = document.createElement("div");
        let active = document.createElement("div");
        let follow = document.createElement("div");
        let remove = document.createElement("div");
        user.className = "user";
        img.className = "img";
        testimg.className = "testimg";
        testimg.src = data.image;
        tagname.className ="tagname";
        left.className = "left";
        right.className = "right";
        name.className = "name";
        name.innerHTML = data.fname + " " + data.lname;
        follow.className="follow";
        follow.innerHTML="Follow";
        remove.className="remove";
        remove.innerHTML="Remove";
        active.innerHTML="Active";
        if((data.id == 3) || (data.id == 6)){
            active.className = "inactive";
            active.innerHTML ="Offline";
        }else{
            active.className = "active";
            active.innerHTML ="Online";
        }
        follow.className = "follow";
        remove.className = "remove";
        left.appendChild(name);
        left.appendChild(active);
        right.appendChild(follow);
        right.appendChild(remove);
        tagname.appendChild(left);
        tagname.appendChild(right);
        img.appendChild(testimg);
        user.appendChild(img);
        user.appendChild(tagname);
        middle.appendChild(user);
    }

    unfollow(modal){
        modal.classList.remove('inv');
    }

    clickNo(modal){
        modal.classList.add('inv');
    }

    clickYes(modal){
        modal.classList.add('inv');
    }
}

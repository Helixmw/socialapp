export class Users{
    constructor(middle,modal,yes,no,add){
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
                    follow:0
                };
                this.createList(middle,data,modal,yes,no);
            }  
        }
        xhr.send();
       
    }

    addNewUser(img,thename,middle,modal,field){
        
        let user = document.createElement("div");
        let imge = document.createElement("div");
        let testimg = document.createElement("img");
        let tagname = document.createElement("div");
        let name = document.createElement("div");
        let left = document.createElement("div");
        let right = document.createElement("div");
        let active = document.createElement("div");
        let follow = document.createElement("div");
        let remove = document.createElement("div");
        user.className = "user";
        imge.className = "img";
        testimg.className = "testimg";
        testimg.src = img;
        tagname.className ="tagname";
        left.className = "left";
        right.className = "right";
        name.className = "listname";
        name.innerHTML = thename;
        follow.className="follow";
        follow.innerHTML="Follow";
        remove.className="remove";
        remove.innerHTML="Remove";
        active.innerHTML="Active";
        active.className = "active";
        follow.className = "follow";
        remove.className = "remove";
        left.appendChild(name);
        left.appendChild(active);
        right.appendChild(follow);
        right.appendChild(remove);
        tagname.appendChild(left);
        tagname.appendChild(right);
        imge.appendChild(testimg);
        user.appendChild(imge);
        user.appendChild(tagname);
        middle.insertBefore(user,middle.firstChild);
        modal.classList.add('inv');
        modal.classList.add('inv');
        follow.addEventListener('click',() => {
            data.follow = this.follows(modal,thename,'',thename + '@email.com',img,0,follow,yes,no);
         });

    }

    uploadUser(modal,prompt){
        modal.classList.remove('inv');
        prompt.classList.add('inv');
    }

    createList(middle,data,modal,yes,no){
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
        name.className = "listname";
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
       
        follow.addEventListener('click',() => {
           data.follow = this.follows(modal,data.fname,data.lname,data.email,data.image,data.follow,follow,yes,no);
        });
    }
    follows(modal,fn,ln,email,image,fol_stat,follow,yes,no){
        if(fol_stat == 0){
            fol_stat = 1;
            follow.innerHTML="Following";
            modal.classList.add('inv');
        }else if(fol_stat == 1){
            modal.classList.remove('inv');
            let img = document.querySelector('.mod');
            img.src = image;
            let ques = document.querySelector('.ques');
            ques.innerHTML = "Do you want to unfollow " + fn + "?";
            yes.addEventListener('click', () => {
                fol_stat = 0;
                follow.innerHTML="Follow";
                modal.classList.add('inv');
            });
            no.addEventListener('click', () => {
                modal.classList.add('inv');
            });
        }
        return fol_stat;    
    }

}

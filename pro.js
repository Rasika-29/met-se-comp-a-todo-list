let create=document.querySelector("#create-account");
let add1=document.querySelector(".add");
let save=document.querySelector("#save");
let cancel=document.querySelector("#cancel");

let fullname=document.querySelector("#fullname")
let email=document.querySelector("#email")
let mobile=document.querySelector("#mobile")


let Username =document.querySelector("#Username");
let Password =document.querySelector("#Password");
let signin=document.querySelector(".signin");

let login=localStorage.getItem("login");
if(login!=null){
    window.location.replace("pro.html")
};

create.addEventListener("click",()=>{
    add1.classList.remove("d-none")
})

cancel.addEventListener("click",()=>{
    add1.classList.add("d-none")
})

save.addEventListener("click",()=>{
    let newUser={
    fullname: fullname.value,
    email: email.value,
    mobile: mobile.value,
    
    };
    let userList=localStorage.getItem("users");

    userList= userList===null ? [] : JSON.parse(userList);

    let isUserExist=userList.find((value) => {
        return value.email === newUser.email;
    });
    
    if(isUserExist === undefined){
        //alert("Given email already registered, try another one");
       userList.push(newUser);
        localStorage.setItem("users", JSON.stringify(userList));
        alert("Registration successful, you can login now");
        add1.classList.add("d-none");
    }else{
        alert("Saved successfully");
        /*userList.push(newUser);
        localStorage.setItem("users", JSON.stringify(userList));
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
          //alert("Registration successful, you can login now");
        add1.classList.add("d-none");*/
    }

/*
let create1=document.querySelector("#create-account");
let add11=document.querySelector(".add");
let save1=document.querySelector("#save");
let cancel1=document.querySelector("#cancel");
let fullname1=document.querySelector(".fullname")
let email1=document.querySelector(".email")
let mobile1=document.querySelector(".mobile")
let password1=document.querySelector(".password")
create1.addEventListener("click",()=>{
    add1.classList.remove("d-none")*
save1.addEventListener("click",()=>{
    add1.classList.add("d-none")
})
});*/
});


signin.addEventListener("click",()=>{
    let username=  Username.value;
    let password= Password.value;

    let userList= localStorage.getItem("users");

    userList=userList===null ? [] : JSON.parse(userList);

    let isUserExist = userList.findIndex((value) =>{
        return value.email=== username && value.password===password;
    })
//});
/*
let login=localStorage.getItem("login");
if(login!=null){
    window.location.replace("page1.html")
}*/
if(isUserExist===-1){
    alert("USER NOT FOUND,PLEASE TRY AGAIN")  
    /*alert("LOGIN SUCCESSFULLY");
    localStorage.setItem("login",isUserExist);
    window.location.replace("page1.html")*/
}
else{
    alert("LOGIN SUCCESSFULLY");
    localStorage.setItem("login",isUserExist);
    window.location.replace("page1.html")
    //alert("USER NOT FOUND,PLEASE TRY AGAIN")
}


});
var list = document.getElementById("list")
var list2 = document.getElementById("list2")
var message =document.getElementById("message")
var typing =document.getElementById("typing")
function sendMesage(){
    if(event.keyCode === 13){
        var elem = event.target
        list.innerHTML +=`<li class="left">${elem.value}</li>`
        typing.style.display = "block";

        if(["hi","bye","hye","oye"].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Mai aap ki kya help kr sakta hoo.</li>`
                typing.style.display = "none";
            },2000)
        }
        else if(["Mujhe SMIT Mai Admission Chahye"].indexOf(elem.value) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">knsa Course Krna hai</li>`
               
                typing.style.display = "none";
            },2000)
        }
        else if(["Mujhe MWA Ka Course Krna Hai"].indexOf(elem.value) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Apna Name Btaye</li>`
                typing.style.display = "none";
            },2000)
        }
        else if(["Shahbaz Ahmed"].indexOf(elem.value) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Apny Father Ka Name Btayye</li>`
                typing.style.display = "none";
            },2000)
        }
        else if(["Niaz Ahmed"].indexOf(elem.value) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">App ko Enroll Krlyegaya hai..</li>`
                typing.style.display = "none";
            },2000)
        }
        else{
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Sorry!Mai Nahi Samjha</li>`
                typing.style.display = "none";
            },2000)

        }
        elem.value=""
    }
    
    

}
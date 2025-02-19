const body=document.querySelector("body");
const boxes=document.querySelectorAll(".box");


boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        const color=e.target.id;
        if(color=="gray"){
            body.style.backgroundColor=color;
        }
        if(color=="white"){
            body.style.backgroundColor=color;
        }
        if(color=="pink"){
            body.style.backgroundColor=color;
        }
        if(color=="yellow"){
            body.style.backgroundColor=color;
        }
    })
})


const form = document.querySelector(".container");

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const result=document.querySelector(".result");

    const h=parseInt(document.querySelector("#height").value);
    const w=parseInt(document.querySelector("#weight").value);

    if(h==="" || h<0 || isNaN(h)){
        result.innerHTML="Please enter the valid Height"
    }
    else if(w==="" || w<0 || isNaN(w)){
        result.innerHTML="Please enter the valid Weight"
    }

    else{
        const bmi= (w/((h*h)/10000)).toFixed(2);
        result.innerHTML=`<span> Your BMI is ${bmi}</span>`
    }

})

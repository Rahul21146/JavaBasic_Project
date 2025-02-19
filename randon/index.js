let url="http://api.quotable.io/random"
        const quotes=document.querySelector(".quotes");
        const CreatedDate=document.querySelector(".CreatedDate");
        const Auther=document.querySelector(".Auther");
        const modifiedDare=document.querySelector(".modifiedDare");
        const btn=document.querySelector(".btn");



 async function fetchRandomData(url){
    try{
        let data=await fetch(url);
        let output=await data.json();
        console.log(output); 
        quotes.innerHTML=output.content
        Auther.innerHTML=`By ${output.authorSlug}`
        modifiedDare.innerHTML=`Quotes Added on ${output.dateModified}`;
        CreatedDate.innerHTML=`Quotes Modified on ${output.dateAdded}`;

    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}
fetchRandomData(url)

btn.addEventListener('click',()=> fetchRandomData(url) );



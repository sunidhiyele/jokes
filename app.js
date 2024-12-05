let url="https://icanhazdadjoke.com";
let btn=document.querySelector("button");
async function getjokes() 
{
    try{
    const config={headers:{Accept:"application/json"}};
    let jokes=await axios.get(url,config);
    return(jokes.data.joke);
    }
    catch(err)
    {
        console.log("Error-",err);
    }
    
}

btn.addEventListener("click",async()=>{
      let div=document.querySelector(".joke");
      let res=await getjokes();
       div.innerText=res;
})

const load=document.getElementById("load")

const loadData=()=>{
    const url="https://meme-api.com/gimme/18";
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.memes))
}

const displayData=(data)=>{
    data.forEach(element => {
        console.log(element)
        const {author,title,url}=element;
        const ele=document.createElement("div");
        ele.classList.add("card");
        ele.classList.add("bg-base-100");
        ele.classList.add("shadow-xl")
        ele.innerHTML=`
        <figure><img src="${url}" alt="Shoes" /></figure>
        <div class="card-body">
        <h5>${title}</h5>
          <p>${author}</p>
        </div>
        
        `;

        load.appendChild(ele)
    });
}


loadData()

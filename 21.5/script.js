let txt = document.querySelector(".text");
let btn = document.querySelector(".btn");
let container = document.querySelector(".images");

txt.addEventListener('keyup', (event)=>{
    btn.addEventListener('click',(event)=>{
        if (isNaN(txt.value))
        alert("not a number!");
     })

     btn.addEventListener('click',(event)=>{
        if (!isNaN(txt.value))
        for(let i=0; i<txt.value; i++){
            const img=document.createElement('img');
            img.src="/21.5/kisspng-emoji-hug-emoticon-emoji-face-png-transparent-image-5a7540b9a44d72.682378801517633721673.png";
            img.style.width="100px";
            container.appendChild(img);
        }
        txt.value=" ";
     })

})
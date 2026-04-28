const bar= document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

function expandText(blogdetails) {
    document.querySelector('.shortText' + blogdetails).style.display = 'none';
    document.querySelector('.fullText' +blogdetails).style.display = 'block';
}

if(bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active'); 
    })
}

if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}
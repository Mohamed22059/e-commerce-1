let shopB = document.querySelector('.shop')
let closeA = document.querySelector('.close')
let rightNav = document.querySelector('.right-nav')

let home = document.querySelector('.home')
let listt = document.querySelector('.listt')
let markClose = document.querySelector('.mark-close')

let upScroll = document.querySelector('.up-scroll')

shopB.onclick= function(){
    rightNav.classList.toggle('open-e')
}
closeA.onclick= function(){
    rightNav.classList.remove('open-e')
}


listt.onclick = function(){

home.classList.add('click-open')
}

markClose.onclick = function(){

    home.classList.remove('click-open')
}


window.onscroll = function(){

    if(window.scrollY > 400){
        upScroll.style.display = 'flex'
        
    }else{
        
        upScroll.style.display = 'none'
    }
}

upScroll.addEventListener('click', function(){

    window.scrollTo({
        top: 0,
        behavior:'smooth'

    })
})
const $ = document

const button = $.querySelector('button')
const input = $.querySelector('input')
const img = $.querySelector('img')
const divImg = $.querySelector('.img')

let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 

button.addEventListener("click",function(){
    url+=input.value
    img.src = url
    divImg.classList.remove("hiddn")
    input.value = ''
    url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
})
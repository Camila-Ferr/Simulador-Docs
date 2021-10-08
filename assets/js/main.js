function active(new_id){
    id1 = document.getElementById("id1")
    id2 = document.getElementById("id2")
    id3 = document.getElementById("id3")
    id4 = document.getElementById("id4")
    id5 = document.getElementById("id5")
    id6 = document.getElementById("id6")


    id1.classList.remove('active')
    id2.classList.remove('active')
    id3.classList.remove('active')
    id4.classList.remove('active')
    id5.classList.remove('active')
    id6.classList.remove('active')
    new_id.classList.add('active')
    
}
function menuA(){
    
    menu = document.getElementById("menu")
    redes = document.getElementById("redes")
    
    menu.classList.toggle('collapse')
    redes.classList.toggle('none')
}
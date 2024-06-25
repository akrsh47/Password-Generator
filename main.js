const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T"
,"U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k"
,"l","m","n","o","p","q","r","s","t"
,"u","v","w","x","y","z", "0", "1",
 "2", "3", "4", "5", "6", "7", "8", "9",
 "@","#","$","&"];







let size = 8
let inp_doc=document.querySelector("#inp")
inp_doc.value=size

function incr(){
 
size+=1
   if (size >12){
    size=8
}
inp_doc.value = size

}

function decr(){
    
    size-=1
    if (size<8){
        size=8
    }
    inp_doc.value=size
    
    
}

let password1 = ""
let pass_rand1 = Math.floor(Math.random()*characters.length)

let password2 = ""
let pass_rand2 = Math.floor(Math.random()*characters.length)


let p1_doc = document.querySelector("#p1")
let p2_doc = document.querySelector("#p2")


function generate(){

// first password
for (let i=0;i<size;i++){

    password1+=characters[pass_rand1]
    pass_rand1 = Math.floor(Math.random()*characters.length)
}


// second password
for(let j=0;j<size;j++){
    password2+=characters[pass_rand2]
    pass_rand2 = Math.floor(Math.random()*characters.length)
}

p1_doc.textContent = password1
p2_doc.textContent = password2

password1=""
password2=""

}



 

    







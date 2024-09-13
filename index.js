const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const spl_chr = ["@", "#", "$", "&"];

const inpnum_doc = document.getElementById("num");
const inpspl_doc = document.getElementById("spl");



let size = 8;
let inp_doc = document.querySelector("#inp");
inp_doc.value = size;

let rand_choice = Math.floor(Math.random() * 3);
let rand_choice2 = Math.floor(Math.random() * 3);
//console.log(rand_choice)

function incr() {
  size += 1;
  if (size > 12) {
    size = 8;
  }
  inp_doc.value = size;
}

function decr() {
  size -= 1;
  if (size < 8) {
    size = 8;
    alert("minimum size of password 8");
  }
  inp_doc.value = size;
}

let password1 = "";
let pass_rand1 = Math.floor(Math.random() * characters.length);

let password2 = "";
let pass_rand2 = Math.floor(Math.random() * characters.length);

const  p1_doc = document.querySelector("#p1");
const  p2_doc = document.querySelector("#p2");

function generate() {

  // first password

  for (let i = 0; i < size; i++) {
    if (inpnum_doc.checked && inpspl_doc.checked == false) {
      rand_choice = Math.floor(Math.random() * 5);

      if (rand_choice == 1) {
        pass_rand1 = Math.floor(Math.random() * numbers.length);
        password1 += numbers[pass_rand1];
      } else {
        pass_rand1 = Math.floor(Math.random() * characters.length);
        password1 += characters[pass_rand1];
      }
    } else if (inpspl_doc.checked && inpnum_doc.checked == false) {
      rand_choice = Math.floor(Math.random() * 5);

      if (rand_choice == 1) {
        pass_rand1 = Math.floor(Math.random() * spl_chr.length);
        password1 += spl_chr[pass_rand1];
      } else {
        pass_rand1 = Math.floor(Math.random() * characters.length);
        password1 += characters[pass_rand1];
      }
    } else if (inpnum_doc.checked == false && inpspl_doc.checked == false) {
      pass_rand1 = Math.floor(Math.random() * characters.length);
      password1 += characters[pass_rand1];
    } else if (inpnum_doc.checked && inpspl_doc.checked) {
      rand_choice = Math.floor(Math.random() * 5);

      if (rand_choice == 0) {
        pass_rand1 = Math.floor(Math.random() * spl_chr.length);
        password1 += spl_chr[pass_rand1];
      } else if (rand_choice == 1) {
        pass_rand1 = Math.floor(Math.random() * numbers.length);
        password1 += numbers[pass_rand1];
      } else {
        pass_rand1 = Math.floor(Math.random() * characters.length);
        password1 += characters[pass_rand1];
      }
    }
  }

  // second password

  for (let i = 0; i < size; i++) {
    if (inpnum_doc.checked && inpspl_doc.checked == false) {
      rand_choice2 = Math.floor(Math.random() * 5);

      if (rand_choice2 == 1) {
        pass_rand2 = Math.floor(Math.random() * numbers.length);
        password2 += numbers[pass_rand2];
      } else {
        pass_rand2 = Math.floor(Math.random() * characters.length);
        password2 += characters[pass_rand2];
      }
    } else if (inpspl_doc.checked && inpnum_doc.checked == false) {
      rand_choice2 = Math.floor(Math.random() * 5);

      if (rand_choice2 == 1) {
        pass_rand2 = Math.floor(Math.random() * spl_chr.length);
        password2 += spl_chr[pass_rand2];
      } else {
        pass_rand2 = Math.floor(Math.random() * characters.length);
        password2 += characters[pass_rand2];
      }
    } else if (inpnum_doc.checked == false && inpspl_doc.checked == false) {
      pass_rand2 = Math.floor(Math.random() * characters.length);
      password2 += characters[pass_rand2];
    } else if (inpnum_doc.checked && inpspl_doc.checked) {
      rand_choice2 = Math.floor(Math.random() * 5);

      if (rand_choice2 == 0) {
        pass_rand2 = Math.floor(Math.random() * spl_chr.length);
        password2 += spl_chr[pass_rand2];
      } else if (rand_choice2 == 1) {
        pass_rand2 = Math.floor(Math.random() * numbers.length);
        password2 += numbers[pass_rand2];
      } else {
        pass_rand2 = Math.floor(Math.random() * characters.length);
        password2 += characters[pass_rand2];
      }
    }
  }


  function clickToCopy(x){
    navigator.clipboard.writeText(x);
  }

  p1_doc.addEventListener("click",function(){
    clickToCopy(p1_doc.textContent);
    
  })

  p2_doc.addEventListener("click",function(){
    clickToCopy(p2_doc.textContent);
  })

  p1_doc.textContent = password1;
  p2_doc.textContent = password2;

  password1 = "";
  password2 = "";
}

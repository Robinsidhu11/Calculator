let display_field=document.getElementsByClassName("displayresultfield")[0]
let myname=document.getElementsByTagName("p")[0]
myname.textContent=""
let oldvalue=""
let acbutton=document.getElementById("AC")
let delbutton=document.getElementById("DEL")
let percentage_button=document.getElementById("%")
let divide_button=document.getElementById("/")
let seven_button=document.getElementById("7")
let eight_button=document.getElementById("8")
let nine_button=document.getElementById("9")
let multiply_button=document.getElementById("*")
let four_button=document.getElementById("4")
let five_button=document.getElementById("5")
let six_button=document.getElementById("6")
let minus_button=document.getElementById("-")
let one_button=document.getElementById("1")
let two_button=document.getElementById("2")
let three_button=document.getElementById("3")
let add_button=document.getElementById("+")
let zerozero_button=document.getElementById("00")
let zero_button=document.getElementById("0")
let dot_button=document.getElementById(".")
let equal_button=document.getElementById("=")

let i = 0;
let txt = 'By Robin';
setTimeout(()=>{
    typeWriter()
},1500)

function typeWriter() {
  if (i < txt.length) {
    myname.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 500);
  }
}
setInterval(()=>{
    myname.innerHTML=""
    i=0
    typeWriter()
},9000)
acbutton.addEventListener('click',()=>{
    display_field.textContent=""
    oldvalue=""
})

delbutton.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    let ans=""
    for(let i=0;i<(display_field.textContent).length-1;i++){
        ans=ans+display_field.textContent[i]
    }
    display_field.textContent=ans
})

percentage_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"%"
})

divide_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"/"
})

seven_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"7"
})

eight_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"8"
})

nine_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"9"
})

multiply_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"*"
})

four_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"4"
})

five_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"5"
})

six_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"6"
})

minus_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"-"
})

one_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"1"
})

two_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"2"
})

three_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"3"
})

add_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"+"
})

zerozero_button.addEventListener('click',()=>{
    
    display_field.textContent=oldvalue
})

zero_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"0"
})

dot_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    display_field.textContent=display_field.textContent+"."
})

equal_button.addEventListener('click',()=>{
    oldvalue=display_field.textContent
    try{display_field.textContent=eval(display_field.textContent)}
    catch(error){
        display_field.textContent="Invalid Input"
        setTimeout(()=>{
            display_field.textContent=""
        },500)
    }
})
let rollDiceinput=document.querySelector("#roll-Dice")
let rollButton=document.querySelector("#roll-button")
let ShowAllRolls=document.querySelector("#show-all-rolls")
let rollResults=document.querySelector("#Results")
let total=document.querySelector("#total")
let allRolls=[]

rollButton.addEventListener("click",function(){
    console.log(rollButton)
    let maxRolls=Number(rollDiceinput.value)
    console.log(rollDiceinput)
    let totaldice=0
    let count=0
    while(count<maxRolls){
  let  RandomNumber = Math.floor(Math.random()*6)+1
          allRolls.push(RandomNumber)
          totaldice+=RandomNumber
          total.innerHTML=totaldice 
        count++;}
    
})
    
    ShowAllRolls.addEventListener("click",function(){
    let count=0;
      while(count < allRolls.length){
        
        rollResults.innerHTML += "<li>"+ allRolls[count] +"</li>"
       
    count++;}})
    

    
    
    
     
             
     
       

    
  
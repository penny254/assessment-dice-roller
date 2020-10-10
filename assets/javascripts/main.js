let rollDiceinput=document.querySelector("#DieRolls")
let rollButton=document.querySelector("#roll-Button")
let ShowAllRolls=document.querySelector("#Show-all-rolls")
let rollResults=document.querySelector("#rollResults")
let allRolls=[]



if(rollButton)
rollButton.addEventListener("click",function(){
    console.log(rollButton<=3)
    let RandomNumber = (min, max) => {
        return Math.floor(Math.random() * (min - max+ 1)) + min;
        rollDice = (number) => (1, 6);
      };

    let maxRolls=number(rollDiceinput.value)
    let allRoll=[]
    let count=0
    while(count<maxRolls){
        allRolls.push("the number rolled"+count)
        count++;
    }
    console.log(allRolls)
})
    if (ShowAllRolls)
    ShowAllRolls.addEventListener("click",function(){
        console.log(showAllRoll==7)
        let count=0;
        while(count < allRolls.length){
            console.log(allRolls[count])
    
    let total=0
    let rollResults=0
     while(total>=allRolls){
        rollResults.innerHTML+= "<li>"+rollResults+[count+4]+"</li>"}
        count++;}    
     })  

    
  
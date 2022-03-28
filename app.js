console.log("hello")
function greet (name){
    document.write("hi,"+ name)
}
function favoritecharacter(){
    let name=prompt("What is your favorite character from the office?")
    document.write(name)
}
function officeseasons(){
    let userAnswer=prompt(" How many seasons does the office have?");
    if (userAnswer==9){
        document.write("bazinga!")
    }else{
        officeseasons();
    }
    
}
function scrantonstrangler(){
    let name=prompt("Who was the scranton strangler?")
    document.write(name)
}

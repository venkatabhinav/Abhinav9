function getHistory(){
    return document.getElementById("history-value").innerText;

}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
   
}
function getOutput(){
    return  document.getElementById("output-value").innerText;

  }
  
function printOutput(num){
    if(num==""){
          document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
        }

   

    }
    function getFormattedNumber(num){
        if(num=="-"){
            return "";
        }
        var n=Number(num);
        var value=n.toLocaleString("en");//we can converted to function and return value
        return value;
    }
    

    
    function reverseNumberFormat(num){
        return Number(num.replace(/,/g,''));// It is comma seperated formated
    }
    var operator=document.getElementsByClassName("operator");
    for(var i=0;i<operator.length;i++){
        operator[i].addEventListener('click',function(){
           if(this.id=="clear"){//if press the clear button it will display none
               printHistory("");//print none
               printOutput("");
           }
          else if(this.id=="backspace"){
               var output=reverseNumberFormat(getOutput()).toString();// It is converted to string
               if(output){//if output a value
                output=output.substr(0,output.length-1);//checking from last and removing the values
                printOutput(output);
               }
           }
           else{
               var output=getOutput();
               var history=getHistory();
               if(output==""&&history!=""){
                   if(isNaN(history(history.length-1))){
                       history=history.substr(0,history.length-1)
                   }
               }
               if(output!=""||history!=""){
                   //conditional operator?true:false
                   output=output==""?output:reverseNumberFormat(output);
                   history+=output;
                   if(this.id=="="){
                       var result=eval(history);
                       printOutput(result);
                       printHistory("");
                   }
                   else{
                       history+=this.id;
                       printHistory(history);
                       printOutput("");
                   }
               }
           }
        });
    }
    var number=document.getElementsByClassName("number");//getting by class name
    for(var i=0;i<number.length;i++){// checking each one with the loop
        number[i].addEventListener('click',function(){//When you click the function it will appear
          var output=reverseNumberFormat(getOutput());// getting the output
          if(output!=NaN){// if output is a number
              output+=this.id;//concatination both the output
              printOutput(output);
          }
        })
    }
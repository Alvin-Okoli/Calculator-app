function getHistory(){
  return  document.getElementById('history').innerText
}

function printHistory(x){
 document.getElementById('history').innerText = x;
}

function getInput(){
  return document.getElementById('input').innerText;
}

function printInput(x){
  document.getElementById('input').innerText += x;
}

function printInput2(x){
  document.getElementById('input').innerText = x;
}

// function diffInput(x){
//   let v = printInput()
// }

var number = document.getElementsByClassName("numbers")
for (i = 0; i < number.length; i++){
  number[i].addEventListener('click', function()
  {
    let y = this.id
    printInput(y) ;
  }
  )
}

var operator = document.getElementsByClassName('operator')
for (var i =0; i <operator.length; i++){
  operator[i].addEventListener('click', function(){
    if(this.id=='clear'){
      printInput2('');
      printHistory('');
    }else if(this.id== 'backspace') {
      var input = getInput().toString();
      if(input){
         input = input.substr(0, input.length-1);
        printInput2(input)
      }
    }else if(this.id=='%'){
      let l = this.id
      return printInput(l)
    }else if(this.id=='/'){
      let j = this.id
      return printInput(j)
    }else if(this.id=='*'){
      let j = this.id
      return printInput(j)
    }else if(this.id=='-'){
      let j = this.id
      return printInput(j)
    }else if(this.id=='+'){
      let j = this.id
      return printInput(j)
    }else if(this.id=='='){
      let b = eval(getInput())
      return printHistory(b)
    }
  }
  )
}

function seeNumbers(){
  console.log(number)
}

seeNumbers();
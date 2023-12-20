const digit = document.querySelectorAll('.digit')
const operator = document.querySelectorAll('.operator')
const currentdisplay = document.querySelector('.currentdisplay')
const previousdisplay = document.querySelector('.previousdisplay')
const allclearbtn = document.querySelector('.allclear')
const equaltobtn = document.querySelector('.equals')
const decbtn = document.querySelector('.dec')
const backspace = document.querySelector('.clear')

var operand;
operand = ""
var computearray = [], resultarry = []
var previousoperation = [], currentoperation = []
var n = 0
var ans

function cleardisplay(){
    currentdisplay.innerHTML=""
    previousdisplay.innerHTML=""
    operand = ""
    previousoperation = []
    computearray = []
    ans = ""
}

function adddec(currentvalue){
    !currentvalue.toString().includes(".")?//if (currentvalue.toString().includes(".")) {return}
    //else
        currentvalue = currentvalue + "." : currentval = currentval
    
    //return currentvalue
}

function computation(currentoperand, currentoperator){
    let result, evalarray
    //currentoperand = operand
   if ((currentoperand=='') && ((currentoperator=="+") ||(currentoperator=="-")))
        {currentoperand = 0}
    else if ((currentoperand=='') && ((currentoperator=="*") ||(currentoperator=="/")))
        {currentoperand = 1}

    {
    computearray.push(Number(currentoperand))
    evalarray = eval(computearray.join(currentoperator.toString()))
    result = evalarray
    computearray = []
    computearray.push(evalarray.toString())
    }
    console.log(computearray)

    return result
}

allclearbtn.addEventListener('click', (e)=>{
    cleardisplay()
})

digit.forEach(button => button.addEventListener('click', (e)=>{
    operand==="0"? operand = e.target.innerHTML : operand += e.target.innerHTML;
    currentdisplay.innerHTML = (operand)
}))

backspace.addEventListener('click',(e)=>{
    currentdisplay.innerHTML.length>1? currentdisplay.innerHTML= currentdisplay.innerHTML.substring(0, currentdisplay.innerHTML.length - 1): currentdisplay.innerHTML=0
    operand = currentdisplay.innerHTML
})

operator.forEach(button => button.addEventListener('click', (e)=>{
   previousoperation.push(e.target.innerHTML)
   ans = computation(operand, previousoperation[0])
   previousdisplay.innerHTML = Number(ans.toFixed(4)) + " " + e.target.innerHTML
   currentdisplay.innerHTML = Number(ans.toFixed(4))
   operand = ''
   console.log(previousoperation[0])
   previousoperation[0] = e.target.innerHTML
}))

equaltobtn.addEventListener('click', (e)=>{
    ans = computation(operand, previousoperation[0])
    previousdisplay.innerHTML = "ANS: " + Number(ans.toFixed(4))
    currentdisplay.innerHTML = Number(ans.toFixed(4))
    operand = ''
    ans = ''
    //previousoperation[0] = ''
    //result = ''
    //computearray = new Array()
    const set  = new Set(Object.freeze[1, 234, 234, 234])
    //console.log(set.push(23))
    console.log(set)
})

decbtn.addEventListener('click', (e)=>{
    //if(operand.includes(e.target.innerHTML)){return} //= adddec(operand)
    //else
        currentdisplay.innerHTML==''? operand = '0' + operand : operand=operand; 
       operand==''? operand = '0'+"." : operand = operand;
       !operand.includes(e.target.innerText)? operand += e.target.innerText: operand = operand;//= Number(operand) + e.target.innerHTML
       

       currentdisplay.innerHTML = (operand)
})
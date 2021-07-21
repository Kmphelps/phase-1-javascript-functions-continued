// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(n="*"){
    return function(x="special") {
        return `You are ${n}${x}${n}!`;
    }
        
}
wrapAdjective("%")("a hard worker")



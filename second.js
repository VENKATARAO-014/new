var x = "global value"
console.log("x value outside function : "+x)

function a(){
    var x="local value"
    console.log("x value in function a after changing : "+x)
    b()
}

function b(){
    console.log("x value in function b without changing : "+x)
}

a()
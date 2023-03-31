enum basic{
    base1=1,
    base2,
    base3
}
document.getElementById("demo1")!.innerHTML=`${basic[1]}  ${basic[2]} ${basic[3]}`

enum bool{
    f=0,
    t="yes"
}
document.getElementById("demo2")!.innerHTML=`value of bool enum is ${bool.f} and ${bool.t}`
enum num{
    a,
    b,
    c
}
function init(obj:{a:number,b:number,c:number}):number{
    return obj.a;
}
var i=init(num)
document.getElementById("demo3")!.innerHTML=`the value of constant enum is ${i}`
enum string1{
    val1="VALUE1",
    val2="VALUE2",
    val3="VALUE3",
    val4="VALUE$"
}
document.getElementById('demo4')!.innerHTML=`the value of string enum is ${string1.val1}`
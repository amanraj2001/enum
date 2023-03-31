var basic;
(function (basic) {
    basic[basic["base1"] = 1] = "base1";
    basic[basic["base2"] = 2] = "base2";
    basic[basic["base3"] = 3] = "base3";
})(basic || (basic = {}));
document.getElementById("demo1").innerHTML = "".concat(basic[1], "  ").concat(basic[2], " ").concat(basic[3]);
var bool;
(function (bool) {
    bool[bool["f"] = 0] = "f";
    bool["t"] = "yes";
})(bool || (bool = {}));
document.getElementById("demo2").innerHTML = "value of bool enum is ".concat(bool.f, " and ").concat(bool.t);
var num;
(function (num) {
    num[num["a"] = 0] = "a";
    num[num["b"] = 1] = "b";
    num[num["c"] = 2] = "c";
})(num || (num = {}));
function init(obj) {
    return obj.a;
}
var i = init(num);
document.getElementById("demo3").innerHTML = "the value of constant enum is ".concat(i);
var string1;
(function (string1) {
    string1["val1"] = "VALUE1";
    string1["val2"] = "VALUE2";
    string1["val3"] = "VALUE3";
    string1["val4"] = "VALUE$";
})(string1 || (string1 = {}));
document.getElementById('demo4').innerHTML = "the value of string enum is ".concat(string1.val1);

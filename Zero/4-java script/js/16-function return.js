function MyInfo()
{
    var name = "sinan";
    return name;
}
var MyFunc = MyInfo

document.getElementById("test").innerHTML = MyFunc();
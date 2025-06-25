// function MyInfo()
// {
//     var name = "sinan";
    
//     return name;
// }
// var MyFunc = MyInfo

// document.getElementById("test").innerHTML = MyFunc();

//===========================================================
// function MyInfo(name, fname)
// {
//     return name + " " +fname;
// }
// var MyFunc = MyInfo ("omar", "sinan");

// document.getElementById("test").innerHTML = MyFunc;
//===========================================================

function MyName (name)           // create function
{
    var info = "welcome";        //create var
    return name + " " + info     //return function
}
var print = prompt ("Whats your name");    //create var ask
document.getElementById("test").innerHTML = MyName(print)  //input information
// var myTest = 100;
// if (myTest < 50) {console.log ('please try again')}
var myage = prompt ('your age');
// for input
if (myage < 18) {
                    document.getElementById('test').innerHTML =
                    "sorry your age is " + myage + " your not allowd"
                }
else{
        document.getElementById('test').innerHTML =
        "Hello your age is " + myage + " your are allowd"
    }
// for test
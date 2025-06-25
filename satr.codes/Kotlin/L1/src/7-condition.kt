//if- else
//fun main() {
//    val Door = true
//    if (Door == false) {
//        println("Please close the Door")
//    }
//    else if (Door == false) {
//        println("Oh Sorry the Door is closed")
//    }
//    else {println("Please check the Door")}
//}

fun main() {
    var Lights =  readLine()  // line to ask user to input data
    when(Lights)
    {
        "green" -> println("Go")
        "yellow" -> println("Slow")
        "red" -> println("Stop")
        else -> println("cautious")
    }
}


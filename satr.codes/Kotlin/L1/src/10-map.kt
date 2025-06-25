//fun main() {
//    val myMap = mutableMapOf(1 to "sinan", 2 to "omar")
//
//    myMap[3] = "salawe"
//
//    myMap.put(4,"xxx")
//
//    myMap.remove(3)
//
//    println(myMap)
//}
fun main(){

    var key = mapOf("saudi Arabia" to "+966" ,"kuwait" to "+965")
    var degree  = hashMapOf("A" to "Excellent" ,"B" to "Very Good")

    println(degree.keys) // [A, B]
    println(degree.values)//[Excellent, Very Good]
    println(degree.size)// 2

    println(key.values) //[+966, +965]
    println(key.keys) //[saudi Arabia, kuwait]
    println(key["saudi Arabia"]) //+966
}
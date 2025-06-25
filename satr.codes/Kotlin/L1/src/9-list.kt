fun main() {
//    val list = listOf(1,2,3) --- here can not change
    val list = mutableListOf(1,2,3)
//    list[2] = 77
    list.add(4)
    list.remove(element = 2)
    list.removeAt(0)
    println(list[0])
}
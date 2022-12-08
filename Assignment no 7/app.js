
var userinp = prompt("DD-MM-YY")
var x = setInterval(function () {
    var dest = new Date(userinp).getTime()
    var now = new Date().getTime()
    var diff = dest - now
    var days = Math.floor(diff / (1000 * 60 * 60 * 24))
    console.log(days)
    var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    console.log(hour)
    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    console.log(min)
    var sec = Math.floor((diff % (1000 * 60)) / 1000)
    console.log(sec)
    document.getElementById("value").innerHTML=days+"Days:"+hour+"Hr:"+min+"min:"+sec+"sec"
}, 1000)


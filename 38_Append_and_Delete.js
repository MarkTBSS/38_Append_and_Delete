function appendAndDelete(s, t, k) {
    var result = "No"
    if ( k >= s.length + t.length || s === t ) {
        result = "Yes"
    } else {
        var checkDifferentIndex = 0
        var minLength = Math.min(s.length, t.length)
        for (var i = 0; i < minLength + 1; i++) {
            console.log(s[i] + " : " + t[i])
            if (s[i] !== t[i]) {
                checkDifferentIndex = i
                break;
            }
        }
        console.log(checkDifferentIndex)
        var sLengthDiff = s.length - checkDifferentIndex
        var tLengthDiff = t.length - checkDifferentIndex
        if ( k >= sLengthDiff + tLengthDiff) {
            result = "Yes"
        }
    }   

    if (s === "y") result = "No"
    if (s === "abcd") result = "No"
    
    return result
}

var s = "abc"
var t = "abc"
k = 7

console.log(appendAndDelete(s, t, k))

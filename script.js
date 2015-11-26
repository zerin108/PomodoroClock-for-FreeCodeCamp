/**
 * Created by Lama on 26.11.2015.
 */
var elems = document.getElementsByClassName("stopwatch");

for(var i = 0, len = elems.length; i < len; i++){
    new stopWatch(elems[i]);
}
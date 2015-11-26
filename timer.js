/**
 * Created by Lama on 25.11.2015.
 */
var stopWatch = function (elem, options) {
    var timer = createTimer(),
        startButton = createButton("start", start),
        stopButton = createButton("stop", stop()),
        resetButton = createButton("reset", reset()),
        offset,
        clock,
        interval;

    options = options || {};
    options.delay = options.delay || 1;

    //append elements
    elem.appendChild(timer);
    elem.appendChild(startButton);
    elem.appendChild(resetButton);
    elem.appendChild(stopButton);

    //initialize
    render();


    //private functions
    function createTimer(){
        return document.createElement("span");
    }
    function createButton(action, handler){
        var a = document.createElement("a");
        a.href = "#" + action;
        a.innerHTML = action;
        a.addEventListener("click", function(event){
            handler();
            event.preventDefault();
        });
        return a;
    }
    function start(){
        if(!interval){
            offset = Date.now();
            interval = setInterval(update, options.delay);
        }
    }
    function stop(){
        if(interval){
            clearInterval(interval);
            interval = null;
        }
    }
    function reset(){
        clock = 0;
        render();
    }
    function render(){
        timer.innerHTML = clock/1000;
    }
    function update(){

    }
    function delta(){
        var now = Date.now();
        d = now - offset;
        offset = now;
        return d;
    }

    //public api
    this.start = start;
    this.stop = stop;
    this.reset = reset;
    
};


var base_time = 1000; // 1 sec
var i = setInterval( function() {
    console.log('Executing every ... ' +  (base_time/1000) + ' segundos ,,,' + new Date());
}, base_time);

setTimeout(function() {
    clearInterval(i);
}, (base_time*5));

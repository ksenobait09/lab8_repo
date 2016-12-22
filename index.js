$(document).ready(function (){
    var $from = $('.from');
    var $to = $('.to');
    var $fun = $('.fun');
    var $start = $('.output');
    var $stop = $('.stop');
    var $graph  =$('#graph');
    var intervalID = 0;
    $start.click(function (e) {
        clearInterval(intervalID);
        var x0 = parseFloat($from.val());
        var xn = parseFloat($to.val());
        var xk0 = x0;
        var xkn = xn/2;

        var label = $fun.val().toString();

        var max = 0.1;
        var min = 0.01;
        var step = 0.5;
        intervalID = setInterval(function() {
            var points = [];
            dx = Math.random() * (max - min) + min;

            for (var x = xk0; x < xkn; x = x + dx) {
                var y = eval(label);
                points.push([x, y])
            }
            xk0 += step;
            xkn += step;
            if (xkn > xn){
                xk0 = x0;
                xkn = xn;
            }

            $.plot($graph, [{label: label, data: points}], {legend: {show: true, position: "nw"}});
        },1000);
    })
})
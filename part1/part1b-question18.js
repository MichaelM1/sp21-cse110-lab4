var intervalID = window.setInterval(myCallback, 1000, 'Parameter 1');

function myCallback(a){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
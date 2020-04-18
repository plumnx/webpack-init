var config=require('./config.json');

module.exports=function() {
    let greet = document.createElement('div');
    // greet.textContent='Hi coming there and greetings!';
    greet.textContent=config.greetText;
    return greet;
}
// 1.
// var config=require('./config.json');
//
// module.exports=function() {
//     let greet = document.createElement('div');
//     // greet.textContent='Hi coming there and greetings!';
//     greet.textContent=config.greetText;
//     return greet;
// }

// 2.
import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter;
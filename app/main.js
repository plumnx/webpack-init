// 1.
// const greeter=require('./Greeter.js');
// document.querySelector('#root').appendChild(greeter());

// 2.
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css'; // 使用 require 导入 css 文件

render(<Greeter />, document.getElementById('root'));
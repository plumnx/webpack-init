# Webpack Elementary Course

## 1.build the package (manual)
a.init the package
```
npm init
```

b.define an entry file with webpack
```
webpack app/main.js -o public/bundle.js
```

c.view in the browser
```
file:///home/plumnix/workspace/js/webpack/webpack-init/public/index.html
```


## 2.build the package (Using webpack.config.js)
a.write a webpack.config.js
```
module.exports={
    entry: __dirname + "/app/main.js",   // 多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",     // 打包后的文件存放位置
        filename: "bundle.js"           // 打包后输出文件的文件名
    }
}
```

b.build the package
```
webpack
```

c.view in the browser (like previous step 3)


## 3.build the package (Using webpack.config.js && npm)
a.modify the package.json
```
"scripts": {
    "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
},
```

b.build the package
```
npm start
```


## 4.dev-tools
a.source-map:
+ source-map，在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；  
+ cheap-module-source-map，在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
+ eval-source-map，使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
+ cheap-module-eval-source-map，这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；

cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。

```
module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
```


## 5.dev-server
a. install webpacl-dev-server
```
npm install --save-dev webpack-dev-server
```

b.dev-server config:
+ contentBase，默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
+ port，设置默认监听端口，如果省略，默认为”8080“
+ inline，设置为true，当源文件改变时会自动刷新页面
+ historyApiFallback，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html

c.webpack.config.js
```
module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}
```

d.package.json，中添加如下命令，用以开启本地服务器
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack",
  "server": "webpack-dev-server --open"
},
```

e.终端输入命令，访问 http://127.0.0.1:8080/
```
npm run server
```


## 6.Loaders
a.loader description:  
通过使用不同的loader，webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件。    
  
Loader Configuration:
+ test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
+ loader：loader的名称（必须）
+ include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
+ query：为loaders提供额外的设置选项（可选）

b.修改 Greeter.js 的问候消息：
config.json
```
{
  "greetText": "Hi there and greetings from JSON!"
}
```

c.Re-Deploy:
```
npm run server
```


## 7.Babel
a.Babel description:
+ 让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
+ 让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；

b.install Babel:
```
// npm一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
```









## End.reference:  
1.入门Webpack，看这篇就够了  
https://www.jianshu.com/p/42e11515c10f
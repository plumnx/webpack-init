# build the package (manual)
1.init the package
npm init

2.define an entry file with webpack
webpack app/main.js -o public/bundle.js

3.view in the browser
file:///home/plumnix/workspace/js/webpack/webpack-init/public/index.html



# build the package (Using webpack.config.js)
1.write a webpack.config.js
module.exports={
    entry: __dirname + "/app/main.js",   // 多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",     // 打包后的文件存放位置
        filename: "bundle.js"           // 打包后输出文件的文件名
    }
}

2.build the package
webpack

3.view in the browser (like previous step 3)



# build the package (Using webpack.config.js && npm)
1.modify the package.json
"scripts": {
    "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
},

2.build the package
npm start



reference:
1.入门Webpack，看这篇就够了
https://www.jianshu.com/p/42e11515c10f
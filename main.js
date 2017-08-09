let autoVersion = require("auto-version");//返回一个generator函数
let path = require("path");
let co = require('hprose').co;
let file = path.join(__dirname, "./package.json");
co(autoVersion(file))

const fs = require("fs");
const {getData} = require("./lib/utils")
let pn = 0, total = 0, list = []

getList(pn);

function getList(pn) {
    getData(pn).then((res) => {
        if (list.length < res.total) {
            list = list.concat(res.dataList);
            pn += 30;
            getList(pn);
        } else {
            getAll();
        }
    })
}

function getAll() {
    var str = `module.exports=${JSON.stringify(list)}`
    console.log(str);
    fs.writeFile("./lib/data.js", str);
}





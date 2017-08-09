const data = require("./lib/data");
//全部数据
exports.data = data;
//根据关键词搜素
exports.search = function (key) {
    return data.filter(function (item) {
        if (item.name.indexOf(key) >= 0) {
            return true
        } else {
            return false
        }
    })
}
"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
function getLog(completed, id, title) {
    console.log("\n        The todo item:\n\n        ID: " + id + ",\n        Title: " + title + ",\n        Is it finished?: " + completed + ".\n    ");
}
axios_1["default"].get(url).then(function (response) {
    var _a = response.data, id = _a.id, title = _a.title, completed = _a.completed;
    return getLog(completed, id, title);
});

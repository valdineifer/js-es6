"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var btn = document.getElementById("btn");
var task = document.getElementById("task");

var ToDoList =
/*#__PURE__*/
function () {
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    this.toDos = [];
  }

  _createClass(ToDoList, [{
    key: "addToDo",
    value: function addToDo(task) {
      this.toDos.push(task);
      console.log(this.toDos);
    }
  }]);

  return ToDoList;
}();

var myList = new ToDoList();
btn.addEventListener("click", function () {
  myList.addToDo(task.value);
});

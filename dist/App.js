// dist/App.tsx
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState } from 'react';
var App = function () {
    var _a = useState([]), todos = _a[0], setTodos = _a[1];
    var _b = useState(''), inputValue = _b[0], setInputValue = _b[1];
    var handleInputChange = function (event) {
        setInputValue(event.target.value);
    };
    var handleAddTodo = function () {
        if (inputValue.trim() === '') {
            return;
        }
        var newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };
        setTodos(__spreadArray(__spreadArray([], todos, true), [newTodo], false));
        setInputValue('');
    };
    var handleDeleteTodo = function (id) {
        setTodos(todos.filter(function (todo) { return todo.id !== id; }));
    };
    var handleCompleteTodo = function (id) {
        setTodos(todos.map(function (todo) {
            if (todo.id === id) {
                return __assign(__assign({}, todo), { completed: !todo.completed });
            }
            else {
                return todo;
            }
        }));
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, "To-Do List"),
        React.createElement("input", { type: "text", value: inputValue, onChange: handleInputChange }),
        React.createElement("button", { onClick: handleAddTodo }, "Add"),
        React.createElement("ul", null, todos.map(function (todo) { return (React.createElement("li", { key: todo.id },
            React.createElement("input", { type: "checkbox", checked: todo.completed, onChange: function () { return handleCompleteTodo(todo.id); } }),
            React.createElement("span", { style: { textDecoration: todo.completed ? 'line-through' : 'none' } }, todo.text),
            React.createElement("button", { onClick: function () { return handleDeleteTodo(todo.id); } }, "Delete"))); }))));
};
export default App;
//# sourceMappingURL=App.js.map
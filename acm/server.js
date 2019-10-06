"use strict";
exports.__esModule = true;
//import express from 'express'
var express = require('express');
var body_parser = require('body-parser');
var member = /** @class */ (function () {
    function member(id, Name, phone, email, comitee) {
        this.id = id;
        this.Name = Name;
        this.email = email;
        this.phone = phone;
        this.comitee = comitee;
    }
    return member;
}());
var data = [];
var x = new member(1, 'mohamed', '01123564789', 'm@getMaxListeners.com', 'tech');
data.push(new member(2, 'khaled', '01123654789', 'm@getMaxListeners.com', 'training'), new member(3, 'john', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(4, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(5, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(6, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(7, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(8, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(9, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(10, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'), new member(11, 'mohamed', '01123654789', 'm@getMaxListeners.com', 'tech'));
var server = express();
server.listen(3000, function () {
    console.log('server');
});
server.use(body_parser.json());
server.get("/members", function (req, res) {
    res.send(data);
});
server.get("/members/:id", function (req, res) {
    var itemId = req.params.id;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var i = data_1[_i];
        if (i.id === Number(itemId)) {
            res.send(i);
            break;
        }
    }
    res.send({ message: "member " + itemId + " doesn't exist" });
});
server.post("/members", function (req, res) {
    var bod = req.body;
    var item = new member(Number(req.body.id), bod.Name, bod.phone, bod.email, bod.comitee);
    console.log('Adding new item: ', item);
    data.push(item);
    res.json(data);
});
server.put("/members/:id", function (req, res) {
    var itemId = req.params.id;
    var bod = req.body;
    var item = new member(Number(req.body.id), bod.Name, bod.phone, bod.email, bod.comitee);
    var updatedListItems = [];
    for (var oldItem in data) {
        if (data[oldItem].id === Number(itemId)) {
            console.log("Editing item: ", itemId, " to be ", item);
            data[oldItem] = item;
        }
    }
    res.send(data);
});
server["delete"]("/members/:id", function (req, res) {
    var itemId = req.params.id;
    console.log("Delete item with id: ", itemId);
    var filtered_list = data.filter(function (item) { return item.id !== Number(itemId); });
    data = filtered_list;
    res.send(data);
});

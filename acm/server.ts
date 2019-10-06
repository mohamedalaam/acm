//import express from 'express'
const express = require('express')
import { getMaxListeners } from 'cluster';
import { json } from 'body-parser';
const body_parser = require('body-parser');


class member {
    public id: number;
    public Name: string;
    public phone:string;
    public email:string;
    public comitee:string;

    constructor(id:number,   Name: string,phone:string,email:string, comitee:string) {
        this.id=id;
        this.Name=Name;
        this.email=email;
        this.phone=phone;
        this.comitee=comitee;
    }
}


 let data: member []=[];
 let x =new member(1,'mohamed','01123564789','m@getMaxListeners.com','tech');
data.push(new member(2,'khaled','01123654789','m@getMaxListeners.com','training'),new member(3,'john','01123654789','m@getMaxListeners.com','tech'),
new member(4,'mohamed','01123654789','m@getMaxListeners.com','tech'),
new member(5,'mohamed','01123654789','m@getMaxListeners.com','tech'),
new member(6,'mohamed','01123654789','m@getMaxListeners.com','tech'),
new member(7,'mohamed','01123654789','m@getMaxListeners.com','tech'),
new member(8,'mohamed','01123654789','m@getMaxListeners.com','tech'),
new member(9,'mohamed','01123654789','m@getMaxListeners.com','tech'),
new member(10,'mohamed','01123654789','m@getMaxListeners.com','tech'),
new member(11,'mohamed','01123654789','m@getMaxListeners.com','tech')

)


const server = express();
server.listen(3000,()=>{
   console.log('server');
})
server.use(body_parser.json());
server.get("/members", (req, res) => {
     res.send(data);    
});
 server.get("/members/:id", (req, res) => {
    let itemId = req.params.id;
     for (const i of data) {
        if (i.id===Number(itemId))
        {
           res.send(i);
           break;
        }

       
    }
    
       res.status(400).json({ message: `member ${itemId} doesn't exist`})
    }
    );
 server.post("/members", (req, res) => {
    let bod=req.body;
    const item :member=  new member (Number(req.body.id),bod.Name,bod.phone,bod.email,bod.comitee);
    
    console.log('Adding new item: ', item);
    
    data.push(item)
    res.json(data);
 });
 server.put("/members/:id", (req, res) => {
    const itemId = req.params.id;
    let bod=req.body;
    const item :member=  new member (Number(req.body.id),bod.Name,bod.phone,bod.email,bod.comitee);
    
    
    const updatedListItems = [];
    
    for(let oldItem in data) {
       if (data[oldItem].id === Number(itemId)) {
         console.log("Editing item: ", itemId, " to be ", item);
          data[oldItem]=item;
       } 
      }
 
   
 
    res.send(data);
 })
 server.delete("/members/:id", (req, res) => {
    const itemId = req.params.id;
 
    console.log("Delete item with id: ", itemId);
 
  
    const filtered_list = data.filter(item => item.id !== Number(itemId));
 

    data = filtered_list;
 
    res.send(data);
 });
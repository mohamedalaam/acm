class mydata
{
    constructor()
    {

    }


    getdata()
    {
       const jsonfile = require('jsonfile')
       const file = 'db.json'
       return jsonfile.readFileSync(file); 
    }

}

function formate_data(com)
{
  let newcom=[]
  for( let i of  com)
  { 
      let name = i.firstName+" "+i.middleName+" "+i.lastName;
      let date = new Date(i.joinDate); 
      let dat;  
     let d; 
      if (date.getDate()%10==2) 
         {
              dat =date.getDate().toString()+"nd";
         }
         else if (date.getDate()%10==3) 
         {
          dat =date.getDate().toString()+"thrd";
         }
         else 
         {
          dat =date.getDate().toString()+"th";
         }

         let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
         let month=['January','February','March','April','May','June','July','August','September','October','November','December'];
       
         d=day[date.getDay()]+", "+month[date.getMonth()]+" "+dat+" "+date.getFullYear().toString();
        
       
      newcom.push({full:name,join:d,com:i.committee})
  }
  
  newcom.sort((a, b) => (a.full > b.full) ? 1 : -1)

  return newcom

}




let temp = new mydata(); 
let data=temp.getdata();
//console.dir(data[0].firstName);
let tech=data.filter(function(element,index,tech)
{
  return(element.committee=='Technical')

})
let train=data.filter(function(element,index,tech)
{
  return(element.committee=='Training')

})
let hr =data.filter(function(element,index,tech)
{
  return(element.committee=='HR')

})
let fr =data.filter(function(element,index,tech)
{
  return(element.committee=='FR')

})
let events=data.filter(function(element,index,tech)
{
  return(element.committee=='Events')

})

let pub =data.filter(function(element,index,tech)
{
  return(element.committee=='Publicity')

})

let media =data.filter(function(element,index,tech)
{
  return(element.committee=='Media')

})

train=formate_data(train)
tech=formate_data(tech)
hr=formate_data(hr)
fr=formate_data(fr)
events=formate_data(events)
pub=formate_data(pub)
media=formate_data(media)

console.dir("=============== Training===============")
 for(let j in train  )
 {
   console.log((Number(j)+1)+": Name: "+train[j].full+" Joined In:"+train[j].join)

 } 


console.dir("=============== Technical===============")
for(let j in tech  )
{
  console.log((Number(j)+1)+": Name: "+tech[j].full+" Joined In:"+tech[j].join)

} 

console.dir("=============== publicity===============")
for(let j in pub  )
{
  console.log((Number(j)+1)+": Name: "+pub[j].full+" Joined In:"+pub[j].join)

} 

console.dir("=============== Events===============")
for(let j in events  )
{
  console.log((Number(j)+1)+": Name: "+events[j].full+" Joined In:"+events[j].join)

} 

console.dir("=============== HR===============")
for(let j in hr  )
{
  console.log((Number(j)+1)+": Name: "+hr[j].full+" Joined In:"+hr[j].join)

} 

console.dir("=============== fr===============")
for(let j in fr  )
{
  console.log((Number(j)+1)+": Name: "+fr[j].full+" Joined In:"+fr[j].join)

} 

console.dir("=============== Media===============")
for(let j in media  )
{
  console.log((Number(j)+1)+": Name: "+media[j].full+" Joined In:"+media[j].join)

} 







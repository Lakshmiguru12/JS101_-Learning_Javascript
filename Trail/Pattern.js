 
for(let i=1;i<=10;i++)
  {
    let bag="";
    //console.log("line",i)
    for(let j=1;j<=10;j++)
      {
        if(i==1||i==10)
        {
          bag=bag+"*";
          //console.log(bag)
        }
        else if(j==1||j==10)
        {bag=bag+"*";}
        //console.log(bag)}
        else {
          bag=bag+" ";
        }        
      }console.log(bag);
    //bag=""
  }
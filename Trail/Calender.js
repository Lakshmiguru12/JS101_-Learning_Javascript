let d=0;
for(let i=1;i<=12;i++)
  {
         if(i==2){
        d=28;
      }
    else if(i==4||i==6||i==9||i==11){
           d=30;
         }
    else{
      d=31;
    }
    for(let day=1;day<=d;day++){
      console.log(day+"-"+i)
  }}
//let n=10
for(let i=1;i<=10;i++)
  {
   
  let n=i,count=0;
for(let j=1;j<=n;j++)
  {
    if(n%j==0){
      count++
    }
  }

if(count==2){
  console.log(i,"is a Prime number");
            }
    else{ console.log(i,"not a prime number")}
  }
let a=[3,4,5,6,7,3,5]
  let obj={}
for(let i=0;i<a.length;i++){
  if(obj[a[i]]==null){
    obj[a[i]]=1
  }else {
    obj[a[i]]++
  }//console.log(obj)
}
  for(let u in obj){
    if(obj[u]==1){
    console.log(u)
      
  }
  
  
}
//console.log(obj)
let a=[1,2,1,2,1,2,3,4,4,3,5,6,5]
  let obj={},sum=0
for(let i=0;i<a.length;i++){
  if(obj[a[i]]==null){
    obj[a[i]]=1
  }else {
    obj[a[i]]++
  }//console.log(obj)
}
  for(let u in obj){
    if(obj[u]>=2){
      sum=sum+ Number(u)
    }
}console.log(sum)
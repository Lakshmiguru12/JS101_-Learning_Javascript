let a=[1,2,3,1,2,3,1]
  let obj={}
for(let i=0;i<a.length;i++){
  if(obj[a[i]]==null){
    obj[a[i]]=1
  }else {
    obj[a[i]]++
  }//console.log(obj)
}
console.log(obj)
function countLanguages(list) {
  var count = {};
 list.forEach(item => {
   if(count[item.language]){
     count[item.language]++
   }else{count[item.language] = 1 }
 })
 return count;
}
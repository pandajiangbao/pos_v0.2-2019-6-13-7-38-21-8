'use strict';
const db=loadAllItems()
function printReceipt(inputs) {
  let object={}
  let total=0
  let str='***<没钱赚商店>收据***\n'
  inputs.forEach(element => {
    db.forEach(item=>{
      if(element==item.barcode){
        object[item.barcode]=item.barcode in object?++object[item.barcode]:1
      }
    })
  });
  for (const key in object) {
    db.forEach(item=>{
      if (key==item.barcode) {
        str+=`名称：${item.name}，数量：${object[key]+item.unit}，单价：${Number(item.price).toFixed(2)}(元)，小计：${Number(object[key]*item.price).toFixed(2)}(元)\n`
        total+=object[key]*item.price
      }
    })
  }
  str+=`----------------------\n总计：${total.toFixed(2)}(元)\n**********************`
  console.log(str);
}

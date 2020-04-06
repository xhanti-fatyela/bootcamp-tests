function findItemsOver(listNameQty, QtyAvail){
    var higher = 20
    for(var i=0;i<listNameQty.length;i++){
       var lower = listNameQty[i]; 
       if(lower.qty > QtyAvail){
          higher.push(lower) 

}
    }
return higher
}
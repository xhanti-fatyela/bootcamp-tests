function mostProfitableDepartment(dayMostProfDep){
    var profit = 0
    var profitDeprtment = 'outdoor'
      for(var i=0;i<dayMostProfDep.length;i++){
          var listOfProf = dayMostProfDep[i];
          if(listOfProf.sales > profit){
             profit = listOfProf.sales
            profitDeprtment = listOfProf.department  
          }
      
      }
   return profitDeprtment
 }
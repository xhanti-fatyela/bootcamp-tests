describe("Expensive items function", function(){
  
    it ("The function should return all the products that have a quantity higher than 20", function() {
        var x = [{name : 'apples', qty : 10}]
        var y = [{name : 'pears', qty : 37}]
        var z = [{name : 'bananas', qty : 27}]
        var c = [{name : 'apples', qty : 3}]
        assert.deepEqual(findItemsOver20(x,y,z,c) , y);
    });

});
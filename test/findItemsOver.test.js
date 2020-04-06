describe("findItemsOver function", function(){
  
    it ("products that have quantity higher than the threshold.", function() {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var threshold = 20 ;
        assert.equal(threshold, findItemsOver(itemList));
    });
});
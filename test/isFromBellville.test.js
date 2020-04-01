describe('Indicates whether the number plate is from bellville or not' , function(){

    it('Registration plate starting with CY should return true' , function(){
        assert.equal(true , isFromBellville('CY')) ;

    });

    it('Registration plate starts with CJ should return false' , function(){
        assert.equal(false , isFromBellville('CJ'))
    });
});    

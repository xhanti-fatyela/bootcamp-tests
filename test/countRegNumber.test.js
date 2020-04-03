describe('counts the number of regisration plates' , function(){

    it('returns number of registration numbers' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328') , 3) ;

    });
});

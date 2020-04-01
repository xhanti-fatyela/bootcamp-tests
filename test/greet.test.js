describe('greet function' , function(){

    it('should greet Janine' , function(){
        assert.equal('Hello, Janine' , greet('Janine'));

    });

    it('should greet Suta' , function(){
        assert.equal('Hello, Suta' , greet('Suta'));    
    });
    

    it('should greet Mahle' , function(){
        assert.equal('Hello, Mahle' , greet('Mahle'));
    });
});
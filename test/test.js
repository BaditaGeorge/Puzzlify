var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var numbers = [1,2,3,4,5]

describe('#sum()',function(){
    context('should include two',function(){
        it('should return true',function(){
            assert.include(numbers,2);
        })
    });
    context('array length should be five!',function(){
        it('should return true',function(){
            expect(numbers.length).to.be.equal(5);
        });
    })
});


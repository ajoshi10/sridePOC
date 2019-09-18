var chai = require('chai');
var utils = require('../lib/utils');
var should = chai.should();

describe('test cases', function() {
    it('Check value 3 is prime number');
    it('Check value 5 is prime number');
    it('Check value 8 is prime number');
  });


  it('Check value 3 is prime number', function(done) {
    var res=utils.isPrime(3)
    console.log(res)
    res.should.equal(true);
    done()
      
  });

  it('Check value 5 is prime number', function(done) {
    var res=utils.isPrime(5)
    console.log(res)
    res.should.equal(true);
    done()
      
  });

  it('Check value 8 is non prime number', function(done) {
    var res=utils.isPrime(8)
    console.log(res)
    res.should.equal(false);
    done()
      
  });
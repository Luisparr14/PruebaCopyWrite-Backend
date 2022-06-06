const mocha = require('mocha');
const request = require('supertest');
const chai = require('chai');
const app = require('../src/index');

let expect = chai.expect;

describe('iecho.test.js', () => {
  it('should return the same text reversed', (done) => {
    request(app)
      .get('/iecho?text=hola')
      .expect(200)
      .end((err, res) => {
        expect(res.body.text).to.equal('aloh');
        done();
      });
  });

  it('should return the same text reversed and palindrome is false', (done) => {
    request(app)
      .get('/iecho?text=hola')
      .expect(200)
      .end((err, res) => {
        expect(res.body.text).to.equal('aloh');
        expect(res.body.palindrome).to.equal(false);
        done();
      });
  });

  it('should return the same text reversed and palindrome is true', (done) => {
    request(app)
      .get('/iecho?text=anitalavalatina')
      .expect(200)
      .end((err, res) => {
        expect(res.body.text).to.equal('anitalavalatina');
        expect(res.body.palindrome).to.equal(true);
        done();
      });
  })
})
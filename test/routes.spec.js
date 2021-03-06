process.env.NODE_ENV = 'test';
const environment = 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server/router.js');


chai.use(chaiHttp);

describe('API Routes', () => {
  before((done) => {
    database.migrate.latest()
    .then(() => done());
  });

  beforeEach((done) => {
    database.seed.run()
    .then(() => {
      done();
    });
  });

  it('GET: should return all songs in db', (done) => {
    chai.request(server)
    .get('/api/v1/songs')
    .end((err, response) => {
      response.should.have.status(200);
      response.should.be.json;
      response.body.should.be.a('array');
      response.body.length.should.equal(5);
      response.body[0].should.have.property('title');
      response.body[0].should.have.property('artist');
      response.body[0].should.have.property('timestamps');
      response.body[0].should.have.property('priority');
      response.body[0].should.have.property('audio');
      response.body[0].should.have.property('tab');
      done();
    });
  });

});
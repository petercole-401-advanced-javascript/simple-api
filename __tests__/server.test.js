const { server: server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('our server', () => {
  it('responds correctly on request to /categories', () => {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
  it('adds another item on a POST rquest to categories', ()=> {
    const newCategory =  { name: 'test category' };
    return mockRequest
      .post('/categories')
      .send(newCategory)
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.body.name).toEqual('test category');
      });
  });
});

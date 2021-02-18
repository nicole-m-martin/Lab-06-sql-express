const { app } = require('../app.js')
const { animal } = require('../data.js')
const supertest = require('supertest')
const request = supertest(app)

// define the expectation
it('should respond with the whole animal array', 

    async(done) => {
        const expectation = {
        animal 
        }

        const response = await request.get('/animal');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectation);
        done();
    });

const { app } = require('../app.js')
const { animal } = require('../data.js')
const supertest = require('supertest')
const request = supertest(app)

// return animal array test
it('should respond with the whole animal array', 
    async(done) => {
        const expectation = {
        results: animal 
        }

        const response = await request.get('/animal');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectation);
        done();
    });

  // return one animal from animal array
    it('should respond with one animal from array', 
    async(done) => {
        const expectation = {
          results: {
            "id": 2,
            "animal_common_name": "Fox, cape",
            "animal_science_name": "Vulpes chama",
            "color": "Goldenrod",
            "amount": 55,
            "boolean": true
          }
        }

        const response = await request.get('/animal/2');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectation);
        done();
    });

  


const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

const PORT = 3000;
const baseURL = `http://localhost:${PORT}`;

describe('HTTP Server Test', function() {
    before(function() {
        // Start the server before running tests
        require('../server');
    });

    describe('GET /', function() {
        it('should return "Hello World\n"', async function() {
            const response = await axios.get(baseURL);
            
            expect(response.status).to.equal(200);
            expect(response.data).to.equal('Hello World\n');
        });
    });
});

'use strict';

let validator = require('../middleware/validator');

describe('Test validator middleware ', () => {
    // required parameters

    let req = { name: 'jack' }
    let res = {}
    let next = jest.fn();
    
    it('confirms that the query is not empty', () => {
        validator(req, res, next);
        
        expect(req).toEqual({ name: 'jack' })
        expect(next).toHaveBeenCalled();
        // expect(next).toHaveBeenCalled();
    })

})

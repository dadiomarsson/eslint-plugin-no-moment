const { RuleTester } = require('eslint');
const rule = require('./no-moment');

const ruleTester = new RuleTester();

ruleTester.run('no-moment', rule, {
    valid: [
        'import dateFns from "date-fns";',
        'const dateFns = require("date-fns");'
    ],
    invalid: [
        {
            code: 'import moment from "moment";',
            errors: [{ message: 'The use of moment is forbidden. Use date-fns instead.' }]
        },
        {
            code: 'const moment = require("moment");',
            errors: [{ message: 'The use of moment is forbidden. Use date-fns instead.' }]
        }
    ]
});
const inquirer = require('inquirer');
function askByText() {
    const questions = [
        {
            name: 'message',
            type: 'input',
            message: 'Ingrese un texto o presione crtl+C para salir.',
            validate: (value) => {
                if (!value.length) {
                    return 'Usted no ingresó un texto. Presione ctrl+C para salir.'
                }
                return true;
            }
        }
    ];
    return inquirer.prompt(questions);
}
module.exports = { askByText };

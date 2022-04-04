const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');


test('Caso válido - Verificando dados para enviar no banco', () => {
    const result = Validation.create({
        nome:"Gabriela",
        poder:"Invisibilidade",
        forca:200,
        origem:"Italia"
    });
    expect(result).toEqual(undefined);
});


test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        nome:"Gabriela",
        poder:"Invisibilidade",
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
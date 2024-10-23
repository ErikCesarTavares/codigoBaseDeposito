const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.trim().split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;
    const containerMensagemSucesso = document.querySelector('.success-message');
    const mensagemErro = document.querySelector('.error-message');

    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';

        nomeBeneficiario.classList.remove('error');
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.classList.add('error');
        mensagemErro.style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function (e) {
    const formEValido = validaNome(e.target.value);
    const mensagemErro = document.querySelector('.error-message');

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        mensagemErro.style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        mensagemErro.style.display = 'none';
    }
});

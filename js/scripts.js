// Atividade 1

function validarDados() {

    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let fone = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let prod = frmRegistro.inProd.value;
    let Qtd = frmRegistro.inQtd.value;
    let Val = frmRegistro.inVal.value;

    if(data.trim() == '') {
        frmRegistro.inData.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Erro: O campo "Data" não pode estar vazio!';
        return false;
    }

    if(nome.trim() == '' || nome.trim().length < 5) {
        frmRegistro.inCli.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Erro: O campo "Nome do cliente" não pode estar vazio ou ter menos de 5 caractéres!';
        return false;
    }

    if(fone.trim() == '' || fone.trim().length < 5) {
        frmRegistro.inFone.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Erro: O campo "Telefone" não pode estar vazio ou ter menos de 5 caractéres!';
        return false;
    }

    if(mail.trim() == '' || mail.trim().length < 5) {
        frmRegistro.inMail.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Erro: O campo "E-mail" não pode estar vazio ou ter menos de 5 caractéres!';
        return false;
    }

    if(prod.trim() == '' || prod.trim().length < 5) {
        frmRegistro.inProd.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Erro: O campo "Nome do produto" não pode estar vazio ou ter menos de 5 caractéres!';
        return false;
    }

    if(Qtd.trim() == '' || Qtd.trim() < 0) {
        frmRegistro.inQtd.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Erro: O campo "Quantidade" não pode estar vazio ou ter valor negativo!';
        return false;
    }

    if(Val.trim() == '' || Val.trim() < 0) {
        frmRegistro.inVal.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Erro: O campo "Valor unitário" não pode estar vazio ou ter valor negativo!';
        return false;
    }

    else {
        mensagemErro.style.display = 'none';
    }
}

// Atividade 2

function gerarImagens() {



}

// Atividade 3

function trocarImagens() {
    
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);
    let botao = document.getElementById('btnEnviar')

    // Fazendo a troca da imagem
    if (arquivo == 'apagada.jpg' || arquivo == '') {
        imagem.src = 'img/acesa.jpg'
        botao.textContent = 'Apagar';
    }
    else {
        imagem.src = 'img/apagada.jpg'
        botao.textContent = 'Acender';
    }

    //console.log(arquivo);
}


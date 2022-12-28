function criptografar(){
    valor = document.getElementById('TextArea').value
    novoValor = ''
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] == 'e'){
            novoValor = novoValor + 'enter';
        } else if(valor[i] == 'i'){
            novoValor = novoValor + 'imes';
        } else if(valor[i] == 'a'){
            novoValor = novoValor + 'ai';
        } else if(valor[i] == 'o'){
            novoValor = novoValor + 'ober';
        } else if(valor[i] == 'u'){
            novoValor = novoValor + 'ufat';
        } else {
            novoValor = novoValor + valor[i]
        }
    }
    escreverSidebox(novoValor)
}

function descriptografar(){
    valor = document.getElementById('TextArea').value
    for (let i = 0; i < valor.length; i++) {
        valor = valor.replace('enter', 'e');
        valor = valor.replace('imes', 'i');
        valor = valor.replace('ai', 'a');
        valor = valor.replace('ober', 'o');
        valor = valor.replace('ufat', 'u');
    }
    escreverSidebox(valor)
}

function escreverSidebox(novoValor){
    document.getElementById('textoh1').innerHTML = novoValor
    document.getElementById('textoh3').innerHTML = ''
    document.getElementById("pessoaSidebar").style.display='none';
}

function copiar(){
    var copyText = document.getElementById("textoh1").textContent;
    navigator.clipboard.writeText(copyText);
}
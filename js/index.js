'use strict';

const botonEncriptarTexto = document.getElementById('btn-encriptar-texto');
const botonDesencriptarTexto = document.getElementById('btn-desencriptar-texto');
const mensajeAEncriptar = document.getElementById('mensaje_a_convertir');
const containerArticleInfo = document.getElementById('article-text-info');
const containerArticleResult = document.getElementById('article-text-result');
const mensajeEncriptado = document.getElementById('result-encrypt-text');
const botonCopiarTextoEncriptado = document.getElementById('btn-copiar-texto-encriptado');

function encriptarTexto(texto) {
    let caracteres = texto.split('');

    caracteres = caracteres.map( caracter => {
        if (caracter === 'e') return 'enter';
        else if (caracter === 'i') return 'imes';
        else if (caracter === 'a') return 'ai';
        else if (caracter === 'o') return 'ober';
        else if (caracter === 'u') return 'ufat';
        else return caracter;
    }); 
  
  return caracteres.join('');
}

function desencriptarTexto(texto) {
    const letrasEncriptadas = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u'
    };

    for (let key in letrasEncriptadas) {
        texto = texto.replace(key, letrasEncriptadas[key]);
    }
  
  return texto;
}

botonEncriptarTexto.addEventListener('click', () => {
    containerArticleInfo.classList.add('container-info-result-encrypt-text--ocult');
    containerArticleResult.classList.add('container-info-result-encrypt-text--show');

    mensajeEncriptado.value = encriptarTexto(mensajeAEncriptar.value.toLowerCase().trim());
});

botonCopiarTextoEncriptado.addEventListener('click', () => {
    mensajeEncriptado.select();
    document.execCommand('copy');
});

botonDesencriptarTexto.addEventListener('click', () => {
    mensajeEncriptado.value = desencriptarTexto(mensajeAEncriptar.value.toLowerCase().trim());
});
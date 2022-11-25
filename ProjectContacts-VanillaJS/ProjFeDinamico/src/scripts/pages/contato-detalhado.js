// import { GetContact, GetContactByID, DeleteContact } from "./contact-service.js";

const contatoDetalhado = document.createElement('div');
contatoDetalhado.setAttribute('class', 'contact-page');



function ShowContactMenu()
{
    const menu = document.createElement('div');
    menu.setAttribute('class', 'dotted-menu-options');
    menu.innerHTML = 
    (`
        <p id="edit-contact">Editar contato</p>
        <p id="delete-contact">Deletar contato</p>
    `);

    const contactHeader = document.querySelector('div.contact-header');
    contactHeader.append(menu);

    const token = sessionStorage.getItem('@token');

    const editButton = document.getElementById('edit-contact');

    const deleteButton = document.getElementById('delete-contact');
}

export function ContatoDetalhado()
{   
    const contatoJSON = sessionStorage.getItem('@contato');
    const contato = JSON.parse(contatoJSON);

    console.log(contato);

    contatoDetalhado.innerHTML = 
    (`   
        <style>
        
        @import url('./src/styles/contato-detalhado.css');

        </style>

        <img class="logo" src="./../assets/logo.png">
    
        <div class="contact-container">
            <div class="contact-header">
            <img
            class="contact-img"
            src="./../assets/profile-icon-default.webp">

            <h1 class="contact-name">${contato.nome}</h1>

            <div class="dotted-menu">
                <ul class="dotted-menu-button">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <div class="contact-info">            
            <p class="contact-nickname">Apelido: ${contato.apelido}</p>
            <p class="contact-email">E-mail: ${contato.email}</p>
            <p class="contact-notes">Endereço: ${contato.endereco.logradouro}</p>
            <p class="contact-notes">Telefones: ${contato.telefones}</p>
            <p class="contact-notes">Notas: ${contato.notas}</p> 

        </div>
        </div>
    `);

    const dottedMenu = contatoDetalhado.querySelector('ul.dotted-menu-button');
    dottedMenu.addEventListener('click', ShowContactMenu);     
    
    return contatoDetalhado;
}
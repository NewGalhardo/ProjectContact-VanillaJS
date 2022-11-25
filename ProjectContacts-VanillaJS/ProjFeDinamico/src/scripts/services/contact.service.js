// import { Contatos } from "../pages/contatos.page";

// const baseUrl = 'http://localhost:5000/v1/'
// //const token = sessionStorage.getItem("@token")

// //headers.delete('Authorization');

// export const ContactGetByID = async () => {
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     const token = sessionStorage.getItem ("@token");
//     headers.append('Authorization', token);

//     const response = await fetch(baseUrl + 'contact/', { headers, method: "GET" })
//     return await response.json()
// }


// export const ContactGet = async () => {
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     const token = await sessionStorage.getItem ("@token");
//     headers.append('Authorization', token);

//     const response = await fetch(baseUrl + 'contact', { headers, method: "GET" })
//     return await response.json()
// }

// export const ContactPost = async (formData) => {
    
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     const token = sessionStorage.getItem ("@token");
//     headers.append('Authorization', token);

//     const obj = Object.fromEntries(formData)
    
//     // verifico se tem a propriedade telefones no objeto, se existir quer dizer que tem telefones enviados 
//     if('telefones' in obj) {
//         // converto telefones para array usando o JSON.parse, porque nesse momento ele é string
//         obj.telefones = JSON.parse(obj.telefones)
//     }
    
//     // verifico se tem a propriedade endereco no objeto, se existir quer dizer que tem endereco enviado
//     if('endereco' in obj) {
//         // converto endereco para array usando o JSON.parse, porque nesse momento ele é string
//          obj.endereco = JSON.parse(obj.endereco)
//     }

//     // converto o objeto todo em string
//     const body = JSON.stringify(obj)

//     const response = await fetch(baseUrl + 'contact', { headers, body, method: "POST" })
//     return await response.json()
// }

const baseUrl = 'http://localhost:5000/v1/'
//const token = sessionStorage.getItem("@token")


//headers.delete('Authorization');


export const ContactGet = async () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const token = await sessionStorage.getItem ("@token");
    headers.append('Authorization', token);

    const response = await fetch(baseUrl + 'contact', { headers, method: "GET" })
    return await response.json()
}

export const ContactGetByID = async (id) =>
{     
    const token = sessionStorage.getItem('@token');   

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');   
    headers.append('Authorization', token);

    const response = await fetch(`${baseUrl}contact/${id}`, { headers, method: "GET" });
    const json = await response.json();

    if (response.status !== 200) return;

    console.log(json);

    return json;
}

export const ContactPost = async (formData) => {
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const token = await sessionStorage.getItem ("@token");
    headers.append('Authorization', token);

    const obj = Object.fromEntries(formData)
    
    // verifico se tem a propriedade telefones no objeto, se existir quer dizer que tem telefones enviados 
    if('telefones' in obj) {
        // converto telefones para array usando o JSON.parse, porque nesse momento ele é string
        obj.telefones = JSON.parse(obj.telefones)
    }
    
    // verifico se tem a propriedade endereco no objeto, se existir quer dizer que tem endereco enviado
    if('endereco' in obj) {
        // converto endereco para array usando o JSON.parse, porque nesse momento ele é string
         obj.endereco = JSON.parse(obj.endereco)
    }

    // converto o objeto todo em string
    const body = JSON.stringify(obj)

    const response = await fetch(baseUrl + 'contact', { headers, body, method: "POST" })
    return await response.json()
}
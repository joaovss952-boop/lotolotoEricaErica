let form = document.getElementById("formulario");

let fila_de_espera = [];

let resutado_espera = document.getElementById("resultado_espera");

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let prefer = document.querySelector('input[name="prefer"]:checked').value;

    adicionar(nome, prefer);
    console.log(fila_de_espera);

});

function adicionar(nome_parametro, radio_parametro){
    if(radio_parametro === "preferencial"){
        fila_de_espera.unshift(nome_parametro)
    }else{
        fila_de_espera.push(nome_parametro)
    };


    console.log(nome_parametro)

};

function listar(){
    resutado_espera.innerHTML = "";
    for(let i = 0; i < fila_de_espera.length; i++){
        resutado_espera.innerHTML +=
        `Índice: ${i} - Cliente: ${fila_de_espera[i]}
        <input 
        type="button"
        id="id_delet"
        onclick="delet(${i})"
        value="deletar">
        
        <input 
        type="button"
        id="id_edit"
        onclick="edit(${i})"
        value="editar">
        <br/>`;
    };
        
};

function atender(){
    fila_de_espera.shift();
    listar();
};

function delet(indice){
    console.log(indice);
    fila_de_espera.splice(indice, 1);
    listar();
};

function edit(indice){
    console.log(indice);
    fila_de_espera[indice] = prompt("Digite o nome: ");
    listar();
};

id_edit.addEventListener("click", (evento)=>{
    evento.preventDefault();

    edit();
});

id_delet.addEventListener("click", (evento)=>{
    evento.preventDefault();

    delet();
})

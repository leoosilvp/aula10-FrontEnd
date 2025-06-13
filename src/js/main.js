//declarando variaveis

let tarefas = [];

//função validar campo

const validarCampo = () => {
    let valida = false;
    if (document.getElementById("task").value == "") valida = true;
    return valida;
}

//finção add tarefa

function adicionarTarefa() {
    let linha = document.getElementById("task")

    if (validarCampo()) {
        //alert("Preencha o Campo Tarefa!")
        Swal.fire({
            icon: "warning",
            iconColor: "#ffe600",
            color: "black",
            title: "Atenção",
            text: "Preencha o campo Tarefa!",
            confirmButtonColor: "black",
            confirmButton: "Ok",
        })
    } else {
        tarefas.push(linha.value)
        linha.value = "";
        listarTarefas();
        Swal.fire({
            icon: "success",
            iconColor: "#00c200",
            showConfirmButton: false,
            timer: 1000
        })
    }

    for (let i = 0; i < tarefas.length; i++) {
        //limita
        if (i >= 8) {
            Swal.fire({
                icon: "warning",
                iconColor: "#ffe600",
                color: "black",
                title: "Atenção",
                text: "Lista cheia!",
                confirmButtonColor: "black",
                confirmButton: "Ok",
            })
        }
    }




}

// listar Tarfeas

function listarTarefas() {
    let valor = "";
    for (let i = 0; i < tarefas.length; i++) {
        valor += "<p>" + i + "- " + tarefas[i] + "</p>";
    }
    document.getElementById("lista").innerHTML = valor;
}

//remover tarefa

function removerTarefa() {
    Swal.fire({
        icon: "warning",
        iconColor: "#ffe600",
        color: "black",
        title: "Atenção",
        text: "Tem certeza que deseja apagar?",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#000",
        confirmButtonText: "SIM!",
        cancelButtonText: "NÃO!"
    }).then((result) => {
        if (result.isConfirmed) {
            tarefas.pop();
            listarTarefas();
            Swal.fire({
                icon: "success",
                iconColor: "#00c200",
                showConfirmButton: false,
                timer: 1000
            })
        }
    })
}


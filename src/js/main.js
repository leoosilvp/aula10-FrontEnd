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
            tittle: "Atenção",
            text: "Preencha o campo tarefa!",
            confirmButtonCollor: "#1e3e2e",
            confirmButton: "Ok",
        })
    } else {
        tarefas.push(linha.value)
        linha.value = "";
        listarTarefas();
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 1000
        })
    }
}

// listar Tarfeas

function listarTarefas() {
    let valor = "";
    for (let i = 0; i < tarefas.length; i++) {
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML = valor;
}

//remover tarefa

function removerTarefa() {
    Swal.fire({
        icon: "warning",
        title: "tem certeza que deseja apagar?",
        text: "sua tarefa será apagada!",
        showCancelButton: "#1e3e2e",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Apagar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            tarefas.pop();
            listarTarefas();
            Swal.fire(
                "Apagado",
                "A tarefe foi apagada da lista",
                "success",
            )
        }
    })
}
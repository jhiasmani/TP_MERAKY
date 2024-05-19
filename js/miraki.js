const formCarga = document.getElementById("form-cargar")

function RecibirConsulta(e){
    //cancelamos el evento por default
    e.preventDefault()
    //leer datos del form
    let cNombre = document.getElementById("nombre").value
    let cCelular = document.getElementById("celular").value
    let cEmail = document.getElementById("email").value
    let cCliente = document.getElementById("cliente").value
    let cConsulta = document.getElementById("consulta").value
    document.write
    respuesta.innerHTML+=`
        <div >
            <div >
                <span>Recibimos tu consulta</span>
                <span>Gracias</span>
                <h3> ${cNombre} !!!
                </h3>
            </div>
            
        </div>
        `
    }
    formCarga.addEventListener("submit",RecibirConsulta)   

    const formCompras = document.getElementById("procesar_compra")

        
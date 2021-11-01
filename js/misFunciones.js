$(document).ready(function () {

    //instrucciones que se ejecutan cuando carga la página!
});

function traerInformacionTipos() {
    $.ajax({
        url: "http://168.138.151.158:8080/api/Category/all",
        // url:"http://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaTipos(respuesta);

        }
    });
}

function pintarRespuestaTipos(respuesta) {

    let myTable = "";
    for (i = 0; i < respuesta.length; i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${respuesta[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].description}</h6>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick=' actualizarTipos(${respuesta[i].id})'>Actualizar</button>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick='borrarTipos(${respuesta[i].id})'>Borrar</button>
        </div>
        </div>    
        `
    }
    $("#category").html(myTable);
}



function guardarInformacionTipos() {
    let var2 = {
        name: $("#Tname").val(),
        description: $("#Tdescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://168.138.151.158:8080/api/Category/save",
        // url:"http://localhost:8080/api/Category/save",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");

        }
    });

}
//----------FUNCIONES ACTUALIZAR / BORRAR TIPOS-----------------------------------------------

function actualizarTipos(idElemento) {
    let myData = {
        id: idElemento,
        name: $("#Tname").val(),
        description: $("#Tdescription").val(),
    };


    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Category/update",
        // url: "http://localhost:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#Tname").val("");
            $("#Tdescription").val("");
            traerInformacionTipos();
            alert("se ha Actualizado correctamente la categoria");

        },
    });
}

function borrarTipos(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Category/" + idElemento,
        // url: "http://localhost:8080/api/Category/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionTipos();
            alert("Se ha Eliminado.");

        },
    });
}
//----------------------------------------------------------------


///////////////////Auditorios//////////////////////////////////////
function traerInformacionAuditorios() {
    $.ajax({
        url: "http://168.138.151.158:8080/api/Audience/all",
        // url: "http://localhost:8080/api/Audience/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaAuditorios(respuesta);
        }
    });
}

function pintarRespuestaAuditorios(respuesta) {

    let myTable = "";
    for (i = 0; i < respuesta.length; i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h7 class="card-title">${respuesta[i].owner}</h7>
            <h7 class="card-title">${respuesta[i].capacity}</h7>
            <h7 class="card-title">${respuesta[i].name}</h7>
            <h8 class="card-subtitle mb-2 text-muted">${respuesta[i].description}</h8>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick=' actualizarAuditorios(${respuesta[i].id})'>Actualizar</button>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick='borrarAuditorios(${respuesta[i].id})'>Borrar</button>
        </div>
        </div>    
        `
    }
    $("#audience").html(myTable);
}


function guardarInformacionAuditorios() {
    let var3 = {
        owner: $("#Aowner").val(),
        capacity: $("#Acapacity").val(),
        name: $("#Aname").val(),
        description: $("#Adescription").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),

        url: "http://168.138.151.158:8080/api/Audience/save",
        // url: "http://localhost:8080/api/Audience/save",



        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}

//----------FUNCIONES ACTUALIZAR / BORRAR AUDITORIOS-----------------------------------------------

function actualizarAuditorios(idElemento) {
    let myData = {
        id: idElemento,
        owner: $("#Aowner").val(),
        capacity: $("#Acapacity").val(),
        name: $("#Aname").val(),
        description: $("#Adescription").val(),
    };

    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Audience/update",
        // url: "http://localhost:8080/api/Audience/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#Aowner").val(),
                $("#Acapacity").val(),
                $("#Aname").val("");
            $("#Adescription").val("");
            traerInformacionAuditorios();
            alert("se ha Actualizado correctamente el auditorio");
        },
    });
}

function borrarAuditorios(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Audience/" + idElemento,
        // url: "http://localhost:8080/api/Audience/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionAuditorios();
            alert("Se ha Eliminado.");
        },
    });
}
//----------------------------------------------------------------


//////////////////////Clientes//////////////////////////////////
function traerInformacionClientes() {
    $.ajax({
        url: "http://168.138.151.158:8080/api/Client/all",
        // url: "http://localhost:8080/api/Client/all",

        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta) {


    let myTable = "";
    for (i = 0; i < respuesta.length; i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h6 class="card-title">${respuesta[i].email}</h6>
            <h8 class="card-title">${respuesta[i].password}</h8>
            <h6 class="card-title">${respuesta[i].name}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].age}</h6>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick=' actualizarClientes(${respuesta[i].idClient})'>Actualizar</button>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick='borrarClientes(${respuesta[i].idClient})'>Borrar</button>
        </div>
        </div>    
        `
    }
    $("#client").html(myTable);
}


function guardarInformacionClientes() {
    let var4 = {
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),

        url: "http://168.138.151.158:8080/api/Client/save",
        // url: "http://localhost:8080/api/Client/save",



        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}

//----------FUNCIONES ACTUALIZAR / BORRAR CLIENTES-----------------------------------------------

function actualizarClientes(idElemento) {
    let myData = {
        idClient: idElemento,
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val(),
    };


    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Client/update",
        // url: "http://localhost:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#CLemail").val(""),
                $("#CLpassword").val(""),
                $("#CLname").val(""),
                $("#CLage").val(""),
                traerInformacionClientes();
            alert("se ha Actualizado correctamente el cliente");
        },
    });
}

function borrarClientes(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Client/" + idElemento,
        // url: "http://localhost:8080/api/Client/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado.");
        },
    });
}
//----------------------------------------------------------------


//////////////////////Mensajes//////////////////////////////////
function traerInformacionMensajes() {
    $.ajax({
        url: "http://168.138.151.158:8080/api/Message/all",
        // url: "http://localhost:8080/api/Message/all",

        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta) {

    let myTable = "";
    for (i = 0; i < respuesta.length; i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${respuesta[i].idMessage}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].messageText}</h6>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick=' actualizarMensajes(${respuesta[i].id})'>Actualizar</button>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick='borrarMensajes(${respuesta[i].idMessage})'>Borrar</button>
        </div>
        </div>    
        `
    }
    $("#message").html(myTable);
}


function guardarInformacionMensajes() {
    let var4 = {
        idMessage: $("#mId").val(),
        messageText: $("#mText").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),

        url: "http://168.138.151.158:8080/api/Message/save",
        // url: "http://localhost:8080/api/Message/save",



        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}

//----------FUNCIONES ACTUALIZAR / BORRAR MENSAJES-----------------------------------------------

function actualizarMensajes(idElemento) {
    let myData = {
        id: idElemento,
        idMessage: $("#mId").val(),
        messageText: $("#mText").val(),
    };


    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Message/update",
        // url: "http://localhost:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#mId").val(),
                $("#mText").val(),
                traerInformacionMensajes();
            alert("se ha Actualizado correctamente el mensaje");
        },
    });
}

function borrarMensajes(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Message/" + idElemento,
        // url: "http://localhost:8080/api/Message/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado.");
        },
    });
}
//----------------------------------------------------------------


//////////////////////Reservas//////////////////////////////////
function traerInformacionReservas() {
    $.ajax({
        url: "http://168.138.151.158:8080/api/Reservation/all",
        // url: "http://localhost:8080/api/Reservation/all",

        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaReservas(respuesta);
        }
    });
}

function pintarRespuestaReservas(respuesta) {


    let myTable = "";
    for (i = 0; i < respuesta.length; i++) {
        myTable += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${respuesta[i].idReservation}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].startDate}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].devolutionDate}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].status}</h6>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick=' actualizarReservas(${respuesta[i].id})'>Actualizar</button>
            <button class="btn btn-primary mb-xl-1 mr-1 mt-2" style="background-color:rgb(116, 50, 50);" onclick='borrarReservas(${respuesta[i].idReservation})'>Borrar</button>
        </div>
        </div>    
        `
    }
    $("#reservation").html(myTable);
}

function guardarInformacionReservas() {
    let var4 = {
        idReservation: $("#rId").val(),
        startDate: $("#rStartDate").val(),
        devolutionDate: $("#rDevolutionDate").val(),
        status: $("#rStatus").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),

        url: "http://168.138.151.158:8080/api/Reservation/save",
        // url: "http://localhost:8080/api/Reservation/save",



        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}
//----------FUNCIONES ACTUALIZAR / BORRAR RESERVAS-----------------------------------------------

function actualizarReservas(idElemento) {
    let myData = {
        id: idElemento,
        idReservation: $("#rId").val(),
        startDate: $("#rStartDate").val(),
        devolutionDate: $("#rDevolutionDate").val(),
        status: $("#rStatus").val(),
    };


    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Reservation/update",
        // url: "http://localhost:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#rId").val(""),
                $("#rStartDate").val(""),
                $("#rDevolutionDate").val(""),
                $("#rStatus").val(""),
                traerInformacionReservas();
            alert("se ha Actualizado correctamente la reservación");
        },
    });
}

function borrarReservas(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://168.138.151.158:8080/api/Reservation/" + idElemento,
        // url: "http://localhost:8080/api/Reservation/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionReservas();
            alert("Se ha Eliminado.");
        },
    });
}

//----------------------------------------------------------------//----------------------------------------------------------------

//---------------------REPORTES-------------------------------------------
function traerReporteStatus() {
    console.log("test");
    $.ajax({
        url:"http://168.138.151.158:8080/api/Reservation/report-status",
        // url: "http://localhost:8080/api/Reservation/report-status",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta) {

    let myTable = "<table class='table table-hover'>";
    myTable += "<tr>";
    myTable += "<th>completadas</th>";
    myTable += "<td>" + respuesta.completed + "</td>";
    myTable += "<th>canceladas</th>";
    myTable += "<td>" + respuesta.cancelled + "</td>";
    myTable += "</tr>";
    myTable += "</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteDate() {

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);

    $.ajax({
        url:"http://168.138.151.158:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        // url: "http://localhost:8080/api/Reservation/report-dates/" + fechaInicio + "/" + fechaCierre,
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta) {

    let myTable = "<table class='table table-hover'>";
    myTable += "<tr>";

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<th>total</th>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";


        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoDate").html(myTable);
}


function traerReporteClientes() {
    $.ajax({
        url:"http://168.138.151.158:8080/api/Reservation/report-clients",
        // url: "http://localhost:8080/api/Reservation/report-clients",

        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaRClientes(respuesta);
        }
    });
}
function pintarRespuestaRClientes(respuesta) {

    let myTable = "<table class='table table-hover'>";
    myTable += "<tr>";

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<th>total</th>";
        myTable += "<td>" + respuesta[i].total + "</td>";
        myTable += "<td>" + respuesta[i].client.name + "</td>";
        myTable += "<td>" + respuesta[i].client.email + "</td>";
        myTable += "<td>" + respuesta[i].client.age + "</td>";

        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoClientes").html(myTable);
}
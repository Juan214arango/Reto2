function traerInformacion(){
    $.ajax({
        url:'https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm',
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuesta(respuesta.items);
        }
    });
}

function pintarRespuesta(items){
    let myTable = "<table>";
    for(i=0;i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable += "<td>"+items[i].address+"</td>";
        myTable += "<td>"+items[i].exension+"</td>";
        myTable += "<td>"+items[i].category+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    
    let myData= {
        id: $("#id").val(),
        name: $("#name").val(),
        address: $("#address").val(),
        exension: $("#exension").val(),
        category_id:$("#category").val()
    };
    let dataToSend = JSON.stringify(myData);
    //console.log(dataToSend);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"POST",
        data: myData,
        dataType:"json",
        complete:function(respuesta){
           
            $("#resultado").empty();

            $("#id").val("");
            $("#name").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category").val("");
            traerInformacion();
            console.log("Guardado!");

        }
    });
}

function editarInformacion(){
    let myData={
        id: $("#id").val(),
        name: $("#name").val(),
        address: $("#address").val(),
        exension: $("#exension").val(),
        category_id:$("#category").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val(),
            $("#name").val(),
            $("#address").val(),
            $("#exension").val(),
            $("#category").val()
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}





function traerInformacion2(){
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta2(respuesta.items);
        }

    });
}

function pintarRespuesta2(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion2(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion2(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento2(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}




function traerInformacion3(){
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta3(respuesta.items);
        }

    });
}

function pintarRespuesta3(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion3(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val(),
            traerInformacion3();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion3(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacion3();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento3(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g9dab34276fc7d6-db202109232039.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion3();
            alert("Se ha Eliminado.")
        }
    });
}


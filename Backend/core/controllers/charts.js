$(document).ready(function(){
    graficoUsuarios();
    graficoGenero();
    graficoReligion();
    graficoAcademico();
    graficoServicio();
    graficoDepartamento();        
})

const apiGraficos = '../../appRH/Backend/core/api/graficos.php?action=';
const tablaDepartamento = '../../appRH/Backend/core/api/Departamento.php?action=read';//tabla padre que necesiten para hacer hacer el grafico con parametros

//Para llenar el ComboBox   Id del combobox
fillSelect(tablaDepartamento, 'Departamento', null);

function graficoUsuarios()
{
    $.ajax({
        url: apiGraficos + 'usuarios',
        type: 'post',
        data: null,
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
            if (!result.status) {
                sweetAlert(4, result.exception, null);
            }

                let Usuario = [];
                let Tipos = [];
                
                result.dataset.forEach(fila => {
                    Usuario.push(fila.Usuario);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                    Tipos.push(fila.Tipos);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                });

            //grafico1 es el ID de la etiqueta canvas en html
            barGraph('grafico1', Tipos, Usuario, 'Cantidad de usuarios', 'Grafico', 'bar');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
            
        } else {
            console.log(response);
        }
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });       

}

function graficoGenero()
{
    $.ajax({
        url: apiGraficos + 'genero',
        type: 'post',
        data: null,
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
            if (!result.status) {
                sweetAlert(4, result.exception, null);
            }

                let Colaborador = [];
                let Genero = [];
                
                result.dataset.forEach(fila => {
                    var porcentaje = (fila.Colaborador * 100) / fila.Total;//esta fi;a no la usen para otros
                    Colaborador.push(fila.Colaborador);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                    Genero.push(fila.Genero);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                });

            //grafico1 es el ID de la etiqueta canvas en html
            barGraph('genero-colaboradores', Genero, Colaborador, 'Cantidad de Colaboradores', 'Grafico', 'doughnut');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
            
        } else {
            console.log(response);
        }
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });       

}

function graficoReligion()
{
    $.ajax({
        url: apiGraficos + 'religion',
        type: 'post',
        data: null,
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
            if (!result.status) {
                sweetAlert(4, result.exception, null);
            }

                let Colaboradores = [];
                let Religion = [];
                
                result.dataset.forEach(fila => {
                    Colaboradores.push(fila.Colaborador);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                    Religion.push(fila.Religion);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                });

            //grafico1 es el ID de la etiqueta canvas en html
            barGraph('religion-colaboradores', Religion, Colaboradores, 'Cantidad de Colaboradores', 'Grafico', 'bar');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
            
        } else {
            console.log(response);
        }
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });       

}

function graficoAcademico()
{
    $.ajax({
        url: apiGraficos + 'academico',
        type: 'post',
        data: null,
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
            if (!result.status) {
                sweetAlert(4, result.exception, null);
            }

                let Colaboradores = [];
                let Nivel_academico = [];
                
                result.dataset.forEach(fila => {
                    Colaboradores.push(fila.Colaborador);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                    Nivel_academico.push(fila.Categoria);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                });

            //grafico1 es el ID de la etiqueta canvas en html
            barGraph('academico-colaboradores', Nivel_academico, Colaboradores, 'Cantidad de titulos', 'Grafico', 'bar');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
            
        } else {
            console.log(response);
        }
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });       

}

function graficoServicio()
{
    $.ajax({
        url: apiGraficos + 'colaboradorservicio',
        type: 'post',
        data: null,
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
            if (!result.status) {
                sweetAlert(4, result.exception, null);
            }

                let Colaboradores = [];
                let Area = [];
                
                result.dataset.forEach(fila => {
                    Colaboradores.push(fila.Colaborador);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                    Area.push(fila.Area);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                });

            //grafico1 es el ID de la etiqueta canvas en html
            barGraph('graficoservicio', Area, Colaboradores, 'Cantidad de Colaboradores', 'Grafico', 'pie');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
            
        } else {
            console.log(response);
        }
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });       

}

function graficoDepartamento()
{
    $.ajax({
        url: apiGraficos + 'colaboradorDepartamento',
        type: 'post',
        data: null,
        datatype: 'json'
    })
    .done(function(response){
        // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
        if (isJSONString(response)) {
            const result = JSON.parse(response);
            // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
            if (!result.status) {
                sweetAlert(4, result.exception, null);
            }

                let Colaboradores = [];
                let Departamento = [];
                
                result.dataset.forEach(fila => {
                    Colaboradores.push(fila.Colaborador);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                    Departamento.push(fila.Departamento);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                });

            //grafico1 es el ID de la etiqueta canvas en html
            barGraph('graficoDepartamento', Departamento, Colaboradores, 'Cantidad de Colaboradores', 'Grafico', 'bar');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
            
        } else {
            console.log(response);
        }
    })
    .fail(function(jqXHR){
        // Se muestran en consola los posibles errores de la solicitud AJAX
        console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
    });       

}
//Reporte con parametros
function graficoMunicipio()
{
    event.preventDefault();

$.ajax({
    url: apiGraficos + 'municipio', //CASEEEE!!!!
    type: 'post',
    data: new FormData($('#parametro-municipio')[0]),//Id del formulario
    datatype: 'json',
    cache: false,
    contentType: false,
    processData: false
})
.done(function(response){
    // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
    if (isJSONString(response)) {
        const result = JSON.parse(response);
        // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
        if (!result.status) {
            sweetAlert(4, result.exception, null);
        }

            let Colaborador = [];
            let Municipio = [];
            
            result.dataset.forEach(fila => {
                Colaborador.push(fila.Colaborador);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                Municipio.push(fila.municipio);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
            });

        //grafico1 es el ID de la etiqueta canvas en html
        barGraph('graficoMunicipio', Municipio, Colaborador, 'Cantidad de Colaboradores', 'Grafico', 'bar');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
        
    } else {
        console.log(response);
    }
})
.fail(function(jqXHR){
    // Se muestran en consola los posibles errores de la solicitud AJAX
    console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
});       

}

//.val() extrae el valor del input o select 
//Mandamos por get el parametro
function reporteMunicipio()
{
    window.open('../Backend/libraries/reportes/reportemunicipio.php?Id_departamento=' + $('#Departamento').val());
}

function reporteAreaGenero()
{
    window.open('../Backend/libraries/reportes/reporteAreaGenero.php?Genero=' + $('#Genero').val());
}



function graficoAreaGenero()
{
    event.preventDefault();

$.ajax({
    url: apiGraficos + 'genero', //CASEEEE!!!!
    type: 'post',
    data: new FormData($('#parametro-genero-salario')[0]),//Id del formulario
    datatype: 'json',
    cache: false,
    contentType: false,
    processData: false
})
.done(function(response){
    // Se verifica si la respuesta de la apiGraficos es una cadena JSON, sino se muestra el resultado en consola
    if (isJSONString(response)) {
        const result = JSON.parse(response);
        // Se comprueba si el resultado es satisfactorio, sino se muestra la excepción
        if (!result.status) {
            sweetAlert(4, result.exception, null);
        }          
            let Area = [];
            let Sueldo = [];
            
            result.dataset.forEach(fila => {
                Area.push(fila.Area);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
                Sueldo.push(fila.Sueldo);//fila.nombre_que_le pusieron_despues_del_AS_en_la_consulta
            });

        //grafico1 es el ID de la etiqueta canvas en html
        barGraph('grafico-genero-salario', Area, Sueldo, 'Cantidad de Colaboradores', 'Grafico', 'bar');//el ultimo parametro es el tipo de grafica bar para barras y pie para pastel y doughnut para circular
        
    } else {
        console.log(response);
    }
})
.fail(function(jqXHR){
    // Se muestran en consola los posibles errores de la solicitud AJAX
    console.log('Error: ' + jqXHR.status + ' ' + jqXHR.statusText);
});       

}
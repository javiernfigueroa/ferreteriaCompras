$(document).ready(function () {
  let stockClavos = $("#stockClavos").val();
  let stockPernos = $("#stockPernos").val();
  let stockTuercas = $("#stockTuercas").val();
  $("#miFormulario").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 3,
      },
      edad: {
        required: true,
        min: 18,
      },
      clavos: {
        required: true,
        max: stockClavos,
        min: 0,
      },
      pernos: {
        required: true,
        min: 0,
        max: stockPernos,
      },
      tuercas: {
        required: true,
        min: 0,
        max: stockTuercas,
      },
    },
    messages: {
      nombre: {
        required: "Por favor, ingrese su nombre",
        minlength: "El nombre debe tener al menos 3 caracteres",
      },
      edad: {
        required: "Por favor, ingrese su edad",
        min: "La edad mínima es de 18 años",
      },
      clavos: {
        required: "Por favor, ingrese cantidad",
        min: "Cantidad minima debe ser 0",
        max: "Cantidad maxima 200",
      },
      pernos: {
        required: "Por favor, ingrese cantidad",
        min: "Cantidad minima debe ser 0",
        max: "Cantidad maxima 150",
      },
      tuercas: {
        required: "Por favor, ingrese cantidad",
        min: "Cantidad minima debe ser 0",
        max: "Cantidad maxima 150",
      },
    },
  });

  $("#miFormulario").submit(function (event) {
    // prevenir el envío del formulario si los datos no son válidos
    if ($("#miFormulario").valid()) {
      event.preventDefault();
      const precioClavos = 50;
      const precioPernos = 150;
      const precioTuercas = 150;

      // obtener los valores de los campos nombre y edad
      let nombre = $("#nombre").val();
      let edad = $("#edad").val();
      // actualizar las celdas correspondientes en la tabla
      $("#th-nombre").text(nombre);
      $("#th-edad").text(edad);
      // obtener los valores de los campos clavos, pernos y tuercas
      let clavos = $("#clavos").val();
      let pernos = $("#pernos").val();
      let tuercas = $("#tuercas").val();
      // actualizar las celdas cantidad clavos. pernos y tuercas
      $("#cantidad-clavos").text(clavos);
      $("#cantidad-pernos").text(pernos);
      $("#cantidad-tuercas").text(tuercas);
      // actualiza el total de cada uno de los productos
      $("#total-clavos").text(clavos * precioClavos);
      $("#total-pernos").text(pernos * precioPernos);
      $("#total-tuercas").text(tuercas * precioTuercas);
      //
      let total =
        clavos * precioClavos + pernos * precioPernos + tuercas * precioTuercas;
      let cantTotal = Number(clavos) + Number(pernos) + Number(tuercas);
      $("#total-cantidad").text(cantTotal);
      $("#total-compra").text(total);
      $("#miFormulario")[0].reset();
    }
  });
});

/*funcion suma + resta + multiplicacion +  division + porcentaje*/
function script1() {
  /*Se solicita al usuario ingresar su nombre */
var nombre = prompt("Ingresa tu nombre");

/*se solicita al usuario que ingrese un numero mayor a 0*/
var num1 = prompt("Ingrese el primer número");
while (num1 < 1) {
  alert("ERROR: Intente insertar un numero mayor a 0");
  window.location.reload();
  reset();
}
/*Se solicita al usuario que ingrese un numero mayor a 0*/
var num2 = prompt("Ingrese el Segundo número");
while (num2 < 1) {
  alert("ERROR: Intente insertar un numero mayor a 0");
  window.location.reload();
  reset();
}
var suma = parseInt(num1) + parseInt(num2); /*Se ingresa la formula de suma*/
var resta = parseInt(num1) - parseInt(num2); /*Se ingresa la formula de resta*/
var multiplica = parseInt(num1) * parseInt(num2); /*Se ingresa la formula de multiplicacion*/
var divide = parseInt(num1) / parseInt(num2); /*Se ingresa la formula de división*/
var divfix = (divide.toFixed(2)); /*Se limita a (2) Decimales*/
var resto = parseInt(num1) % parseInt(num2); /*Se ingresa la formula resto de la división*/

Swal.fire({
  title: '<strong>' + nombre + '</strong>',
  icon: 'success',
  html: 'El resultado de sumar <b>' + suma + '</b> <br>' + /*Se entrega respuesta de la suma*/
    'El resultado de restar <b>' + resta + '</b> <br>' + /*Se entrega respuesta de la resta*/
    'El resultado de multiplicar <b>' + multiplica + '</b> <br>' + /*Se entrega respuesta de la multiplicacion*/
    'El resultado de dividir <b>' + divfix + '</b> <br>' + /*Se entrega respuesta de la división*/
    'El resultado de porcentaje <b>' + resto + '</b> <br>',
  /*Se entrega respuesta de la división*/
  showCloseButton: true,
  focusConfirm: false,
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial',
  confirmButtonAriaLabel: 'Thumbs up, genial!'

}).then((result) => {
  /* Recargamos la web al obtener los resultados*/  if (result.isConfirmed) {
    window.location.reload();
    reset();
  }
})

}


  /* Funcion convertir grados*/

  function temperatura() {
    /*Se solicita al usuario ingresar su nombre */
  var nombre = prompt("Ingresa tu nombre");/*se solicita el nombre al usuario*/

  /*se solicita al usuario que ingrese un numero mayor a 0*/
  var Celsius = prompt("Ingrese una temperatura en °C"); /*se solicita al usuario que ingrese una temperatura en grados celcius*/
  while (Celsius < 1) {
    alert("ERROR: Intente insertar un numero mayor a 0");
    window.location.reload();
    reset();
  }


  var Farenheit = parseFloat((Celsius*9/5)+32)
  var Kelvin = parseFloat(+Celsius+ 273.15)



  Swal.fire({
    title: '<strong>' + nombre + '</strong>',
    icon: 'success',
    html: 'En Celcius <b>'+ Celsius +' °C</b> en Farenheit <b>'+Farenheit+' °F. </b><br>' +
      'En Celcius <b>'+ Celsius +' °C</b> en Kelvin <b> '+Kelvin+' °K.</b> <br>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial',
    confirmButtonAriaLabel: 'Thumbs up, genial!'

  }).then((result) => {
    /* Recargamos la web al obtener los resultados*/  if (result.isConfirmed) {
      window.location.reload();
      reset();
    }
  })

  }



  /* Funcion contar Dias*/

  function Dias() {
    /*Se solicita al usuario ingresar su nombre */
  var nombre = prompt("Ingresa tu nombre");

  /*se solicita al usuario que ingrese una cantidad de días*/
  var inicio = prompt("Ingrese una cantidad de días");

  /*se solicita al usuario que ingrese un numero mayor a 0*/
  while (inicio < 1) {
    alert("ERROR: Intente insertar un numero mayor a 0");
    window.location.reload();
    reset();
  }


  var Anio = parseInt(inicio/365);/*calculo de un año a partir de los días ingresados*/
  var Semana = parseInt((inicio%365)/7);/*calculo de una semana a partir del resto de la división anterior*/
  var Dias = parseInt(Semana%7);/*calculo de días a partir del resto de la división anterior*/



  Swal.fire({
    title: '<strong>' + nombre + '</strong>',
    icon: 'success',
    html: '<b>'+inicio+'</b> Dia(s) equivalen a <b>'+Anio+'</b> Año(s)<br>' +
      '<b>'+Semana+'</b> Semana(s)<br>'+
      '<b>'+Dias+'</b> Días(s)<br>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial',
    confirmButtonAriaLabel: 'Thumbs up, genial!'

  }).then((result) => {
    /* Recargamos la web al obtener los resultados*/  if (result.isConfirmed) {
      window.location.reload();
      reset();
    }
  })

  }

  /* Funcion suma + promedio*/

  function promedio() {
    /*Se solicita al usuario ingresar su nombre */
  var nombre = prompt("Ingresa tu nombre");

   alert('Ahora debera ingresar un numero a eleccion en 5 oportunidades');

   /*se solicita al usuario que ingrese un número*/
   var num1 = prompt("Ingrese número");
   /*se solicita al usuario que ingrese un numero mayor a 0*/
  while (num1 < 1) {
    alert("ERROR: Intente insertar un numero mayor a 0");
    window.location.reload();
    reset();
  }

  /*se solicita al usuario que ingrese un número*/
  var num2 = prompt("Ingrese un número");
  /*se solicita al usuario que ingrese un numero mayor a 0*/
 while (num2 < 1) {
   alert("ERROR: Intente insertar un numero mayor a 0");
   window.location.reload();
   reset();
 }

 /*se solicita al usuario que ingrese un número*/
 var num3 = prompt("Ingrese un número");
 /*se solicita al usuario que ingrese un numero mayor a 0*/
while (num3 < 1) {
  alert("ERROR: Intente insertar un numero mayor a 0");
  window.location.reload();
  reset();
}

/*se solicita al usuario que ingrese un número*/
var num4 = prompt("Ingrese un número");
/*se solicita al usuario que ingrese un numero mayor a 0*/
while (num4 < 1) {
 alert("ERROR: Intente insertar un numero mayor a 0");
 window.location.reload();
 reset();
}

/*se solicita al usuario que ingrese un número*/
var num5 = prompt("Ingrese un número");
/*se solicita al usuario que ingrese un numero mayor a 0*/
while (num5 < 1) {
 alert("ERROR: Intente insertar un numero mayor a 0");
 window.location.reload();
 reset();
}

var num1 = parseInt(num1);/*se convierte el string a numero entero*/
var num2 = parseInt(num2);/*se convierte el string a numero entero*/
var num3 = parseInt(num3);/*se convierte el string a numero entero*/
var num4 = parseInt(num4);/*se convierte el string a numero entero*/
var num5 = parseInt(num5);/*se convierte el string a numero entero*/
var suma = parseInt(num1+num2+num3+num4+num5);/*se suman los numeros enteros ingresados*/
var promedio = parseInt(suma/5);/*se calcula el promedio de los 5 digitos ingresados*/

/*se entrega la respuesta matemática a las 2 operaciones realizadas*/
  Swal.fire({
    title: '<strong>' + nombre + '</strong>',
    icon: 'success',
    html: 'La suma de todos los numeros ingresados es = <b>'+suma+'</b><br>' +
      'El promedio de todos los numero ingresados es = <b>'+promedio+'</b>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial',
    confirmButtonAriaLabel: 'Thumbs up, genial!'

  }).then((result) => {
    /* Recargamos la web al obtener los resultados*/  if (result.isConfirmed) {
      window.location.reload();
      reset();
    }
  })

  }

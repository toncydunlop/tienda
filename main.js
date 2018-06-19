// validar el localStorage
validStorage();

// llamar a los inputs

var btn = document.getElementById('add');
var nombre = document.getElementById('name');
var desc =  document.getElementById('desc');
var img =  document.getElementById('img');
var price =  document.getElementById('price');

// creamos el evento click del boton

btn.addEventListener('click', function(){
    nuevoProducto(nombre.value,desc.value,img.value,price.value);
    alert('Todo en orden, capitán. Tu nuevo producto ' + nombre.value + ' se ha creado con éxito');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    price.value = '';
})
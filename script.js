document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Obtener valores del formulario
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    // Crear un nuevo elemento de lista con los datos ingresados
    var listItem = document.createElement('div');
    listItem.textContent = name + ', ' + age + ' años';

    // Agregar el elemento de lista a la lista de personas
    document.getElementById('personList').appendChild(listItem);

    // Limpiar los campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
});

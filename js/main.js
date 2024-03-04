function darBienvenida(){
    let nombre = prompt ("Bievenido a Delivertido ¿Cual es su nombre?")
    if(nombre !== null && nombre !== ""){
        alert("Hola " + nombre + " Bienvenido")
    
    } else {
        alert("Algo funciono mal. Vuelve a intentarlo");
        return darBienvenida();
    }

}

darBienvenida()

function darDireccion(){
    let direccion = prompt ("¿Cual es su direccion?")
    if(direccion !== null && direccion !== ""){
        alert("Encontramos su direccion!");
    
    } else {
        alert("Algo funciono mal. Vuelve a intentarlo");
        return darDireccion();
    }

}

darDireccion()

class Pedido {
    constructor() {
        this.comida = "";
        this.bebida = ""
        this.precioTotal = 0;
    }
}

let pastasMenu = [
    { nombre: "Penne Rigate", precio: 1200 },
    { nombre: "Tagliatonne", precio: 1600 },
    { nombre: "Ravioles", precio: 2000 },
    { nombre: "Canelones", precio: 2500 }
];

let pizzaMenu = [
    { nombre: "Muzzarela", precio: 3000 },
    { nombre: "Napolitana", precio: 3100 },
    { nombre: "Parmesano", precio: 3600 },
    { nombre: "Rucula", precio: 3100 }
];

let hamburguesaMenu = [
    { nombre: "Onion Cheese", precio: 4200 },
    { nombre: "Monstruosa", precio: 7200 },
    { nombre: "Triple Cheese", precio: 4600 },
    { nombre: "Paro cardiaco", precio: 5500 }
];

let carneMenu = [
    { nombre: "Asado", precio: 4000 },
    { nombre: "Chinchulines", precio: 1500 },
    { nombre: "Choripan", precio: 2300 },
    { nombre: "Matambre a la pizza", precio: 5000 }
];

let bebidasMenu = [
    { nombre: "Coca-Cola", precio: 1100 },
    { nombre: "Pepsi", precio: 100 },
    { nombre: "7-Up", precio: 1100 },
    { nombre: "Sprite", precio: 1000 }
];

function mostrarMenu() {
    let pedido = new Pedido(); 
    let menu = true;
    while (menu) {
        let mensaje = "¿Qué te gustaría comer?";
        mensaje += "\n1) Pastas";
        mensaje += "\n2) Pizza";
        mensaje += "\n3) Hamburguesa";
        mensaje += "\n4) Carne a la parrilla";
        mensaje += "\n5) Hacer pedido (Seleccionar cuando termines de ordenar)";

        let respuesta = prompt(mensaje);
        switch (respuesta) {
            case "1":
                pedido.comida = elegirPastas();
                pedido.bebida = elegirBebidas();
                pedido.precioTotal= pedido.comida.precio + pedido.bebida.precio
                break;
            case "2":
                pedido.comida = elegirPizza();
                pedido.bebida = elegirBebidas();
                pedido.precioTotal= pedido.comida.precio + pedido.bebida.precio
                break;
            case "3":
                pedido.comida = elegirHamburguesas();
                pedido.bebida = elegirBebidas();
                pedido.precioTotal= pedido.comida.precio + pedido.bebida.precio
                break;
            case "4":
                pedido.comida = elegirCarnes();
                pedido.bebida = elegirBebidas();
                pedido.precioTotal= pedido.comida.precio + pedido.bebida.precio
                break;
            case "5":
                alert(" - Su comida es: " + pedido.comida.nombre +
                    "\n - Su bebida es: " + pedido.bebida.nombre +
                    "\n - El costo es de: " + pedido.precioTotal);
                alert("¡Tu pedido será enviado en breve!");
                menu = false;
                break;
            default:
                alert("Ingrese una opción válida");
        }
    }
}

mostrarMenu();

function elegirPastas() {
    let mensaje = "Elige una opcion de pastas: \n";
    for (let i = 0; i < pastasMenu.length; i++) {
        mensaje += (i + 1) + ") " + pastasMenu[i].nombre + " - $" + pastasMenu[i].precio + "\n";
    }
    let respuesta = prompt(mensaje);
    let index = parseInt(respuesta) - 1;
    if (index >= 0 && index <= pastasMenu.length) {
        return pastasMenu[index];
    } else {
        alert("Opcion no valida");
        return elegirPastas();
    }
}

function elegirPizza() {
    let mensaje = "Elige una opcion de pizzas: \n";
    for (let i = 0; i < pizzaMenu.length; i++) {
        mensaje += (i + 1) + ") " + pizzaMenu[i].nombre + " - $" + pizzaMenu[i].precio + "\n";
    }
    let respuesta = prompt(mensaje);
    let index = parseInt(respuesta) - 1;
    if (index >= 0 && index <= pizzaMenu.length) {
        return pizzaMenu[index];
    } else {
        alert("Opcion no valida");
        return elegirPizza();
    }
}

function elegirHamburguesas() {
    let mensaje = "Elige una opcion de Hamburguesas: \n";
    for (let i = 0; i < hamburguesaMenu.length; i++) {
        mensaje += (i + 1) + ") " + hamburguesaMenu[i].nombre + " - $" + hamburguesaMenu[i].precio + "\n";
    }
    let respuesta = prompt(mensaje);
    let index = parseInt(respuesta) - 1;
    if (index >= 0 && index <= hamburguesaMenu.length) {
        return hamburguesaMenu[index];
    } else {
        alert("Opcion no valida");
        return elegirHamburguesas();
    }
}

function elegirCarnes() {
    let mensaje = "Elige una opcion de pastas: \n";
    for (let i = 0; i < carneMenu.length; i++) {
        mensaje += (i + 1) + ") " + carneMenu[i].nombre + " - $" + carneMenu[i].precio + "\n";
    }
    let respuesta = prompt(mensaje);
    let index = parseInt(respuesta) - 1;
    if (index >= 0 && index <= carneMenu.length) {
        return carneMenu[index];
    } else {
        alert("Opcion no valida");
        return elegirCarnes();
    }
}

function elegirBebidas() {
    let mensaje = "Elige una opcion de pastas: \n";
    for (let i = 0; i < bebidasMenu.length; i++) {
        mensaje += (i + 1) + ") " + bebidasMenu[i].nombre + " - $" + bebidasMenu[i].precio + "\n";
    }
    let respuesta = prompt(mensaje);
    let index = parseInt(respuesta) - 1;
    if (index >= 0 && index <= bebidasMenu.length) {
        return bebidasMenu[index];
    } else {
        alert("Opcion no valida");
        return elegirBebidas();
    }
}
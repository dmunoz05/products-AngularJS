var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/carrito", {
      templateUrl: "/carrito.html",
      controller: "controlador"
    })
    .when("/productos", {
      templateUrl: "/productos.html",
      controller: "controlador"
    })
})

app.controller("controlador", ControllerFunction)

function ControllerFunction($scope) {
  var lista = $scope;
  var n = 2;
  var nCarrito = 1;

  lista.nombreApp = "Products with AngularJS";

  lista.productos = [
    { id: 1, nombre: "Coca Cola", precio: 150, total: 24 },
    { id: 2, nombre: "Pepsi", precio: 120, total: 25 },
    { id: 3, nombre: "Fanta", precio: 130, total: 26 },
    { id: 4, nombre: "Sprite", precio: 140, total: 27 },
  ];

  lista.carrito = [];

  lista.addProduct = function () {
    var nombre = lista.nombre;
    var precio = lista.precio;

    if(nombre != "" && precio !== "" && !isNaN(precio)){
      n++;
      lista.productos.push({ id: n, nombre: nombre, precio: precio, total: n });
      lista.nombre = "";
      lista.precio = "";
    }
  }

  lista.addAlCarrito = function (producto) {
    var id = lista.productoSeleccionado;
    var cantidad = lista.cantidad;
    var producto = lista.productos.find(function(obj) {
      return obj.id == id;
    });

    if(producto !== undefined && cantidad > 0){
      lista.carrito.push({ id: n, nombre: producto.nombre, precio: producto.precio, cantidad: cantidad });
      nCarrito++;
    }
    lista.productoSeleccionado = "";
    lista.cantidad = "";
  }

  lista.getTotalCarrito = function() {
    var total = 0;

    lista.carrito.forEach(function(obj) {
      total += obj.precio * obj.cantidad;
    });
    return total;
  }
}
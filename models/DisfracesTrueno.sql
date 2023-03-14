create database DT;
use DT;

create table if not exists Usuarios(
idUsuario int not null primary key,
Nombre varchar(30) not null,
Apellidos varchar(30) not null, 
Nacimiento date not null,
Telefono varchar(10) not null,
Correo varchar(30) not null,
contraseña varchar(20) not null,
username varchar(20) not null
);

create table if not exists disfraces(
idDisfraz int not null primary key,
Descripcion varchar(70) not null,
material varchar(30) not null,
categoria varchar(30) not null,
precio varchar(30) not null
);

create table if not exists carrito(
Disfraz int not null,
cantidad int not null,
constraint fkdisfraces_carrito
Foreign key(Disfraz)
references disfraces(idDisfraz)
);


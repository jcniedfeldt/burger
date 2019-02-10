#drop database burgers_db;
#create database burgers_db;
#USE burgers_db;

create table burgers (
    id INT auto_increment NOT NULL,
    burger_name varchar(30) not null,
    devoured boolean default false,
    primary key (id)
)


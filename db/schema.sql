DROP DATABASE IF EXISTS petSitter;

CREATE DATABASE petSitter;

USE petSitter;

CREATE TABLE sitters (

	id int NOT NULL AUTO_INCREMENT,
	routeName varchar(50) NOT NULL,
	full_name varchar(50) NOT NULL,
	city varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	years_of_experience int NOT NULL,
	would_sit_dog BOOLEAN NOT NULL,
	would_sit_cat BOOLEAN NOT NULL,
	would_sit_bird BOOLEAN NOT NULL,
	would_sit_snake BOOLEAN NOT NULL,
	additional_comments varchar (280),
	PRIMARY KEY (id)
);

CREATE TABLE owners (

    id int NOT NULL AUTO_INCREMENT,
    routeName varchar(50) NOT NULL,
	fullname VARCHAR (50) NOT NULL,
	emailaddress VARCHAR (50) NOT NULL,
	place VARCHAR (50) NOT NULL,
	hasDog BOOLEAN NOT NULL,
	hasCat BOOLEAN NOT NULL,
	hasBird BOOLEAN NOT NULL,
	hasSnake BOOLEAN NOT NULL,
	moreInformation VARCHAR (500),
	PRIMARY KEY (id)

);

CREATE TABLE users (
 	id int NOT NULL AUTO_INCREMENT,
 	email varchar(100) NOT NULL,
 	thepassword varchar(255) NOT NULL,
 	createdAt DATETIME NOT NULL,
 	updatedAt DATETIME NOT NULL,
 	PRIMARY KEY (id)
);
	






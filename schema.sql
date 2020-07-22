DROP DATABASE IF EXISTS  notes_db;
CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes (
    id INTEGER(10) AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    text VARCHAR(300) NOT NULL,
    PRIMARY KEY (id)
)
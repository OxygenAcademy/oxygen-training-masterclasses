CREATE DATABASE puebloDeGuerraDb;
USE puebloDeGuerraDb;

CREATE TABLE weapons (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  damage INT NOT NULL DEFAULT 0
);

CREATE TABLE characters (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  level INT NOT NULL DEFAULT 1,
  life INT NOT NULL DEFAULT 1,
  idWeapon INT NULL,
  CONSTRAINT idw_fk
    FOREIGN KEY (idWeapon) REFERENCES weapons(id)
      ON UPDATE CASCADE
      ON DELETE SET NULL
);

INSERT INTO characters(name, idWeapon)
  VALUES("pepito", 2);
INSERT INTO characters(name, idWeapon)
  VALUES("juanita", 3);
INSERT INTO characters(name, level)
  VALUES("El marqués", 7);

INSERT INTO weapons(name) VALUES("Espada Mortal");
INSERT INTO weapons(name) VALUES("Martillo Biónico");

SELECT name, level -- Projection
  FROM characters
  WHERE level = 1; -- Selection (filtering)

SELECT c.name, w.name
  FROM characters c JOIN weapons w
    ON c.idWeapon = w.id;

SELECT c.name, s.name
  FROM characters c
    JOIN characters_spells cs
      ON c.id = cs.idCharacter
    JOIN spells s
      ON cs.idSpell = s.id;

UPDATE characters
   SET idWeapon = 2
  WHERE id = 2; -- Selection (filtering)

DELETE FROM characters
  WHERE id = 2;

-- No te olvides:
-- https://www.youtube.com/watch?v=i_cVJgIz_Cs
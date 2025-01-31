DROP TABLE IF EXISTS diary;

CREATE TABLE diary(
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    -- date DATETIME NOT NULL, 
    title VARCHAR(100) NOT NULL, 
    diary_entry VARCHAR(300) NOT NULL,
    PRIMARY KEY(diary_id)
);


INSERT INTO diary (title, diary_entry)
VALUES
    ('second entry', 'This is the second entry'),
    ('third entry', 'This is the third entry'); 

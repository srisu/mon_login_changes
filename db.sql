CREATE  TABLE `snackbox_db`.`adminAcc` (

  `sno` INT NOT NULL AUTO_INCREMENT ,

  `username` VARCHAR(45) NOT NULL ,

  `password` VARCHAR(45) NOT NULL ,

  `email` VARCHAR(100) NOT NULL,

  PRIMARY KEY (`sno`) ,

  UNIQUE INDEX `username_UNIQUE` (`username` ASC) );

  INSERT INTO `snackbox_db`.`adminAcc` (`sno`, `username`, `password`) VALUES ('1', 'admin', 'admin');

INSERT INTO `snackbox_db`.`adminAcc` (`sno`, `username`, `password`) VALUES ('2', 'sriram', 'sriram');

INSERT INTO `snackbox_db`.`adminAcc` (`sno`, `username`, `password`) VALUES ('3', 'patric', 'patric');

INSERT INTO `snackbox_db`.`adminAcc` (`sno`, `username`, `password`) VALUES ('4', 'siva', 'siva');


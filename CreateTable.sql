SHOW DATABASES;
CREATE DATABASE DE_GROW;
USE DE_GROW;
SHOW TABLES;
;
CREATE TABLE DEGROW_USER_INFO
(
	USER_ID 		VARCHAR(30) NOT NULL										,
    USER_NAME 		VARCHAR(50) NOT NULL										,
    USER_TEL_NO 	VARCHAR(30)													,
    USER_HOME_ADDR 	VARCHAR(50)													,
    USER_HOLD_POINT INT 		NOT NULL DEFAULT 0								,
    RGS_DT 			VARCHAR(8) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    RGS_TM 			VARCHAR(6) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')	,
    ALT_DT 			VARCHAR(8) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    ALT_TM 			VARCHAR(6) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')  ,
    PRIMARY KEY (USER_ID)
)
;

CREATE TABLE DEGROW_USER_INFO_HIS
(
	USER_ID 		VARCHAR(30) NOT NULL										,
    USER_CHANGE_SNO INT         NOT NULL DEFAULT 0                              ,
    USER_NAME 		VARCHAR(50) NOT NULL										,
    USER_TEL_NO 	VARCHAR(30)													,
    USER_HOME_ADDR 	VARCHAR(50)													,
    USER_HOLD_POINT INT 		NOT NULL DEFAULT 0								,
	RGS_DT 			VARCHAR(8) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    RGS_TM 			VARCHAR(6) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')	,
    ALT_DT 			VARCHAR(8) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    ALT_TM 			VARCHAR(6) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')  ,
    PRIMARY KEY (USER_ID , USER_CHANGE_SNO)
)

;
CREATE TABLE DEGROW_WALLET_TRD_PCL
(
	USER_ID 			VARCHAR(30) NOT NULL										,
    USER_HOLD_POINT 	INT         NOT NULL DEFAULT 0                              ,
    USER_CHANGE_POINT 	INT			NOT NULL DEFAULT 0								,
    CHANGE_CODE			VARCHAR(1)	NOT NULL DEFAULT '1' 							,
	TRD_DT	 			VARCHAR(8) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    TRD_TM 				VARCHAR(6) 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')	,
    PRIMARY KEY (USER_ID)
)
;
CREATE TABLE DEGROW_BOARD_INFO
(
	USER_ID 			VARCHAR(30) 	NOT NULL										,
    BOARD_CODE		 	VARCHAR(1)		NOT NULL DEFAULT '1'                            ,
    BOARD_TITLE		 	VARCHAR(200)	NOT NULL 										,
    BOARD_CONTENTS		VARCHAR(4000)	NOT NULL DEFAULT ' ' 							,
	RGS_DT 				VARCHAR(8) 		NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    RGS_TM 				VARCHAR(6) 		NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')	,
    ALT_DT 				VARCHAR(8) 		NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    ALT_TM	 			VARCHAR(6)	 	NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')  ,
    PRIMARY KEY (USER_ID, BOARD_CODE, BOARD_TITLE)
)
;
CREATE TABLE DEGROW_BOARD_INFO_HIS
(
	USER_ID 			VARCHAR(30) 	NOT NULL										,
    BOARD_CODE		 	VARCHAR(1)		NOT NULL DEFAULT '1'                            ,
    BOARD_TITLE		 	VARCHAR(200)	NOT NULL 										,
	BOARD_CHANGE_SNO	INT				NOT NULL DEFAULT 0								,
    BOARD_CONTENTS		VARCHAR(4000)	NOT NULL DEFAULT ' ' 							,
	RGS_DT 				VARCHAR(8) 		NOT NULL DEFAULT DATE_FORMAT(NOW(),'%Y%m%d')	,
    RGS_TM 				VARCHAR(6) 		NOT NULL DEFAULT DATE_FORMAT(NOW(),'%H%i%s')	,
    PRIMARY KEY (USER_ID, BOARD_CODE, BOARD_TITLE, BOARD_CHANGE_SNO)
)

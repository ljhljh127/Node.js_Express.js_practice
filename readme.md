# Node.js, express 기초

# Node.js 시작하기

먼저 시작에 앞서 **Node.js** 는 **자바스크립트 기반**의 오픈소스 **서버 프레임워크**이다.

**자바스크립트 런타임**으로 백엔드 서버 애플리케이션을 빌드하는데 사용한다.

## 설치

Apt Package Manager, PPA, NVM을 이용한 방법 중 NVM을 이용하여 Node.js 를 설치해 보았다.

**NVM**은 노드 버전 매니저로 다양한 버전의 node.js를 설치 및 관리하는 기능을 제공한다.

**NPM**은 노드 패키지 매니저로 Node.js의 패키지를 관리하는 기능을 제공한다.

1. nvm 스크립트 설치
    
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
    ```
    
2. nvm 스크립트 사용 적용
    
    ```bash
    source ~/.bashrc
    ```
    
3. node version 확인
    
    ```bash
    nvm list-remote
    ```
    
4. 최신버전중 LTS 버전인 20.10.0 설치
    
    ```bash
    nvm install v20.10.0
    ```
    
5. npm 최신화
    
    ```bash
    npm install -g npm@latest
    ```
    
    # Express.js 시작하기
    
    **Express.js**는 Node.js를 위한 빠르고 간편한 **웹 프레임워크**이며 **Node.js**의 핵심 모듈 **HTTP**와 **Connect** 컴포넌트를 기반으로 함 이는 **미들웨어** 구조 때문에 가능함
    
   **미들웨어 함수란?**
    
    **request, response** 그리고 어플리케이션 ****요청-응답 사이클**** 도중 **그 다음의 미들웨어 함수**에 대한 **엑세스 권한**을 갖는 함수
    
    → 쉽게 말해 클라이언트에게 요청이 오면 그 요청에 대한 응답하려는 중간에 목적에 맞게 처리하는 즉 거쳐가는 함수들
    
    ## 설치
    
    ```bash
    npm install express --save
    ```
    
    # Nodemon
    
    Node.js 개발 시 자바 스크립트 파일을 수정할 때마다 node를 재시작 해줘야하는 번거로움을 막기 위하여 사용하는 **스크립트 모니터링 유틸리티**
    
    ```bash
    npm install nodemon -g
    ```
    
    # 프로젝트 시작
    
    1. 먼저 프로젝트를 초기화한다.
        
        ```bash
        npm init # -y 옵션으로 default 로 줄 수 있음
        ```
        
    2. Express.js 를 설치한다.
        
        ```bash
        npm install --save express
        ```
        
    3. Nodemon 사용을 위해 package.json에 nodemon을 추가한다.
    (docker에서 쓸 경우 Legacy 옵션 추가) -L “ 찾느라 개고생”
        
        ```json
        "scripts": {
            "start": "nodemon -L src/index.js"
          },
        ```
        
    4. 시작
        
        ```bash
        npm start
        # 또는
        npm run dev # 개발모드
        ```
        
    
    ## 데이터베이스와의 연결
    
    이제 DataBase와 연결을 진행해 보겠다(MySQL ,Sequelize 사용)
    
    먼저 **ORM과 Sequelize** 에 대해 알아보자
    
    **ORM** 이란?
    
    객체를 **관계형 DB**에 매핑해 **DB의 기능을 추상적**으로 이용하게 해주는 것
    
    **장점**
    
    - 데이터베이스 쿼리 추상화하여 본래 기능을 구현하는 로직에만 집중 할 수 있음
    - 손쉬운 DB 마이그레이션
    
    **Sequalize** 란?
    
    Node.js 에서 사용할 수 있는 대표적인 ORM 중 하나
    
    1. 라이브러리 설치
        - **sequelize-cli** : sequelize 명령어를 사용해 데이터베이스 작업을 할 수 있는 툴
        - **mysql2** : MySQL과 sequelize를 연동해주는 드라이버
        
        ```bash
        npm install sequelize sequelize-cli mysql2
        ```
        
    2. Sequalize 기본 구조생성
        
        ```bash
        npx sequelize init
        ```
        
    3. config.json 설정
        
        config.json 파일의 DB연결 정보를 설정한다.
        
        ```json
        {
          "development": {
            "username": "사용자명",
            "password": "비밀번호",
            "database": "db명",
            "host": "ip",
            "dialect": "mysql",
            "port": 포트번호
          }
        }
        ```
        
    4. models/index.js 를 설정한다.
        
        ```jsx
        // Sequelize 라이브러리 로드
        const Sequelize = require("sequelize"); 
        
        // config 로드
        const env = "development";
        const config = require("../config/config.json")[env];
        
        //db 빈 객체 생성
        const db = {};
        
        //db 연결구문
        const sequelize = new Sequelize(
          config.database,
          config.username,
          config.password,
          config
        );
        
        //라이브러리 전체참조(데이터 타입, 모델 정의등)
        db.Sequelize = Sequelize;
        
        //연결 인스턴스 참조 쿼리나 트랜잭션
        db.sequelize = sequelize;
        
        sequelize
          .sync({ force: false })
          .then(() => {
            console.log("데이터베이스 연결됨.");
          })
          .catch((err) => {
            console.error(err);
          });
        
        module.exports = db;
        ```
        
    
    5. 테이블 추가하기
    
        다음과 같은 user 테이블을 만들고 추가해보자
        
        ```
        //테스트용 테이블
        유저테이블
        CREATE TABLE UserTable (
        UserID VARCHAR(50) NOT NULL,
        UserPassword VARCHAR(255) NOT NULL,
        UserName VARCHAR(30) NOT NULL,
        UserSex VARCHAR(10) NOT NULL,
        UserBirth DATE NOT NULL,
        UserPhoneNumber VARCHAR(50) NOT NULL,
        PRIMARY KEY(UserID)
        );
        ```
    
        **user_table.js**
        
        ```jsx
        const Sequelize = require('sequelize');
        
        module.exports = class User extends Sequelize.Model {
            static init(sequelize) {// init 메서드는 테이블에 대한 설정
                return super.init({// super.init 메서드의 첫번째 인수는 테이블 컬럼 옵션 두번째 인수는 테이블자체 옵션
                    UserID: {
                        type: Sequelize.STRING(50),
                        allowNull: false,
                        primaryKey: true,
                    },
                    UserPassword: {
                        type: Sequelize.STRING(255),
                        allowNull: false,
                    },
                    UserName: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    UserSex: {
                        type: Sequelize.STRING(10),
                        allowNull: false,
                    },
                    UserBirth: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                    UserPhoneNumber: {
                        type: Sequelize.STRING(50),
                        allowNull: false,
                    },
                }, {
                    sequelize, //static init의 매개변수인 sequelize와 연결되는 옵션, db.sequelize 객체
                    timestamps: false, //true시 레코드의 생성, 수정 시간이 자동으로입력
                    underscored: false, // false시 카멜 표기법을 스네이크 케이스로 default(카멜케이스)
                    modelName: "User", //모델 이름은 일반적으로 단수형을 사용
                    tableName: "users", // DB 테이블명 일반적으로 복수형을 사용
                    paranoid: false, // true시 deletedAt 칼럼이 생기고 지운 시각이 기록됨 로우 복원시 유리한 옵션
                    charset: "utf8", //한글입력설정
                    collate: 'utf8_general_ci', //한글 입력 설정
                });
            }
        
            static associate(db) {
                // 다른 모델과의 관계 정의 (필요에 따라 추가)
            }
        }
        ```
    
    6. models/index.js 코드 업데이트
        
        ```jsx
        // Sequelize 라이브러리 로드
        const Sequelize = require("sequelize"); 
        
        // User모델 로드
        const User = require("./user");
        
        // config 로드
        const env = "development";
        const config = require("../config/config.json")[env];
        
        //db 빈 객체 생성
        const db = {};
        
        //db 연결구문
        const sequelize = new Sequelize(
          config.database,
          config.username,
          config.password,
          config
        );
        
        //라이브러리 전체참조(데이터 타입, 모델 정의등)
        db.Sequelize = Sequelize;
        
        //연결 인스턴스 참조 쿼리나 트랜잭션
        db.sequelize = sequelize;
        
        db.User = User; //user 모델 담기
        User.init(sequelize); //user모델의 init 메소드
        User.associate(db); //테이블 관계연결 여기서는 필요없지만 알아두기
        
        sequelize
          .sync({ force: false }) //true로 설정시 서버 재시작마다 테이블 재생성 false는 없으면 생성 아니면 유지
          .then(() => {
            console.log("데이터베이스 연결됨.");
          })
          .catch((err) => {
            console.error(err);
          });
        
        module.exports = db;
        ```
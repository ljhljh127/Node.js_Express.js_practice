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
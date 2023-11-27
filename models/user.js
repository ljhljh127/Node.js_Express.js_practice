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

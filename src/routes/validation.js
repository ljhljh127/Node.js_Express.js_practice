const Joi =require('joi');
const user_validation = { 
	user_singup : async (req, res, next) =>{ 
	console.log("req :", req.query); 
    	const body = req.query; 
    	const schema = Joi.object().keys({ 
            UserID: Joi.string().required(),
            UserPassword: Joi.string().required(),
            UserName: Joi.string().required(),
            UserSex: Joi.string().required(),
            UserBirth: Joi.date().required(),
            UserPhoneNumber: Joi.string().required(),
        	}); 
    
    try { // 검사시작 
    	await schema.validateAsync(body); // Joi 내장 검사함수
    } catch (e) { // 유효성 검사 실패 
    	return res.status(400).json({ code: 400, message: e.message });
    	} 
    next(); //만약 이상없이 성공했다면 
    }
}; 

module.exports = user_validation;
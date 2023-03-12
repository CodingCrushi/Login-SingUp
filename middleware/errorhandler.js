const { constants } = require("../constance")
const errorHandler = (err , req,res,next) =>{
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ 
                titile : "Validation Faild " , 
                message : err.message , 
                stackTrace: err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({ 
                titile : "Not Found" , 
                message : err.message , 
                stackTrace: err.stack
            })
        case constants.UNAUTHORIZED:
            res.json({ 
                titile : "UN authorized" , 
                message : err.message , 
                stackTrace: err.stack
            })
        case constants.FORBIDDEN:
            res.json({ 
                titile : "Forbidden" , 
                message : err.message , 
                stackTrace: err.stack
            })
        case constants.SERVER_ERROR:
            res.json({ 
                titile : "Server Error" , 
                message : err.message , 
                stackTrace: err.stack
            })
        default:
            console.log("No Erroe , All good!");
            break;
    }
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    
};

module.exports = errorHandler
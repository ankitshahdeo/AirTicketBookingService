const { joinSQLFragments } = require("sequelize/lib/utils/join-sql-fragments");

class AppError extends Error {
    constructor(
        name,
        message,
        explanation,
        statusCode
    ){
        super();
        this.name =name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;
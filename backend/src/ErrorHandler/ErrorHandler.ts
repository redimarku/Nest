import { HttpException } from "@nestjs/common";

export class ErrorHandler extends HttpException{
    constructor(message, stautsCode){
        super(message, stautsCode)
    }
}
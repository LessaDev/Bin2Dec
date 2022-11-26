import {NumValidateUseCase} from "./validate/numValidate.useCase";
import {ResponseBinDto} from "./validate/dto/responseBin.dto";
import {StatusCodes} from 'http-status-codes';
import {response} from "express";


export class BinForDecUseCase {
    async execute(bin: string){
        let numValidaded: ResponseBinDto = await new NumValidateUseCase().validNum(bin)
        if(numValidaded.valid == true){
            let dec = 0;
            for (let c = 0; c < bin.length; c++) {
                // @ts-ignore
                dec += Math.pow(2, c) * bin[bin.length - c - 1];
            }
            return dec
        }else {
            console.log('teste')
            return response.status(StatusCodes.BAD_REQUEST)
                .statusMessage = numValidaded.message
        }

    }
}
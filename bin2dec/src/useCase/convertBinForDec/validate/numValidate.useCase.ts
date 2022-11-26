import {ResponseBinDto} from "./dto/responseBin.dto";


export class NumValidateUseCase {
   public async validNum(bin): Promise<ResponseBinDto> {
        let isNum = !isNaN(parseFloat(bin)) && isFinite(bin);

        if (!isNum) {
            return new ResponseBinDto().getResultNotValid(false,"O valor digitado não pode conter letras")
        }
        return new ResponseBinDto().getValidResult(true)
    }
}
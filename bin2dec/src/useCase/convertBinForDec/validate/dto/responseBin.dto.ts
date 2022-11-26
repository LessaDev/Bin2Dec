export class ResponseBinDto {
    valid: boolean
    message: string

    public async getResultNotValid(valid: boolean, message: string): Promise<ResponseBinDto> {
       let reponseBinDto = new ResponseBinDto();
        reponseBinDto.valid = valid;
        reponseBinDto.message = message;
        return reponseBinDto;
    }

    public async getValidResult(valid): Promise<ResponseBinDto> {
        let reponseBinDto = new ResponseBinDto();
        reponseBinDto.valid = valid;
        return reponseBinDto;
    }

}
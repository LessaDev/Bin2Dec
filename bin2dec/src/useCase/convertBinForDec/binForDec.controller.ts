import {Controller, Get, Param} from "@nestjs/common";
import {BinForDecUseCase} from "./binForDec.useCase";

@Controller('BinForDec')
export class BinForDecController {

    constructor(private readonly binForDecUseCase: BinForDecUseCase) {}
    @Get(':bin')
    async getBinForDec(@Param('bin') bin: string): Promise<string> {
        return await this.binForDecUseCase.execute(bin)
    }
}
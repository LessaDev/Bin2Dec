import {Module} from "@nestjs/common";
import {BinForDecUseCase} from "./binForDec.useCase";
import {BinForDecController} from "./binForDec.controller";
import {NumValidateUseCase} from "./validate/numValidate.useCase";

@Module({
    controllers:[],
    imports:[
        NumValidateUseCase
    ],
    providers: [
        BinForDecController,
        BinForDecUseCase,
        NumValidateUseCase
        ],
    exports: [BinForDecController]
})
export class ConvertBinForDecModule {}
import {Module} from "@nestjs/common";
import {BinForDecUseCase} from "./binForDec.useCase";
import {BinForDecController} from "./binForDec.controller";

@Module({
    controllers:[],
    providers: [
        BinForDecController,
        BinForDecUseCase
        ],
    exports: [BinForDecController]
})
export class ConvertBinForDecModule {}
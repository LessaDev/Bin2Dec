import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConvertBinForDecModule} from "./useCase/convertBinForDec/convertBinForDec.module";
import {BinForDecController} from "./useCase/convertBinForDec/binForDec.controller";
import {BinForDecUseCase} from "./useCase/convertBinForDec/binForDec.useCase";

@Module({
  imports: [ConvertBinForDecModule],
  controllers: [AppController, BinForDecController],
  providers: [AppService, BinForDecUseCase],
})
export class AppModule {}

import { GetCityCompany } from '@app/use-cases/get-city-company';
import { GetNameCompany } from '@app/use-cases/get-name-company';
import { RegisterCompany } from '@app/use-cases/register-company';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [RegisterCompany, GetNameCompany, GetCityCompany],
})
export class HttpModule {}

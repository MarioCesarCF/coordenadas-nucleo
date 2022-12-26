import { Module } from '@nestjs/common';
// import { CompanyController } from './infra/http/controllers/app.controller';
// import { PrismaService } from './infra/database/prisma/prisma.service';
// import { RegisterCompany } from '@app/use-cases/register-company';
// import { CompanyRepository } from '@app/repositories/company-repository';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}

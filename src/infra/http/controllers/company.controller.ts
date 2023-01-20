import { GetCityCompany } from '@app/use-cases/get-city-company';
import { GetCnpjCompany } from '@app/use-cases/get-cnpj-company';
import { GetNameCompany } from '@app/use-cases/get-name-company';
import { RegisterCompany } from '@app/use-cases/register-company';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { RegisterCompanyBody } from '../dtos/registe-company-body';
import { CompanyViewModel } from '../view-models/company-view-models';

@Controller('companies')
export class CompanyController {
  constructor(
    private registerCompany: RegisterCompany,
    private getCityCompanies: GetCityCompany,
    private getNameCompanies: GetNameCompany,
    private getCnpjCompanies: GetCnpjCompany,
  ) {}

  @Get('/cnpj/:cnpj')
  async getFromCnpj(@Param('cnpj') cnpj: string) {
    const { companies } = await this.getCnpjCompanies.execute({
      cnpj,
    });

    return {
      companies: companies.map(CompanyViewModel.toHTTP),
    };
  }

  @Get('/city/:city')
  async getFromCity(@Param('city') city: string) {
    const { companies } = await this.getCityCompanies.execute({
      city,
    });

    return {
      companies: companies.map(CompanyViewModel.toHTTP),
    };
  }

  @Get('/name/:name')
  async getFromName(@Param('name') name: string) {
    const { companies } = await this.getNameCompanies.execute({
      name,
    });

    return {
      companies: companies.map(CompanyViewModel.toHTTP),
    };
  }

  @Post()
  async create(@Body() body: RegisterCompanyBody) {
    const { name, cnpj, city, coordenatesX, coordenatesY, informations } = body;

    const { company } = await this.registerCompany.execute({
      name,
      cnpj,
      city,
      coordenatesX,
      coordenatesY,
      informations,
    });

    return { company: CompanyViewModel.toHTTP(company) };
  }
}

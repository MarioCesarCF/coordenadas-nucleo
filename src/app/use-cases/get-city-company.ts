import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';
import { Injectable } from '@nestjs/common';

interface GetCityCompanyRequest {
  city: string;
}

interface GetCityCompanyResponse {
  companies: Company[];
}

@Injectable()
export class GetCityCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(
    request: GetCityCompanyRequest,
  ): Promise<GetCityCompanyResponse> {
    const { city } = request;

    const companies = await this.companyRepository.findManyByCity(city);

    return { companies };
  }
}

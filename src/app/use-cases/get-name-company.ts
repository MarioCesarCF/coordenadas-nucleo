import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';
import { Injectable } from '@nestjs/common';

interface GetNameCompanyRequest {
  name: string;
}

interface GetNameCompanyResponse {
  companies: Company[];
}

@Injectable()
export class GetNameCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(
    request: GetNameCompanyRequest,
  ): Promise<GetNameCompanyResponse> {
    const { name } = request;

    const companies = await this.companyRepository.findManyByName(name);

    return { companies };
  }
}

import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';
import { Injectable } from '@nestjs/common/decorators';

interface IRegisterCompanyRequest {
  name: string;
  cnpj: string;
  city: string;
  coordenatesX: number;
  coordenatesY: number;
  informations?: string;
}

interface IRegisterCompanyResponse {
  company: Company;
}

@Injectable()
export class RegisterCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(
    request: IRegisterCompanyRequest,
  ): Promise<IRegisterCompanyResponse> {
    const {
      name,
      cnpj,
      city,
      coordenatesX,
      coordenatesY,
      informations = 'Sem informações.',
    } = request;

    const company = new Company({
      name,
      cnpj,
      city,
      coordenatesX,
      coordenatesY,
      informations,
    });

    await this.companyRepository.create(company);

    return {
      company,
    };
  }
}

import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';
import { Injectable } from '@nestjs/common';

// OBS: O metodo de busca do CNPJ não funciona com o numero completo, usando pontos, barras e traços. Desta forma uma
// solução deverá ser implementada no front-end. Visto que na rota apenas os 14 digitos numericos do CNPJ serão usados.

interface GetCnpjCompanyRequest {
  cnpj: string;
}

interface GetCnpjCompanyResponse {
  companies: Company[];
}

@Injectable()
export class GetCnpjCompany {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(
    request: GetCnpjCompanyRequest,
  ): Promise<GetCnpjCompanyResponse> {
    const { cnpj } = request;

    const companies = await this.companyRepository.findManyByCnpj(cnpj);

    return { companies };
  }
}

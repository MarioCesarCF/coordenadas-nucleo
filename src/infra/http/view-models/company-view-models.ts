import { Company } from '@app/entities/company';

export class CompanyViewModel {
  static toHTTP(company: Company) {
    return {
      id: company.id,
      name: company.name,
      cnpj: company.cnpj,
      city: company.city,
      coordenatesX: company.coordenatesX,
      coordenatesY: company.coordenatesY,
      informations: company.informations,
    };
  }
}

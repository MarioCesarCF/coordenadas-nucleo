import { Company } from '@app/entities/company';
import { Company as RawCompany } from '@prisma/client';

export class PrismaCompanyMapper {
  static toPrisma(company: Company) {
    return {
      id: company.id,
      name: company.name,
      cnpj: company.cnpj,
      city: company.city,
      createdAt: company.createdAt,
      coordenatesX: company.coordenatesX,
      coordenatesY: company.coordenatesY,
      informations: company.informations,
    };
  }

  static toDomain(raw: RawCompany): Company {
    return new Company(
      {
        name: raw.name,
        cnpj: raw.cnpj,
        city: raw.city,
        createdAt: raw.createdAt,
        coordenatesX: raw.coordenatesX,
        coordenatesY: raw.coordenatesY,
        informations: raw.informations,
      },
      raw.id,
    );
  }
}

import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company-repository';
import { Injectable } from '@nestjs/common';
import { PrismaCompanyMapper } from '../mappers/prisma-company-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private prismaService: PrismaService) {}

  async findManyByCnpj(cnpj: string): Promise<Company[]> {
    const companies = await this.prismaService.company.findMany({
      where: {
        cnpj,
      },
    });

    return companies.map((company) => {
      return PrismaCompanyMapper.toDomain(company);
    });
  }

  async findManyByCity(city: string): Promise<Company[]> {
    const companies = await this.prismaService.company.findMany({
      where: {
        city,
      },
    });

    return companies.map((company) => {
      return PrismaCompanyMapper.toDomain(company);
    });
  }

  async findManyByName(name: string): Promise<Company[]> {
    const companies = await this.prismaService.company.findMany({
      where: {
        name,
      },
    });

    return companies.map((company) => {
      return PrismaCompanyMapper.toDomain(company);
    });
  }

  async create(company: Company): Promise<void> {
    const raw = PrismaCompanyMapper.toPrisma(company);

    await this.prismaService.company.create({
      data: raw,
    });
  }
}

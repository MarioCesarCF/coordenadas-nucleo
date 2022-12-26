import { Company } from '../entities/company';

export abstract class CompanyRepository {
  abstract create(company: Company): Promise<void>;
  abstract findManyByName(name: string): Promise<Company[]>;
}

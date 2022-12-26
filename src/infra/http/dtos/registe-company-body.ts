import { IsNotEmpty, Length } from 'class-validator';

export class RegisterCompanyBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  @Length(5, 15)
  coordenatesX: number;

  @IsNotEmpty()
  @Length(5, 15)
  coordenatesY: number;

  informations: string;
}

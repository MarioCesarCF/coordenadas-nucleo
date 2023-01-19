import { IsNotEmpty, Length, Min, Max } from 'class-validator';

export class RegisterCompanyBody {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  @Length(3, 100)
  city: string;

  @IsNotEmpty()
  @Min(-150)
  @Max(150)
  coordenatesX: number;

  @IsNotEmpty()
  @Min(-80)
  @Max(80)
  coordenatesY: number;

  informations: string;
}

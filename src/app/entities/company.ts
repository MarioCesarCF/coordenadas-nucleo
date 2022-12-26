import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface CompaniesProps {
  name: string;
  cnpj: string;
  city: string;
  createdAt: Date;
  coordenatesX: number;
  coordenatesY: number;
  informations?: string;
}

export class Company {
  private _id: string;
  private props: CompaniesProps;

  constructor(
    props: Replace<CompaniesProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set cnpj(cnpj: string) {
    this.props.cnpj = cnpj;
  }

  public get cnpj(): string {
    return this.props.cnpj;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public get city(): string {
    return this.props.city;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set coordenatesX(coordenatesX: number) {
    this.props.coordenatesX = coordenatesX;
  }

  public get coordenatesX(): number {
    return this.props.coordenatesX;
  }

  public set coordenatesY(coordenatesY: number) {
    this.props.coordenatesY = coordenatesY;
  }

  public get coordenatesY(): number {
    return this.props.coordenatesY;
  }

  public set informations(informations: string) {
    this.props.informations = informations;
  }

  public get informations(): string {
    return this.props.informations;
  }
}

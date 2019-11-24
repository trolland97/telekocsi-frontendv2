import { IUser } from './user.model';

export interface IRoute {
    id: number;
    from: string;
    to: string;
    when: Date;
    maxPassenger: number;
    driver: IUser;
    passengers: IUser[];
    price: number;
}
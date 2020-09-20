import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Reservation from "./Reservation";


@Entity("reservation")
export default class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    type: string;

    @OneToMany(type => Reservation, reservation => reservation.room)
    reservations: Reservation[];

    constructor(title: string, type: string,  reservations: Reservation[]) {
        this.title = title;
        this.type = type;
        this.reservations = reservations;
    }
}
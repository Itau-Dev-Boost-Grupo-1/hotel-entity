import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Room from "./Room";


@Entity("reservation")
export default class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    desc: string;

    @Column()
    checkin: boolean;

    @Column()
    checkout: boolean;

    @ManyToOne(type => Room, room => room.reservations)
    room: Room;

    constructor(desc: string, checkin: boolean, checkout: boolean) {
        this.desc = desc;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}
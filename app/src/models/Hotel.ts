import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Room from "./Room";

// Entidade representa uma tables no DB
@Entity("hotels")
export default class User {
    // chave primaria auto incremental
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descrição: string;
    
    @Column()
    endereço: string;
    
    @Column()
    cidade: string;
    
    @Column()
    estrelas: number;
    
    @Column()
    photo_url: string;
    
    @ManyToOne(type => Room, room => room.id)
    room: Room;

    constructor(
        nome: string, 
        descrição: string, 
        endereço: string, 
        cidade: string, 
        estrelas:number, 
        photo_url: string)
        {
        this.nome = nome;
        this.descrição = descrição;
        this.endereço = endereço;
        this.cidade = cidade;
        this.estrelas = estrelas;
        this.photo_url = photo_url;
        }
}
import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import { Connection, createConnection, Repository } from "typeorm";

import Hotel from "./models/Hotel";
import Room from "./models/Room";
import Reservation from "./models/Reservation";


const app: Application = express();

// carrega o json enviado no corpo(body)
app.use(express.json());

app.get("/hotels", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const hotelRepository: Repository<Hotel> = connection.getRepository(Hotel);

    const hotels: Hotel[] = await hotelRepository.find();

    connection.close();

    return res.json({
        hotels
    });
});

app.get("/rooms", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const roomRepository: Repository<Room> = connection.getRepository(Room);

    const rooms: Room[] = await roomRepository.find();

    connection.close();

    return res.json({
        rooms
    });
});

app.get("/reservations", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const reservationRepository: Repository<Reservation> = connection.getRepository(Reservation);

    const reservations: Reservation[] = await reservationRepository.find();

    connection.close();

    return res.json({
        reservations
    });
});

app.post("/users", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const userRepository: Repository<User> = connection.getRepository(User);

    const user: User = new User(req.body.nome, req.body.email);

    await userRepository.save(user); // &user.id = 1

    connection.close();

    return res.json({
        id: user.id
    });
});

app.put("/hotels", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const hotelRepository: Repository<Hotel> = connection.getRepository(Hotel);

    const hotel: Hotel | undefined = await hotelRepository.findOne(req.body.id);

    if (hotel !== undefined) {
        hotel.nome = req.body.nome;

        await hotelRepository.save(hotel);

        connection.close();
        
        return res.json({
            hotel
        });
    }

    connection.close();

    return res.status(404).send();
});

app.put("/rooms", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const roomRepository: Repository<Room> = connection.getRepository(Room);

    const room: Room | undefined = await roomRepository.findOne(req.body.id);

    if (room !== undefined) {
        room.title = req.body.title;

        await roomRepository.save(room);

        connection.close();

        return res.json({
            room
        });
    }

    connection.close();

    return res.status(404).send();
});

app.put("/reservations/checkin", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const reservationRepository: Repository<Reservation> = connection.getRepository(Reservation);

    const reservation: Reservation | undefined = await reservationRepository.findOne(req.body.id);

    if (reservation !== undefined) {
        reservation.checkin = true;

        await reservationRepository.save(reservation);

        connection.close();

        return res.json({
           reservation
        });
    }

    connection.close();

    return res.status(404).send();
});

app.put("/reservations/checkout", async (req: Request, res: Response): Promise<Response> => {
    const connection = await createConnection();

    const reservationRepository: Repository<Reservation> = connection.getRepository(Reservation);

    const reservation: Reservation | undefined = await reservationRepository.findOne(req.body.id);

    if (reservation !== undefined) {
        reservation.checkout = true;

        await reservationRepository.save(reservation);

        connection.close();

        return res.json({
           reservation
        });
    }

    connection.close();

    return res.status(404).send();
});


const port: any = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor up na porta ${port}`);
});
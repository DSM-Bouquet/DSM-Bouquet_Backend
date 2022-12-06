import { 
    Column,
    Entity, 
    JoinColumn, 
    OneToMany, 
    OneToOne, 
    PrimaryColumn, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Flower } from "./flower.entity";
import { User } from "./user.entity";

@Entity({ name: 'bouquet' })
export class Bouquet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    user_id!: number;

    @OneToOne(() => User, (user) => user.bouquet)
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @OneToMany(() => Flower, (flower) => flower.bouquet)
    flower!: Flower[];
};
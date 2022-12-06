import { 
    Column,
    Entity, 
    JoinColumn, 
    ManyToOne,
    PrimaryGeneratedColumn 
} from "typeorm";
import { Bouquet } from "./bouquet.entity";

@Entity({ name: 'flower' })
export class Flower {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    bouquet_id!: number;

    @Column({ nullable: false, charset: 'utf8mb4' })
    nickname!: string;

    @Column({ nullable: false, charset: 'utf8mb4' })
    content!: string;

    @ManyToOne(() => Bouquet, (bouquet) => bouquet.flower)
    @JoinColumn({ name: 'bouquet_id' })
    bouquet!: Bouquet;
};
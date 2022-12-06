import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    OneToMany,
    OneToOne
} from "typeorm"
import { Bouquet } from "./bouquet.entity";

@Entity({ name:  'user' })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true, nullable: false })
    email!: string;

    @Column({ nullable: false })
    nickname!: string;

    @Column({ nullable: false })
    password!: string; 

    @OneToOne(() => Bouquet, (bouquet) => bouquet.user)
    bouquet!: Bouquet[];
};

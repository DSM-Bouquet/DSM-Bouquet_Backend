import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bouquet } from "./bouquet.entity";

@Entity({ name: "flower" })
export class Flower {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  bouquet_id!: number;

  @Column({
    nullable: false,
    charset: "utf8mb4",
    collation: "utf8mb4_general_ci",
  })
  nickname!: string;

  @Column({
    nullable: false,
    charset: "utf8mb4",
    collation: "utf8mb4_general_ci",
  })
  content!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => Bouquet, (bouquet) => bouquet.flower)
  @JoinColumn({ name: "bouquet_id" })
  bouquet!: Bouquet;
}

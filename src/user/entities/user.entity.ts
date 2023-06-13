// export class User {}

import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column({unique: true})
    email: string;
    
    @Column()
    password: string;
    
    @Column({default: true})
    isActive: boolean;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn({nullable: true})
    updatedAt: Date;
    
    @DeleteDateColumn({nullable: true})
    deletedAt: Date;

    @Column({nullable: true})
    createdBy: number;
    
    @Column({nullable: true})
    updatedBy: number;

    @Column({nullable: true})
    deletedBy: number;


    }


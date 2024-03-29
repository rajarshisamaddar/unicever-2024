import { Prisma } from "@prisma/client";

export type organizationType = {
    id:string,
    userId:string,
    name:string,
    description:string | null,
    address:string | null,
    phone:string | null,
    email:string | null,
    image: Prisma.JsonValue | null,
    logo:string | null,
}
import { Connection } from "mongoose";

declare module global{
    const mongoose: Connection
}
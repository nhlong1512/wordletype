import { NumberLiteralType } from "typescript";

interface boardState {
    board: string[];
    posKey: number;
}

export interface rootState {
    board: boardState;
}
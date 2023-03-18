
interface boardState {
    board: string[];
    posKey: number;
    row: number;
    key: string;

}

export interface rootState {
    board: boardState;
}
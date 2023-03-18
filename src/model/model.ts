
interface boardState {
    board: string[];
    posKey: number;
    row: number;
    correctWord: string;

}

export interface rootState {
    board: boardState;
}
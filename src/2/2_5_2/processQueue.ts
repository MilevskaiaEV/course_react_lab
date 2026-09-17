import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
    let finalState = baseState;

for(let item of queue){
        if(typeof item === 'number'){
            finalState = item;
        } else {
            finalState = item(finalState);
        }
}
    return finalState;
}
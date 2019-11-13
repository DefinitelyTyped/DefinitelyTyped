import { makeTrashable, TrashablePromise } from "trashable";

const trashablePromise: TrashablePromise<void> = makeTrashable(new Promise(() => {}));

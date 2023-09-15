import { useSyncedLocalStorage } from "use-synced-local-storage";

const [counter, setCounter] = useSyncedLocalStorage("counter", 0);
setCounter(1); // ensure setCounter works with numbers
setCounter(counter); // ensure counter has a valid type for the setCounter

const [city, setCity] = useSyncedLocalStorage<string>("city");
setCity("Paris"); // ensure it works with defined type

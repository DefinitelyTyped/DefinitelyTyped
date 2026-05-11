import Avue, { AvueCrudOption, AvueFormOption } from "@smallwei/avue";

Avue.install;

interface User {
    id: string;
    name: string;
}

const crudOption: AvueCrudOption<User> = {
    column: [
        { label: "id", prop: "id" },
        { label: "name", prop: "name" },
    ],
};

const formOption: AvueFormOption<User> = {
    column: [
        { label: "id", prop: "id" },
        { label: "name", prop: "name" },
    ],
};

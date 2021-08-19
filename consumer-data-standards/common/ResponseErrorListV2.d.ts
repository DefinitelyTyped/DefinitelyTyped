import { Meta } from "./shared";

export interface ResponseErrorListV2 {
  errors?: ErrorsEntity[] | null;
}

interface ErrorsEntity {
  code: string;
  title: string;
  detail: string;
  meta?: Meta;
}


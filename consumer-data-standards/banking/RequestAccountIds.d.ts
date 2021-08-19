import { Meta } from "./Shared";

export interface RequestAccountIds {
  data: ReqAccList;
  meta?: Meta;
}

interface ReqAccList {
  accountIds: string[];
}


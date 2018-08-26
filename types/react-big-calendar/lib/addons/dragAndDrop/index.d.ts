import { BigCalendarClass } from "../../../index";

declare module "react-big-calendar/lib/addons/dragAndDrop" {
  export default function withDragAndDrop(cal: BigCalendarClass): BigCalendarClass;
}

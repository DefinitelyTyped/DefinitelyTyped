import { FunctionComponent } from "react";
import { createSVGIcon, SVGIcon, AddIcon } from "@tonic-ui/react-icons";
import { Icon } from "@tonic-ui/react";

const SvgComponent: FunctionComponent = () => {
  return <svg />
}

createSVGIcon(<svg />, "displayName");
createSVGIcon(<path />, { displayName: "displayName" });
const CustomSvgIcon = createSVGIcon(<SvgComponent />, "displayName");

<>
  <SVGIcon />
  <SVGIcon viewBox="0 0 24 24" />
  <AddIcon viewBox="0 0 24 24" />
  <CustomSvgIcon />
  <CustomSvgIcon size="4x" viewBox="0 0 24 24" />
  <Icon icon="addicon" />
  <Icon as="addicon" />
  <Icon as={CustomSvgIcon} />
</>

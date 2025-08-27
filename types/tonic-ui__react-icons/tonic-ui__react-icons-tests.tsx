import { Icon } from "@tonic-ui/react";
import { AddIcon, createSVGIcon, SVGIcon } from "@tonic-ui/react-icons";
import { FunctionComponent } from "react";

const SvgComponent: FunctionComponent = () => {
    return <svg />;
};

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
</>;

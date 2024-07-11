import * as React from "react";
import ThemeProviderContext from "terra-theme-context";

const contextValue = React.useContext(ThemeProviderContext);
const nullableString: string | undefined = contextValue.className;

const AllProps = <ThemeProviderContext.Provider value={{ className: "class" }} />;

const NoProps = <ThemeProviderContext.Provider value={{}} />;

import React from "react";

/**
 * Props para el componente EasySearchInput.
 */
export interface EasySearchInputProps {
  /**
   * Nombre del tema que se aplicará al componente.
   * Puede ser "default" o "sanimex".
   */
  themeName?: "default" | "sanimex";
}

/**
 * Componente EasySearchInput.
 */
declare const EasySearchInput: React.FC<EasySearchInputProps>;

export default EasySearchInput;

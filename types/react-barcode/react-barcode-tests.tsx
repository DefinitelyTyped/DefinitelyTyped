import * as React from "react";
import Barcode = require('react-barcode');

const BarcodeComponent: React.FC = () => {
  return (
    <Barcode value="Hello world"/>
  );
};

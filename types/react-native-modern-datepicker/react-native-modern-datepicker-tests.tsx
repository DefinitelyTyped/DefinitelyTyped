import * as React from "react";
import Datepicker from "react-native-modern-datepicker";

const Comp = () => {
  return (
    <>
      <Datepicker
        options={{
          backgroundColor: "#090C08",
          textHeaderColor: "#FFA25B",
          textDefaultColor: "#F6E7C1",
          selectedTextColor: "#fff",
          mainColor: "#F4722B",
          textSecondaryColor: "#D6C7A1",
          borderColor: "rgba(122, 146, 165, 0.1)",
        }}
        current="2022-07-13"
        selected="2022-07-23"
        mode="calendar"
        minuteInterval={30}
      />
    </>
  );
};

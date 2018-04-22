import React from "react";

export default context => {
  const Text = require("components/Text").default(context);

  return ({ name, focused, tintColor }) => (
    <Text
      bold={focused}
      style={{ fontSize: 13, margin: 0, padding: 0, color: tintColor }}
    >
      {name}
    </Text>
  );
};

"use client";

import Header from "./Header";

const ClientWrapper = () => {
  return <Header onRegisterClick={() => console.log("Register button clicked")} />;
};

export default ClientWrapper;

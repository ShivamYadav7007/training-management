import React, { useEffect } from "react";

interface Props {}

const AuthHero: React.FC<Props> = () => {
  useEffect(() => {
    console.log("AuthHero is redering 1st time");
  }, []);
  return (
    <div className="flex-1 hidden h-screen bg-blue-900 md:flex">
      <p className="m-auto text-white">Hero image will be here</p>
    </div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);

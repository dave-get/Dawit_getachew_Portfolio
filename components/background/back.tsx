import Image from "next/image";
import React from "react";

export const Back1 = ({
  w,
  x,
  y,
  z,
}: {
  w: number;
  x: number;
  y: number;
  z: number;
}) => {
  return (
    <>
      <div className="absolute" style={{ left: `${w}px`, top: `${x}px` }}>
        <Image src="/image/background1.svg" alt="" width={600} height={200} />
      </div>
      <div className="absolute" style={{ right: `${y}px`, bottom: `${z}px` }}>
        <Image src="/image/background2.svg" alt="" width={600} height={200} />
      </div>
    </>
  );
};

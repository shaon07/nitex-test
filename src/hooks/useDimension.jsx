import { useEffect, useState } from "react";

export default function useDimension() {
  const [width, setWidth] = useState(0);

  const size = () => {
    setWidth(window.innerWidth);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  });
  return { width };
}

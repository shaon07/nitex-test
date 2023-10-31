import { useInView } from "react-intersection-observer";

export default function useIsView(triggerOnce = true) {
  const { ref, inView, entry } = useInView({
    triggerOnce: triggerOnce,
  });
  return { ref, inView, entry };
}

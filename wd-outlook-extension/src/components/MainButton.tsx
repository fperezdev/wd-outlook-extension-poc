import { useStore } from "@/stores/store";
import { Button } from "./ui/button";

const MainButton = () => {
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <Button
      className="w-[60px] h-[60px] pointer-events-auto text-3xl bg-[#22EDA3] text-[#181533] rounded-s-full"
      onClick={toggleMenu}
    >
      w
    </Button>
  );
};

export default MainButton;

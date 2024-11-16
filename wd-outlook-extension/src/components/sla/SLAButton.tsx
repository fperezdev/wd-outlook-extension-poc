import { useStore } from "@/stores/store";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import SLACount from "./SLACount";

interface SLAButtonProps {
  label: string;
  value: number;
  index: number;
}

const SLAButton = ({ label, value, index }: SLAButtonProps) => {
  const openMenu = useStore((state) => state.openMenu);

  const [openPopover, setOpenPopover] = useState(false);

  return (
    <Popover open={openPopover} onOpenChange={(open) => setOpenPopover(open)}>
      <PopoverTrigger asChild>
        <div
          style={{
            position: "absolute",
            top: openMenu ? `-${50 * (index + 1)}px` : 0,
            right: 10,
          }}
          className={`w-32 h-32 ${openMenu ? "opacity-100" : "opacity-0"} transition-[opacity,top] rounded-full bg-[#22EDA3]`}
        >
          <SLACount />
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="left"
        className="w-fit flex flex-col gap-2 bg-transparent shadow-none"
      >
        <p className="text-white text-sm">{label}</p>
        <p className="text-white text-lg">{value}</p>
      </PopoverContent>
    </Popover>
  );
};

export default SLAButton;

import MainButton from "./components/MainButton";
import PendingBadge from "./components/PendingBadge";
import SLAButton from "./components/sla/SLAButton";
import { useStore } from "./stores/store";

function App() {
  const selectedThreadId = useStore((state) => state.selectedThreadId);
  const pendingMessages = useStore((state) => state.pendingMessages);

  const currentThreadIsPending =
    selectedThreadId &&
    pendingMessages.some((m) => m.threadId === selectedThreadId);

  return (
    <div
      style={{
        position: "fixed",
        top: "45vh",
        right: 0,
        zIndex: 9999,
      }}
    >
      <MainButton />
      <SLAButton index={0} label="sla1" value={0} />
      {currentThreadIsPending && <PendingBadge />}
    </div>
  );
}

export default App;

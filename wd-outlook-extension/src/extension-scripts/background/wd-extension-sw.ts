// Background script for communication with backend
// cause the extension can't communicate with the background directly
// for outlook content security policy reasons
import { BACKEND_URL, ORIGIN } from "@/lib/consts";
import { io } from "socket.io-client";

let tabId: number | null = null;

const socket = io(BACKEND_URL, { transports: ["websocket"] });

// Receive pending messages
socket.on("messages", (body) => {
  if (!tabId) return;

  // Send to DOM through wd-extension-proxy
  chrome.tabs.sendMessage(tabId, {
    ...body,
    origin: ORIGIN.WD_EXTENSION_BACKGROUND_ORIGIN,
  });
});

// Receive from DOM through wd-extension-proxy
chrome.runtime.onMessage.addListener((request, sender) => {
  if (!request.data || request.data.origin !== ORIGIN.WD_EXTENSION_DOM_ORIGIN)
    return;

  tabId = sender.tab?.id || null;

  socket.emit("action", request.data);
});

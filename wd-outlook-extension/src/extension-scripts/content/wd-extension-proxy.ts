// Contents script that communicates DOM and Background
// Listen for messages from DOM
const ORIGIN = {
  WD_EXTENSION_DOM_ORIGIN: "WD_EXTENSION_DOM_ORIGIN",
  WD_EXTENSION_BACKGROUND_ORIGIN: "WD_EXTENSION_BACKGROUND_ORIGIN",
};

window.addEventListener("message", function (event) {
  if (event.origin !== this.window.location.origin) return;

  if (event.data.origin !== ORIGIN.WD_EXTENSION_DOM_ORIGIN) return;

  // Send messages to background
  this.chrome.runtime.sendMessage({ data: event.data });
});

// Listen for messages from background
chrome.runtime.onMessage.addListener((request) => {
  if (!request.data || request.origin !== ORIGIN.WD_EXTENSION_BACKGROUND_ORIGIN)
    return;
  // Send messages to DOM
  window.postMessage(request, "/");
});

const WD_EXTENSION_CONTAINER_ID = "wd-extension-container";

window.onload = () => {
  const extensionContainer = document.createElement("div");
  extensionContainer.id = WD_EXTENSION_CONTAINER_ID;
  document.body.appendChild(extensionContainer);

  const script = document.createElement("script");
  script.type = "module";
  script.src = chrome.runtime.getURL("src/index.js");
  document.body.appendChild(script);
};

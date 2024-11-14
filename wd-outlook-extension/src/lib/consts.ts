export const BACKEND_URL = "http://localhost:3001";

export const ORIGIN = {
  WD_EXTENSION_DOM_ORIGIN: "WD_EXTENSION_DOM_ORIGIN",
  WD_EXTENSION_BACKGROUND_ORIGIN: "WD_EXTENSION_BACKGROUND_ORIGIN",
};

export const SELECTOR = {
  WD_EXTENSION_CONTAINER_ID: "wd-extension-container",
  OUTLOOK_MAIL_READ: "[data-app-section='MailReadCompose']",
  OUTLOOK_MAIL_READ_NO_MESSAGE_ID: "EmptyState_MainMessage",
  OUTLOOK_MAIL_LIST: "[aria-activedescendant][role=listbox]",
  OUTLOOK_ACTIVE_LIST_ITEM_ID_ATTR: "aria-activedescendant",
  OUTLOOK_ACTIVE_LIST_ITEM_THREAD_ID_ATTR: "data-convid",
};

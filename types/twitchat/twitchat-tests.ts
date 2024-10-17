import Twitchat = require("twitchat");
// Cas passant : l'événement et l'action sont valides
const validEvent: Twitchat.EventType = "MESSAGE_READ"; // Cas passant
const validAction: Twitchat.ActionType = "CHAT_FEED_PAUSE"; // Cas passant
const validEnum: Twitchat.Icon = "tiktok"; // Cas passant

// Cas non passant : ceci est censé générer une erreur de type car la valeur n'existe pas
// @ts-expect-error: "INVALID_EVENT" n'est pas une valeur valide pour TwitchatEventType, c'est l'erreur attendue
const invalidEvent: Twitchat.EventType = "INVALID_EVENT"; // Cas non passant mais attendu
// @ts-expect-error: "INVALID_ACTION" n'est pas une valeur valide pour TwitchatActionType, c'est l'erreur attendue
const invalidAction: Twitchat.ActionType = "INVALID_ACTION"; // Cas non passant mais attendu
// @ts-expect-error: "invalid_icon" n'est pas une valeur valide pour Icon, c'est l'erreur attendue
const invalidEnum: Twitchat.Icon = "invalid_icon"; // Cas non passant mais attendu

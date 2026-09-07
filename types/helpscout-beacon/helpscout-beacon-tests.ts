// helpscout-beacon-tests.ts

window.Beacon("init", "1234567890");

window.Beacon("init", {
    beaconId: "1234567890",
    color: "#ff0000",
    mode: "askFirst",
    display: {
        position: "left",
        style: "iconAndText",
    },
});

window.Beacon("identify", {
    name: "Baver Bozdağ",
    email: "hello@example.com",
    jobTitle: "Frontend Developer",
    "Custom-Attribute": "Test",
});

window.Beacon("suggest", ["article-1", "article-2"]);
window.Beacon("suggest", [
    "article-1",
    { text: "Help Scout", url: "https://www.helpscout.com" },
]);

window.Beacon("on", "open", () => {
    console.log("Beacon opened!");
});

window.Beacon("logout", { endActiveChat: true, clearMessages: true });

if (window.Beacon.readyQueue) {
    window.Beacon.readyQueue.push({ method: "open" });
}

export function tsToDate(timestamp) {
    var date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("FR-fr", { hour: "2-digit", minute: "2-digit" });
}

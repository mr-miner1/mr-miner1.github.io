setTimeout(epic, 10);
function epic(params) {
    document.getElementById("discord2").addEventListener("click", () => {document.getElementById("theme").style.fontSize = "30px"; document.getElementById("plugins").style.fontSize = "30px"; document.getElementById("discord2").textContent = "Discord Projects ▽"})
    document.getElementById("theme").addEventListener("click", () => {document.getElementById("betterbadges").style.fontSize="18px"; document.getElementById("deepdark").style.fontSize = "18px"; document.getElementById("theme").textContent = "Themes ▽"})
    document.getElementById("plugins").addEventListener("click", () => {document.getElementById("none").style.fontSize="18px"; document.getElementById("plugins").textContent = "Plugins ▽"})
    document.getElementById("betterbadges").addEventListener("mouseover", () => {document.getElementById("preview").style = 'background-image: url("https://i.imgur.com/0Fkk8TL.gif");height: 80px; width: 200px;'})
    document.getElementById("deepdark").addEventListener("mouseover", () => {document.getElementById("preview").style = 'background-image: url("https://i.imgur.com/erTtLUi.gif"); height:500px; width:700px; transform: translate(50px);'})
}
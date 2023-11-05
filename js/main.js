function findParentByTagName(element, tagName) {
    var parent = element;

    while (parent !== null && parent.tagName !== tagName.toUpperCase()) {
        parent = parent.parentNode;
    }

    return parent;
}

function handleAnchorClick(event) {
    event = event || window.event;

    if (findParentByTagName(event.target || event.srcElement, "A")) {
        // event.preventDefault();
        console.log("An anchor was clicked!");
        let randomguideline = dataGlobal[Math.floor(Math.random() * dataGlobal.length)] || [];
        console.log(randomguideline);
        writeGuideline(randomguideline);
        dataGlobal.pop(randomguideline);
        console.log(dataGlobal.length);
    }
}

document.documentElement.addEventListener("click", handleAnchorClick, false);

let dataGlobal;

const getData = async () => {
     const response = await fetch("https://raw.githubusercontent.com/w3c/sustyweb/main/guidelines.json");
     const data = await response.json();
     dataGlobal = data.category[1].guidelines;
     return data;
};
   
(async () => {
    await getData();
})();

function writeGuideline (inp) {
    document.getElementById("headline").textContent = inp.guideline;

}


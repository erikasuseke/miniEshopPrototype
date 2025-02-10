const produktaiJSON = localStorage.getItem("produktai");
const produktai = produktaiJSON === null ? [] : JSON.parse(produktaiJSON);
console.log(produktai);

let nowUpdatingProductIndex;

updateHtmlTable();

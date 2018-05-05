(function(){
	document.querySelector("#title").innerHTML=browser.i18n.getMessage("options");
	document.querySelector("#label1").innerHTML=browser.i18n.getMessage("normal");
	document.querySelector("#label2").innerHTML=browser.i18n.getMessage("private");
	document.querySelector("#submit").innerHTML=browser.i18n.getMessage("save");
})();

function saveOptions(e) {
  browser.storage.local.set({
    normalMode: document.querySelector("#normalMode").checked,
    privateMode: document.querySelector("#privateMode").checked
  });
  e.preventDefault();
}

function restoreOptions() {
  browser.storage.local.get().then(result=>{
    document.querySelector("#normalMode").checked = result.normalMode;
    document.querySelector("#privateMode").checked = result.privateMode;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

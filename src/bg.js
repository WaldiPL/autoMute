(function (){
	browser.storage.local.get().then(result=>{
		if(result.normalMode===undefined)browser.storage.local.set({normalMode:true,privateMode:true});
	});
	browser.tabs.onCreated.addListener(autoMute);
})();

function autoMute(tab){
	browser.storage.local.get().then(result=>{
		const normalMode  = result.normalMode;
		const privateMode = result.privateMode;
		if((tab.incognito&&privateMode)||(!tab.incognito&&normalMode)){
			browser.tabs.update(tab.id,{
				muted: true
			});
		}
	});
}

(function(){
var b64=(window.VIDEO_CHUNKS||[]).join('');
if(!b64) return;
var bin=atob(b64), arr=new Uint8Array(bin.length);
for(var i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i);
var url=URL.createObjectURL(new Blob([arr],{type:'video/mp4'}));
document.querySelectorAll('video[data-michwat-video]').forEach(function(v){v.src=url;});
})();
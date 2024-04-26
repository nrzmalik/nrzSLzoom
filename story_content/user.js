function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WrsoP7MtL8":
        Script1();
        break;
      case "5WdidzTuOpO":
        Script2();
        break;
      case "6DKhn1BG1Wd":
        Script3();
        break;
      case "6H8Xssf3PlP":
        Script4();
        break;
      case "6OHxDT8GQRt":
        Script5();
        break;
      case "6FcuttLjUpa":
        Script6();
        break;
      case "68PauNhXm4A":
        Script7();
        break;
      case "6Kjfh0nPCQF":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function appendScripts() {
  const head = document.head;
  const scriptUrls = [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/4.0.0-beta/jquery.js',
    'https://cdn.jsdelivr.net/gh/nrzmalik/noraiz/nrzZoom.js'
  ];

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      head.appendChild(script);
    });
  };

  const loadAllScripts = async () => {
    for (const url of scriptUrls) {
      await loadScript(url);
    }
    console.log('All scripts are loaded');
  };

  loadAllScripts();
}

appendScripts();

}

window.Script2 = function()
{
  nrzZoom("7");
}

window.Script3 = function()
{
  nrzZoom("5");
}

window.Script4 = function()
{
  nrzZoom("1");
}

window.Script5 = function()
{
  nrzZoom("6");
}

window.Script6 = function()
{
  nrzZoom("3");
}

window.Script7 = function()
{
  nrzZoom("2");
}

window.Script8 = function()
{
  nrzZoom("4");
}

};

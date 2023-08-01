//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const browserInfoDiv = document.getElementById("browser-info");

  const browserName = getBrowserName();
  const version = getBrowserVersion();

  browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
});

function getBrowserName() {
  const userAgent = navigator.userAgent;

  if (userAgent.indexOf("Chrome") > -1) {
    return "Google Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    return "Mozilla Firefox";
  } else if (userAgent.indexOf("Edge") > -1) {
    return "Microsoft Edge";
  } else if (userAgent.indexOf("Safari") > -1) {
    return "Apple Safari";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    return "Opera";
  } else {
    return "Unknown Browser";
  }
}

function getBrowserVersion() {
  const userAgent = navigator.userAgent;

  const chromeVersion = userAgent.match(/Chrome\/(\d+)/);
  if (chromeVersion) {
    return chromeVersion[1];
  }

  const firefoxVersion = userAgent.match(/Firefox\/(\d+)/);
  if (firefoxVersion) {
    return firefoxVersion[1];
  }

  const edgeVersion = userAgent.match(/Edge\/(\d+)/);
  if (edgeVersion) {
    return edgeVersion[1];
  }

  const safariVersion = userAgent.match(/Version\/(\d+)/);
  if (safariVersion) {
    return safariVersion[1];
  }

  const operaVersion = userAgent.match(/OPR\/(\d+)/);
  if (operaVersion) {
    return operaVersion[1];
  }

  return "Unknown";
}

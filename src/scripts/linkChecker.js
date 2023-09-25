// Function to resolve a URL and capture the final destination URL
function resolveURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            const finalURL = xhr.responseURL || url;
            callback(finalURL);
        }
    };
    xhr.send();
}


const mainRegion = document.getElementById('region-main');


if (mainRegion) {
    const selectedElements = mainRegion.querySelectorAll('.activity.activity-wrapper:not(.label)');
    if (selectedElements.length > 0) {
        selectedElements.forEach(selectedElement => {
            console.log(selectedElement);
            const links = selectedElement.querySelectorAll('a');

            links.forEach(link => {
                const href = link.getAttribute('href');
                const instancename = link.querySelector('.instancename');

                resolveURL(href, finalURL => {
                    console.log(`Original URL: ${href}`);
                    console.log(`Final URL: ${finalURL}`);

                    if (finalURL.endsWith('.pdf')) {
                        instancename.textContent += ' (PDF)';
                    }
                    else if (finalURL.endsWith(".pptx")) {
                        instancename.textContent += ' (PowerPoint)';
                    }
                    else if (finalURL.endsWith(".docx")) {
                        instancename.textContent += ' (Word)';
                    }
                    else if (finalURL.endsWith(".xlsx")) {
                        instancename.textContent += ' (Excel)';
                    }
                    else if (finalURL.endsWith(".zip")) {
                        instancename.textContent += ' (ZIP)';
                    }
                });
            });
        });

    } else {
        console.log('Keine passenden Elemente gefunden.');
    }
} else {
    console.log('Das Element mit der ID "region-main" wurde nicht gefunden.');
}


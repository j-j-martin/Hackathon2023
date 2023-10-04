/**
 * This method checks all given URLs and returns the final URL that is reached after all redirects.
 * @param url the URL to check
 * @param callback the callback function that is called after the final URL is found
 */
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
// Get the main region of the page.
const mainRegion = document.getElementById('region-main');

/**
 * This method takes the final URLs and adds a label to the corresponding activity.
 */
if (mainRegion) {
    const selectedElements = mainRegion.querySelectorAll('.activity.activity-wrapper:not(.label)');
    if (selectedElements.length > 0) {
        selectedElements.forEach(selectedElement => {
            console.log(selectedElement);
            const links = selectedElement.querySelectorAll('a');

            links.forEach(link => {
                const href = link.getAttribute('href');
                let instanceName = link.querySelector('.instancename');

                resolveURL(href, finalURL => {
                    console.log(`Original URL: ${href}`);
                    console.log(`Final URL: ${finalURL}`);

                    if (finalURL.includes("https://moodle.itech-bs14.de/mod/url")) {
                        //catch other moodle links that currently dont work
                    }
                    if (finalURL.endsWith('.pdf')) {
                        instanceName.textContent += ' (PDF)';
                    }
                    else if (finalURL.endsWith(".pptx")) {
                        instanceName.textContent += ' (PowerPoint)';
                    }
                    else if (finalURL.endsWith(".docx")) {
                        instanceName.textContent += ' (Word)';
                    }
                    else if (finalURL.endsWith(".xlsx")) {
                        instanceName.textContent += ' (Excel)';
                    }
                    else if (finalURL.endsWith(".zip")) {
                        instanceName.textContent += ' (ZIP)';
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

const main = document.getElementById('region-main');

if (main) {
  chrome.storage.local.clear();
  chrome.storage.local.set({ moodleLinks: [] });
  const images = [];
  const links = [];
  const selectedElements = main.querySelectorAll('.activity.activity-wrapper:not(.label)');
  console.log(chrome.storage);
  if (selectedElements.length > 0) {
    let link = '';
    selectedElements.forEach((element, index) => {
      link = element.querySelector('a');
      if (link) {
        links[index] = link.href;
      } else {
        links[index] = '';
      }
      let img = images[index];
      img = document.createElement('img');
      img.src = chrome.runtime.getURL('icons/star.png');

      img.addEventListener('click', function () {
        if (img.src === chrome.runtime.getURL('icons/star.png')) {
          img.src = chrome.runtime.getURL('icons/star_filled.png');
          appendLink(links[index]);
        } else {
          img.src = chrome.runtime.getURL('icons/star.png');
          deleteLink(links[index]);
        }
      });
      element.firstElementChild.firstElementChild.firstElementChild.prepend(img);
      console.log(img.src);
      console.log(`Element ${index + 1}:`, element);
      console.log(`Element ${index + 1}:`, link);
    });
  } else {
    console.log('Keine passenden Elemente gefunden.');
  }
} else {
  console.log('Das Element mit der ID "region-main" wurde nicht gefunden.');
}

const appendLink = async (link) => {
  chrome.storage.local.get(['moodleLinks'], function (result) {
    let moodleLinks = result.moodleLinks || [];
    moodleLinks.push(link);
    chrome.storage.local.set({ moodleLinks: moodleLinks });
  });
};

const deleteLink = async (link) => {
  chrome.storage.local.get(['moodleLinks'], function (result) {
    let moodleLinks = [];
    if (result.moodleLinks) {
      moodleLinks = result.moodleLinks;
    }
    const index = moodleLinks.indexOf(link);
    moodleLinks.splice(index, 1);
    chrome.storage.local.set({ moodleLinks: moodleLinks });
  });
};

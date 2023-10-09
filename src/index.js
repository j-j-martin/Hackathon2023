chrome.storage.local.get(['moodleLinks'], function (result) {
  console.log(result.moodleLinks);
  let moodleLinks = [];
  if (result.moodleLinks) {
    moodleLinks = result.moodleLinks;
  }
  moodleLinks.forEach((link) => {
    const a = document.createElement('a');
    a.className = 'links';
    const linkTextNode = document.createTextNode(link);
    a.appendChild(linkTextNode);
    a.href = link;
    a.addEventListener('click', (event) => {
      event.preventDefault();
      chrome.tabs.create({ url: link });
    });
    const div = document.createElement('div');
    div.appendChild(a);
    document.querySelector('body').append(div);
  });
});

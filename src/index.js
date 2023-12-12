chrome.storage.local.get(['moodleLinks'], function (result) {
  console.log(result.moodleLinks);
  let moodleLinks = [];
  if (result.moodleLinks) {
    moodleLinks = result.moodleLinks;
  }
  moodleLinks.forEach((link) => {
    const a = document.createElement('a');
    a.className = 'links';
    const linkTextNode = document.createTextNode(link[1]);
    console.log[link[1]];
    a.appendChild(linkTextNode);
    a.href = link[0];
    a.addEventListener('click', (event) => {
      event.preventDefault();
      chrome.tabs.create({ url: link[0] });
    });
    const div = document.createElement('div');
    div.appendChild(a);
    document.querySelector('body').append(div);
  });
});

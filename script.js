const getNews = () => {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    if (userInput === 'news') {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/ndtvnews-top-stories&api_key=kgxodxyobikxzffocnnnbptw8ny5ky6e0px2ujbq')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    const items = data.items;
                    let newsHtml = '';
                    items.slice(0, 8).forEach(item => { 
                        const title = item.title;
                        const link = item.link;
                        newsHtml += `<p><a href="${link}" target="_blank">${title}</a></p>`;
                    });
                    document.getElementById('chatBox').innerHTML = newsHtml;
                } else {
                    console.error('Error fetching the news:', data.message);
                }
            })
            .catch(error => console.error('Error fetching the news:', error));
        } else {
            alert('Please type "news" to get the latest news.');
        }
    document.getElementById('userInput').value = '';
}
document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    getNews();
});

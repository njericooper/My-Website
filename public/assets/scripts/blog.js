function requestUserRepos(username){
    const xhr = new XMLHttpRequest();
    const url = `https://dev.to/api/articles?username=${username}`;
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        for(let i in data) {
            let ul = document.getElementById('blogPosts');
            let li = document.createElement('li');
            li.classList.add('posts');
            li.innerHTML = (`
            <a href="${data[i].url}"><img src="${data[i].cover_image}" class="coverImage"></a>
            <h4 class="articleTitle"><a href="${data[i].url}">${data[i].title}</a><h4>
            <p class="des">${data[i].description}</p>
            `);
            ul.appendChild(li);
        }
    }
    xhr.send();   
}
requestUserRepos('njericooper');


function showPost(id) {
    const postUrl = `https://dev.to/api/articles/${id}`;
}
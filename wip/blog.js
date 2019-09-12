var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.github.com/users/njericooper/repos');
myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 200) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        document.getElementById('ajax-content').innerHTML = myRequest.responseText;
    }
};

function sendTheAJAX() {
    myRequest.send();
    document.getElementById('reveal').style.display = 'none';
}
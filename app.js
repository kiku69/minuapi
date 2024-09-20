document.getElementById('fetchData').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const output = document.getElementById('output');
            if (this.status === 200) {
                output.textContent = this.responseText;
            } else {
                output.textContent = `Error: ${this.status} - ${this.statusText}`;
            }
        }
    });

    xhr.open('GET', 'https://twitter241.p.rapidapi.com/following-ids?username=mrbeast&count=500');
    xhr.setRequestHeader('x-rapidapi-key', '185f88d8d5msh16b9468db99ad77p17cfa8jsn13740e396de5');
    xhr.setRequestHeader('x-rapidapi-host', 'twitter241.p.rapidapi.com');

    xhr.send();
});

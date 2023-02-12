btn.onclick = function (e) {
    e.preventDefault();

    const apiKey = 'J1WWLZPEmWKhYBFWyPRtIJu61byj77ui';
    let searchKeyword = document.getElementById('search').value;
    //const limit = 5;
    const limit = document.querySelector("#limit").value;
    try {
        if (limit <= 5) {
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchKeyword}&limit=${limit}&offset=0&rating=g&lang=en`)
                .then(response => response.json())
                .then(gif => {
                    document.querySelector('#results').innerHTML = '';
                    document.getElementById('search').value = '';
                    document.querySelector("#limit").value = '';
                    for (let i = 0; i < limit; i++) {
                        //console.log(gif.data[i]);
                        const div = document.createElement('div');
                        const newImage = document.createElement('img');
                        const title = document.createElement('h6');
                        newImage.src = gif.data[i].images.fixed_height.url;
                        title.innerText = gif.data[i].title;
                        div.append(newImage, title)
                        let target = document.querySelector('#results');
                        target.append(div);
                    }
                });
        } else {
            throw new Error("Количество должно быть меньше или равно 5");
        }
    } catch (error) {
        //alert(error.message);
        results.innerHTML = `${error.message}`;
    }
}
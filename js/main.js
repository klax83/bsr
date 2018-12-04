function bookSearch() {
        var search = document.getElementById('input').value;
        document.getElementById('results').innerHTML = '';

        $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: 'json',
        type: 'GET',

        success: function(data) {
                console.log(data);  

                for(var i = 0; i < data.items.length; i++) {
                        var jdata = data.items[i].volumeInfo;

                        var div = document.createElement('div');
                        var img = document.createElement('img');
                        var h2 = document.createElement('h2');
                        var h3 = document.createElement('h3');
                        var h4 = document.createElement('h4');
                        var a = document.createElement('a');
                        
                        div.className = 'resultDiv my-3 container bg-info p-2'
                        a.className = 'btn btn-primary' 
                        img.className = 'left';

                        h2.innerText = jdata.title;
                        a.innerText = "Learn More";

                        a.href = jdata.infoLink;
                        a.setAttribute('taget', '_blank');

                        if(jdata.imageLinks) {
                                img.src = jdata.imageLinks.thumbnail;
                        } else {
                                img.src = 'data:image/jpeg;base64,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';
                        };

                        if(jdata.publishedDate) {
                                h4.innerText = jdata.publishedDate;
                        } else {
                                h4.innerText = 'no publish date found';
                        };

                         if(jdata.authors) {
                                h3.innerText = jdata.authors;
                        } else {
                                h3.innerText = 'no author found';
                        };

                        div.appendChild(img);
                        div.appendChild(h2);
                        div.appendChild(h3);
                        div.appendChild(h4);
                        div.appendChild(a);

                        $("#results").append(div);
                        $("#results").append('<hr>')






                }

        }

        })

}

$("#search")[0].addEventListener('click', bookSearch, false)
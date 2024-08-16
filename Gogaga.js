document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating .badge');

    // Set initial active stars
    stars.forEach(star => {
        if (star.getAttribute('data-rating') == '3' || star.getAttribute('data-rating') == '4') {
            star.classList.add('active');
        }
    });

    stars.forEach(star => {
        star.addEventListener('click', function() {
            if (star.classList.contains('active')) {
                star.classList.remove('active');
            } else {
                star.classList.add('active');
            }
        });
    });

    document.getElementById('tours-btn').addEventListener('click', function() {
        const tourData = [{
                name: "Dubai",
                image: "https://media.cntraveler.com/photos/5baa751ec4c3254b31283ffd/master/pass/GettyImages-173051814.jpg",
                rating: 4.5
            },
            {
                name: "India",
                image: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
                rating: 4.9
            },
            {
                name: "USA",
                image: "https://www.worldatlas.com/r/w1200/upload/bb/60/f3/shutterstock-389133124.jpg",
                rating: 4.0
            },
            {
                name: "France",
                image: "https://www.orlyairport.net/images/blog/eiffel-tower-paris.jpg",
                rating: 4.6
            },
            {
                name: "Fiji",
                image: "https://fthmb.tqn.com/Rndy-NyiyNESUTQOOEiCbBCH2DY=/2121x1414/filters:fill(auto,1)/GettyImages-709116981-5922adc35f9b58f4c086c493.jpg",
                rating: 3.5
            }
        ];

        const tourResultsDiv = document.getElementById('tour-results');
        tourResultsDiv.innerHTML = '';

        tourData.forEach(tour => {
            const tourHtml = `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${tour.image}" class="img-fluid rounded-start" alt="${tour.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${tour.name}</h5>
                                <p class="card-text">Rating: ${tour.rating} <i class="bi bi-star-fill"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            tourResultsDiv.innerHTML += tourHtml;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating .badge');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            if (star.classList.contains('active')) {
                star.classList.remove('active');
            } else {
                star.classList.add('active');
            }
        });
    });
});
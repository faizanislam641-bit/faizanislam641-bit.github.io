/* =========================================
   MOBILE MENU
========================================= */

const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu) {

    menu.addEventListener('click', () => {

        links.classList.toggle('open');

    });


    links.querySelectorAll('a').forEach(a => {

        a.addEventListener('click', () => {

            links.classList.remove('open');

        });

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: .12
    }

);


document
    .querySelectorAll('.reveal')
    .forEach(el => {

        observer.observe(el);

    });


/* =========================================
   VISITOR COUNTER
========================================= */

const visitorCount =
    document.getElementById('visitorCount');


if (visitorCount) {

    let visits =
        localStorage.getItem(
            'faizanPortfolioVisits'
        );


    if (!visits) {

        visits = 1;

    } else {

        visits =
            parseInt(visits) + 1;

    }


    localStorage.setItem(
        'faizanPortfolioVisits',
        visits
    );


    visitorCount.textContent =
        visits.toLocaleString();

}

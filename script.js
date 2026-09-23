// ===============================
// MOBILE MENU
// ===============================
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu && links) {
    menu.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
        });
    });
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
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
        threshold: 0.12
    }
);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});


// ===============================
// REAL PUBLIC VISITOR COUNTER
// ===============================

const SUPABASE_URL = 'https://zjiybgviwefsamfsixxs.supabase.co';

// এখানে তোমার Supabase Publishable Key বসাবে
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_X67n7QhXHSq8cbO4osJjmQ_ET4WjqKX';

const visitorCount = document.getElementById('visitorCount');

async function updateVisitorCount() {

    if (!visitorCount) return;

    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/rpc/increment_portfolio_visits`,
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_PUBLISHABLE_KEY,
                    'Authorization': `Bearer ${SUPABASE_PUBLISHABLE_KEY}`
                },

                body: JSON.stringify({})
            }
        );

        if (!response.ok) {
            throw new Error('Visitor counter request failed');
        }

        const totalVisits = await response.json();

        visitorCount.textContent =
            Number(totalVisits).toLocaleString();

    } catch (error) {

        console.error('Visitor Counter Error:', error);

        // যদি database থেকে count না আসে,
        // তাহলে 0 দেখাবে
        visitorCount.textContent = '0';
    }
}

updateVisitorCount();

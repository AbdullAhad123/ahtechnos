/* Portfolio showcase: filters + project detail window */
(function () {
    var PROJECTS = [
 {
  "id": "dalfa",
  "title": "Dalfa Pak",
  "type": "app",
  "image": "assets/img/dalfa_app.jpg",
  "industry": "Livestock & Agritech",
  "platform": "Android & iOS",
  "stack": [
   "React Native",
   "Android",
   "iOS"
  ],
  "short": "A livestock marketplace app for Pakistan's cattle industry, with animal listings, live auctions and cattle show updates.",
  "overview": [
   "Dalfa Pak is a mobile marketplace built for Pakistan's dairy and livestock community. Cattle farms can list animals with breed, age and weight details, and buyers can browse new arrivals, promotions and auctions in one place.",
   "The app also brings the association's cattle shows, exhibitions, news and Code of Conduct verification straight to members' phones."
  ],
  "features": [
   "Animal listings with photos, breed, age and price",
   "Live auctions with in-app bidding",
   "New arrivals and promotions feeds",
   "Cattle show and exhibition updates",
   "Code of Conduct member verification",
   "News, search and push notifications"
  ]
 },
 {
  "id": "pcolink",
  "title": "PCO Link",
  "type": "web",
  "image": "assets/img/PCO.Link Portfolio post (1).jpg",
  "industry": "Automotive & Car Hire",
  "platform": "Responsive Website",
  "stack": [
   "Web Design",
   "Frontend",
   "SEO"
  ],
  "short": "A website for a London PCO car hire company that rents Uber-ready vehicles to private hire and rideshare drivers.",
  "overview": [
   "PCOLINK rents clean, TfL-compliant PCO cars to private hire and rideshare drivers from its Chadwell Heath branch in East London.",
   "The website showcases the full fleet, from the electric Nissan Leaf and Tesla Model 3 to plug-in hybrids and a 7-seater VW Sharan, with clear weekly pricing. Drivers can check the requirements and request a car in three simple steps."
  ],
  "features": [
   "Fleet showcase with specs and weekly pricing",
   "Simple three-step booking enquiry",
   "Driver requirements and detailed FAQ",
   "Testimonials from drivers across the UK",
   "Blog on PCO rules and earning tips",
   "Fast, mobile-first responsive layout"
  ]
 },
 {
  "id": "frontpay",
  "title": "FrontPay",
  "type": "app",
  "image": "assets/img/frontpay_app.jpg",
  "industry": "Fintech & Payments",
  "platform": "Android & iOS",
  "stack": [
   "Mobile App",
   "Android",
   "iOS"
  ],
  "short": "A payments app for Pakistan that lets people and businesses send, request and collect money with a phone number or email.",
  "overview": [
   "FrontPay works like PayPal for Pakistan. Users can send instant payments to friends and suppliers anywhere in the country.",
   "Businesses can collect payments from customers around the world using a phone number, an email address or a shareable payment link. Merchants can also build order summaries and submit invoices directly from the app."
  ],
  "features": [
   "Instant money transfers within Pakistan",
   "Request and collect payments by phone, email or link",
   "Top up with a debit or credit card",
   "Invoices with order summary and transaction fees",
   "Complete payment and transaction history",
   "Share payment links on social media"
  ]
 },
 {
  "id": "quitclaim",
  "title": "QuitClaim Web App",
  "type": "web",
  "image": "assets/img/Quitclaim.jpg",
  "industry": "Real Estate",
  "platform": "Web Application",
  "stack": [
   "Web App",
   "Frontend",
   "UI/UX"
  ],
  "short": "A real estate platform that connects property owners who need a quick transfer with investors, built around quitclaim deeds.",
  "overview": [
   "Quitclaim.express connects property owners who need to transfer a property quickly with investors looking for new opportunities.",
   "The platform mediates every deal to keep it fair and transparent, and guides the quitclaim deed process from listing to completion. Users can search by location, property type and transaction method."
  ],
  "features": [
   "Property search by location, type and deal method",
   "Featured listings with beds, area and price",
   "Property listing submission for owners",
   "User registration and secure login",
   "Mediated, transparent transactions",
   "Success stories, FAQs and contact forms"
  ]
 },
 {
  "id": "areawide",
  "title": "Areawide Waterproofing",
  "type": "app",
  "image": "assets/img/areawide_app.jpg",
  "industry": "Construction & Home Services",
  "platform": "Android & iOS",
  "stack": [
   "Mobile App",
   "Android",
   "iOS"
  ],
  "short": "A referral partner app for a waterproofing company, used to submit new leads and track earnings and closed deals.",
  "overview": [
   "AreaWide Waterproofing works with referral partners who send new customers their way. We built a mobile app that makes this process simple and transparent.",
   "Partners can submit a lead in seconds, follow its progress and see exactly what they have earned. A clean dashboard shows total submissions, total earnings and deals closed at a glance."
  ],
  "features": [
   "Partner dashboard with live stats",
   "Quick lead submission form",
   "Earnings and closed deal tracking",
   "Team and referral management",
   "Partner profile and account settings",
   "Available on Android and iOS"
  ]
 },
 {
  "id": "giveaway",
  "title": "Giveaway Marketplace",
  "type": "app",
  "image": "assets/img/giveaway_app.jpg",
  "industry": "E-commerce",
  "platform": "Android",
  "stack": [
   "Mobile App",
   "Android",
   "E-commerce"
  ],
  "short": "A marketplace app where people and businesses list free item giveaways, promotions and contests for users to enter.",
  "overview": [
   "Giveaway Marketplace connects individuals and businesses through giveaways. Users can discover free products, exclusive discounts and contests across categories like electronics, fashion, beauty and home decor.",
   "Each listing explains the item, the entry requirements and how long the promotion runs. Users follow simple entry steps, track their entries and get notified when winners are announced."
  ],
  "features": [
   "Giveaways from individuals and businesses",
   "Categories from electronics to home decor",
   "Detailed listings with entry rules and deadlines",
   "Easy entry tasks like sharing or trivia",
   "Entry tracking for every user",
   "Winner announcement notifications"
  ]
 },
 {
  "id": "tutors",
  "title": "TutorsElevenPlus",
  "type": "web",
  "image": "assets/img/tutorselevenplus.jpg",
  "industry": "Education",
  "platform": "Web Platform",
  "stack": [
   "Web App",
   "Frontend",
   "Backend"
  ],
  "short": "An online learning platform that prepares UK students for 11+ entrance exams with lessons, practice papers and live tests.",
  "overview": [
   "TutorsElevenPlus is an online platform that prepares children in Years 3 to 5 for the UK 11+ and independent school entrance exams.",
   "It covers English, Maths, Verbal Reasoning and Non-Verbal Reasoning through video lessons, interactive activities and practice papers. Parents can follow their child's progress through a dedicated parent portal."
  ],
  "features": [
   "English, Maths, Verbal and Non-Verbal Reasoning",
   "Practice papers and question sets",
   "Live exams and timed tests",
   "Learning journey planners by topic",
   "Parent portal with progress tracking",
   "Monthly and yearly subscription plans"
  ]
 },
 {
  "id": "trolleymate",
  "title": "TrolleyMate",
  "type": "web",
  "image": "assets/img/Trolleymate.jpg",
  "industry": "Grocery & Delivery",
  "platform": "Responsive Website",
  "stack": [
   "Web App",
   "Frontend",
   "Backend"
  ],
  "short": "A same-day grocery delivery website that helps UK shoppers find the best local stores and order to their door.",
  "overview": [
   "TrolleyMate is a same-day grocery delivery platform for the United Kingdom. Shoppers enter their location to find the best local grocery stores near them and order for delivery.",
   "The site includes a store finder, store ratings, category browsing and a recipe blog that inspires customers to cook with what they buy."
  ],
  "features": [
   "Same-day grocery delivery",
   "Search across items and stores",
   "Store finder and Near Me by location",
   "Best stores with ratings",
   "Shopping by category",
   "Recipe and cooking blog"
  ]
 },
 {
  "id": "oneli",
  "title": "Oneli Builders",
  "type": "web",
  "image": "assets/img/Oneli-Builders.jpg",
  "industry": "Construction",
  "platform": "Responsive Website",
  "stack": [
   "Web Design",
   "Frontend",
   "UI/UX"
  ],
  "short": "An elegant website for a construction firm in London and Kent that turns dream homes into reality.",
  "overview": [
   "Oneli Builders is a construction company serving homeowners across London and Kent. We designed a warm, elegant website that reflects the quality of their work.",
   "The site presents their services and finished projects, and makes it easy for visitors to call or start a new project enquiry."
  ],
  "features": [
   "Elegant, brand-led visual design",
   "Showcase of recent construction work",
   "Clear service and about sections",
   "One-tap call and project enquiry buttons",
   "Responsive on mobile, tablet and desktop",
   "Fast loading and SEO friendly"
  ]
 }
];

    var byId = {};
    PROJECTS.forEach(function (p) { byId[p.id] = p; });

    var TYPE_LABEL = { app: 'Mobile App', web: 'Website' };
    var modalEl, modal, visibleIds = [], currentIndex = 0;

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text != null) e.textContent = text;
        return e;
    }

    function buildModal() {
        modalEl = document.createElement('div');
        modalEl.className = 'modal fade';
        modalEl.id = 'projectModal';
        modalEl.tabIndex = -1;
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.setAttribute('aria-labelledby', 'pmTitle');
        modalEl.innerHTML =
            '<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">' +
              '<div class="modal-content">' +
                '<button type="button" class="pm_close" data-bs-dismiss="modal" aria-label="Close"><i class="bx bx-x"></i></button>' +
                '<div class="modal-body p-0">' +
                  '<div class="pm_hero"><img id="pmImage" alt=""></div>' +
                  '<div class="pm_body"><div class="row g-4">' +
                    '<div class="col-lg-8">' +
                      '<div class="pm_tags" id="pmTags"></div>' +
                      '<h3 class="pm_title" id="pmTitle"></h3>' +
                      '<div class="pm_text" id="pmOverview"></div>' +
                      '<h4 class="pm_heading">Key features</h4>' +
                      '<ul class="pm_features" id="pmFeatures"></ul>' +
                    '</div>' +
                    '<div class="col-lg-4"><aside class="pm_side">' +
                      '<div class="pm_meta"><span>Category</span><strong id="pmType"></strong></div>' +
                      '<div class="pm_meta"><span>Industry</span><strong id="pmIndustry"></strong></div>' +
                      '<div class="pm_meta"><span>Platform</span><strong id="pmPlatform"></strong></div>' +
                      '<div class="pm_meta border-0"><span>Services</span><div class="pm_stack" id="pmStack"></div></div>' +
                      '<div class="pm_cta"><p>Have a similar idea? Let\'s build it together.</p>' +
                        '<a href="contact.html" class="btn_blue fs_6 hover_shadow w-100"><span>Start your project <i class="bx bx-right-arrow-alt ms-1"></i></span></a>' +
                      '</div>' +
                    '</aside></div>' +
                  '</div></div>' +
                '</div>' +
                '<div class="pm_nav">' +
                  '<button type="button" id="pmPrev"><i class="bx bx-left-arrow-alt"></i> Previous</button>' +
                  '<button type="button" id="pmNext">Next <i class="bx bx-right-arrow-alt"></i></button>' +
                '</div>' +
              '</div>' +
            '</div>';
        document.body.appendChild(modalEl);
        modal = new bootstrap.Modal(modalEl);
        modalEl.querySelector('#pmPrev').addEventListener('click', function () { step(-1); });
        modalEl.querySelector('#pmNext').addEventListener('click', function () { step(1); });
        modalEl.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') step(-1);
            if (e.key === 'ArrowRight') step(1);
        });
    }

    function render(p) {
        var img = modalEl.querySelector('#pmImage');
        img.src = p.image;
        img.alt = p.title + ' project preview';
        modalEl.querySelector('#pmTitle').textContent = p.title;
        modalEl.querySelector('#pmType').textContent = TYPE_LABEL[p.type];
        modalEl.querySelector('#pmIndustry').textContent = p.industry;
        modalEl.querySelector('#pmPlatform').textContent = p.platform;

        var tags = modalEl.querySelector('#pmTags');
        tags.innerHTML = '';
        tags.appendChild(el('span', 'pm_tag', TYPE_LABEL[p.type]));
        tags.appendChild(el('span', 'pm_tag', p.industry));

        var ov = modalEl.querySelector('#pmOverview');
        ov.innerHTML = '';
        p.overview.forEach(function (t) { ov.appendChild(el('p', null, t)); });

        var ul = modalEl.querySelector('#pmFeatures');
        ul.innerHTML = '';
        p.features.forEach(function (f) {
            var li = el('li');
            li.appendChild(el('i', 'bx bx-check-circle'));
            li.appendChild(el('span', null, f));
            ul.appendChild(li);
        });

        var st = modalEl.querySelector('#pmStack');
        st.innerHTML = '';
        p.stack.forEach(function (s) { st.appendChild(el('span', null, s)); });

        var body = modalEl.querySelector('.modal-body');
        if (body) body.scrollTop = 0;
        var single = visibleIds.length < 2;
        modalEl.querySelector('#pmPrev').style.visibility = single ? 'hidden' : 'visible';
        modalEl.querySelector('#pmNext').style.visibility = single ? 'hidden' : 'visible';
    }

    function step(dir) {
        if (visibleIds.length < 2) return;
        currentIndex = (currentIndex + dir + visibleIds.length) % visibleIds.length;
        render(byId[visibleIds[currentIndex]]);
    }

    function open(id, section) {
        if (!byId[id]) return;
        if (!modalEl) buildModal();
        visibleIds = Array.prototype.map.call(
            section.querySelectorAll('.pf_item:not(.pf_hidden) .pf_card'),
            function (c) { return c.getAttribute('data-project'); }
        );
        currentIndex = Math.max(0, visibleIds.indexOf(id));
        render(byId[id]);
        modal.show();
    }

    function init(section) {
        section.querySelectorAll('.pf_card').forEach(function (card) {
            card.addEventListener('click', function () { open(card.getAttribute('data-project'), section); });
            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    open(card.getAttribute('data-project'), section);
                }
            });
        });

        var buttons = section.querySelectorAll('.pf_filter');
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var f = btn.getAttribute('data-filter');
                buttons.forEach(function (b) {
                    b.classList.toggle('active', b === btn);
                    b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
                });
                section.querySelectorAll('.pf_item').forEach(function (item) {
                    var show = f === 'all' || item.getAttribute('data-category') === f;
                    item.classList.toggle('pf_hidden', !show);
                });
                if (window.AOS) AOS.refresh();
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var section = document.getElementById('portfolio');
        if (section && section.querySelector('.pf_card')) init(section);
    });
})();

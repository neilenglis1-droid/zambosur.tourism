// ==========================================
// 1. DATABASE: 7 CATEGORIZED DESTINATIONS
// ==========================================
// ==========================================
// 1. DATABASE: 15 CATEGORIZED DESTINATIONS
// ==========================================
const destinations = [
    // --- YOUR ORIGINAL 6 ---
    {
        id: 1,
        name: "Pulacan Falls",
        municipality: "Labangan",
        category: "Waterfall",
        image: "images/pulacan.jpg",
        shortDesc: "A majestic wide waterfall tier cascading down rock formations.",
        fullDesc: "Pulacan Falls is located in Labangan. It is a stunning natural stopover attraction extending around 30 feet high, flowing into a stream that serves local agriculture.",
        entranceFee: "₱5.00",
        openingHours: "6:00 AM - 5:30 PM",
        activities: "Swimming, Picnicking, Nature Trekking",
        bestTime: "July to December",
        travelTips: "Bring your own food and water. Pack out your trash!"
    },
    {
        id: 2,
        name: "Mount Timolan",
        municipality: "San Miguel",
        category: "Mountain",
        image: "images/timolan.webp",
        shortDesc: "A protected mountain range featuring a rare heart-shaped crater lake.",
        fullDesc: "Mount Timolan is a bio-ecological reserve. Its treasure is Lake Maragang, a serene crater lake resembling a heart hidden deep inside old-growth forests.",
        entranceFee: "₱25.00",
        openingHours: "Open 24/7 (Registration required)",
        activities: "Trekking, Bird Watching, Camping",
        bestTime: "December to May",
        travelTips: "Register at Barangay Limas first and hire an accredited guide."
    },
    {
        id: 3,
        name: "Dao-Dao Islands",
        municipality: "Pagadian City",
        category: "Island",
        image: "images/dao-dao.webp",
        shortDesc: "Two scenic coral islands featuring bright sandbars just minutes from the port.",
        fullDesc: "Consists of Dao-Dao Dako and Dao-Dao Gamay. Accessible via a 10-minute boat trip. Features pristine coastlines and thriving artificial reefs.",
        entranceFee: "Free (Boat rental ₱300-₱500)",
        openingHours: "6:00 AM - 6:00 PM",
        activities: "Snorkeling, Swimming, Boating",
        bestTime: "March to October",
        travelTips: "Bring your own snorkeling gear as rentals are limited."
    },
    {
        id: 4,
        name: "Balumbonan Cave",
        municipality: "Bayog",
        category: "Adventure",
        image: "images/balumbonan.jpg",
        shortDesc: "A captivating cave system traversing beneath a mountain range that features a chest-deep submerged river.",
        fullDesc: "Balumbonan Cave and Submerged River is a hit tourist destination in the Municipality of Bayog. Traversing beneath a mountain range, visitors must pass through blue-green, icy cold water right at the entrance of the cave. Inside, the cave features stalactites, stalagmites, towering chambers, a bat sanctuary, and smaller waterfalls cascading among the cave walls. The name of the cave actually comes from a stone jar that was discovered in its submerged river by early Subanen elders.",
        entranceFee: "Tour guide rates range from ₱300.00 to ₱500.00",
        openingHours: "Daytime (Coordinate with the barangay)",
        activities: "Spelunking, Hiking, Swimming",
        bestTime: "January to May",
        travelTips: "Prepare to take a dip in chest-deep water just to get inside the cave. From Bayog Integrated Bus Terminal, ride a Habal-Habal to Barangay Balumbonan and coordinate with the barangay for a tour guide."
    },
    {
        id: 5,
        name: "Lake Wood",
        municipality: "Lakewood",
        category: "Beach",
        image: "images/lakewood.jpg",
        shortDesc: "A tranquil ancestral mountain lake deeply rooted in Subanen heritage.",
        fullDesc: "Spanning over 700 hectares, this ancestral body of water is cherished by the Subanen tribe. It offers a peaceful retreat with refreshing water.",
        entranceFee: "₱20.00",
        openingHours: "6:00 AM - 6:00 PM",
        activities: "Balsa Riding, Kayaking, Fishing",
        bestTime: "All year round",
        travelTips: "Rent a floating bamboo balsa and try the local fresh tilapia."
    },
    {
        id: 6,
        name: "Kan-anan sa Balsa",
        municipality: "Kumalarang",
        category: "Food Destination",
        image: "images/kan-anan.JPG",
        shortDesc: "A unique floating restaurant featuring bamboo-rafted cottages where guests can enjoy fresh seafood and feed pond fishes.",
        fullDesc: "Kan-anan sa Balsa, operated by Sayao Farms, is an agri-tourism facility and floating restaurant situated along the national highway in Kumalarang. Established in 2008, it features bamboo cottages mounted on rafts that float directly over a large fishpond. Guests can relax and enjoy feeding massive Koi fish and golden Tilapia while waiting for their meals. The restaurant is highly praised for its fresh, mouth-watering local dishes, particularly their Ginataang Tilapia, soft-shell crabs, and Native Tinolang Manok.",
        entranceFee: "Free entrance (Pay for meals)",
        openingHours: "6:00 AM - 8:00 PM (Monday to Sunday)",
        activities: "Dining, Fish Feeding",
        bestTime: "Year-round",
        travelTips: "Call ahead to reserve a seat and order your food in advance to avoid long waiting times, especially during busy lunch hours."
    },

    // --- 2 HISTORICAL SITES ---
   {
        id: 7,
        name: "Serene Mangrove Forests",
        municipality: "Dumalinao",
        category: "Nature",
        image: "images/serene.webp", // Links directly to the image you already have!
        shortDesc: "A peaceful eco-park featuring lush coastal mangrove forests and elevated bamboo boardwalks.",
        fullDesc: "The Serene Mangrove Forests of Dumalinao offer a tranquil escape into nature. This eco-tourism site plays a vital role in protecting the coastal marine ecosystem. Visitors can stroll along the extensive bamboo boardwalks that weave deeply through the dense, green mangroves, offering a perfect spot for bird watching, photography, and unwinding by the quiet waters.",
        entranceFee: "₱20.00",
        openingHours: "7:00 AM - 5:30 PM",
        activities: "Bird Watching, Photography, Nature Walk",
        bestTime: "Early morning or late afternoon (Golden Hour)",
        travelTips: "Apply mosquito repellent before entering the shaded mangrove areas, and be sure to walk gently on the bamboo pathways."
    },
    {
        id: 8,
        name: "Provincial Capitol Complex",
        municipality: "Pagadian City",
        category: "Historical Site",
        image: "images/capitol.jpg",
        shortDesc: "The historic governmental heart of the province, featuring majestic architecture and historical monuments.",
        fullDesc: "The Zamboanga del Sur Provincial Capitol is not just a government office, but a historical landmark. Standing proudly on a hill, it represents the establishment of the province in 1952. The surrounding complex features manicured gardens, statues of local heroes, and a sweeping view of Pagadian City.",
        entranceFee: "Free",
        openingHours: "8:00 AM - 5:00 PM (Weekdays)",
        activities: "Sightseeing, Photography",
        bestTime: "Weekdays during daytime, or evenings for the lights",
        travelTips: "It's highly accessible via Pagadian's iconic inclined tricycles. The complex is beautifully illuminated at night."
    },

    // --- 1 FOR EACH EXISTING CATEGORY (Waterfall, Mountain, Island, Adventure, Beach, Food) ---
    {
        id: 9,
        name: "Manga Falls",
        municipality: "Pagadian City",
        category: "Waterfall",
        image: "images/manga.webp",
        shortDesc: "A stunning two-tiered waterfall hidden just outside the bustling city limits.",
        fullDesc: "Located in Barangay Manga, this two-tiered waterfall is surrounded by massive forest trees that are home to wild monkeys. It serves as a quick, refreshing nature escape for locals and tourists alike, featuring a wide catch basin perfect for swimming.",
        entranceFee: "₱20.00",
        openingHours: "7:00 AM - 5:00 PM",
        activities: "Swimming, Trekking, Picnic",
        bestTime: "June to January (when water flow is strongest)",
        travelTips: "Be mindful of your belongings as the wild monkeys in the area are curious and might grab unattended food."
    },
    {
        id: 10,
        name: "Mount Palpalan",
        municipality: "Pagadian City",
        category: "Mountain",
        image: "images/palpalan.jpg",
        shortDesc: "A towering peak offering a sweeping, panoramic view of Pagadian City and the Moro Gulf.",
        fullDesc: "Standing at over 700 feet above sea level, Mount Palpalan is the highest point within Pagadian City. It is a favorite spot for mountain bikers, hikers, and religious devotees, especially during Holy Week when the massive cross at its peak becomes a pilgrimage site.",
        entranceFee: "Free",
        openingHours: "Open 24/7",
        activities: "Hiking, Mountain Biking, Sunset Viewing",
        bestTime: "Late afternoon for the sunset",
        travelTips: "The hike can be steep. Bring plenty of water and wear proper trekking shoes."
    },
    {
        id: 11,
        name: "Panikian Island",
        municipality: "Pitogo",
        category: "Island",
        image: "images/panikian.jpg",
        shortDesc: "Often called 'Turtle Island', this pristine sanctuary is a haven for marine life.",
        fullDesc: "Panikian Island is a marine sanctuary renowned for its crystal-clear waters and thriving coral reefs. It earned the nickname 'Turtle Island' because marine turtles regularly use its powdery white shores as a nesting ground. It is an untouched paradise for divers.",
        entranceFee: "Environmental Fee ₱50.00",
        openingHours: "Day tours only (6:00 AM - 5:00 PM)",
        activities: "Scuba Diving, Snorkeling, Turtle Watching",
        bestTime: "March to May",
        travelTips: "Overnight stays are strictly prohibited to protect the turtle nesting grounds. Please do not leave any trash behind."
    },
    {
        id: 12,
        name: "Sominot Cave",
        municipality: "Sominot",
        category: "Adventure",
        image: "images/sominot.jpg",
        shortDesc: "An underground trail with massive stalactites and crystal limestone chambers.",
        fullDesc: "Sominot Cave offers an incredible spelunking experience. The cave network features massive chambers filled with glittering limestone formations, stalactites, and stalagmites that have taken centuries to form. Some parts of the cave require crawling through tight, muddy crevices.",
        entranceFee: "₱150.00 (Includes helmet and local guide)",
        openingHours: "6:00 AM - 4:00 PM",
        activities: "Spelunking, Cave Photography",
        bestTime: "January to May (Dry season is safer)",
        travelTips: "Wear clothes you don't mind getting dirty, and ensure you have a waterproof bag for your phone or camera."
    },
    {
        id: 13,
        name: "Baganian Beach",
        municipality: "Tabina",
        category: "Beach",
        image: "images/baganian.jpg",
        shortDesc: "A hidden coastal gem featuring long stretches of fine white sand and turquoise waters.",
        fullDesc: "Located in the coastal municipality of Tabina, Baganian Beach is a tranquil, off-the-beaten-path destination. Far from commercialized resorts, it offers untouched shorelines perfect for beach camping, swimming, and watching breathtaking sunsets over the horizon.",
        entranceFee: "Free (Cottage rentals from ₱200)",
        openingHours: "Open 24/7",
        activities: "Beach Camping, Swimming, Beach Volleyball",
        bestTime: "February to June",
        travelTips: "Bring your own camping gear and food, as there are limited commercial stores in the immediate beach area."
    },
    {
        id: 14,
        name: "Pagadian Satti Hub",
        municipality: "Pagadian City",
        category: "Food Destination",
        image: "images/hub.jpg",
        shortDesc: "The ultimate breakfast spot to try the region's famous spicy Satti skewers and thick sauce.",
        fullDesc: "You cannot visit Zamboanga del Sur without trying Satti. These local hubs serve small, grilled skewers of beef or chicken submerged in a thick, boiling, sweet and spicy red sauce. It is traditionally eaten early in the morning alongside 'puso' (rice wrapped in coconut leaves).",
        entranceFee: "Meals start at ₱80.00",
        openingHours: "4:00 AM - 12:00 PM",
        activities: "Food Tasting, Breakfast Meetups",
        bestTime: "Early Morning (6:00 AM)",
        travelTips: "Arrive early! The best Satti spots sell out of their meat skewers by mid-morning."
    },

    // --- 1 RANDOM DESTINATION TO CLOSE IT UP AT 15 ---
    {
        id: 15,
        name: "Lake Dasay",
        municipality: "San Miguel",
        category: "Lake", 
        image: "images/dasay.jpg",
        shortDesc: "The second largest lake in the province, offering cold breezes and a peaceful camping atmosphere.",
        fullDesc: "Lake Dasay spans around 40 hectares and is a vital natural resource for the municipality of San Miguel. Surrounded by lush hills and farm areas, the lake boasts an incredibly serene atmosphere. It has recently become a favorite secret spot for local motorcycle riders and campers.",
        entranceFee: "Free",
        openingHours: "Open 24/7",
        activities: "Motorcycle Touring, Camping, Fishing",
        bestTime: "November to February (for the cold fog)",
        travelTips: "The road going up can be bumpy. It's best accessed via motorcycle or high-clearance vehicles."
    }
];

// ==========================================
// 2. ROUTERS AND INITIALIZERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('destinationsGrid')) {
        initDestinationsPage();
    }
    if (document.getElementById('inquiryForm')) {
        initInquiryFormValidation();
    }
    
    // Initialize Gallery images if we are on the gallery page
    const galleryImages = document.querySelectorAll('.gallery-img');
    if (galleryImages.length > 0) {
        galleryImages.forEach((img, index) => {
            img.setAttribute('data-index', index);
        });
    }
});

// ==========================================
// 3. DESTINATIONS LOGIC
// ==========================================
function initDestinationsPage() {
    const grid = document.getElementById('destinationsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    function renderCards(data) {
        grid.innerHTML = "";
        if (data.length === 0) {
            grid.innerHTML = `<div class="col-12 text-center my-4"><p class="text-muted">No destinations match your search.</p></div>`;
            return;
        }
        data.forEach(item => {
            grid.innerHTML += `
                <div class="col">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${item.image}" class="card-img-top text-secondary bg-light" alt="${item.name}">
                        <div class="card-body d-flex flex-column">
                            <span class="badge bg-success align-self-start mb-2">${item.category}</span>
                            <h5 class="card-title fw-bold">${item.name}</h5>
                            <p class="text-muted small mb-2"><i class="bi bi-geo-alt"></i> ${item.municipality}</p>
                            <p class="card-text text-secondary flex-grow-1">${item.shortDesc}</p>
                            <div class="mt-3 border-top pt-2 text-muted small mb-3">
                                <strong>Fee:</strong> ${item.entranceFee} | <strong>Hours:</strong> ${item.openingHours}
                            </div>
                            <button class="btn btn-outline-success w-100 mt-auto" onclick="triggerModalDetails(${item.id})">View Details</button>
                        </div>
                    </div>
                </div>`;
        });
    }

    function processFilters() {
        const searchValue = searchInput.value.toLowerCase();
        const selectedCat = categoryFilter.value;
        const filtered = destinations.filter(dest => {
            const matchesSearch = dest.name.toLowerCase().includes(searchValue) || dest.municipality.toLowerCase().includes(searchValue);
            const matchesCategory = (selectedCat === "All" || dest.category === selectedCat);
            return matchesSearch && matchesCategory;
        });
        renderCards(filtered);
    }

    searchInput.addEventListener('input', processFilters);
    categoryFilter.addEventListener('change', processFilters);
    renderCards(destinations);
}

window.triggerModalDetails = function(id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;

    const modalBody = document.getElementById('modalTargetBody');
    modalBody.innerHTML = `
        <div class="modal-header bg-success text-white">
            <h5 class="modal-title fw-bold">${dest.name} - ${dest.municipality}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4">
            <img src="${dest.image}" class="img-fluid rounded mb-3 w-100" alt="${dest.name}">
            <h5 class="fw-bold text-success">Description</h5>
            <p class="text-secondary">${dest.fullDesc}</p>
            <hr>
            <div class="row g-3">
                <div class="col-md-6">
                    <h6><strong>Category:</strong> <span class="text-muted">${dest.category}</span></h6>
                    <h6><strong>Entrance Fee:</strong> <span class="text-muted">${dest.entranceFee}</span></h6>
                    <h6><strong>Opening Hours:</strong> <span class="text-muted">${dest.openingHours}</span></h6>
                </div>
                <div class="col-md-6">
                    <h6><strong>Recommended Activities:</strong></h6>
                    <p class="text-muted small">${dest.activities}</p>
                    <h6><strong>Best Time to Visit:</strong></h6>
                    <p class="text-muted small">${dest.bestTime}</p>
                </div>
            </div>
            <div class="mt-3 p-3 bg-light rounded border-start border-success border-3">
                <strong>Essential Tip:</strong> ${dest.travelTips}
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>`;

    const myModal = new bootstrap.Modal(document.getElementById('detailsModal'));
    myModal.show();
};

// ==========================================
// 4. FORM VALIDATION
// ==========================================
function initInquiryFormValidation() {
    const form = document.getElementById('inquiryForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        const statusBox = document.getElementById('formStatusBox');

        const inputs = ['fullName', 'email', 'contactNum', 'destination', 'travelDate', 'visitors', 'message'];
        const data = {};

        inputs.forEach(id => {
            const el = document.getElementById(id);
            el.classList.remove('is-valid', 'is-invalid');
            if (el.value.trim() === "") {
                el.classList.add('is-invalid');
                isValid = false;
            } else {
                el.classList.add('is-valid');
            }
        });

        statusBox.classList.remove('d-none', 'bg-danger', 'bg-success', 'text-white');
        if (isValid) {
            statusBox.classList.add('bg-success', 'text-white');
            statusBox.textContent = "Submission successful!";
            form.reset();
            inputs.forEach(id => document.getElementById(id).classList.remove('is-valid'));
        } else {
            statusBox.classList.add('bg-danger', 'text-white');
            statusBox.textContent = "Please correct errors.";
        }
    });
}   

// ==========================================
// 5. GALLERY LIGHTBOX LOGIC
// ==========================================
let currentGalleryIndex = 0;

// Function triggered when you click a thumbnail
window.launchGalleryLightbox = function(element) {
    // Find out which number image was clicked
    currentGalleryIndex = parseInt(element.getAttribute('data-index'));
    
    // Update the picture and text inside the modal
    updateLightboxContent();
    
    // Show the Bootstrap modal
    const lightboxModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('lightboxModal'));
    lightboxModal.show();
};

// Function for the Next (1) and Previous (-1) buttons
window.navigateLightbox = function(direction) {
    const galleryImages = document.querySelectorAll('.gallery-img');
    currentGalleryIndex += direction;
    
    // Loop back to the start if we go past the last image
    if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0; 
    } 
    // Loop to the end if we go backwards past the first image
    else if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1; 
    }
    
    // Update the picture and text
    updateLightboxContent();
};

// Helper function that actually swaps the image and text
function updateLightboxContent() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    // Get the HTML element of the current image
    const activeImage = galleryImages[currentGalleryIndex];
    
    // Swap the source, the title, and the page number text
    document.getElementById('lightboxImage').src = activeImage.src;
    document.getElementById('lightboxCaption').textContent = activeImage.getAttribute('data-caption') || 'Zamboanga del Sur';
    document.getElementById('lightboxIndexText').textContent = `Image ${currentGalleryIndex + 1} of ${galleryImages.length}`;
}
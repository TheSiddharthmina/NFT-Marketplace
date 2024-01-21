// Mock data representing NFTs
const nfts = [
  { id: 1, name: 'Digital Art ', price: '1.3 ETH', author: 'John Walker', description: 'A mesmerizing digital artwork showcasing the beauty of code', image: 'OIP.jpeg' },
  { id: 2, name: 'Collectible ', price: '1.8 ETH', author: 'Jane Smith', description: 'Aunique collectible representing the essence of blockchain technology.', image: 'OIP (1).jpeg' },
  { id: 3, name: 'Skyborne Nexian Gems ', price: '2.6 ETH', author: 'Will Smith', description: 'Skyborne-Nexian Gems is a proof of collective within the shyborne legacy ecosystem.', image: 'gems.jpeg' },
  { id: 4, name: 'Bitmatic ', price: '2.1 ETH', author: 'Tom Hardy', description: 'BITMATIC is an inspiring blend f mordern art,blockchain technologyand futuristic vision.', image: 'bmatic.jpg'},
  { id: 5, name: 'Anime Art ', price: '0.8 ETH', author: 'Amuro Ray', description: 'In this collection we show you the newest and most wonderful animes.', image: 'anime.jpg'},
  { id: 6, name: 'Degods ', price: '4.6 ETH', author: 'Chris Watson', description: 'Degods is a digital art collection and global community of creators,developers,artists.', image: 'degod.png'},
];

// Function to render NFT cards
function renderNFTs() {
  const nftList = document.getElementById('nft-list');
  nftList.innerHTML = '';

  nfts.forEach(nft => {
      const nftCard = document.createElement('div');
      nftCard.classList.add('nft-card');

      nftCard.innerHTML = `

          <img src="${nft.image}" alt="${nft.name}" style="max-width: 100%; height: auto;">
          <div class="nft-details">
          <h3>${nft.name}</h3>
          <p class="author">By ${nft.author}</p>
          <p class="description">${nft.description}</p>
          <p>Price: ${nft.price}</p>
          <button class="buy-button" onclick="openModal(${nft.id})">Buy Now</button>
      `;

      nftList.appendChild(nftCard);
  });
}
//Function to open the modal
function openModal(nftID) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
    <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <p>Are you sure you want to buy NFT #${nftID}?</p>
    <button class="buy-button" onclick="buyNFT(${nftID})">Confirm Purchase</button>
    </div>
    </div>
    `;

    document.body.appendChild(modal);
}

//Function to close the modal
function closeModal() {
    const modal = document.querySelector('.modal');
    document.body.removeChild(modal);
}

//Function to handle NFT purchase
function buyNFT(nftId) {
    const purchaseNFT = nfts.find(nft => nft.id === nftId);
    if (purchaseNFT) {
        transactionHistory.push(purchaseNFT);
        closeModal();
        alert(`Congratulations! You've purchased NFT #${nftId}`);
    }
}
// Placeholder function for buying an NFT
function buyNFT(nftId) {
    const confirmation = confirm(`Confirm the purchase of NFT #${nftId}?`);
  alert(`Congratulations! You've purchased NFT #${nftId}`);
}

//Function to list an NFT
function listNFT(event) {
    event.preventDefault();
    const nftname = document.getElementById('nftName').value;
    const nftPrice = document.getElementById('nftPrice').value;

    if (nftName && nftPrice) {
        const newNFT = {
            id: nft.length + 1,
            name: nftName,
            price: `${parseFloat(nftPrice).tofixed(2)} ETH`
        };
        nfts.push(newNFT);
        closeModal();
        renderNFTs();
    } else {
        alert('please fill out all fields.');
    }
}
// Add authentication state variable
let isAuthenticated = false;
let currentUser = null;

// Function to toggle authentication modal
function toggleAuthModal() {
    const authModal = document.getElementById('auth-modal');
    authModal.style.display = authModal.style.display === 'block' ? 'none' : 'block';
}

// Function to close authentication modal
function closeAuthModal() {
    const authModal = document.getElementById('auth-modal');
    authModal.style.display = 'none';
}



// Function to update the user panel
function updateAuthPanel() {
    const userPanel = document.getElementById('user-panel');
    if (isAuthenticated) {
        userPanel.innerHTML = `Welcome, ${currentUser}!`;
    } 
} 
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('signupBtn').addEventListener('click', () => {
    document.getElementById('signupModal').style.display = 'block';
});

// Close the modal when the close button or outside the modal is clicked
document.querySelectorAll('.close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeModal(closeBtn.closest('.modal').id);
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault()
    closeModal('loginModal');
});
// Handle form submission for signup
document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault()
    closeModal('signupModal');
});


//Initial render
renderNFTs();
updateAuthPanel();

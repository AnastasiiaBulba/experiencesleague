// Homepage JavaScript
class HomepageManager {
  constructor() {
    this.reviewsContainer = document.getElementById("reviews-container");
    this.init();
  }

  async init() {
    await this.loadReviews();
  }

  async loadReviews() {
    try {
      const response = await fetch("./data/reviews.json");
      const reviews = await response.json();
      this.renderReviews(reviews);
    } catch (error) {
      console.error("Error loading reviews:", error);
      this.renderDefaultReviews();
    }
  }

  renderReviews(reviews) {
    if (!this.reviewsContainer) return;

    const reviewsHTML = reviews
      .map(
        (review) => `
            <div class="review-card">
                <div class="review-author">${review.author}</div>
                <div class="review-text">"${review.text}"</div>
            </div>
        `
      )
      .join("");

    this.reviewsContainer.innerHTML = reviewsHTML;
  }

  renderDefaultReviews() {
    if (!this.reviewsContainer) return;

    const defaultReviews = [
      {
        author: "SlimeMaster_2025",
        text: "This slime art game is absolutely mesmerizing! I love creating different shapes and adding beautiful decorations. The crafting process is so satisfying and relaxing.",
      },
      {
        author: "CreativeCraft_Pro",
        text: "Perfect game for unleashing creativity! The animal shapes are adorable, especially the peacocks and hedgehogs. The kneading feature is incredibly satisfying.",
      },
      {
        author: "ArtisticSlime_Queen",
        text: "My kids are obsessed with this game! They love making different shapes and decorating them. It's educational and helps develop their artistic skills while having fun.",
      },
      {
        author: "DIY_Crafting_Wizard",
        text: "Amazing graphics and smooth gameplay! The variety of themes keeps things interesting, and I love discovering new decoration options for my slime creations.",
      },
    ];

    this.renderReviews(defaultReviews);
  }
}

// Scroll to game features function
function scrollToGameFeatures() {
  const gameFeaturesSection = document.querySelector(".game-features");
  if (gameFeaturesSection) {
    gameFeaturesSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Initialize homepage when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new HomepageManager();
});

// News Page Manager
class NewsPageManager {
  constructor() {
    this.updatesContainer = document.getElementById("updates-container");
    this.diariesContainer = document.getElementById("diaries-container");
    this.init();
  }

  async init() {
    await this.loadUpdates();
    await this.loadDiaries();
  }

  async loadUpdates() {
    try {
      const response = await fetch("./data/updates.json");
      const updates = await response.json();
      this.renderUpdates(updates);
    } catch (error) {
      console.error("Error loading updates:", error);
      this.renderDefaultUpdates();
    }
  }

  async loadDiaries() {
    try {
      const response = await fetch("./data/diaries.json");
      const diaries = await response.json();
      this.renderDiaries(diaries);
    } catch (error) {
      console.error("Error loading diaries:", error);
      this.renderDefaultDiaries();
    }
  }

  renderUpdates(updates) {
    if (!this.updatesContainer) return;

    const updatesHTML = updates
      .map(
        (update, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${update.date}</div>
                    <h3 class="news-title">${update.title}</h3>
                    <p class="news-excerpt">${update.excerpt}</p>
                    <div class="news-full" id="update-full-${index}">
                        ${update.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('update-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.updatesContainer.innerHTML = updatesHTML;
  }

  renderDiaries(diaries) {
    if (!this.diariesContainer) return;

    const diariesHTML = diaries
      .map(
        (diary, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${diary.date}</div>
                    <h3 class="news-title">${diary.title}</h3>
                    <p class="news-excerpt">${diary.excerpt}</p>
                    <div class="news-full" id="diary-full-${index}">
                        ${diary.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('diary-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.diariesContainer.innerHTML = diariesHTML;
  }

  renderDefaultUpdates() {
    if (!this.updatesContainer) return;

    const defaultUpdates = [
      {
        title: "New Slime Shapes & Themes Released!",
        date: "January 15, 2025",
        excerpt:
          "We're excited to announce the biggest update yet - new slime shapes and themes! Players can now create animal shapes like peacocks, hedgehogs, and mergansers.",
        fullText:
          "The new Slime Shapes & Themes update introduces a completely new dimension to DIY Slime Art. Players can now create adorable animal shapes including peacocks, hedgehogs, and mergansers. The new system allows for more creative expression and creates endless possibilities for slime creation. Additionally, we've added 20+ new decoration options, including rare glitter effects that can only be found in special events. The update also includes a new tutorial system to help players master the advanced crafting mechanics. We've received amazing feedback from our beta testers, and we can't wait to see what incredible slime creations our players will make!",
        image: "card_new1.jpg",
      },
      {
        title: "Holiday Slime Event Coming Soon",
        date: "January 10, 2025",
        excerpt:
          "Get ready for the most festive season in DIY Slime Art! Special holiday-themed slime shapes and limited-time decoration options will be available.",
        fullText:
          "The holiday season is approaching, and we're bringing the festive spirit to DIY Slime Art! Starting December 20th, players will have access to exclusive holiday-themed slime shapes including snowflakes, stars, and winter-themed decorations. The crafting interface will also receive special holiday decorations and temporary upgrades that boost creativity during the event period. We're also introducing a new 'Gift Workshop' where players can create special holiday slime creations to share with friends. The event will run until January 5th, so make sure to collect all the seasonal items while they're available!",
        image: "card_new2.jpg",
      },
      {
        title: "Performance Improvements & New Features",
        date: "January 5, 2025",
        excerpt:
          "We've optimized the game engine for smoother crafting and faster loading times across all devices.",
        fullText:
          "Our development team has been working hard to improve the overall performance of DIY Slime Art. The latest update includes significant optimizations to the game engine, resulting in smoother animations and faster loading times. We've also improved the mobile experience with better touch controls and reduced battery consumption. The slime crafting interface has been streamlined for easier navigation, and the decoration screen now loads twice as fast. These improvements ensure that players can enjoy the game seamlessly across all devices, from smartphones to desktop computers.",
        image: "card_new3.jpg",
      },
    ];

    this.renderUpdates(defaultUpdates);
  }

  renderDefaultDiaries() {
    if (!this.diariesContainer) return;

    const defaultDiaries = [
      {
        title: "My First Perfect Slime Collection",
        date: "January 12, 2025",
        excerpt:
          "After weeks of crafting and decorating, I finally completed my first perfect slime collection. Here's my journey and some tips for new players.",
        fullText:
          "When I first started playing DIY Slime Art, I had no idea how addictive this game would become. My journey began with simple shapes, creating basic slime models and learning the mechanics. As I progressed, I discovered the joy of creative crafting and artistic expression. The key to building a perfect collection is patience and creativity. I learned to focus on specific themes - my first complete set was a 'Nature Collection' with forest-themed decorations. The most challenging part was finding the rare glitter effects, but the satisfaction of completing a collection made it all worthwhile. My advice to new players: start with one theme and master it before moving to others. Also, don't forget to experiment with different decoration combinations - it makes a huge difference in the final result!",
        image: "card_new1.jpg",
      },
      {
        title: "The Animal Kingdom Adventure",
        date: "January 8, 2025",
        excerpt:
          "Exploring the new animal shapes revealed some of the most challenging yet rewarding slime creations I've ever crafted.",
        fullText:
          "The animal shapes feature is definitely the most challenging aspect of the game, but it's also the most rewarding. The peacock shape features intricate details, complex feather patterns, and requires precise decoration placement. However, the slime creations you can make here are absolutely unique - animal shapes, nature accessories, and creative decorations that you won't find anywhere else. I spent three days mastering the peacock shape, and the effort was worth it. My 'Animal Kingdom' collection is now one of my favorites, featuring peacocks, hedgehogs, and mergansers. The key to success with these shapes is to be patient with the decoration process and to experiment with different color combinations - some of the best effects come from unexpected color pairings. I recommend trying these shapes only after you've mastered the basic crafting controls and have some experience with the game.",
        image: "card_new2.jpg",
      },
      {
        title: "Creative Crafting Tips",
        date: "January 3, 2025",
        excerpt:
          "After crafting slime creations for months, I've learned some valuable strategies that I want to share with the community.",
        fullText:
          "Creative crafting is the heart of DIY Slime Art, and mastering it can make the difference between a good player and a great one. My first tip is to always experiment with color combinations before settling on a final design. Different color pairings can create completely different moods and effects. Secondly, focus on one type of shape at a time. Specializing in a particular category (like geometric shapes or animal forms) allows you to build expertise and create more impressive collections. Third, don't neglect the decoration system - organized decoration placement makes it much easier to create cohesive designs. Finally, participate in community events and challenges. These often provide rare materials and exclusive decoration options that can't be obtained through regular gameplay. The creative aspect of this game is what keeps me coming back - there's always something new to try or improve!",
        image: "card_new3.jpg",
      },
    ];

    this.renderDiaries(defaultDiaries);
  }
}

// Modal functionality
function showModal(content, title, image = null) {
  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.style.cssText = `
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    margin: 1rem;
  `;

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "×";
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  `;

  // Add content to modal
  let modalHTML = `<h2 style="margin-bottom: 1rem; color: var(--slime-green);">${title}</h2>`;

  if (image) {
    modalHTML += `<img src="./pict-puzzle/${image}" alt="${title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem;">`;
  }

  modalHTML += `<div style="line-height: 1.6; color: #333;">${content}</div>`;

  modalContent.innerHTML = modalHTML;

  // Add close button to modal
  modalContent.appendChild(closeButton);

  // Add modal to page
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Close modal functionality
  function closeModal() {
    document.body.removeChild(modalOverlay);
  }

  closeButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// Toggle read more functionality
function toggleReadMore(elementId, button) {
  const fullText = document.getElementById(elementId);
  if (fullText) {
    const content = fullText.innerHTML;
    const titleElement =
      fullText.previousElementSibling?.previousElementSibling;
    const title = titleElement ? titleElement.textContent : "Article";

    // Check which card this is and assign appropriate image
    let image = null;
    if (title === "New Slime Shapes & Themes Released!") {
      image = "card_new1.jpg";
    } else if (title === "Performance Improvements & New Features") {
      image = "card_new3.jpg";
    } else if (title === "The Animal Kingdom Adventure") {
      image = "card_new2.jpg";
    }

    showModal(content, title, image);
  } else {
    console.warn("Element not found:", elementId);
  }
}

// Initialize news page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new NewsPageManager();
});

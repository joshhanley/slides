<template>
  <div id="app" class="fixed overflow-hidden w-full h-full flex flex-col">
    <div
      ref="container"
      class="relative overflow-hidden w-full flex-grow flex items-center justify-center"
      style="background-image: url(assets/img/bg-img.svg)"
    >
      <!-- Slide content goes here -->

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div class="w-11/12 h-11/12 flex items-center justify-center bg-orange-100 text-gray-800">
            <!-- placeholder slide -->
            <img class="w-1/4" src="assets/img/logo-icon.png" />
            <p class="font-display text-6xl">cynosure.</p>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-11/12 h-11/12 lg:w-9/12 lg:-ml-2/12 flex flex-col bg-indigo-800 text-orange-100 relative"
          >
            <!-- title slide -->
            <div class="absolute ml-1/12 mt-12 flex items-center">
              <img class="w-1/12" src="assets/img/logo-icon-white.png" />
              <p class="font-display text-2xl">cynosure.</p>
            </div>
            <div class="mt-24 ml-1/12 pr-1/12 flex-grow flex flex-col justify-center">
              <p class="font-display text-5xl">This is a title.</p>
              <p class="text-2xl md:text-xl">This is a subtitle that is maybe a little longer.</p>
            </div>
            <div class="p-1/12 h-1/6 text-sm grid grid-cols-2">
              <div class="col-start-2">
              <hr class="border-t border-orange-100" />Your Name
              <br />Your Company
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-11/12 h-11/12 lg:w-9/12 lg:-mr-2/12 flex flex-col bg-teal-800 text-orange-100 relative"
          >
            <!-- title slide -->
            <div class="absolute ml-1/12 mt-12 flex items-center">
              <img class="w-1/12" src="assets/img/logo-icon-white.png" />
              <p class="font-display text-2xl">cynosure.</p>
            </div>
            <div class="mt-24 ml-1/12 pr-1/12 flex-grow flex flex-col justify-center">
              <p class="font-display text-5xl">This is a title.</p>
              <p class="text-2xl md:text-xl">This is a subtitle that is maybe a little longer.</p>
            </div>
            <div class="p-1/12 h-1/6 text-sm grid grid-cols-2">
              <div class="col-start-2">
              <hr class="border-t border-orange-100" />Your Name
              <br />Your Company
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-full h-full flex flex-col text-gray-800 bg-orange-100 relative"
          >
            <!-- content slide -->
            <img class="absolute h-12 ml-1/12 mt-12" src="assets/img/logo-icon.png" />
            <p class="font-display text-5xl ml-1/12 mt-1/4 lg:mt-1/6">This is a title.</p>
            <div
              class="flex-grow ml-1/12 mt-4 flex items-center"
            >
              <p class="pr-1/12 pb-1/12 text-1xl sm:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--
                fast transition, rather than slide transition, might look better on full width slides
                or perhaps a fade out as one moves off screen
                or perhaps, show the background between transitions - though would only work if someone had a background

                currently looks quite busy when there's a bunch of content on both slides
      -->

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-full h-full flex flex-col text-gray-800 bg-orange-100 relative"
          >
            <!-- graphics slide -->
            <img class="absolute h-12 ml-1/12 mt-12" src="assets/img/logo-icon.png" />
            <p class="mt-24 pt-4 ml-1/12 pr-1/12 md:pr-1/4 lg:pr-1/2 font-display text-4xl">Some graphics</p>
            <!-- appears immediately (i.e. on first click) -->
            <div class="mt-4 ml-1/12 pr-1/12 pb-1/12 flex-grow grid gap-4 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
              <div class="flex flex-col justify-center">
                <!-- appears on second click -->
                <img src="assets/painting.jpg"/>
                <p class="text-gray-600">acrylic on canvas</p>
              </div>
              <div class="flex flex-col justify-center">
                <!-- appears on third click -->
                <img src="assets/mural.jpg"/>
                <p class="text-gray-600">water-based ink on concrete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-11/12 h-11/12 flex flex-col text-gray-800 bg-orange-100 relative"
          >
            <!-- graphics slide -->
            <img class="absolute h-12 ml-1/12 mt-12" src="assets/img/logo-icon.png" />
            <p class="mt-24 pt-4 ml-1/12 pr-1/12 md:pr-1/4 lg:pr-1/2 font-display text-4xl">Some graphics</p>
            <!-- appears immediately (i.e. on first click) -->
            <div class="mt-4 ml-2/12 pr-2/12 pb-1/12 flex-grow grid gap-1/12 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
              <div class="flex flex-col justify-center">
                <!-- appears on second click -->
                <img src="assets/painting.jpg"/>
                <p class="text-gray-600">acrylic on canvas</p>
              </div>
              <div class="flex flex-col justify-center">
                <!-- appears on third click -->
                <img src="assets/mural.jpg"/>
                <p class="text-gray-600">water-based ink on concrete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-full h-full flex flex-col text-gray-800 bg-orange-100 relative"
          >
            <!-- graphics slide -->
            <img class="absolute h-12 ml-1/12 mt-12" src="assets/img/logo-icon.png" />
            <p class="mt-24 ml-1/12 pt-4 font-display text-4xl">Some graphs</p>
            <!-- appears immediately (i.e. on first click) -->
            <div class="flex-grow px-2/12 flex flex-col justify-center pb-1/4 pt-4 xl:pt-12">
              <p class="font-bold text-center">Linear Ballistic Accumulator</p>
              <div class="mt-4 flex flex-col md:flex-row">
                <div class="">
                  <!-- appears on third click -->
                  <img src="assets/LBA1.jpg" />
                </div>
                <div class="">
                  <!-- appears on third click -->
                  <img src="assets/LBA1.jpg" />
                </div>
              </div>
              <p class="text-gray-600">Brown and Heathcote, 2011</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-full h-full flex flex-col bg-red-800 text-orange-100 relative"
          >
            <!-- quote slide -->
            <img class="absolute h-12 ml-1/12 mt-12" src="assets/img/logo-icon-white.png" />
            <div class="flex-grow mt-24 ml-1/12 pr-1/12 flex flex-col justify-center">
              <p class="font-display text-2xl md:text-4xl">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
              </p>
              <div class="mt-4">
                <hr class="border-t-2 border-orange-100" />
                <p class="text-2xl md:text-xl mt-4 font-bold italic">Some person.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- scrolling graphics slides
                although vertical scrolling effect would typically be more useful (demonstrate webpage, or a document etc)
                note - for this to work, I guess we would need to be able to toggle 'display background between slides'
      -->
      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-full h-full flex items-center justify-center text-gray-800 bg-orange-100 relative overflow-hidden"
          >
            <!-- graphics slide -->
            <div class="absolute left-0 ml-1/12 w-1/4 flex items-center">
              <img class="w-full" src="assets/img/logo-icon.png" />
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <img src="assets/hip-hop-spines.jpg" class="object-none -mr-5/6" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full h-full flex items-center justify-center transition-transform transform duration-1000 translate-x-full"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="w-full h-full flex items-center justify-center text-gray-800 bg-orange-100 relative overflow-hidden"
          >
            <!-- graphics slide -->
            <div class="w-full h-full flex items-center justify-center">
              <img src="assets/hip-hop-spines.jpg" class="object-none -ml-5/6" />
            </div>
            <div class="absolute right-0 mr-1/12 w-1/4 flex items-center">
              <p class="font-display text-6xl">cynosure.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- End slide content -->
    </div>

    <div v-show="!presentationMode" class="w-full bg-whiteborder-t border-gray-800">
      <div
        v-show="showPreviews"
        class="px-2 py-1 w-full flex flex-shrink-0 items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden whitespace-no-wrap"
        ref="previewContainer"
      >
        <div
          ref="previews"
          v-if="previews.length > 0"
          class="w-full h-full flex items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden whitespace-no-wrap"
        >
          <div
            v-for="(preview, index) in previews"
            :key="index"
            class="relative h-32 flex-shrink-0 overflow-hidden border cursor-pointer"
            :class="[ index + 1 == slideshowNumber ? 'border-blue-500' : 'border-gray-800']"
            :style="{ width: previewWidth}"
            @click="gotoSlide(index + 1)"
          >
            <div
              class="absolute origin-top-left"
              v-html="preview.innerHTML"
              :style="{ width: previewContentWidth, height: previewContentHeight, transform: 'scale(' + previewContentScale + ',' + previewContentScale + ')' }"
            ></div>
          </div>
        </div>
        <div v-else>
          <div class="relative h-32 flex-shrink-0">Loading previews</div>
        </div>
      </div>

      <div v-show="showControls" class="flex justify-center">
        <div class="flex flex-col items-center">
          <button
            @click="toggleShortcuts"
            class="px-4 font-bold hover:bg-blue-200"
            v-text="(showShortcuts ? 'Hide' : 'Show') + ' Shortcuts'"
          >
            Hide
            Shortcuts
          </button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(s)</span>
          </template>
        </div>

        <div class="mr-auto flex flex-col items-center">
          <button
            @click="toggleControls"
            class="px-4 font-bold hover:bg-blue-200"
            v-text="(showControls ? 'Hide' : 'Show') + ' Controls'"
          >
            Hide
            Controls
          </button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(c)</span>
          </template>
        </div>

        <div class="flex flex-col items-center">
          <button @click="goToFirstSlide()" class="px-4 font-bold hover:bg-blue-200">&lt;&lt;</button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(home)</span>
          </template>
        </div>

        <div class="flex flex-col items-center">
          <button @click="previousSlide()" class="px-4 font-bold hover:bg-blue-200">&lt;</button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(&#8592;)</span>
          </template>
        </div>

        <div class="px-4 text-xl font-medium">
          <span class="pr-1" v-text="slideshowNumber"></span> of
          <span class="pl-1" v-text="total"></span>
        </div>

        <div class="flex flex-col items-center">
          <button @click="nextSlide()" class="px-4 font-bold hover:bg-blue-200">&gt;</button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(&#8594;)</span>
          </template>
        </div>

        <div class="flex flex-col items-center">
          <button @click="goToLastSlide()" class="px-4 font-bold hover:bg-blue-200">&gt;&gt;</button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(end)</span>
          </template>
        </div>

        <div class="ml-auto flex flex-col items-center">
          <button
            @click="togglePreviews"
            class="px-4 font-bold hover:bg-blue-200"
            v-text="(showPreviews ? 'Hide' : 'Show') + ' Previews'"
          >Hide Previews</button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(v)</span>
          </template>
        </div>

        <div class="flex flex-col items-center">
          <button
            @click="togglePresentationMode"
            class="px-4 font-bold hover:bg-blue-200"
          >Presentation Mode</button>
          <template v-if="showShortcuts">
            <span class="text-gray-500">(p)</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideshowNumber: 1,
      total: 0,
      slides: [],
      currentSlide: null,
      firstSlide: null,
      lastSlide: null,

      presentationMode: true,
      showShortcuts: true,
      showControls: true,
      showPreviews: true,

      previews: [],
      previewBarHeight: 128,
      previewWidth: 0,
      previewContentWidth: 0,
      previewContentHeight: 0,
      previewContentScale: 0
    };
  },

  mounted() {
    this.initData();
    this.addKeyboardShortcuts();
    this.addWindowResizeEvent();
  },

  watch: {
    slideshowNumber(newSlideshowNumber) {
      localStorage.slideshowNumber = newSlideshowNumber;
      this.scrollPreviewIntoView(newSlideshowNumber);
    }
  },

  methods: {
    calculatePreviewSizes() {
      this.previewWidth =
        this.previewBarHeight *
        (this.$refs.container.offsetWidth / this.$refs.container.offsetHeight);

      this.previewContentWidth = this.$refs.container.offsetWidth;

      this.previewContentHeight = this.$refs.container.offsetHeight;

      this.previewContentScale =
        this.previewBarHeight / this.$refs.container.offsetHeight;
    },

    initData() {
      this.slides = Array.from(this.$refs.container.children);
      this.total = this.slides.length;

      this.currentSlide = this.$refs.container.children[
        this.slideshowNumber - 1
      ];
      this.firstSlide = this.$refs.container.firstElementChild;
      this.lastSlide = this.$refs.container.lastElementChild;

      this.calculatePreviewSizes();

      this.loadPreviews();

      setTimeout(() => {
        this.currentSlide.classList.remove("translate-x-full");

        if (localStorage.slideshowNumber) {
          this.gotoSlide(parseInt(localStorage.slideshowNumber));
        }
      }, 100);
    },

    loadPreviews() {
      this.previews = [];
      this.previews = this.slides;
    },

    addKeyboardShortcuts() {
      let self = this;

      window.addEventListener("keyup", e => {
        switch (e.key) {
          case "s":
            self.toggleShortcuts();
            break;

          case "c":
            self.toggleControls();
            break;

          case "Home":
            self.goToFirstSlide();
            break;

          case "ArrowLeft":
            self.previousSlide();
            break;

          case "ArrowRight":
            self.nextSlide();
            break;

          case "End":
            self.goToLastSlide();
            break;

          case "v":
            self.togglePreviews();
            break;

          case "p":
            self.togglePresentationMode();
            break;

          default:
            break;
        }
      });
    },

    addWindowResizeEvent() {
      window.addEventListener("resize", () => {
        this.calculatePreviewSizes();
      });
    },

    toggleShortcuts() {
      this.showShortcuts = !this.showShortcuts;
    },

    toggleControls() {
      this.showControls = !this.showControls;
    },

    previousSlide() {
      let previousSlide = this.currentSlide.previousElementSibling;

      if (!previousSlide || typeof previousSlide === "undefined") return;

      this.currentSlide.classList.add("translate-x-full");

      previousSlide.classList.remove("-translate-x-full");

      this.currentSlide = previousSlide;
      this.slideshowNumber > 1
        ? this.slideshowNumber--
        : (this.$refs.container.innerText = "WHAT HAVE YOU DONE???");
    },

    nextSlide() {
      let nextSlide = this.currentSlide.nextElementSibling;

      if (!nextSlide || typeof nextSlide === "undefined") return;

      this.currentSlide.classList.add("-translate-x-full");

      nextSlide.classList.remove("translate-x-full");

      this.currentSlide = nextSlide;
      this.slideshowNumber++;
    },

    goToFirstSlide() {
      if (this.slideshowNumber == 1) return;

      this.slides.forEach(function(slide, index) {
        if (index == 0) return;

        slide.classList.add("translate-x-full");
        slide.classList.remove("-translate-x-full");
      });

      this.firstSlide.classList.remove("-translate-x-full");

      this.currentSlide = this.firstSlide;
      this.slideshowNumber = 1;
    },

    goToLastSlide() {
      if (this.slideshowNumber == this.total) return;

      let self = this;

      this.slides.forEach(function(slide, index) {
        if (index == self.total - 1) return;

        slide.classList.add("-translate-x-full");
        slide.classList.remove("translate-x-full");
      });

      this.lastSlide.classList.remove("translate-x-full");

      this.currentSlide = this.lastSlide;
      this.slideshowNumber = this.total;
    },

    togglePreviews() {
      this.showPreviews = !this.showPreviews;
    },

    togglePresentationMode() {
      this.presentationMode = !this.presentationMode;
    },

    gotoSlide(newSlideNumber) {
      if (newSlideNumber > this.total || newSlideNumber < 1) return;

      let newSlide = this.slides[newSlideNumber - 1];

      let slidesInBetween = [];

      if (newSlideNumber > this.slideshowNumber) {
        this.currentSlide.classList.add("-translate-x-full");

        console.log(this.slideshowNumber + ":" + newSlideNumber);
        console.log(Math.abs(this.slideshowNumber - newSlideNumber));

        if (Math.abs(this.slideshowNumber - newSlideNumber)) {
          slidesInBetween = this.slides.slice(
            this.slideshowNumber,
            newSlideNumber - 1
          );
        }

        slidesInBetween.forEach(slide => {
          slide.classList.remove("translate-x-full");
          slide.classList.add("-translate-x-full");
        });

        newSlide.classList.remove("translate-x-full");
      } else if (newSlideNumber < this.slideshowNumber) {
        this.currentSlide.classList.add("translate-x-full");

        if (Math.abs(this.slideshowNumber - newSlideNumber)) {
          slidesInBetween = this.slides.slice(
            newSlideNumber,
            this.slideshowNumber - 1
          );
        }

        slidesInBetween.forEach(slide => {
          slide.classList.remove("-translate-x-full");
          slide.classList.add("translate-x-full");
        });

        newSlide.classList.remove("-translate-x-full");
      } else {
        return;
      }

      this.currentSlide = newSlide;
      this.slideshowNumber = newSlideNumber;

      return;
    },

    scrollPreviewIntoView(slideNumber) {
      if (slideNumber > this.total || slideNumber < 1) return;

      this.$refs.previews.children[slideNumber - 1].scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }
  }
};
</script>
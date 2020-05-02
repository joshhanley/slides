<template>
  <div id="app" class="fixed overflow-hidden w-full h-full flex flex-col">
    <div
      ref="container"
      class="relative overflow-hidden w-full flex-grow flex items-center justify-center"
      style="background-image: url(assets/demo/img/bg-img.svg)"
    >
      <slot></slot>
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
              class="absolute origin-top-left whitespace-normal"
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

      presentationMode: false,
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
      this.slides = this.$children;

      this.total = this.slides.length;

      this.currentSlide = this.slides[this.slideshowNumber - 1];
      this.currentSlide.activeState();
      this.firstSlide = this.slides[0];
      this.lastSlide = this.slides[this.total - 1];

      this.calculatePreviewSizes();

      this.loadPreviews();

      setTimeout(() => {
        if (localStorage.slideshowNumber) {
          this.gotoSlide(parseInt(localStorage.slideshowNumber));
        }
      }, 100);
    },

    loadPreviews() {
      this.previews = [];
      this.previews = this.slides.map(slide => slide.$el);
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

          case "ArrowUp":
            self.goToFirstSlide();
            break;

          case "ArrowRight":
            self.nextSlide();
            break;

          case "ArrowDown":
            self.goToLastSlide();
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
      let previousSlide = this.slides[this.slideshowNumber - 2];

      if (!previousSlide || typeof previousSlide === "undefined") return;

      this.currentSlide.startState();

      previousSlide.activeState();

      this.currentSlide = previousSlide;
      this.slideshowNumber > 1
        ? this.slideshowNumber--
        : (this.$refs.container.innerText = "WHAT HAVE YOU DONE???");
    },

    nextSlide() {
      let nextSlide = this.slides[this.slideshowNumber];

      if (!nextSlide || typeof nextSlide === "undefined") return;

      this.currentSlide.finishState();

      nextSlide.activeState();

      this.currentSlide = nextSlide;
      this.slideshowNumber++;
    },

    goToFirstSlide() {
      if (this.slideshowNumber == 1) return;

      this.slides.forEach(function(slide, index) {
        if (index == 0) return;

        slide.startState();
      });

      this.firstSlide.activeState();

      this.currentSlide = this.firstSlide;
      this.slideshowNumber = 1;
    },

    goToLastSlide() {
      if (this.slideshowNumber == this.total) return;

      let self = this;

      this.slides.forEach(function(slide, index) {
        if (index == self.total - 1) return;

        slide.finishState();
      });

      this.lastSlide.activeState();

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
        this.currentSlide.finishState();

        if (Math.abs(this.slideshowNumber - newSlideNumber)) {
          slidesInBetween = this.slides.slice(
            this.slideshowNumber,
            newSlideNumber - 1
          );
        }

        slidesInBetween.forEach(slide => {
          slide.finishState();
        });

        newSlide.activeState();
      } else if (newSlideNumber < this.slideshowNumber) {
        this.currentSlide.startState();

        if (Math.abs(this.slideshowNumber - newSlideNumber)) {
          slidesInBetween = this.slides.slice(
            newSlideNumber,
            this.slideshowNumber - 1
          );
        }

        slidesInBetween.forEach(slide => {
          slide.startState();
        });

        slide.activeState();
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
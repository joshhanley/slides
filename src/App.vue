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
            class="w-11/12 h-11/12 lg:w-9/12 lg:-ml-2/12 grid grid-cols-2 grid-rows-6 gap-1/12 p-1/12 bg-indigo-800 text-orange-100 relative"
          >
            <!-- title slide -->
            <div class="absolute ml-1/12 mt-16 flex items-center">
              <img class="w-1/12" src="assets/img/logo-icon-white.png" />
              <p class="font-display text-2xl">cynosure.</p>
            </div>
            <div class="col-span-2 row-start-2 row-span-4 flex flex-col justify-center">
              <p class="font-display text-6xl">This is a title.</p>
              <p class="text-2xl md:text-xl">This is a subtitle that is maybe a little longer.</p>
            </div>
            <div class="text-sm col-start-2 row-start-6">
              <hr class="border-t border-orange-100" />Your Name
              <br />Your Company
            </div>
          </div>
        </div>
      </div>

      <!-- End slide content -->
    </div>

    <div v-show="!presentationMode" class="w-full bg-whiteborder-t border-gray-800">
      <div
        class="px-2 py-1 w-full flex flex-shrink-0 items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden whitespace-no-wrap"
        ref="previewContainer"
      ></div>
      <div class="flex justify-center">
        <div class="mr-auto flex flex-col items-center">
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
      showShortcuts: true
    };
  },

  mounted() {
    this.initData();
    this.addKeyboardShortcuts();
  },

  methods: {
    initData() {
      for (let i = 0; i < this.$refs.container.children.length; i++) {
        var child = this.$refs.container.children[i];

        if (child.tagName === "TEMPLATE") continue;

        this.total++;

        let index = i;

        if (this.$refs.container.firstElementChild.tagName !== "TEMPLATE")
          index = i + 1;

        if (index == this.slideshowNumber) {
          child.classList.remove("translate-x-full");
          this.currentSlide = child;
        }

        this.slides.push(child);
      }

      this.firstSlide = this.currentSlide;
      this.lastSlide = this.$refs.container.lastElementChild;

      this.loadPreview();
    },

    loadPreview() {
      let previewContainer = this.$refs.previewContainer;

      this.slides.forEach(function(slide, index) {
        let innerDiv = document.createElement("DIV");
        innerDiv.innerHTML = slide.innerHTML;

        Array.from(innerDiv.children).forEach(function(child) {
          child.removeAttribute("x-text");
        });

        innerDiv.classList.add(
          "absolute",
          "origin-top-left",
          "border-8",
          "border-gray-800"
        );

        let previewDiv = document.createElement("DIV");
        previewDiv.appendChild(innerDiv);
        previewDiv.classList.add("relative", "h-32", "flex-shrink-0");

        previewContainer.appendChild(previewDiv);

        innerDiv.style.width = slide.offsetWidth;
        innerDiv.style.height = slide.offsetHeight;

        previewDiv.style.width =
          (slide.offsetWidth / slide.offsetHeight) * previewDiv.offsetHeight;

        let scale = Math.min(
          previewDiv.offsetHeight / slide.offsetHeight,
          previewDiv.offsetWidth / slide.offsetWidth
        );

        console.log(previewDiv.offsetWidth + ":" + slide.offsetWidth);
        console.log(previewDiv.offsetHeight + ":" + slide.offsetHeight);

        innerDiv.style.transform =
          "scale(" +
          previewDiv.offsetWidth / slide.offsetWidth +
          ", " +
          previewDiv.offsetHeight / slide.offsetHeight +
          ")";
      });
    },

    addKeyboardShortcuts() {
      let self = this;

      window.addEventListener("keyup", e => {
        switch (e.key) {
          case "s":
            self.toggleShortcuts();
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

          case "p":
            self.togglePresentationMode();
            break;

          default:
            break;
        }
      });
    },

    toggleShortcuts() {
      this.showShortcuts = !this.showShortcuts;
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

    togglePresentationMode() {
      this.presentationMode = !this.presentationMode;
    }
  }
};
</script>

const setScroll = {
  computed: {

  },
  methods: {
    stopDef (e) {
      e.preventDefault()
    },
    $playScroll () {
      document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",this.stopDef,false);
    },
    $stopScroll () {
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",this.stopDef,false);//禁止页面滑动
    }
  }
}

export default setScroll

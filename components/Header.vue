<template>
    <div class="mainHeader">
        <div class="scroll-progress" ref='scrollProgress'></div>
        <header ref='header' @mouseover="headerHover"  @mouseout="headerHoverOut($event)">
            <div class="left" >
                <nuxt-link to='/homePage'>
                    <h3><span>青蓝up</span></h3>
                </nuxt-link>
            </div>
            <nav class="right" id='nav-right'>
                <ul ref='nav'>
                    <li @mouseover="setHoverClass('homeIcon', 'flash')" @mouseout="rmHoverClass('homeIcon', 'flash')">
                        <nuxt-link to='/homePage'>
                            <span ref='homeIcon' class="icon animated"><i class="iconfont icon-home"></i></span>
                            Home
                        </nuxt-link>
                    </li>
                    <li @mouseover="setHoverClass('aboutIcon', 'shake')" @mouseout="rmHoverClass('aboutIcon', 'shake')">
                        <nuxt-link to='/blog'>
                            <span ref='aboutIcon' class="icon animated"><i class="iconfont icon-about"></i></span>
                            Blog
                        </nuxt-link>
                    </li>
                    <li @mouseover="setHoverClass('XinIcon', 'rotateIn')" @mouseout="rmHoverClass('XinIcon', 'rotateIn')">
                        <nuxt-link to='/music'>
                            <span ref='XinIcon' class="icon animated"><i class="iconfont icon-yinle"></i></span>
                            Music
                        </nuxt-link>
                    </li>
                    <li @mouseover="setHoverClass('lockIcon', 'flash')" @mouseout="rmHoverClass('lockIcon', 'flash')">
                        <nuxt-link to='/book'>
                            <span ref='lockIcon' class="icon animated"><i class="iconfont icon-shu"></i></span>
                            书单
                        </nuxt-link>
                    </li>
                     <li @mouseover="setHoverClass('liuyanIcon', 'bounce')" @mouseout="rmHoverClass('liuyanIcon', 'bounce')">
                        <nuxt-link to='/comment'>
                            <span ref='liuyanIcon' class="icon animated"><i class="iconfont icon-liuyan"></i></span>
                            留言
                        </nuxt-link>
                    </li>
                     <li @mouseover="setHoverClass('projectIcon', 'flip')" @mouseout="rmHoverClass('projectIcon', 'flip')">
                        <nuxt-link to='/about'>
                            <span ref='projectIcon' class="icon animated"><i class="iconfont icon-project-o"></i></span>
                            About
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="search-header">
                <span class="animated search" @click="search"><i class="iconfont icon-search"></i></span>
                <template v-if="userData.commentUserEmail">
                    <span @click="gotoUser(true)" ref='MineIcon' class="animated mine" @mouseover="setHoverClass('MineIcon', 'swing')" @mouseout="rmHoverClass('MineIcon', 'swing')">
                        <el-dropdown @command="userGoDetail">
                            <!-- <img src="~/assets/img/min-banner/header-logo.jpg" alt="logo" srcset=""> -->
                            <img :src="userData.commentUserImg" alt="logo" srcset="">
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="password">修改密码</el-dropdown-item>
                                <el-dropdown-item command="basic">修改信息</el-dropdown-item>
                                <!-- <el-dropdown-item command="loginOut">退出登录</el-dropdown-item> -->
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </template>
                <template v-else>
                    <span @click="gotoUser(false)" ref='MineIcon' class="animated mine" @mouseover="setHoverClass('MineIcon', 'swing')" @mouseout="rmHoverClass('MineIcon', 'swing')"><i class="iconfont icon-wode"></i></span>
                </template>
                <span class="animated zhankai" @click="mobileNavBtn"><i class="iconfont icon-zhankai1"></i></span>
            </div>
        </header>
        <div class="search-wrap" id="search-wrap" @keydown.enter="goSearch">
            <div class="search">
                <div class="main-wrap">
                    <p class="searchTitle">~~ 命里有时终须有，命里无时莫强求...</p>
                    <div class="input-wrap">
                        <i class="iconfont icon-search" @click="goSearch"></i>
                        <input type="text" v-model.trim="searchStr" required placeholder="find what you need">
                    </div>
                </div>
            </div>
            <div class="cover"></div>
            <i @click="searchClose" class="iconfont icon-cuowu"></i>
        </div>
        <div class="goTop" ref='goTop' @click="gotop">
            <img  src="~/assets/img/logo/scroll.png" alt="scroll">
        </div>
        <el-dialog class="mobileNav" :visible.sync="mobileNavVisible" width="100%">
             <ul ref='nav' class="nav">
                <li @mouseover="setHoverClass('homeIcon', 'flash')" @mouseout="rmHoverClass('homeIcon', 'flash')" @click="closeMobileNav">
                    <nuxt-link to='/homePage'>
                        <span ref='homeIcon' class="icon animated"><i class="iconfont icon-home"></i></span>
                        Home
                    </nuxt-link>
                </li>
                <li @mouseover="setHoverClass('aboutIcon', 'shake')" @mouseout="rmHoverClass('aboutIcon', 'shake')" @click="closeMobileNav">
                    <nuxt-link to='/blog'>
                        <span ref='aboutIcon' class="icon animated"><i class="iconfont icon-about"></i></span>
                        Blog
                    </nuxt-link>
                </li>
                <li @mouseover="setHoverClass('XinIcon', 'rotateIn')" @mouseout="rmHoverClass('XinIcon', 'rotateIn')" @click="closeMobileNav">
                    <nuxt-link to='/music'>
                        <span ref='XinIcon' class="icon animated"><i class="iconfont icon-yinle"></i></span>
                        Music
                    </nuxt-link>
                </li>
                <li @mouseover="setHoverClass('lockIcon', 'flash')" @mouseout="rmHoverClass('lockIcon', 'flash')" @click="closeMobileNav">
                    <nuxt-link to='/book'>
                        <span ref='lockIcon' class="icon animated"><i class="iconfont icon-shu"></i></span>
                        书单
                    </nuxt-link>
                </li>
                    <li @mouseover="setHoverClass('liuyanIcon', 'bounce')" @mouseout="rmHoverClass('liuyanIcon', 'bounce')" @click="closeMobileNav">
                    <nuxt-link to='/comment'>
                        <span ref='liuyanIcon' class="icon animated"><i class="iconfont icon-liuyan"></i></span>
                        留言
                    </nuxt-link>
                </li>
                <li @mouseover="setHoverClass('projectIcon', 'flip')" @mouseout="rmHoverClass('projectIcon', 'flip')" @click="closeMobileNav">
                    <nuxt-link to='/about'>
                        <span ref='projectIcon' class="icon animated"><i class="iconfont icon-project-o"></i></span>
                        About
                    </nuxt-link>
                </li>
            </ul>
        </el-dialog>
    </div>
</template>

<script>
import{ mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {
            searchStr: '',
            mobileNavVisible: false
        }
    },
    computed: {
        ...mapState({
            userData: state=> state.userBasic.userData
        })
    },
    mounted () {
        let userData = localStorage.getItem('userData')
        let _userData = userData?JSON.parse(unescape(userData)): {}
        if(_userData.commentUserEmail) {
            // this.userData =  _userData
            this.SET_USER_BASIC(_userData)
        }
        this.changeGoToplocation()
        this.changeScrollProgressWidth()
        window.onscroll = () => {
            this.changeGoToplocation()
            this.changeScrollProgressWidth()
        }
    },
    methods: {
        ...mapMutations(['SET_USER_BASIC', 'CLEAR_USER_BASIC']),
        mobileNavBtn() {
            this.mobileNavVisible = true
        },
        closeMobileNav() {
            this.mobileNavVisible = false
        },
        gotoUser(isLogin) {
            if(this.$route.path == '/userDetail' || this.$route.path == '/login' ||  this.$route.path =='/register' ||  this.$route.path =='/changePassword') return
            if(isLogin) {
                this.$router.push({path: '/userDetail', query: {redirect: this.$route.fullPath}})
            }else{
                this.$router.push({path: '/login', query: {redirect: this.$route.fullPath}})
            }
        },
        userGoDetail(val) {
            let cover = {
                password: '/changePassword',
                basic: '/userDetail'
            }
            if(val == 'loginOut') {
                localStorage.removeItem('userData')
                this.CLEAR_USER_BASIC()
            }else{
                let _redirect =  this.$route.fullPath
                if(this.$route.path == '/userDetail' || this.$route.path == '/login' ||  this.$route.path =='/register' || this.$route.path =='/changePassword'){
                    _redirect = this.$route.query.redirect? this.$route.query.redirect :'/homePage'
                }
                this.$router.push({path: cover[val], query: {redirect: _redirect}})
            }

        },
        setHoverClass(icon, className) {
            this.$domHover(icon ,className)
        },
        rmHoverClass(icon, className) {
            this.$domRemoveClass(icon, className)
        },
        changeGoToplocation(){
            let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
            let windowWidth =  $(window).width()
            if(scrollTop > 200){
                this.$refs.goTop.style.bottom = '15vh'
                this.$refs.header.classList.add('headerHover')
                if(windowWidth>600){
                     $('#nav-right').fadeIn();
                }
            }else{
                this.$refs.goTop.style.bottom = '100vh'
                this.$refs.header.classList.remove('headerHover')
                if(windowWidth>600){
                    $('#nav-right').hide()
                }
            }
        },
        headerHover() {

        },
        headerHoverOut(e) {

            let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
            if(scrollTop > 200){

            }else{
                // $('#nav-right').hide()
            }

        },
        gotop() {
            window.scrollTo(0,0)
        },
        changeScrollProgressWidth() {
            let _clientHeight = document.documentElement.clientHeight
            let _scrollHeight = document.body.scrollHeight - _clientHeight
            let _scrollTop = document.documentElement.scrollTop||document.body.scrollTop
            this.$refs.scrollProgress.style.width = `${(_scrollTop/_scrollHeight)*100}%`
        },
        search() {
            $('#search-wrap').show()
            this.$stopScroll()
        },
        searchClose() {
            $('#search-wrap').fadeOut()
            this.$playScroll()
        },
        goSearch() {
            this.$router.push({path: '/searchPage', query: {_s: this.searchStr}})
            $('#search-wrap').fadeOut()
            this.$playScroll()
            this.searchStr = ''
        }
    }
}
</script>

<style lang="scss">
    @import '~/assets/css/Header.scss';
</style>

<template>
    <footer>
        <h3>
            青蓝
            <div class="icon-wrap">
                <i class="iconfont icon-github"></i>
            </div>
            Hello
        </h3>
        <p>© 2019 青蓝up 豫ICP备19002638号-1</p>
        <h3> <span>鱼跃此时海，花开彼岸天</span> </h3>
    </footer>
</template>

<script>
export default {

}
</script>

<style socped lang="scss">
    footer{
        h3{
            color: #666666;
            margin: 15px;
            text-align: center;
            font-family: 'Ubuntu', sans-serif;
            font-size: 12px;
            .icon-wrap{
                display: inline-block;
                transform-style:preserve-3d;
                width: 30px;
                .iconfont{
                    display: inline-block;
                    transform: rotateY(60deg);
                    padding: 0 5px;
                    color: #46b980;
                    animation: footerRotate 3s linear infinite;
                    @keyframes footerRotate {
                        0% {
                            transform: rotateY(0deg);
                        }
                        20% {
                            transform: rotateY(72deg);
                        }
                        40% {
                            transform: rotateY(144deg);
                        }
                        60% {
                            transform: rotateY(216deg);
                        }
                        80% {
                            transform: rotateY(288deg);
                        }
                        100% {
                            transform: rotateY(360deg);
                        }
                    }
                }
            }

            span{
                padding:0 20px;
                display: inline-block;
                background-image:  linear-gradient(270deg,#c4987a 33%,#ffd5bf 73%);
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        p{
          color:#b9b9b9;
          font-size: 13px;
          text-align: center;
        }
    }
</style>

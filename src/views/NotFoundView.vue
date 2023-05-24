<template>
  <div class='c'>
    <div class='_404'>404</div>
    <hr>
    <div class='_1'>THE PAGE</div>
    <div class='_2'>WAS NOT FOUND</div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView"
}
</script>
<style scoped>
.c{
  text-align: center;
  display: block;
  position: relative;
  width:80%;
  margin:100px auto;
  height: 450px;
}
._404{
  font-size: 220px;
  position: relative;
  display: inline-block;
  z-index: 2;
  height: 250px;
  letter-spacing: 15px;
}
._1{
  text-align:center;
  display:block;
  position:relative;
  letter-spacing: 12px;
  font-size: 4em;
  line-height: 80%;
}
._2{
  text-align:center;
  display:block;
  position: relative;
  font-size: 20px;
}
.text{
  font-size: 70px;
  text-align: center;
  position: relative;
  display: inline-block;
  margin: 19px 0px 0px 0px;
  /* top: 256.301px; */
  z-index: 3;
  width: 100%;
  line-height: 1.2em;
  display: inline-block;
}

hr{
  padding: 0;
  border: none;
  border-top: 5px solid #fff;
  color: #fff;
  text-align: center;
  margin: 0px auto;
  width: 420px;
  height:10px;
  z-index: -10;
}

hr:after {
  content: "\2022";
  display: inline-block;
  position: relative;
  top: -0.75em;
  font-size: 2em;
  padding: 0 0.2em;
  background: #33cc99;
}

@-webkit-keyframes moveclouds {
  0% {margin-left: 1000px;}
  100% {margin-left: -1000px;}
}
@-moz-keyframes moveclouds {
  0% {margin-left: 1000px;}
  100% {margin-left: -1000px;}
}
@-o-keyframes moveclouds {
  0% {margin-left: 1000px;}
  100% {margin-left: -1000px;}
}
</style>
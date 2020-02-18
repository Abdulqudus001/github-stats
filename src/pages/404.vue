<template>
  <div>
    <h1>404</h1>
    <p>Oops! Seems you're lost.</p>
    <a class="button" href="/"><i class="icon-home"></i>Lets take you home</a>
  </div>
</template>

<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
}

.button {
  font-weight: 300;
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  border: 1px solid #efefef;
  padding: .5em;
  border-radius: 3px;
  // float: left;
  // margin: 2em auto;
  position: relative;
  transition: background .3s linear;
}

.button:hover {
  background-color: $primary-light;
  color: #fff;
}

p {
  font-size: 2em;
  text-align: center;
  font-weight: 100;
  // margin: 0 0 2em;
}

h1 {
  text-align: center;
  font-size: 10em;
  font-weight: 100;
  margin: 0; 
}
</style>
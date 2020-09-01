<template>
  <div class="home">
    <p class="py-5 h2">The Glasses</p>
    <div class="background_image"></div>
    <div class="py-5">
      <p class="mb-1">
        Here, we focus on making timeless pieces by partnering with
        the world’s finest makers, sourcing the finest material, trace down to their
      </p>
      <p class="mb-1">
        origin and sharing their story with you, so you will always
        know what you are buying, literally.
      </p>
    </div>
    <img
      class="series_number mb-3"
      src="https://ucarecdn.com/e035224c-43cf-4912-af38-c405209a2c45/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
      alt="series number"
    />
    <section class="container my-5">
      <div class="row">
        <div class="col-md-7">
          <img
            class="w-100"
            src="https://images.unsplash.com/photo-1547104442-a40f335740cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
            alt
          />
        </div>
        <div class="m-auto col-md-5 text-left">
          <p class="mb-0 opacity-6">FULL TRACEBILITY</p>
          <p class="h2 mb-4">Every Product Has A Code</p>
          <p class="mb-0">
            three numbers, divided into three sets, are debossed in white on
            each product.Each set of number corresponds to a different meaning
            that can be traced back to the origin of each product.It refers to
            style number, material provider, material type and the makers that
            make the product.
          </p>
        </div>
      </div>
      <div class="row d-flex flex-row-reverse mt-5">
        <div class="col-md-7">
          <img
            class="w-100"
            src="https://images.unsplash.com/photo-1539126190438-008b15923601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt
          />
        </div>
        <div class="col-md-5 text-left m-auto">
          <p class="mb-0 opacity-6">RADICAL TRANSPARENCY</p>
          <p class="h2 mb-4">Know What You Are Buying</p>
          <p class="mb-0">
            For too long, we've been given little to no information on the actual
            origin and manufacturing conditions of the product. We don’t know
            much about the product beside where it’s made. We’re held together to
            start a movement toward asking more about “where your items are
            coming from.” We like to give you the power to know exactly what you
            are buying by breaking down every product to its raw materials and
            trace back to their origin.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-8 m-auto">
          <p class="mb-0 opacity-6">HONEST PRICING</p>
          <p class="h2 mb-4">Know What is Worth Paying For</p>
          <p class="mb-0">
            We believe that you shouldn't have to choose between quality, fairness
            and value.Transparency means we can provide real quality at a much lower
            price. We’d rather our customers know exactly how much effort goes into
            making each product and make sure our partners get full recognition for
            their devotion and skill. We won’t shave a few cents off production or
            try and squeeze an extra penny from our customers through hidden markups.
          </p>
        </div>
      </div>
    </section>
    <section class="bg_color my-5 py-5">
      <form class="subscribe_form">
        <label for="subscribe" class="pr-2">Subscribe:</label>
        <input
          id="subscribe"
          class="subscribe_style pr-2"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button class="subscribe_btn" type="submit">Confirm</button>
      </form>
    </section>
  </div>
</template>

<style lang="scss">
.background_image {
  background-image: url("https://images.unsplash.com/photo-1587929373464-d5b6ddc340b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1264&q=80");
  height: 50vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 30%;
}
.series_number {
  width: 70%;
}
.w-100 {
  width: 100%;
}
.m-auto {
  margin: auto;
}
.opacity-6 {
  opacity: 0.6;
}
.bg_color {
  background-color: rgba(0, 0, 0, 0.04);
}
#subscribe {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid gray;
}
.subscribe_btn {
  border: none;
  background-color: rgba(0, 0, 0, 0);
}
</style>

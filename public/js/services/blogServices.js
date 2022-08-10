const services = {
  getBlogList() {
    return axios({
      url: "https://blog.metacoders.dev/wp-json/wp/v2/posts",
      method: "GET",
    });
  },
};

let data = [];

const getBlogList = async () => {
  await services
    .getBlogList()
    .then((res) => {
      res.data.map((item) => data.push(item));
    })
    .catch((err) => {
      console.log("err", err);
    });
};

const renderBlogPosts = async () => {
  const getData = await getBlogList();
  console.log("data:", data);

  data.map((item) => {
    document.getElementById("blog-carousel").innerHTML += `
    <div class="card-blog">
    <div class="card-blog-image">
      <img src="${
        item.blog_post_layout_featured_media_urls.full[0]
      }" alt="photo" >
    </div>
    <div class="card-content">
      <div class="card-content-text">
        <h2>${item.title.rendered}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta error eos molestias dolore quod, voluptas, consequuntur unde sit amet...</p>
      </div>
      <div class="card-content-footer">
        <div class="card-content-footer-date">
          <div><p><i class="fa-solid fa-calendar-days" style="color:green"></i>  ${item.date.slice(
            0,
            10
          )}</p></div>
        </div>
        <div class="card-content-footer-button">
          <a href="${
            item.link
          }" target="_blank" class="blog-button">Watch more...</a>
        </div>
      </div>
    </div>
  </div>
    `;
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left fa-2xl'></i>",
      "<i class='fa fa-angle-right fa-2xl'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },

      1000: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });
};

renderBlogPosts();

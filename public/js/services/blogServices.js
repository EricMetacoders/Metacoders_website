const services = {
  getBlogList() {
    return axios({
      url: "https://blog.metacoders.dev/wp-json/wp/v2/posts",
      method: "GET",
    });
  },
};

const blogPosts = "";

const getBlogList = () => {
  services
    .getBlogList()
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

getBlogList();

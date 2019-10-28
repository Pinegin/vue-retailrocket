export default async (ctx, inject) => {
  const options = <%= serialize(options) %>;

  let rrApi = {
    addToBasket() {},
    order() {},
    categoryView() {},
    view() {},
    recomMouseDown() {},
    recomAddToCart() {},
  };

  ctx.$rrApi = rrApi;
  inject('rrApi', rrApi);
}

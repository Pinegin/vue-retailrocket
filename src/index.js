function loadScript(options = {}) {
  if (!options.id) return;

  window['rrPartnerId'] = options.id;
  window['rrApiOnReady'] = window['rrApiOnReady'] || [];
  window['rrApi'] = {
    addToBasket() {
    },
    order() {
    },
    categoryView() {
    },
    view() {
    },
    recomMouseDown() {
    },
    recomAddToCart() {
    },
  };

  (function (d) {
    var ref = d.getElementsByTagName('script')[0];
    var apiJs, apiJsId = 'rrApi-jssdk';

    if (d.getElementById(apiJsId)) return;

    apiJs = d.createElement('script');
    apiJs.id = apiJsId;
    apiJs.async = true;
    apiJs.src = "//cdn.retailrocket.ru/content/javascript/tracking.js";

    ref.parentNode.insertBefore(apiJs, ref);
  }(document));
}

const rrApi = {
  viewCategory(categoryId) {
    try {
      window['rrApi'].categoryView(categoryId);
      // console.log('categoryView', categoryId);
    } catch (e) {
    }
  },
  viewProduct(productId) {
    try {
      window['rrApi'].view(productId);
      // console.log('view', productId);
    } catch (e) {
    }
  },
  addToCart(productId) {
    try {
      window['rrApi'].addToBasket(productId);
      // console.log('addToBasket', productId);
    } catch (e) {
    }
  },
  order(transactionId, items) {
    try {
      window['rrApi'].order({
        transaction: transactionId,
        items
      });
      // console.log('order', transactionId, items);
    } catch (e) {
    }
  }
};

export default {
  install(Vue, options) {

    loadScript(options);

    Object.defineProperty(Vue.prototype, `$rrApi`, {
      /**
       * Define $rrApi property
       */
      get() {
        return rrApi;
      },
    });
  },
};

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

function rrApiIsLoad() {
  return window['rrApi'].initialized === undefined
}

const rrApi = {
  viewCategory(categoryId) {
    if (rrApiIsLoad()) {
      window["rrApiOnReady"].push(function () {
        try {
          window['rrApi'].categoryView(categoryId);
        } catch (e) {
        }
      });
      return;
    }

    try {
      window['rrApi'].categoryView(categoryId);
    } catch (e) {
    }
  },
  viewProduct(productId) {
    if (rrApiIsLoad()) {
      window["rrApiOnReady"].push(function () {
        try {
          window['rrApi'].view(productId);
        } catch (e) {
        }
      });
      return;
    }

    try {
      window['rrApi'].view(productId);
    } catch (e) {
    }
  },
  addToCart(productId) {
    if (rrApiIsLoad()) {
      window["rrApiOnReady"].push(function () {
        try {
          window['rrApi'].addToBasket(productId);
        } catch (e) {
        }
      });
      return;
    }

    try {
      window['rrApi'].addToBasket(productId);
    } catch (e) {
    }
  },
  order({transaction, items}) {
    if (rrApiIsLoad()) {
      window["rrApiOnReady"].push(function () {
        try {
          window['rrApi'].order({transaction, items});
        } catch (e) {
        }
      });
      return;
    }

    try {
      window['rrApi'].order({transaction, items});
    } catch (e) {
    }
  },
  setEmail(email, info) {
    if (rrApiIsLoad()) {
      window["rrApiOnReady"].push(function () {
        try {
          if (info) {
            window['rrApi'].setEmail(email, info);
          } else {
            window['rrApi'].setEmail(email);
          }
        } catch (e) {
        }
      });
      return;
    }

    try {
      if (info) {
        window['rrApi'].setEmail(email, info);
      } else {
        window['rrApi'].setEmail(email);
      }
    } catch (e) {
    }
  },
  welcomeSequence(email) {
    if (rrApiIsLoad()) {
      window["rrApiOnReady"].push(function() {
        try {
          window['rrApi'].welcomeSequence(email);
        } catch (e) {
        }
      });
      return;
    }

    try {
      window['rrApi'].welcomeSequence(email);
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

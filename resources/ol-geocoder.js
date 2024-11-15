/*!
 * ol-geocoder - v4.3.4
 * A geocoder extension compatible with OpenLayers v6.x to v9.0
 * https://github.com/Dominique92/ol-geocoder
 * Built: 15/03/2024 09:40:14
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(
        require("ol/control/Control"),
        require("ol/style/Style"),
        require("ol/style/Icon"),
        require("ol/layer/Vector"),
        require("ol/source/Vector"),
        require("ol/geom/Point"),
        require("ol/Feature"),
        require("ol/proj")
      ))
    : "function" == typeof define && define.amd
    ? define(
        [
          "ol/control/Control",
          "ol/style/Style",
          "ol/style/Icon",
          "ol/layer/Vector",
          "ol/source/Vector",
          "ol/geom/Point",
          "ol/Feature",
          "ol/proj",
        ],
        t
      )
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).Geocoder = t(
        e.ol.control.Control,
        e.ol.style.Style,
        e.ol.style.Icon,
        e.ol.layer.Vector,
        e.ol.source.Vector,
        e.ol.geom.Point,
        e.ol.Feature,
        e.ol.proj
      ));
})(this, function (e, t, s, r, n, o, a, i) {
  "use strict";
  function l(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  function c(e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (s) {
          if ("default" !== s) {
            var r = Object.getOwnPropertyDescriptor(e, s);
            Object.defineProperty(
              t,
              s,
              r.get
                ? r
                : {
                    enumerable: !0,
                    get: function () {
                      return e[s];
                    },
                  }
            );
          }
        }),
      (t.default = e),
      Object.freeze(t)
    );
  }
  var d = l(e),
    u = l(t),
    p = l(s),
    h = l(r),
    g = l(n),
    m = l(o),
    y = l(a),
    f = c(i),
    b = "gcd-container",
    v = "gcd-button-control",
    w = "gcd-input-query",
    x = "gcd-input-label",
    $ = "gcd-input-search",
    k = {
      namespace: "ol-geocoder",
      spin: "gcd-pseudo-rotate",
      hidden: "gcd-hidden",
      address: "gcd-address",
      country: "gcd-country",
      city: "gcd-city",
      road: "gcd-road",
      olControl: "ol-control",
      glass: {
        container: "gcd-gl-container",
        control: "gcd-gl-control",
        button: "gcd-gl-btn",
        input: "gcd-gl-input",
        expanded: "gcd-gl-expanded",
        search: "gcd-gl-search",
        result: "gcd-gl-result",
      },
      inputText: {
        container: "gcd-txt-container",
        control: "gcd-txt-control",
        label: "gcd-txt-label",
        input: "gcd-txt-input",
        search: "gcd-txt-search",
        icon: "gcd-txt-glass",
        result: "gcd-txt-result",
      },
    },
    S = {
      containerId: b,
      buttonControlId: v,
      inputQueryId: w,
      inputLabelId: x,
      inputSearchId: $,
      cssClasses: k,
    };
  const q = Object.freeze({
      __proto__: null,
      containerId: b,
      buttonControlId: v,
      inputQueryId: w,
      inputLabelId: x,
      inputSearchId: $,
      cssClasses: k,
      default: S,
    }),
    L = "addresschosen",
    C = "nominatim",
    E = "reverse",
    T = "glass-button",
    j = "text-input",
    I = "bing",
    N = "mapquest",
    P = "opencage",
    A = "osm",
    R = "photon",
    F = "https://dev.virtualearth.net/REST/v1/Locations",
    _ = "https://nominatim.openstreetmap.org/search",
    M = "https://api.opencagedata.com/geocode/v1/json?",
    O = "https://nominatim.openstreetmap.org/search",
    D = "https://photon.komoot.io/api/",
    V = {
      provider: A,
      label: "",
      placeholder: "Search for an address",
      featureStyle: null,
      targetType: T,
      lang: "en-US",
      limit: 5,
      keepOpen: !1,
      preventDefault: !1,
      preventPanning: !1,
      preventMarker: !1,
      defaultFlyResolution: 10,
      debug: !1,
    };
  function B(e, t = "Assertion failed") {
    if (!e) {
      if ("undefined" != typeof Error) throw new Error(t);
      throw t;
    }
  }
  function U(e) {
    const t = (function () {
      if (
        ("performance" in window == 0 && (window.performance = {}),
        "now" in window.performance == 0)
      ) {
        let e = Date.now();
        performance.timing &&
          performance.timing.navigationStart &&
          (e = performance.timing.navigationStart),
          (window.performance.now = () => Date.now() - e);
      }
      return window.performance.now();
    })().toString(36);
    return e ? e + t : t;
  }
  function G(e) {
    return /^\d+$/u.test(e);
  }
  function Q(e, t, s) {
    if (Array.isArray(e)) return void e.forEach((e) => Q(e, t));
    const r = Array.isArray(t) ? t : t.split(/\s+/u);
    let n = r.length;
    for (; n--; ) H(e, r[n]) || Y(e, r[n], s);
  }
  function z(e, t, s) {
    if (Array.isArray(e)) return void e.forEach((e) => z(e, t, s));
    const r = Array.isArray(t) ? t : t.split(/\s+/u);
    let n = r.length;
    for (; n--; ) H(e, r[n]) && Z(e, r[n], s);
  }
  function H(e, t) {
    return e.classList ? e.classList.contains(t) : X(t).test(e.className);
  }
  function K(e) {
    for (; e.firstChild; ) e.firstChild.remove();
  }
  function J(e, t) {
    return e.replace(/\{\s*([\w-]+)\s*\}/gu, (e, s) => {
      const r = void 0 === t[s] ? "" : t[s];
      return String(r)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    });
  }
  function W(e, t) {
    let s;
    if (Array.isArray(e)) {
      if (
        ((s = document.createElement(e[0])),
        e[1].id && (s.id = e[1].id),
        e[1].classname && (s.className = e[1].classname),
        e[1].attr)
      ) {
        const { attr: t } = e[1];
        if (Array.isArray(t)) {
          let e = -1;
          for (; ++e < t.length; ) s.setAttribute(t[e].name, t[e].value);
        } else s.setAttribute(t.name, t.value);
      }
    } else s = document.createElement(e);
    s.innerHTML = t;
    const r = document.createDocumentFragment();
    for (; s.childNodes[0]; ) r.append(s.childNodes[0]);
    return s.append(r), s;
  }
  function X(e) {
    return new RegExp(`(^|\\s+) ${e} (\\s+|$)`, "u");
  }
  function Y(e, t, s) {
    e.classList
      ? e.classList.add(t)
      : (e.className = `${e.className} ${t}`.trim()),
      s && G(s) && window.setTimeout(() => Z(e, t), s);
  }
  function Z(e, t, s) {
    e.classList
      ? e.classList.remove(t)
      : (e.className = e.className.replace(X(t), " ").trim()),
      s && G(s) && window.setTimeout(() => Y(e, t), s);
  }
  const ee = q.cssClasses;
  class te {
    constructor(e) {
      (this.options = e), (this.els = this.createControl());
    }
    createControl() {
      let e, t, s;
      return (
        this.options.targetType === j
          ? ((t = `${ee.namespace} ${ee.inputText.container}`),
            (e = W(["div", { id: q.containerId, classname: t }], te.input)),
            (s = {
              container: e,
              control: e.querySelector(`.${ee.inputText.control}`),
              label: e.querySelector(`.${ee.inputText.label}`),
              input: e.querySelector(`.${ee.inputText.input}`),
              search: e.querySelector(`.${ee.inputText.search}`),
              result: e.querySelector(`.${ee.inputText.result}`),
            }),
            (s.label.innerHTML = this.options.label))
          : ((t = `${ee.namespace} ${ee.glass.container}`),
            (e = W(["div", { id: q.containerId, classname: t }], te.glass)),
            (s = {
              container: e,
              control: e.querySelector(`.${ee.glass.control}`),
              button: e.querySelector(`.${ee.glass.button}`),
              input: e.querySelector(`.${ee.glass.input}`),
              search: e.querySelector(`.${ee.glass.search}`),
              result: e.querySelector(`.${ee.glass.result}`),
            })),
        (s.input.placeholder = this.options.placeholder),
        s
      );
    }
  }
  function se(e) {
    return new Promise((t, s) => {
      const r = (function (e, t) {
          t &&
            "object" == typeof t &&
            (e += (/\?/u.test(e) ? "&" : "?") + re(t));
          return e;
        })(e.url, e.data),
        n = { method: "GET", mode: "cors", credentials: "same-origin" };
      e.jsonp
        ? (function (e, t, s) {
            const { head: r } = document,
              n = document.createElement("script"),
              o = `f${Math.round(Math.random() * Date.now())}`;
            n.setAttribute(
              "src",
              `${e + (e.indexOf("?") > 0 ? "&" : "?") + t}=${o}`
            ),
              (window[o] = (e) => {
                (window[o] = void 0),
                  setTimeout(() => r.removeChild(n), 0),
                  s(e);
              }),
              r.append(n);
          })(r, e.callbackName, t)
        : fetch(r, n)
            .then((e) => e.json())
            .then(t)
            .catch(s);
    });
  }
  function re(e) {
    return Object.keys(e)
      .reduce(
        (t, s) => (
          t.push(
            "object" == typeof e[s]
              ? re(e[s])
              : `${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`
          ),
          t
        ),
        []
      )
      .join("&");
  }
  (te.glass = `\n  <div class="${ee.glass.control} ${ee.olControl}">\n    <button type="button" id="${q.buttonControlId}" class="${ee.glass.button}"></button>\n    <input type="text" id="${q.inputQueryId}" class="${ee.glass.input}" autocomplete="off" placeholder="Search ...">\n    <a id="${q.inputSearchId}" class="${ee.glass.search} ${ee.hidden}"></a>\n  </div>\n  <ul class="${ee.glass.result}"></ul>\n`),
    (te.input = `\n  <div class="${ee.inputText.control}">\n    <label type="button" id="${q.inputSearchId}" class="${ee.inputText.label}"></label>\n    <input type="text" id="${q.inputQueryId}" class="${ee.inputText.input}" autocomplete="off" placeholder="Search ...">\n    <span class="${ee.inputText.icon}"></span>\n    <button type="button" id="${q.inputSearchId}" class="${ee.inputText.search} ${ee.hidden}"></button>\n  </div>\n  <ul class="${ee.inputText.result}"></ul>\n`);
  class ne {
    constructor() {
      this.settings = {
        url: D,
        params: { q: "", limit: 10, lang: "en" },
        langs: ["de", "it", "fr", "en"],
      };
    }
    getParameters(e) {
      return (
        (e.lang = e.lang.toLowerCase()),
        {
          url: this.settings.url,
          params: {
            q: e.query,
            limit: e.limit || this.settings.params.limit,
            lang: this.settings.langs.includes(e.lang)
              ? e.lang
              : this.settings.params.lang,
          },
        }
      );
    }
    handleResponse(e) {
      return 0 === e.features.length
        ? []
        : e.features.map((e) => ({
            lon: e.geometry.coordinates[0],
            lat: e.geometry.coordinates[1],
            address: {
              name: e.properties.name,
              postcode: e.properties.postcode,
              city: e.properties.city,
              state: e.properties.state,
              country: e.properties.country,
            },
            original: { formatted: e.properties.name, details: e.properties },
          }));
    }
  }
  class oe {
    constructor(e) {
      this.settings = {
        url: O,
        ...e,
        params: {
          q: "",
          format: "json",
          addressdetails: 1,
          limit: 10,
          countrycodes: "",
          viewbox: "",
          "accept-language": "en-US",
        },
      };
    }
    getParameters(e) {
      return {
        url: this.settings.url,
        params: {
          q: e.query,
          format: this.settings.params.format,
          addressdetails: this.settings.params.addressdetails,
          limit: e.limit || this.settings.params.limit,
          countrycodes: e.countrycodes || this.settings.params.countrycodes,
          viewbox: e.viewbox || this.settings.params.viewbox,
          "accept-language": e.lang || this.settings.params["accept-language"],
        },
      };
    }
    handleResponse(e) {
      return 0 === e.length
        ? []
        : e.map((e) => ({
            lon: e.lon,
            lat: e.lat,
            bbox: e.boundingbox,
            address: {
              name: e.display_name,
              road: e.address.road || "",
              houseNumber: e.address.house_number || "",
              postcode: e.address.postcode,
              city: e.address.city || e.address.town,
              state: e.address.state,
              country: e.address.country,
            },
            original: { formatted: e.display_name, details: e.address },
          }));
    }
  }
  class ae {
    constructor() {
      this.settings = {
        url: _,
        params: {
          q: "",
          key: "",
          format: "json",
          addressdetails: 1,
          limit: 10,
          countrycodes: "",
          "accept-language": "en-US",
        },
      };
    }
    getParameters(e) {
      return {
        url: this.settings.url,
        params: {
          q: e.query,
          key: e.key,
          format: "json",
          addressdetails: 1,
          limit: e.limit || this.settings.params.limit,
          countrycodes: e.countrycodes || this.settings.params.countrycodes,
          "accept-language": e.lang || this.settings.params["accept-language"],
        },
      };
    }
    handleResponse(e) {
      return 0 === e.length
        ? []
        : e.map((e) => ({
            lon: e.lon,
            lat: e.lat,
            address: {
              name: e.address.neighbourhood || "",
              road: e.address.road || "",
              postcode: e.address.postcode,
              city: e.address.city || e.address.town,
              state: e.address.state,
              country: e.address.country,
            },
            original: { formatted: e.display_name, details: e.address },
          }));
    }
  }
  class ie {
    constructor() {
      this.settings = {
        url: F,
        callbackName: "jsonp",
        params: { query: "", key: "", includeNeighborhood: 0, maxResults: 10 },
      };
    }
    getParameters(e) {
      return {
        url: this.settings.url,
        callbackName: this.settings.callbackName,
        params: {
          query: e.query,
          key: e.key,
          includeNeighborhood:
            e.includeNeighborhood || this.settings.params.includeNeighborhood,
          maxResults: e.maxResults || this.settings.params.maxResults,
        },
      };
    }
    handleResponse(e) {
      const { resources: t } = e.resourceSets[0];
      return 0 === t.length
        ? []
        : t.map((e) => ({
            lon: e.point.coordinates[1],
            lat: e.point.coordinates[0],
            address: { name: e.name },
            original: {
              formatted: e.address.formattedAddress,
              details: e.address,
            },
          }));
    }
  }
  class le {
    constructor() {
      this.settings = {
        url: M,
        params: {
          q: "",
          key: "",
          limit: 10,
          countrycode: "",
          pretty: 1,
          no_annotations: 1,
        },
      };
    }
    getParameters(e) {
      return {
        url: this.settings.url,
        params: {
          q: e.query,
          key: e.key,
          limit: e.limit || this.settings.params.limit,
          countrycode: e.countrycodes || this.settings.params.countrycodes,
        },
      };
    }
    handleResponse(e) {
      return 0 === e.results.length
        ? []
        : e.results.map((e) => ({
            lon: e.geometry.lng,
            lat: e.geometry.lat,
            address: {
              name: e.components.house_number || "",
              road: e.components.road || "",
              postcode: e.components.postcode,
              city: e.components.city || e.components.town,
              state: e.components.state,
              country: e.components.country,
            },
            original: { formatted: e.formatted, details: e.components },
          }));
    }
  }
  const ce = q.cssClasses;
  class de {
    constructor(e, t) {
      (this.Base = e),
        (this.layerName = U("geocoder-layer-")),
        (this.layer = new h.default({
          background: "transparent",
          name: this.layerName,
          source: new g.default(),
          displayInLayerSwitcher: !1,
        })),
        (this.options = e.options),
        (this.options.provider =
          "string" == typeof this.options.provider
            ? this.options.provider.toLowerCase()
            : this.options.provider),
        (this.provider = this.newProvider()),
        (this.els = t),
        (this.container = this.els.container),
        (this.registeredListeners = { mapClick: !1 }),
        this.setListeners();
    }
    setListeners() {
      const e = (e) => {
        e.stopPropagation(),
          H(this.els.control, ce.glass.expanded)
            ? this.collapse()
            : this.expand();
      };
      this.els.input.addEventListener(
        "keypress",
        (e) => {
          const t = e.target.value.trim();
          (e.key
            ? "Enter" === e.key
            : e.which
            ? 13 === e.which
            : !!e.keyCode && 13 === e.keyCode) &&
            (e.preventDefault(), this.query(t));
        },
        !1
      ),
        this.els.input.addEventListener(
          "click",
          (e) => e.stopPropagation(),
          !1
        ),
        this.els.input.addEventListener(
          "input",
          (e) => {
            0 !== e.target.value.trim().length
              ? z(this.els.search, ce.hidden)
              : Q(this.els.search, ce.hidden);
          },
          !1
        ),
        this.els.search.addEventListener(
          "click",
          () => {
            this.els.input.focus(), this.query(this.els.input.value);
          },
          !1
        ),
        this.options.targetType === T &&
          this.els.button.addEventListener("click", e, !1);
    }
    query(e) {
      this.provider || (this.provider = this.newProvider());
      const t = this.provider.getParameters({
        query: e,
        key: this.options.key,
        lang: this.options.lang,
        countrycodes: this.options.countrycodes,
        viewbox: this.options.viewbox,
        limit: this.options.limit,
      });
      this.clearResults(!1 === this.options.keepOpen),
        Q(this.els.search, ce.spin);
      const s = { url: t.url, data: t.params };
      t.callbackName && ((s.jsonp = !0), (s.callbackName = t.callbackName)),
        se(s)
          .then((e) => {
            this.options.debug && console.info(e), z(this.els.search, ce.spin);
            const t = this.provider.handleResponse(e);
            t && (this.createList(t), this.listenMapClick());
          })
          .catch(() => {
            z(this.els.search, ce.spin);
            const e = W("li", "<h5>Error! No internet connection?</h5>");
            this.els.result.append(e);
          });
    }
    createList(e) {
      const t = this.els.result;
      e.forEach((s) => {
        let r;
        if (this.options.provider === A)
          r = `<span class="${ce.road}">${s.address.name}</span>`;
        else r = this.addressTemplate(s.address);
        if (1 == e.length) this.chosen(s, r, s.address, s.original);
        else {
          const e = W("li", `<a href="#">${r}</a>`);
          e.addEventListener(
            "click",
            (e) => {
              e.preventDefault(), this.chosen(s, r, s.address, s.original);
            },
            !1
          ),
            t.append(e);
        }
      });
    }
    chosen(e, t, s, r) {
      const n = this.Base.getMap(),
        o = [Number.parseFloat(e.lon), Number.parseFloat(e.lat)],
        a = n.getView().getProjection(),
        i = f.transform(o, "EPSG:4326", a);
      let { bbox: l } = e;
      l &&
        (l = f.transformExtent(
          [
            parseFloat(l[2]),
            parseFloat(l[0]),
            parseFloat(l[3]),
            parseFloat(l[1]),
          ],
          "EPSG:4326",
          a
        ));
      const c = { formatted: t, details: s, original: r };
      if (
        (this.clearResults(!0),
        !0 === this.options.preventDefault || !0 === this.options.preventMarker)
      )
        this.Base.dispatchEvent({
          type: L,
          address: c,
          coordinate: i,
          bbox: l,
          place: e,
        });
      else {
        const t = this.createFeature(i, c);
        this.Base.dispatchEvent({
          type: L,
          address: c,
          feature: t,
          coordinate: i,
          bbox: l,
          place: e,
        });
      }
      !0 !== this.options.preventDefault &&
        !0 !== this.options.preventPanning &&
        (l
          ? n.getView().fit(l, { duration: 500 })
          : n
              .getView()
              .animate({
                center: i,
                resolution: this.options.defaultFlyResolution,
                duration: 500,
              }));
    }
    createFeature(e) {
      const t = new y.default(new m.default(e));
      return (
        this.addLayer(),
        t.setStyle(this.options.featureStyle),
        t.setId(U("geocoder-ft-")),
        this.getSource().addFeature(t),
        t
      );
    }
    addressTemplate(e) {
      const t = [];
      return (
        e.name &&
          t.push(['<span class="', ce.road, '">{name}</span>'].join("")),
        (e.road || e.building || e.house_number) &&
          t.push(
            [
              '<span class="',
              ce.road,
              '">{building} {road} {house_number}</span>',
            ].join("")
          ),
        (e.city || e.town || e.village) &&
          t.push(
            [
              '<span class="',
              ce.city,
              '">{postcode} {city} {town} {village}</span>',
            ].join("")
          ),
        (e.state || e.country) &&
          t.push(
            ['<span class="', ce.country, '">{state} {country}</span>'].join("")
          ),
        J(t.join("<br>"), e)
      );
    }
    newProvider() {
      switch (this.options.provider) {
        case A:
          return new oe(this.options);
        case N:
          return new ae();
        case R:
          return new ne();
        case I:
          return new ie();
        case P:
          return new le();
        default:
          return this.options.provider;
      }
    }
    expand() {
      z(this.els.input, ce.spin),
        Q(this.els.control, ce.glass.expanded),
        window.setTimeout(() => this.els.input.focus(), 100),
        this.listenMapClick();
    }
    collapse() {
      (this.els.input.value = ""),
        this.els.input.blur(),
        Q(this.els.search, ce.hidden),
        z(this.els.control, ce.glass.expanded),
        K(this.els.result);
    }
    listenMapClick() {
      if (this.registeredListeners.mapClick) return;
      const e = this,
        t = this.Base.getMap().getTargetElement();
      (this.registeredListeners.mapClick = !0),
        t.addEventListener(
          "click",
          {
            handleEvent(s) {
              t.removeEventListener(s.type, this, !1),
                (e.registeredListeners.mapClick = !1);
            },
          },
          !1
        );
    }
    clearResults(e) {
      e && this.options.targetType === T ? this.collapse() : K(this.els.result);
    }
    getSource() {
      return this.layer.getSource();
    }
    addLayer() {
      let e = !1;
      const t = this.Base.getMap();
      t.getLayers().forEach((t) => {
        t === this.layer && (e = !0);
      }),
        e || t.addLayer(this.layer);
    }
  }
  class ue extends d.default {
    constructor(e = C, t) {
      B("string" == typeof e, "@param `type` should be string!"),
        B(
          e === C || e === E,
          `@param 'type' should be '${C}'\n      or '${E}'!`
        );
      const s = {
        ...V,
        featureStyle: [
          new u.default({
            image: new p.default({
              anchor: [0.5, 1],
              src: 'data:image/svg+xml;charset=utf-8,<svg width="26" height="42" viewBox="0 0 26 42" xmlns="http://www.w3.org/2000/svg"><polygon points="1,18 14,42 25,18" fill="rgb(75,75,75)" /><ellipse cx="13" cy="13" rx="13" ry="13" fill="rgb(75,75,75)" /><ellipse cx="13" cy="14" rx="6" ry="6" fill="yellow" /></svg>',
            }),
          }),
        ],
        ...t,
      };
      let r, n;
      const o = new te(s);
      if (
        (e === C && (r = o.els.container),
        super({ element: r, ...s }),
        !(this instanceof ue))
      )
        return new ue();
      (this.options = s),
        (this.container = r),
        e === C && ((n = new de(this, o.els)), (this.layer = n.layer));
    }
    getLayer() {
      return this.layer;
    }
    getSource() {
      return this.getLayer().getSource();
    }
    setProvider(e) {
      this.options.provider = e;
    }
    setProviderKey(e) {
      this.options.key = e;
    }
  }
  return ue;
});
//# sourceMappingURL=ol-geocoder.js.map

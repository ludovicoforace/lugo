import he, { useRef as hr, useContext as st, useLayoutEffect as Jr, createElement as Qr } from "react";
const je = {
  primary: "#fd7e2d"
}, mr = {
  maxScrollbarWidth: "20px"
};
var qe = {}, en = {
  get exports() {
    return qe;
  },
  set exports(e) {
    qe = e;
  }
}, q = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function tn() {
  if (qt)
    return q;
  qt = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, i = 60109, c = 60110, u = 60112, l = 60113, m = 60120, v = 60115, S = 60116, T = 60121, k = 60122, P = 60117, N = 60129, A = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var b = Symbol.for;
    e = b("react.element"), t = b("react.portal"), r = b("react.fragment"), n = b("react.strict_mode"), o = b("react.profiler"), i = b("react.provider"), c = b("react.context"), u = b("react.forward_ref"), l = b("react.suspense"), m = b("react.suspense_list"), v = b("react.memo"), S = b("react.lazy"), T = b("react.block"), k = b("react.server.block"), P = b("react.fundamental"), N = b("react.debug_trace_mode"), A = b("react.legacy_hidden");
  }
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var K = y.$$typeof;
      switch (K) {
        case e:
          switch (y = y.type, y) {
            case r:
            case o:
            case n:
            case l:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case u:
                case S:
                case v:
                case i:
                  return y;
                default:
                  return K;
              }
          }
        case t:
          return K;
      }
    }
  }
  var j = i, R = e, p = u, ee = r, fe = S, ae = v, ce = t, de = o, me = n, te = l;
  return q.ContextConsumer = c, q.ContextProvider = j, q.Element = R, q.ForwardRef = p, q.Fragment = ee, q.Lazy = fe, q.Memo = ae, q.Portal = ce, q.Profiler = de, q.StrictMode = me, q.Suspense = te, q.isAsyncMode = function() {
    return !1;
  }, q.isConcurrentMode = function() {
    return !1;
  }, q.isContextConsumer = function(y) {
    return x(y) === c;
  }, q.isContextProvider = function(y) {
    return x(y) === i;
  }, q.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, q.isForwardRef = function(y) {
    return x(y) === u;
  }, q.isFragment = function(y) {
    return x(y) === r;
  }, q.isLazy = function(y) {
    return x(y) === S;
  }, q.isMemo = function(y) {
    return x(y) === v;
  }, q.isPortal = function(y) {
    return x(y) === t;
  }, q.isProfiler = function(y) {
    return x(y) === o;
  }, q.isStrictMode = function(y) {
    return x(y) === n;
  }, q.isSuspense = function(y) {
    return x(y) === l;
  }, q.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === o || y === N || y === n || y === l || y === m || y === A || typeof y == "object" && y !== null && (y.$$typeof === S || y.$$typeof === v || y.$$typeof === i || y.$$typeof === c || y.$$typeof === u || y.$$typeof === P || y.$$typeof === T || y[0] === k);
  }, q.typeOf = x, q;
}
var V = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function rn() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, i = 60109, c = 60110, u = 60112, l = 60113, m = 60120, v = 60115, S = 60116, T = 60121, k = 60122, P = 60117, N = 60129, A = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var b = Symbol.for;
      e = b("react.element"), t = b("react.portal"), r = b("react.fragment"), n = b("react.strict_mode"), o = b("react.profiler"), i = b("react.provider"), c = b("react.context"), u = b("react.forward_ref"), l = b("react.suspense"), m = b("react.suspense_list"), v = b("react.memo"), S = b("react.lazy"), T = b("react.block"), k = b("react.server.block"), P = b("react.fundamental"), b("react.scope"), b("react.opaque.id"), N = b("react.debug_trace_mode"), b("react.offscreen"), A = b("react.legacy_hidden");
    }
    var x = !1;
    function j(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === o || g === N || g === n || g === l || g === m || g === A || x || typeof g == "object" && g !== null && (g.$$typeof === S || g.$$typeof === v || g.$$typeof === i || g.$$typeof === c || g.$$typeof === u || g.$$typeof === P || g.$$typeof === T || g[0] === k));
    }
    function R(g) {
      if (typeof g == "object" && g !== null) {
        var f = g.$$typeof;
        switch (f) {
          case e:
            var G = g.type;
            switch (G) {
              case r:
              case o:
              case n:
              case l:
              case m:
                return G;
              default:
                var J = G && G.$$typeof;
                switch (J) {
                  case c:
                  case u:
                  case S:
                  case v:
                  case i:
                    return J;
                  default:
                    return f;
                }
            }
          case t:
            return f;
        }
      }
    }
    var p = c, ee = i, fe = e, ae = u, ce = r, de = S, me = v, te = t, y = o, K = n, Z = l, ve = !1, ue = !1;
    function oe(g) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function be(g) {
      return ue || (ue = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ge(g) {
      return R(g) === c;
    }
    function Se(g) {
      return R(g) === i;
    }
    function C(g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }
    function E(g) {
      return R(g) === u;
    }
    function _(g) {
      return R(g) === r;
    }
    function O(g) {
      return R(g) === S;
    }
    function s(g) {
      return R(g) === v;
    }
    function F(g) {
      return R(g) === t;
    }
    function h(g) {
      return R(g) === o;
    }
    function B(g) {
      return R(g) === n;
    }
    function M(g) {
      return R(g) === l;
    }
    V.ContextConsumer = p, V.ContextProvider = ee, V.Element = fe, V.ForwardRef = ae, V.Fragment = ce, V.Lazy = de, V.Memo = me, V.Portal = te, V.Profiler = y, V.StrictMode = K, V.Suspense = Z, V.isAsyncMode = oe, V.isConcurrentMode = be, V.isContextConsumer = ge, V.isContextProvider = Se, V.isElement = C, V.isForwardRef = E, V.isFragment = _, V.isLazy = O, V.isMemo = s, V.isPortal = F, V.isProfiler = h, V.isStrictMode = B, V.isSuspense = M, V.isValidElementType = j, V.typeOf = R;
  }()), V;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = tn() : e.exports = rn();
})(en);
function nn(e) {
  function t(C, E, _, O, s) {
    for (var F = 0, h = 0, B = 0, M = 0, g, f, G = 0, J = 0, D, re = D = g = 0, Y = 0, ie = 0, Ee = 0, le = 0, Me = _.length, Re = Me - 1, ye, I = "", Q = "", Fe = "", Pe = "", xe; Y < Me; ) {
      if (f = _.charCodeAt(Y), Y === Re && h + M + B + F !== 0 && (h !== 0 && (f = h === 47 ? 10 : 47), M = B = F = 0, Me++, Re++), h + M + B + F === 0) {
        if (Y === Re && (0 < ie && (I = I.replace(T, "")), 0 < I.trim().length)) {
          switch (f) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              I += _.charAt(Y);
          }
          f = 59;
        }
        switch (f) {
          case 123:
            for (I = I.trim(), g = I.charCodeAt(0), D = 1, le = ++Y; Y < Me; ) {
              switch (f = _.charCodeAt(Y)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (f = _.charCodeAt(Y + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (re = Y + 1; re < Re; ++re)
                          switch (_.charCodeAt(re)) {
                            case 47:
                              if (f === 42 && _.charCodeAt(re - 1) === 42 && Y + 2 !== re) {
                                Y = re + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (f === 47) {
                                Y = re + 1;
                                break e;
                              }
                          }
                        Y = re;
                      }
                  }
                  break;
                case 91:
                  f++;
                case 40:
                  f++;
                case 34:
                case 39:
                  for (; Y++ < Re && _.charCodeAt(Y) !== f; )
                    ;
              }
              if (D === 0)
                break;
              Y++;
            }
            switch (D = _.substring(le, Y), g === 0 && (g = (I = I.replace(S, "").trim()).charCodeAt(0)), g) {
              case 64:
                switch (0 < ie && (I = I.replace(T, "")), f = I.charCodeAt(1), f) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ie = E;
                    break;
                  default:
                    ie = ve;
                }
                if (D = t(E, ie, D, f, s + 1), le = D.length, 0 < oe && (ie = r(ve, I, Ee), xe = u(3, D, ie, E, y, te, le, f, s, O), I = ie.join(""), xe !== void 0 && (le = (D = xe.trim()).length) === 0 && (f = 0, D = "")), 0 < le)
                  switch (f) {
                    case 115:
                      I = I.replace(ee, c);
                    case 100:
                    case 109:
                    case 45:
                      D = I + "{" + D + "}";
                      break;
                    case 107:
                      I = I.replace(x, "$1 $2"), D = I + "{" + D + "}", D = Z === 1 || Z === 2 && i("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                      break;
                    default:
                      D = I + D, O === 112 && (D = (Q += D, ""));
                  }
                else
                  D = "";
                break;
              default:
                D = t(E, r(E, I, Ee), D, O, s + 1);
            }
            Fe += D, D = Ee = ie = re = g = 0, I = "", f = _.charCodeAt(++Y);
            break;
          case 125:
          case 59:
            if (I = (0 < ie ? I.replace(T, "") : I).trim(), 1 < (le = I.length))
              switch (re === 0 && (g = I.charCodeAt(0), g === 45 || 96 < g && 123 > g) && (le = (I = I.replace(" ", ":")).length), 0 < oe && (xe = u(1, I, E, C, y, te, Q.length, O, s, O)) !== void 0 && (le = (I = xe.trim()).length) === 0 && (I = "\0\0"), g = I.charCodeAt(0), f = I.charCodeAt(1), g) {
                case 0:
                  break;
                case 64:
                  if (f === 105 || f === 99) {
                    Pe += I + _.charAt(Y);
                    break;
                  }
                default:
                  I.charCodeAt(le - 1) !== 58 && (Q += o(I, g, f, I.charCodeAt(2)));
              }
            Ee = ie = re = g = 0, I = "", f = _.charCodeAt(++Y);
        }
      }
      switch (f) {
        case 13:
        case 10:
          h === 47 ? h = 0 : 1 + g === 0 && O !== 107 && 0 < I.length && (ie = 1, I += "\0"), 0 < oe * ge && u(0, I, E, C, y, te, Q.length, O, s, O), te = 1, y++;
          break;
        case 59:
        case 125:
          if (h + M + B + F === 0) {
            te++;
            break;
          }
        default:
          switch (te++, ye = _.charAt(Y), f) {
            case 9:
            case 32:
              if (M + F + h === 0)
                switch (G) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ye = "";
                    break;
                  default:
                    f !== 32 && (ye = " ");
                }
              break;
            case 0:
              ye = "\\0";
              break;
            case 12:
              ye = "\\f";
              break;
            case 11:
              ye = "\\v";
              break;
            case 38:
              M + h + F === 0 && (ie = Ee = 1, ye = "\f" + ye);
              break;
            case 108:
              if (M + h + F + K === 0 && 0 < re)
                switch (Y - re) {
                  case 2:
                    G === 112 && _.charCodeAt(Y - 3) === 58 && (K = G);
                  case 8:
                    J === 111 && (K = J);
                }
              break;
            case 58:
              M + h + F === 0 && (re = Y);
              break;
            case 44:
              h + B + M + F === 0 && (ie = 1, ye += "\r");
              break;
            case 34:
            case 39:
              h === 0 && (M = M === f ? 0 : M === 0 ? f : M);
              break;
            case 91:
              M + h + B === 0 && F++;
              break;
            case 93:
              M + h + B === 0 && F--;
              break;
            case 41:
              M + h + F === 0 && B--;
              break;
            case 40:
              if (M + h + F === 0) {
                if (g === 0)
                  switch (2 * G + 3 * J) {
                    case 533:
                      break;
                    default:
                      g = 1;
                  }
                B++;
              }
              break;
            case 64:
              h + B + M + F + re + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < M + F + B))
                switch (h) {
                  case 0:
                    switch (2 * f + 3 * _.charCodeAt(Y + 1)) {
                      case 235:
                        h = 47;
                        break;
                      case 220:
                        le = Y, h = 42;
                    }
                    break;
                  case 42:
                    f === 47 && G === 42 && le + 2 !== Y && (_.charCodeAt(le + 2) === 33 && (Q += _.substring(le, Y + 1)), ye = "", h = 0);
                }
          }
          h === 0 && (I += ye);
      }
      J = G, G = f, Y++;
    }
    if (le = Q.length, 0 < le) {
      if (ie = E, 0 < oe && (xe = u(2, Q, ie, C, y, te, le, O, s, O), xe !== void 0 && (Q = xe).length === 0))
        return Pe + Q + Fe;
      if (Q = ie.join(",") + "{" + Q + "}", Z * K !== 0) {
        switch (Z !== 2 || i(Q, 2) || (K = 0), K) {
          case 111:
            Q = Q.replace(R, ":-moz-$1") + Q;
            break;
          case 112:
            Q = Q.replace(j, "::-webkit-input-$1") + Q.replace(j, "::-moz-$1") + Q.replace(j, ":-ms-input-$1") + Q;
        }
        K = 0;
      }
    }
    return Pe + Q + Fe;
  }
  function r(C, E, _) {
    var O = E.trim().split(A);
    E = O;
    var s = O.length, F = C.length;
    switch (F) {
      case 0:
      case 1:
        var h = 0;
        for (C = F === 0 ? "" : C[0] + " "; h < s; ++h)
          E[h] = n(C, E[h], _).trim();
        break;
      default:
        var B = h = 0;
        for (E = []; h < s; ++h)
          for (var M = 0; M < F; ++M)
            E[B++] = n(C[M] + " ", O[h], _).trim();
    }
    return E;
  }
  function n(C, E, _) {
    var O = E.charCodeAt(0);
    switch (33 > O && (O = (E = E.trim()).charCodeAt(0)), O) {
      case 38:
        return E.replace(b, "$1" + C.trim());
      case 58:
        return C.trim() + E.replace(b, "$1" + C.trim());
      default:
        if (0 < 1 * _ && 0 < E.indexOf("\f"))
          return E.replace(b, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + E;
  }
  function o(C, E, _, O) {
    var s = C + ";", F = 2 * E + 3 * _ + 4 * O;
    if (F === 944) {
      C = s.indexOf(":", 9) + 1;
      var h = s.substring(C, s.length - 1).trim();
      return h = s.substring(0, C).trim() + h + ";", Z === 1 || Z === 2 && i(h, 1) ? "-webkit-" + h + h : h;
    }
    if (Z === 0 || Z === 2 && !i(s, 1))
      return s;
    switch (F) {
      case 1015:
        return s.charCodeAt(10) === 97 ? "-webkit-" + s + s : s;
      case 951:
        return s.charCodeAt(3) === 116 ? "-webkit-" + s + s : s;
      case 963:
        return s.charCodeAt(5) === 110 ? "-webkit-" + s + s : s;
      case 1009:
        if (s.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + s + s;
      case 978:
        return "-webkit-" + s + "-moz-" + s + s;
      case 1019:
      case 983:
        return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
      case 883:
        if (s.charCodeAt(8) === 45)
          return "-webkit-" + s + s;
        if (0 < s.indexOf("image-set(", 11))
          return s.replace(me, "$1-webkit-$2") + s;
        break;
      case 932:
        if (s.charCodeAt(4) === 45)
          switch (s.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
            case 115:
              return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
            case 98:
              return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s;
          }
        return "-webkit-" + s + "-ms-" + s + s;
      case 964:
        return "-webkit-" + s + "-ms-flex-" + s + s;
      case 1023:
        if (s.charCodeAt(8) !== 99)
          break;
        return h = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + h + "-webkit-" + s + "-ms-flex-pack" + h + s;
      case 1005:
        return P.test(s) ? s.replace(k, ":-webkit-") + s.replace(k, ":-moz-") + s : s;
      case 1e3:
        switch (h = s.substring(13).trim(), E = h.indexOf("-") + 1, h.charCodeAt(0) + h.charCodeAt(E)) {
          case 226:
            h = s.replace(p, "tb");
            break;
          case 232:
            h = s.replace(p, "tb-rl");
            break;
          case 220:
            h = s.replace(p, "lr");
            break;
          default:
            return s;
        }
        return "-webkit-" + s + "-ms-" + h + s;
      case 1017:
        if (s.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (E = (s = C).length - 10, h = (s.charCodeAt(E) === 33 ? s.substring(0, E) : s).substring(C.indexOf(":", 7) + 1).trim(), F = h.charCodeAt(0) + (h.charCodeAt(7) | 0)) {
          case 203:
            if (111 > h.charCodeAt(8))
              break;
          case 115:
            s = s.replace(h, "-webkit-" + h) + ";" + s;
            break;
          case 207:
          case 102:
            s = s.replace(h, "-webkit-" + (102 < F ? "inline-" : "") + "box") + ";" + s.replace(h, "-webkit-" + h) + ";" + s.replace(h, "-ms-" + h + "box") + ";" + s;
        }
        return s + ";";
      case 938:
        if (s.charCodeAt(5) === 45)
          switch (s.charCodeAt(6)) {
            case 105:
              return h = s.replace("-items", ""), "-webkit-" + s + "-webkit-box-" + h + "-ms-flex-" + h + s;
            case 115:
              return "-webkit-" + s + "-ms-flex-item-" + s.replace(ae, "") + s;
            default:
              return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(ae, "") + s;
          }
        break;
      case 973:
      case 989:
        if (s.charCodeAt(3) !== 45 || s.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (de.test(C) === !0)
          return (h = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(C.replace("stretch", "fill-available"), E, _, O).replace(":fill-available", ":stretch") : s.replace(h, "-webkit-" + h) + s.replace(h, "-moz-" + h.replace("fill-", "")) + s;
        break;
      case 962:
        if (s = "-webkit-" + s + (s.charCodeAt(5) === 102 ? "-ms-" + s : "") + s, _ + O === 211 && s.charCodeAt(13) === 105 && 0 < s.indexOf("transform", 10))
          return s.substring(0, s.indexOf(";", 27) + 1).replace(N, "$1-webkit-$2") + s;
    }
    return s;
  }
  function i(C, E) {
    var _ = C.indexOf(E === 1 ? ":" : "{"), O = C.substring(0, E !== 3 ? _ : 10);
    return _ = C.substring(_ + 1, C.length - 1), be(E !== 2 ? O : O.replace(ce, "$1"), _, E);
  }
  function c(C, E) {
    var _ = o(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return _ !== E + ";" ? _.replace(fe, " or ($1)").substring(4) : "(" + E + ")";
  }
  function u(C, E, _, O, s, F, h, B, M, g) {
    for (var f = 0, G = E, J; f < oe; ++f)
      switch (J = ue[f].call(v, C, G, _, O, s, F, h, B, M, g)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          G = J;
      }
    if (G !== E)
      return G;
  }
  function l(C) {
    switch (C) {
      case void 0:
      case null:
        oe = ue.length = 0;
        break;
      default:
        if (typeof C == "function")
          ue[oe++] = C;
        else if (typeof C == "object")
          for (var E = 0, _ = C.length; E < _; ++E)
            l(C[E]);
        else
          ge = !!C | 0;
    }
    return l;
  }
  function m(C) {
    return C = C.prefix, C !== void 0 && (be = null, C ? typeof C != "function" ? Z = 1 : (Z = 2, be = C) : Z = 0), m;
  }
  function v(C, E) {
    var _ = C;
    if (33 > _.charCodeAt(0) && (_ = _.trim()), Se = _, _ = [Se], 0 < oe) {
      var O = u(-1, E, _, _, y, te, 0, 0, 0, 0);
      O !== void 0 && typeof O == "string" && (E = O);
    }
    var s = t(ve, _, E, 0, 0);
    return 0 < oe && (O = u(-2, s, _, _, y, te, s.length, 0, 0, 0), O !== void 0 && (s = O)), Se = "", K = 0, te = y = 1, s;
  }
  var S = /^\0+/g, T = /[\0\r\f]/g, k = /: */g, P = /zoo|gra/, N = /([,: ])(transform)/g, A = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, R = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, ee = /\(\s*(.*)\s*\)/g, fe = /([\s\S]*?);/g, ae = /-self|flex-/g, ce = /[^]*?(:[rp][el]a[\w-]+)[^]*/, de = /stretch|:\s*\w+\-(?:conte|avail)/, me = /([^-])(image-set\()/, te = 1, y = 1, K = 0, Z = 1, ve = [], ue = [], oe = 0, be = null, ge = 0, Se = "";
  return v.use = l, v.set = m, e !== void 0 && m(e), v;
}
var an = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function on(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var sn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Xt = /* @__PURE__ */ on(
  function(e) {
    return sn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bt = {}, cn = {
  get exports() {
    return bt;
  },
  set exports(e) {
    bt = e;
  }
}, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function un() {
  if (Kt)
    return H;
  Kt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function j(p) {
    if (typeof p == "object" && p !== null) {
      var ee = p.$$typeof;
      switch (ee) {
        case t:
          switch (p = p.type, p) {
            case l:
            case m:
            case n:
            case i:
            case o:
            case S:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case v:
                case P:
                case k:
                case c:
                  return p;
                default:
                  return ee;
              }
          }
        case r:
          return ee;
      }
    }
  }
  function R(p) {
    return j(p) === m;
  }
  return H.AsyncMode = l, H.ConcurrentMode = m, H.ContextConsumer = u, H.ContextProvider = c, H.Element = t, H.ForwardRef = v, H.Fragment = n, H.Lazy = P, H.Memo = k, H.Portal = r, H.Profiler = i, H.StrictMode = o, H.Suspense = S, H.isAsyncMode = function(p) {
    return R(p) || j(p) === l;
  }, H.isConcurrentMode = R, H.isContextConsumer = function(p) {
    return j(p) === u;
  }, H.isContextProvider = function(p) {
    return j(p) === c;
  }, H.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, H.isForwardRef = function(p) {
    return j(p) === v;
  }, H.isFragment = function(p) {
    return j(p) === n;
  }, H.isLazy = function(p) {
    return j(p) === P;
  }, H.isMemo = function(p) {
    return j(p) === k;
  }, H.isPortal = function(p) {
    return j(p) === r;
  }, H.isProfiler = function(p) {
    return j(p) === i;
  }, H.isStrictMode = function(p) {
    return j(p) === o;
  }, H.isSuspense = function(p) {
    return j(p) === S;
  }, H.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === m || p === i || p === o || p === S || p === T || typeof p == "object" && p !== null && (p.$$typeof === P || p.$$typeof === k || p.$$typeof === c || p.$$typeof === u || p.$$typeof === v || p.$$typeof === A || p.$$typeof === b || p.$$typeof === x || p.$$typeof === N);
  }, H.typeOf = j, H;
}
var W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function ln() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function j(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === n || f === m || f === i || f === o || f === S || f === T || typeof f == "object" && f !== null && (f.$$typeof === P || f.$$typeof === k || f.$$typeof === c || f.$$typeof === u || f.$$typeof === v || f.$$typeof === A || f.$$typeof === b || f.$$typeof === x || f.$$typeof === N);
    }
    function R(f) {
      if (typeof f == "object" && f !== null) {
        var G = f.$$typeof;
        switch (G) {
          case t:
            var J = f.type;
            switch (J) {
              case l:
              case m:
              case n:
              case i:
              case o:
              case S:
                return J;
              default:
                var D = J && J.$$typeof;
                switch (D) {
                  case u:
                  case v:
                  case P:
                  case k:
                  case c:
                    return D;
                  default:
                    return G;
                }
            }
          case r:
            return G;
        }
      }
    }
    var p = l, ee = m, fe = u, ae = c, ce = t, de = v, me = n, te = P, y = k, K = r, Z = i, ve = o, ue = S, oe = !1;
    function be(f) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ge(f) || R(f) === l;
    }
    function ge(f) {
      return R(f) === m;
    }
    function Se(f) {
      return R(f) === u;
    }
    function C(f) {
      return R(f) === c;
    }
    function E(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function _(f) {
      return R(f) === v;
    }
    function O(f) {
      return R(f) === n;
    }
    function s(f) {
      return R(f) === P;
    }
    function F(f) {
      return R(f) === k;
    }
    function h(f) {
      return R(f) === r;
    }
    function B(f) {
      return R(f) === i;
    }
    function M(f) {
      return R(f) === o;
    }
    function g(f) {
      return R(f) === S;
    }
    W.AsyncMode = p, W.ConcurrentMode = ee, W.ContextConsumer = fe, W.ContextProvider = ae, W.Element = ce, W.ForwardRef = de, W.Fragment = me, W.Lazy = te, W.Memo = y, W.Portal = K, W.Profiler = Z, W.StrictMode = ve, W.Suspense = ue, W.isAsyncMode = be, W.isConcurrentMode = ge, W.isContextConsumer = Se, W.isContextProvider = C, W.isElement = E, W.isForwardRef = _, W.isFragment = O, W.isLazy = s, W.isMemo = F, W.isPortal = h, W.isProfiler = B, W.isStrictMode = M, W.isSuspense = g, W.isValidElementType = j, W.typeOf = R;
  }()), W;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = un() : e.exports = ln();
})(cn);
var Ot = bt, fn = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, dn = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, pn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, It = {};
It[Ot.ForwardRef] = pn;
It[Ot.Memo] = gr;
function Jt(e) {
  return Ot.isMemo(e) ? gr : It[e.$$typeof] || fn;
}
var hn = Object.defineProperty, mn = Object.getOwnPropertyNames, Qt = Object.getOwnPropertySymbols, gn = Object.getOwnPropertyDescriptor, vn = Object.getPrototypeOf, er = Object.prototype;
function vr(e, t, r) {
  if (typeof t != "string") {
    if (er) {
      var n = vn(t);
      n && n !== er && vr(e, n, r);
    }
    var o = mn(t);
    Qt && (o = o.concat(Qt(t)));
    for (var i = Jt(e), c = Jt(t), u = 0; u < o.length; ++u) {
      var l = o[u];
      if (!dn[l] && !(r && r[l]) && !(c && c[l]) && !(i && i[l])) {
        var m = gn(t, l);
        try {
          hn(e, l, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var yn = vr;
function _e() {
  return (_e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var tr = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, St = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !qe.typeOf(e);
}, nt = Object.freeze([]), ke = Object.freeze({});
function Ve(e) {
  return typeof e == "function";
}
function wt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function $t(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ye = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Nt = typeof window < "u" && "HTMLElement" in window, bn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Sn = {}, wn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function En() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ue(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(En.apply(void 0, [wn[e]].concat(r)).trim());
}
var xn = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++)
      n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, c = i; r >= c; )
        (c <<= 1) < 0 && Ue(16, "" + r);
      this.groupSizes = new Uint32Array(c), this.groupSizes.set(o), this.length = c;
      for (var u = i; u < c; u++)
        this.groupSizes[u] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), m = 0, v = n.length; m < v; m++)
      this.tag.insertRule(l, n[m]) && (this.groupSizes[r]++, l++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n;
      this.groupSizes[r] = 0;
      for (var c = o; c < i; c++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var o = this.groupSizes[r], i = this.indexOfGroup(r), c = i + o, u = i; u < c; u++)
      n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), tt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Ge = 1, Je = function(e) {
  if (tt.has(e))
    return tt.get(e);
  for (; at.has(Ge); )
    Ge++;
  var t = Ge++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Ue(16, "" + t), tt.set(e, t), at.set(t, e), t;
}, _n = function(e) {
  return at.get(e);
}, Cn = function(e, t) {
  t >= Ge && (Ge = t + 1), tt.set(e, t), at.set(t, e);
}, Rn = "style[" + Ye + '][data-styled-version="5.3.11"]', Pn = new RegExp("^" + Ye + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Tn = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, c = o.length; i < c; i++)
    (n = o[i]) && e.registerName(t, n);
}, An = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var c = r[o].trim();
    if (c) {
      var u = c.match(Pn);
      if (u) {
        var l = 0 | parseInt(u[1], 10), m = u[2];
        l !== 0 && (Cn(m, l), Tn(e, m, u[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(c);
    }
  }
}, kn = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, yr = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(u) {
    for (var l = u.childNodes, m = l.length; m >= 0; m--) {
      var v = l[m];
      if (v && v.nodeType === 1 && v.hasAttribute(Ye))
        return v;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ye, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var c = kn();
  return c && n.setAttribute("nonce", c), r.insertBefore(n, i), n;
}, On = function() {
  function e(r) {
    var n = this.element = yr(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, c = 0, u = i.length; c < u; c++) {
        var l = i[c];
        if (l.ownerNode === o)
          return l;
      }
      Ue(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), In = function() {
  function e(r) {
    var n = this.element = yr(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), $n = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), rr = Nt, Nn = { isServer: !Nt, useCSSOMInjection: !bn }, ot = function() {
  function e(r, n, o) {
    r === void 0 && (r = ke), n === void 0 && (n = {}), this.options = _e({}, Nn, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Nt && rr && (rr = !1, function(i) {
      for (var c = document.querySelectorAll(Rn), u = 0, l = c.length; u < l; u++) {
        var m = c[u];
        m && m.getAttribute(Ye) !== "active" && (An(i, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Je(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(_e({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, c = n.target, r = o ? new $n(c) : i ? new On(c) : new In(c), new xn(r)));
    var r, n, o, i, c;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Je(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Je(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Je(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", c = 0; c < o; c++) {
        var u = _n(c);
        if (u !== void 0) {
          var l = r.names.get(u), m = n.getGroup(c);
          if (l && m && l.size) {
            var v = Ye + ".g" + c + '[id="' + u + '"]', S = "";
            l !== void 0 && l.forEach(function(T) {
              T.length > 0 && (S += T + ",");
            }), i += "" + m + v + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), jn = /(a)(d)/gi, nr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Et(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = nr(t % 52) + r;
  return (nr(t % 52) + r).replace(jn, "$1-$2");
}
var Ne = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, br = function(e) {
  return Ne(5381, e);
};
function Sr(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ve(r) && !$t(r))
      return !1;
  }
  return !0;
}
var Dn = br("5.3.11"), Mn = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Sr(t), this.componentId = r, this.baseHash = Ne(Dn, r), this.baseStyle = n, ot.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var c = De(this.rules, t, r, n).join(""), u = Et(Ne(this.baseHash, c) >>> 0);
        if (!r.hasNameForId(o, u)) {
          var l = n(c, "." + u, void 0, o);
          r.insertRules(o, u, l);
        }
        i.push(u), this.staticRulesId = u;
      }
    else {
      for (var m = this.rules.length, v = Ne(this.baseHash, n.hash), S = "", T = 0; T < m; T++) {
        var k = this.rules[T];
        if (typeof k == "string")
          S += k, process.env.NODE_ENV !== "production" && (v = Ne(v, k + T));
        else if (k) {
          var P = De(k, t, r, n), N = Array.isArray(P) ? P.join("") : P;
          v = Ne(v, N + T), S += N;
        }
      }
      if (S) {
        var A = Et(v >>> 0);
        if (!r.hasNameForId(o, A)) {
          var b = n(S, "." + A, void 0, o);
          r.insertRules(o, A, b);
        }
        i.push(A);
      }
    }
    return i.join(" ");
  }, e;
}(), Fn = /^\s*\/\/.*$/gm, zn = [":", "[", ".", "#"];
function Ln(e) {
  var t, r, n, o, i = e === void 0 ? ke : e, c = i.options, u = c === void 0 ? ke : c, l = i.plugins, m = l === void 0 ? nt : l, v = new nn(u), S = [], T = function(N) {
    function A(b) {
      if (b)
        try {
          N(b + "}");
        } catch {
        }
    }
    return function(b, x, j, R, p, ee, fe, ae, ce, de) {
      switch (b) {
        case 1:
          if (ce === 0 && x.charCodeAt(0) === 64)
            return N(x + ";"), "";
          break;
        case 2:
          if (ae === 0)
            return x + "/*|*/";
          break;
        case 3:
          switch (ae) {
            case 102:
            case 112:
              return N(j[0] + x), "";
            default:
              return x + (de === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(A);
      }
    };
  }(function(N) {
    S.push(N);
  }), k = function(N, A, b) {
    return A === 0 && zn.indexOf(b[r.length]) !== -1 || b.match(o) ? N : "." + t;
  };
  function P(N, A, b, x) {
    x === void 0 && (x = "&");
    var j = N.replace(Fn, ""), R = A && b ? b + " " + A + " { " + j + " }" : j;
    return t = x, r = A, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), v(b || !A ? "" : A, R);
  }
  return v.use([].concat(m, [function(N, A, b) {
    N === 2 && b.length && b[0].lastIndexOf(r) > 0 && (b[0] = b[0].replace(n, k));
  }, T, function(N) {
    if (N === -2) {
      var A = S;
      return S = [], A;
    }
  }])), P.hash = m.length ? m.reduce(function(N, A) {
    return A.name || Ue(15), Ne(N, A.name);
  }, 5381).toString() : "", P;
}
var wr = he.createContext();
wr.Consumer;
var Er = he.createContext(), Yn = (Er.Consumer, new ot()), xt = Ln();
function xr() {
  return st(wr) || Yn;
}
function _r() {
  return st(Er) || xt;
}
var Un = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = xt);
      var c = n.name + i.hash;
      o.hasNameForId(n.id, c) || o.insertRules(n.id, c, i(n.rules, c, "@keyframes"));
    }, this.toString = function() {
      return Ue(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = xt), this.name + t.hash;
  }, e;
}(), Bn = /([A-Z])/, Hn = /([A-Z])/g, Wn = /^ms-/, Gn = function(e) {
  return "-" + e.toLowerCase();
};
function ar(e) {
  return Bn.test(e) ? e.replace(Hn, Gn).replace(Wn, "-ms-") : e;
}
var or = function(e) {
  return e == null || e === !1 || e === "";
};
function De(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], c = 0, u = e.length; c < u; c += 1)
      (o = De(e[c], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (or(e))
    return "";
  if ($t(e))
    return "." + e.styledComponentId;
  if (Ve(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t)
      return e;
    var l = e(t);
    return process.env.NODE_ENV !== "production" && qe.isElement(l) && console.warn(wt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), De(l, t, r, n);
  }
  var m;
  return e instanceof Un ? r ? (e.inject(r, n), e.getName(n)) : e : St(e) ? function v(S, T) {
    var k, P, N = [];
    for (var A in S)
      S.hasOwnProperty(A) && !or(S[A]) && (Array.isArray(S[A]) && S[A].isCss || Ve(S[A]) ? N.push(ar(A) + ":", S[A], ";") : St(S[A]) ? N.push.apply(N, v(S[A], A)) : N.push(ar(A) + ": " + (k = A, (P = S[A]) == null || typeof P == "boolean" || P === "" ? "" : typeof P != "number" || P === 0 || k in an || k.startsWith("--") ? String(P).trim() : P + "px") + ";"));
    return T ? [T + " {"].concat(N, ["}"]) : N;
  }(e) : e.toString();
}
var ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Cr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Ve(e) || St(e) ? ir(De(tr(nt, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ir(De(tr(e, r)));
}
var sr = /invalid hook call/i, Qe = /* @__PURE__ */ new Set(), Rr = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (sr.test(i))
          o = !1, Qe.delete(r);
        else {
          for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++)
            u[l - 1] = arguments[l];
          n.apply(void 0, [i].concat(u));
        }
      }, hr(), o && !Qe.has(r) && (console.warn(r), Qe.add(r));
    } catch (i) {
      sr.test(i.message) && Qe.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Pr = function(e, t, r) {
  return r === void 0 && (r = ke), e.theme !== r.theme && e.theme || t || r.theme;
}, qn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vn = /(^-|-$)/g;
function ht(e) {
  return e.replace(qn, "-").replace(Vn, "");
}
var Tr = function(e) {
  return Et(br(e) >>> 0);
};
function et(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var _t = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Xn = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Kn(e, t, r) {
  var n = e[r];
  _t(t) && _t(n) ? Ar(n, t) : e[r] = t;
}
function Ar(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var c = i[o];
    if (_t(c))
      for (var u in c)
        Xn(u) && Kn(e, c[u], u);
  }
  return e;
}
var jt = he.createContext();
jt.Consumer;
var mt = {};
function kr(e, t, r) {
  var n = $t(e), o = !et(e), i = t.attrs, c = i === void 0 ? nt : i, u = t.componentId, l = u === void 0 ? function(x, j) {
    var R = typeof x != "string" ? "sc" : ht(x);
    mt[R] = (mt[R] || 0) + 1;
    var p = R + "-" + Tr("5.3.11" + R + mt[R]);
    return j ? j + "-" + p : p;
  }(t.displayName, t.parentComponentId) : u, m = t.displayName, v = m === void 0 ? function(x) {
    return et(x) ? "styled." + x : "Styled(" + wt(x) + ")";
  }(e) : m, S = t.displayName && t.componentId ? ht(t.displayName) + "-" + t.componentId : t.componentId || l, T = n && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, k = t.shouldForwardProp;
  n && e.shouldForwardProp && (k = t.shouldForwardProp ? function(x, j, R) {
    return e.shouldForwardProp(x, j, R) && t.shouldForwardProp(x, j, R);
  } : e.shouldForwardProp);
  var P, N = new Mn(r, S, n ? e.componentStyle : void 0), A = N.isStatic && c.length === 0, b = function(x, j) {
    return function(R, p, ee, fe) {
      var ae = R.attrs, ce = R.componentStyle, de = R.defaultProps, me = R.foldedComponentIds, te = R.shouldForwardProp, y = R.styledComponentId, K = R.target, Z = function(O, s, F) {
        O === void 0 && (O = ke);
        var h = _e({}, s, { theme: O }), B = {};
        return F.forEach(function(M) {
          var g, f, G, J = M;
          for (g in Ve(J) && (J = J(h)), J)
            h[g] = B[g] = g === "className" ? (f = B[g], G = J[g], f && G ? f + " " + G : f || G) : J[g];
        }), [h, B];
      }(Pr(p, st(jt), de) || ke, p, ae), ve = Z[0], ue = Z[1], oe = function(O, s, F, h) {
        var B = xr(), M = _r(), g = s ? O.generateAndInjectStyles(ke, B, M) : O.generateAndInjectStyles(F, B, M);
        return process.env.NODE_ENV !== "production" && !s && h && h(g), g;
      }(ce, fe, ve, process.env.NODE_ENV !== "production" ? R.warnTooManyClasses : void 0), be = ee, ge = ue.$as || p.$as || ue.as || p.as || K, Se = et(ge), C = ue !== p ? _e({}, p, {}, ue) : p, E = {};
      for (var _ in C)
        _[0] !== "$" && _ !== "as" && (_ === "forwardedAs" ? E.as = C[_] : (te ? te(_, Xt, ge) : !Se || Xt(_)) && (E[_] = C[_]));
      return p.style && ue.style !== p.style && (E.style = _e({}, p.style, {}, ue.style)), E.className = Array.prototype.concat(me, y, oe !== y ? oe : null, p.className, ue.className).filter(Boolean).join(" "), E.ref = be, Qr(ge, E);
    }(P, x, j, A);
  };
  return b.displayName = v, (P = he.forwardRef(b)).attrs = T, P.componentStyle = N, P.displayName = v, P.shouldForwardProp = k, P.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : nt, P.styledComponentId = S, P.target = n ? e.target : e, P.withComponent = function(x) {
    var j = t.componentId, R = function(ee, fe) {
      if (ee == null)
        return {};
      var ae, ce, de = {}, me = Object.keys(ee);
      for (ce = 0; ce < me.length; ce++)
        ae = me[ce], fe.indexOf(ae) >= 0 || (de[ae] = ee[ae]);
      return de;
    }(t, ["componentId"]), p = j && j + "-" + (et(x) ? x : ht(wt(x)));
    return kr(x, _e({}, R, { attrs: T, componentId: p }), r);
  }, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? Ar({}, e.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (Rr(v, S), P.warnTooManyClasses = function(x, j) {
    var R = {}, p = !1;
    return function(ee) {
      if (!p && (R[ee] = !0, Object.keys(R).length >= 200)) {
        var fe = j ? ' with the id of "' + j + '"' : "";
        console.warn("Over 200 classes were generated for component " + x + fe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, R = {};
      }
    };
  }(v, S)), Object.defineProperty(P, "toString", { value: function() {
    return "." + P.styledComponentId;
  } }), o && yn(P, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), P;
}
var Ct = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = ke), !qe.isValidElementType(n))
      return Ue(1, String(n));
    var i = function() {
      return r(n, o, Cr.apply(void 0, arguments));
    };
    return i.withConfig = function(c) {
      return t(r, n, _e({}, o, {}, c));
    }, i.attrs = function(c) {
      return t(r, n, _e({}, o, { attrs: Array.prototype.concat(o.attrs, c).filter(Boolean) }));
    }, i;
  }(kr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ct[e] = Ct(e);
});
var Zn = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Sr(r), ot.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, o, i) {
    var c = i(De(this.rules, n, o, i).join(""), ""), u = this.componentId + r;
    o.insertRules(u, u, c);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, o, i) {
    r > 2 && ot.registerId(this.componentId + r), this.removeStyles(r, o), this.createStyles(r, n, o, i);
  }, e;
}();
function Jn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = Cr.apply(void 0, [e].concat(r)), i = "sc-global-" + Tr(JSON.stringify(o)), c = new Zn(o, i);
  function u(m) {
    var v = xr(), S = _r(), T = st(jt), k = hr(v.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && he.Children.count(m.children) && console.warn("The global style component " + i + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(P) {
      return typeof P == "string" && P.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), v.server && l(k, m, v, T, S), Jr(function() {
      if (!v.server)
        return l(k, m, v, T, S), function() {
          return c.removeStyles(k, v);
        };
    }, [k, m, v, T, S]), null;
  }
  function l(m, v, S, T, k) {
    if (c.isStatic)
      c.renderStyles(m, Sn, S, k);
    else {
      var P = _e({}, v, { theme: Pr(v, T, u.defaultProps) });
      c.renderStyles(m, P, S, k);
    }
  }
  return process.env.NODE_ENV !== "production" && Rr(i), he.memo(u);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ie = Ct, Qn = `
  html {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    #root, main {
      flex: 1;
    }
  }
`, ea = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body,
  button {
    line-height: 1;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    font-family: inherit;
    color: inherit;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  word-wrap: break-word;
  ${Qn}
`;
Jn`
  ${ea}

  html {
    font-size: 16px;
    font-family: 'Source Sans Pro', 'Nunito Sans', sans-serif;
    color: #fff;
  }
`;
const We = {
  SOURCE_SANS_PRO: "Source Sans Pro",
  VOLTAIRE: "Voltaire",
  UBUNTU: "Ubuntu"
};
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xe.apply(this, arguments);
}
function ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ke(e, t) {
  return Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ke(e, t);
}
function ra(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ke(e, t);
}
function Rt(e) {
  return Rt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rt(e);
}
function na(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function aa() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rt(e, t, r) {
  return aa() ? rt = Reflect.construct.bind() : rt = function(o, i, c) {
    var u = [null];
    u.push.apply(u, i);
    var l = Function.bind.apply(o, u), m = new l();
    return c && Ke(m, c.prototype), m;
  }, rt.apply(null, arguments);
}
function Pt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Pt = function(n) {
    if (n === null || !na(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return rt(n, arguments, Rt(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ke(o, n);
  }, Pt(e);
}
var oa = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function ia() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], i;
  for (i = 1; i < t.length; i += 1)
    o.push(t[i]);
  return o.forEach(function(c) {
    n = n.replace(/%[a-z]/, c);
  }), n;
}
var Ce = /* @__PURE__ */ function(e) {
  ra(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
        i[c - 1] = arguments[c];
      n = e.call(this, ia.apply(void 0, [oa[r]].concat(i))) || this;
    }
    return ta(n);
  }
  return t;
}(/* @__PURE__ */ Pt(Error));
function gt(e) {
  return Math.round(e * 255);
}
function sa(e, t, r) {
  return gt(e) + "," + gt(t) + "," + gt(r);
}
function Ze(e, t, r, n) {
  if (n === void 0 && (n = sa), t === 0)
    return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * t, c = i * (1 - Math.abs(o % 2 - 1)), u = 0, l = 0, m = 0;
  o >= 0 && o < 1 ? (u = i, l = c) : o >= 1 && o < 2 ? (u = c, l = i) : o >= 2 && o < 3 ? (l = i, m = c) : o >= 3 && o < 4 ? (l = c, m = i) : o >= 4 && o < 5 ? (u = c, m = i) : o >= 5 && o < 6 && (u = i, m = c);
  var v = r - i / 2, S = u + v, T = l + v, k = m + v;
  return n(S, T, k);
}
var cr = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function ca(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return cr[t] ? "#" + cr[t] : e;
}
var ua = /^#[a-fA-F0-9]{6}$/, la = /^#[a-fA-F0-9]{8}$/, fa = /^#[a-fA-F0-9]{3}$/, da = /^#[a-fA-F0-9]{4}$/, vt = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, pa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, ha = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, ma = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Or(e) {
  if (typeof e != "string")
    throw new Ce(3);
  var t = ca(e);
  if (t.match(ua))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(la)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(fa))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(da)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var o = vt.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = pa.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var c = ha.exec(t);
  if (c) {
    var u = parseInt("" + c[1], 10), l = parseInt("" + c[2], 10) / 100, m = parseInt("" + c[3], 10) / 100, v = "rgb(" + Ze(u, l, m) + ")", S = vt.exec(v);
    if (!S)
      throw new Ce(4, t, v);
    return {
      red: parseInt("" + S[1], 10),
      green: parseInt("" + S[2], 10),
      blue: parseInt("" + S[3], 10)
    };
  }
  var T = ma.exec(t.substring(0, 50));
  if (T) {
    var k = parseInt("" + T[1], 10), P = parseInt("" + T[2], 10) / 100, N = parseInt("" + T[3], 10) / 100, A = "rgb(" + Ze(k, P, N) + ")", b = vt.exec(A);
    if (!b)
      throw new Ce(4, t, A);
    return {
      red: parseInt("" + b[1], 10),
      green: parseInt("" + b[2], 10),
      blue: parseInt("" + b[3], 10),
      alpha: parseFloat("" + T[4]) > 1 ? parseFloat("" + T[4]) / 100 : parseFloat("" + T[4])
    };
  }
  throw new Ce(5);
}
function ga(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, o = Math.max(t, r, n), i = Math.min(t, r, n), c = (o + i) / 2;
  if (o === i)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: c,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: c
    };
  var u, l = o - i, m = c > 0.5 ? l / (2 - o - i) : l / (o + i);
  switch (o) {
    case t:
      u = (r - n) / l + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / l + 2;
      break;
    default:
      u = (t - r) / l + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
    saturation: m,
    lightness: c,
    alpha: e.alpha
  } : {
    hue: u,
    saturation: m,
    lightness: c
  };
}
function Dt(e) {
  return ga(Or(e));
}
var va = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, Tt = va;
function $e(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function yt(e) {
  return $e(Math.round(e * 255));
}
function ya(e, t, r) {
  return Tt("#" + yt(e) + yt(t) + yt(r));
}
function it(e, t, r) {
  return Ze(e, t, r, ya);
}
function ba(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return it(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return it(e.hue, e.saturation, e.lightness);
  throw new Ce(1);
}
function Sa(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? it(e, t, r) : "rgba(" + Ze(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? it(e.hue, e.saturation, e.lightness) : "rgba(" + Ze(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Ce(2);
}
function At(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Tt("#" + $e(e) + $e(t) + $e(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Tt("#" + $e(e.red) + $e(e.green) + $e(e.blue));
  throw new Ce(6);
}
function wa(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = Or(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? At(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? At(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Ce(7);
}
var Ea = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, xa = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, _a = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, Ca = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
};
function Mt(e) {
  if (typeof e != "object")
    throw new Ce(8);
  if (xa(e))
    return wa(e);
  if (Ea(e))
    return At(e);
  if (Ca(e))
    return Sa(e);
  if (_a(e))
    return ba(e);
  throw new Ce(8);
}
function Ir(e, t, r) {
  return function() {
    var o = r.concat(Array.prototype.slice.call(arguments));
    return o.length >= t ? e.apply(this, o) : Ir(e, t, o);
  };
}
function $r(e) {
  return Ir(e, e.length, []);
}
function Nr(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Ra(e, t) {
  if (t === "transparent")
    return t;
  var r = Dt(t);
  return Mt(Xe({}, r, {
    lightness: Nr(0, 1, r.lightness - parseFloat(e))
  }));
}
var Pa = /* @__PURE__ */ $r(Ra), kt = Pa;
function Ta(e) {
  return e === "transparent" ? e : Mt(Xe({}, Dt(e), {
    saturation: 0
  }));
}
function Aa(e, t) {
  if (t === "transparent")
    return t;
  var r = Dt(t);
  return Mt(Xe({}, r, {
    lightness: Nr(0, 1, r.lightness + parseFloat(e))
  }));
}
var ka = /* @__PURE__ */ $r(Aa), ur = ka;
const Oa = {
  REGULAR: "regular",
  ROUNDED: "rounded"
}, Ja = Ie.button.attrs(({ disabled: e }) => ({
  "aria-disabled": e
}))`
  ${(e) => {
  const t = e.bgColor || je.primary, r = Ta(je.primary);
  return `
      font-family: ${`${e.variant || We.VOLTAIRE}, 'Nunito Sans', sans-serif`};
      ${e.variant === We.UBUNTU && "font-weight: bold;"}
      font-size: ${(e == null ? void 0 : e.variant) === We.UBUNTU ? "1.4em" : "1.75em"};
      background-color: ${e.disabled ? r : t};
      border-color: ${kt(
    0.2,
    e.disabled ? r : t
  )};
      border-style: solid;
      border-width: 0 0 3px;
      ${e.shape === Oa.ROUNDED && "border-radius: 3px"};
      cursor: ${e.disabled ? "not-allowed" : "pointer"};
      padding: ${(e == null ? void 0 : e.variant) === We.UBUNTU ? ".675em" : ".5em"} 1em;

      ${!e.disabled && `
          position: relative;
          top: 0;
          transition: background-color 150ms, top 50ms, border-color 50ms;

          &:hover {
            background-color: ${ur(0.05, t)};
          }
          &:active {
            top: 3px;
            border-color: ${ur(0.05, t)};
          }
        `}
    `;
}}
`, Qa = Ie.div`
  ${(e) => `
    margin: 0 auto;
    max-width: ${e.maxWidth};

    @media screen and (max-width: calc(${e.maxWidth} + ${mr.maxScrollbarWidth})) {
      max-width: none;
    }
  `}
`;
var Ae = {}, Ia = {
  get exports() {
    return Ae;
  },
  set exports(e) {
    Ae = e;
  }
}, Be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function $a() {
  if (lr)
    return Be;
  lr = 1;
  var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, l, m) {
    var v, S = {}, T = null, k = null;
    m !== void 0 && (T = "" + m), l.key !== void 0 && (T = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (v in l)
      n.call(l, v) && !i.hasOwnProperty(v) && (S[v] = l[v]);
    if (u && u.defaultProps)
      for (v in l = u.defaultProps, l)
        S[v] === void 0 && (S[v] = l[v]);
    return { $$typeof: t, type: u, key: T, ref: k, props: S, _owner: o.current };
  }
  return Be.Fragment = r, Be.jsx = c, Be.jsxs = c, Be;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function Na() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), P = Symbol.iterator, N = "@@iterator";
    function A(a) {
      if (a === null || typeof a != "object")
        return null;
      var d = P && a[P] || a[N];
      return typeof d == "function" ? d : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(a) {
      {
        for (var d = arguments.length, w = new Array(d > 1 ? d - 1 : 0), $ = 1; $ < d; $++)
          w[$ - 1] = arguments[$];
        j("error", a, w);
      }
    }
    function j(a, d, w) {
      {
        var $ = b.ReactDebugCurrentFrame, U = $.getStackAddendum();
        U !== "" && (d += "%s", w = w.concat([U]));
        var X = w.map(function(L) {
          return String(L);
        });
        X.unshift("Warning: " + d), Function.prototype.apply.call(console[a], console, X);
      }
    }
    var R = !1, p = !1, ee = !1, fe = !1, ae = !1, ce;
    ce = Symbol.for("react.module.reference");
    function de(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || ae || a === o || a === m || a === v || fe || a === k || R || p || ee || typeof a == "object" && a !== null && (a.$$typeof === T || a.$$typeof === S || a.$$typeof === c || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ce || a.getModuleId !== void 0));
    }
    function me(a, d, w) {
      var $ = a.displayName;
      if ($)
        return $;
      var U = d.displayName || d.name || "";
      return U !== "" ? w + "(" + U + ")" : w;
    }
    function te(a) {
      return a.displayName || "Context";
    }
    function y(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var d = a;
            return te(d) + ".Consumer";
          case c:
            var w = a;
            return te(w._context) + ".Provider";
          case l:
            return me(a, a.render, "ForwardRef");
          case S:
            var $ = a.displayName || null;
            return $ !== null ? $ : y(a.type) || "Memo";
          case T: {
            var U = a, X = U._payload, L = U._init;
            try {
              return y(L(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, Z = 0, ve, ue, oe, be, ge, Se, C;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function _() {
      {
        if (Z === 0) {
          ve = console.log, ue = console.info, oe = console.warn, be = console.error, ge = console.group, Se = console.groupCollapsed, C = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        Z++;
      }
    }
    function O() {
      {
        if (Z--, Z === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, a, {
              value: ve
            }),
            info: K({}, a, {
              value: ue
            }),
            warn: K({}, a, {
              value: oe
            }),
            error: K({}, a, {
              value: be
            }),
            group: K({}, a, {
              value: ge
            }),
            groupCollapsed: K({}, a, {
              value: Se
            }),
            groupEnd: K({}, a, {
              value: C
            })
          });
        }
        Z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var s = b.ReactCurrentDispatcher, F;
    function h(a, d, w) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (U) {
            var $ = U.stack.trim().match(/\n( *(at )?)/);
            F = $ && $[1] || "";
          }
        return `
` + F + a;
      }
    }
    var B = !1, M;
    {
      var g = typeof WeakMap == "function" ? WeakMap : Map;
      M = new g();
    }
    function f(a, d) {
      if (!a || B)
        return "";
      {
        var w = M.get(a);
        if (w !== void 0)
          return w;
      }
      var $;
      B = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = s.current, s.current = null, _();
      try {
        if (d) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (Te) {
              $ = Te;
            }
            Reflect.construct(a, [], L);
          } else {
            try {
              L.call();
            } catch (Te) {
              $ = Te;
            }
            a.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            $ = Te;
          }
          a();
        }
      } catch (Te) {
        if (Te && $ && typeof Te.stack == "string") {
          for (var z = Te.stack.split(`
`), pe = $.stack.split(`
`), ne = z.length - 1, se = pe.length - 1; ne >= 1 && se >= 0 && z[ne] !== pe[se]; )
            se--;
          for (; ne >= 1 && se >= 0; ne--, se--)
            if (z[ne] !== pe[se]) {
              if (ne !== 1 || se !== 1)
                do
                  if (ne--, se--, se < 0 || z[ne] !== pe[se]) {
                    var we = `
` + z[ne].replace(" at new ", " at ");
                    return a.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", a.displayName)), typeof a == "function" && M.set(a, we), we;
                  }
                while (ne >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        B = !1, s.current = X, O(), Error.prepareStackTrace = U;
      }
      var Le = a ? a.displayName || a.name : "", Gt = Le ? h(Le) : "";
      return typeof a == "function" && M.set(a, Gt), Gt;
    }
    function G(a, d, w) {
      return f(a, !1);
    }
    function J(a) {
      var d = a.prototype;
      return !!(d && d.isReactComponent);
    }
    function D(a, d, w) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return f(a, J(a));
      if (typeof a == "string")
        return h(a);
      switch (a) {
        case m:
          return h("Suspense");
        case v:
          return h("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return G(a.render);
          case S:
            return D(a.type, d, w);
          case T: {
            var $ = a, U = $._payload, X = $._init;
            try {
              return D(X(U), d, w);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Y = {}, ie = b.ReactDebugCurrentFrame;
    function Ee(a) {
      if (a) {
        var d = a._owner, w = D(a.type, a._source, d ? d.type : null);
        ie.setExtraStackFrame(w);
      } else
        ie.setExtraStackFrame(null);
    }
    function le(a, d, w, $, U) {
      {
        var X = Function.call.bind(re);
        for (var L in a)
          if (X(a, L)) {
            var z = void 0;
            try {
              if (typeof a[L] != "function") {
                var pe = Error(($ || "React class") + ": " + w + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              z = a[L](d, L, $, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              z = ne;
            }
            z && !(z instanceof Error) && (Ee(U), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", w, L, typeof z), Ee(null)), z instanceof Error && !(z.message in Y) && (Y[z.message] = !0, Ee(U), x("Failed %s type: %s", w, z.message), Ee(null));
          }
      }
    }
    var Me = Array.isArray;
    function Re(a) {
      return Me(a);
    }
    function ye(a) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, w = d && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return w;
      }
    }
    function I(a) {
      try {
        return Q(a), !1;
      } catch {
        return !0;
      }
    }
    function Q(a) {
      return "" + a;
    }
    function Fe(a) {
      if (I(a))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(a)), Q(a);
    }
    var Pe = b.ReactCurrentOwner, xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, zt, lt;
    lt = {};
    function Mr(a) {
      if (re.call(a, "ref")) {
        var d = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Fr(a) {
      if (re.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function zr(a, d) {
      if (typeof a.ref == "string" && Pe.current && d && Pe.current.stateNode !== d) {
        var w = y(Pe.current.type);
        lt[w] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(Pe.current.type), a.ref), lt[w] = !0);
      }
    }
    function Lr(a, d) {
      {
        var w = function() {
          Ft || (Ft = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        w.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Yr(a, d) {
      {
        var w = function() {
          zt || (zt = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        w.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Ur = function(a, d, w, $, U, X, L) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: d,
        ref: w,
        props: L,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Br(a, d, w, $, U) {
      {
        var X, L = {}, z = null, pe = null;
        w !== void 0 && (Fe(w), z = "" + w), Fr(d) && (Fe(d.key), z = "" + d.key), Mr(d) && (pe = d.ref, zr(d, U));
        for (X in d)
          re.call(d, X) && !xe.hasOwnProperty(X) && (L[X] = d[X]);
        if (a && a.defaultProps) {
          var ne = a.defaultProps;
          for (X in ne)
            L[X] === void 0 && (L[X] = ne[X]);
        }
        if (z || pe) {
          var se = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          z && Lr(L, se), pe && Yr(L, se);
        }
        return Ur(a, z, pe, U, $, Pe.current, L);
      }
    }
    var ft = b.ReactCurrentOwner, Lt = b.ReactDebugCurrentFrame;
    function ze(a) {
      if (a) {
        var d = a._owner, w = D(a.type, a._source, d ? d.type : null);
        Lt.setExtraStackFrame(w);
      } else
        Lt.setExtraStackFrame(null);
    }
    var dt;
    dt = !1;
    function pt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Yt() {
      {
        if (ft.current) {
          var a = y(ft.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Hr(a) {
      {
        if (a !== void 0) {
          var d = a.fileName.replace(/^.*[\\\/]/, ""), w = a.lineNumber;
          return `

Check your code at ` + d + ":" + w + ".";
        }
        return "";
      }
    }
    var Ut = {};
    function Wr(a) {
      {
        var d = Yt();
        if (!d) {
          var w = typeof a == "string" ? a : a.displayName || a.name;
          w && (d = `

Check the top-level render call using <` + w + ">.");
        }
        return d;
      }
    }
    function Bt(a, d) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var w = Wr(d);
        if (Ut[w])
          return;
        Ut[w] = !0;
        var $ = "";
        a && a._owner && a._owner !== ft.current && ($ = " It was passed a child from " + y(a._owner.type) + "."), ze(a), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, $), ze(null);
      }
    }
    function Ht(a, d) {
      {
        if (typeof a != "object")
          return;
        if (Re(a))
          for (var w = 0; w < a.length; w++) {
            var $ = a[w];
            pt($) && Bt($, d);
          }
        else if (pt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var U = A(a);
          if (typeof U == "function" && U !== a.entries)
            for (var X = U.call(a), L; !(L = X.next()).done; )
              pt(L.value) && Bt(L.value, d);
        }
      }
    }
    function Gr(a) {
      {
        var d = a.type;
        if (d == null || typeof d == "string")
          return;
        var w;
        if (typeof d == "function")
          w = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === S))
          w = d.propTypes;
        else
          return;
        if (w) {
          var $ = y(d);
          le(w, a.props, "prop", $, a);
        } else if (d.PropTypes !== void 0 && !dt) {
          dt = !0;
          var U = y(d);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qr(a) {
      {
        for (var d = Object.keys(a.props), w = 0; w < d.length; w++) {
          var $ = d[w];
          if ($ !== "children" && $ !== "key") {
            ze(a), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), ze(null);
            break;
          }
        }
        a.ref !== null && (ze(a), x("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    function Wt(a, d, w, $, U, X) {
      {
        var L = de(a);
        if (!L) {
          var z = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Hr(U);
          pe ? z += pe : z += Yt();
          var ne;
          a === null ? ne = "null" : Re(a) ? ne = "array" : a !== void 0 && a.$$typeof === t ? (ne = "<" + (y(a.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof a, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, z);
        }
        var se = Br(a, d, w, U, X);
        if (se == null)
          return se;
        if (L) {
          var we = d.children;
          if (we !== void 0)
            if ($)
              if (Re(we)) {
                for (var Le = 0; Le < we.length; Le++)
                  Ht(we[Le], a);
                Object.freeze && Object.freeze(we);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ht(we, a);
        }
        return a === n ? qr(se) : Gr(se), se;
      }
    }
    function Vr(a, d, w) {
      return Wt(a, d, w, !0);
    }
    function Xr(a, d, w) {
      return Wt(a, d, w, !1);
    }
    var Kr = Xr, Zr = Vr;
    He.Fragment = n, He.jsx = Kr, He.jsxs = Zr;
  }()), He;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $a() : e.exports = Na();
})(Ia);
const ja = (e) => !!(e.suit && e.rank);
var jr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, dr = he.createContext && he.createContext(jr), Oe = globalThis && globalThis.__assign || function() {
  return Oe = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Oe.apply(this, arguments);
}, Da = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Dr(e) {
  return e && e.map(function(t, r) {
    return he.createElement(t.tag, Oe({
      key: r
    }, t.attr), Dr(t.child));
  });
}
function ct(e) {
  return function(t) {
    return he.createElement(Ma, Oe({
      attr: Oe({}, e.attr)
    }, t), Dr(e.child));
  };
}
function Ma(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, i = e.title, c = Da(e, ["attr", "size", "title"]), u = o || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), he.createElement("svg", Oe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, c, {
      className: l,
      style: Oe(Oe({
        color: e.color || r.color
      }, r.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && he.createElement("title", null, i), e.children);
  };
  return dr !== void 0 ? he.createElement(dr.Consumer, null, function(r) {
    return t(r);
  }) : t(jr);
}
function Fa(e) {
  return ct({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" } }] })(e);
}
function za(e) {
  return ct({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z" } }] })(e);
}
function La(e) {
  return ct({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" } }] })(e);
}
function Ya(e) {
  return ct({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z" } }] })(e);
}
const ut = `
  font-size: 32px;
`, Ua = Ie(Fa)`
  ${ut}
  color: red;
`, Ba = Ie(La)`
  ${ut}
  color: red;
`, Ha = Ie(Ya)`
  ${ut}
  color: black;
`, Wa = Ie(za)`
  ${ut}
  color: black;
`, Ga = {
  hearts: "red",
  diamonds: "red",
  spades: "black",
  clubs: "black"
}, qa = {
  hearts: Ua,
  diamonds: Ba,
  spades: Ha,
  clubs: Wa
}, Va = `repeating-linear-gradient(
  -55deg,
  ${kt(0.2, je.primary)},
  ${kt(0.2, je.primary)} 20px,
  ${je.primary} 20px,
  ${je.primary} 40px
)`, pr = Ie.div`
  font-family: ${We.UBUNTU};
  font-size: 30px;
  font-weight: bold;
  color: ${({ suit: e }) => Ga[e]};
`, Xa = Ie.div`
  width: 120px;
  height: 200px;
  box-shadow: 0 1px 4px #5f5f63;
  border-radius: 15px;

  ${({ reversed: e }) => `
    background-color: ${e ? je.primary : "#e6e6e6"};

    ${e ? `background: ${Va}` : `
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      padding: 20px;
    `}
  `}
`, Ka = ({ suit: e }) => {
  const t = qa[e];
  return /* @__PURE__ */ Ae.jsx(t, {});
}, eo = (e) => {
  const t = !ja(e);
  return /* @__PURE__ */ Ae.jsx(Xa, { reversed: t, ...e, children: !t && /* @__PURE__ */ Ae.jsxs(Ae.Fragment, { children: [
    /* @__PURE__ */ Ae.jsx(pr, { suit: e.suit, children: e.rank }),
    /* @__PURE__ */ Ae.jsx(pr, { suit: e.suit, children: /* @__PURE__ */ Ae.jsx(Ka, { suit: e.suit }) })
  ] }) });
}, to = mr.maxScrollbarWidth;
export {
  Ja as Button,
  We as FONTS,
  Qa as PageContainer,
  eo as PokerCard,
  to as maxScrollbarWidth,
  ea as resetCSS
};

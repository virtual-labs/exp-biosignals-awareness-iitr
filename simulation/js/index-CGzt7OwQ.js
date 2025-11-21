(function () {
  const F = document.createElement("link").relList;
  if (F && F.supports && F.supports("modulepreload")) return;
  for (const G of document.querySelectorAll('link[rel="modulepreload"]')) m(G);
  new MutationObserver((G) => {
    for (const J of G)
      if (J.type === "childList")
        for (const dl of J.addedNodes)
          dl.tagName === "LINK" && dl.rel === "modulepreload" && m(dl);
  }).observe(document, { childList: !0, subtree: !0 });
  function Y(G) {
    const J = {};
    return (
      G.integrity && (J.integrity = G.integrity),
      G.referrerPolicy && (J.referrerPolicy = G.referrerPolicy),
      G.crossOrigin === "use-credentials"
        ? (J.credentials = "include")
        : G.crossOrigin === "anonymous"
        ? (J.credentials = "omit")
        : (J.credentials = "same-origin"),
      J
    );
  }
  function m(G) {
    if (G.ep) return;
    G.ep = !0;
    const J = Y(G);
    fetch(G.href, J);
  }
})();
var af = { exports: {} },
  Te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur;
function qh() {
  if (ur) return Te;
  ur = 1;
  var O = Symbol.for("react.transitional.element"),
    F = Symbol.for("react.fragment");
  function Y(m, G, J) {
    var dl = null;
    if (
      (J !== void 0 && (dl = "" + J),
      G.key !== void 0 && (dl = "" + G.key),
      "key" in G)
    ) {
      J = {};
      for (var zl in G) zl !== "key" && (J[zl] = G[zl]);
    } else J = G;
    return (
      (G = J.ref),
      { $$typeof: O, type: m, key: dl, ref: G !== void 0 ? G : null, props: J }
    );
  }
  return (Te.Fragment = F), (Te.jsx = Y), (Te.jsxs = Y), Te;
}
var er;
function Bh() {
  return er || ((er = 1), (af.exports = qh())), af.exports;
}
var b = Bh(),
  uf = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr;
function Yh() {
  if (nr) return X;
  nr = 1;
  var O = Symbol.for("react.transitional.element"),
    F = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    G = Symbol.for("react.profiler"),
    J = Symbol.for("react.consumer"),
    dl = Symbol.for("react.context"),
    zl = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    il = Symbol.iterator;
  function nl(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (il && s[il]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var jl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    rt = {};
  function Yl(s, A, M) {
    (this.props = s),
      (this.context = A),
      (this.refs = rt),
      (this.updater = M || jl);
  }
  (Yl.prototype.isReactComponent = {}),
    (Yl.prototype.setState = function (s, A) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, A, "setState");
    }),
    (Yl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function ya() {}
  ya.prototype = Yl.prototype;
  function Ot(s, A, M) {
    (this.props = s),
      (this.context = A),
      (this.refs = rt),
      (this.updater = M || jl);
  }
  var Dl = (Ot.prototype = new ya());
  (Dl.constructor = Ot), ql(Dl, Yl.prototype), (Dl.isPureReactComponent = !0);
  var ht = Array.isArray,
    w = { H: null, A: null, T: null, S: null, V: null },
    Vl = Object.prototype.hasOwnProperty;
  function Ll(s, A, M, z, x, W) {
    return (
      (M = W.ref),
      { $$typeof: O, type: s, key: A, ref: M !== void 0 ? M : null, props: W }
    );
  }
  function Kl(s, A) {
    return Ll(s.type, A, void 0, void 0, void 0, s.props);
  }
  function St(s) {
    return typeof s == "object" && s !== null && s.$$typeof === O;
  }
  function Ga(s) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (M) {
        return A[M];
      })
    );
  }
  var Mt = /\/+/g;
  function Ul(s, A) {
    return typeof s == "object" && s !== null && s.key != null
      ? Ga("" + s.key)
      : A.toString(36);
  }
  function ma() {}
  function ga(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(ma, ma)
            : ((s.status = "pending"),
              s.then(
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = A));
                },
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = A));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Nl(s, A, M, z, x) {
    var W = typeof s;
    (W === "undefined" || W === "boolean") && (s = null);
    var C = !1;
    if (s === null) C = !0;
    else
      switch (W) {
        case "bigint":
        case "string":
        case "number":
          C = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case O:
            case F:
              C = !0;
              break;
            case R:
              return (C = s._init), Nl(C(s._payload), A, M, z, x);
          }
      }
    if (C)
      return (
        (x = x(s)),
        (C = z === "" ? "." + Ul(s, 0) : z),
        ht(x)
          ? ((M = ""),
            C != null && (M = C.replace(Mt, "$&/") + "/"),
            Nl(x, A, M, "", function (Lt) {
              return Lt;
            }))
          : x != null &&
            (St(x) &&
              (x = Kl(
                x,
                M +
                  (x.key == null || (s && s.key === x.key)
                    ? ""
                    : ("" + x.key).replace(Mt, "$&/") + "/") +
                  C
              )),
            A.push(x)),
        1
      );
    C = 0;
    var Jl = z === "" ? "." : z + ":";
    if (ht(s))
      for (var fl = 0; fl < s.length; fl++)
        (z = s[fl]), (W = Jl + Ul(z, fl)), (C += Nl(z, A, M, W, x));
    else if (((fl = nl(s)), typeof fl == "function"))
      for (s = fl.call(s), fl = 0; !(z = s.next()).done; )
        (z = z.value), (W = Jl + Ul(z, fl++)), (C += Nl(z, A, M, W, x));
    else if (W === "object") {
      if (typeof s.then == "function") return Nl(ga(s), A, M, z, x);
      throw (
        ((A = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return C;
  }
  function S(s, A, M) {
    if (s == null) return s;
    var z = [],
      x = 0;
    return (
      Nl(s, z, "", "", function (W) {
        return A.call(M, W, x++);
      }),
      z
    );
  }
  function p(s) {
    if (s._status === -1) {
      var A = s._result;
      (A = A()),
        A.then(
          function (M) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = M));
          },
          function (M) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = M));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = A));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var q =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var A = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(A)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function ul() {}
  return (
    (X.Children = {
      map: S,
      forEach: function (s, A, M) {
        S(
          s,
          function () {
            A.apply(this, arguments);
          },
          M
        );
      },
      count: function (s) {
        var A = 0;
        return (
          S(s, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (s) {
        return (
          S(s, function (A) {
            return A;
          }) || []
        );
      },
      only: function (s) {
        if (!St(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (X.Component = Yl),
    (X.Fragment = Y),
    (X.Profiler = G),
    (X.PureComponent = Ot),
    (X.StrictMode = m),
    (X.Suspense = N),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return w.H.useMemoCache(s);
      },
    }),
    (X.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (X.cloneElement = function (s, A, M) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var z = ql({}, s.props),
        x = s.key,
        W = void 0;
      if (A != null)
        for (C in (A.ref !== void 0 && (W = void 0),
        A.key !== void 0 && (x = "" + A.key),
        A))
          !Vl.call(A, C) ||
            C === "key" ||
            C === "__self" ||
            C === "__source" ||
            (C === "ref" && A.ref === void 0) ||
            (z[C] = A[C]);
      var C = arguments.length - 2;
      if (C === 1) z.children = M;
      else if (1 < C) {
        for (var Jl = Array(C), fl = 0; fl < C; fl++)
          Jl[fl] = arguments[fl + 2];
        z.children = Jl;
      }
      return Ll(s.type, x, void 0, void 0, W, z);
    }),
    (X.createContext = function (s) {
      return (
        (s = {
          $$typeof: dl,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: J, _context: s }),
        s
      );
    }),
    (X.createElement = function (s, A, M) {
      var z,
        x = {},
        W = null;
      if (A != null)
        for (z in (A.key !== void 0 && (W = "" + A.key), A))
          Vl.call(A, z) &&
            z !== "key" &&
            z !== "__self" &&
            z !== "__source" &&
            (x[z] = A[z]);
      var C = arguments.length - 2;
      if (C === 1) x.children = M;
      else if (1 < C) {
        for (var Jl = Array(C), fl = 0; fl < C; fl++)
          Jl[fl] = arguments[fl + 2];
        x.children = Jl;
      }
      if (s && s.defaultProps)
        for (z in ((C = s.defaultProps), C)) x[z] === void 0 && (x[z] = C[z]);
      return Ll(s, W, void 0, void 0, null, x);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (s) {
      return { $$typeof: zl, render: s };
    }),
    (X.isValidElement = St),
    (X.lazy = function (s) {
      return { $$typeof: R, _payload: { _status: -1, _result: s }, _init: p };
    }),
    (X.memo = function (s, A) {
      return { $$typeof: E, type: s, compare: A === void 0 ? null : A };
    }),
    (X.startTransition = function (s) {
      var A = w.T,
        M = {};
      w.T = M;
      try {
        var z = s(),
          x = w.S;
        x !== null && x(M, z),
          typeof z == "object" &&
            z !== null &&
            typeof z.then == "function" &&
            z.then(ul, q);
      } catch (W) {
        q(W);
      } finally {
        w.T = A;
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (X.use = function (s) {
      return w.H.use(s);
    }),
    (X.useActionState = function (s, A, M) {
      return w.H.useActionState(s, A, M);
    }),
    (X.useCallback = function (s, A) {
      return w.H.useCallback(s, A);
    }),
    (X.useContext = function (s) {
      return w.H.useContext(s);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (s, A) {
      return w.H.useDeferredValue(s, A);
    }),
    (X.useEffect = function (s, A, M) {
      var z = w.H;
      if (typeof M == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return z.useEffect(s, A);
    }),
    (X.useId = function () {
      return w.H.useId();
    }),
    (X.useImperativeHandle = function (s, A, M) {
      return w.H.useImperativeHandle(s, A, M);
    }),
    (X.useInsertionEffect = function (s, A) {
      return w.H.useInsertionEffect(s, A);
    }),
    (X.useLayoutEffect = function (s, A) {
      return w.H.useLayoutEffect(s, A);
    }),
    (X.useMemo = function (s, A) {
      return w.H.useMemo(s, A);
    }),
    (X.useOptimistic = function (s, A) {
      return w.H.useOptimistic(s, A);
    }),
    (X.useReducer = function (s, A, M) {
      return w.H.useReducer(s, A, M);
    }),
    (X.useRef = function (s) {
      return w.H.useRef(s);
    }),
    (X.useState = function (s) {
      return w.H.useState(s);
    }),
    (X.useSyncExternalStore = function (s, A, M) {
      return w.H.useSyncExternalStore(s, A, M);
    }),
    (X.useTransition = function () {
      return w.H.useTransition();
    }),
    (X.version = "19.1.1"),
    X
  );
}
var cr;
function sf() {
  return cr || ((cr = 1), (uf.exports = Yh())), uf.exports;
}
var Ae = sf(),
  ef = { exports: {} },
  Ee = {},
  nf = { exports: {} },
  cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ir;
function Gh() {
  return (
    ir ||
      ((ir = 1),
      (function (O) {
        function F(S, p) {
          var q = S.length;
          S.push(p);
          l: for (; 0 < q; ) {
            var ul = (q - 1) >>> 1,
              s = S[ul];
            if (0 < G(s, p)) (S[ul] = p), (S[q] = s), (q = ul);
            else break l;
          }
        }
        function Y(S) {
          return S.length === 0 ? null : S[0];
        }
        function m(S) {
          if (S.length === 0) return null;
          var p = S[0],
            q = S.pop();
          if (q !== p) {
            S[0] = q;
            l: for (var ul = 0, s = S.length, A = s >>> 1; ul < A; ) {
              var M = 2 * (ul + 1) - 1,
                z = S[M],
                x = M + 1,
                W = S[x];
              if (0 > G(z, q))
                x < s && 0 > G(W, z)
                  ? ((S[ul] = W), (S[x] = q), (ul = x))
                  : ((S[ul] = z), (S[M] = q), (ul = M));
              else if (x < s && 0 > G(W, q)) (S[ul] = W), (S[x] = q), (ul = x);
              else break l;
            }
          }
          return p;
        }
        function G(S, p) {
          var q = S.sortIndex - p.sortIndex;
          return q !== 0 ? q : S.id - p.id;
        }
        if (
          ((O.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var J = performance;
          O.unstable_now = function () {
            return J.now();
          };
        } else {
          var dl = Date,
            zl = dl.now();
          O.unstable_now = function () {
            return dl.now() - zl;
          };
        }
        var N = [],
          E = [],
          R = 1,
          il = null,
          nl = 3,
          jl = !1,
          ql = !1,
          rt = !1,
          Yl = !1,
          ya = typeof setTimeout == "function" ? setTimeout : null,
          Ot = typeof clearTimeout == "function" ? clearTimeout : null,
          Dl = typeof setImmediate < "u" ? setImmediate : null;
        function ht(S) {
          for (var p = Y(E); p !== null; ) {
            if (p.callback === null) m(E);
            else if (p.startTime <= S)
              m(E), (p.sortIndex = p.expirationTime), F(N, p);
            else break;
            p = Y(E);
          }
        }
        function w(S) {
          if (((rt = !1), ht(S), !ql))
            if (Y(N) !== null) (ql = !0), Vl || ((Vl = !0), Ul());
            else {
              var p = Y(E);
              p !== null && Nl(w, p.startTime - S);
            }
        }
        var Vl = !1,
          Ll = -1,
          Kl = 5,
          St = -1;
        function Ga() {
          return Yl ? !0 : !(O.unstable_now() - St < Kl);
        }
        function Mt() {
          if (((Yl = !1), Vl)) {
            var S = O.unstable_now();
            St = S;
            var p = !0;
            try {
              l: {
                (ql = !1), rt && ((rt = !1), Ot(Ll), (Ll = -1)), (jl = !0);
                var q = nl;
                try {
                  t: {
                    for (
                      ht(S), il = Y(N);
                      il !== null && !(il.expirationTime > S && Ga());

                    ) {
                      var ul = il.callback;
                      if (typeof ul == "function") {
                        (il.callback = null), (nl = il.priorityLevel);
                        var s = ul(il.expirationTime <= S);
                        if (((S = O.unstable_now()), typeof s == "function")) {
                          (il.callback = s), ht(S), (p = !0);
                          break t;
                        }
                        il === Y(N) && m(N), ht(S);
                      } else m(N);
                      il = Y(N);
                    }
                    if (il !== null) p = !0;
                    else {
                      var A = Y(E);
                      A !== null && Nl(w, A.startTime - S), (p = !1);
                    }
                  }
                  break l;
                } finally {
                  (il = null), (nl = q), (jl = !1);
                }
                p = void 0;
              }
            } finally {
              p ? Ul() : (Vl = !1);
            }
          }
        }
        var Ul;
        if (typeof Dl == "function")
          Ul = function () {
            Dl(Mt);
          };
        else if (typeof MessageChannel < "u") {
          var ma = new MessageChannel(),
            ga = ma.port2;
          (ma.port1.onmessage = Mt),
            (Ul = function () {
              ga.postMessage(null);
            });
        } else
          Ul = function () {
            ya(Mt, 0);
          };
        function Nl(S, p) {
          Ll = ya(function () {
            S(O.unstable_now());
          }, p);
        }
        (O.unstable_IdlePriority = 5),
          (O.unstable_ImmediatePriority = 1),
          (O.unstable_LowPriority = 4),
          (O.unstable_NormalPriority = 3),
          (O.unstable_Profiling = null),
          (O.unstable_UserBlockingPriority = 2),
          (O.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (O.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Kl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (O.unstable_getCurrentPriorityLevel = function () {
            return nl;
          }),
          (O.unstable_next = function (S) {
            switch (nl) {
              case 1:
              case 2:
              case 3:
                var p = 3;
                break;
              default:
                p = nl;
            }
            var q = nl;
            nl = p;
            try {
              return S();
            } finally {
              nl = q;
            }
          }),
          (O.unstable_requestPaint = function () {
            Yl = !0;
          }),
          (O.unstable_runWithPriority = function (S, p) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var q = nl;
            nl = S;
            try {
              return p();
            } finally {
              nl = q;
            }
          }),
          (O.unstable_scheduleCallback = function (S, p, q) {
            var ul = O.unstable_now();
            switch (
              (typeof q == "object" && q !== null
                ? ((q = q.delay),
                  (q = typeof q == "number" && 0 < q ? ul + q : ul))
                : (q = ul),
              S)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = q + s),
              (S = {
                id: R++,
                callback: p,
                priorityLevel: S,
                startTime: q,
                expirationTime: s,
                sortIndex: -1,
              }),
              q > ul
                ? ((S.sortIndex = q),
                  F(E, S),
                  Y(N) === null &&
                    S === Y(E) &&
                    (rt ? (Ot(Ll), (Ll = -1)) : (rt = !0), Nl(w, q - ul)))
                : ((S.sortIndex = s),
                  F(N, S),
                  ql || jl || ((ql = !0), Vl || ((Vl = !0), Ul()))),
              S
            );
          }),
          (O.unstable_shouldYield = Ga),
          (O.unstable_wrapCallback = function (S) {
            var p = nl;
            return function () {
              var q = nl;
              nl = p;
              try {
                return S.apply(this, arguments);
              } finally {
                nl = q;
              }
            };
          });
      })(cf)),
    cf
  );
}
var fr;
function Ch() {
  return fr || ((fr = 1), (nf.exports = Gh())), nf.exports;
}
var ff = { exports: {} },
  Hl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr;
function Xh() {
  if (sr) return Hl;
  sr = 1;
  var O = sf();
  function F(N) {
    var E = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        E += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      N +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Y() {}
  var m = {
      d: {
        f: Y,
        r: function () {
          throw Error(F(522));
        },
        D: Y,
        C: Y,
        L: Y,
        m: Y,
        X: Y,
        S: Y,
        M: Y,
      },
      p: 0,
      findDOMNode: null,
    },
    G = Symbol.for("react.portal");
  function J(N, E, R) {
    var il =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: G,
      key: il == null ? null : "" + il,
      children: N,
      containerInfo: E,
      implementation: R,
    };
  }
  var dl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function zl(N, E) {
    if (N === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Hl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Hl.createPortal = function (N, E) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(F(299));
      return J(N, E, null, R);
    }),
    (Hl.flushSync = function (N) {
      var E = dl.T,
        R = m.p;
      try {
        if (((dl.T = null), (m.p = 2), N)) return N();
      } finally {
        (dl.T = E), (m.p = R), m.d.f();
      }
    }),
    (Hl.preconnect = function (N, E) {
      typeof N == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        m.d.C(N, E));
    }),
    (Hl.prefetchDNS = function (N) {
      typeof N == "string" && m.d.D(N);
    }),
    (Hl.preinit = function (N, E) {
      if (typeof N == "string" && E && typeof E.as == "string") {
        var R = E.as,
          il = zl(R, E.crossOrigin),
          nl = typeof E.integrity == "string" ? E.integrity : void 0,
          jl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        R === "style"
          ? m.d.S(N, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: il,
              integrity: nl,
              fetchPriority: jl,
            })
          : R === "script" &&
            m.d.X(N, {
              crossOrigin: il,
              integrity: nl,
              fetchPriority: jl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Hl.preinitModule = function (N, E) {
      if (typeof N == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var R = zl(E.as, E.crossOrigin);
            m.d.M(N, {
              crossOrigin: R,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && m.d.M(N);
    }),
    (Hl.preload = function (N, E) {
      if (
        typeof N == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var R = E.as,
          il = zl(R, E.crossOrigin);
        m.d.L(N, R, {
          crossOrigin: il,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Hl.preloadModule = function (N, E) {
      if (typeof N == "string")
        if (E) {
          var R = zl(E.as, E.crossOrigin);
          m.d.m(N, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: R,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else m.d.m(N);
    }),
    (Hl.requestFormReset = function (N) {
      m.d.r(N);
    }),
    (Hl.unstable_batchedUpdates = function (N, E) {
      return N(E);
    }),
    (Hl.useFormState = function (N, E, R) {
      return dl.H.useFormState(N, E, R);
    }),
    (Hl.useFormStatus = function () {
      return dl.H.useHostTransitionStatus();
    }),
    (Hl.version = "19.1.1"),
    Hl
  );
}
var dr;
function Qh() {
  if (dr) return ff.exports;
  dr = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (F) {
        console.error(F);
      }
  }
  return O(), (ff.exports = Xh()), ff.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var or;
function Zh() {
  if (or) return Ee;
  or = 1;
  var O = Ch(),
    F = sf(),
    Y = Qh();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function G(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function J(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function zl(l) {
    if (J(l) !== l) throw Error(m(188));
  }
  function N(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = J(l)), t === null)) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return zl(e), l;
          if (n === u) return zl(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var c = !1, i = e.child; i; ) {
          if (i === a) {
            (c = !0), (a = e), (u = n);
            break;
          }
          if (i === u) {
            (c = !0), (u = e), (a = n);
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              (c = !0), (a = n), (u = e);
              break;
            }
            if (i === u) {
              (c = !0), (u = n), (a = e);
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(m(189));
        }
      }
      if (a.alternate !== u) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = E(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    il = Symbol.for("react.element"),
    nl = Symbol.for("react.transitional.element"),
    jl = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    rt = Symbol.for("react.strict_mode"),
    Yl = Symbol.for("react.profiler"),
    ya = Symbol.for("react.provider"),
    Ot = Symbol.for("react.consumer"),
    Dl = Symbol.for("react.context"),
    ht = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    Vl = Symbol.for("react.suspense_list"),
    Ll = Symbol.for("react.memo"),
    Kl = Symbol.for("react.lazy"),
    St = Symbol.for("react.activity"),
    Ga = Symbol.for("react.memo_cache_sentinel"),
    Mt = Symbol.iterator;
  function Ul(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Mt && l[Mt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ma = Symbol.for("react.client.reference");
  function ga(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ma ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case Yl:
        return "Profiler";
      case rt:
        return "StrictMode";
      case w:
        return "Suspense";
      case Vl:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Dl:
          return (l.displayName || "Context") + ".Provider";
        case Ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case ht:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Ll:
          return (
            (t = l.displayName || null), t !== null ? t : ga(l.type) || "Memo"
          );
        case Kl:
          (t = l._payload), (l = l._init);
          try {
            return ga(l(t));
          } catch {}
      }
    return null;
  }
  var Nl = Array.isArray,
    S = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    p = Y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    ul = [],
    s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || ((l.current = ul[s]), (ul[s] = null), s--);
  }
  function z(l, t) {
    s++, (ul[s] = l.current), (l.current = t);
  }
  var x = A(null),
    W = A(null),
    C = A(null),
    Jl = A(null);
  function fl(l, t) {
    switch ((z(C, t), z(W, l), z(x, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ro(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Ro(t)), (l = xo(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    M(x), z(x, l);
  }
  function Lt() {
    M(x), M(W), M(C);
  }
  function Qn(l) {
    l.memoizedState !== null && z(Jl, l);
    var t = x.current,
      a = xo(t, l.type);
    t !== a && (z(W, l), z(x, a));
  }
  function ze(l) {
    W.current === l && (M(x), M(W)),
      Jl.current === l && (M(Jl), (me._currentValue = q));
  }
  var Zn = Object.prototype.hasOwnProperty,
    Vn = O.unstable_scheduleCallback,
    Ln = O.unstable_cancelCallback,
    hr = O.unstable_shouldYield,
    vr = O.unstable_requestPaint,
    bt = O.unstable_now,
    yr = O.unstable_getCurrentPriorityLevel,
    df = O.unstable_ImmediatePriority,
    of = O.unstable_UserBlockingPriority,
    pe = O.unstable_NormalPriority,
    mr = O.unstable_LowPriority,
    rf = O.unstable_IdlePriority,
    gr = O.log,
    Sr = O.unstable_setDisableYieldValue,
    zu = null,
    wl = null;
  function Kt(l) {
    if (
      (typeof gr == "function" && Sr(l),
      wl && typeof wl.setStrictMode == "function")
    )
      try {
        wl.setStrictMode(zu, l);
      } catch {}
  }
  var Wl = Math.clz32 ? Math.clz32 : Tr,
    br = Math.log,
    _r = Math.LN2;
  function Tr(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((br(l) / _r) | 0)) | 0;
  }
  var Oe = 256,
    Me = 4194304;
  function Sa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function De(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return (
      i !== 0
        ? ((u = i & ~n),
          u !== 0
            ? (e = Sa(u))
            : ((c &= i),
              c !== 0
                ? (e = Sa(c))
                : a || ((a = i & ~l), a !== 0 && (e = Sa(a)))))
        : ((i = u & ~n),
          i !== 0
            ? (e = Sa(i))
            : c !== 0
            ? (e = Sa(c))
            : a || ((a = u & ~l), a !== 0 && (e = Sa(a)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : e
    );
  }
  function pu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Er(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hf() {
    var l = Oe;
    return (Oe <<= 1), (Oe & 4194048) === 0 && (Oe = 256), l;
  }
  function vf() {
    var l = Me;
    return (Me <<= 1), (Me & 62914560) === 0 && (Me = 4194304), l;
  }
  function Kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Ou(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Ar(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var i = l.entanglements,
      f = l.expirationTimes,
      h = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var g = 31 - Wl(a),
        T = 1 << g;
      (i[g] = 0), (f[g] = -1);
      var v = h[g];
      if (v !== null)
        for (h[g] = null, g = 0; g < v.length; g++) {
          var y = v[g];
          y !== null && (y.lane &= -536870913);
        }
      a &= ~T;
    }
    u !== 0 && yf(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function yf(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - Wl(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194090));
  }
  function mf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Wl(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function Jn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function wn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function gf() {
    var l = p.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Fo(l.type));
  }
  function zr(l, t) {
    var a = p.p;
    try {
      return (p.p = l), t();
    } finally {
      p.p = a;
    }
  }
  var Jt = Math.random().toString(36).slice(2),
    Rl = "__reactFiber$" + Jt,
    Gl = "__reactProps$" + Jt,
    Ca = "__reactContainer$" + Jt,
    Wn = "__reactEvents$" + Jt,
    pr = "__reactListeners$" + Jt,
    Or = "__reactHandles$" + Jt,
    Sf = "__reactResources$" + Jt,
    Mu = "__reactMarker$" + Jt;
  function $n(l) {
    delete l[Rl], delete l[Gl], delete l[Wn], delete l[pr], delete l[Or];
  }
  function Xa(l) {
    var t = l[Rl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Ca] || a[Rl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Bo(l); l !== null; ) {
            if ((a = l[Rl])) return a;
            l = Bo(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Qa(l) {
    if ((l = l[Rl] || l[Ca])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Du(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Za(l) {
    var t = l[Sf];
    return (
      t ||
        (t = l[Sf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function _l(l) {
    l[Mu] = !0;
  }
  var bf = new Set(),
    _f = {};
  function ba(l, t) {
    Va(l, t), Va(l + "Capture", t);
  }
  function Va(l, t) {
    for (_f[l] = t, l = 0; l < t.length; l++) bf.add(t[l]);
  }
  var Mr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Tf = {},
    Ef = {};
  function Dr(l) {
    return Zn.call(Ef, l)
      ? !0
      : Zn.call(Tf, l)
      ? !1
      : Mr.test(l)
      ? (Ef[l] = !0)
      : ((Tf[l] = !0), !1);
  }
  function Ue(l, t, a) {
    if (Dr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ne(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Dt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  var kn, Af;
  function La(l) {
    if (kn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (kn = (t && t[1]) || ""),
          (Af =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      kn +
      l +
      Af
    );
  }
  var Fn = !1;
  function In(l, t) {
    if (!l || Fn) return "";
    Fn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (y) {
                  var v = y;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (y) {
                  v = y;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                v = y;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (y) {
            if (y && v && typeof y.stack == "string") return [y.stack, v.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var f = c.split(`
`),
          h = i.split(`
`);
        for (
          e = u = 0;
          u < f.length && !f[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === f.length || e === h.length)
          for (
            u = f.length - 1, e = h.length - 1;
            1 <= u && 0 <= e && f[u] !== h[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (f[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || f[u] !== h[e])) {
                  var g =
                    `
` + f[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Fn = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? La(a) : "";
  }
  function Ur(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return La(l.type);
      case 16:
        return La("Lazy");
      case 13:
        return La("Suspense");
      case 19:
        return La("SuspenseList");
      case 0:
      case 15:
        return In(l.type, !1);
      case 11:
        return In(l.type.render, !1);
      case 1:
        return In(l.type, !0);
      case 31:
        return La("Activity");
      default:
        return "";
    }
  }
  function zf(l) {
    try {
      var t = "";
      do (t += Ur(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ut(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Nr(l) {
    var t = pf(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      u = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            (u = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (c) {
            u = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Re(l) {
    l._valueTracker || (l._valueTracker = Nr(l));
  }
  function Of(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = pf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function xe(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Rr = /[\n"\\]/g;
  function et(l) {
    return l.replace(Rr, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pn(l, t, a, u, e, n, c, i) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ut(t))
          : l.value !== "" + ut(t) && (l.value = "" + ut(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? lc(l, c, ut(t))
        : a != null
        ? lc(l, c, ut(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + ut(i))
        : l.removeAttribute("name");
  }
  function Mf(l, t, a, u, e, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + ut(a) : ""),
        (t = t != null ? "" + ut(t) : a),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = i ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function lc(l, t, a) {
    (t === "number" && xe(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Ka(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ut(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Df(l, t, a) {
    if (
      t != null &&
      ((t = "" + ut(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ut(a) : "";
  }
  function Uf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(m(92));
        if (Nl(u)) {
          if (1 < u.length) throw Error(m(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = ut(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u);
  }
  function Ja(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var xr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || xr.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function Rf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Nf(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && Nf(l, n, t[n]);
  }
  function tc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Hr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return jr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var ac = null;
  function uc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var wa = null,
    Wa = null;
  function xf(l) {
    var t = Qa(l);
    if (t && (l = t.stateNode)) {
      var a = l[Gl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Pn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + et("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Gl] || null;
                if (!e) throw Error(m(90));
                Pn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && Of(u);
          }
          break l;
        case "textarea":
          Df(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && Ka(l, !!a.multiple, t, !1);
      }
    }
  }
  var ec = !1;
  function Hf(l, t, a) {
    if (ec) return l(t, a);
    ec = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((ec = !1),
        (wa !== null || Wa !== null) &&
          (bn(), wa && ((t = wa), (l = Wa), (Wa = wa = null), xf(t), l)))
      )
        for (t = 0; t < l.length; t++) xf(l[t]);
    }
  }
  function Uu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Gl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(m(231, t, typeof a));
    return a;
  }
  var Ut = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    nc = !1;
  if (Ut)
    try {
      var Nu = {};
      Object.defineProperty(Nu, "passive", {
        get: function () {
          nc = !0;
        },
      }),
        window.addEventListener("test", Nu, Nu),
        window.removeEventListener("test", Nu, Nu);
    } catch {
      nc = !1;
    }
  var wt = null,
    cc = null,
    je = null;
  function jf() {
    if (je) return je;
    var l,
      t = cc,
      a = t.length,
      u,
      e = "value" in wt ? wt.value : wt.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (je = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function qe(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Be() {
    return !0;
  }
  function qf() {
    return !1;
  }
  function Cl(l) {
    function t(a, u, e, n, c) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var i in l)
        l.hasOwnProperty(i) && ((a = l[i]), (this[i] = a ? a(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Be
          : qf),
        (this.isPropagationStopped = qf),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Be));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Be));
        },
        persist: function () {},
        isPersistent: Be,
      }),
      t
    );
  }
  var _a = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ye = Cl(_a),
    Ru = R({}, _a, { view: 0, detail: 0 }),
    qr = Cl(Ru),
    ic,
    fc,
    xu,
    Ge = R({}, Ru, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: dc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== xu &&
              (xu && l.type === "mousemove"
                ? ((ic = l.screenX - xu.screenX), (fc = l.screenY - xu.screenY))
                : (fc = ic = 0),
              (xu = l)),
            ic);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : fc;
      },
    }),
    Bf = Cl(Ge),
    Br = R({}, Ge, { dataTransfer: 0 }),
    Yr = Cl(Br),
    Gr = R({}, Ru, { relatedTarget: 0 }),
    sc = Cl(Gr),
    Cr = R({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xr = Cl(Cr),
    Qr = R({}, _a, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Zr = Cl(Qr),
    Vr = R({}, _a, { data: 0 }),
    Yf = Cl(Vr),
    Lr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Kr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Jr[l])
      ? !!t[l]
      : !1;
  }
  function dc() {
    return wr;
  }
  var Wr = R({}, Ru, {
      key: function (l) {
        if (l.key) {
          var t = Lr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = qe(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Kr[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dc,
      charCode: function (l) {
        return l.type === "keypress" ? qe(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? qe(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    $r = Cl(Wr),
    kr = R({}, Ge, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Gf = Cl(kr),
    Fr = R({}, Ru, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dc,
    }),
    Ir = Cl(Fr),
    Pr = R({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l0 = Cl(Pr),
    t0 = R({}, Ge, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    a0 = Cl(t0),
    u0 = R({}, _a, { newState: 0, oldState: 0 }),
    e0 = Cl(u0),
    n0 = [9, 13, 27, 32],
    oc = Ut && "CompositionEvent" in window,
    Hu = null;
  Ut && "documentMode" in document && (Hu = document.documentMode);
  var c0 = Ut && "TextEvent" in window && !Hu,
    Cf = Ut && (!oc || (Hu && 8 < Hu && 11 >= Hu)),
    Xf = " ",
    Qf = !1;
  function Zf(l, t) {
    switch (l) {
      case "keyup":
        return n0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vf(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var $a = !1;
  function i0(l, t) {
    switch (l) {
      case "compositionend":
        return Vf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Qf = !0), Xf);
      case "textInput":
        return (l = t.data), l === Xf && Qf ? null : l;
      default:
        return null;
    }
  }
  function f0(l, t) {
    if ($a)
      return l === "compositionend" || (!oc && Zf(l, t))
        ? ((l = jf()), (je = cc = wt = null), ($a = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Cf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var s0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Lf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!s0[l.type] : t === "textarea";
  }
  function Kf(l, t, a, u) {
    wa ? (Wa ? Wa.push(u) : (Wa = [u])) : (wa = u),
      (t = pn(t, "onChange")),
      0 < t.length &&
        ((a = new Ye("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var ju = null,
    qu = null;
  function d0(l) {
    Oo(l, 0);
  }
  function Ce(l) {
    var t = Du(l);
    if (Of(t)) return l;
  }
  function Jf(l, t) {
    if (l === "change") return t;
  }
  var wf = !1;
  if (Ut) {
    var rc;
    if (Ut) {
      var hc = "oninput" in document;
      if (!hc) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"),
          (hc = typeof Wf.oninput == "function");
      }
      rc = hc;
    } else rc = !1;
    wf = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function $f() {
    ju && (ju.detachEvent("onpropertychange", kf), (qu = ju = null));
  }
  function kf(l) {
    if (l.propertyName === "value" && Ce(qu)) {
      var t = [];
      Kf(t, qu, l, uc(l)), Hf(d0, t);
    }
  }
  function o0(l, t, a) {
    l === "focusin"
      ? ($f(), (ju = t), (qu = a), ju.attachEvent("onpropertychange", kf))
      : l === "focusout" && $f();
  }
  function r0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ce(qu);
  }
  function h0(l, t) {
    if (l === "click") return Ce(t);
  }
  function v0(l, t) {
    if (l === "input" || l === "change") return Ce(t);
  }
  function y0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var $l = typeof Object.is == "function" ? Object.is : y0;
  function Bu(l, t) {
    if ($l(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Zn.call(t, e) || !$l(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Ff(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function If(l, t) {
    var a = Ff(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ff(a);
    }
  }
  function Pf(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Pf(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ls(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = xe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = xe(l.document);
    }
    return t;
  }
  function vc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var m0 = Ut && "documentMode" in document && 11 >= document.documentMode,
    ka = null,
    yc = null,
    Yu = null,
    mc = !1;
  function ts(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    mc ||
      ka == null ||
      ka !== xe(u) ||
      ((u = ka),
      "selectionStart" in u && vc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Yu && Bu(Yu, u)) ||
        ((Yu = u),
        (u = pn(yc, "onSelect")),
        0 < u.length &&
          ((t = new Ye("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = ka))));
  }
  function Ta(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Fa = {
      animationend: Ta("Animation", "AnimationEnd"),
      animationiteration: Ta("Animation", "AnimationIteration"),
      animationstart: Ta("Animation", "AnimationStart"),
      transitionrun: Ta("Transition", "TransitionRun"),
      transitionstart: Ta("Transition", "TransitionStart"),
      transitioncancel: Ta("Transition", "TransitionCancel"),
      transitionend: Ta("Transition", "TransitionEnd"),
    },
    gc = {},
    as = {};
  Ut &&
    ((as = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Fa.animationend.animation,
      delete Fa.animationiteration.animation,
      delete Fa.animationstart.animation),
    "TransitionEvent" in window || delete Fa.transitionend.transition);
  function Ea(l) {
    if (gc[l]) return gc[l];
    if (!Fa[l]) return l;
    var t = Fa[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in as) return (gc[l] = t[a]);
    return l;
  }
  var us = Ea("animationend"),
    es = Ea("animationiteration"),
    ns = Ea("animationstart"),
    g0 = Ea("transitionrun"),
    S0 = Ea("transitionstart"),
    b0 = Ea("transitioncancel"),
    cs = Ea("transitionend"),
    is = new Map(),
    Sc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Sc.push("scrollEnd");
  function vt(l, t) {
    is.set(l, t), ba(t, [l]);
  }
  var fs = new WeakMap();
  function nt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = fs.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: zf(t) }), fs.set(l, t), t);
    }
    return { value: l, source: t, stack: zf(t) };
  }
  var ct = [],
    Ia = 0,
    bc = 0;
  function Xe() {
    for (var l = Ia, t = (bc = Ia = 0); t < l; ) {
      var a = ct[t];
      ct[t++] = null;
      var u = ct[t];
      ct[t++] = null;
      var e = ct[t];
      ct[t++] = null;
      var n = ct[t];
      if (((ct[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e);
      }
      n !== 0 && ss(a, e, n);
    }
  }
  function Qe(l, t, a, u) {
    (ct[Ia++] = l),
      (ct[Ia++] = t),
      (ct[Ia++] = a),
      (ct[Ia++] = u),
      (bc |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function _c(l, t, a, u) {
    return Qe(l, t, a, u), Ze(l);
  }
  function Pa(l, t) {
    return Qe(l, null, null, t), Ze(l);
  }
  function ss(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - Wl(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Ze(l) {
    if (50 < fe) throw ((fe = 0), (Oi = null), Error(m(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function _0(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function kl(l, t, a, u) {
    return new _0(l, t, a, u);
  }
  function Tc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Nt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = kl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function ds(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ve(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) Tc(l) && (c = 1);
    else if (typeof l == "string")
      c = Eh(l, a, x.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case St:
          return (l = kl(31, a, t, e)), (l.elementType = St), (l.lanes = n), l;
        case ql:
          return Aa(a.children, e, n, t);
        case rt:
          (c = 8), (e |= 24);
          break;
        case Yl:
          return (
            (l = kl(12, a, t, e | 2)), (l.elementType = Yl), (l.lanes = n), l
          );
        case w:
          return (l = kl(13, a, t, e)), (l.elementType = w), (l.lanes = n), l;
        case Vl:
          return (l = kl(19, a, t, e)), (l.elementType = Vl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ya:
              case Dl:
                c = 10;
                break l;
              case Ot:
                c = 9;
                break l;
              case ht:
                c = 11;
                break l;
              case Ll:
                c = 14;
                break l;
              case Kl:
                (c = 16), (u = null);
                break l;
            }
          (c = 29),
            (a = Error(m(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = kl(c, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function Aa(l, t, a, u) {
    return (l = kl(7, l, u, t)), (l.lanes = a), l;
  }
  function Ec(l, t, a) {
    return (l = kl(6, l, null, t)), (l.lanes = a), l;
  }
  function Ac(l, t, a) {
    return (
      (t = kl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var tu = [],
    au = 0,
    Le = null,
    Ke = 0,
    it = [],
    ft = 0,
    za = null,
    Rt = 1,
    xt = "";
  function pa(l, t) {
    (tu[au++] = Ke), (tu[au++] = Le), (Le = l), (Ke = t);
  }
  function os(l, t, a) {
    (it[ft++] = Rt), (it[ft++] = xt), (it[ft++] = za), (za = l);
    var u = Rt;
    l = xt;
    var e = 32 - Wl(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - Wl(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      (n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (Rt = (1 << (32 - Wl(t) + e)) | (a << e) | u),
        (xt = n + l);
    } else (Rt = (1 << n) | (a << e) | u), (xt = l);
  }
  function zc(l) {
    l.return !== null && (pa(l, 1), os(l, 1, 0));
  }
  function pc(l) {
    for (; l === Le; )
      (Le = tu[--au]), (tu[au] = null), (Ke = tu[--au]), (tu[au] = null);
    for (; l === za; )
      (za = it[--ft]),
        (it[ft] = null),
        (xt = it[--ft]),
        (it[ft] = null),
        (Rt = it[--ft]),
        (it[ft] = null);
  }
  var Bl = null,
    rl = null,
    k = !1,
    Oa = null,
    _t = !1,
    Oc = Error(m(519));
  function Ma(l) {
    var t = Error(m(418, ""));
    throw (Xu(nt(t, l)), Oc);
  }
  function rs(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Rl] = l), (t[Gl] = u), a)) {
      case "dialog":
        L("cancel", t), L("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < de.length; a++) L(de[a], t);
        break;
      case "source":
        L("error", t);
        break;
      case "img":
      case "image":
      case "link":
        L("error", t), L("load", t);
        break;
      case "details":
        L("toggle", t);
        break;
      case "input":
        L("invalid", t),
          Mf(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          ),
          Re(t);
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        L("invalid", t), Uf(t, u.value, u.defaultValue, u.children), Re(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      No(t.textContent, a)
        ? (u.popover != null && (L("beforetoggle", t), L("toggle", t)),
          u.onScroll != null && L("scroll", t),
          u.onScrollEnd != null && L("scrollend", t),
          u.onClick != null && (t.onclick = On),
          (t = !0))
        : (t = !1),
      t || Ma(l);
  }
  function hs(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 13:
          _t = !1;
          return;
        case 27:
        case 3:
          _t = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function Gu(l) {
    if (l !== Bl) return !1;
    if (!k) return hs(l), (k = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Zi(l.type, l.memoizedProps))),
        (a = !a)),
      a && rl && Ma(l),
      hs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                rl = mt(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        rl = null;
      }
    } else
      t === 27
        ? ((t = rl), sa(l.type) ? ((l = Ji), (Ji = null), (rl = l)) : (rl = t))
        : (rl = Bl ? mt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Cu() {
    (rl = Bl = null), (k = !1);
  }
  function vs() {
    var l = Oa;
    return (
      l !== null &&
        (Zl === null ? (Zl = l) : Zl.push.apply(Zl, l), (Oa = null)),
      l
    );
  }
  function Xu(l) {
    Oa === null ? (Oa = [l]) : Oa.push(l);
  }
  var Mc = A(null),
    Da = null,
    Ht = null;
  function Wt(l, t, a) {
    z(Mc, t._currentValue), (t._currentValue = a);
  }
  function jt(l) {
    (l._currentValue = Mc.current), M(Mc);
  }
  function Dc(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Uc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              (n.lanes |= a),
                (i = n.alternate),
                i !== null && (i.lanes |= a),
                Dc(n.return, a, l),
                u || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(m(341));
        (c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Dc(c, a, l),
          (c = null);
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            (e.return = c.return), (c = e);
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function Qu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(m(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = e.type;
          $l(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (e === Jl.current) {
        if (((c = e.alternate), c === null)) throw Error(m(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(me) : (l = [me]));
      }
      e = e.return;
    }
    l !== null && Uc(t, l, a, u), (t.flags |= 262144);
  }
  function Je(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!$l(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ua(l) {
    (Da = l),
      (Ht = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function xl(l) {
    return ys(Da, l);
  }
  function we(l, t) {
    return Da === null && Ua(l), ys(l, t);
  }
  function ys(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ht === null)) {
      if (l === null) throw Error(m(308));
      (Ht = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Ht = Ht.next = t;
    return a;
  }
  var T0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    E0 = O.unstable_scheduleCallback,
    A0 = O.unstable_NormalPriority,
    Sl = {
      $$typeof: Dl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Nc() {
    return { controller: new T0(), data: new Map(), refCount: 0 };
  }
  function Zu(l) {
    l.refCount--,
      l.refCount === 0 &&
        E0(A0, function () {
          l.controller.abort();
        });
  }
  var Vu = null,
    Rc = 0,
    uu = 0,
    eu = null;
  function z0(l, t) {
    if (Vu === null) {
      var a = (Vu = []);
      (Rc = 0),
        (uu = Hi()),
        (eu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return Rc++, t.then(ms, ms), t;
  }
  function ms() {
    if (--Rc === 0 && Vu !== null) {
      eu !== null && (eu.status = "fulfilled");
      var l = Vu;
      (Vu = null), (uu = 0), (eu = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function p0(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var gs = S.S;
  S.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      z0(l, t),
      gs !== null && gs(l, t);
  };
  var Na = A(null);
  function xc() {
    var l = Na.current;
    return l !== null ? l : cl.pooledCache;
  }
  function We(l, t) {
    t === null ? z(Na, Na.current) : z(Na, t.pool);
  }
  function Ss() {
    var l = xc();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var Lu = Error(m(460)),
    bs = Error(m(474)),
    $e = Error(m(542)),
    Hc = { then: function () {} };
  function _s(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function ke() {}
  function Ts(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(ke, ke), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), As(l), l);
      default:
        if (typeof t.status == "string") t.then(ke, ke);
        else {
          if (((l = cl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(m(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), As(l), l);
        }
        throw ((Ku = t), Lu);
    }
  }
  var Ku = null;
  function Es() {
    if (Ku === null) throw Error(m(459));
    var l = Ku;
    return (Ku = null), l;
  }
  function As(l) {
    if (l === Lu || l === $e) throw Error(m(483));
  }
  var $t = !1;
  function jc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function kt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ft(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (I & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Ze(l)),
        ss(l, null, a),
        t
      );
    }
    return Qe(l, u, t, a), Ze(l);
  }
  function Ju(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), mf(l, a);
    }
  }
  function Bc(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = c) : (n = n.next = c), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var Yc = !1;
  function wu() {
    if (Yc) {
      var l = eu;
      if (l !== null) throw l;
    }
  }
  function Wu(l, t, a, u) {
    Yc = !1;
    var e = l.updateQueue;
    $t = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var f = i,
        h = f.next;
      (f.next = null), c === null ? (n = h) : (c.next = h), (c = f);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (i = g.lastBaseUpdate),
        i !== c &&
          (i === null ? (g.firstBaseUpdate = h) : (i.next = h),
          (g.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var T = e.baseState;
      (c = 0), (g = h = f = null), (i = n);
      do {
        var v = i.lane & -536870913,
          y = v !== i.lane;
        if (y ? (K & v) === v : (u & v) === v) {
          v !== 0 && v === uu && (Yc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var B = l,
              H = i;
            v = t;
            var al = a;
            switch (H.tag) {
              case 1:
                if (((B = H.payload), typeof B == "function")) {
                  T = B.call(al, T, v);
                  break l;
                }
                T = B;
                break l;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (
                  ((B = H.payload),
                  (v = typeof B == "function" ? B.call(al, T, v) : B),
                  v == null)
                )
                  break l;
                T = R({}, T, v);
                break l;
              case 2:
                $t = !0;
            }
          }
          (v = i.callback),
            v !== null &&
              ((l.flags |= 64),
              y && (l.flags |= 8192),
              (y = e.callbacks),
              y === null ? (e.callbacks = [v]) : y.push(v));
        } else
          (y = {
            lane: v,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            g === null ? ((h = g = y), (f = T)) : (g = g.next = y),
            (c |= v);
        if (((i = i.next), i === null)) {
          if (((i = e.shared.pending), i === null)) break;
          (y = i),
            (i = y.next),
            (y.next = null),
            (e.lastBaseUpdate = y),
            (e.shared.pending = null);
        }
      } while (!0);
      g === null && (f = T),
        (e.baseState = f),
        (e.firstBaseUpdate = h),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (na |= c),
        (l.lanes = c),
        (l.memoizedState = T);
    }
  }
  function zs(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function ps(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) zs(a[l], t);
  }
  var nu = A(null),
    Fe = A(0);
  function Os(l, t) {
    (l = Qt), z(Fe, l), z(nu, t), (Qt = l | t.baseLanes);
  }
  function Gc() {
    z(Fe, Qt), z(nu, nu.current);
  }
  function Cc() {
    (Qt = Fe.current), M(nu), M(Fe);
  }
  var It = 0,
    Q = null,
    ll = null,
    ml = null,
    Ie = !1,
    cu = !1,
    Ra = !1,
    Pe = 0,
    $u = 0,
    iu = null,
    O0 = 0;
  function vl() {
    throw Error(m(321));
  }
  function Xc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!$l(l[a], t[a])) return !1;
    return !0;
  }
  function Qc(l, t, a, u, e, n) {
    return (
      (It = n),
      (Q = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? sd : dd),
      (Ra = !1),
      (n = a(u, e)),
      (Ra = !1),
      cu && (n = Ds(t, a, u, e)),
      Ms(l),
      n
    );
  }
  function Ms(l) {
    S.H = nn;
    var t = ll !== null && ll.next !== null;
    if (((It = 0), (ml = ll = Q = null), (Ie = !1), ($u = 0), (iu = null), t))
      throw Error(m(300));
    l === null ||
      Tl ||
      ((l = l.dependencies), l !== null && Je(l) && (Tl = !0));
  }
  function Ds(l, t, a, u) {
    Q = l;
    var e = 0;
    do {
      if ((cu && (iu = null), ($u = 0), (cu = !1), 25 <= e))
        throw Error(m(301));
      if (((e += 1), (ml = ll = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = H0), (n = t(a, u));
    } while (cu);
    return n;
  }
  function M0() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? ku(t) : t),
      (l = l.useState()[0]),
      (ll !== null ? ll.memoizedState : null) !== l && (Q.flags |= 1024),
      t
    );
  }
  function Zc() {
    var l = Pe !== 0;
    return (Pe = 0), l;
  }
  function Vc(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Lc(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Ie = !1;
    }
    (It = 0), (ml = ll = Q = null), (cu = !1), ($u = Pe = 0), (iu = null);
  }
  function Xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ml === null ? (Q.memoizedState = ml = l) : (ml = ml.next = l), ml;
  }
  function gl() {
    if (ll === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = ml === null ? Q.memoizedState : ml.next;
    if (t !== null) (ml = t), (ll = l);
    else {
      if (l === null)
        throw Q.alternate === null ? Error(m(467)) : Error(m(310));
      (ll = l),
        (l = {
          memoizedState: ll.memoizedState,
          baseState: ll.baseState,
          baseQueue: ll.baseQueue,
          queue: ll.queue,
          next: null,
        }),
        ml === null ? (Q.memoizedState = ml = l) : (ml = ml.next = l);
    }
    return ml;
  }
  function Kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ku(l) {
    var t = $u;
    return (
      ($u += 1),
      iu === null && (iu = []),
      (l = Ts(iu, l, t)),
      (t = Q),
      (ml === null ? t.memoizedState : ml.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? sd : dd)),
      l
    );
  }
  function ln(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ku(l);
      if (l.$$typeof === Dl) return xl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Jc(l) {
    var t = null,
      a = Q.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = Q.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Kc()), (Q.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Ga;
    return t.index++, a;
  }
  function qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function tn(l) {
    var t = gl();
    return wc(t, ll, l);
  }
  function wc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        (e.next = n.next), (n.next = c);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var i = (c = null),
        f = null,
        h = t,
        g = !1;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (K & T) === T : (It & T) === T) {
          var v = h.revertLane;
          if (v === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              T === uu && (g = !0);
          else if ((It & v) === v) {
            (h = h.next), v === uu && (g = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              f === null ? ((i = f = T), (c = n)) : (f = f.next = T),
              (Q.lanes |= v),
              (na |= v);
          (T = h.action),
            Ra && a(n, T),
            (n = h.hasEagerState ? h.eagerState : a(n, T));
        } else
          (v = {
            lane: T,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            f === null ? ((i = f = v), (c = n)) : (f = f.next = v),
            (Q.lanes |= T),
            (na |= T);
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (f === null ? (c = n) : (f.next = i),
        !$l(n, l.memoizedState) && ((Tl = !0), g && ((a = eu), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = f),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Wc(l) {
    var t = gl(),
      a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== e);
      $l(n, t.memoizedState) || (Tl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function Us(l, t, a) {
    var u = Q,
      e = gl(),
      n = k;
    if (n) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = t();
    var c = !$l((ll || e).memoizedState, a);
    c && ((e.memoizedState = a), (Tl = !0)), (e = e.queue);
    var i = xs.bind(null, u, e, l);
    if (
      (Fu(2048, 8, i, [l]),
      e.getSnapshot !== t || c || (ml !== null && ml.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        fu(9, an(), Rs.bind(null, u, e, a, t), null),
        cl === null)
      )
        throw Error(m(349));
      n || (It & 124) !== 0 || Ns(u, t, a);
    }
    return a;
  }
  function Ns(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = Q.updateQueue),
      t === null
        ? ((t = Kc()), (Q.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function Rs(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), Hs(t) && js(l);
  }
  function xs(l, t, a) {
    return a(function () {
      Hs(t) && js(l);
    });
  }
  function Hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !$l(l, a);
    } catch {
      return !0;
    }
  }
  function js(l) {
    var t = Pa(l, 2);
    t !== null && tt(t, l, 2);
  }
  function $c(l) {
    var t = Xl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ra)) {
        Kt(!0);
        try {
          a();
        } finally {
          Kt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function qs(l, t, a, u) {
    return (l.baseState = a), wc(l, ll, typeof u == "function" ? u : qt);
  }
  function D0(l, t, a, u, e) {
    if (en(l)) throw Error(m(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      S.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Bs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function Bs(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = S.T,
        c = {};
      S.T = c;
      try {
        var i = a(e, u),
          f = S.S;
        f !== null && f(c, i), Ys(l, t, i);
      } catch (h) {
        kc(l, t, h);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = a(e, u)), Ys(l, t, n);
      } catch (h) {
        kc(l, t, h);
      }
  }
  function Ys(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            Gs(l, t, u);
          },
          function (u) {
            return kc(l, t, u);
          }
        )
      : Gs(l, t, a);
  }
  function Gs(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      Cs(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Bs(l, a)));
  }
  function kc(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), Cs(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function Cs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Xs(l, t) {
    return t;
  }
  function Qs(l, t) {
    if (k) {
      var a = cl.formState;
      if (a !== null) {
        l: {
          var u = Q;
          if (k) {
            if (rl) {
              t: {
                for (var e = rl, n = _t; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = mt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (rl = mt(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            Ma(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Xl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xs,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = cd.bind(null, Q, u)),
      (u.dispatch = a),
      (u = $c(!1)),
      (n = ti.bind(null, Q, !1, u.queue)),
      (u = Xl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = D0.bind(null, Q, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Zs(l) {
    var t = gl();
    return Vs(t, ll, l);
  }
  function Vs(l, t, a) {
    if (
      ((t = wc(l, t, Xs)[0]),
      (l = tn(qt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = ku(t);
      } catch (c) {
        throw c === Lu ? $e : c;
      }
    else u = t;
    t = gl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((Q.flags |= 2048), fu(9, an(), U0.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function U0(l, t) {
    l.action = t;
  }
  function Ls(l) {
    var t = gl(),
      a = ll;
    if (a !== null) return Vs(t, a, l);
    gl(), (t = t.memoizedState), (a = gl());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function fu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = Q.updateQueue),
      t === null && ((t = Kc()), (Q.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function an() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ks() {
    return gl().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Xl();
    (u = u === void 0 ? null : u),
      (Q.flags |= l),
      (e.memoizedState = fu(1 | t, an(), a, u));
  }
  function Fu(l, t, a, u) {
    var e = gl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ll !== null && u !== null && Xc(u, ll.memoizedState.deps)
      ? (e.memoizedState = fu(t, n, a, u))
      : ((Q.flags |= l), (e.memoizedState = fu(1 | t, n, a, u)));
  }
  function Js(l, t) {
    un(8390656, 8, l, t);
  }
  function ws(l, t) {
    Fu(2048, 8, l, t);
  }
  function Ws(l, t) {
    return Fu(4, 2, l, t);
  }
  function $s(l, t) {
    return Fu(4, 4, l, t);
  }
  function ks(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Fs(l, t, a) {
    (a = a != null ? a.concat([l]) : null), Fu(4, 4, ks.bind(null, t, l), a);
  }
  function Fc() {}
  function Is(l, t) {
    var a = gl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Xc(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function Ps(l, t) {
    var a = gl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Xc(t, u[1])) return u[0];
    if (((u = l()), Ra)) {
      Kt(!0);
      try {
        l();
      } finally {
        Kt(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function Ic(l, t, a) {
    return a === void 0 || (It & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = ao()), (Q.lanes |= l), (na |= l), a);
  }
  function ld(l, t, a, u) {
    return $l(a, t)
      ? a
      : nu.current !== null
      ? ((l = Ic(l, a, u)), $l(l, t) || (Tl = !0), l)
      : (It & 42) === 0
      ? ((Tl = !0), (l.memoizedState = a))
      : ((l = ao()), (Q.lanes |= l), (na |= l), t);
  }
  function td(l, t, a, u, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T,
      i = {};
    (S.T = i), ti(l, !1, t, a);
    try {
      var f = e(),
        h = S.S;
      if (
        (h !== null && h(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var g = p0(f, u);
        Iu(l, t, g, lt(l));
      } else Iu(l, t, u, lt(l));
    } catch (T) {
      Iu(l, t, { then: function () {}, status: "rejected", reason: T }, lt());
    } finally {
      (p.p = n), (S.T = c);
    }
  }
  function N0() {}
  function Pc(l, t, a, u) {
    if (l.tag !== 5) throw Error(m(476));
    var e = ad(l).queue;
    td(
      l,
      e,
      t,
      q,
      a === null
        ? N0
        : function () {
            return ud(l), a(u);
          }
    );
  }
  function ad(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qt,
        lastRenderedState: q,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function ud(l) {
    var t = ad(l).next.queue;
    Iu(l, t, {}, lt());
  }
  function li() {
    return xl(me);
  }
  function ed() {
    return gl().memoizedState;
  }
  function nd() {
    return gl().memoizedState;
  }
  function R0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = lt();
          l = kt(a);
          var u = Ft(t, l, a);
          u !== null && (tt(u, t, a), Ju(u, t, a)),
            (t = { cache: Nc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function x0(l, t, a) {
    var u = lt();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      en(l)
        ? id(t, a)
        : ((a = _c(l, t, a, u)), a !== null && (tt(a, l, u), fd(a, t, u)));
  }
  function cd(l, t, a) {
    var u = lt();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (en(l)) id(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = i), $l(i, c)))
            return Qe(l, t, e, 0), cl === null && Xe(), !1;
        } catch {
        } finally {
        }
      if (((a = _c(l, t, e, u)), a !== null))
        return tt(a, l, u), fd(a, t, u), !0;
    }
    return !1;
  }
  function ti(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Hi(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      en(l))
    ) {
      if (t) throw Error(m(479));
    } else (t = _c(l, a, u, 2)), t !== null && tt(t, l, 2);
  }
  function en(l) {
    var t = l.alternate;
    return l === Q || (t !== null && t === Q);
  }
  function id(l, t) {
    cu = Ie = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function fd(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), mf(l, a);
    }
  }
  var nn = {
      readContext: xl,
      use: ln,
      useCallback: vl,
      useContext: vl,
      useEffect: vl,
      useImperativeHandle: vl,
      useLayoutEffect: vl,
      useInsertionEffect: vl,
      useMemo: vl,
      useReducer: vl,
      useRef: vl,
      useState: vl,
      useDebugValue: vl,
      useDeferredValue: vl,
      useTransition: vl,
      useSyncExternalStore: vl,
      useId: vl,
      useHostTransitionStatus: vl,
      useFormState: vl,
      useActionState: vl,
      useOptimistic: vl,
      useMemoCache: vl,
      useCacheRefresh: vl,
    },
    sd = {
      readContext: xl,
      use: ln,
      useCallback: function (l, t) {
        return (Xl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: xl,
      useEffect: Js,
      useImperativeHandle: function (l, t, a) {
        (a = a != null ? a.concat([l]) : null),
          un(4194308, 4, ks.bind(null, t, l), a);
      },
      useLayoutEffect: function (l, t) {
        return un(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        un(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Xl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Ra) {
          Kt(!0);
          try {
            l();
          } finally {
            Kt(!1);
          }
        }
        return (a.memoizedState = [u, t]), u;
      },
      useReducer: function (l, t, a) {
        var u = Xl();
        if (a !== void 0) {
          var e = a(t);
          if (Ra) {
            Kt(!0);
            try {
              a(t);
            } finally {
              Kt(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = x0.bind(null, Q, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Xl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = $c(l);
        var t = l.queue,
          a = cd.bind(null, Q, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: Fc,
      useDeferredValue: function (l, t) {
        var a = Xl();
        return Ic(a, l, t);
      },
      useTransition: function () {
        var l = $c(!1);
        return (
          (l = td.bind(null, Q, l.queue, !0, !1)),
          (Xl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = Q,
          e = Xl();
        if (k) {
          if (a === void 0) throw Error(m(407));
          a = a();
        } else {
          if (((a = t()), cl === null)) throw Error(m(349));
          (K & 124) !== 0 || Ns(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          Js(xs.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          fu(9, an(), Rs.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Xl(),
          t = cl.identifierPrefix;
        if (k) {
          var a = xt,
            u = Rt;
          (a = (u & ~(1 << (32 - Wl(u) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = Pe++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = O0++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: li,
      useFormState: Qs,
      useActionState: Qs,
      useOptimistic: function (l) {
        var t = Xl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a), (t = ti.bind(null, Q, !0, a)), (a.dispatch = t), [l, t]
        );
      },
      useMemoCache: Jc,
      useCacheRefresh: function () {
        return (Xl().memoizedState = R0.bind(null, Q));
      },
    },
    dd = {
      readContext: xl,
      use: ln,
      useCallback: Is,
      useContext: xl,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: Ws,
      useLayoutEffect: $s,
      useMemo: Ps,
      useReducer: tn,
      useRef: Ks,
      useState: function () {
        return tn(qt);
      },
      useDebugValue: Fc,
      useDeferredValue: function (l, t) {
        var a = gl();
        return ld(a, ll.memoizedState, l, t);
      },
      useTransition: function () {
        var l = tn(qt)[0],
          t = gl().memoizedState;
        return [typeof l == "boolean" ? l : ku(l), t];
      },
      useSyncExternalStore: Us,
      useId: ed,
      useHostTransitionStatus: li,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (l, t) {
        var a = gl();
        return qs(a, ll, l, t);
      },
      useMemoCache: Jc,
      useCacheRefresh: nd,
    },
    H0 = {
      readContext: xl,
      use: ln,
      useCallback: Is,
      useContext: xl,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: Ws,
      useLayoutEffect: $s,
      useMemo: Ps,
      useReducer: Wc,
      useRef: Ks,
      useState: function () {
        return Wc(qt);
      },
      useDebugValue: Fc,
      useDeferredValue: function (l, t) {
        var a = gl();
        return ll === null ? Ic(a, l, t) : ld(a, ll.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Wc(qt)[0],
          t = gl().memoizedState;
        return [typeof l == "boolean" ? l : ku(l), t];
      },
      useSyncExternalStore: Us,
      useId: ed,
      useHostTransitionStatus: li,
      useFormState: Ls,
      useActionState: Ls,
      useOptimistic: function (l, t) {
        var a = gl();
        return ll !== null
          ? qs(a, ll, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Jc,
      useCacheRefresh: nd,
    },
    su = null,
    Pu = 0;
  function cn(l) {
    var t = Pu;
    return (Pu += 1), su === null && (su = []), Ts(su, l, t);
  }
  function le(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function fn(l, t) {
    throw t.$$typeof === il
      ? Error(m(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          m(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function od(l) {
    var t = l._init;
    return t(l._payload);
  }
  function rd(l) {
    function t(o, d) {
      if (l) {
        var r = o.deletions;
        r === null ? ((o.deletions = [d]), (o.flags |= 16)) : r.push(d);
      }
    }
    function a(o, d) {
      if (!l) return null;
      for (; d !== null; ) t(o, d), (d = d.sibling);
      return null;
    }
    function u(o) {
      for (var d = new Map(); o !== null; )
        o.key !== null ? d.set(o.key, o) : d.set(o.index, o), (o = o.sibling);
      return d;
    }
    function e(o, d) {
      return (o = Nt(o, d)), (o.index = 0), (o.sibling = null), o;
    }
    function n(o, d, r) {
      return (
        (o.index = r),
        l
          ? ((r = o.alternate),
            r !== null
              ? ((r = r.index), r < d ? ((o.flags |= 67108866), d) : r)
              : ((o.flags |= 67108866), d))
          : ((o.flags |= 1048576), d)
      );
    }
    function c(o) {
      return l && o.alternate === null && (o.flags |= 67108866), o;
    }
    function i(o, d, r, _) {
      return d === null || d.tag !== 6
        ? ((d = Ec(r, o.mode, _)), (d.return = o), d)
        : ((d = e(d, r)), (d.return = o), d);
    }
    function f(o, d, r, _) {
      var D = r.type;
      return D === ql
        ? g(o, d, r.props.children, _, r.key)
        : d !== null &&
          (d.elementType === D ||
            (typeof D == "object" &&
              D !== null &&
              D.$$typeof === Kl &&
              od(D) === d.type))
        ? ((d = e(d, r.props)), le(d, r), (d.return = o), d)
        : ((d = Ve(r.type, r.key, r.props, null, o.mode, _)),
          le(d, r),
          (d.return = o),
          d);
    }
    function h(o, d, r, _) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== r.containerInfo ||
        d.stateNode.implementation !== r.implementation
        ? ((d = Ac(r, o.mode, _)), (d.return = o), d)
        : ((d = e(d, r.children || [])), (d.return = o), d);
    }
    function g(o, d, r, _, D) {
      return d === null || d.tag !== 7
        ? ((d = Aa(r, o.mode, _, D)), (d.return = o), d)
        : ((d = e(d, r)), (d.return = o), d);
    }
    function T(o, d, r) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = Ec("" + d, o.mode, r)), (d.return = o), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nl:
            return (
              (r = Ve(d.type, d.key, d.props, null, o.mode, r)),
              le(r, d),
              (r.return = o),
              r
            );
          case jl:
            return (d = Ac(d, o.mode, r)), (d.return = o), d;
          case Kl:
            var _ = d._init;
            return (d = _(d._payload)), T(o, d, r);
        }
        if (Nl(d) || Ul(d))
          return (d = Aa(d, o.mode, r, null)), (d.return = o), d;
        if (typeof d.then == "function") return T(o, cn(d), r);
        if (d.$$typeof === Dl) return T(o, we(o, d), r);
        fn(o, d);
      }
      return null;
    }
    function v(o, d, r, _) {
      var D = d !== null ? d.key : null;
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return D !== null ? null : i(o, d, "" + r, _);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case nl:
            return r.key === D ? f(o, d, r, _) : null;
          case jl:
            return r.key === D ? h(o, d, r, _) : null;
          case Kl:
            return (D = r._init), (r = D(r._payload)), v(o, d, r, _);
        }
        if (Nl(r) || Ul(r)) return D !== null ? null : g(o, d, r, _, null);
        if (typeof r.then == "function") return v(o, d, cn(r), _);
        if (r.$$typeof === Dl) return v(o, d, we(o, r), _);
        fn(o, r);
      }
      return null;
    }
    function y(o, d, r, _, D) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return (o = o.get(r) || null), i(d, o, "" + _, D);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case nl:
            return (
              (o = o.get(_.key === null ? r : _.key) || null), f(d, o, _, D)
            );
          case jl:
            return (
              (o = o.get(_.key === null ? r : _.key) || null), h(d, o, _, D)
            );
          case Kl:
            var Z = _._init;
            return (_ = Z(_._payload)), y(o, d, r, _, D);
        }
        if (Nl(_) || Ul(_)) return (o = o.get(r) || null), g(d, o, _, D, null);
        if (typeof _.then == "function") return y(o, d, r, cn(_), D);
        if (_.$$typeof === Dl) return y(o, d, r, we(d, _), D);
        fn(d, _);
      }
      return null;
    }
    function B(o, d, r, _) {
      for (
        var D = null, Z = null, U = d, j = (d = 0), Al = null;
        U !== null && j < r.length;
        j++
      ) {
        U.index > j ? ((Al = U), (U = null)) : (Al = U.sibling);
        var $ = v(o, U, r[j], _);
        if ($ === null) {
          U === null && (U = Al);
          break;
        }
        l && U && $.alternate === null && t(o, U),
          (d = n($, d, j)),
          Z === null ? (D = $) : (Z.sibling = $),
          (Z = $),
          (U = Al);
      }
      if (j === r.length) return a(o, U), k && pa(o, j), D;
      if (U === null) {
        for (; j < r.length; j++)
          (U = T(o, r[j], _)),
            U !== null &&
              ((d = n(U, d, j)),
              Z === null ? (D = U) : (Z.sibling = U),
              (Z = U));
        return k && pa(o, j), D;
      }
      for (U = u(U); j < r.length; j++)
        (Al = y(U, o, j, r[j], _)),
          Al !== null &&
            (l &&
              Al.alternate !== null &&
              U.delete(Al.key === null ? j : Al.key),
            (d = n(Al, d, j)),
            Z === null ? (D = Al) : (Z.sibling = Al),
            (Z = Al));
      return (
        l &&
          U.forEach(function (va) {
            return t(o, va);
          }),
        k && pa(o, j),
        D
      );
    }
    function H(o, d, r, _) {
      if (r == null) throw Error(m(151));
      for (
        var D = null, Z = null, U = d, j = (d = 0), Al = null, $ = r.next();
        U !== null && !$.done;
        j++, $ = r.next()
      ) {
        U.index > j ? ((Al = U), (U = null)) : (Al = U.sibling);
        var va = v(o, U, $.value, _);
        if (va === null) {
          U === null && (U = Al);
          break;
        }
        l && U && va.alternate === null && t(o, U),
          (d = n(va, d, j)),
          Z === null ? (D = va) : (Z.sibling = va),
          (Z = va),
          (U = Al);
      }
      if ($.done) return a(o, U), k && pa(o, j), D;
      if (U === null) {
        for (; !$.done; j++, $ = r.next())
          ($ = T(o, $.value, _)),
            $ !== null &&
              ((d = n($, d, j)),
              Z === null ? (D = $) : (Z.sibling = $),
              (Z = $));
        return k && pa(o, j), D;
      }
      for (U = u(U); !$.done; j++, $ = r.next())
        ($ = y(U, o, j, $.value, _)),
          $ !== null &&
            (l && $.alternate !== null && U.delete($.key === null ? j : $.key),
            (d = n($, d, j)),
            Z === null ? (D = $) : (Z.sibling = $),
            (Z = $));
      return (
        l &&
          U.forEach(function (jh) {
            return t(o, jh);
          }),
        k && pa(o, j),
        D
      );
    }
    function al(o, d, r, _) {
      if (
        (typeof r == "object" &&
          r !== null &&
          r.type === ql &&
          r.key === null &&
          (r = r.props.children),
        typeof r == "object" && r !== null)
      ) {
        switch (r.$$typeof) {
          case nl:
            l: {
              for (var D = r.key; d !== null; ) {
                if (d.key === D) {
                  if (((D = r.type), D === ql)) {
                    if (d.tag === 7) {
                      a(o, d.sibling),
                        (_ = e(d, r.props.children)),
                        (_.return = o),
                        (o = _);
                      break l;
                    }
                  } else if (
                    d.elementType === D ||
                    (typeof D == "object" &&
                      D !== null &&
                      D.$$typeof === Kl &&
                      od(D) === d.type)
                  ) {
                    a(o, d.sibling),
                      (_ = e(d, r.props)),
                      le(_, r),
                      (_.return = o),
                      (o = _);
                    break l;
                  }
                  a(o, d);
                  break;
                } else t(o, d);
                d = d.sibling;
              }
              r.type === ql
                ? ((_ = Aa(r.props.children, o.mode, _, r.key)),
                  (_.return = o),
                  (o = _))
                : ((_ = Ve(r.type, r.key, r.props, null, o.mode, _)),
                  le(_, r),
                  (_.return = o),
                  (o = _));
            }
            return c(o);
          case jl:
            l: {
              for (D = r.key; d !== null; ) {
                if (d.key === D)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === r.containerInfo &&
                    d.stateNode.implementation === r.implementation
                  ) {
                    a(o, d.sibling),
                      (_ = e(d, r.children || [])),
                      (_.return = o),
                      (o = _);
                    break l;
                  } else {
                    a(o, d);
                    break;
                  }
                else t(o, d);
                d = d.sibling;
              }
              (_ = Ac(r, o.mode, _)), (_.return = o), (o = _);
            }
            return c(o);
          case Kl:
            return (D = r._init), (r = D(r._payload)), al(o, d, r, _);
        }
        if (Nl(r)) return B(o, d, r, _);
        if (Ul(r)) {
          if (((D = Ul(r)), typeof D != "function")) throw Error(m(150));
          return (r = D.call(r)), H(o, d, r, _);
        }
        if (typeof r.then == "function") return al(o, d, cn(r), _);
        if (r.$$typeof === Dl) return al(o, d, we(o, r), _);
        fn(o, r);
      }
      return (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
        ? ((r = "" + r),
          d !== null && d.tag === 6
            ? (a(o, d.sibling), (_ = e(d, r)), (_.return = o), (o = _))
            : (a(o, d), (_ = Ec(r, o.mode, _)), (_.return = o), (o = _)),
          c(o))
        : a(o, d);
    }
    return function (o, d, r, _) {
      try {
        Pu = 0;
        var D = al(o, d, r, _);
        return (su = null), D;
      } catch (U) {
        if (U === Lu || U === $e) throw U;
        var Z = kl(29, U, null, o.mode);
        return (Z.lanes = _), (Z.return = o), Z;
      } finally {
      }
    };
  }
  var du = rd(!0),
    hd = rd(!1),
    st = A(null),
    Tt = null;
  function Pt(l) {
    var t = l.alternate;
    z(bl, bl.current & 1),
      z(st, l),
      Tt === null &&
        (t === null || nu.current !== null || t.memoizedState !== null) &&
        (Tt = l);
  }
  function vd(l) {
    if (l.tag === 22) {
      if ((z(bl, bl.current), z(st, l), Tt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Tt = l);
      }
    } else la();
  }
  function la() {
    z(bl, bl.current), z(st, st.current);
  }
  function Bt(l) {
    M(st), Tt === l && (Tt = null), M(bl);
  }
  var bl = A(0);
  function sn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Ki(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function ai(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : R({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var ui = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = lt(),
        e = kt(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = Ft(l, e, u)),
        t !== null && (tt(t, l, u), Ju(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = lt(),
        e = kt(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = Ft(l, e, u)),
        t !== null && (tt(t, l, u), Ju(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = lt(),
        u = kt(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Ft(l, u, a)),
        t !== null && (tt(t, l, a), Ju(t, l, a));
    },
  };
  function yd(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Bu(a, u) || !Bu(e, n)
        : !0
    );
  }
  function md(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && ui.enqueueReplaceState(t, t.state, null);
  }
  function xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = R({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var dn =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function gd(l) {
    dn(l);
  }
  function Sd(l) {
    console.error(l);
  }
  function bd(l) {
    dn(l);
  }
  function on(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function _d(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function ei(l, t, a) {
    return (
      (a = kt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        on(l, t);
      }),
      a
    );
  }
  function Td(l) {
    return (l = kt(l)), (l.tag = 3), l;
  }
  function Ed(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          _d(t, a, u);
        });
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        _d(t, a, u),
          typeof e != "function" &&
            (ca === null ? (ca = new Set([this])) : ca.add(this));
        var i = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function j0(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Qu(t, a, e, !0),
        (a = st.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Tt === null ? Di() : a.alternate === null && hl === 0 && (hl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Hc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Ni(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Hc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Ni(l, u, e)),
              !1
            );
        }
        throw Error(m(435, a.tag));
      }
      return Ni(l, u, e), Di(), !1;
    }
    if (k)
      return (
        (t = st.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Oc && ((l = Error(m(422), { cause: u })), Xu(nt(l, a))))
          : (u !== Oc && ((t = Error(m(423), { cause: u })), Xu(nt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = nt(u, a)),
            (e = ei(l.stateNode, u, e)),
            Bc(l, e),
            hl !== 4 && (hl = 2)),
        !1
      );
    var n = Error(m(520), { cause: u });
    if (
      ((n = nt(n, a)),
      ie === null ? (ie = [n]) : ie.push(n),
      hl !== 4 && (hl = 2),
      t === null)
    )
      return !0;
    (u = nt(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = ei(a.stateNode, u, l)),
            Bc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ca === null || !ca.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = Td(e)),
              Ed(e, l, a, u),
              Bc(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ad = Error(m(461)),
    Tl = !1;
  function pl(l, t, a, u) {
    t.child = l === null ? hd(t, null, a, u) : du(t, l.child, a, u);
  }
  function zd(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var i in u) i !== "ref" && (c[i] = u[i]);
    } else c = u;
    return (
      Ua(t),
      (u = Qc(l, t, a, c, n, e)),
      (i = Zc()),
      l !== null && !Tl
        ? (Vc(l, t, e), Yt(l, t, e))
        : (k && i && zc(t), (t.flags |= 1), pl(l, t, u, e), t.child)
    );
  }
  function pd(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Tc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Od(l, t, n, u, e))
        : ((l = Ve(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !ri(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Bu), a(c, u) && l.ref === t.ref)
      )
        return Yt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Nt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Od(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Bu(n, u) && l.ref === t.ref)
        if (((Tl = !1), (t.pendingProps = u = n), ri(l, e)))
          (l.flags & 131072) !== 0 && (Tl = !0);
        else return (t.lanes = l.lanes), Yt(l, t, e);
    }
    return ni(l, t, a, u, e);
  }
  function Md(l, t, a) {
    var u = t.pendingProps,
      e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((u = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~u;
        } else (t.childLanes = 0), (t.child = null);
        return Dd(l, t, u, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && We(t, n !== null ? n.cachePool : null),
          n !== null ? Os(t, n) : Gc(),
          vd(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Dd(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (We(t, n.cachePool), Os(t, n), la(), (t.memoizedState = null))
        : (l !== null && We(t, null), Gc(), la());
    return pl(l, t, e, a), t.child;
  }
  function Dd(l, t, a, u) {
    var e = xc();
    return (
      (e = e === null ? null : { parent: Sl._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && We(t, null),
      Gc(),
      vd(t),
      l !== null && Qu(l, t, u, !0),
      null
    );
  }
  function rn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(m(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ni(l, t, a, u, e) {
    return (
      Ua(t),
      (a = Qc(l, t, a, u, void 0, e)),
      (u = Zc()),
      l !== null && !Tl
        ? (Vc(l, t, e), Yt(l, t, e))
        : (k && u && zc(t), (t.flags |= 1), pl(l, t, a, e), t.child)
    );
  }
  function Ud(l, t, a, u, e, n) {
    return (
      Ua(t),
      (t.updateQueue = null),
      (a = Ds(t, u, a, e)),
      Ms(l),
      (u = Zc()),
      l !== null && !Tl
        ? (Vc(l, t, n), Yt(l, t, n))
        : (k && u && zc(t), (t.flags |= 1), pl(l, t, a, n), t.child)
    );
  }
  function Nd(l, t, a, u, e) {
    if ((Ua(t), t.stateNode === null)) {
      var n = lu,
        c = a.contextType;
      typeof c == "object" && c !== null && (n = xl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ui),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        jc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? xl(c) : lu),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (ai(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && ui.enqueueReplaceState(n, n.state, null),
          Wu(t, u, n, e),
          wu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps,
        f = xa(a, i);
      n.props = f;
      var h = n.context,
        g = a.contextType;
      (c = lu), typeof g == "object" && g !== null && (c = xl(g));
      var T = a.getDerivedStateFromProps;
      (g =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || h !== c) && md(t, n, u, c)),
        ($t = !1);
      var v = t.memoizedState;
      (n.state = v),
        Wu(t, u, n, e),
        wu(),
        (h = t.memoizedState),
        i || v !== h || $t
          ? (typeof T == "function" && (ai(t, a, T, u), (h = t.memoizedState)),
            (f = $t || yd(t, a, f, u, v, h, c))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = h)),
            (n.props = u),
            (n.state = h),
            (n.context = c),
            (u = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        qc(l, t),
        (c = t.memoizedProps),
        (g = xa(a, c)),
        (n.props = g),
        (T = t.pendingProps),
        (v = n.context),
        (h = a.contextType),
        (f = lu),
        typeof h == "object" && h !== null && (f = xl(h)),
        (i = a.getDerivedStateFromProps),
        (h =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== T || v !== f) && md(t, n, u, f)),
        ($t = !1),
        (v = t.memoizedState),
        (n.state = v),
        Wu(t, u, n, e),
        wu();
      var y = t.memoizedState;
      c !== T ||
      v !== y ||
      $t ||
      (l !== null && l.dependencies !== null && Je(l.dependencies))
        ? (typeof i == "function" && (ai(t, a, i, u), (y = t.memoizedState)),
          (g =
            $t ||
            yd(t, a, g, u, v, y, f) ||
            (l !== null && l.dependencies !== null && Je(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, y, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, y, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = y)),
          (n.props = u),
          (n.state = y),
          (n.context = f),
          (u = g))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      rn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = du(t, l.child, null, e)),
              (t.child = du(t, null, a, e)))
            : pl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Yt(l, t, e)),
      l
    );
  }
  function Rd(l, t, a, u) {
    return Cu(), (t.flags |= 256), pl(l, t, a, u), t.child;
  }
  var ci = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ii(l) {
    return { baseLanes: l, cachePool: Ss() };
  }
  function fi(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= dt), l;
  }
  function xd(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (k) {
        if ((e ? Pt(t) : la(), k)) {
          var i = rl,
            f;
          if ((f = i)) {
            l: {
              for (f = i, i = _t; f.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((f = mt(f.nextSibling)), f === null)) {
                  i = null;
                  break l;
                }
              }
              i = f;
            }
            i !== null
              ? ((t.memoizedState = {
                  dehydrated: i,
                  treeContext: za !== null ? { id: Rt, overflow: xt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = kl(18, null, null, 0)),
                (f.stateNode = i),
                (f.return = t),
                (t.child = f),
                (Bl = t),
                (rl = null),
                (f = !0))
              : (f = !1);
          }
          f || Ma(t);
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return Ki(i) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Bt(t);
      }
      return (
        (i = u.children),
        (u = u.fallback),
        e
          ? (la(),
            (e = t.mode),
            (i = hn({ mode: "hidden", children: i }, e)),
            (u = Aa(u, e, a, null)),
            (i.return = t),
            (u.return = t),
            (i.sibling = u),
            (t.child = i),
            (e = t.child),
            (e.memoizedState = ii(a)),
            (e.childLanes = fi(l, c, a)),
            (t.memoizedState = ci),
            u)
          : (Pt(t), si(t, i))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((i = f.dehydrated), i !== null))
    ) {
      if (n)
        t.flags & 256
          ? (Pt(t), (t.flags &= -257), (t = di(l, t, a)))
          : t.memoizedState !== null
          ? (la(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (la(),
            (e = u.fallback),
            (i = t.mode),
            (u = hn({ mode: "visible", children: u.children }, i)),
            (e = Aa(e, i, a, null)),
            (e.flags |= 2),
            (u.return = t),
            (e.return = t),
            (u.sibling = e),
            (t.child = u),
            du(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = ii(a)),
            (u.childLanes = fi(l, c, a)),
            (t.memoizedState = ci),
            (t = e));
      else if ((Pt(t), Ki(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var h = c.dgst;
        (c = h),
          (u = Error(m(419))),
          (u.stack = ""),
          (u.digest = c),
          Xu({ value: u, source: null, stack: null }),
          (t = di(l, t, a));
      } else if (
        (Tl || Qu(l, t, a, !1), (c = (a & l.childLanes) !== 0), Tl || c)
      ) {
        if (
          ((c = cl),
          c !== null &&
            ((u = a & -a),
            (u = (u & 42) !== 0 ? 1 : Jn(u)),
            (u = (u & (c.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== f.retryLane))
        )
          throw ((f.retryLane = u), Pa(l, u), tt(c, l, u), Ad);
        i.data === "$?" || Di(), (t = di(l, t, a));
      } else
        i.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (rl = mt(i.nextSibling)),
            (Bl = t),
            (k = !0),
            (Oa = null),
            (_t = !1),
            l !== null &&
              ((it[ft++] = Rt),
              (it[ft++] = xt),
              (it[ft++] = za),
              (Rt = l.id),
              (xt = l.overflow),
              (za = t)),
            (t = si(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (la(),
        (e = u.fallback),
        (i = t.mode),
        (f = l.child),
        (h = f.sibling),
        (u = Nt(f, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = f.subtreeFlags & 65011712),
        h !== null ? (e = Nt(h, e)) : ((e = Aa(e, i, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = ii(a))
          : ((f = i.cachePool),
            f !== null
              ? ((h = Sl._currentValue),
                (f = f.parent !== h ? { parent: h, pool: h } : f))
              : (f = Ss()),
            (i = { baseLanes: i.baseLanes | a, cachePool: f })),
        (e.memoizedState = i),
        (e.childLanes = fi(l, c, a)),
        (t.memoizedState = ci),
        u)
      : (Pt(t),
        (a = l.child),
        (l = a.sibling),
        (a = Nt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function si(l, t) {
    return (
      (t = hn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function hn(l, t) {
    return (
      (l = kl(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function di(l, t, a) {
    return (
      du(t, l.child, null, a),
      (l = si(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Hd(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Dc(l.return, t, a);
  }
  function oi(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = a),
        (n.tailMode = e));
  }
  function jd(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((pl(l, t, u.children, a), (u = bl.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Hd(l, a, t);
          else if (l.tag === 19) Hd(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      u &= 1;
    }
    switch ((z(bl, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && sn(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          oi(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && sn(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        oi(t, !0, a, null, n);
        break;
      case "together":
        oi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (na |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Qu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Nt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Nt(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function ri(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Je(l)));
  }
  function q0(l, t, a) {
    switch (t.tag) {
      case 3:
        fl(t, t.stateNode.containerInfo),
          Wt(t, Sl, l.memoizedState.cache),
          Cu();
        break;
      case 27:
      case 5:
        Qn(t);
        break;
      case 4:
        fl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Wt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (Pt(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? xd(l, t, a)
            : (Pt(t), (l = Yt(l, t, a)), l !== null ? l.sibling : null);
        Pt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (Qu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return jd(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          z(bl, bl.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Md(l, t, a);
      case 24:
        Wt(t, Sl, l.memoizedState.cache);
    }
    return Yt(l, t, a);
  }
  function qd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Tl = !0;
      else {
        if (!ri(l, a) && (t.flags & 128) === 0) return (Tl = !1), q0(l, t, a);
        Tl = (l.flags & 131072) !== 0;
      }
    else (Tl = !1), k && (t.flags & 1048576) !== 0 && os(t, Ke, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            Tc(u)
              ? ((l = xa(u, l)), (t.tag = 1), (t = Nd(null, t, u, l, a)))
              : ((t.tag = 0), (t = ni(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === ht)) {
                (t.tag = 11), (t = zd(null, t, u, l, a));
                break l;
              } else if (e === Ll) {
                (t.tag = 14), (t = pd(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = ga(u) || u), Error(m(306, t, "")));
          }
        }
        return t;
      case 0:
        return ni(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = xa(u, t.pendingProps)), Nd(l, t, u, e, a);
      case 3:
        l: {
          if ((fl(t, t.stateNode.containerInfo), l === null))
            throw Error(m(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), qc(l, t), Wu(t, u, null, a);
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            Wt(t, Sl, u),
            u !== n.cache && Uc(t, [Sl], a, !0),
            wu(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Rd(l, t, u, a);
              break l;
            } else if (u !== e) {
              (e = nt(Error(m(424)), t)), Xu(e), (t = Rd(l, t, u, a));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                rl = mt(l.firstChild),
                  Bl = t,
                  k = !0,
                  Oa = null,
                  _t = !0,
                  a = hd(t, null, u, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Cu(), u === e)) {
              t = Yt(l, t, a);
              break l;
            }
            pl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          rn(l, t),
          l === null
            ? (a = Xo(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : k ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Mn(C.current).createElement(a)),
                (u[Rl] = t),
                (u[Gl] = l),
                Ml(u, a, l),
                _l(u),
                (t.stateNode = u))
            : (t.memoizedState = Xo(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Qn(t),
          l === null &&
            k &&
            ((u = t.stateNode = Yo(t.type, t.pendingProps, C.current)),
            (Bl = t),
            (_t = !0),
            (e = rl),
            sa(t.type) ? ((Ji = e), (rl = mt(u.firstChild))) : (rl = e)),
          pl(l, t, t.pendingProps.children, a),
          rn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            k &&
            ((e = u = rl) &&
              ((u = sh(u, t.type, t.pendingProps, _t)),
              u !== null
                ? ((t.stateNode = u),
                  (Bl = t),
                  (rl = mt(u.firstChild)),
                  (_t = !1),
                  (e = !0))
                : (e = !1)),
            e || Ma(t)),
          Qn(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Zi(e, n) ? (u = null) : c !== null && Zi(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Qc(l, t, M0, null, null, a)), (me._currentValue = e)),
          rn(l, t),
          pl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            k &&
            ((l = a = rl) &&
              ((a = dh(a, t.pendingProps, _t)),
              a !== null
                ? ((t.stateNode = a), (Bl = t), (rl = null), (l = !0))
                : (l = !1)),
            l || Ma(t)),
          null
        );
      case 13:
        return xd(l, t, a);
      case 4:
        return (
          fl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = du(t, null, u, a)) : pl(l, t, u, a),
          t.child
        );
      case 11:
        return zd(l, t, t.type, t.pendingProps, a);
      case 7:
        return pl(l, t, t.pendingProps, a), t.child;
      case 8:
        return pl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return pl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          Wt(t, t.type, u.value),
          pl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ua(t),
          (e = xl(e)),
          (u = u(e)),
          (t.flags |= 1),
          pl(l, t, u, a),
          t.child
        );
      case 14:
        return pd(l, t, t.type, t.pendingProps, a);
      case 15:
        return Od(l, t, t.type, t.pendingProps, a);
      case 19:
        return jd(l, t, a);
      case 31:
        return (
          (u = t.pendingProps),
          (a = t.mode),
          (u = { mode: u.mode, children: u.children }),
          l === null
            ? ((a = hn(u, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Nt(l.child, u)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return Md(l, t, a);
      case 24:
        return (
          Ua(t),
          (u = xl(Sl)),
          l === null
            ? ((e = xc()),
              e === null &&
                ((e = cl),
                (n = Nc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              jc(t),
              Wt(t, Sl, e))
            : ((l.lanes & a) !== 0 && (qc(l, t), Wu(t, null, null, a), wu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Wt(t, Sl, u))
                : ((u = n.cache),
                  Wt(t, Sl, u),
                  u !== e.cache && Uc(t, [Sl], a, !0))),
          pl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function Bd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Ko(t))) {
      if (
        ((t = st.current),
        t !== null &&
          ((K & 4194048) === K
            ? Tt !== null
            : ((K & 62914560) !== K && (K & 536870912) === 0) || t !== Tt))
      )
        throw ((Ku = Hc), bs);
      l.flags |= 8192;
    }
  }
  function vn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? vf() : 536870912), (l.lanes |= t), (vu |= t));
  }
  function te(l, t) {
    if (!k)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function ol(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function B0(l, t, a) {
    var u = t.pendingProps;
    switch ((pc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ol(t), null;
      case 1:
        return ol(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          jt(Sl),
          Lt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Gu(t)
              ? Gt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), vs())),
          ol(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Gt(t),
              a !== null ? (ol(t), Bd(t, a)) : (ol(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Gt(t), ol(t), Bd(t, a))
              : (ol(t), (t.flags &= -16777217))
            : (l.memoizedProps !== u && Gt(t), ol(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        ze(t), (a = C.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(m(166));
            return ol(t), null;
          }
          (l = x.current),
            Gu(t) ? rs(t) : ((l = Yo(e, u, a)), (t.stateNode = l), Gt(t));
        }
        return ol(t), null;
      case 5:
        if ((ze(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(m(166));
            return ol(t), null;
          }
          if (((l = x.current), Gu(t))) rs(t);
          else {
            switch (((e = Mn(C.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof u.is == "string"
                        ? e.createElement("select", { is: u.is })
                        : e.createElement("select")),
                      u.multiple
                        ? (l.multiple = !0)
                        : u.size && (l.size = u.size);
                    break;
                  default:
                    l =
                      typeof u.is == "string"
                        ? e.createElement(a, { is: u.is })
                        : e.createElement(a);
                }
            }
            (l[Rl] = t), (l[Gl] = u);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Ml(l, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Gt(t);
          }
        }
        return ol(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Gt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(m(166));
          if (((l = C.current), Gu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Bl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[Rl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                No(l.nodeValue, a)
              )),
              l || Ma(t);
          } else (l = Mn(l).createTextNode(u)), (l[Rl] = t), (t.stateNode = l);
        }
        return ol(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = Gu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(m(317));
              e[Rl] = t;
            } else
              Cu(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ol(t), (e = !1);
          } else
            (e = vs()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        if ((Bt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (u = t.child),
            (e = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          vn(t, t.updateQueue),
          ol(t),
          null
        );
      case 4:
        return Lt(), l === null && Yi(t.stateNode.containerInfo), ol(t), null;
      case 10:
        return jt(t.type), ol(t), null;
      case 19:
        if ((M(bl), (e = t.memoizedState), e === null)) return ol(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) te(e, !1);
          else {
            if (hl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = sn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      te(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      vn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    ds(a, l), (a = a.sibling);
                  return z(bl, (bl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              bt() > gn &&
              ((t.flags |= 128), (u = !0), te(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = sn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                vn(t, l),
                te(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !k)
              )
                return ol(t), null;
            } else
              2 * bt() - e.renderingStartTime > gn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), te(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = bt()),
            (t.sibling = null),
            (l = bl.current),
            z(bl, u ? (l & 1) | 2 : l & 1),
            t)
          : (ol(t), null);
      case 22:
      case 23:
        return (
          Bt(t),
          Cc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ol(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ol(t),
          (a = t.updateQueue),
          a !== null && vn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && M(Na),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          jt(Sl),
          ol(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Y0(l, t) {
    switch ((pc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          jt(Sl),
          Lt(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ze(t), null;
      case 13:
        if (
          (Bt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Cu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return M(bl), null;
      case 4:
        return Lt(), null;
      case 10:
        return jt(t.type), null;
      case 22:
      case 23:
        return (
          Bt(t),
          Cc(),
          l !== null && M(Na),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return jt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yd(l, t) {
    switch ((pc(t), t.tag)) {
      case 3:
        jt(Sl), Lt();
        break;
      case 26:
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        Lt();
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        M(bl);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        Bt(t), Cc(), l !== null && M(Na);
        break;
      case 24:
        jt(Sl);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            (u = n()), (c.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (i) {
      el(t, t.return, i);
    }
  }
  function ta(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              i = c.destroy;
            if (i !== void 0) {
              (c.destroy = void 0), (e = t);
              var f = a,
                h = i;
              try {
                h();
              } catch (g) {
                el(e, f, g);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      el(t, t.return, g);
    }
  }
  function Gd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        ps(t, a);
      } catch (u) {
        el(l, l.return, u);
      }
    }
  }
  function Cd(l, t, a) {
    (a.props = xa(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      el(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      el(l, t, e);
    }
  }
  function Et(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          el(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          el(l, t, e);
        }
      else a.current = null;
  }
  function Xd(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function hi(l, t, a) {
    try {
      var u = l.stateNode;
      eh(u, l.type, a, t), (u[Gl] = t);
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function Qd(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && sa(l.type)) ||
      l.tag === 4
    );
  }
  function vi(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Qd(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && sa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function yi(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = On));
    else if (
      u !== 4 &&
      (u === 27 && sa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (yi(l, t, a), l = l.sibling; l !== null; )
        yi(l, t, a), (l = l.sibling);
  }
  function yn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      u !== 4 &&
      (u === 27 && sa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (yn(l, t, a), l = l.sibling; l !== null; )
        yn(l, t, a), (l = l.sibling);
  }
  function Zd(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ml(t, u, a), (t[Rl] = l), (t[Gl] = a);
    } catch (n) {
      el(l, l.return, n);
    }
  }
  var Ct = !1,
    yl = !1,
    mi = !1,
    Vd = typeof WeakSet == "function" ? WeakSet : Set,
    El = null;
  function G0(l, t) {
    if (((l = l.containerInfo), (Xi = Hn), (l = ls(l)), vc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              i = -1,
              f = -1,
              h = 0,
              g = 0,
              T = l,
              v = null;
            t: for (;;) {
              for (
                var y;
                T !== a || (e !== 0 && T.nodeType !== 3) || (i = c + e),
                  T !== n || (u !== 0 && T.nodeType !== 3) || (f = c + u),
                  T.nodeType === 3 && (c += T.nodeValue.length),
                  (y = T.firstChild) !== null;

              )
                (v = T), (T = y);
              for (;;) {
                if (T === l) break t;
                if (
                  (v === a && ++h === e && (i = c),
                  v === n && ++g === u && (f = c),
                  (y = T.nextSibling) !== null)
                )
                  break;
                (T = v), (v = T.parentNode);
              }
              T = y;
            }
            a = i === -1 || f === -1 ? null : { start: i, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Qi = { focusedElem: l, selectionRange: a }, Hn = !1, El = t;
      El !== null;

    )
      if (
        ((t = El), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (El = l);
      else
        for (; El !== null; ) {
          switch (((t = El), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var B = xa(a.type, e, a.elementType === a.type);
                  (l = u.getSnapshotBeforeUpdate(B, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (H) {
                  el(a, a.return, H);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Li(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Li(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (El = l);
            break;
          }
          El = t.return;
        }
  }
  function Ld(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        aa(l, a), u & 4 && ae(5, a);
        break;
      case 1:
        if ((aa(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              el(a, a.return, c);
            }
          else {
            var e = xa(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              el(a, a.return, c);
            }
          }
        u & 64 && Gd(a), u & 512 && ue(a, a.return);
        break;
      case 3:
        if ((aa(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            ps(l, t);
          } catch (c) {
            el(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Zd(a);
      case 26:
      case 5:
        aa(l, a), t === null && u & 4 && Xd(a), u & 512 && ue(a, a.return);
        break;
      case 12:
        aa(l, a);
        break;
      case 13:
        aa(l, a),
          u & 4 && wd(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = w0.bind(null, a)), oh(l, a))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Ct), !u)) {
          (t = (t !== null && t.memoizedState !== null) || yl), (e = Ct);
          var n = yl;
          (Ct = u),
            (yl = t) && !n ? ua(l, a, (a.subtreeFlags & 8772) !== 0) : aa(l, a),
            (Ct = e),
            (yl = n);
        }
        break;
      case 30:
        break;
      default:
        aa(l, a);
    }
  }
  function Kd(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Kd(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && $n(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var sl = null,
    Ql = !1;
  function Xt(l, t, a) {
    for (a = a.child; a !== null; ) Jd(l, t, a), (a = a.sibling);
  }
  function Jd(l, t, a) {
    if (wl && typeof wl.onCommitFiberUnmount == "function")
      try {
        wl.onCommitFiberUnmount(zu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        yl || Et(a, t),
          Xt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        yl || Et(a, t);
        var u = sl,
          e = Ql;
        sa(a.type) && ((sl = a.stateNode), (Ql = !1)),
          Xt(l, t, a),
          re(a.stateNode),
          (sl = u),
          (Ql = e);
        break;
      case 5:
        yl || Et(a, t);
      case 6:
        if (
          ((u = sl),
          (e = Ql),
          (sl = null),
          Xt(l, t, a),
          (sl = u),
          (Ql = e),
          sl !== null)
        )
          if (Ql)
            try {
              (sl.nodeType === 9
                ? sl.body
                : sl.nodeName === "HTML"
                ? sl.ownerDocument.body
                : sl
              ).removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
          else
            try {
              sl.removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
        break;
      case 18:
        sl !== null &&
          (Ql
            ? ((l = sl),
              qo(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              _e(l))
            : qo(sl, a.stateNode));
        break;
      case 4:
        (u = sl),
          (e = Ql),
          (sl = a.stateNode.containerInfo),
          (Ql = !0),
          Xt(l, t, a),
          (sl = u),
          (Ql = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yl || ta(2, a, t), yl || ta(4, a, t), Xt(l, t, a);
        break;
      case 1:
        yl ||
          (Et(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Cd(a, t, u)),
          Xt(l, t, a);
        break;
      case 21:
        Xt(l, t, a);
        break;
      case 22:
        (yl = (u = yl) || a.memoizedState !== null), Xt(l, t, a), (yl = u);
        break;
      default:
        Xt(l, t, a);
    }
  }
  function wd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        _e(l);
      } catch (a) {
        el(t, t.return, a);
      }
  }
  function C0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Vd()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Vd()),
          t
        );
      default:
        throw Error(m(435, l.tag));
    }
  }
  function gi(l, t) {
    var a = C0(l);
    t.forEach(function (u) {
      var e = W0.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function Fl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (sa(i.type)) {
                (sl = i.stateNode), (Ql = !1);
                break l;
              }
              break;
            case 5:
              (sl = i.stateNode), (Ql = !1);
              break l;
            case 3:
            case 4:
              (sl = i.stateNode.containerInfo), (Ql = !0);
              break l;
          }
          i = i.return;
        }
        if (sl === null) throw Error(m(160));
        Jd(n, c, e),
          (sl = null),
          (Ql = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Wd(t, l), (t = t.sibling);
  }
  var yt = null;
  function Wd(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l),
          Il(l),
          u & 4 && (ta(3, l, l.return), ae(3, l), ta(5, l, l.return));
        break;
      case 1:
        Fl(t, l),
          Il(l),
          u & 512 && (yl || a === null || Et(a, a.return)),
          u & 64 &&
            Ct &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = yt;
        if (
          (Fl(t, l),
          Il(l),
          u & 512 && (yl || a === null || Et(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Mu] ||
                          n[Rl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Ml(n, u, a),
                        (n[Rl] = l),
                        _l(n),
                        (u = n);
                      break l;
                    case "link":
                      var c = Vo("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Ml(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = Vo("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Ml(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, u));
                  }
                  (n[Rl] = l), _l(n), (u = n);
                }
                l.stateNode = u;
              } else Lo(e, l.type, l.stateNode);
            else l.stateNode = Zo(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Lo(e, l.type, l.stateNode)
                  : Zo(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                hi(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Fl(t, l),
          Il(l),
          u & 512 && (yl || a === null || Et(a, a.return)),
          a !== null && u & 4 && hi(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Fl(t, l),
          Il(l),
          u & 512 && (yl || a === null || Et(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Ja(e, "");
          } catch (y) {
            el(l, l.return, y);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), hi(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (mi = !0);
        break;
      case 6:
        if ((Fl(t, l), Il(l), u & 4)) {
          if (l.stateNode === null) throw Error(m(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (y) {
            el(l, l.return, y);
          }
        }
        break;
      case 3:
        if (
          ((Nn = null),
          (e = yt),
          (yt = Dn(t.containerInfo)),
          Fl(t, l),
          (yt = e),
          Il(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            _e(t.containerInfo);
          } catch (y) {
            el(l, l.return, y);
          }
        mi && ((mi = !1), $d(l));
        break;
      case 4:
        (u = yt),
          (yt = Dn(l.stateNode.containerInfo)),
          Fl(t, l),
          Il(l),
          (yt = u);
        break;
      case 12:
        Fl(t, l), Il(l);
        break;
      case 13:
        Fl(t, l),
          Il(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ai = bt()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), gi(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          h = Ct,
          g = yl;
        if (
          ((Ct = h || e),
          (yl = g || f),
          Fl(t, l),
          (yl = g),
          (Ct = h),
          Il(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || f || Ct || yl || Ha(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), e))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    i = f.stateNode;
                    var T = f.memoizedProps.style,
                      v =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    i.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (y) {
                  el(f, f.return, y);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = e ? "" : f.memoizedProps;
                } catch (y) {
                  el(f, f.return, y);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), gi(l, a))));
        break;
      case 19:
        Fl(t, l),
          Il(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), gi(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Qd(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(m(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = vi(l);
            yn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Ja(c, ""), (a.flags &= -33));
            var i = vi(l);
            yn(l, i, c);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              h = vi(l);
            yi(l, h, f);
            break;
          default:
            throw Error(m(161));
        }
      } catch (g) {
        el(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function $d(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        $d(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function aa(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Ld(l, t.alternate, t), (t = t.sibling);
  }
  function Ha(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ta(4, t, t.return), Ha(t);
          break;
        case 1:
          Et(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Cd(t, t.return, a),
            Ha(t);
          break;
        case 27:
          re(t.stateNode);
        case 26:
        case 5:
          Et(t, t.return), Ha(t);
          break;
        case 22:
          t.memoizedState === null && Ha(t);
          break;
        case 30:
          Ha(t);
          break;
        default:
          Ha(t);
      }
      l = l.sibling;
    }
  }
  function ua(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(e, n, a), ae(4, n);
          break;
        case 1:
          if (
            (ua(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (h) {
              el(u, u.return, h);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var i = u.stateNode;
            try {
              var f = e.shared.hiddenCallbacks;
              if (f !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < f.length; e++)
                  zs(f[e], i);
            } catch (h) {
              el(u, u.return, h);
            }
          }
          a && c & 64 && Gd(n), ue(n, n.return);
          break;
        case 27:
          Zd(n);
        case 26:
        case 5:
          ua(e, n, a), a && u === null && c & 4 && Xd(n), ue(n, n.return);
          break;
        case 12:
          ua(e, n, a);
          break;
        case 13:
          ua(e, n, a), a && c & 4 && wd(e, n);
          break;
        case 22:
          n.memoizedState === null && ua(e, n, a), ue(n, n.return);
          break;
        case 30:
          break;
        default:
          ua(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Si(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Zu(a));
  }
  function bi(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Zu(l));
  }
  function At(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) kd(l, t, a, u), (t = t.sibling);
  }
  function kd(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, a, u), e & 2048 && ae(9, t);
        break;
      case 1:
        At(l, t, a, u);
        break;
      case 3:
        At(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Zu(l)));
        break;
      case 12:
        if (e & 2048) {
          At(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (f) {
            el(t, t.return, f);
          }
        } else At(l, t, a, u);
        break;
      case 13:
        At(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? At(l, t, a, u)
              : ee(l, t)
            : n._visibility & 2
            ? At(l, t, a, u)
            : ((n._visibility |= 2),
              ou(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && Si(c, t);
        break;
      case 24:
        At(l, t, a, u), e & 2048 && bi(t.alternate, t);
        break;
      default:
        At(l, t, a, u);
    }
  }
  function ou(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        i = a,
        f = u,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ou(n, c, i, f, e), ae(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null
            ? g._visibility & 2
              ? ou(n, c, i, f, e)
              : ee(n, c)
            : ((g._visibility |= 2), ou(n, c, i, f, e)),
            e && h & 2048 && Si(c.alternate, c);
          break;
        case 24:
          ou(n, c, i, f, e), e && h & 2048 && bi(c.alternate, c);
          break;
        default:
          ou(n, c, i, f, e);
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            ee(a, u), e & 2048 && Si(u.alternate, u);
            break;
          case 24:
            ee(a, u), e & 2048 && bi(u.alternate, u);
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function ru(l) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; ) Fd(l), (l = l.sibling);
  }
  function Fd(l) {
    switch (l.tag) {
      case 26:
        ru(l),
          l.flags & ne &&
            l.memoizedState !== null &&
            zh(yt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ru(l);
        break;
      case 3:
      case 4:
        var t = yt;
        (yt = Dn(l.stateNode.containerInfo)), ru(l), (yt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ne), (ne = 16777216), ru(l), (ne = t))
            : ru(l));
        break;
      default:
        ru(l);
    }
  }
  function Id(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ce(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (El = u), lo(u, l);
        }
      Id(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Pd(l), (l = l.sibling);
  }
  function Pd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ce(l), l.flags & 2048 && ta(9, l, l.return);
        break;
      case 3:
        ce(l);
        break;
      case 12:
        ce(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), mn(l))
          : ce(l);
        break;
      default:
        ce(l);
    }
  }
  function mn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (El = u), lo(u, l);
        }
      Id(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          ta(8, t, t.return), mn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), mn(t));
          break;
        default:
          mn(t);
      }
      l = l.sibling;
    }
  }
  function lo(l, t) {
    for (; El !== null; ) {
      var a = El;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ta(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Zu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (El = u);
      else
        l: for (a = l; El !== null; ) {
          u = El;
          var e = u.sibling,
            n = u.return;
          if ((Kd(u), u === a)) {
            El = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (El = e);
            break l;
          }
          El = n;
        }
    }
  }
  var X0 = {
      getCacheForType: function (l) {
        var t = xl(Sl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    Q0 = typeof WeakMap == "function" ? WeakMap : Map,
    I = 0,
    cl = null,
    V = null,
    K = 0,
    P = 0,
    Pl = null,
    ea = !1,
    hu = !1,
    _i = !1,
    Qt = 0,
    hl = 0,
    na = 0,
    ja = 0,
    Ti = 0,
    dt = 0,
    vu = 0,
    ie = null,
    Zl = null,
    Ei = !1,
    Ai = 0,
    gn = 1 / 0,
    Sn = null,
    ca = null,
    Ol = 0,
    ia = null,
    yu = null,
    mu = 0,
    zi = 0,
    pi = null,
    to = null,
    fe = 0,
    Oi = null;
  function lt() {
    if ((I & 2) !== 0 && K !== 0) return K & -K;
    if (S.T !== null) {
      var l = uu;
      return l !== 0 ? l : Hi();
    }
    return gf();
  }
  function ao() {
    dt === 0 && (dt = (K & 536870912) === 0 || k ? hf() : 536870912);
    var l = st.current;
    return l !== null && (l.flags |= 32), dt;
  }
  function tt(l, t, a) {
    ((l === cl && (P === 2 || P === 9)) || l.cancelPendingCommit !== null) &&
      (gu(l, 0), fa(l, K, dt, !1)),
      Ou(l, a),
      ((I & 2) === 0 || l !== cl) &&
        (l === cl && ((I & 2) === 0 && (ja |= a), hl === 4 && fa(l, K, dt, !1)),
        zt(l));
  }
  function uo(l, t, a) {
    if ((I & 6) !== 0) throw Error(m(327));
    var u = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || pu(l, t),
      e = u ? L0(l, t) : Ui(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        hu && !u && fa(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !Z0(a))) {
          (e = Ui(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              e = ie;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (gu(i, c).flags |= 256), (c = Ui(i, c, !1)), c !== 2)) {
                if (_i && !f) {
                  (i.errorRecoveryDisabledLanes |= n), (ja |= n), (e = 4);
                  break l;
                }
                (n = Zl),
                  (Zl = e),
                  n !== null && (Zl === null ? (Zl = n) : Zl.push.apply(Zl, n));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          gu(l, 0), fa(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              fa(u, t, dt, !ea);
              break l;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && ((e = Ai + 300 - bt()), 10 < e)) {
            if ((fa(u, t, dt, !ea), De(u, 0, !0) !== 0)) break l;
            u.timeoutHandle = Ho(
              eo.bind(null, u, a, Zl, Sn, Ei, t, dt, ja, vu, ea, n, 2, -0, 0),
              e
            );
            break l;
          }
          eo(u, a, Zl, Sn, Ei, t, dt, ja, vu, ea, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    zt(l);
  }
  function eo(l, t, a, u, e, n, c, i, f, h, g, T, v, y) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((ye = { stylesheets: null, count: 0, unsuspend: Ah }),
        Fd(t),
        (T = ph()),
        T !== null))
    ) {
      (l.cancelPendingCommit = T(
        ro.bind(null, l, t, n, a, u, e, c, i, f, g, 1, v, y)
      )),
        fa(l, n, c, !h);
      return;
    }
    ro(l, t, n, a, u, e, c, i, f);
  }
  function Z0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!$l(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function fa(l, t, a, u) {
    (t &= ~Ti),
      (t &= ~ja),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - Wl(e),
        c = 1 << n;
      (u[n] = -1), (e &= ~c);
    }
    a !== 0 && yf(l, a, t);
  }
  function bn() {
    return (I & 6) === 0 ? (se(0), !1) : !0;
  }
  function Mi() {
    if (V !== null) {
      if (P === 0) var l = V.return;
      else (l = V), (Ht = Da = null), Lc(l), (su = null), (Pu = 0), (l = V);
      for (; l !== null; ) Yd(l.alternate, l), (l = l.return);
      V = null;
    }
  }
  function gu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), ch(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      Mi(),
      (cl = l),
      (V = a = Nt(l.current, null)),
      (K = t),
      (P = 0),
      (Pl = null),
      (ea = !1),
      (hu = pu(l, t)),
      (_i = !1),
      (vu = dt = Ti = ja = na = hl = 0),
      (Zl = ie = null),
      (Ei = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Wl(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (Qt = t), Xe(), a;
  }
  function no(l, t) {
    (Q = null),
      (S.H = nn),
      t === Lu || t === $e
        ? ((t = Es()), (P = 3))
        : t === bs
        ? ((t = Es()), (P = 4))
        : (P =
            t === Ad
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Pl = t),
      V === null && ((hl = 1), on(l, nt(t, l.current)));
  }
  function co() {
    var l = S.H;
    return (S.H = nn), l === null ? nn : l;
  }
  function io() {
    var l = S.A;
    return (S.A = X0), l;
  }
  function Di() {
    (hl = 4),
      ea || ((K & 4194048) !== K && st.current !== null) || (hu = !0),
      ((na & 134217727) === 0 && (ja & 134217727) === 0) ||
        cl === null ||
        fa(cl, K, dt, !1);
  }
  function Ui(l, t, a) {
    var u = I;
    I |= 2;
    var e = co(),
      n = io();
    (cl !== l || K !== t) && ((Sn = null), gu(l, t)), (t = !1);
    var c = hl;
    l: do
      try {
        if (P !== 0 && V !== null) {
          var i = V,
            f = Pl;
          switch (P) {
            case 8:
              Mi(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var h = P;
              if (((P = 0), (Pl = null), Su(l, i, f, h), a && hu)) {
                c = 0;
                break l;
              }
              break;
            default:
              (h = P), (P = 0), (Pl = null), Su(l, i, f, h);
          }
        }
        V0(), (c = hl);
        break;
      } catch (g) {
        no(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Ht = Da = null),
      (I = u),
      (S.H = e),
      (S.A = n),
      V === null && ((cl = null), (K = 0), Xe()),
      c
    );
  }
  function V0() {
    for (; V !== null; ) fo(V);
  }
  function L0(l, t) {
    var a = I;
    I |= 2;
    var u = co(),
      e = io();
    cl !== l || K !== t
      ? ((Sn = null), (gn = bt() + 500), gu(l, t))
      : (hu = pu(l, t));
    l: do
      try {
        if (P !== 0 && V !== null) {
          t = V;
          var n = Pl;
          t: switch (P) {
            case 1:
              (P = 0), (Pl = null), Su(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_s(n)) {
                (P = 0), (Pl = null), so(t);
                break;
              }
              (t = function () {
                (P !== 2 && P !== 9) || cl !== l || (P = 7), zt(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              P = 7;
              break l;
            case 4:
              P = 5;
              break l;
            case 7:
              _s(n)
                ? ((P = 0), (Pl = null), so(t))
                : ((P = 0), (Pl = null), Su(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (V.tag) {
                case 26:
                  c = V.memoizedState;
                case 5:
                case 27:
                  var i = V;
                  if (!c || Ko(c)) {
                    (P = 0), (Pl = null);
                    var f = i.sibling;
                    if (f !== null) V = f;
                    else {
                      var h = i.return;
                      h !== null ? ((V = h), _n(h)) : (V = null);
                    }
                    break t;
                  }
              }
              (P = 0), (Pl = null), Su(l, t, n, 5);
              break;
            case 6:
              (P = 0), (Pl = null), Su(l, t, n, 6);
              break;
            case 8:
              Mi(), (hl = 6);
              break l;
            default:
              throw Error(m(462));
          }
        }
        K0();
        break;
      } catch (g) {
        no(l, g);
      }
    while (!0);
    return (
      (Ht = Da = null),
      (S.H = u),
      (S.A = e),
      (I = a),
      V !== null ? 0 : ((cl = null), (K = 0), Xe(), hl)
    );
  }
  function K0() {
    for (; V !== null && !hr(); ) fo(V);
  }
  function fo(l) {
    var t = qd(l.alternate, l, Qt);
    (l.memoizedProps = l.pendingProps), t === null ? _n(l) : (V = t);
  }
  function so(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ud(a, t, t.pendingProps, t.type, void 0, K);
        break;
      case 11:
        t = Ud(a, t, t.pendingProps, t.type.render, t.ref, K);
        break;
      case 5:
        Lc(t);
      default:
        Yd(a, t), (t = V = ds(t, Qt)), (t = qd(a, t, Qt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? _n(l) : (V = t);
  }
  function Su(l, t, a, u) {
    (Ht = Da = null), Lc(t), (su = null), (Pu = 0);
    var e = t.return;
    try {
      if (j0(l, e, t, a, K)) {
        (hl = 1), on(l, nt(a, l.current)), (V = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((V = e), n);
      (hl = 1), on(l, nt(a, l.current)), (V = null);
      return;
    }
    t.flags & 32768
      ? (k || u === 1
          ? (l = !0)
          : hu || (K & 536870912) !== 0
          ? (l = !1)
          : ((ea = l = !0),
            (u === 2 || u === 9 || u === 3 || u === 6) &&
              ((u = st.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        oo(t, l))
      : _n(t);
  }
  function _n(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        oo(t, ea);
        return;
      }
      l = t.return;
      var a = B0(t.alternate, t, Qt);
      if (a !== null) {
        V = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function oo(l, t) {
    do {
      var a = Y0(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (V = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        V = l;
        return;
      }
      V = l = a;
    } while (l !== null);
    (hl = 6), (V = null);
  }
  function ro(l, t, a, u, e, n, c, i, f) {
    l.cancelPendingCommit = null;
    do Tn();
    while (Ol !== 0);
    if ((I & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= bc),
        Ar(l, a, n, c, i, f),
        l === cl && ((V = cl = null), (K = 0)),
        (yu = t),
        (ia = l),
        (mu = a),
        (zi = n),
        (pi = e),
        (to = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            $0(pe, function () {
              return go(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = S.T), (S.T = null), (e = p.p), (p.p = 2), (c = I), (I |= 4);
        try {
          G0(l, t, a);
        } finally {
          (I = c), (p.p = e), (S.T = u);
        }
      }
      (Ol = 1), ho(), vo(), yo();
    }
  }
  function ho() {
    if (Ol === 1) {
      Ol = 0;
      var l = ia,
        t = yu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = S.T), (S.T = null);
        var u = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          Wd(t, l);
          var n = Qi,
            c = ls(l.containerInfo),
            i = n.focusedElem,
            f = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            Pf(i.ownerDocument.documentElement, i)
          ) {
            if (f !== null && vc(i)) {
              var h = f.start,
                g = f.end;
              if ((g === void 0 && (g = h), "selectionStart" in i))
                (i.selectionStart = h),
                  (i.selectionEnd = Math.min(g, i.value.length));
              else {
                var T = i.ownerDocument || document,
                  v = (T && T.defaultView) || window;
                if (v.getSelection) {
                  var y = v.getSelection(),
                    B = i.textContent.length,
                    H = Math.min(f.start, B),
                    al = f.end === void 0 ? H : Math.min(f.end, B);
                  !y.extend && H > al && ((c = al), (al = H), (H = c));
                  var o = If(i, H),
                    d = If(i, al);
                  if (
                    o &&
                    d &&
                    (y.rangeCount !== 1 ||
                      y.anchorNode !== o.node ||
                      y.anchorOffset !== o.offset ||
                      y.focusNode !== d.node ||
                      y.focusOffset !== d.offset)
                  ) {
                    var r = T.createRange();
                    r.setStart(o.node, o.offset),
                      y.removeAllRanges(),
                      H > al
                        ? (y.addRange(r), y.extend(d.node, d.offset))
                        : (r.setEnd(d.node, d.offset), y.addRange(r));
                  }
                }
              }
            }
            for (T = [], y = i; (y = y.parentNode); )
              y.nodeType === 1 &&
                T.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < T.length;
              i++
            ) {
              var _ = T[i];
              (_.element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
          }
          (Hn = !!Xi), (Qi = Xi = null);
        } finally {
          (I = e), (p.p = u), (S.T = a);
        }
      }
      (l.current = t), (Ol = 2);
    }
  }
  function vo() {
    if (Ol === 2) {
      Ol = 0;
      var l = ia,
        t = yu,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = S.T), (S.T = null);
        var u = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          Ld(l, t.alternate, t);
        } finally {
          (I = e), (p.p = u), (S.T = a);
        }
      }
      Ol = 3;
    }
  }
  function yo() {
    if (Ol === 4 || Ol === 3) {
      (Ol = 0), vr();
      var l = ia,
        t = yu,
        a = mu,
        u = to;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ol = 5)
        : ((Ol = 0), (yu = ia = null), mo(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ca = null),
        wn(a),
        (t = t.stateNode),
        wl && typeof wl.onCommitFiberRoot == "function")
      )
        try {
          wl.onCommitFiberRoot(zu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (t = S.T), (e = p.p), (p.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var i = u[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (S.T = t), (p.p = e);
        }
      }
      (mu & 3) !== 0 && Tn(),
        zt(l),
        (e = l.pendingLanes),
        (a & 4194090) !== 0 && (e & 42) !== 0
          ? l === Oi
            ? fe++
            : ((fe = 0), (Oi = l))
          : (fe = 0),
        se(0);
    }
  }
  function mo(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Zu(t)));
  }
  function Tn(l) {
    return ho(), vo(), yo(), go();
  }
  function go() {
    if (Ol !== 5) return !1;
    var l = ia,
      t = zi;
    zi = 0;
    var a = wn(mu),
      u = S.T,
      e = p.p;
    try {
      (p.p = 32 > a ? 32 : a), (S.T = null), (a = pi), (pi = null);
      var n = ia,
        c = mu;
      if (((Ol = 0), (yu = ia = null), (mu = 0), (I & 6) !== 0))
        throw Error(m(331));
      var i = I;
      if (
        ((I |= 4),
        Pd(n.current),
        kd(n, n.current, c, a),
        (I = i),
        se(0, !1),
        wl && typeof wl.onPostCommitFiberRoot == "function")
      )
        try {
          wl.onPostCommitFiberRoot(zu, n);
        } catch {}
      return !0;
    } finally {
      (p.p = e), (S.T = u), mo(l, t);
    }
  }
  function So(l, t, a) {
    (t = nt(a, t)),
      (t = ei(l.stateNode, t, 2)),
      (l = Ft(l, t, 2)),
      l !== null && (Ou(l, 2), zt(l));
  }
  function el(l, t, a) {
    if (l.tag === 3) So(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          So(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ca === null || !ca.has(u)))
          ) {
            (l = nt(a, l)),
              (a = Td(2)),
              (u = Ft(t, a, 2)),
              u !== null && (Ed(a, u, t, l), Ou(u, 2), zt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ni(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Q0();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((_i = !0), e.add(a), (l = J0.bind(null, l, t, a)), t.then(l, l));
  }
  function J0(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      cl === l &&
        (K & a) === a &&
        (hl === 4 || (hl === 3 && (K & 62914560) === K && 300 > bt() - Ai)
          ? (I & 2) === 0 && gu(l, 0)
          : (Ti |= a),
        vu === K && (vu = 0)),
      zt(l);
  }
  function bo(l, t) {
    t === 0 && (t = vf()), (l = Pa(l, t)), l !== null && (Ou(l, t), zt(l));
  }
  function w0(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), bo(l, a);
  }
  function W0(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(t), bo(l, a);
  }
  function $0(l, t) {
    return Vn(l, t);
  }
  var En = null,
    bu = null,
    Ri = !1,
    An = !1,
    xi = !1,
    qa = 0;
  function zt(l) {
    l !== bu &&
      l.next === null &&
      (bu === null ? (En = bu = l) : (bu = bu.next = l)),
      (An = !0),
      Ri || ((Ri = !0), F0());
  }
  function se(l, t) {
    if (!xi && An) {
      xi = !0;
      do
        for (var a = !1, u = En; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                i = u.pingedLanes;
              (n = (1 << (31 - Wl(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), Ao(u, n));
          } else
            (n = K),
              (n = De(
                u,
                u === cl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (n & 3) === 0 || pu(u, n) || ((a = !0), Ao(u, n));
          u = u.next;
        }
      while (a);
      xi = !1;
    }
  }
  function k0() {
    _o();
  }
  function _o() {
    An = Ri = !1;
    var l = 0;
    qa !== 0 && (nh() && (l = qa), (qa = 0));
    for (var t = bt(), a = null, u = En; u !== null; ) {
      var e = u.next,
        n = To(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (En = e) : (a.next = e),
          e === null && (bu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (An = !0)),
        (u = e);
    }
    se(l);
  }
  function To(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - Wl(n),
        i = 1 << c,
        f = e[c];
      f === -1
        ? ((i & a) === 0 || (i & u) !== 0) && (e[c] = Er(i, t))
        : f <= t && (l.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((t = cl),
      (a = K),
      (a = De(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (P === 2 || P === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Ln(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || pu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Ln(u), wn(a))) {
        case 2:
        case 8:
          a = of;
          break;
        case 32:
          a = pe;
          break;
        case 268435456:
          a = rf;
          break;
        default:
          a = pe;
      }
      return (
        (u = Eo.bind(null, l)),
        (a = Vn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Ln(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Eo(l, t) {
    if (Ol !== 0 && Ol !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a) return null;
    var u = K;
    return (
      (u = De(
        l,
        l === cl ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      u === 0
        ? null
        : (uo(l, u, t),
          To(l, bt()),
          l.callbackNode != null && l.callbackNode === a
            ? Eo.bind(null, l)
            : null)
    );
  }
  function Ao(l, t) {
    if (Tn()) return null;
    uo(l, t, !0);
  }
  function F0() {
    ih(function () {
      (I & 6) !== 0 ? Vn(df, k0) : _o();
    });
  }
  function Hi() {
    return qa === 0 && (qa = hf()), qa;
  }
  function zo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : He("" + l);
  }
  function po(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function I0(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = zo((e[Gl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Gl] || null)
          ? zo(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var i = new Ye("action", "action", null, u, e);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (qa !== 0) {
                  var f = c ? po(e, c) : new FormData(e);
                  Pc(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? po(e, c) : new FormData(e)),
                  Pc(
                    a,
                    { pending: !0, data: f, method: e.method, action: n },
                    n,
                    f
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var ji = 0; ji < Sc.length; ji++) {
    var qi = Sc[ji],
      P0 = qi.toLowerCase(),
      lh = qi[0].toUpperCase() + qi.slice(1);
    vt(P0, "on" + lh);
  }
  vt(us, "onAnimationEnd"),
    vt(es, "onAnimationIteration"),
    vt(ns, "onAnimationStart"),
    vt("dblclick", "onDoubleClick"),
    vt("focusin", "onFocus"),
    vt("focusout", "onBlur"),
    vt(g0, "onTransitionRun"),
    vt(S0, "onTransitionStart"),
    vt(b0, "onTransitionCancel"),
    vt(cs, "onTransitionEnd"),
    Va("onMouseEnter", ["mouseout", "mouseover"]),
    Va("onMouseLeave", ["mouseout", "mouseover"]),
    Va("onPointerEnter", ["pointerout", "pointerover"]),
    Va("onPointerLeave", ["pointerout", "pointerover"]),
    ba(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ba(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ba("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ba(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ba(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ba(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var de =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    th = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(de)
    );
  function Oo(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var i = u[c],
              f = i.instance,
              h = i.currentTarget;
            if (((i = i.listener), f !== n && e.isPropagationStopped()))
              break l;
            (n = i), (e.currentTarget = h);
            try {
              n(e);
            } catch (g) {
              dn(g);
            }
            (e.currentTarget = null), (n = f);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((i = u[c]),
              (f = i.instance),
              (h = i.currentTarget),
              (i = i.listener),
              f !== n && e.isPropagationStopped())
            )
              break l;
            (n = i), (e.currentTarget = h);
            try {
              n(e);
            } catch (g) {
              dn(g);
            }
            (e.currentTarget = null), (n = f);
          }
      }
    }
  }
  function L(l, t) {
    var a = t[Wn];
    a === void 0 && (a = t[Wn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (Mo(t, l, 2, !1), a.add(u));
  }
  function Bi(l, t, a) {
    var u = 0;
    t && (u |= 4), Mo(a, l, u, t);
  }
  var zn = "_reactListening" + Math.random().toString(36).slice(2);
  function Yi(l) {
    if (!l[zn]) {
      (l[zn] = !0),
        bf.forEach(function (a) {
          a !== "selectionchange" && (th.has(a) || Bi(a, !1, l), Bi(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[zn] || ((t[zn] = !0), Bi("selectionchange", !1, t));
    }
  }
  function Mo(l, t, a, u) {
    switch (Fo(t)) {
      case 2:
        var e = Dh;
        break;
      case 8:
        e = Uh;
        break;
      default:
        e = Fi;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !nc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
        ? l.addEventListener(t, a, { passive: e })
        : l.addEventListener(t, a, !1);
  }
  function Gi(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = Xa(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              u = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Hf(function () {
      var h = n,
        g = uc(a),
        T = [];
      l: {
        var v = is.get(l);
        if (v !== void 0) {
          var y = Ye,
            B = l;
          switch (l) {
            case "keypress":
              if (qe(a) === 0) break l;
            case "keydown":
            case "keyup":
              y = $r;
              break;
            case "focusin":
              (B = "focus"), (y = sc);
              break;
            case "focusout":
              (B = "blur"), (y = sc);
              break;
            case "beforeblur":
            case "afterblur":
              y = sc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = Bf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = Yr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = Ir;
              break;
            case us:
            case es:
            case ns:
              y = Xr;
              break;
            case cs:
              y = l0;
              break;
            case "scroll":
            case "scrollend":
              y = qr;
              break;
            case "wheel":
              y = a0;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = Zr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = Gf;
              break;
            case "toggle":
            case "beforetoggle":
              y = e0;
          }
          var H = (t & 4) !== 0,
            al = !H && (l === "scroll" || l === "scrollend"),
            o = H ? (v !== null ? v + "Capture" : null) : v;
          H = [];
          for (var d = h, r; d !== null; ) {
            var _ = d;
            if (
              ((r = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                r === null ||
                o === null ||
                ((_ = Uu(d, o)), _ != null && H.push(oe(d, _, r))),
              al)
            )
              break;
            d = d.return;
          }
          0 < H.length &&
            ((v = new y(v, B, null, a, g)), T.push({ event: v, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((v = l === "mouseover" || l === "pointerover"),
            (y = l === "mouseout" || l === "pointerout"),
            v &&
              a !== ac &&
              (B = a.relatedTarget || a.fromElement) &&
              (Xa(B) || B[Ca]))
          )
            break l;
          if (
            (y || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            y
              ? ((B = a.relatedTarget || a.toElement),
                (y = h),
                (B = B ? Xa(B) : null),
                B !== null &&
                  ((al = J(B)),
                  (H = B.tag),
                  B !== al || (H !== 5 && H !== 27 && H !== 6)) &&
                  (B = null))
              : ((y = null), (B = h)),
            y !== B)
          ) {
            if (
              ((H = Bf),
              (_ = "onMouseLeave"),
              (o = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((H = Gf),
                (_ = "onPointerLeave"),
                (o = "onPointerEnter"),
                (d = "pointer")),
              (al = y == null ? v : Du(y)),
              (r = B == null ? v : Du(B)),
              (v = new H(_, d + "leave", y, a, g)),
              (v.target = al),
              (v.relatedTarget = r),
              (_ = null),
              Xa(g) === h &&
                ((H = new H(o, d + "enter", B, a, g)),
                (H.target = r),
                (H.relatedTarget = al),
                (_ = H)),
              (al = _),
              y && B)
            )
              t: {
                for (H = y, o = B, d = 0, r = H; r; r = _u(r)) d++;
                for (r = 0, _ = o; _; _ = _u(_)) r++;
                for (; 0 < d - r; ) (H = _u(H)), d--;
                for (; 0 < r - d; ) (o = _u(o)), r--;
                for (; d--; ) {
                  if (H === o || (o !== null && H === o.alternate)) break t;
                  (H = _u(H)), (o = _u(o));
                }
                H = null;
              }
            else H = null;
            y !== null && Do(T, v, y, H, !1),
              B !== null && al !== null && Do(T, al, B, H, !0);
          }
        }
        l: {
          if (
            ((v = h ? Du(h) : window),
            (y = v.nodeName && v.nodeName.toLowerCase()),
            y === "select" || (y === "input" && v.type === "file"))
          )
            var D = Jf;
          else if (Lf(v))
            if (wf) D = v0;
            else {
              D = r0;
              var Z = o0;
            }
          else
            (y = v.nodeName),
              !y ||
              y.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? h && tc(h.elementType) && (D = Jf)
                : (D = h0);
          if (D && (D = D(l, h))) {
            Kf(T, D, a, g);
            break l;
          }
          Z && Z(l, v, h),
            l === "focusout" &&
              h &&
              v.type === "number" &&
              h.memoizedProps.value != null &&
              lc(v, "number", v.value);
        }
        switch (((Z = h ? Du(h) : window), l)) {
          case "focusin":
            (Lf(Z) || Z.contentEditable === "true") &&
              ((ka = Z), (yc = h), (Yu = null));
            break;
          case "focusout":
            Yu = yc = ka = null;
            break;
          case "mousedown":
            mc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (mc = !1), ts(T, a, g);
            break;
          case "selectionchange":
            if (m0) break;
          case "keydown":
          case "keyup":
            ts(T, a, g);
        }
        var U;
        if (oc)
          l: {
            switch (l) {
              case "compositionstart":
                var j = "onCompositionStart";
                break l;
              case "compositionend":
                j = "onCompositionEnd";
                break l;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break l;
            }
            j = void 0;
          }
        else
          $a
            ? Zf(l, a) && (j = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (j = "onCompositionStart");
        j &&
          (Cf &&
            a.locale !== "ko" &&
            ($a || j !== "onCompositionStart"
              ? j === "onCompositionEnd" && $a && (U = jf())
              : ((wt = g),
                (cc = "value" in wt ? wt.value : wt.textContent),
                ($a = !0))),
          (Z = pn(h, j)),
          0 < Z.length &&
            ((j = new Yf(j, l, null, a, g)),
            T.push({ event: j, listeners: Z }),
            U ? (j.data = U) : ((U = Vf(a)), U !== null && (j.data = U)))),
          (U = c0 ? i0(l, a) : f0(l, a)) &&
            ((j = pn(h, "onBeforeInput")),
            0 < j.length &&
              ((Z = new Yf("onBeforeInput", "beforeinput", null, a, g)),
              T.push({ event: Z, listeners: j }),
              (Z.data = U))),
          I0(T, l, h, a, g);
      }
      Oo(T, t);
    });
  }
  function oe(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function pn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Uu(l, a)),
          e != null && u.unshift(oe(l, e, n)),
          (e = Uu(l, t)),
          e != null && u.push(oe(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function _u(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Do(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var i = a,
        f = i.alternate,
        h = i.stateNode;
      if (((i = i.tag), f !== null && f === u)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        h === null ||
        ((f = h),
        e
          ? ((h = Uu(a, n)), h != null && c.unshift(oe(a, h, f)))
          : e || ((h = Uu(a, n)), h != null && c.push(oe(a, h, f)))),
        (a = a.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var ah = /\r\n?/g,
    uh = /\u0000|\uFFFD/g;
  function Uo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        ah,
        `
`
      )
      .replace(uh, "");
  }
  function No(l, t) {
    return (t = Uo(t)), Uo(l) === t;
  }
  function On() {}
  function tl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || Ja(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            Ja(l, "" + u);
        break;
      case "className":
        Ne(l, "class", u);
        break;
      case "tabIndex":
        Ne(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ne(l, a, u);
        break;
      case "style":
        Rf(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ne(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = He("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && tl(l, t, "name", e.name, e, null),
                tl(l, t, "formEncType", e.formEncType, e, null),
                tl(l, t, "formMethod", e.formMethod, e, null),
                tl(l, t, "formTarget", e.formTarget, e, null))
              : (tl(l, t, "encType", e.encType, e, null),
                tl(l, t, "method", e.method, e, null),
                tl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = He("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = On);
        break;
      case "onScroll":
        u != null && L("scroll", l);
        break;
      case "onScrollEnd":
        u != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(m(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = He("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        L("beforetoggle", l), L("toggle", l), Ue(l, "popover", u);
        break;
      case "xlinkActuate":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Ue(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Hr.get(a) || a), Ue(l, a, u));
    }
  }
  function Ci(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Rf(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(m(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? Ja(l, u)
          : (typeof u == "number" || typeof u == "bigint") && Ja(l, "" + u);
        break;
      case "onScroll":
        u != null && L("scroll", l);
        break;
      case "onScrollEnd":
        u != null && L("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = On);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_f.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Gl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
              ? l.setAttribute(a, "")
              : Ue(l, a, u);
          }
    }
  }
  function Ml(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        L("error", l), L("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  tl(l, t, n, c, a, null);
              }
          }
        e && tl(l, t, "srcSet", a.srcSet, a, null),
          u && tl(l, t, "src", a.src, a, null);
        return;
      case "input":
        L("invalid", l);
        var i = (n = c = e = null),
          f = null,
          h = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  h = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  i = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(m(137, t));
                  break;
                default:
                  tl(l, t, u, g, a, null);
              }
          }
        Mf(l, n, i, f, h, c, e, !1), Re(l);
        return;
      case "select":
        L("invalid", l), (u = c = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((i = a[e]), i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                u = i;
              default:
                tl(l, t, e, i, a, null);
            }
        (t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? Ka(l, !!u, t, !1) : a != null && Ka(l, !!u, a, !0);
        return;
      case "textarea":
        L("invalid", l), (n = e = u = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((i = a[c]), i != null))
            switch (c) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(m(91));
                break;
              default:
                tl(l, t, c, i, a, null);
            }
        Uf(l, u, e, n), Re(l);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((u = a[f]), u != null))
            switch (f) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                tl(l, t, f, u, a, null);
            }
        return;
      case "dialog":
        L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l);
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < de.length; u++) L(de[u], l);
        break;
      case "image":
        L("error", l), L("load", l);
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        L("error", l), L("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in a)
          if (a.hasOwnProperty(h) && ((u = a[h]), u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                tl(l, t, h, u, a, null);
            }
        return;
      default:
        if (tc(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((u = a[g]), u !== void 0 && Ci(l, t, g, u, a, void 0));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && ((u = a[i]), u != null && tl(l, t, i, u, a, null));
  }
  function eh(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          i = null,
          f = null,
          h = null,
          g = null;
        for (y in a) {
          var T = a[y];
          if (a.hasOwnProperty(y) && T != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = T;
              default:
                u.hasOwnProperty(y) || tl(l, t, y, null, u, T);
            }
        }
        for (var v in u) {
          var y = u[v];
          if (((T = a[v]), u.hasOwnProperty(v) && (y != null || T != null)))
            switch (v) {
              case "type":
                n = y;
                break;
              case "name":
                e = y;
                break;
              case "checked":
                h = y;
                break;
              case "defaultChecked":
                g = y;
                break;
              case "value":
                c = y;
                break;
              case "defaultValue":
                i = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(m(137, t));
                break;
              default:
                y !== T && tl(l, t, v, y, u, T);
            }
        }
        Pn(l, c, i, f, h, g, n, e);
        return;
      case "select":
        y = c = i = v = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                y = f;
              default:
                u.hasOwnProperty(n) || tl(l, t, n, null, u, f);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (f = a[e]),
            u.hasOwnProperty(e) && (n != null || f != null))
          )
            switch (e) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && tl(l, t, e, n, u, f);
            }
        (t = i),
          (a = c),
          (u = y),
          v != null
            ? Ka(l, !!a, v, !1)
            : !!u != !!a &&
              (t != null ? Ka(l, !!a, t, !0) : Ka(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        y = v = null;
        for (i in a)
          if (
            ((e = a[i]),
            a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, i, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                v = e;
                break;
              case "defaultValue":
                y = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && tl(l, t, c, e, u, n);
            }
        Df(l, v, y);
        return;
      case "option":
        for (var B in a)
          if (
            ((v = a[B]),
            a.hasOwnProperty(B) && v != null && !u.hasOwnProperty(B))
          )
            switch (B) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(l, t, B, null, u, v);
            }
        for (f in u)
          if (
            ((v = u[f]),
            (y = a[f]),
            u.hasOwnProperty(f) && v !== y && (v != null || y != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                tl(l, t, f, v, u, y);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var H in a)
          (v = a[H]),
            a.hasOwnProperty(H) &&
              v != null &&
              !u.hasOwnProperty(H) &&
              tl(l, t, H, null, u, v);
        for (h in u)
          if (
            ((v = u[h]),
            (y = a[h]),
            u.hasOwnProperty(h) && v !== y && (v != null || y != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(m(137, t));
                break;
              default:
                tl(l, t, h, v, u, y);
            }
        return;
      default:
        if (tc(t)) {
          for (var al in a)
            (v = a[al]),
              a.hasOwnProperty(al) &&
                v !== void 0 &&
                !u.hasOwnProperty(al) &&
                Ci(l, t, al, void 0, u, v);
          for (g in u)
            (v = u[g]),
              (y = a[g]),
              !u.hasOwnProperty(g) ||
                v === y ||
                (v === void 0 && y === void 0) ||
                Ci(l, t, g, v, u, y);
          return;
        }
    }
    for (var o in a)
      (v = a[o]),
        a.hasOwnProperty(o) &&
          v != null &&
          !u.hasOwnProperty(o) &&
          tl(l, t, o, null, u, v);
    for (T in u)
      (v = u[T]),
        (y = a[T]),
        !u.hasOwnProperty(T) ||
          v === y ||
          (v == null && y == null) ||
          tl(l, t, T, v, u, y);
  }
  var Xi = null,
    Qi = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ro(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Zi(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vi = null;
  function nh() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Vi
        ? !1
        : ((Vi = l), !0)
      : ((Vi = null), !1);
  }
  var Ho = typeof setTimeout == "function" ? setTimeout : void 0,
    ch = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jo = typeof Promise == "function" ? Promise : void 0,
    ih =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jo < "u"
        ? function (l) {
            return jo.resolve(null).then(l).catch(fh);
          }
        : Ho;
  function fh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function sa(l) {
    return l === "head";
  }
  function qo(l, t) {
    var a = t,
      u = 0,
      e = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (0 < u && 8 > u) {
            a = u;
            var c = l.ownerDocument;
            if ((a & 1 && re(c.documentElement), a & 2 && re(c.body), a & 4))
              for (a = c.head, re(a), c = a.firstChild; c; ) {
                var i = c.nextSibling,
                  f = c.nodeName;
                c[Mu] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(c),
                  (c = i);
              }
          }
          if (e === 0) {
            l.removeChild(n), _e(t);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? e++
            : (u = a.charCodeAt(0) - 48);
      else u = 0;
      a = n;
    } while (a);
    _e(t);
  }
  function Li(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Li(a), $n(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function sh(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Mu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = mt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function dh(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = mt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ki(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function oh(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var u = function () {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
    }
  }
  function mt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Ji = null;
  function Bo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Yo(l, t, a) {
    switch (((t = Mn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(m(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(m(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function re(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    $n(l);
  }
  var ot = new Map(),
    Go = new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Zt = p.d;
  p.d = { f: rh, r: hh, D: vh, C: yh, L: mh, m: gh, X: bh, S: Sh, M: _h };
  function rh() {
    var l = Zt.f(),
      t = bn();
    return l || t;
  }
  function hh(l) {
    var t = Qa(l);
    t !== null && t.tag === 5 && t.type === "form" ? ud(t) : Zt.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function Co(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = et(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        Go.has(e) ||
          (Go.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Ml(t, "link", l),
            _l(t),
            u.head.appendChild(t)));
    }
  }
  function vh(l) {
    Zt.D(l), Co("dns-prefetch", l, null);
  }
  function yh(l, t) {
    Zt.C(l, t), Co("preconnect", l, t);
  }
  function mh(l, t, a) {
    Zt.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + et(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + et(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + et(a.imageSizes) + '"]'))
        : (e += '[href="' + et(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Eu(l);
          break;
        case "script":
          n = Au(l);
      }
      ot.has(n) ||
        ((l = R(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        ot.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(he(n))) ||
          (t === "script" && u.querySelector(ve(n))) ||
          ((t = u.createElement("link")),
          Ml(t, "link", l),
          _l(t),
          u.head.appendChild(t)));
    }
  }
  function gh(l, t) {
    Zt.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + et(u) + '"][href="' + et(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Au(l);
      }
      if (
        !ot.has(n) &&
        ((l = R({ rel: "modulepreload", href: l }, t)),
        ot.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ve(n))) return;
        }
        (u = a.createElement("link")),
          Ml(u, "link", l),
          _l(u),
          a.head.appendChild(u);
      }
    }
  }
  function Sh(l, t, a) {
    Zt.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = Za(u).hoistableStyles,
        n = Eu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = u.querySelector(he(n)))) i.loading = 5;
        else {
          (l = R({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = ot.get(n)) && wi(l, a);
          var f = (c = u.createElement("link"));
          _l(f),
            Ml(f, "link", l),
            (f._p = new Promise(function (h, g) {
              (f.onload = h), (f.onerror = g);
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Un(c, t, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          e.set(n, c);
      }
    }
  }
  function bh(l, t) {
    Zt.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = Za(a).hoistableScripts,
        e = Au(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ve(e))),
        n ||
          ((l = R({ src: l, async: !0 }, t)),
          (t = ot.get(e)) && Wi(l, t),
          (n = a.createElement("script")),
          _l(n),
          Ml(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function _h(l, t) {
    Zt.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = Za(a).hoistableScripts,
        e = Au(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ve(e))),
        n ||
          ((l = R({ src: l, async: !0, type: "module" }, t)),
          (t = ot.get(e)) && Wi(l, t),
          (n = a.createElement("script")),
          _l(n),
          Ml(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Xo(l, t, a, u) {
    var e = (e = C.current) ? Dn(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Eu(a.href)),
            (a = Za(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Eu(a.href);
          var n = Za(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(he(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              ot.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                ot.set(l, a),
                n || Th(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(m(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Au(a)),
              (a = Za(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, l));
    }
  }
  function Eu(l) {
    return 'href="' + et(l) + '"';
  }
  function he(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Qo(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Th(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Ml(t, "link", a),
        _l(t),
        l.head.appendChild(t));
  }
  function Au(l) {
    return '[src="' + et(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function Zo(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + et(a.href) + '"]');
          if (u) return (t.instance = u), _l(u), u;
          var e = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            _l(u),
            Ml(u, "style", e),
            Un(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Eu(a.href);
          var n = l.querySelector(he(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), _l(n), n;
          (u = Qo(a)),
            (e = ot.get(e)) && wi(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            _l(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              (c.onload = i), (c.onerror = f);
            })),
            Ml(n, "link", u),
            (t.state.loading |= 4),
            Un(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Au(a.src)),
            (e = l.querySelector(ve(n)))
              ? ((t.instance = e), _l(e), e)
              : ((u = a),
                (e = ot.get(n)) && ((u = R({}, a)), Wi(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                _l(e),
                Ml(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var i = u[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function wi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Wi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Nn = null;
  function Vo(l, t, a) {
    if (Nn === null) {
      var u = new Map(),
        e = (Nn = new Map());
      e.set(a, u);
    } else (e = Nn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Mu] ||
          n[Rl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = u.get(c);
        i ? i.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function Lo(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Eh(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ko(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ye = null;
  function Ah() {}
  function zh(l, t, a) {
    if (ye === null) throw Error(m(475));
    var u = ye;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = Eu(a.href),
          n = l.querySelector(he(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = Rn.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            _l(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = Qo(a)),
          (e = ot.get(e)) && wi(a, e),
          (n = n.createElement("link")),
          _l(n);
        var c = n;
        (c._p = new Promise(function (i, f) {
          (c.onload = i), (c.onerror = f);
        })),
          Ml(n, "link", a),
          (t.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (u.count++,
          (t = Rn.bind(u)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function ph() {
    if (ye === null) throw Error(m(475));
    var l = ye;
    return (
      l.stylesheets && l.count === 0 && $i(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && $i(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Rn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) $i(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var xn = null;
  function $i(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (xn = new Map()),
        t.forEach(Oh, l),
        (xn = null),
        Rn.call(l));
  }
  function Oh(l, t) {
    if (!(t.state.loading & 4)) {
      var a = xn.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), xn.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = Rn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var me = {
    $$typeof: Dl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function Mh(l, t, a, u, e, n, c, i) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Kn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kn(0)),
      (this.hiddenUpdates = Kn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function Jo(l, t, a, u, e, n, c, i, f, h, g, T) {
    return (
      (l = new Mh(l, t, a, c, i, f, h, T)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = kl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Nc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      jc(n),
      l
    );
  }
  function wo(l) {
    return l ? ((l = lu), l) : lu;
  }
  function Wo(l, t, a, u, e, n) {
    (e = wo(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = kt(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = Ft(l, u, t)),
      a !== null && (tt(a, l, t), Ju(a, l, t));
  }
  function $o(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function ki(l, t) {
    $o(l, t), (l = l.alternate) && $o(l, t);
  }
  function ko(l) {
    if (l.tag === 13) {
      var t = Pa(l, 67108864);
      t !== null && tt(t, l, 67108864), ki(l, 67108864);
    }
  }
  var Hn = !0;
  function Dh(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = p.p;
    try {
      (p.p = 2), Fi(l, t, a, u);
    } finally {
      (p.p = n), (S.T = e);
    }
  }
  function Uh(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = p.p;
    try {
      (p.p = 8), Fi(l, t, a, u);
    } finally {
      (p.p = n), (S.T = e);
    }
  }
  function Fi(l, t, a, u) {
    if (Hn) {
      var e = Ii(u);
      if (e === null) Gi(l, t, u, jn, a), Io(l, u);
      else if (Rh(e, l, t, a, u)) u.stopPropagation();
      else if ((Io(l, u), t & 4 && -1 < Nh.indexOf(l))) {
        for (; e !== null; ) {
          var n = Qa(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Sa(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - Wl(c));
                      (i.entanglements[1] |= f), (c &= ~f);
                    }
                    zt(n), (I & 6) === 0 && ((gn = bt() + 500), se(0));
                  }
                }
                break;
              case 13:
                (i = Pa(n, 2)), i !== null && tt(i, n, 2), bn(), ki(n, 2);
            }
          if (((n = Ii(u)), n === null && Gi(l, t, u, jn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Gi(l, t, u, null, a);
    }
  }
  function Ii(l) {
    return (l = uc(l)), Pi(l);
  }
  var jn = null;
  function Pi(l) {
    if (((jn = null), (l = Xa(l)), l !== null)) {
      var t = J(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = dl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (jn = l), null;
  }
  function Fo(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yr()) {
          case df:
            return 2;
          case of:
            return 8;
          case pe:
          case mr:
            return 32;
          case rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lf = !1,
    da = null,
    oa = null,
    ra = null,
    ge = new Map(),
    Se = new Map(),
    ha = [],
    Nh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Io(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        da = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        ra = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function be(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Qa(t)), t !== null && ko(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Rh(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (da = be(da, l, t, a, u, e)), !0;
      case "dragenter":
        return (oa = be(oa, l, t, a, u, e)), !0;
      case "mouseover":
        return (ra = be(ra, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(n, be(ge.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), Se.set(n, be(Se.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function Po(l) {
    var t = Xa(l.target);
    if (t !== null) {
      var a = J(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = dl(a)), t !== null)) {
            (l.blockedOn = t),
              zr(l.priority, function () {
                if (a.tag === 13) {
                  var u = lt();
                  u = Jn(u);
                  var e = Pa(a, u);
                  e !== null && tt(e, a, u), ki(a, u);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Ii(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        (ac = u), a.target.dispatchEvent(u), (ac = null);
      } else return (t = Qa(a)), t !== null && ko(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function lr(l, t, a) {
    qn(l) && a.delete(t);
  }
  function xh() {
    (lf = !1),
      da !== null && qn(da) && (da = null),
      oa !== null && qn(oa) && (oa = null),
      ra !== null && qn(ra) && (ra = null),
      ge.forEach(lr),
      Se.forEach(lr);
  }
  function Bn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      lf ||
        ((lf = !0),
        O.unstable_scheduleCallback(O.unstable_NormalPriority, xh)));
  }
  var Yn = null;
  function tr(l) {
    Yn !== l &&
      ((Yn = l),
      O.unstable_scheduleCallback(O.unstable_NormalPriority, function () {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (Pi(u || a) === null) continue;
            break;
          }
          var n = Qa(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Pc(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function _e(l) {
    function t(f) {
      return Bn(f, l);
    }
    da !== null && Bn(da, l),
      oa !== null && Bn(oa, l),
      ra !== null && Bn(ra, l),
      ge.forEach(t),
      Se.forEach(t);
    for (var a = 0; a < ha.length; a++) {
      var u = ha[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ha.length && ((a = ha[0]), a.blockedOn === null); )
      Po(a), a.blockedOn === null && ha.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Gl] || null;
        if (typeof n == "function") c || tr(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Gl] || null))) i = c.formAction;
            else if (Pi(e) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (a[u + 1] = i) : (a.splice(u, 3), (u -= 3)),
            tr(a);
        }
      }
  }
  function tf(l) {
    this._internalRoot = l;
  }
  (Gn.prototype.render = tf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      var a = t.current,
        u = lt();
      Wo(a, u, l, t, null, null);
    }),
    (Gn.prototype.unmount = tf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Wo(l.current, 2, null, l, null, null), bn(), (t[Ca] = null);
        }
      });
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = gf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ha.length && t !== 0 && t < ha[a].priority; a++);
      ha.splice(a, 0, l), a === 0 && Po(l);
    }
  };
  var ar = F.version;
  if (ar !== "19.1.1") throw Error(m(527, ar, "19.1.1"));
  p.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(m(188))
        : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return (
      (l = N(t)),
      (l = l !== null ? E(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Hh = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cn.isDisabled && Cn.supportsFiber)
      try {
        (zu = Cn.inject(Hh)), (wl = Cn);
      } catch {}
  }
  return (
    (Ee.createRoot = function (l, t) {
      if (!G(l)) throw Error(m(299));
      var a = !1,
        u = "",
        e = gd,
        n = Sd,
        c = bd,
        i = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (i = t.unstable_transitionCallbacks)),
        (t = Jo(l, 1, !1, null, null, a, u, e, n, c, i, null)),
        (l[Ca] = t.current),
        Yi(l),
        new tf(t)
      );
    }),
    (Ee.hydrateRoot = function (l, t, a) {
      if (!G(l)) throw Error(m(299));
      var u = !1,
        e = "",
        n = gd,
        c = Sd,
        i = bd,
        f = null,
        h = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (i = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (f = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (h = a.formState)),
        (t = Jo(l, 1, !0, t, a ?? null, u, e, n, c, i, f, h)),
        (t.context = wo(null)),
        (a = t.current),
        (u = lt()),
        (u = Jn(u)),
        (e = kt(u)),
        (e.callback = null),
        Ft(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Ou(t, a),
        zt(t),
        (l[Ca] = t.current),
        Yi(l),
        new Gn(t)
      );
    }),
    (Ee.version = "19.1.1"),
    Ee
  );
}
var rr;
function Vh() {
  if (rr) return ef.exports;
  rr = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (F) {
        console.error(F);
      }
  }
  return O(), (ef.exports = Zh()), ef.exports;
}
var Lh = Vh();
const Kh = "_instructionBtn_1inkk_169",
  Vt = {
    "grand-container": "_grand-container_1inkk_1",
    "parent-container": "_parent-container_1inkk_17",
    "top-container": "_top-container_1inkk_51",
    "middle-container": "_middle-container_1inkk_75",
    "button-container": "_button-container_1inkk_87",
    "middle-panel-container": "_middle-panel-container_1inkk_115",
    "bottom-container": "_bottom-container_1inkk_145",
    instructionBtn: Kh,
  },
  Jh = { "top-container": "_top-container_16fg4_1" },
  wh = () =>
    b.jsx("div", {
      className: Jh["top-container"],
      children: b.jsx("h2", {
        children:
          "Awareness about Biomedical Signals, Their Types and Significance",
      }),
    }),
  Wh = "_instructions_1sj51_1",
  $h = "_insHeading_1sj51_21",
  kh = "_steps_1sj51_41",
  Fh = "_stepText_1sj51_77",
  Ba = { instructions: Wh, insHeading: $h, steps: kh, stepText: Fh },
  Ih = () =>
    b.jsx("div", {
      children: b.jsx("div", {
        className: Ba.instructions,
        id: "instTab",
        children: b.jsxs("div", {
          children: [
            b.jsx("p", { className: Ba.insHeading, children: "Instructions" }),
            b.jsxs("ul", {
              className: Ba.steps,
              children: [
                b.jsxs("li", {
                  children: [
                    b.jsx("p", {
                      children: b.jsx("b", { children: "Step 1:" }),
                    }),
                    b.jsx("p", {
                      className: Ba.stepText,
                      children:
                        "The aim of this experiment is to get familiarized with the biomdecal signals.",
                    }),
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("p", {
                      children: b.jsx("b", { children: "Step 2:" }),
                    }),
                    b.jsxs("p", {
                      className: Ba.stepText,
                      children: [
                        "Click on ",
                        b.jsx("span", { children: "Next" }),
                        " Button to view the next biomdecal signal.",
                      ],
                    }),
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("p", {
                      children: b.jsx("b", { children: "Step 3:" }),
                    }),
                    b.jsxs("p", {
                      className: Ba.stepText,
                      children: [
                        "Click on ",
                        b.jsx("span", { children: "Previous" }),
                        " button to go back to previous biomdecal signal.",
                      ],
                    }),
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("p", {
                      children: b.jsx("b", { children: "Step 4:" }),
                    }),
                    b.jsxs("p", {
                      className: Ba.stepText,
                      children: [
                        "Repeat ",
                        b.jsx("span", { children: "Step 2" }),
                        " and ",
                        b.jsx("span", { children: "Step 3" }),
                        " until you reach the end of the experiment.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Ph = "_middlePanelWrapper_p0d2b_47",
  lv = "_contentArea_p0d2b_59",
  tv = "_instructionPanel_p0d2b_69",
  av = "_fadeIn_p0d2b_87",
  uv = "_fadeOut_p0d2b_95",
  Ya = {
    middlePanelWrapper: Ph,
    contentArea: lv,
    instructionPanel: tv,
    fadeIn: av,
    fadeOut: uv,
  },
  ev = "_ecgContainer_u62u6_1",
  nv = "_subHeading_u62u6_33",
  cv = "_paragraph_u62u6_49",
  iv = "_list_u62u6_61",
  fv = "_ecgImage_u62u6_79",
  sv = "_ecgImageContainer_u62u6_95",
  at = {
    ecgContainer: ev,
    subHeading: nv,
    paragraph: cv,
    list: iv,
    ecgImage: fv,
    ecgImageContainer: sv,
  },
  dv = "images/ecgSignal.png",
  ov = () =>
    b.jsxs("div", {
      className: at.ecgContainer,
      children: [
        b.jsxs("p", {
          className: at.paragraph,
          children: [
            b.jsx("b", { children: "Electrocardiogram (ECG)" }),
            " is the recording of the heart’s electrical activity, obtained by measuring the biopotentials generated during depolarization and repolarization of the cardiac muscles.",
          ],
        }),
        b.jsxs("p", {
          className: at.paragraph,
          children: [
            b.jsx("b", { children: "Origin:" }),
            " Generated by the biopotentials of the heart muscles during depolarization and repolarization.",
          ],
        }),
        b.jsx("h3", {
          className: at.subHeading,
          children: "Signal Characteristics",
        }),
        b.jsxs("ul", {
          className: at.list,
          children: [
            b.jsx("li", { children: "Amplitude: Approximately 0.1 – 4 mV" }),
            b.jsx("li", {
              children: "Frequency content: From DC up to ~100 Hz",
            }),
            b.jsx("li", {
              children:
                "Electrodes: Measured using surface electrodes placed at specific points on the body",
            }),
          ],
        }),
        b.jsx("h3", {
          className: at.subHeading,
          children: "Clinical Significance",
        }),
        b.jsx("p", {
          className: at.paragraph,
          children:
            "Used to assess heart rate and rhythm, detect cardiac abnormalities such as arrhythmias and conduction defects, and provide a valuable timing reference in cardiovascular measurements.",
        }),
        b.jsx("h3", {
          className: at.subHeading,
          children: "Typical ECG Waveform",
        }),
        b.jsx("p", {
          className: at.paragraph,
          children:
            "The diagram below shows the principal components of a standard ECG signal:",
        }),
        b.jsxs("div", {
          className: at.ecgImageContainer,
          children: [
            b.jsx("img", {
              src: dv,
              alt: "ECG Signal",
              className: at.ecgImage,
            }),
            b.jsxs("ul", {
              className: at.list,
              children: [
                b.jsxs("li", {
                  children: [
                    b.jsx("b", { children: "P wave:" }),
                    " Atrial depolarization",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("b", { children: "QRS complex:" }),
                    " Ventricular depolarization",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("b", { children: "T wave:" }),
                    " Ventricular repolarization",
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsx("p", {
          className: at.paragraph,
          children:
            "Various intervals, such as the PR interval and QT interval, correspond to different phases of the cardiac cycle. Each feature can be analyzed to assess heart function and detect abnormalities.",
        }),
      ],
    }),
  rv = "_ecgContainer_1vx8t_1",
  hv = "_subHeading_1vx8t_33",
  vv = "_paragraph_1vx8t_49",
  yv = "_list_1vx8t_61",
  mv = "_ecgImage_1vx8t_79",
  gt = {
    ecgContainer: rv,
    subHeading: hv,
    paragraph: vv,
    list: yv,
    ecgImage: mv,
  },
  gv = "images/eegSignal.png",
  Sv = () =>
    b.jsxs("div", {
      className: gt.ecgContainer,
      children: [
        b.jsxs("p", {
          className: gt.paragraph,
          children: [
            b.jsx("b", { children: "Electroencephalogram (EEG)" }),
            " is the recorded representation of the bioelectric potential generated by the neuronal activity of the brain.",
          ],
        }),
        b.jsxs("p", {
          className: gt.paragraph,
          children: [
            b.jsx("b", { children: "Origin:" }),
            " Generated by the electrical activity of neurons in the brain, resulting mainly from postsynaptic potentials of large groups of cortical cells.",
          ],
        }),
        b.jsx("h3", {
          className: gt.subHeading,
          children: "Signal Characteristics",
        }),
        b.jsxs("ul", {
          className: gt.list,
          children: [
            b.jsx("li", {
              children: "Amplitude: Approximately 10 – 100 μV (peak)",
            }),
            b.jsx("li", {
              children: "Frequency content: From DC up to ~100 Hz",
            }),
            b.jsx("li", {
              children:
                "Electrodes: Measured with surface electrodes on the scalp and with needle electrodes just beneath the surface or driven into specific locations within the brain.",
            }),
          ],
        }),
        b.jsx("h3", {
          className: gt.subHeading,
          children: "Clinical Significance",
        }),
        b.jsx("p", {
          className: gt.paragraph,
          children:
            "Helps detect and diagnose neurological disorders such as epilepsy, enables spectral analysis of brain activity and measurement of evoked potentials, and plays a key role in monitoring brain states like sleep, consciousness, and anesthesia.",
        }),
        b.jsx("h3", {
          className: gt.subHeading,
          children: "Typical EEG Waveforms and Frequency Bands",
        }),
        b.jsx("p", {
          className: gt.paragraph,
          children:
            "EEG signals vary depending on electrode placement and brain activity. They are categorized into frequency bands that correlate with mental states:",
        }),
        b.jsxs("ul", {
          className: gt.list,
          children: [
            b.jsxs("li", {
              children: [
                b.jsx("b", { children: "Delta (below 3 Hz):" }),
                " Prominent in deep sleep",
              ],
            }),
            b.jsxs("li", {
              children: [
                b.jsx("b", { children: "Theta (3–8 Hz):" }),
                " Associated with light sleep and drowsiness",
              ],
            }),
            b.jsxs("li", {
              children: [
                b.jsx("b", { children: "Alpha (8–13 Hz):" }),
                " Seen when relaxed with eyes closed, representing synchronized brain activity",
              ],
            }),
            b.jsxs("li", {
              children: [
                b.jsx("b", { children: "Beta (above 13 Hz):" }),
                " Linked to alertness and active thinking, showing desynchronized patterns",
              ],
            }),
          ],
        }),
        b.jsx("img", { src: gv, alt: "EEG Signal", className: gt.ecgImage }),
      ],
    }),
  bv = "_ecgContainer_170hc_1",
  _v = "_subHeading_170hc_17",
  Tv = "_paragraph_170hc_25",
  Ev = "_list_170hc_31",
  Av = "_ecgImage_170hc_40",
  pt = {
    ecgContainer: bv,
    subHeading: _v,
    paragraph: Tv,
    list: Ev,
    ecgImage: Av,
  },
  zv = "images/emgSignal.png",
  pv = () =>
    b.jsxs("div", {
      className: pt.ecgContainer,
      children: [
        b.jsxs("p", {
          className: pt.paragraph,
          children: [
            b.jsx("b", { children: "Electromyogram (EMG)" }),
            " is the recording of bioelectric potentials generated by skeletal muscles during contraction and relaxation.",
          ],
        }),
        b.jsxs("p", {
          className: pt.paragraph,
          children: [
            b.jsx("b", { children: "Origin:" }),
            " Generated by the depolarization and repolarization of muscle fibers, primarily reflecting the summed action potentials of motor units in skeletal muscle.",
          ],
        }),
        b.jsx("h3", {
          className: pt.subHeading,
          children: "Signal Characteristics",
        }),
        b.jsxs("ul", {
          className: pt.list,
          children: [
            b.jsx("li", { children: "Amplitude: Approximately 50 μV to 1 mV" }),
            b.jsx("li", {
              children: "Frequency content: From about 10 Hz up to 3 kHz",
            }),
            b.jsx("li", {
              children:
                "Electrodes: Measured with surface electrodes on the skin or needle electrodes penetrating the muscles fibre.",
            }),
          ],
        }),
        b.jsx("h3", {
          className: pt.subHeading,
          children: "Clinical Significance",
        }),
        b.jsx("p", {
          className: pt.paragraph,
          children:
            "Indicates muscle contraction intensity and timing, used to study muscle fatigue and neuromuscular function.",
        }),
        b.jsx("h3", {
          className: pt.subHeading,
          children: "Typical EMG Waveform",
        }),
        b.jsx("p", {
          className: pt.paragraph,
          children:
            "The EMG signal is a complex, noise-like pattern representing the instantaneous sum of action potentials from multiple muscle fibers. When the muscle is at rest (baseline), the signal is minimal. During contraction, the waveform amplitude increases, producing an interference pattern. The energy and shape of the EMG waveform depend on muscle activity level and electrode placement.",
        }),
        b.jsx("img", { src: zv, alt: "EMG Signal", className: pt.ecgImage }),
      ],
    }),
  Ov = ({ showInstructions: O, currentSignal: F }) => {
    const Y = Ae.useRef(null);
    return (
      Ae.useEffect(() => {
        Y.current &&
          (O
            ? (Y.current.classList.add(Ya.fadeIn),
              Y.current.classList.remove(Ya.fadeOut))
            : (Y.current.classList.add(Ya.fadeOut),
              Y.current.classList.remove(Ya.fadeIn)));
      }, [O]),
      b.jsxs("div", {
        className: Ya.middlePanelWrapper,
        children: [
          O &&
            b.jsx("div", {
              className: Ya.instructionPanel,
              ref: Y,
              children: b.jsx(Ih, {}),
            }),
          b.jsxs("div", {
            className: Ya.contentArea,
            children: [
              F === "ecg" && b.jsx(ov, {}),
              F === "eeg" && b.jsx(Sv, {}),
              F === "emg" && b.jsx(pv, {}),
            ],
          }),
        ],
      })
    );
  },
  Mv = "_previous_1rybh_101",
  Dv = "_next_1rybh_107",
  Xn = {
    "button-panel-container": "_button-panel-container_1rybh_3",
    "button-panel-title": "_button-panel-title_1rybh_15",
    previous: Mv,
    next: Dv,
  },
  Uv = ({
    currentSignal: O,
    onNext: F,
    onPrevious: Y,
    isFirstSignal: m,
    isLastSignal: G,
  }) =>
    b.jsxs("div", {
      className: Xn["button-panel-container"],
      children: [
        b.jsx("div", {
          children: b.jsx("button", {
            className: Xn.previous,
            onClick: Y,
            disabled: m,
            children: "Previous",
          }),
        }),
        b.jsx("div", {
          children: b.jsx("h3", {
            className: Xn["button-panel-title"],
            children: O.name,
          }),
        }),
        b.jsx("div", {
          children: b.jsx("button", {
            className: Xn.next,
            onClick: F,
            disabled: G,
            children: "Next",
          }),
        }),
      ],
    }),
  Nv = () => {
    const [O, F] = Ae.useState(!1),
      [Y, m] = Ae.useState(0),
      G = [
        { id: 0, name: "Electrocardiogram(ECG)", code: "ecg" },
        { id: 1, name: "Electroencephalogram(EEG)", code: "eeg" },
        { id: 2, name: "Electromyogram(EMG)", code: "emg" },
      ],
      J = () => {
        Y < G.length - 1 && m(Y + 1);
      },
      dl = () => {
        Y > 0 && m(Y - 1);
      },
      zl = () => {
        F(!O);
      },
      N = (E) => {
        O && !E.target.closest(`.${Vt.instructionBtn}`) && F(!1);
      };
    return b.jsx("div", {
      className: Vt["grand-container"],
      onClick: N,
      children: b.jsxs("div", {
        className: Vt["parent-container"],
        children: [
          b.jsx("div", {
            className: Vt["top-container"],
            children: b.jsx(wh, {}),
          }),
          b.jsx("div", {
            className: Vt["button-container"],
            children: b.jsx(Uv, {
              currentSignal: G[Y],
              onNext: J,
              onPrevious: dl,
              isFirstSignal: Y === 0,
              isLastSignal: Y === G.length - 1,
            }),
          }),
          b.jsx("div", {
            className: Vt.instructionBtn,
            onClick: (E) => {
              E.stopPropagation(), zl();
            },
            children: "Instructions",
          }),
          b.jsx("div", {
            className: Vt["middle-container"],
            children: b.jsx("div", {
              className: Vt["middle-panel-container"],
              children: b.jsx(Ov, {
                showInstructions: O,
                currentSignal: G[Y].code,
              }),
            }),
          }),
          b.jsx("div", {
            className: Vt["bottom-container"],
            children: "©Copyright 2025 Virtual Labs, IIT Roorkee",
          }),
        ],
      }),
    });
  },
  Rv = () => b.jsx("div", { children: b.jsx(Nv, {}) });
Lh.createRoot(document.getElementById("root")).render(
  b.jsx(Ae.StrictMode, { children: b.jsx(Rv, {}) })
);

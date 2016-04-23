/*1461412558,,JIT Construction: v2300520,en_US*/
/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
    window.FB || (function(window, fb_fif_window) {
        var apply = Function.prototype.apply;

        function bindContext(fn, thisArg) {
            return function _sdkBound() {
                return apply.call(fn, thisArg, arguments);
            };
        }
        var global = {
            __type: 'JS_SDK_SANDBOX',
            window: window,
            document: window.document
        };
        var sandboxWhitelist = ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'];
        for (var i = 0; i < sandboxWhitelist.length; i++) {
            global[sandboxWhitelist[i]] = bindContext(window[sandboxWhitelist[i]], window);
        }(function() {
            var self = window;
            var __DEV__ = 0;

            function emptyFunction() {};
            var __transform_includes = {};
            var __annotator, __bodyWrapper;
            var __w, __t;
            var undefined;
            with(this) {
                (function() {
                    var a = {},
                        b = function(i, j) {
                            if (!i && !j) return null;
                            var k = {};
                            if (typeof i !== 'undefined') k.type = i;
                            if (typeof j !== 'undefined') k.signature = j;
                            return k;
                        },
                        c = function(i, j) {
                            return b(i && /^[A-Z]/.test(i) ? i : undefined, j && (j.params && j.params.length || j.returns) ? 'function(' + (j.params ? j.params.map(function(k) {
                                return (/\?/.test(k) ? '?' + k.replace('?', '') : k);
                            }).join(',') : '') + ')' + (j.returns ? ':' + j.returns : '') : undefined);
                        },
                        d = function(i, j, k) {
                            return i;
                        },
                        e = function(i, j, k) {
                            if ('sourcemeta' in __transform_includes) i.__SMmeta = j;
                            if ('typechecks' in __transform_includes) {
                                var l = c(j ? j.name : undefined, k);
                                if (l) __w(i, l);
                            }
                            return i;
                        },
                        f = function(i, j, k) {
                            return k.apply(i, j);
                        },
                        g = function(i, j, k, l) {
                            if (l && l.params) __t.apply(i, l.params);
                            var m = k.apply(i, j);
                            if (l && l.returns) __t([m, l.returns]);
                            return m;
                        },
                        h = function(i, j, k, l, m) {
                            if (m) {
                                if (!m.callId) m.callId = m.module + ':' + (m.line || 0) + ':' + (m.column || 0);
                                var n = m.callId;
                                a[n] = (a[n] || 0) + 1;
                            }
                            return k.apply(i, j);
                        };
                    if (typeof __transform_includes === 'undefined') {
                        __annotator = d;
                        __bodyWrapper = f;
                    } else {
                        __annotator = e;
                        if ('codeusage' in __transform_includes) {
                            __annotator = d;
                            __bodyWrapper = h;
                            __bodyWrapper.getCodeUsage = function() {
                                return a;
                            };
                            __bodyWrapper.clearCodeUsage = function() {
                                a = {};
                            };
                        } else if ('typechecks' in __transform_includes) {
                            __bodyWrapper = g;
                        } else __bodyWrapper = f;
                    }
                })();
                __t = function(a) {
                    return a[0];
                };
                __w = function(a) {
                    return a;
                };
                var require, __d;
                (function(a) {
                    var b = {},
                        c = {},
                        d = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
                    require = function(e, f) {
                        if (c.hasOwnProperty(e)) return c[e];
                        if (!b.hasOwnProperty(e)) {
                            if (f) return null;
                            throw new Error('Module ' + e + ' has not been defined');
                        }
                        var g = b[e],
                            h = g.deps,
                            i = g.factory.length,
                            j, k = [];
                        for (var l = 0; l < i; l++) {
                            switch (h[l]) {
                                case 'module':
                                    j = g;
                                    break;
                                case 'exports':
                                    j = g.exports;
                                    break;
                                case 'global':
                                    j = a;
                                    break;
                                case 'require':
                                    j = require;
                                    break;
                                case 'requireDynamic':
                                    j = null;
                                    break;
                                case 'requireLazy':
                                    j = null;
                                    break;
                                default:
                                    j = require.call(null, h[l]);
                            }
                            k.push(j);
                        }
                        g.factory.apply(a, k);
                        c[e] = g.exports;
                        return g.exports;
                    };
                    require.__markCompiled = function() {};
                    __d = function(e, f, g, h) {
                        if (typeof g == 'function') {
                            b[e] = {
                                factory: g,
                                deps: d.concat(f),
                                exports: {}
                            };
                            if (h === 3) require.call(null, e);
                        } else c[e] = g;
                    };
                })(this);
                __d('ES5Array', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};
                    h.isArray = function(i) {
                        return Object.prototype.toString.call(i) == '[object Array]';
                    };
                    f.exports = h;
                }, null);
                __d('ES5ArrayPrototype', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};
                    h.map = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k, l = this.length,
                            m = new Array(l);
                        for (k = 0; k < l; ++k)
                            if (k in this) m[k] = i.call(j, this[k], k, this);
                        return m;
                    };
                    h.forEach = function(i, j) {
                        h.map.call(this, i, j);
                    };
                    h.filter = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k, l, m = this.length,
                            n = [];
                        for (k = 0; k < m; ++k)
                            if (k in this) {
                                l = this[k];
                                if (i.call(j, l, k, this)) n.push(l);
                            }
                        return n;
                    };
                    h.every = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k = new Object(this),
                            l = k.length;
                        for (var m = 0; m < l; m++)
                            if (m in k)
                                if (!i.call(j, k[m], m, k)) return false;
                        return true;
                    };
                    h.some = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k = new Object(this),
                            l = k.length;
                        for (var m = 0; m < l; m++)
                            if (m in k)
                                if (i.call(j, k[m], m, k)) return true;
                        return false;
                    };
                    h.indexOf = function(i, j) {
                        var k = this.length;
                        j |= 0;
                        if (j < 0) j += k;
                        for (; j < k; j++)
                            if (j in this && this[j] === i) return j;
                        return -1;
                    };
                    f.exports = h;
                }, null);
                __d("ES5Date", [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};
                    h.now = function() {
                        return new Date().getTime();
                    };
                    f.exports = h;
                }, null);
                __d('ES5FunctionPrototype', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};
                    h.bind = function(i) {
                        if (typeof this != 'function') throw new TypeError('Bind must be called on a function');
                        var j = this,
                            k = Array.prototype.slice.call(arguments, 1);

                        function l() {
                            return j.apply(i, k.concat(Array.prototype.slice.call(arguments)));
                        }
                        l.displayName = 'bound:' + (j.displayName || j.name || '(?)');
                        l.toString = function m() {
                            return 'bound: ' + j;
                        };
                        return l;
                    };
                    f.exports = h;
                }, null);
                __d('ie8DontEnum', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'prototypeIsEnumerable', 'constructor'],
                        i = {}.hasOwnProperty,
                        j = function() {};
                    if ({
                            toString: true
                        }.propertyIsEnumerable('toString')) j = function(k, l) {
                        for (var m = 0; m < h.length; m++) {
                            var n = h[m];
                            if (i.call(k, n)) l(n);
                        }
                    };
                    f.exports = j;
                }, null);
                __d('ES5Object', ['ie8DontEnum'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = {}.hasOwnProperty,
                        j = {};

                    function k() {}
                    j.create = function(l) {
                        var m = typeof l;
                        if (m != 'object' && m != 'function') throw new TypeError('Object prototype may only be a Object or null');
                        k.prototype = l;
                        return new k();
                    };
                    j.keys = function(l) {
                        var m = typeof l;
                        if (m != 'object' && m != 'function' || l === null) throw new TypeError('Object.keys called on non-object');
                        var n = [];
                        for (var o in l)
                            if (i.call(l, o)) n.push(o);
                        h(l, function(p) {
                            return n.push(p);
                        });
                        return n;
                    };
                    f.exports = j;
                }, null);
                __d('ES5StringPrototype', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};
                    h.trim = function() {
                        if (this == null) throw new TypeError('String.prototype.trim called on null or undefined');
                        return String.prototype.replace.call(this, /^\s+|\s+$/g, '');
                    };
                    h.startsWith = function(i) {
                        var j = String(this);
                        if (this == null) throw new TypeError('String.prototype.startsWith called on null or undefined');
                        var k = arguments.length > 1 ? Number(arguments[1]) : 0;
                        if (isNaN(k)) k = 0;
                        var l = Math.min(Math.max(k, 0), j.length);
                        return j.indexOf(String(i), k) == l;
                    };
                    h.endsWith = function(i) {
                        var j = String(this);
                        if (this == null) throw new TypeError('String.prototype.endsWith called on null or undefined');
                        var k = j.length,
                            l = String(i),
                            m = arguments.length > 1 ? Number(arguments[1]) : k;
                        if (isNaN(m)) m = 0;
                        var n = Math.min(Math.max(m, 0), k),
                            o = n - l.length;
                        if (o < 0) return false;
                        return j.lastIndexOf(l, o) == o;
                    };
                    h.contains = function(i) {
                        if (this == null) throw new TypeError('String.prototype.contains called on null or undefined');
                        var j = String(this),
                            k = arguments.length > 1 ? Number(arguments[1]) : 0;
                        if (isNaN(k)) k = 0;
                        return j.indexOf(String(i), k) != -1;
                    };
                    h.repeat = function(i) {
                        if (this == null) throw new TypeError('String.prototype.repeat called on null or undefined');
                        var j = String(this),
                            k = i ? Number(i) : 0;
                        if (isNaN(k)) k = 0;
                        if (k < 0 || k === Infinity) throw RangeError();
                        if (k === 1) return j;
                        if (k === 0) return '';
                        var l = '';
                        while (k) {
                            if (k & 1) l += j;
                            if (k >>= 1) j += j;
                        }
                        return l;
                    };
                    f.exports = h;
                }, null);
                __d('ES6Array', [], function a(b, c, d, e, f, g) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {
                        from: function(i) {
                            if (i == null) throw new TypeError('Object is null or undefined');
                            var j = arguments[1],
                                k = arguments[2],
                                l = this,
                                m = Object(i),
                                n = typeof Symbol === 'function' ? typeof Symbol === 'function' ? Symbol.iterator : '@@iterator' : '@@iterator',
                                o = typeof j === 'function',
                                p = typeof m[n] === 'function',
                                q = 0,
                                r, s;
                            if (p) {
                                r = typeof l === 'function' ? new l() : [];
                                var t = m[n](),
                                    u;
                                while (!(u = t.next()).done) {
                                    s = u.value;
                                    if (o) s = j.call(k, s, q);
                                    r[q] = s;
                                    q += 1;
                                }
                                r.length = q;
                                return r;
                            }
                            var v = m.length;
                            if (isNaN(v) || v < 0) v = 0;
                            r = typeof l === 'function' ? new l(v) : new Array(v);
                            while (q < v) {
                                s = m[q];
                                if (o) s = j.call(k, s, q);
                                r[q] = s;
                                q += 1;
                            }
                            r.length = q;
                            return r;
                        }
                    };
                    f.exports = h;
                }, null);
                __d('ES6ArrayPrototype', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {
                        find: function(i, j) {
                            if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
                            if (typeof i !== 'function') throw new TypeError('predicate must be a function');
                            var k = h.findIndex.call(this, i, j);
                            return k === -1 ? void 0 : this[k];
                        },
                        findIndex: function(i, j) {
                            if (this == null) throw new TypeError('Array.prototype.findIndex called on null or undefined');
                            if (typeof i !== 'function') throw new TypeError('predicate must be a function');
                            var k = Object(this),
                                l = k.length >>> 0;
                            for (var m = 0; m < l; m++)
                                if (i.call(j, k[m], m, k)) return m;
                            return -1;
                        },
                        fill: function(i) {
                            if (this == null) throw new TypeError('Array.prototype.fill called on null or undefined');
                            var j = Object(this),
                                k = j.length >>> 0,
                                l = arguments[1],
                                m = l >> 0,
                                n = m < 0 ? Math.max(k + m, 0) : Math.min(m, k),
                                o = arguments[2],
                                p = o === undefined ? k : o >> 0,
                                q = p < 0 ? Math.max(k + p, 0) : Math.min(p, k);
                            while (n < q) {
                                j[n] = i;
                                n++;
                            }
                            return j;
                        }
                    };
                    f.exports = h;
                }, null);
                __d('ES6DatePrototype', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(j) {
                        return (j < 10 ? '0' : '') + j;
                    }
                    var i = {
                        toISOString: function() {
                            if (!isFinite(this)) throw new Error('Invalid time value');
                            var j = this.getUTCFullYear();
                            j = (j < 0 ? '-' : j > 9999 ? '+' : '') + ('00000' + Math.abs(j)).slice(0 <= j && j <= 9999 ? -4 : -6);
                            return j + '-' + h(this.getUTCMonth() + 1) + '-' + h(this.getUTCDate()) + 'T' + h(this.getUTCHours()) + ':' + h(this.getUTCMinutes()) + ':' + h(this.getUTCSeconds()) + '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
                        }
                    };
                    f.exports = i;
                }, null);
                __d('ES6Number', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = Math.pow(2, -52),
                        i = Math.pow(2, 53) - 1,
                        j = -1 * i,
                        k = {
                            isFinite: function(l) {
                                return typeof l == 'number' && isFinite(l);
                            },
                            isNaN: function(l) {
                                return typeof l == 'number' && isNaN(l);
                            },
                            isInteger: function(l) {
                                return this.isFinite(l) && Math.floor(l) === l;
                            },
                            isSafeInteger: function(l) {
                                return this.isFinite(l) && l >= this.MIN_SAFE_INTEGER && l <= this.MAX_SAFE_INTEGER && Math.floor(l) === l;
                            },
                            EPSILON: h,
                            MAX_SAFE_INTEGER: i,
                            MIN_SAFE_INTEGER: j
                        };
                    f.exports = k;
                }, null);
                __d('ES6Object', ['ie8DontEnum'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = {}.hasOwnProperty,
                        j = {
                            assign: function(k) {
                                if (k == null) throw new TypeError('Object.assign target cannot be null or undefined');
                                k = Object(k);
                                for (var l = arguments.length, m = Array(l > 1 ? l - 1 : 0), n = 1; n < l; n++) m[n - 1] = arguments[n];
                                for (var o = 0; o < m.length; o++) {
                                    var p = m[o];
                                    if (p == null) continue;
                                    p = Object(p);
                                    for (var q in p)
                                        if (i.call(p, q)) k[q] = p[q];
                                    h(p, function(r) {
                                        return k[r] = p[r];
                                    });
                                }
                                return k;
                            },
                            is: function(k, l) {
                                if (k === l) {
                                    return k !== 0 || 1 / k === 1 / l;
                                } else return k !== k && l !== l;
                            }
                        };
                    f.exports = j;
                }, null);
                __d('ES7Object', ['ie8DontEnum'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = {}.hasOwnProperty,
                        j = {};
                    j.entries = function(k) {
                        if (k == null) throw new TypeError('Object.entries called on non-object');
                        var l = [];
                        for (var m in k)
                            if (i.call(k, m)) l.push([m, k[m]]);
                        h(k, function(n) {
                            return l.push([n, k[n]]);
                        });
                        return l;
                    };
                    j.values = function(k) {
                        if (k == null) throw new TypeError('Object.values called on non-object');
                        var l = [];
                        for (var m in k)
                            if (i.call(k, m)) l.push(k[m]);
                        h(k, function(n) {
                            return l.push(k[n]);
                        });
                        return l;
                    };
                    f.exports = j;
                }, null);
                __d('ES7StringPrototype', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};
                    h.trimLeft = function() {
                        return this.replace(/^\s+/, '');
                    };
                    h.trimRight = function() {
                        return this.replace(/\s+$/, '');
                    };
                    f.exports = h;
                }, null);
                /**
                 * @providesModule JSON3
                 * @preserve-header
                 *
                 *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
                 */
                __d("JSON3", [], function a(b, c, d, e, f, g) {
                    c.__markCompiled && c.__markCompiled();
                    (function() {
                        var h = {}.toString,
                            i, j, k, l = f.exports = {},
                            m = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',
                            n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca = new Date(-3509827334573292),
                            da, ea, fa;
                        try {
                            ca = ca.getUTCFullYear() == -109252 && ca.getUTCMonth() === 0 && ca.getUTCDate() == 1 && ca.getUTCHours() == 10 && ca.getUTCMinutes() == 37 && ca.getUTCSeconds() == 6 && ca.getUTCMilliseconds() == 708;
                        } catch (ga) {}
                        if (!ca) {
                            da = Math.floor;
                            ea = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                            fa = function(ha, ia) {
                                return ea[ia] + 365 * (ha - 1970) + da((ha - 1969 + (ia = +(ia > 1))) / 4) - da((ha - 1901 + ia) / 100) + da((ha - 1601 + ia) / 400);
                            };
                        }
                        if (typeof JSON == "object" && JSON) {
                            l.stringify = JSON.stringify;
                            l.parse = JSON.parse;
                        }
                        if ((n = typeof l.stringify == "function" && !fa)) {
                            (ca = function() {
                                return 1;
                            }).toJSON = ca;
                            try {
                                n = l.stringify(0) === "0" && l.stringify(new Number()) === "0" && l.stringify(new String()) == '""' && l.stringify(h) === k && l.stringify(k) === k && l.stringify() === k && l.stringify(ca) === "1" && l.stringify([ca]) == "[1]" && l.stringify([k]) == "[null]" && l.stringify(null) == "null" && l.stringify([k, h, null]) == "[null,null,null]" && l.stringify({
                                    result: [ca, true, false, null, "\0\b\n\f\r\t"]
                                }) == m && l.stringify(null, ca) === "1" && l.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && l.stringify(new Date(-8.64e+15)) == '"-271821-04-20T00:00:00.000Z"' && l.stringify(new Date(8.64e+15)) == '"+275760-09-13T00:00:00.000Z"' && l.stringify(new Date(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && l.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                            } catch (ga) {
                                n = false;
                            }
                        }
                        if (typeof l.parse == "function") try {
                            if (l.parse("0") === 0 && !l.parse(false)) {
                                ca = l.parse(m);
                                if ((s = ca.A.length == 5 && ca.A[0] == 1)) {
                                    try {
                                        s = !l.parse('"\t"');
                                    } catch (ga) {}
                                    if (s) try {
                                        s = l.parse("01") != 1;
                                    } catch (ga) {}
                                }
                            }
                        } catch (ga) {
                            s = false;
                        }
                        ca = m = null;
                        if (!n || !s) {
                            if (!(i = {}.hasOwnProperty)) i = function(ha) {
                                var ia = {},
                                    ja;
                                if ((ia.__proto__ = null, ia.__proto__ = {
                                        toString: 1
                                    }, ia).toString != h) {
                                    i = function(ka) {
                                        var la = this.__proto__,
                                            ma = ka in (this.__proto__ = null, this);
                                        this.__proto__ = la;
                                        return ma;
                                    };
                                } else {
                                    ja = ia.constructor;
                                    i = function(ka) {
                                        var la = (this.constructor || ja).prototype;
                                        return ka in this && !(ka in la && this[ka] === la[ka]);
                                    };
                                }
                                ia = null;
                                return i.call(this, ha);
                            };
                            j = function(ha, ia) {
                                var ja = 0,
                                    ka, la, ma, na;
                                (ka = function() {
                                    this.valueOf = 0;
                                }).prototype.valueOf = 0;
                                la = new ka();
                                for (ma in la)
                                    if (i.call(la, ma)) ja++;
                                ka = la = null;
                                if (!ja) {
                                    la = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                    na = function(oa, pa) {
                                        var qa = h.call(oa) == "[object Function]",
                                            ra, sa;
                                        for (ra in oa)
                                            if (!(qa && ra == "prototype") && i.call(oa, ra)) pa(ra);
                                        for (sa = la.length; ra = la[--sa]; i.call(oa, ra) && pa(ra));
                                    };
                                } else if (ja == 2) {
                                    na = function(oa, pa) {
                                        var qa = {},
                                            ra = h.call(oa) == "[object Function]",
                                            sa;
                                        for (sa in oa)
                                            if (!(ra && sa == "prototype") && !i.call(qa, sa) && (qa[sa] = 1) && i.call(oa, sa)) pa(sa);
                                    };
                                } else na = function(oa, pa) {
                                    var qa = h.call(oa) == "[object Function]",
                                        ra, sa;
                                    for (ra in oa)
                                        if (!(qa && ra == "prototype") && i.call(oa, ra) && !(sa = ra === "constructor")) pa(ra);
                                    if (sa || i.call(oa, (ra = "constructor"))) pa(ra);
                                };
                                return na(ha, ia);
                            };
                            if (!n) {
                                o = {
                                    "\\": "\\\\",
                                    '"': '\\"',
                                    "\b": "\\b",
                                    "\f": "\\f",
                                    "\n": "\\n",
                                    "\r": "\\r",
                                    "\t": "\\t"
                                };
                                p = function(ha, ia) {
                                    return ("000000" + (ia || 0)).slice(-ha);
                                };
                                q = function(ha) {
                                    var ia = '"',
                                        ja = 0,
                                        ka;
                                    for (; ka = ha.charAt(ja); ja++) ia += '\\"\b\f\n\r\t'.indexOf(ka) > -1 ? o[ka] : ka < " " ? "\\u00" + p(2, ka.charCodeAt(0).toString(16)) : ka;
                                    return ia + '"';
                                };
                                r = function(ha, ia, ja, ka, la, ma, na) {
                                    var oa = ia[ha],
                                        pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb, db;
                                    if (typeof oa == "object" && oa) {
                                        pa = h.call(oa);
                                        if (pa == "[object Date]" && !i.call(oa, "toJSON")) {
                                            if (oa > -1 / 0 && oa < 1 / 0) {
                                                if (fa) {
                                                    sa = da(oa / 86400000);
                                                    for (qa = da(sa / 365.2425) + 1970 - 1; fa(qa + 1, 0) <= sa; qa++);
                                                    for (ra = da((sa - fa(qa, 0)) / 30.42); fa(qa, ra + 1) <= sa; ra++);
                                                    sa = 1 + sa - fa(qa, ra);
                                                    ta = (oa % 86400000 + 86400000) % 86400000;
                                                    ua = da(ta / 3600000) % 24;
                                                    va = da(ta / 60000) % 60;
                                                    wa = da(ta / 1000) % 60;
                                                    xa = ta % 1000;
                                                } else {
                                                    qa = oa.getUTCFullYear();
                                                    ra = oa.getUTCMonth();
                                                    sa = oa.getUTCDate();
                                                    ua = oa.getUTCHours();
                                                    va = oa.getUTCMinutes();
                                                    wa = oa.getUTCSeconds();
                                                    xa = oa.getUTCMilliseconds();
                                                }
                                                oa = (qa <= 0 || qa >= 10000 ? (qa < 0 ? "-" : "+") + p(6, qa < 0 ? -qa : qa) : p(4, qa)) + "-" + p(2, ra + 1) + "-" + p(2, sa) + "T" + p(2, ua) + ":" + p(2, va) + ":" + p(2, wa) + "." + p(3, xa) + "Z";
                                            } else oa = null;
                                        } else if (typeof oa.toJSON == "function" && ((pa != "[object Number]" && pa != "[object String]" && pa != "[object Array]") || i.call(oa, "toJSON"))) oa = oa.toJSON(ha);
                                    }
                                    if (ja) oa = ja.call(ia, ha, oa);
                                    if (oa === null) return "null";
                                    pa = h.call(oa);
                                    if (pa == "[object Boolean]") {
                                        return "" + oa;
                                    } else if (pa == "[object Number]") {
                                        return oa > -1 / 0 && oa < 1 / 0 ? "" + oa : "null";
                                    } else if (pa == "[object String]") return q(oa);
                                    if (typeof oa == "object") {
                                        for (bb = na.length; bb--;)
                                            if (na[bb] === oa) throw TypeError();
                                        na.push(oa);
                                        ya = [];
                                        cb = ma;
                                        ma += la;
                                        if (pa == "[object Array]") {
                                            for (ab = 0, bb = oa.length; ab < bb; db || (db = true), ab++) {
                                                za = r(ab, oa, ja, ka, la, ma, na);
                                                ya.push(za === k ? "null" : za);
                                            }
                                            return db ? (la ? "[\n" + ma + ya.join(",\n" + ma) + "\n" + cb + "]" : ("[" + ya.join(",") + "]")) : "[]";
                                        } else {
                                            j(ka || oa, function(eb) {
                                                var fb = r(eb, oa, ja, ka, la, ma, na);
                                                if (fb !== k) ya.push(q(eb) + ":" + (la ? " " : "") + fb);
                                                db || (db = true);
                                            });
                                            return db ? (la ? "{\n" + ma + ya.join(",\n" + ma) + "\n" + cb + "}" : ("{" + ya.join(",") + "}")) : "{}";
                                        }
                                        na.pop();
                                    }
                                };
                                l.stringify = function(ha, ia, ja) {
                                    var ka, la, ma, na, oa, pa;
                                    if (typeof ia == "function" || typeof ia == "object" && ia)
                                        if (h.call(ia) == "[object Function]") {
                                            la = ia;
                                        } else if (h.call(ia) == "[object Array]") {
                                        ma = {};
                                        for (na = 0, oa = ia.length; na < oa; pa = ia[na++], ((h.call(pa) == "[object String]" || h.call(pa) == "[object Number]") && (ma[pa] = 1)));
                                    }
                                    if (ja)
                                        if (h.call(ja) == "[object Number]") {
                                            if ((ja -= ja % 1) > 0)
                                                for (ka = "", ja > 10 && (ja = 10); ka.length < ja; ka += " ");
                                        } else if (h.call(ja) == "[object String]") ka = ja.length <= 10 ? ja : ja.slice(0, 10);
                                    return r("", (pa = {}, pa[""] = ha, pa), la, ma, ka, "", []);
                                };
                            }
                            if (!s) {
                                t = String.fromCharCode;
                                u = {
                                    "\\": "\\",
                                    '"': '"',
                                    "/": "/",
                                    b: "\b",
                                    t: "\t",
                                    n: "\n",
                                    f: "\f",
                                    r: "\r"
                                };
                                v = function() {
                                    aa = ba = null;
                                    throw SyntaxError();
                                };
                                w = function() {
                                    var ha = ba,
                                        ia = ha.length,
                                        ja, ka, la, ma, na;
                                    while (aa < ia) {
                                        ja = ha.charAt(aa);
                                        if ("\t\r\n ".indexOf(ja) > -1) {
                                            aa++;
                                        } else if ("{}[]:,".indexOf(ja) > -1) {
                                            aa++;
                                            return ja;
                                        } else if (ja == '"') {
                                            for (ka = "@", aa++; aa < ia;) {
                                                ja = ha.charAt(aa);
                                                if (ja < " ") {
                                                    v();
                                                } else if (ja == "\\") {
                                                    ja = ha.charAt(++aa);
                                                    if ('\\"/btnfr'.indexOf(ja) > -1) {
                                                        ka += u[ja];
                                                        aa++;
                                                    } else if (ja == "u") {
                                                        la = ++aa;
                                                        for (ma = aa + 4; aa < ma; aa++) {
                                                            ja = ha.charAt(aa);
                                                            if (!(ja >= "0" && ja <= "9" || ja >= "a" && ja <= "f" || ja >= "A" && ja <= "F")) v();
                                                        }
                                                        ka += t("0x" + ha.slice(la, aa));
                                                    } else v();
                                                } else {
                                                    if (ja == '"') break;
                                                    ka += ja;
                                                    aa++;
                                                }
                                            }
                                            if (ha.charAt(aa) == '"') {
                                                aa++;
                                                return ka;
                                            }
                                            v();
                                        } else {
                                            la = aa;
                                            if (ja == "-") {
                                                na = true;
                                                ja = ha.charAt(++aa);
                                            }
                                            if (ja >= "0" && ja <= "9") {
                                                if (ja == "0" && (ja = ha.charAt(aa + 1), ja >= "0" && ja <= "9")) v();
                                                na = false;
                                                for (; aa < ia && (ja = ha.charAt(aa), ja >= "0" && ja <= "9"); aa++);
                                                if (ha.charAt(aa) == ".") {
                                                    ma = ++aa;
                                                    for (; ma < ia && (ja = ha.charAt(ma), ja >= "0" && ja <= "9"); ma++);
                                                    if (ma == aa) v();
                                                    aa = ma;
                                                }
                                                ja = ha.charAt(aa);
                                                if (ja == "e" || ja == "E") {
                                                    ja = ha.charAt(++aa);
                                                    if (ja == "+" || ja == "-") aa++;
                                                    for (ma = aa; ma < ia && (ja = ha.charAt(ma), ja >= "0" && ja <= "9"); ma++);
                                                    if (ma == aa) v();
                                                    aa = ma;
                                                }
                                                return +ha.slice(la, aa);
                                            }
                                            if (na) v();
                                            if (ha.slice(aa, aa + 4) == "true") {
                                                aa += 4;
                                                return true;
                                            } else if (ha.slice(aa, aa + 5) == "false") {
                                                aa += 5;
                                                return false;
                                            } else if (ha.slice(aa, aa + 4) == "null") {
                                                aa += 4;
                                                return null;
                                            }
                                            v();
                                        }
                                    }
                                    return "$";
                                };
                                x = function(ha) {
                                    var ia, ja, ka;
                                    if (ha == "$") v();
                                    if (typeof ha == "string") {
                                        if (ha.charAt(0) == "@") return ha.slice(1);
                                        if (ha == "[") {
                                            ia = [];
                                            for (;; ja || (ja = true)) {
                                                ha = w();
                                                if (ha == "]") break;
                                                if (ja)
                                                    if (ha == ",") {
                                                        ha = w();
                                                        if (ha == "]") v();
                                                    } else v();
                                                if (ha == ",") v();
                                                ia.push(x(ha));
                                            }
                                            return ia;
                                        } else if (ha == "{") {
                                            ia = {};
                                            for (;; ja || (ja = true)) {
                                                ha = w();
                                                if (ha == "}") break;
                                                if (ja)
                                                    if (ha == ",") {
                                                        ha = w();
                                                        if (ha == "}") v();
                                                    } else v();
                                                if (ha == "," || typeof ha != "string" || ha.charAt(0) != "@" || w() != ":") v();
                                                ia[ha.slice(1)] = x(w());
                                            }
                                            return ia;
                                        }
                                        v();
                                    }
                                    return ha;
                                };
                                z = function(ha, ia, ja) {
                                    var ka = y(ha, ia, ja);
                                    if (ka === k) {
                                        delete ha[ia];
                                    } else ha[ia] = ka;
                                };
                                y = function(ha, ia, ja) {
                                    var ka = ha[ia],
                                        la;
                                    if (typeof ka == "object" && ka)
                                        if (h.call(ka) == "[object Array]") {
                                            for (la = ka.length; la--;) z(ka, la, ja);
                                        } else j(ka, function(ma) {
                                            z(ka, ma, ja);
                                        });
                                    return ja.call(ha, ia, ka);
                                };
                                l.parse = function(ha, ia) {
                                    aa = 0;
                                    ba = ha;
                                    var ja = x(w());
                                    if (w() != "$") v();
                                    aa = ba = null;
                                    return ia && h.call(ia) == "[object Function]" ? y((ca = {}, ca[""] = ja, ca), "", ia) : ja;
                                };
                            }
                        }
                    }).call(this);
                }, null);
                __d('ES', ['ES5ArrayPrototype', 'ES5FunctionPrototype', 'ES5StringPrototype', 'ES5Array', 'ES5Object', 'ES5Date', 'JSON3', 'ES6Array', 'ES6Object', 'ES6ArrayPrototype', 'ES6DatePrototype', 'ES6Number', 'ES7StringPrototype', 'ES7Object'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
                    if (c.__markCompiled) c.__markCompiled();
                    var v = {}.toString,
                        w = {
                            'JSON.stringify': n.stringify,
                            'JSON.parse': n.parse
                        },
                        x = {
                            'Array.prototype': h,
                            'Function.prototype': i,
                            'String.prototype': j,
                            Object: l,
                            Array: k,
                            Date: m
                        },
                        y = {
                            Object: p,
                            'Array.prototype': q,
                            'Date.prototype': r,
                            Number: s,
                            Array: o
                        },
                        z = {
                            Object: u,
                            'String.prototype': t
                        };

                    function aa(ca) {
                        for (var da in ca) {
                            if (!ca.hasOwnProperty(da)) continue;
                            var ea = ca[da],
                                fa = da.split('.'),
                                ga = fa.length == 2 ? window[fa[0]][fa[1]] : window[da];
                            for (var ha in ea) {
                                if (!ea.hasOwnProperty(ha)) continue;
                                if (typeof ea[ha] !== 'function') {
                                    w[da + '.' + ha] = ea[ha];
                                    continue;
                                }
                                var ia = ga[ha];
                                w[da + '.' + ha] = ia && /\{\s+\[native code\]\s\}/.test(ia) ? ia : ea[ha];
                            }
                        }
                    }
                    aa(x);
                    aa(y);
                    aa(z);

                    function ba(ca, da, ea) {
                        var fa = ea ? v.call(ca).slice(8, -1) + '.prototype' : ca,
                            ga = w[fa + '.' + da] || ca[da];
                        if (typeof ga === 'function') {
                            for (var ha = arguments.length, ia = Array(ha > 3 ? ha - 3 : 0), ja = 3; ja < ha; ja++) ia[ja - 3] = arguments[ja];
                            return ga.apply(ca, ia);
                        } else if (ga) return ga;
                        throw new Error('Polyfill ' + fa + ' does not have implementation of ' + da);
                    }
                    f.exports = ba;
                }, null);
                __d('sdk.babelHelpers', ['ES5FunctionPrototype', 'ES5Object', 'ES6Object'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k = {},
                        l = Object.prototype.hasOwnProperty;
                    k.inherits = function(m, n) {
                        j.assign(m, n);
                        m.prototype = i.create(n && n.prototype);
                        m.prototype.constructor = m;
                        m.__superConstructor__ = n;
                        return n;
                    };
                    k._extends = j.assign;
                    k['extends'] = k._extends;
                    k.objectWithoutProperties = function(m, n) {
                        var o = {};
                        for (var p in m) {
                            if (!l.call(m, p) || n.indexOf(p) >= 0) continue;
                            o[p] = m[p];
                        }
                        return o;
                    };
                    k.taggedTemplateLiteralLoose = function(m, n) {
                        m.raw = n;
                        return m;
                    };
                    k.bind = h.bind;
                    f.exports = k;
                }, null);
                var ES = require('ES');
                var babelHelpers = require('sdk.babelHelpers');
                __d("UrlMapConfig", [], {
                    "www": "www.facebook.com",
                    "m": "m.facebook.com",
                    "connect": "connect.facebook.net",
                    "business": "business.facebook.com",
                    "api_https": "api.facebook.com",
                    "api_read_https": "api-read.facebook.com",
                    "graph_https": "graph.facebook.com",
                    "fbcdn_http": "fbstatic-a.akamaihd.net",
                    "fbcdn_https": "fbstatic-a.akamaihd.net",
                    "cdn_http": "staticxx.facebook.com",
                    "cdn_https": "staticxx.facebook.com"
                });
                __d("JSSDKRuntimeConfig", [], {
                    "locale": "en_US",
                    "rtl": false,
                    "revision": "2300520"
                });
                __d("JSSDKConfig", [], {
                    "bustCache": true,
                    "tagCountLogRate": 0.01,
                    "errorHandling": {
                        "rate": 4
                    },
                    "usePluginPipe": true,
                    "features": {
                        "dialog_resize_refactor": true,
                        "one_comment_controller": true,
                        "allow_non_canvas_app_events": false,
                        "event_subscriptions_log": {
                            "rate": 0.01,
                            "value": 10000
                        },
                        "should_force_single_dialog_instance": true,
                        "js_sdk_force_status_on_load": true,
                        "kill_fragment": true,
                        "xfbml_profile_pic_server": true,
                        "error_handling": {
                            "rate": 4
                        },
                        "e2e_ping_tracking": {
                            "rate": 1.0e-6
                        },
                        "getloginstatus_tracking": {
                            "rate": 0.001
                        },
                        "xd_timeout": {
                            "rate": 4,
                            "value": 30000
                        },
                        "use_bundle": false,
                        "launch_payment_dialog_via_pac": {
                            "rate": 100
                        },
                        "plugin_tags_blacklist": ["recommendations_bar", "registration", "activity", "recommendations", "facepile"],
                        "should_log_response_error": true
                    },
                    "api": {
                        "mode": "warn",
                        "whitelist": ["AppEvents", "AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.logEvent", "AppEvents.logPurchase", "Canvas", "Canvas.Prefetcher", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Event", "Event.subscribe", "Event.unsubscribe", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.cancelFlow", "Payment.continueFlow", "Payment.init", "Payment.lockForProcessing", "Payment.parse", "Payment.setSize", "Payment.unlockForProcessing", "ThirdPartyProvider", "ThirdPartyProvider.init", "ThirdPartyProvider.sendData", "UA", "UA.nativeApp", "XFBML", "XFBML.RecommendationsBar", "XFBML.RecommendationsBar.markRead", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"]
                    },
                    "initSitevars": {
                        "enableMobileComments": 1,
                        "iframePermissions": {
                            "read_stream": false,
                            "manage_mailbox": false,
                            "manage_friendlists": false,
                            "read_mailbox": false,
                            "publish_checkins": true,
                            "status_update": true,
                            "photo_upload": true,
                            "video_upload": true,
                            "sms": false,
                            "create_event": true,
                            "rsvp_event": true,
                            "offline_access": true,
                            "email": true,
                            "xmpp_login": false,
                            "create_note": true,
                            "share_item": true,
                            "export_stream": false,
                            "publish_stream": true,
                            "publish_likes": true,
                            "ads_management": false,
                            "contact_email": true,
                            "access_private_data": false,
                            "read_insights": false,
                            "read_requests": false,
                            "read_friendlists": true,
                            "manage_pages": false,
                            "physical_login": false,
                            "manage_groups": false,
                            "read_deals": false
                        }
                    }
                });
                __d("JSSDKXDConfig", [], {
                    "XdUrl": "\/connect\/xd_arbiter.php?version=42",
                    "XdBundleUrl": "\/connect\/xd_arbiter\/r\/iEq6gH-gZWM.js?version=42",
                    "Flash": {
                        "path": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/yW\/r\/yOZN1vHw3Z_.swf"
                    },
                    "useCdn": true
                });
                __d("JSSDKCssConfig", [], {
                    "rules": ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_close_icon:active{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_loader{background-color:#f6f7f8;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100\u0025}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100\u0025;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3a5795;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ya\/r\/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{width:auto;height:auto;min-height:initial;min-width:initial;background:none}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{color:#fff;display:block;padding-top:20px;clear:both;font-size:18px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;bottom:0;left:0;right:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #2f477a;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f6f7f8;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yD\/r\/t-wz8gw1xG1.png);background-repeat:no-repeat;background-position:50\u0025 50\u0025;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}",
                    "components": ["css:fb.css.base", "css:fb.css.dialog", "css:fb.css.iframewidget"]
                });
                __d("ApiClientConfig", [], {
                    "FlashRequest": {
                        "swfUrl": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/yd\/r\/mxzow1Sdmxr.swf"
                    }
                });
                __d("JSSDKCanvasPrefetcherConfig", [], {
                    "blacklist": [144959615576466],
                    "sampleRate": 500
                });
                __d("JSSDKPluginPipeConfig", [], {
                    "threshold": 0,
                    "enabledApps": {
                        "209753825810663": 1,
                        "187288694643718": 1
                    }
                });
                __d("DOMWrapper", [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h, i, j = {
                        setRoot: function(k) {
                            h = k;
                        },
                        getRoot: function() {
                            return h || document.body;
                        },
                        setWindow: function(k) {
                            i = k;
                        },
                        getWindow: function() {
                            return i || self;
                        }
                    };
                    f.exports = j;
                }, null);
                __d('dotAccess', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i, j, k) {
                        var l = j.split('.');
                        do {
                            var m = l.shift();
                            i = i[m] || k && (i[m] = {});
                        } while (l.length && i);
                        return i;
                    }
                    f.exports = h;
                }, null);
                __d('guid', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h() {
                        return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
                    }
                    f.exports = h;
                }, null);
                __d('wrapFunction', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};

                    function i(j, k, l) {
                        k = k || 'default';
                        return function() {
                            var m = k in h ? h[k](j, l) : j;
                            return m.apply(this, arguments);
                        };
                    }
                    i.setWrapper = function(j, k) {
                        k = k || 'default';
                        h[k] = j;
                    };
                    f.exports = i;
                }, null);
                __d('GlobalCallback', ['DOMWrapper', 'dotAccess', 'guid', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k) {
                    if (c.__markCompiled) c.__markCompiled();
                    var l, m, n = {
                        setPrefix: function(o) {
                            l = i(h.getWindow(), o, true);
                            m = o;
                        },
                        create: function(o, p) {
                            if (!l) this.setPrefix('__globalCallbacks');
                            var q = j();
                            l[q] = k(o, 'entry', p || 'GlobalCallback');
                            return m + '.' + q;
                        },
                        remove: function(o) {
                            var p = o.substring(m.length + 1);
                            delete l[p];
                        }
                    };
                    f.exports = n;
                }, null);
                __d("sprintf", [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i) {
                        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
                        var m = 0;
                        return i.replace(/%s/g, function(n) {
                            return k[m++];
                        });
                    }
                    f.exports = h;
                }, null);
                __d('Log', ['sprintf'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = {
                        DEBUG: 3,
                        INFO: 2,
                        WARNING: 1,
                        ERROR: 0
                    };

                    function j(l, m) {
                        var n = Array.prototype.slice.call(arguments, 2),
                            o = h.apply(null, n),
                            p = window.console;
                        if (p && k.level >= m) p[l in p ? l : 'log'](o);
                    }
                    var k = {
                        level: -1,
                        Level: i,
                        debug: ES(j, 'bind', true, null, 'debug', i.DEBUG),
                        info: ES(j, 'bind', true, null, 'info', i.INFO),
                        warn: ES(j, 'bind', true, null, 'warn', i.WARNING),
                        error: ES(j, 'bind', true, null, 'error', i.ERROR)
                    };
                    f.exports = k;
                }, null);
                __d("ObservableMixin", [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h() {
                        this.__observableEvents = {};
                    }
                    h.prototype = {
                        inform: function(i) {
                            var j = Array.prototype.slice.call(arguments, 1),
                                k = Array.prototype.slice.call(this.getSubscribers(i));
                            for (var l = 0; l < k.length; l++) {
                                if (k[l] === null) continue;
                                try {
                                    k[l].apply(this, j);
                                } catch (m) {
                                    setTimeout(function() {
                                        throw m;
                                    }, 0);
                                }
                            }
                            return this;
                        },
                        getSubscribers: function(i) {
                            return this.__observableEvents[i] || (this.__observableEvents[i] = []);
                        },
                        clearSubscribers: function(i) {
                            if (i) this.__observableEvents[i] = [];
                            return this;
                        },
                        clearAllSubscribers: function() {
                            this.__observableEvents = {};
                            return this;
                        },
                        subscribe: function(i, j) {
                            var k = this.getSubscribers(i);
                            k.push(j);
                            return this;
                        },
                        unsubscribe: function(i, j) {
                            var k = this.getSubscribers(i);
                            for (var l = 0; l < k.length; l++)
                                if (k[l] === j) {
                                    k.splice(l, 1);
                                    break;
                                }
                            return this;
                        },
                        monitor: function(i, j) {
                            if (!j()) {
                                var k = ES(function(l) {
                                    if (j.apply(j, arguments)) this.unsubscribe(i, k);
                                }, "bind", true, this);
                                this.subscribe(i, k);
                            }
                            return this;
                        }
                    };
                    f.exports = h;
                }, null);
                __d('UrlMap', ['UrlMapConfig'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = {
                        resolve: function(j, k) {
                            var l = typeof k == 'undefined' ? location.protocol.replace(':', '') : k ? 'https' : 'http';
                            if (j in h) return l + '://' + h[j];
                            if (typeof k == 'undefined' && j + '_' + l in h) return l + '://' + h[j + '_' + l];
                            if (k !== true && j + '_http' in h) return 'http://' + h[j + '_http'];
                            if (k !== false && j + '_https' in h) return 'https://' + h[j + '_https'];
                        }
                    };
                    f.exports = i;
                }, null);
                __d('QueryString', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(l) {
                        var m = [];
                        ES(ES('Object', 'keys', false, l).sort(), 'forEach', true, function(n) {
                            var o = l[n];
                            if (typeof o === 'undefined') return;
                            if (o === null) {
                                m.push(n);
                                return;
                            }
                            m.push(encodeURIComponent(n) + '=' + encodeURIComponent(o));
                        });
                        return m.join('&');
                    }

                    function i(l, m) {
                        var n = {};
                        if (l === '') return n;
                        var o = l.split('&');
                        for (var p = 0; p < o.length; p++) {
                            var q = o[p].split('=', 2),
                                r = decodeURIComponent(q[0]);
                            if (m && n.hasOwnProperty(r)) throw new URIError('Duplicate key: ' + r);
                            n[r] = q.length === 2 ? decodeURIComponent(q[1]) : null;
                        }
                        return n;
                    }

                    function j(l, m) {
                        return l + (ES(l, 'indexOf', true, '?') !== -1 ? '&' : '?') + (typeof m === 'string' ? m : k.encode(m));
                    }
                    var k = {
                        encode: h,
                        decode: i,
                        appendToUrl: j
                    };
                    f.exports = k;
                }, null);
                __d("ManagedError", [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i, j) {
                        Error.prototype.constructor.call(this, i);
                        this.message = i;
                        this.innerError = j;
                    }
                    h.prototype = new Error();
                    h.prototype.constructor = h;
                    f.exports = h;
                }, null);
                __d('AssertionError', ['ManagedError'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(j) {
                        h.prototype.constructor.apply(this, arguments);
                    }
                    i.prototype = new h();
                    i.prototype.constructor = i;
                    f.exports = i;
                }, null);
                __d('Assert', ['AssertionError', 'sprintf'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();

                    function j(o, p) {
                        if (typeof o !== 'boolean' || !o) throw new h(p);
                        return o;
                    }

                    function k(o, p, q) {
                        var r;
                        if (p === undefined) {
                            r = 'undefined';
                        } else if (p === null) {
                            r = 'null';
                        } else {
                            var s = Object.prototype.toString.call(p);
                            r = /\s(\w*)/.exec(s)[1].toLowerCase();
                        }
                        j(ES(o, 'indexOf', true, r) !== -1, q || i('Expression is of type %s, not %s', r, o));
                        return p;
                    }

                    function l(o, p, q) {
                        j(p instanceof o, q || 'Expression not instance of type');
                        return p;
                    }

                    function m(o, p) {
                        n['is' + o] = p;
                        n['maybe' + o] = function(q, r) {
                            if (q != null) p(q, r);
                        };
                    }
                    var n = {
                        isInstanceOf: l,
                        isTrue: j,
                        isTruthy: function(o, p) {
                            return j(!!o, p);
                        },
                        type: k,
                        define: function(o, p) {
                            o = o.substring(0, 1).toUpperCase() + o.substring(1).toLowerCase();
                            m(o, function(q, r) {
                                j(p(q), r);
                            });
                        }
                    };
                    ES(['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'Regexp', 'String', 'Undefined'], 'forEach', true, function(o) {
                        m(o, ES(k, 'bind', true, null, o.toLowerCase()));
                    });
                    f.exports = n;
                }, null);
                __d('Type', ['Assert'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i() {
                        var m = this.__mixins;
                        if (m)
                            for (var n = 0; n < m.length; n++) m[n].apply(this, arguments);
                    }

                    function j(m, n) {
                        if (n instanceof m) return true;
                        if (n instanceof i)
                            for (var o = 0; o < n.__mixins.length; o++)
                                if (n.__mixins[o] == m) return true;
                        return false;
                    }

                    function k(m, n) {
                        var o = m.prototype;
                        if (!ES('Array', 'isArray', false, n)) n = [n];
                        for (var p = 0; p < n.length; p++) {
                            var q = n[p];
                            if (typeof q == 'function') {
                                o.__mixins.push(q);
                                q = q.prototype;
                            }
                            ES(ES('Object', 'keys', false, q), 'forEach', true, function(r) {
                                o[r] = q[r];
                            });
                        }
                    }

                    function l(m, n, o) {
                        var p = n && n.hasOwnProperty('constructor') ? n.constructor : function() {
                            this.parent.apply(this, arguments);
                        };
                        h.isFunction(p);
                        if (m && m.prototype instanceof i === false) throw new Error('parent type does not inherit from Type');
                        m = m || i;

                        function q() {}
                        q.prototype = m.prototype;
                        p.prototype = new q();
                        if (n) ES('Object', 'assign', false, p.prototype, n);
                        p.prototype.constructor = p;
                        p.parent = m;
                        p.prototype.__mixins = m.prototype.__mixins ? Array.prototype.slice.call(m.prototype.__mixins) : [];
                        if (o) k(p, o);
                        p.prototype.parent = function() {
                            this.parent = m.prototype.parent;
                            m.apply(this, arguments);
                        };
                        p.prototype.parentCall = function(r) {
                            return m.prototype[r].apply(this, Array.prototype.slice.call(arguments, 1));
                        };
                        p.extend = function(r, s) {
                            return l(this, r, s);
                        };
                        return p;
                    }
                    ES('Object', 'assign', false, i.prototype, {
                        instanceOf: function(m) {
                            return j(m, this);
                        }
                    });
                    ES('Object', 'assign', false, i, {
                        extend: function(m, n) {
                            return typeof m === 'function' ? l.apply(null, arguments) : l(null, m, n);
                        },
                        instanceOf: j
                    });
                    f.exports = i;
                }, null);
                __d('sdk.Model', ['Type', 'ObservableMixin'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    var j = h.extend({
                        constructor: function(k) {
                            this.parent();
                            var l = {},
                                m = this;
                            ES(ES('Object', 'keys', false, k), 'forEach', true, function(n) {
                                l[n] = k[n];
                                m['set' + n] = function(o) {
                                    if (o === l[n]) return this;
                                    l[n] = o;
                                    m.inform(n + '.change', o);
                                    return m;
                                };
                                m['get' + n] = function() {
                                    return l[n];
                                };
                            });
                        }
                    }, i);
                    f.exports = j;
                }, null);
                __d('sdk.Runtime', ['sdk.Model', 'JSSDKRuntimeConfig'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    var j = {
                            UNKNOWN: 0,
                            PAGETAB: 1,
                            CANVAS: 2,
                            PLATFORM: 4
                        },
                        k = new h({
                            AccessToken: '',
                            ClientID: '',
                            CookieUserID: '',
                            Environment: j.UNKNOWN,
                            Initialized: false,
                            IsVersioned: false,
                            KidDirectedSite: undefined,
                            Locale: i.locale,
                            LoggedIntoFacebook: undefined,
                            LoginStatus: undefined,
                            Revision: i.revision,
                            Rtl: i.rtl,
                            Scope: undefined,
                            Secure: undefined,
                            UseCookie: false,
                            UserID: '',
                            Version: undefined
                        });
                    ES('Object', 'assign', false, k, {
                        ENVIRONMENTS: j,
                        isEnvironment: function(l) {
                            var m = this.getEnvironment();
                            return (l | m) === m;
                        },
                        isCanvasEnvironment: function() {
                            return this.isEnvironment(j.CANVAS) || this.isEnvironment(j.PAGETAB);
                        }
                    });
                    (function() {
                        var l = /app_runner/.test(window.name) ? j.PAGETAB : /iframe_canvas/.test(window.name) ? j.CANVAS : j.UNKNOWN;
                        if ((l | j.PAGETAB) === l) l = l | j.CANVAS;
                        k.setEnvironment(l);
                    })();
                    f.exports = k;
                }, null);
                __d('sdk.Cookie', ['QueryString', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    var j = null;

                    function k(n, o, p) {
                        n = n + i.getClientID();
                        var q = j && j !== '.';
                        if (q) {
                            document.cookie = n + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                            document.cookie = n + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
                        }
                        var r = new Date(p).toGMTString();
                        document.cookie = n + '=' + o + (o && p === 0 ? '' : '; expires=' + r) + '; path=/' + (q ? '; domain=' + j : '');
                    }

                    function l(n) {
                        n = n + i.getClientID();
                        var o = new RegExp('\\b' + n + '=([^;]*)\\b');
                        return o.test(document.cookie) ? RegExp.$1 : null;
                    }
                    var m = {
                        setDomain: function(n) {
                            j = n;
                            var o = h.encode({
                                    base_domain: j && j !== '.' ? j : ''
                                }),
                                p = new Date();
                            p.setFullYear(p.getFullYear() + 1);
                            k('fbm_', o, p.getTime());
                        },
                        getDomain: function() {
                            return j;
                        },
                        loadMeta: function() {
                            var n = l('fbm_');
                            if (n) {
                                var o = h.decode(n);
                                if (!j) j = o.base_domain;
                                return o;
                            }
                        },
                        loadSignedRequest: function() {
                            return l('fbsr_');
                        },
                        setSignedRequestCookie: function(n, o) {
                            if (!n) throw new Error('Value passed to Cookie.setSignedRequestCookie ' + 'was empty.');
                            k('fbsr_', n, o);
                        },
                        clearSignedRequestCookie: function() {
                            k('fbsr_', '', 0);
                        },
                        setRaw: k,
                        getRaw: l
                    };
                    f.exports = m;
                }, null);
                __d('Miny', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = 'Miny1',
                        i = 'wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split(''),
                        j = {
                            encode: function(k) {
                                if (/^$|[~\\]|__proto__/.test(k)) return k;
                                var l = k.match(/\w+|\W+/g),
                                    m, n = ES('Object', 'create', false, null);
                                for (m = 0; m < l.length; m++) n[l[m]] = (n[l[m]] || 0) + 1;
                                var o = ES('Object', 'keys', false, n);
                                o.sort(function(r, s) {
                                    return n[s] - n[r];
                                });
                                for (m = 0; m < o.length; m++) {
                                    var p = (m - m % 32) / 32;
                                    n[o[m]] = p ? p.toString(32) + i[m % 32] : i[m % 32];
                                }
                                var q = '';
                                for (m = 0; m < l.length; m++) q += n[l[m]];
                                o.unshift(h, o.length);
                                o.push(q);
                                return o.join('~');
                            }
                        };
                    f.exports = j;
                }, null);
                __d('sdk.UA', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = navigator.userAgent,
                        i = {
                            iphone: /\b(iPhone|iP[ao]d)/.test(h),
                            ipad: /\b(iP[ao]d)/.test(h),
                            android: /Android/i.test(h),
                            nativeApp: /FBAN\/\w+;/i.test(h)
                        },
                        j = /Mobile/i.test(h),
                        k = {
                            ie: '',
                            firefox: '',
                            chrome: '',
                            webkit: '',
                            osx: '',
                            edge: ''
                        },
                        l = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(h);
                    if (l) {
                        k.ie = l[1] ? parseFloat(l[1]) : l[4] ? parseFloat(l[4]) : '';
                        k.firefox = l[2] || '';
                        k.webkit = l[3] || '';
                        if (l[3]) {
                            var m = /(?:Chrome\/(\d+\.\d+))/.exec(h);
                            k.chrome = m ? m[1] : '';
                            var n = /(?:Edge\/(\d+\.\d+))/.exec(h);
                            k.edge = n ? n[1] : '';
                        }
                    }
                    var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(h);
                    if (o) k.osx = o[1];

                    function p(r) {
                        return ES(r.split('.'), 'map', true, function(s) {
                            return parseFloat(s);
                        });
                    }
                    var q = {};
                    ES(ES('Object', 'keys', false, k), 'map', true, function(r) {
                        q[r] = function() {
                            return parseFloat(k[r]);
                        };
                        q[r].getVersionParts = function() {
                            return p(k[r]);
                        };
                    });
                    ES(ES('Object', 'keys', false, i), 'map', true, function(r) {
                        q[r] = function() {
                            return i[r];
                        };
                    });
                    q.mobile = function() {
                        return i.iphone || i.ipad || i.android || j;
                    };
                    f.exports = q;
                }, null);
                __d('getBlankIframeSrc', ['sdk.UA'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i() {
                        return h.ie() < 10 ? 'javascript:false' : 'about:blank';
                    }
                    f.exports = i;
                }, null);
                __d('insertIframe', ['GlobalCallback', 'getBlankIframeSrc', 'guid'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();

                    function k(l) {
                        l.id = l.id || j();
                        l.name = l.name || j();
                        var m = false,
                            n = false,
                            o = function() {
                                if (m && !n) {
                                    n = true;
                                    l.onload && l.onload(l.root.firstChild);
                                }
                            },
                            p = h.create(o);
                        if (document.attachEvent) {
                            var q = '<iframe' + ' id="' + l.id + '"' + ' name="' + l.name + '"' + (l.title ? ' title="' + l.title + '"' : '') + (l.className ? ' class="' + l.className + '"' : '') + ' style="border:none;' + (l.width ? 'width:' + l.width + 'px;' : '') + (l.height ? 'height:' + l.height + 'px;' : '') + '"' + ' src="' + i() + '"' + ' frameborder="0"' + ' scrolling="no"' + ' allowtransparency="true"' + ' onload="' + p + '()"' + '></iframe>';
                            l.root.innerHTML = '<iframe src="' + i() + '"' + ' frameborder="0"' + ' scrolling="no"' + ' style="height:1px"></iframe>';
                            m = true;
                            setTimeout(function() {
                                l.root.innerHTML = q;
                                l.root.firstChild.src = l.url;
                                l.onInsert && l.onInsert(l.root.firstChild);
                            }, 0);
                        } else {
                            var r = document.createElement('iframe');
                            r.id = l.id;
                            r.name = l.name;
                            r.onload = o;
                            r.scrolling = 'no';
                            r.style.border = 'none';
                            r.style.overflow = 'hidden';
                            if (l.title) r.title = l.title;
                            if (l.className) r.className = l.className;
                            if (l.height !== undefined) r.style.height = l.height + 'px';
                            if (l.width !== undefined)
                                if (l.width == '100%') {
                                    r.style.width = l.width;
                                } else r.style.width = l.width + 'px';
                            l.root.appendChild(r);
                            m = true;
                            r.src = l.url;
                            l.onInsert && l.onInsert(r);
                        }
                    }
                    f.exports = k;
                }, null);
                __d('sdk.domReady', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h, i = "readyState" in document ? /loaded|complete/.test(document.readyState) : !!document.body;

                    function j() {
                        if (!h) return;
                        var m;
                        while (m = h.shift()) m();
                        h = null;
                    }

                    function k(m) {
                        if (h) {
                            h.push(m);
                            return;
                        } else m();
                    }
                    if (!i) {
                        h = [];
                        if (document.addEventListener) {
                            document.addEventListener('DOMContentLoaded', j, false);
                            window.addEventListener('load', j, false);
                        } else if (document.attachEvent) {
                            document.attachEvent('onreadystatechange', j);
                            window.attachEvent('onload', j);
                        }
                        if (document.documentElement.doScroll && window == window.top) {
                            var l = function() {
                                try {
                                    document.documentElement.doScroll('left');
                                } catch (m) {
                                    setTimeout(l, 0);
                                    return;
                                }
                                j();
                            };
                            l();
                        }
                    }
                    f.exports = k;
                }, 3);
                __d('sdk.Content', ['Log', 'sdk.UA', 'sdk.domReady'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k, l, m = {
                        append: function(n, o) {
                            if (!o)
                                if (!k) {
                                    k = o = document.getElementById('fb-root');
                                    if (!o) {
                                        h.warn('The "fb-root" div has not been created, auto-creating');
                                        k = o = document.createElement('div');
                                        o.id = 'fb-root';
                                        if (i.ie() || !document.body) {
                                            j(function() {
                                                document.body.appendChild(o);
                                            });
                                        } else document.body.appendChild(o);
                                    }
                                    o.className += ' fb_reset';
                                } else o = k;
                            if (typeof n == 'string') {
                                var p = document.createElement('div');
                                o.appendChild(p).innerHTML = n;
                                return p;
                            } else return o.appendChild(n);
                        },
                        appendHidden: function(n) {
                            if (!o) {
                                var o = document.createElement('div'),
                                    p = o.style;
                                p.position = 'absolute';
                                p.top = '-10000px';
                                p.width = p.height = 0;
                                o = m.append(o);
                            }
                            return m.append(n, o);
                        },
                        submitToTarget: function(n, o) {
                            var p = document.createElement('form');
                            p.action = n.url;
                            p.target = n.target;
                            p.method = o ? 'GET' : 'POST';
                            m.appendHidden(p);
                            for (var q in n.params)
                                if (n.params.hasOwnProperty(q)) {
                                    var r = n.params[q];
                                    if (r !== null && r !== undefined) {
                                        var s = document.createElement('input');
                                        s.name = q;
                                        s.value = r;
                                        p.appendChild(s);
                                    }
                                }
                            p.submit();
                            p.parentNode.removeChild(p);
                        }
                    };
                    f.exports = m;
                }, null);
                __d('sdk.Impressions', ['sdk.Content', 'Miny', 'QueryString', 'sdk.Runtime', 'UrlMap', 'getBlankIframeSrc', 'guid', 'insertIframe'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    if (c.__markCompiled) c.__markCompiled();

                    function p(r) {
                        var s = k.getClientID();
                        if (!r.api_key && s) r.api_key = s;
                        r.kid_directed_site = k.getKidDirectedSite();
                        var t = l.resolve('www', true) + '/impression.php/' + n() + '/',
                            u = j.appendToUrl(t, r);
                        if (u.length > 2000)
                            if (r.payload && typeof r.payload === 'string') {
                                var v = i.encode(r.payload);
                                if (v && v.length < r.payload.length) {
                                    r.payload = v;
                                    u = j.appendToUrl(t, r);
                                }
                            }
                        if (u.length <= 2000) {
                            var w = new Image();
                            w.src = u;
                        } else {
                            var x = n(),
                                y = h.appendHidden('');
                            o({
                                url: m(),
                                root: y,
                                name: x,
                                className: 'fb_hidden fb_invisible',
                                onload: function() {
                                    y.parentNode.removeChild(y);
                                }
                            });
                            h.submitToTarget({
                                url: t,
                                target: x,
                                params: r
                            });
                        }
                    }
                    var q = {
                        log: function(r, s) {
                            if (!s.source) s.source = 'jssdk';
                            p({
                                lid: r,
                                payload: ES('JSON', 'stringify', false, s)
                            });
                        },
                        impression: p
                    };
                    f.exports = q;
                }, null);
                __d('sdk.Scribe', ['QueryString', 'sdk.Runtime', 'UrlMap'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();

                    function k(m, n) {
                        if (typeof n.extra == 'object') n.extra.revision = i.getRevision();
                        new Image().src = h.appendToUrl(j.resolve('www', true) + '/common/scribe_endpoint.php', {
                            c: m,
                            m: ES('JSON', 'stringify', false, n)
                        });
                    }
                    var l = {
                        log: k
                    };
                    f.exports = l;
                }, null);
                __d('Base64', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

                    function i(m) {
                        m = m.charCodeAt(0) << 16 | m.charCodeAt(1) << 8 | m.charCodeAt(2);
                        return String.fromCharCode(h.charCodeAt(m >>> 18), h.charCodeAt(m >>> 12 & 63), h.charCodeAt(m >>> 6 & 63), h.charCodeAt(m & 63));
                    }
                    var j = '>___?456789:;<=_______' + '\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0b\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19' + '______\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123';

                    function k(m) {
                        m = j.charCodeAt(m.charCodeAt(0) - 43) << 18 | j.charCodeAt(m.charCodeAt(1) - 43) << 12 | j.charCodeAt(m.charCodeAt(2) - 43) << 6 | j.charCodeAt(m.charCodeAt(3) - 43);
                        return String.fromCharCode(m >>> 16, m >>> 8 & 255, m & 255);
                    }
                    var l = {
                        encode: function(m) {
                            m = unescape(encodeURI(m));
                            var n = (m.length + 2) % 3;
                            m = (m + '\0\0'.slice(n)).replace(/[\s\S]{3}/g, i);
                            return m.slice(0, m.length + n - 2) + '=='.slice(n);
                        },
                        decode: function(m) {
                            m = m.replace(/[^A-Za-z0-9+\/]/g, '');
                            var n = m.length + 3 & 3;
                            m = (m + 'AAA'.slice(n)).replace(/..../g, k);
                            m = m.slice(0, m.length + n - 3);
                            try {
                                return decodeURIComponent(escape(m));
                            } catch (o) {
                                throw new Error('Not valid UTF-8');
                            }
                        },
                        encodeObject: function(m) {
                            return l.encode(ES('JSON', 'stringify', false, m));
                        },
                        decodeObject: function(m) {
                            return ES('JSON', 'parse', false, l.decode(m));
                        },
                        encodeNums: function(m) {
                            return String.fromCharCode.apply(String, ES(m, 'map', true, function(n) {
                                return h.charCodeAt((n | -(n > 63)) & -(n > 0) & 63);
                            }));
                        }
                    };
                    f.exports = l;
                }, null);
                __d('sdk.SignedRequest', ['Base64'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(k) {
                        if (!k) return null;
                        var l = k.split('.', 2)[1].replace(/\-/g, '+').replace(/\_/g, '/');
                        return h.decodeObject(l);
                    }
                    var j = {
                        parse: i
                    };
                    f.exports = j;
                }, null);
                __d('URIRFC3986', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = new RegExp('^' + '([^:/?#]+:)?' + '(//' + '([^\\\\/?#@]*@)?' + '(' + '\\[[A-Fa-f0-9:.]+\\]|' + '[^\\/?#:]*' + ')' + '(:[0-9]*)?' + ')?' + '([^?#]*)' + '(\\?[^#]*)?' + '(#.*)?'),
                        i = {
                            parse: function(j) {
                                if (ES(j, 'trim', true) === '') return null;
                                var k = j.match(h),
                                    l = {};
                                l.uri = k[0] ? k[0] : null;
                                l.scheme = k[1] ? k[1].substr(0, k[1].length - 1) : null;
                                l.authority = k[2] ? k[2].substr(2) : null;
                                l.userinfo = k[3] ? k[3].substr(0, k[3].length - 1) : null;
                                l.host = k[2] ? k[4] : null;
                                l.port = k[5] ? k[5].substr(1) ? parseInt(k[5].substr(1), 10) : null : null;
                                l.path = k[6] ? k[6] : null;
                                l.query = k[7] ? k[7].substr(1) : null;
                                l.fragment = k[8] ? k[8].substr(1) : null;
                                l.isGenericURI = l.authority === null && !!l.scheme;
                                return l;
                            }
                        };
                    f.exports = i;
                }, null);
                __d('createObjectFrom', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i, j) {
                        var k = {},
                            l = ES('Array', 'isArray', false, j);
                        if (j === undefined) j = true;
                        for (var m = i.length - 1; m >= 0; m--) k[i[m]] = l ? j[m] : j;
                        return k;
                    }
                    f.exports = h;
                }, null);
                __d('URISchemes', ['createObjectFrom'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = h(['blob', 'fb', 'fb-ama', 'fb-messenger', 'fb-page-messages', 'fbcf', 'fbconnect', 'fbmobilehome', 'fbrpc', 'file', 'ftp', 'http', 'https', 'mailto', 'ms-app', 'intent', 'itms', 'itms-apps', 'itms-services', 'market', 'svn+ssh', 'fbstaging', 'tel', 'sms', 'pebblejs', 'sftp', 'whatsapp']),
                        j = {
                            isAllowed: function(k) {
                                if (!k) return true;
                                return i.hasOwnProperty(k.toLowerCase());
                            }
                        };
                    f.exports = j;
                }, null);
                __d('eprintf', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = function(i) {
                        var j = ES(Array.prototype.slice.call(arguments), 'map', true, function(m) {
                                return String(m);
                            }),
                            k = i.split('%s').length - 1;
                        if (k !== j.length - 1) return h('eprintf args number mismatch: %s', ES('JSON', 'stringify', false, j));
                        var l = 1;
                        return i.replace(/%s/g, function(m) {
                            return String(j[l++]);
                        });
                    };
                    f.exports = h;
                }, null);
                __d('ex', ['eprintf'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = function() {
                        for (var j = arguments.length, k = Array(j), l = 0; l < j; l++) k[l] = arguments[l];
                        k = ES(k, 'map', true, function(m) {
                            return String(m);
                        });
                        if (k[0].split('%s').length !== k.length) return i('ex args number mismatch: %s', ES('JSON', 'stringify', false, k));
                        return i._prefix + ES('JSON', 'stringify', false, k) + i._suffix;
                    };
                    i._prefix = '<![EX[';
                    i._suffix = ']]>';
                    f.exports = i;
                }, null);
                __d('invariant', ['ex', 'sprintf'], function a(b, c, d, e, f, g, h, i) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var j = h;

                    function k(l, m) {
                        if (!l) {
                            var n = void 0;
                            if (m === undefined) {
                                n = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
                            } else {
                                var o = [m];
                                for (var p = 2, q = arguments.length; p < q; p++) o.push(arguments[p]);
                                n = new Error(j.apply(null, o));
                                n.name = 'Invariant Violation';
                                n.messageWithParams = o;
                            }
                            n.framesToPop = 1;
                            throw n;
                        }
                    }
                    f.exports = k;
                }, null);
                __d('URIBase', ['URIRFC3986', 'URISchemes', 'ex', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k) {
                    if (c.__markCompiled) c.__markCompiled();
                    var l = new RegExp('[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f' + '\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF' + '\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'),
                        m = new RegExp('^(?:[^/]*:|' + '[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');

                    function n(q, r, s, t) {
                        if (!r) return true;
                        if (r instanceof p) {
                            q.setProtocol(r.getProtocol());
                            q.setDomain(r.getDomain());
                            q.setPort(r.getPort());
                            q.setPath(r.getPath());
                            q.setQueryData(t.deserialize(t.serialize(r.getQueryData())));
                            q.setFragment(r.getFragment());
                            q.setForceFragmentSeparator(r.getForceFragmentSeparator());
                            return true;
                        }
                        r = ES(r.toString(), 'trim', true);
                        var u = h.parse(r) || {};
                        if (!s && !i.isAllowed(u.scheme)) return false;
                        q.setProtocol(u.scheme || '');
                        if (!s && l.test(u.host)) return false;
                        q.setDomain(u.host || '');
                        q.setPort(u.port || '');
                        q.setPath(u.path || '');
                        if (s) {
                            q.setQueryData(t.deserialize(u.query) || {});
                        } else try {
                            q.setQueryData(t.deserialize(u.query) || {});
                        } catch (v) {
                            return false;
                        }
                        q.setFragment(u.fragment || '');
                        if (u.fragment === '') q.setForceFragmentSeparator(true);
                        if (u.userinfo !== null)
                            if (s) {
                                throw new Error(j('URI.parse: invalid URI (userinfo is not allowed in a URI): %s', q.toString()));
                            } else return false;
                        if (!q.getDomain() && ES(q.getPath(), 'indexOf', true, '\\') !== -1)
                            if (s) {
                                throw new Error(j('URI.parse: invalid URI (no domain but multiple back-slashes): %s', q.toString()));
                            } else return false;
                        if (!q.getProtocol() && m.test(r))
                            if (s) {
                                throw new Error(j('URI.parse: invalid URI (unsafe protocol-relative URLs): %s', q.toString()));
                            } else return false;
                        return true;
                    }
                    var o = [];

                    function p(q, r) {
                        'use strict';
                        !r ? k(0) : void 0;
                        this.$URIBase1 = r;
                        this.$URIBase2 = '';
                        this.$URIBase3 = '';
                        this.$URIBase4 = '';
                        this.$URIBase5 = '';
                        this.$URIBase6 = '';
                        this.$URIBase7 = {};
                        this.$URIBase8 = false;
                        n(this, q, true, r);
                    }
                    p.prototype.setProtocol = function(q) {
                        'use strict';
                        !i.isAllowed(q) ? k(0) : void 0;
                        this.$URIBase2 = q;
                        return this;
                    };
                    p.prototype.getProtocol = function(q) {
                        'use strict';
                        return this.$URIBase2;
                    };
                    p.prototype.setSecure = function(q) {
                        'use strict';
                        return this.setProtocol(q ? 'https' : 'http');
                    };
                    p.prototype.isSecure = function() {
                        'use strict';
                        return this.getProtocol() === 'https';
                    };
                    p.prototype.setDomain = function(q) {
                        'use strict';
                        if (l.test(q)) throw new Error(j('URI.setDomain: unsafe domain specified: %s for url %s', q, this.toString()));
                        this.$URIBase3 = q;
                        return this;
                    };
                    p.prototype.getDomain = function() {
                        'use strict';
                        return this.$URIBase3;
                    };
                    p.prototype.setPort = function(q) {
                        'use strict';
                        this.$URIBase4 = q;
                        return this;
                    };
                    p.prototype.getPort = function() {
                        'use strict';
                        return this.$URIBase4;
                    };
                    p.prototype.setPath = function(q) {
                        'use strict';
                        this.$URIBase5 = q;
                        return this;
                    };
                    p.prototype.getPath = function() {
                        'use strict';
                        return this.$URIBase5;
                    };
                    p.prototype.addQueryData = function(q, r) {
                        'use strict';
                        if (Object.prototype.toString.call(q) === '[object Object]') {
                            ES('Object', 'assign', false, this.$URIBase7, q);
                        } else this.$URIBase7[q] = r;
                        return this;
                    };
                    p.prototype.setQueryData = function(q) {
                        'use strict';
                        this.$URIBase7 = q;
                        return this;
                    };
                    p.prototype.getQueryData = function() {
                        'use strict';
                        return this.$URIBase7;
                    };
                    p.prototype.removeQueryData = function(q) {
                        'use strict';
                        if (!ES('Array', 'isArray', false, q)) q = [q];
                        for (var r = 0, s = q.length; r < s; ++r) delete this.$URIBase7[q[r]];
                        return this;
                    };
                    p.prototype.setFragment = function(q) {
                        'use strict';
                        this.$URIBase6 = q;
                        this.setForceFragmentSeparator(false);
                        return this;
                    };
                    p.prototype.getFragment = function() {
                        'use strict';
                        return this.$URIBase6;
                    };
                    p.prototype.setForceFragmentSeparator = function(q) {
                        'use strict';
                        this.$URIBase8 = q;
                        return this;
                    };
                    p.prototype.getForceFragmentSeparator = function() {
                        'use strict';
                        return this.$URIBase8;
                    };
                    p.prototype.isEmpty = function() {
                        'use strict';
                        return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || ES('Object', 'keys', false, this.getQueryData()).length > 0 || this.getFragment());
                    };
                    p.prototype.toString = function() {
                        'use strict';
                        var q = this;
                        for (var r = 0; r < o.length; r++) q = o[r](q);
                        return q.$URIBase9();
                    };
                    p.prototype.$URIBase9 = function() {
                        'use strict';
                        var q = '',
                            r = this.getProtocol();
                        if (r) q += r + '://';
                        var s = this.getDomain();
                        if (s) q += s;
                        var t = this.getPort();
                        if (t) q += ':' + t;
                        var u = this.getPath();
                        if (u) {
                            q += u;
                        } else if (q) q += '/';
                        var v = this.$URIBase1.serialize(this.getQueryData());
                        if (v) q += '?' + v;
                        var w = this.getFragment();
                        if (w) {
                            q += '#' + w;
                        } else if (this.getForceFragmentSeparator()) q += '#';
                        return q;
                    };
                    p.registerFilter = function(q) {
                        'use strict';
                        o.push(q);
                    };
                    p.prototype.getOrigin = function() {
                        'use strict';
                        var q = this.getPort();
                        return this.getProtocol() + '://' + this.getDomain() + (q ? ':' + q : '');
                    };
                    p.isValidURI = function(q, r) {
                        return n(new p(null, r), q, false, r);
                    };
                    f.exports = p;
                }, null);
                __d('sdk.URI', ['Assert', 'QueryString', 'URIBase'], function a(b, c, d, e, f, g, h, i, j) {
                    var k, l;
                    if (c.__markCompiled) c.__markCompiled();
                    var m = /\.facebook\.com$/,
                        n = {
                            serialize: function(p) {
                                return p ? i.encode(p) : '';
                            },
                            deserialize: function(p) {
                                return p ? i.decode(p) : {};
                            }
                        };
                    k = babelHelpers.inherits(o, j);
                    l = k && k.prototype;

                    function o(p) {
                        'use strict';
                        h.isString(p, 'The passed argument was of invalid type.');
                        l.constructor.call(this, p, n);
                    }
                    o.prototype.isFacebookURI = function() {
                        'use strict';
                        return m.test(this.getDomain());
                    };
                    o.prototype.valueOf = function() {
                        'use strict';
                        return this.toString();
                    };
                    f.exports = o;
                }, null);
                __d('Queue', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {};

                    function i(j) {
                        'use strict';
                        this._opts = babelHelpers['extends']({
                            interval: 0,
                            processor: null
                        }, j);
                        this._queue = [];
                        this._stopped = true;
                    }
                    i.prototype._dispatch = function(j) {
                        'use strict';
                        if (this._stopped || this._queue.length === 0) return;
                        if (!this._opts.processor) {
                            this._stopped = true;
                            throw new Error('No processor available');
                        }
                        if (this._opts.interval) {
                            this._opts.processor.call(this, this._queue.shift());
                            this._timeout = setTimeout(ES(this._dispatch, 'bind', true, this), this._opts.interval);
                        } else
                            while (this._queue.length) this._opts.processor.call(this, this._queue.shift());
                    };
                    i.prototype.enqueue = function(j) {
                        'use strict';
                        if (this._opts.processor && !this._stopped) {
                            this._opts.processor.call(this, j);
                        } else this._queue.push(j);
                        return this;
                    };
                    i.prototype.start = function(j) {
                        'use strict';
                        if (j) this._opts.processor = j;
                        this._stopped = false;
                        this._dispatch();
                        return this;
                    };
                    i.prototype.isStarted = function() {
                        'use strict';
                        return !this._stopped;
                    };
                    i.prototype.dispatch = function() {
                        'use strict';
                        this._dispatch(true);
                    };
                    i.prototype.stop = function(j) {
                        'use strict';
                        this._stopped = true;
                        if (j) clearTimeout(this._timeout);
                        return this;
                    };
                    i.prototype.merge = function(j, k) {
                        'use strict';
                        this._queue[k ? 'unshift' : 'push'].apply(this._queue, j._queue);
                        j._queue = [];
                        this._dispatch();
                        return this;
                    };
                    i.prototype.getLength = function() {
                        'use strict';
                        return this._queue.length;
                    };
                    i.get = function(j, k) {
                        'use strict';
                        var l;
                        if (j in h) {
                            l = h[j];
                        } else l = h[j] = new i(k);
                        return l;
                    };
                    i.exists = function(j) {
                        'use strict';
                        return j in h;
                    };
                    i.remove = function(j) {
                        'use strict';
                        return delete h[j];
                    };
                    f.exports = i;
                }, null);
                __d('DOMEventListener', ['wrapFunction'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i, j;
                    if (window.addEventListener) {
                        i = function(l, m, n) {
                            n.wrapper = h(n, 'entry', 'DOMEventListener.add ' + m);
                            l.addEventListener(m, n.wrapper, false);
                        };
                        j = function(l, m, n) {
                            l.removeEventListener(m, n.wrapper, false);
                        };
                    } else if (window.attachEvent) {
                        i = function(l, m, n) {
                            n.wrapper = h(n, 'entry', 'DOMEventListener.add ' + m);
                            l.attachEvent('on' + m, n.wrapper);
                        };
                        j = function(l, m, n) {
                            l.detachEvent('on' + m, n.wrapper);
                        };
                    } else j = i = function() {};
                    var k = {
                        add: function(l, m, n) {
                            i(l, m, n);
                            return {
                                remove: function() {
                                    j(l, m, n);
                                    l = null;
                                }
                            };
                        },
                        remove: j
                    };
                    f.exports = k;
                }, null);
                __d('UserAgent_DEPRECATED', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = false,
                        i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

                    function x() {
                        if (h) return;
                        h = true;
                        var z = navigator.userAgent,
                            aa = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(z),
                            ba = /(Mac OS X)|(Windows)|(Linux)/.exec(z);
                        t = /\b(iPhone|iP[ao]d)/.exec(z);
                        u = /\b(iP[ao]d)/.exec(z);
                        r = /Android/i.exec(z);
                        v = /FBAN\/\w+;/i.exec(z);
                        w = /Mobile/i.exec(z);
                        s = !!/Win64/.exec(z);
                        if (aa) {
                            i = aa[1] ? parseFloat(aa[1]) : aa[5] ? parseFloat(aa[5]) : NaN;
                            if (i && document && document.documentMode) i = document.documentMode;
                            var ca = /(?:Trident\/(\d+.\d+))/.exec(z);
                            n = ca ? parseFloat(ca[1]) + 4 : i;
                            j = aa[2] ? parseFloat(aa[2]) : NaN;
                            k = aa[3] ? parseFloat(aa[3]) : NaN;
                            l = aa[4] ? parseFloat(aa[4]) : NaN;
                            if (l) {
                                aa = /(?:Chrome\/(\d+\.\d+))/.exec(z);
                                m = aa && aa[1] ? parseFloat(aa[1]) : NaN;
                            } else m = NaN;
                        } else i = j = k = m = l = NaN;
                        if (ba) {
                            if (ba[1]) {
                                var da = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(z);
                                o = da ? parseFloat(da[1].replace('_', '.')) : true;
                            } else o = false;
                            p = !!ba[2];
                            q = !!ba[3];
                        } else o = p = q = false;
                    }
                    var y = {
                        ie: function() {
                            return x() || i;
                        },
                        ieCompatibilityMode: function() {
                            return x() || n > i;
                        },
                        ie64: function() {
                            return y.ie() && s;
                        },
                        firefox: function() {
                            return x() || j;
                        },
                        opera: function() {
                            return x() || k;
                        },
                        webkit: function() {
                            return x() || l;
                        },
                        safari: function() {
                            return y.webkit();
                        },
                        chrome: function() {
                            return x() || m;
                        },
                        windows: function() {
                            return x() || p;
                        },
                        osx: function() {
                            return x() || o;
                        },
                        linux: function() {
                            return x() || q;
                        },
                        iphone: function() {
                            return x() || t;
                        },
                        mobile: function() {
                            return x() || t || u || r || w;
                        },
                        nativeApp: function() {
                            return x() || v;
                        },
                        android: function() {
                            return x() || r;
                        },
                        ipad: function() {
                            return x() || u;
                        }
                    };
                    f.exports = y;
                }, null);
                __d('htmlSpecialChars', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = /&/g,
                        i = /</g,
                        j = />/g,
                        k = /"/g,
                        l = /'/g;

                    function m(n) {
                        if (typeof n == 'undefined' || n === null || !n.toString) return '';
                        if (n === false) {
                            return '0';
                        } else if (n === true) return '1';
                        return n.toString().replace(h, '&amp;').replace(k, '&quot;').replace(l, '&#039;').replace(i, '&lt;').replace(j, '&gt;');
                    }
                    f.exports = m;
                }, null);
                __d('Flash', ['DOMEventListener', 'DOMWrapper', 'QueryString', 'UserAgent_DEPRECATED', 'guid', 'htmlSpecialChars'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    if (c.__markCompiled) c.__markCompiled();
                    var n = {},
                        o, p = i.getWindow().document;

                    function q(v) {
                        var w = p.getElementById(v);
                        if (w) w.parentNode.removeChild(w);
                        delete n[v];
                    }

                    function r() {
                        for (var v in n)
                            if (n.hasOwnProperty(v)) q(v);
                    }

                    function s(v) {
                        return v.replace(/\d+/g, function(w) {
                            return '000'.substring(w.length) + w;
                        });
                    }

                    function t(v) {
                        if (!o) {
                            if (k.ie() >= 9) h.add(window, 'unload', r);
                            o = true;
                        }
                        n[v] = v;
                    }
                    var u = {
                        embed: function(v, w, x, y) {
                            var z = l();
                            v = m(v).replace(/&amp;/g, '&');
                            x = babelHelpers['extends']({
                                allowscriptaccess: 'always',
                                flashvars: y,
                                movie: v
                            }, x);
                            if (typeof x.flashvars == 'object') x.flashvars = j.encode(x.flashvars);
                            var aa = [];
                            for (var ba in x)
                                if (x.hasOwnProperty(ba) && x[ba]) aa.push('<param name="' + m(ba) + '" value="' + m(x[ba]) + '">');
                            var ca = w.appendChild(p.createElement('span')),
                                da = '<object ' + (k.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + v + '" ' + (x.height ? 'height="' + x.height + '" ' : '') + (x.width ? 'width="' + x.width + '" ' : '') + 'id="' + z + '">' + aa.join('') + '</object>';
                            ca.innerHTML = da;
                            var ea = ca.firstChild;
                            t(z);
                            return ea;
                        },
                        remove: q,
                        getVersion: function() {
                            var v = 'Shockwave Flash',
                                w = 'application/x-shockwave-flash',
                                x = 'ShockwaveFlash.ShockwaveFlash',
                                y;
                            if (navigator.plugins && typeof navigator.plugins[v] == 'object') {
                                var z = navigator.plugins[v].description;
                                if (z && navigator.mimeTypes && navigator.mimeTypes[w] && navigator.mimeTypes[w].enabledPlugin) y = z.match(/\d+/g);
                            }
                            if (!y) try {
                                y = new ActiveXObject(x).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);
                                y = Array.prototype.slice.call(y, 1);
                            } catch (aa) {}
                            return y;
                        },
                        getVersionString: function() {
                            var v = u.getVersion();
                            return v ? v.join('.') : '';
                        },
                        checkMinVersion: function(v) {
                            var w = u.getVersion();
                            if (!w) return false;
                            return s(w.join('.')) >= s(v);
                        },
                        isAvailable: function() {
                            return !!u.getVersion();
                        }
                    };
                    f.exports = u;
                }, null);
                __d("emptyFunction", [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(j) {
                        return function() {
                            return j;
                        };
                    }

                    function i() {}
                    i.thatReturns = h;
                    i.thatReturnsFalse = h(false);
                    i.thatReturnsTrue = h(true);
                    i.thatReturnsNull = h(null);
                    i.thatReturnsThis = function() {
                        return this;
                    };
                    i.thatReturnsArgument = function(j) {
                        return j;
                    };
                    f.exports = i;
                }, null);
                __d('XDM', ['DOMEventListener', 'DOMWrapper', 'emptyFunction', 'Flash', 'GlobalCallback', 'guid', 'Log', 'UserAgent_DEPRECATED', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                    if (c.__markCompiled) c.__markCompiled();
                    var q = {},
                        r = {
                            transports: []
                        },
                        s = i.getWindow();

                    function t(w) {
                        var x = {},
                            y = w.length,
                            z = r.transports;
                        while (y--) x[w[y]] = 1;
                        y = z.length;
                        while (y--) {
                            var aa = z[y],
                                ba = q[aa];
                            if (!x[aa] && ba.isAvailable()) return aa;
                        }
                    }
                    var u = {
                        register: function(w, x) {
                            n.debug('Registering %s as XDM provider', w);
                            r.transports.push(w);
                            q[w] = x;
                        },
                        create: function(w) {
                            if (!w.whenReady && !w.onMessage) {
                                n.error('An instance without whenReady or onMessage makes no sense');
                                throw new Error('An instance without whenReady or ' + 'onMessage makes no sense');
                            }
                            if (!w.channel) {
                                n.warn('Missing channel name, selecting at random');
                                w.channel = m();
                            }
                            if (!w.whenReady) w.whenReady = j;
                            if (!w.onMessage) w.onMessage = j;
                            var x = w.transport || t(w.blacklist || []),
                                y = q[x];
                            if (y && y.isAvailable()) {
                                n.debug('%s is available', x);
                                y.init(w);
                                return x;
                            }
                        }
                    };
                    u.register('flash', function() {
                        var w = false,
                            x, y = false,
                            z = 15000,
                            aa;
                        return {
                            isAvailable: function() {
                                return k.checkMinVersion('8.0.24');
                            },
                            init: function(ba) {
                                n.debug('init flash: ' + ba.channel);
                                var ca = {
                                    send: function(fa, ga, ha, ia) {
                                        n.debug('sending to: %s (%s)', ga, ia);
                                        x.postMessage(fa, ga, ia);
                                    }
                                };
                                if (w) {
                                    ba.whenReady(ca);
                                    return;
                                }
                                var da = ba.root.appendChild(s.document.createElement('div')),
                                    ea = l.create(function() {
                                        l.remove(ea);
                                        clearTimeout(aa);
                                        n.info('xdm.swf called the callback');
                                        var fa = l.create(function(ga, ha) {
                                            ga = decodeURIComponent(ga);
                                            ha = decodeURIComponent(ha);
                                            n.debug('received message %s from %s', ga, ha);
                                            ba.onMessage(ga, ha);
                                        }, 'xdm.swf:onMessage');
                                        x.init(ba.channel, fa);
                                        ba.whenReady(ca);
                                    }, 'xdm.swf:load');
                                x = k.embed(ba.flashUrl, da, null, {
                                    protocol: location.protocol.replace(':', ''),
                                    host: location.host,
                                    callback: ea,
                                    log: y
                                });
                                aa = setTimeout(function() {
                                    n.warn('The Flash component did not load within %s ms - ' + 'verify that the container is not set to hidden or invisible ' + 'using CSS as this will cause some browsers to not load ' + 'the components', z);
                                }, z);
                                w = true;
                            }
                        };
                    }());
                    var v = /\.facebook\.com(\/|$)/;
                    u.register('postmessage', function() {
                        var w = false;
                        return {
                            isAvailable: function() {
                                return !!s.postMessage;
                            },
                            init: function(x) {
                                n.debug('init postMessage: ' + x.channel);
                                var y = '_FB_' + x.channel,
                                    z = {
                                        send: function(aa, ba, ca, da) {
                                            if (s === ca) {
                                                n.error('Invalid windowref, equal to window (self)');
                                                throw new Error();
                                            }
                                            n.debug('sending to: %s (%s)', ba, da);
                                            var ea = function() {
                                                ca.postMessage('_FB_' + da + aa, ba);
                                            };
                                            if (o.ie() == 8 || o.ieCompatibilityMode()) {
                                                setTimeout(ea, 0);
                                            } else ea();
                                        }
                                    };
                                if (w) {
                                    x.whenReady(z);
                                    return;
                                }
                                h.add(s, 'message', p(function(event) {
                                    var aa = event.data,
                                        ba = event.origin || 'native';
                                    if (!/^(https?:\/\/|native$)/.test(ba)) {
                                        n.debug('Received message from invalid origin type: %s', ba);
                                        return;
                                    }
                                    if (ba !== 'native' && !(v.test(location.hostname) || v.test(event.origin))) return;
                                    if (typeof aa != 'string') {
                                        n.warn('Received message of type %s from %s, expected a string', typeof aa, ba);
                                        return;
                                    }
                                    n.debug('received message %s from %s', aa, ba);
                                    if (aa.substring(0, y.length) == y) aa = aa.substring(y.length);
                                    x.onMessage(aa, ba);
                                }, 'entry', 'onMessage'));
                                x.whenReady(z);
                                w = true;
                            }
                        };
                    }());
                    f.exports = u;
                }, null);
                __d('isFacebookURI', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = null,
                        i = ['http', 'https'];

                    function j(k) {
                        if (!h) h = new RegExp('(^|\\.)facebook\\.com$', 'i');
                        if (k.isEmpty() && k.toString() !== '#') return false;
                        if (!k.getDomain() && !k.getProtocol()) return true;
                        return ES(i, 'indexOf', true, k.getProtocol()) !== -1 && h.test(k.getDomain());
                    }
                    j.setRegex = function(k) {
                        h = k;
                    };
                    f.exports = j;
                }, null);
                __d('sdk.Event', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {
                        SUBSCRIBE: 'event.subscribe',
                        UNSUBSCRIBE: 'event.unsubscribe',
                        subscribers: function() {
                            if (!this._subscribersMap) this._subscribersMap = {};
                            return this._subscribersMap;
                        },
                        subscribe: function(i, j) {
                            var k = this.subscribers();
                            if (!k[i]) {
                                k[i] = [j];
                            } else if (ES(k[i], 'indexOf', true, j) == -1) k[i].push(j);
                            if (i != this.SUBSCRIBE && i != this.UNSUBSCRIBE) this.fire(this.SUBSCRIBE, i, k[i]);
                        },
                        unsubscribe: function(i, j) {
                            var k = this.subscribers()[i];
                            if (k) ES(k, 'forEach', true, function(l, m) {
                                if (l == j) k.splice(m, 1);
                            });
                            if (i != this.SUBSCRIBE && i != this.UNSUBSCRIBE) this.fire(this.UNSUBSCRIBE, i, k);
                        },
                        monitor: function(i, j) {
                            if (!j()) {
                                var k = this,
                                    l = function() {
                                        if (j.apply(j, arguments)) k.unsubscribe(i, l);
                                    };
                                this.subscribe(i, l);
                            }
                        },
                        clear: function(i) {
                            delete this.subscribers()[i];
                        },
                        fire: function(i) {
                            var j = Array.prototype.slice.call(arguments, 1),
                                k = this.subscribers()[i];
                            if (k) ES(k, 'forEach', true, function(l) {
                                if (l) l.apply(this, j);
                            });
                        }
                    };
                    f.exports = h;
                }, null);
                __d('JSONRPC', ['Log'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(j) {
                        'use strict';
                        this.$JSONRPC1 = 0;
                        this.$JSONRPC2 = {};
                        this.remote = ES(function(k) {
                            this.$JSONRPC3 = k;
                            return this.remote;
                        }, 'bind', true, this);
                        this.local = {};
                        this.$JSONRPC4 = j;
                    }
                    i.prototype.stub = function(j) {
                        'use strict';
                        this.remote[j] = ES(function() {
                            var k = {
                                jsonrpc: '2.0',
                                method: j
                            };
                            for (var l = arguments.length, m = Array(l), n = 0; n < l; n++) m[n] = arguments[n];
                            if (typeof m[m.length - 1] == 'function') {
                                k.id = ++this.$JSONRPC1;
                                this.$JSONRPC2[k.id] = m.pop();
                            }
                            k.params = m;
                            this.$JSONRPC4(ES('JSON', 'stringify', false, k), this.$JSONRPC3 || {
                                method: j
                            });
                        }, 'bind', true, this);
                    };
                    i.prototype.read = function(j, k) {
                        'use strict';
                        var l = ES('JSON', 'parse', false, j),
                            m = l.id;
                        if (!l.method) {
                            if (!this.$JSONRPC2[m]) {
                                h.warn('Could not find callback %s', m);
                                return;
                            }
                            var n = this.$JSONRPC2[m];
                            delete this.$JSONRPC2[m];
                            delete l.id;
                            delete l.jsonrpc;
                            n(l);
                            return;
                        }
                        var o = this,
                            p = this.local[l.method],
                            q;
                        if (m) {
                            q = function(t, u) {
                                var v = {
                                    jsonrpc: '2.0',
                                    id: m
                                };
                                v[t] = u;
                                setTimeout(function() {
                                    o.$JSONRPC4(ES('JSON', 'stringify', false, v), k);
                                }, 0);
                            };
                        } else q = function() {};
                        if (!p) {
                            h.error('Method "%s" has not been defined', l.method);
                            q('error', {
                                code: -32601,
                                message: 'Method not found',
                                data: l.method
                            });
                            return;
                        }
                        l.params.push(ES(q, 'bind', true, null, 'result'));
                        l.params.push(ES(q, 'bind', true, null, 'error'));
                        try {
                            var s = p.apply(k || null, l.params);
                            if (typeof s !== 'undefined') q('result', s);
                        } catch (r) {
                            h.error('Invokation of RPC method %s resulted in the error: %s', l.method, r.message);
                            q('error', {
                                code: -32603,
                                message: 'Internal error',
                                data: r.message
                            });
                        }
                    };
                    f.exports = i;
                }, null);
                __d('sdk.RPC', ['Assert', 'JSONRPC', 'Queue'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k = new j(),
                        l = new i(function(n) {
                            k.enqueue(n);
                        }),
                        m = {
                            local: l.local,
                            remote: l.remote,
                            stub: ES(l.stub, 'bind', true, l),
                            setInQueue: function(n) {
                                h.isInstanceOf(j, n);
                                n.start(function(o) {
                                    l.read(o);
                                });
                            },
                            getOutQueue: function() {
                                return k;
                            }
                        };
                    f.exports = m;
                }, null);
                __d('hasNamePropertyBug', ['guid', 'UserAgent_DEPRECATED'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    var j = i.ie() ? undefined : false;

                    function k() {
                        var m = document.createElement("form"),
                            n = m.appendChild(document.createElement("input"));
                        n.name = h();
                        j = n !== m.elements[n.name];
                        m = n = null;
                        return j;
                    }

                    function l() {
                        return typeof j === 'undefined' ? k() : j;
                    }
                    f.exports = l;
                }, null);
                __d('sdk.createIframe', ['DOMEventListener', 'getBlankIframeSrc', 'guid', 'hasNamePropertyBug'], function a(b, c, d, e, f, g, h, i, j, k) {
                    if (c.__markCompiled) c.__markCompiled();

                    function l(m) {
                        m = ES('Object', 'assign', false, {}, m);
                        var n, o = m.name || j(),
                            p = m.root,
                            q = m.style || {
                                border: 'none'
                            },
                            r = m.url,
                            s = m.onload,
                            t = m.onerror;
                        if (k()) {
                            n = document.createElement('<iframe name="' + o + '"/>');
                        } else {
                            n = document.createElement("iframe");
                            n.name = o;
                        }
                        delete m.style;
                        delete m.name;
                        delete m.url;
                        delete m.root;
                        delete m.onload;
                        delete m.onerror;
                        var u = ES('Object', 'assign', false, {
                            frameBorder: 0,
                            allowTransparency: true,
                            allowFullscreen: true,
                            scrolling: 'no'
                        }, m);
                        if (u.width) n.width = u.width + 'px';
                        if (u.height) n.height = u.height + 'px';
                        delete u.height;
                        delete u.width;
                        for (var v in u)
                            if (u.hasOwnProperty(v)) n.setAttribute(v, u[v]);
                        ES('Object', 'assign', false, n.style, q);
                        n.src = i();
                        p.appendChild(n);
                        if (s) var w = h.add(n, 'load', function() {
                            w.remove();
                            s();
                        });
                        if (t) var x = h.add(n, 'error', function() {
                            x.remove();
                            t();
                        });
                        n.src = r;
                        return n;
                    }
                    f.exports = l;
                }, null);
                __d('sdk.FeatureFunctor', ['invariant'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(k, l, m) {
                        if (k.features && l in k.features) {
                            var n = k.features[l];
                            if (typeof n === 'object' && typeof n.rate === 'number') {
                                if (n.rate && Math.random() * 100 <= n.rate) {
                                    return n.value || true;
                                } else return n.value ? null : false;
                            } else return n;
                        }
                        return m;
                    }

                    function j(k) {
                        return function(l, m) {
                            !(arguments.length >= 2) ? h(0): void 0;
                            return i(k, l, m);
                        };
                    }
                    f.exports = {
                        create: j
                    };
                }, null);
                __d('sdk.feature', ['sdk.FeatureFunctor', 'JSSDKConfig'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    f.exports = h.create(i);
                }, null);
                __d('sdk.XD', ['sdk.Content', 'sdk.Event', 'Log', 'QueryString', 'Queue', 'sdk.RPC', 'sdk.Runtime', 'sdk.Scribe', 'sdk.URI', 'UrlMap', 'JSSDKXDConfig', 'XDM', 'isFacebookURI', 'sdk.createIframe', 'sdk.feature', 'guid'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
                    if (c.__markCompiled) c.__markCompiled();
                    var x = new l(),
                        y = new l(),
                        z = new l(),
                        aa, ba, ca = w(),
                        da = r.useCdn ? 'cdn' : 'www',
                        ea = v('use_bundle', false) ? r.XdBundleUrl : r.XdUrl,
                        fa = q.resolve(da, false) + ea,
                        ga = q.resolve(da, true) + ea,
                        ha = w(),
                        ia = location.protocol + '//' + location.host,
                        ja, ka = false,
                        la = 'Facebook Cross Domain Communication Frame',
                        ma = {},
                        na = new l();
                    m.setInQueue(na);

                    function oa(ua) {
                        j.info('Remote XD can talk to facebook.com (%s)', ua);
                        n.setEnvironment(ua === 'canvas' ? n.ENVIRONMENTS.CANVAS : n.ENVIRONMENTS.PAGETAB);
                    }

                    function pa(ua, va) {
                        if (!va) {
                            j.error('No senderOrigin');
                            throw new Error();
                        }
                        var wa = /^https?/.exec(va)[0];
                        switch (ua.xd_action) {
                            case 'proxy_ready':
                                var xa, ya;
                                if (wa == 'https') {
                                    xa = z;
                                    ya = ba;
                                    n.setLoggedIntoFacebook(ua.logged_in === 'true');
                                } else {
                                    xa = y;
                                    ya = aa;
                                }
                                if (ua.registered) {
                                    oa(ua.registered);
                                    x = xa.merge(x);
                                }
                                j.info('Proxy ready, starting queue %s containing %s messages', wa + 'ProxyQueue', xa.getLength());
                                xa.start(function(ab) {
                                    ja.send(typeof ab === 'string' ? ab : k.encode(ab), va, ya.contentWindow, ha + '_' + wa);
                                });
                                break;
                            case 'plugin_ready':
                                j.info('Plugin %s ready, protocol: %s', ua.name, wa);
                                ma[ua.name] = {
                                    protocol: wa
                                };
                                if (l.exists(ua.name)) {
                                    var za = l.get(ua.name);
                                    j.debug('Enqueuing %s messages for %s in %s', za.getLength(), ua.name, wa + 'ProxyQueue');
                                    (wa == 'https' ? z : y).merge(za);
                                }
                                break;
                        }
                        if (ua.data) qa(ua.data, va);
                    }

                    function qa(ua, va) {
                        if (va && va !== 'native' && !t(new p(va))) return;
                        if (typeof ua == 'string') {
                            if (/^FB_RPC:/.test(ua)) {
                                na.enqueue(ua.substring(7));
                                return;
                            }
                            if (ua.substring(0, 1) == '{') {
                                try {
                                    ua = ES('JSON', 'parse', false, ua);
                                } catch (wa) {
                                    j.warn('Failed to decode %s as JSON', ua);
                                    return;
                                }
                            } else ua = k.decode(ua);
                        }
                        if (!va)
                            if (ua.xd_sig == ca) va = ua.xd_origin;
                        if (ua.xd_action) {
                            pa(ua, va);
                            return;
                        }
                        if (ua.access_token) n.setSecure(/^https/.test(ia));
                        if (ua.cb) {
                            var xa = ta._callbacks[ua.cb];
                            if (!ta._forever[ua.cb]) delete ta._callbacks[ua.cb];
                            if (xa) xa(ua);
                        }
                    }

                    function ra(ua, va) {
                        if (ua == 'facebook') {
                            va.relation = 'parent.parent';
                            x.enqueue(va);
                        } else {
                            va.relation = 'parent.frames["' + ua + '"]';
                            var wa = ma[ua];
                            if (wa) {
                                j.debug('Enqueuing message for plugin %s in %s', ua, wa.protocol + 'ProxyQueue');
                                (wa.protocol == 'https' ? z : y).enqueue(va);
                            } else {
                                j.debug('Buffering message for plugin %s', ua);
                                l.get(ua).enqueue(va);
                            }
                        }
                    }
                    m.getOutQueue().start(function(ua) {
                        ra('facebook', 'FB_RPC:' + ua);
                    });

                    function sa(ua) {
                        if (ka) return;
                        var va = h.appendHidden(document.createElement('div')),
                            wa = s.create({
                                blacklist: null,
                                root: va,
                                channel: ha,
                                flashUrl: r.Flash.path,
                                whenReady: function(xa) {
                                    ja = xa;
                                    var ya = {
                                            channel: ha,
                                            origin: location.protocol + '//' + location.host,
                                            transport: wa,
                                            xd_name: ua
                                        },
                                        za = '#' + k.encode(ya);
                                    if (n.getSecure() !== true) aa = u({
                                        url: fa + za,
                                        name: 'fb_xdm_frame_http',
                                        id: 'fb_xdm_frame_http',
                                        root: va,
                                        'aria-hidden': true,
                                        title: la,
                                        tabindex: -1
                                    });
                                    ba = u({
                                        url: ga + za,
                                        name: 'fb_xdm_frame_https',
                                        id: 'fb_xdm_frame_https',
                                        root: va,
                                        'aria-hidden': true,
                                        title: la,
                                        tabindex: -1
                                    });
                                },
                                onMessage: qa
                            });
                        if (!wa) o.log('jssdk_error', {
                            appId: n.getClientID(),
                            error: 'XD_TRANSPORT',
                            extra: {
                                message: 'Failed to create a valid transport'
                            }
                        });
                        ka = true;
                    }
                    var ta = {
                        rpc: m,
                        _callbacks: {},
                        _forever: {},
                        _channel: ha,
                        _origin: ia,
                        onMessage: qa,
                        recv: qa,
                        init: sa,
                        sendToFacebook: ra,
                        inform: function(ua, va, wa, xa) {
                            ra('facebook', {
                                method: ua,
                                params: ES('JSON', 'stringify', false, va || {}),
                                behavior: xa || 'p',
                                relation: wa
                            });
                        },
                        handler: function(ua, va, wa, xa) {
                            var ya = '#' + k.encode({
                                cb: this.registerCallback(ua, wa, xa),
                                origin: ia + '/' + ha,
                                domain: location.hostname,
                                relation: va || 'opener'
                            });
                            return (location.protocol == 'https:' ? ga : fa) + ya;
                        },
                        registerCallback: function(ua, va, wa) {
                            wa = wa || w();
                            if (va) ta._forever[wa] = true;
                            ta._callbacks[wa] = ua;
                            return wa;
                        },
                        getXDArbiterURL: function(ua) {
                            return ua ? ga : fa;
                        }
                    };
                    i.subscribe('init:post', function(ua) {
                        sa(ua.xdProxyName);
                        var va = v('xd_timeout', false);
                        if (va) setTimeout(function() {
                            var wa = ba && !!aa == y.isStarted() && !!ba == z.isStarted();
                            if (!wa) o.log('jssdk_error', {
                                appId: n.getClientID(),
                                error: 'XD_INITIALIZATION',
                                extra: {
                                    message: 'Failed to initialize in ' + va + 'ms'
                                }
                            });
                        }, va);
                    });
                    f.exports = ta;
                }, null);
                __d('sdk.getContextType', ['sdk.Runtime', 'sdk.UA'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();

                    function j() {
                        if (i.nativeApp()) return 3;
                        if (i.mobile()) return 2;
                        if (h.isEnvironment(h.ENVIRONMENTS.CANVAS)) return 5;
                        return 1;
                    }
                    f.exports = j;
                }, null);
                __d('sdk.Auth', ['sdk.Cookie', 'sdk.createIframe', 'DOMWrapper', 'sdk.feature', 'sdk.getContextType', 'guid', 'sdk.Impressions', 'Log', 'ObservableMixin', 'sdk.Runtime', 'sdk.Scribe', 'sdk.SignedRequest', 'UrlMap', 'sdk.URI', 'sdk.XD'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
                    if (c.__markCompiled) c.__markCompiled();
                    var w = 'fblo_',
                        x = 365 * 24 * 60 * 60 * 1000,
                        y, z, aa = new p();

                    function ba(ja, ka) {
                        var la = q.getUserID(),
                            ma = '';
                        if (ja)
                            if (ja.userID) {
                                ma = ja.userID;
                            } else if (ja.signedRequest) {
                            var na = s.parse(ja.signedRequest);
                            if (na && na.user_id) ma = na.user_id;
                        }
                        var oa = q.getLoginStatus(),
                            pa = oa === 'unknown' && ja || q.getUseCookie() && q.getCookieUserID() !== ma,
                            qa = la && !ja,
                            ra = ja && la && la != ma,
                            sa = ja != y,
                            ta = ka != (oa || 'unknown');
                        q.setLoginStatus(ka);
                        q.setAccessToken(ja && ja.accessToken || null);
                        q.setUserID(ma);
                        y = ja;
                        var ua = {
                            authResponse: ja,
                            status: ka
                        };
                        if (qa || ra) aa.inform('logout', ua);
                        if (pa || ra) aa.inform('login', ua);
                        if (sa) aa.inform('authresponse.change', ua);
                        if (ta) aa.inform('status.change', ua);
                        return ua;
                    }

                    function ca() {
                        return y;
                    }

                    function da(ja, ka, la) {
                        return function(ma) {
                            var na;
                            if (ma && ma.access_token) {
                                var oa = s.parse(ma.signed_request);
                                ka = {
                                    accessToken: ma.access_token,
                                    userID: oa.user_id,
                                    expiresIn: parseInt(ma.expires_in, 10),
                                    signedRequest: ma.signed_request
                                };
                                if (ma.granted_scopes) ka.grantedScopes = ma.granted_scopes;
                                if (q.getUseCookie()) {
                                    var pa = ka.expiresIn === 0 ? 0 : ES('Date', 'now', false) + ka.expiresIn * 1000,
                                        qa = h.getDomain();
                                    if (!qa && ma.base_domain) h.setDomain('.' + ma.base_domain);
                                    h.setSignedRequestCookie(ma.signed_request, pa);
                                    ea();
                                }
                                na = 'connected';
                                ba(ka, na);
                            } else if (la === 'logout' || la === 'login_status') {
                                if (ma.error && ma.error === 'not_authorized') {
                                    na = 'not_authorized';
                                } else na = 'unknown';
                                ba(null, na);
                                if (q.getUseCookie()) h.clearSignedRequestCookie();
                                if (la === 'logout') {
                                    fa();
                                    r.log('jssdk_error', {
                                        appId: q.getClientID(),
                                        error: 'PLATFORM_AUTH_LOGOUT',
                                        extra: {
                                            args: {
                                                fblo: true
                                            }
                                        }
                                    });
                                }
                            }
                            if (ma && ma.https == 1) q.setSecure(true);
                            if (ja) ja({
                                authResponse: ka,
                                status: q.getLoginStatus()
                            });
                            return ka;
                        };
                    }

                    function ea() {
                        h.setRaw(w, '', 0);
                    }

                    function fa() {
                        h.setRaw(w, 'y', ES('Date', 'now', false) + x);
                    }

                    function ga(ja) {
                        var ka, la = ES('Date', 'now', false);
                        if (z) {
                            clearTimeout(z);
                            z = null;
                        }
                        var ma = h.getRaw(w) === 'y';
                        if (k('getloginstatus_tracking', true)) r.log('jssdk_error', {
                            appId: q.getClientID(),
                            error: 'PLATFORM_AUTH_GETLOGINSTATUS',
                            extra: {
                                args: {
                                    fblo: ma
                                }
                            }
                        });
                        if (ma) {
                            var na = 'unknown';
                            ba(null, na);
                            if (ja) ja({
                                authResponse: null,
                                status: na
                            });
                            return;
                        }
                        var oa = da(ja, y, 'login_status'),
                            pa = new u(t.resolve('www', true) + '/connect/ping').setQueryData({
                                client_id: q.getClientID(),
                                response_type: 'token,signed_request,code',
                                domain: location.hostname,
                                origin: l(),
                                redirect_uri: v.handler(function(qa) {
                                    if (k('e2e_ping_tracking', true)) {
                                        var ra = {
                                            init: la,
                                            close: ES('Date', 'now', false),
                                            method: 'ping'
                                        };
                                        o.debug('e2e: %s', ES('JSON', 'stringify', false, ra));
                                        n.log(114, {
                                            payload: ra
                                        });
                                    }
                                    ka.parentNode.removeChild(ka);
                                    if (oa(qa)) z = setTimeout(function() {
                                        ga(function() {});
                                    }, 1200000);
                                }, 'parent'),
                                sdk: 'joey',
                                kid_directed_site: q.getKidDirectedSite()
                            });
                        ka = i({
                            root: j.getRoot(),
                            name: m(),
                            url: pa.toString(),
                            style: {
                                display: 'none'
                            }
                        });
                    }
                    var ha;

                    function ia(ja, ka) {
                        if (!q.getClientID()) {
                            o.warn('FB.getLoginStatus() called before calling FB.init().');
                            return;
                        }
                        if (ja)
                            if (!ka && ha == 'loaded') {
                                ja({
                                    status: q.getLoginStatus(),
                                    authResponse: ca()
                                });
                                return;
                            } else aa.subscribe('FB.loginStatus', ja);
                        if (!ka && ha == 'loading') return;
                        ha = 'loading';
                        var la = function(ma) {
                            ha = 'loaded';
                            aa.inform('FB.loginStatus', ma);
                            aa.clearSubscribers('FB.loginStatus');
                        };
                        ga(la);
                    }
                    ES('Object', 'assign', false, aa, {
                        removeLogoutState: ea,
                        getLoginStatus: ia,
                        fetchLoginStatus: ga,
                        setAuthResponse: ba,
                        getAuthResponse: ca,
                        parseSignedRequest: s.parse,
                        xdResponseWrapper: da
                    });
                    f.exports = aa;
                }, null);
                __d('sdk.DOM', ['Assert', 'sdk.UA', 'sdk.domReady'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k = {};

                    function l(z, aa) {
                        var ba = z.getAttribute(aa) || z.getAttribute(aa.replace(/_/g, '-')) || z.getAttribute(aa.replace(/-/g, '_')) || z.getAttribute(aa.replace(/-/g, '')) || z.getAttribute(aa.replace(/_/g, '')) || z.getAttribute('data-' + aa) || z.getAttribute('data-' + aa.replace(/_/g, '-')) || z.getAttribute('data-' + aa.replace(/-/g, '_')) || z.getAttribute('data-' + aa.replace(/-/g, '')) || z.getAttribute('data-' + aa.replace(/_/g, ''));
                        return ba ? String(ba) : null;
                    }

                    function m(z, aa) {
                        var ba = l(z, aa);
                        return ba ? /^(true|1|yes|on)$/.test(ba) : null;
                    }

                    function n(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        try {
                            return String(z[aa]);
                        } catch (ba) {
                            throw new Error('Could not read property ' + aa + ' : ' + ba.message);
                        }
                    }

                    function o(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        try {
                            z.innerHTML = aa;
                        } catch (ba) {
                            throw new Error('Could not set innerHTML : ' + ba.message);
                        }
                    }

                    function p(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        var ba = ' ' + n(z, 'className') + ' ';
                        return ES(ba, 'indexOf', true, ' ' + aa + ' ') >= 0;
                    }

                    function q(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        if (!p(z, aa)) z.className = n(z, 'className') + ' ' + aa;
                    }

                    function r(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        var ba = new RegExp('\\s*' + aa, 'g');
                        z.className = ES(n(z, 'className').replace(ba, ''), 'trim', true);
                    }

                    function s(z, aa, ba) {
                        h.isString(z);
                        aa = aa || document.body;
                        ba = ba || '*';
                        if (aa.querySelectorAll) return ES('Array', 'from', false, aa.querySelectorAll(ba + '.' + z));
                        var ca = aa.getElementsByTagName(ba),
                            da = [];
                        for (var ea = 0, fa = ca.length; ea < fa; ea++)
                            if (p(ca[ea], z)) da[da.length] = ca[ea];
                        return da;
                    }

                    function t(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        aa = aa.replace(/-(\w)/g, function(da, ea) {
                            return ea.toUpperCase();
                        });
                        var ba = z.currentStyle || document.defaultView.getComputedStyle(z, null),
                            ca = ba[aa];
                        if (/backgroundPosition?/.test(aa) && /top|left/.test(ca)) ca = '0%';
                        return ca;
                    }

                    function u(z, aa, ba) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        aa = aa.replace(/-(\w)/g, function(ca, da) {
                            return da.toUpperCase();
                        });
                        z.style[aa] = ba;
                    }

                    function v(z, aa) {
                        var ba = true;
                        for (var ca = 0, da; da = aa[ca++];)
                            if (!(da in k)) {
                                ba = false;
                                k[da] = true;
                            }
                        if (ba) return;
                        if (i.ie() < 11) {
                            try {
                                document.createStyleSheet().cssText = z;
                            } catch (ea) {
                                if (document.styleSheets[0]) document.styleSheets[0].cssText += z;
                            }
                        } else {
                            var fa = document.createElement('style');
                            fa.type = 'text/css';
                            fa.textContent = z;
                            document.getElementsByTagName('head')[0].appendChild(fa);
                        }
                    }

                    function w() {
                        var z = document.documentElement && document.compatMode == 'CSS1Compat' ? document.documentElement : document.body;
                        return {
                            scrollTop: z.scrollTop || document.body.scrollTop,
                            scrollLeft: z.scrollLeft || document.body.scrollLeft,
                            width: window.innerWidth ? window.innerWidth : z.clientWidth,
                            height: window.innerHeight ? window.innerHeight : z.clientHeight
                        };
                    }

                    function x(z) {
                        h.isTruthy(z, 'element not specified');
                        var aa = 0,
                            ba = 0;
                        do {
                            aa += z.offsetLeft;
                            ba += z.offsetTop;
                        } while (z = z.offsetParent);
                        return {
                            x: aa,
                            y: ba
                        };
                    }
                    var y = {
                        containsCss: p,
                        addCss: q,
                        removeCss: r,
                        getByClass: s,
                        getStyle: t,
                        setStyle: u,
                        getAttr: l,
                        getBoolAttr: m,
                        getProp: n,
                        html: o,
                        addCssRules: v,
                        getViewportInfo: w,
                        getPosition: x,
                        ready: j
                    };
                    f.exports = y;
                }, null);
                __d('normalizeError', ['sdk.UA'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(j) {
                        var k = {
                            line: j.lineNumber || j.line,
                            message: j.message,
                            name: j.name,
                            script: j.fileName || j.sourceURL || j.script,
                            stack: j.stackTrace || j.stack
                        };
                        k._originalError = j;
                        var l = /([\w:\.\/]+\.js):(\d+)/.exec(j.stack);
                        if (h.chrome() && l) {
                            k.script = l[1];
                            k.line = parseInt(l[2], 10);
                        }
                        for (var m in k) k[m] == null && delete k[m];
                        return k;
                    }
                    f.exports = i;
                }, null);
                __d('sdk.ErrorHandling', ['ManagedError', 'sdk.Runtime', 'sdk.Scribe', 'sdk.feature', 'normalizeError', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    if (c.__markCompiled) c.__markCompiled();
                    var n = k('error_handling', false),
                        o = '';

                    function p(v) {
                        var w = v._originalError;
                        delete v._originalError;
                        j.log('jssdk_error', {
                            appId: i.getClientID(),
                            error: v.name || v.message,
                            extra: v
                        });
                        throw w;
                    }

                    function q(v, w) {
                        return function() {
                            if (!n) return v.apply(this, arguments);
                            try {
                                o = w;
                                return v.apply(this, arguments);
                            } catch (x) {
                                if (x instanceof h) throw x;
                                var y = l(x);
                                y.entry = w;
                                var z = ES(Array.prototype.slice.call(arguments), 'map', true, function(aa) {
                                    var ba = Object.prototype.toString.call(aa);
                                    return (/^\[object (String|Number|Boolean|Object|Date)\]$/.test(ba) ? aa : aa.toString());
                                });
                                y.args = ES('JSON', 'stringify', false, z).substring(0, 200);
                                p(y);
                            } finally {
                                o = '';
                            }
                        };
                    }

                    function r(v) {
                        if (!v.__wrapper) v.__wrapper = function() {
                            try {
                                return v.apply(this, arguments);
                            } catch (w) {
                                window.setTimeout(function() {
                                    throw w;
                                }, 0);
                                return false;
                            }
                        };
                        return v.__wrapper;
                    }

                    function s(v) {
                        try {
                            return v && v.callee && v.callee.caller ? v.callee.caller.name : '';
                        } catch (w) {
                            return '';
                        }
                    }

                    function t(v, w) {
                        return function(x, y) {
                            var z = w + ':' + (o || '[global]') + ':' + (x.name || '[anonymous]' + s(arguments));
                            return v(m(x, 'entry', z), y);
                        };
                    }
                    if (n) {
                        setTimeout = t(setTimeout, 'setTimeout');
                        setInterval = t(setInterval, 'setInterval');
                        m.setWrapper(q, 'entry');
                    }
                    var u = {
                        guard: q,
                        unguard: r
                    };
                    f.exports = u;
                }, null);
                __d('sdk.Insights', ['sdk.Impressions'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = {
                        TYPE: {
                            NOTICE: 'notice',
                            WARNING: 'warn',
                            ERROR: 'error'
                        },
                        CATEGORY: {
                            DEPRECATED: 'deprecated',
                            APIERROR: 'apierror'
                        },
                        log: function(j, k, l) {
                            var m = {
                                source: 'jssdk',
                                type: j,
                                category: k,
                                payload: l
                            };
                            h.log(113, m);
                        },
                        impression: h.impression
                    };
                    f.exports = i;
                }, null);
                __d('FB', ['sdk.Auth', 'JSSDKCssConfig', 'dotAccess', 'sdk.domReady', 'sdk.DOM', 'sdk.ErrorHandling', 'sdk.Content', 'DOMWrapper', 'GlobalCallback', 'sdk.Insights', 'Log', 'sdk.Runtime', 'sdk.Scribe', 'JSSDKConfig'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
                    if (c.__markCompiled) c.__markCompiled();
                    var v, w, x = j(u, 'api.mode'),
                        y = {};
                    v = window.FB = {};
                    var z = {};
                    r.level = 0;
                    p.setPrefix('FB.__globalCallbacks');
                    var aa = document.createElement('div');
                    o.setRoot(aa);
                    k(function() {
                        r.info('domReady');
                        n.appendHidden(aa);
                        if (i.rules) l.addCssRules(i.rules, i.components);
                    });
                    s.subscribe('AccessToken.change', function(da) {
                        if (!da && s.getLoginStatus() === 'connected') h.getLoginStatus(null, true);
                    });
                    if (j(u, 'api.whitelist.length')) {
                        w = {};
                        ES(u.api.whitelist, 'forEach', true, function(da) {
                            w[da] = 1;
                        });
                    }

                    function ba(da, ea, fa, ga) {
                        var ha;
                        if (/^_/.test(fa)) {
                            ha = 'hide';
                        } else if (w && !w[ea]) ha = x;
                        switch (ha) {
                            case 'hide':
                                return;
                            case 'stub':
                                return function() {
                                    r.warn('The method FB.%s has been removed from the JS SDK.', ea);
                                };
                            default:
                                return m.guard(function() {
                                    if (ha === 'warn') {
                                        r.warn('The method FB.%s is not officially supported by ' + 'Facebook and access to it will soon be removed.', ea);
                                        if (!y.hasOwnProperty(ea)) {
                                            q.log(q.TYPE.WARNING, q.CATEGORY.DEPRECATED, 'FB.' + ea);
                                            t.log('jssdk_error', {
                                                appId: s.getClientID(),
                                                error: 'Private method used',
                                                extra: {
                                                    args: ea
                                                }
                                            });
                                            y[ea] = true;
                                        }
                                    }

                                    function ia(pa) {
                                        if (ES('Array', 'isArray', false, pa)) return ES(pa, 'map', true, ia);
                                        if (pa && typeof pa === 'object' && pa.__wrapped) return pa.__wrapped;
                                        return typeof pa === 'function' && /^function/.test(pa.toString()) ? m.unguard(pa) : pa;
                                    }
                                    var ja = ES(Array.prototype.slice.call(arguments), 'map', true, ia),
                                        ka = da.apply(ga, ja),
                                        la, ma = true;
                                    if (ka && typeof ka === 'object') {
                                        la = ES('Object', 'create', false, ka);
                                        la.__wrapped = ka;
                                        for (var na in ka) {
                                            var oa = ka[na];
                                            if (typeof oa !== 'function' || na === 'constructor') continue;
                                            ma = false;
                                            la[na] = ba(oa, ea + ':' + na, na, ka);
                                        }
                                    }
                                    if (!ma) return la;
                                    return ma ? ka : la;
                                }, ea);
                        }
                    }

                    function ca(da, ea) {
                        var fa = da ? j(v, da, true) : v;
                        ES(ES('Object', 'keys', false, ea), 'forEach', true, function(ga) {
                            var ha = ea[ga];
                            if (typeof ha === 'function') {
                                var ia = (da ? da + '.' : '') + ga,
                                    ja = ba(ha, ia, ga, ea);
                                if (ja) fa[ga] = ja;
                            } else if (typeof ha === 'object') {
                                ia = (da ? da + '.' : '') + ga;
                                if (w && w[ia]) fa[ga] = ha;
                            }
                        });
                    }
                    s.setSecure(function() {
                        var da = /iframe_canvas|app_runner/.test(window.name),
                            ea = /dialog/.test(window.name);
                        if (location.protocol == 'https:' && (window == top || !(da || ea))) return true;
                        if (/_fb_https?/.test(window.name)) return ES(window.name, 'indexOf', true, '_fb_https') != -1;
                    }());
                    ES('Object', 'assign', false, z, {
                        provide: ca
                    });
                    f.exports = z;
                }, null);
                __d('ArgumentError', ['ManagedError'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(j, k) {
                        h.prototype.constructor.apply(this, arguments);
                    }
                    i.prototype = new h();
                    i.prototype.constructor = i;
                    f.exports = i;
                }, null);
                __d('errorCode', [], function a(b, c, d, e, f, g) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i) {
                        throw new Error('errorCode' + '("' + i + '"): This should not happen. Oh noes!');
                    }
                    f.exports = h;
                }, null);
                __d('CORSRequest', ['wrapFunction', 'QueryString', 'errorCode'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();

                    function k(n, o) {
                        if (!self.XMLHttpRequest) return null;
                        var p = new XMLHttpRequest(),
                            q = function() {};
                        if ('withCredentials' in p) {
                            p.open(n, o, true);
                            p.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        } else if (self.XDomainRequest) {
                            p = new XDomainRequest();
                            try {
                                p.open(n, o);
                                p.onprogress = p.ontimeout = q;
                            } catch (r) {
                                return null;
                            }
                        } else return null;
                        var s = {
                                send: function(v) {
                                    p.send(v);
                                }
                            },
                            t = h(function() {
                                t = q;
                                if ('onload' in s) s.onload(p);
                            }, 'entry', 'XMLHttpRequest:load'),
                            u = h(function() {
                                u = q;
                                if ('onerror' in s) s.onerror(p);
                            }, 'entry', 'XMLHttpRequest:error');
                        p.onload = function() {
                            t();
                        };
                        p.onerror = function() {
                            u();
                        };
                        p.onreadystatechange = function() {
                            if (p.readyState == 4)
                                if (p.status == 200) {
                                    t();
                                } else u();
                        };
                        return s;
                    }

                    function l(n, o, p, q) {
                        p.suppress_http_code = 1;
                        var r = i.encode(p);
                        if (o != 'post') {
                            n = i.appendToUrl(n, r);
                            r = '';
                        }
                        var s = k(o, n);
                        if (!s) return false;
                        s.onload = function(t) {
                            q(ES('JSON', 'parse', false, t.responseText));
                        };
                        s.onerror = function(t) {
                            if (t.responseText) {
                                q(ES('JSON', 'parse', false, t.responseText));
                            } else q({
                                error: {
                                    code: 1,
                                    error_subcode: 1357045,
                                    message: 'unknown error (empty response)',
                                    status: t.status,
                                    type: 'http'
                                }
                            });
                        };
                        s.send(r);
                        return true;
                    }
                    var m = {
                        execute: l
                    };
                    f.exports = m;
                }, null);
                __d('FlashRequest', ['DOMWrapper', 'Flash', 'GlobalCallback', 'QueryString', 'Queue'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    if (c.__markCompiled) c.__markCompiled();
                    var m, n = {},
                        o, p;

                    function q() {
                        if (!o) throw new Error('swfUrl has not been set');
                        var t = j.create(function() {
                                m.start(function(v) {
                                    var w = p.execute(v.method, v.url, v.body);
                                    if (!w) throw new Error('Could create request');
                                    n[w] = v.callback;
                                });
                            }),
                            u = j.create(function(v, w, x) {
                                var y;
                                try {
                                    y = ES('JSON', 'parse', false, decodeURIComponent(x));
                                } catch (z) {
                                    y = {
                                        error: {
                                            type: 'SyntaxError',
                                            message: z.message,
                                            status: w,
                                            raw: x
                                        }
                                    };
                                }
                                n[v](y);
                                delete n[v];
                            });
                        p = i.embed(o, h.getRoot(), null, {
                            log: false,
                            initCallback: t,
                            requestCallback: u
                        });
                    }

                    function r(t, u, v, w) {
                        v.suppress_http_code = 1;
                        if (!v.method) v.method = u;
                        var x = k.encode(v);
                        if (u === 'get' && t.length + x.length < 2000) {
                            t = k.appendToUrl(t, x);
                            x = '';
                        } else u = 'post';
                        if (!m) {
                            if (!i.isAvailable()) return false;
                            m = new l();
                            q();
                        }
                        m.enqueue({
                            method: u,
                            url: t,
                            body: x,
                            callback: w
                        });
                        return true;
                    }
                    var s = {
                        setSwfUrl: function(t) {
                            o = t;
                        },
                        execute: r
                    };
                    f.exports = s;
                }, null);
                __d('JSONPRequest', ['DOMWrapper', 'GlobalCallback', 'QueryString'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k = 2000;

                    function l(n, o, p, q) {
                        var r = document.createElement('script'),
                            s = function(u) {
                                s = function() {};
                                i.remove(p.callback);
                                q(u);
                                r.parentNode.removeChild(r);
                            };
                        p.callback = i.create(s);
                        if (!p.method) p.method = o;
                        n = j.appendToUrl(n, p);
                        if (n.length > k) {
                            i.remove(p.callback);
                            return false;
                        }
                        r.onerror = function() {
                            s({
                                error: {
                                    type: 'http',
                                    message: 'unknown error'
                                }
                            });
                        };
                        var t = function() {
                            setTimeout(function() {
                                s({
                                    error: {
                                        type: 'http',
                                        message: 'unknown error'
                                    }
                                });
                            }, 0);
                        };
                        if (r.addEventListener) {
                            r.addEventListener('load', t, false);
                        } else r.onreadystatechange = function() {
                            if (/loaded|complete/.test(this.readyState)) t();
                        };
                        r.src = n;
                        h.getRoot().appendChild(r);
                        return true;
                    }
                    var m = {
                        execute: l,
                        MAX_QUERYSTRING_LENGTH: k
                    };
                    f.exports = m;
                }, null);
                __d('flattenObject', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i) {
                        var j = {};
                        for (var k in i)
                            if (i.hasOwnProperty(k)) {
                                var l = i[k];
                                if (null === l || undefined === l) {
                                    continue;
                                } else if (typeof l == 'string') {
                                    j[k] = l;
                                } else j[k] = ES('JSON', 'stringify', false, l);
                            }
                        return j;
                    }
                    f.exports = h;
                }, null);
                __d('ApiClient', ['ArgumentError', 'Assert', 'CORSRequest', 'FlashRequest', 'flattenObject', 'JSONPRequest', 'Log', 'ObservableMixin', 'QueryString', 'sprintf', 'sdk.URI', 'UrlMap', 'ApiClientConfig', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
                    if (c.__markCompiled) c.__markCompiled();
                    var v, w, x, y = m.MAX_QUERYSTRING_LENGTH,
                        z = {
                            get: true,
                            post: true,
                            'delete': true,
                            put: true
                        },
                        aa = {
                            fql_query: true,
                            fql_multiquery: true,
                            friends_get: true,
                            notifications_get: true,
                            stream_get: true,
                            users_getinfo: true
                        },
                        ba = ['jsonp', 'cors', 'flash'],
                        ca = [],
                        da = [],
                        ea = null,
                        fa = 0,
                        ga = [],
                        ha = 0,
                        ia = 50,
                        ja = 105440539523;

                    function ka(ua, va, wa, xa) {
                        var ya = ha !== 0 && fa >= ha;
                        if (ya) {
                            ga.push(function() {
                                return ka(ua, va, wa, xa);
                            });
                            sa.inform('request.queued', ua, va, wa);
                            return;
                        }
                        fa++;
                        if (x) wa = ES('Object', 'assign', false, {}, x, wa);
                        wa.access_token = wa.access_token || v;
                        wa.pretty = wa.pretty || 0;
                        wa = l(wa);
                        var za = {
                                jsonp: m,
                                cors: j,
                                flash: k
                            },
                            ab;
                        if (wa.transport) {
                            ab = [wa.transport];
                            delete wa.transport;
                        } else ab = ba;
                        for (var bb = 0; bb < ab.length; bb++) {
                            var cb = za[ab[bb]],
                                db = ES('Object', 'assign', false, {}, wa);
                            if (cb.execute(ua, va, db, xa)) return;
                        }
                        xa({
                            error: {
                                type: 'no-transport',
                                message: 'Could not find a usable transport for request'
                            }
                        });
                    }

                    function la(ua, va, wa, xa, ya, za) {
                        if (za && za.error) sa.inform('request.error', va, wa, xa, za, ES('Date', 'now', false) - ya);
                        sa.inform('request.complete', va, wa, xa, za, ES('Date', 'now', false) - ya);
                        fa--;
                        if (ua) ua(za);
                        var ab = ga.length > 0 && fa < ha;
                        if (ab) {
                            var bb = ga.shift();
                            bb();
                        }
                    }

                    function ma(ua) {
                        var va = ua.shift();
                        i.isString(va, 'Invalid path');
                        if (!/^https?/.test(va) && va.charAt(0) !== '/') va = '/' + va;
                        var wa, xa = {};
                        try {
                            wa = new r(va);
                        } catch (ya) {
                            throw new h(ya.message, ya);
                        }
                        ES(ua, 'forEach', true, function(cb) {
                            return xa[typeof cb] = cb;
                        });
                        var za = (xa.string || 'get').toLowerCase();
                        i.isTrue(z.hasOwnProperty(za), q('Invalid method passed to ApiClient: %s', za));
                        var ab = xa['function'];
                        if (!ab) n.warn('No callback passed to the ApiClient');
                        if (xa.object) wa.addQueryData(l(xa.object));
                        var bb = wa.getQueryData();
                        bb.method = za;
                        return {
                            uri: wa,
                            callback: ab,
                            params: bb
                        };
                    }

                    function na() {
                        for (var ua = arguments.length, va = Array(ua), wa = 0; wa < ua; wa++) va[wa] = arguments[wa];
                        var xa = ma(va),
                            ya = xa.uri,
                            za = xa.callback,
                            ab = xa.params,
                            bb = ab.method;
                        if (ta(ya, bb)) bb = 'post';
                        var cb = ya.getProtocol() && ya.getDomain() ? ya.setQueryData({}).toString() : s.resolve('graph') + ya.getPath();
                        sa.inform('request.prepare', cb, ab);
                        ka(cb, bb == 'get' ? 'get' : 'post', ab, ES(la, 'bind', true, null, za, ya.getPath(), bb, ab, ES('Date', 'now', false)));
                    }

                    function oa(ua) {
                        var va = ma(ua),
                            wa = va.uri,
                            xa = va.callback,
                            ya = va.params.method,
                            za, ab = wa.removeQueryData('method').toString();
                        if (ya.toLowerCase() == 'post') {
                            za = p.encode(wa.getQueryData());
                            ab = wa.setQueryData({}).toString();
                        }
                        return {
                            body: za,
                            callback: xa,
                            method: ya,
                            relative_url: ab
                        };
                    }

                    function pa() {
                        for (var ua = arguments.length, va = Array(ua), wa = 0; wa < ua; wa++) va[wa] = arguments[wa];
                        var xa = oa(va),
                            ya = xa.body,
                            za = xa.callback,
                            ab = xa.method,
                            bb = xa.relative_url,
                            cb = {
                                method: ab,
                                relative_url: bb
                            };
                        if (ya) cb.body = ya;
                        ca.push(cb);
                        da.push(za);
                        if (ca.length == ia) {
                            if (ea) clearTimeout(ea);
                            qa();
                        } else if (!ea) ea = setTimeout(qa, 0);
                    }

                    function qa() {
                        !(ca.length > 0) ? u(0): void 0;
                        !(ca.length === da.length) ? u(0): void 0;
                        var ua = ca,
                            va = da;
                        ca = [];
                        da = [];
                        ea = null;
                        if (ua.length === 1) {
                            var wa = ua[0],
                                xa = va[0],
                                ya = wa.body ? p.decode(wa.body) : null;
                            na(wa.relative_url, wa.method, ya, xa);
                            return;
                        }
                        na('/', 'POST', {
                            batch: ua,
                            include_headers: false,
                            batch_app_id: w || ja
                        }, function(za) {
                            if (ES('Array', 'isArray', false, za)) {
                                ES(za, 'forEach', true, function(ab, bb) {
                                    va[bb](ES('JSON', 'parse', false, ab.body));
                                });
                            } else ES(va, 'forEach', true, function(ab) {
                                return (ab({
                                    error: {
                                        message: 'Fatal: batch call failed.'
                                    }
                                }));
                            });
                        });
                    }

                    function ra(ua, va) {
                        i.isObject(ua);
                        i.isString(ua.method, 'method missing');
                        if (!va) n.warn('No callback passed to the ApiClient');
                        var wa = ua.method.toLowerCase().replace('.', '_');
                        ua.format = 'json-strings';
                        ua.api_key = w;
                        var xa = wa in aa ? 'api_read' : 'api',
                            ya = s.resolve(xa) + '/restserver.php',
                            za = ES(la, 'bind', true, null, va, '/restserver.php', 'get', ua, ES('Date', 'now', false));
                        ka(ya, 'get', ua, za);
                    }
                    var sa = ES('Object', 'assign', false, new o(), {
                        setAccessToken: function(ua) {
                            v = ua;
                        },
                        setAccessTokenForClientID: function(ua, va) {
                            if (!(v && w && w !== va)) v = ua;
                        },
                        getAccessToken: function() {
                            return v;
                        },
                        setClientID: function(ua) {
                            w = ua;
                        },
                        setDefaultParams: function(ua) {
                            x = ua;
                        },
                        setDefaultTransports: function(ua) {
                            ba = ua;
                        },
                        setMaxConcurrentRequests: function(ua) {
                            ha = ua;
                        },
                        getCurrentlyExecutingRequestCount: function() {
                            return fa;
                        },
                        getQueuedRequestCount: function() {
                            return ga.length;
                        },
                        rest: ra,
                        graph: na,
                        scheduleBatchCall: pa,
                        prepareBatchParams: oa
                    });

                    function ta(ua, va) {
                        return ua.toString().length > y && va === 'get';
                    }
                    k.setSwfUrl(t.FlashRequest.swfUrl);
                    f.exports = sa;
                }, null);
                __d('sdk.PlatformVersioning', ['sdk.Runtime', 'ManagedError'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    var j = /^v\d+\.\d\d?$/,
                        k = {
                            REGEX: j,
                            assertVersionIsSet: function() {
                                if (!h.getVersion()) throw new i('init not called with valid version');
                            },
                            assertValidVersion: function(l) {
                                if (!j.test(l)) throw new i('invalid version specified');
                            }
                        };
                    f.exports = k;
                }, null);
                __d('sdk.api', ['ApiClient', 'sdk.PlatformVersioning', 'sdk.Runtime', 'sdk.Scribe', 'sdk.URI', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    if (c.__markCompiled) c.__markCompiled();
                    var n = m('should_log_response_error', false),
                        o;
                    j.subscribe('ClientID.change', function(q) {
                        return h.setClientID(q);
                    });
                    j.subscribe('AccessToken.change', function(q) {
                        o = q;
                        h.setAccessToken(q);
                    });
                    h.setDefaultParams({
                        sdk: 'joey'
                    });
                    h.subscribe('request.complete', function(q, r, s, t) {
                        var u = false;
                        if (t && typeof t == 'object')
                            if (t.error) {
                                if (t.error == 'invalid_token' || t.error.type == 'OAuthException' && t.error.code == 190) u = true;
                            } else if (t.error_code)
                            if (t.error_code == '190') u = true;
                        if (u && o === j.getAccessToken()) j.setAccessToken(null);
                    });
                    h.subscribe('request.complete', function(q, r, s, t) {
                        if ((q == '/me/permissions' && r === 'delete' || q == '/restserver.php' && s.method == 'Auth.revokeAuthorization') && t === true) j.setAccessToken(null);
                    });
                    h.subscribe('request.error', function(q, r, s, t) {
                        if (n && t.error.type === 'http') k.log('jssdk_error', {
                            appId: j.getClientID(),
                            error: 'transport',
                            extra: {
                                name: 'transport',
                                message: ES('JSON', 'stringify', false, t.error)
                            }
                        });
                    });

                    function p(q) {
                        if (typeof q === 'string') {
                            if (j.getIsVersioned()) {
                                i.assertVersionIsSet();
                                if (!/https?/.test(q) && q.charAt(0) !== '/') q = '/' + q;
                                q = new l(q).setDomain(null).setProtocol(null).toString();
                                if (!i.REGEX.test(q.substring(1, ES(q, 'indexOf', true, '/', 1)))) q = '/' + j.getVersion() + q;
                                var r = [q].concat(Array.prototype.slice.call(arguments, 1));
                                h.graph.apply(h, r);
                            } else h.graph.apply(h, arguments);
                        } else h.rest.apply(h, arguments);
                    }
                    f.exports = p;
                }, null);
                __d('legacy:fb.api', ['FB', 'sdk.api'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    h.provide('', {
                        api: i
                    });
                }, 3);
                __d('sdk.AppEvents', ['Assert', 'sdk.Impressions', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k = {
                            COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
                            VIEWED_CONTENT: 'fb_mobile_content_view',
                            SEARCHED: 'fb_mobile_search',
                            RATED: 'fb_mobile_rate',
                            COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
                            ADDED_TO_CART: 'fb_mobile_add_to_cart',
                            ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
                            INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
                            ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
                            ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
                            UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
                            SPENT_CREDITS: 'fb_mobile_spent_credits'
                        },
                        l = {
                            ACTIVATED_APP: 'fb_mobile_activate_app',
                            PURCHASED: 'fb_mobile_purchase'
                        },
                        m = {
                            CURRENCY: 'fb_currency',
                            REGISTRATION_METHOD: 'fb_registration_method',
                            CONTENT_TYPE: 'fb_content_type',
                            CONTENT_ID: 'fb_content_id',
                            SEARCH_STRING: 'fb_search_string',
                            SUCCESS: 'fb_success',
                            MAX_RATING_VALUE: 'fb_max_rating_value',
                            PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
                            NUM_ITEMS: 'fb_num_items',
                            LEVEL: 'fb_level',
                            DESCRIPTION: 'fb_description'
                        },
                        n = 40,
                        o = '^[0-9a-zA-Z_]+[0-9a-zA-Z _-]*$';

                    function p(t, u, v, w) {
                        h.isTrue(q(u), 'Invalid event name: ' + u + '. ' + 'It must be between 1 and ' + n + ' characters, ' + 'and must be contain only alphanumerics, _, - or spaces, ' + 'starting with alphanumeric or _.');
                        var x = {
                            ae: 1,
                            ev: u,
                            vts: v,
                            canvas: j.isCanvasEnvironment() ? 1 : 0
                        };
                        if (w) x.cd = w;
                        i.impression({
                            api_key: t,
                            payload: ES('JSON', 'stringify', false, x)
                        });
                    }

                    function q(t) {
                        if (t === null || t.length === 0 || t.length > n || !new RegExp(o).test(t)) return false;
                        return true;
                    }

                    function r(t, u, v, w) {
                        var x = {};
                        x[m.CURRENCY] = v;
                        p(t, l.PURCHASED, u, babelHelpers['extends']({}, w, x));
                    }

                    function s(t) {
                        p(t, l.ACTIVATED_APP);
                    }
                    f.exports = {
                        activateApp: s,
                        logEvent: p,
                        logPurchase: r,
                        isValidEventName: q,
                        EventNames: k,
                        ParameterNames: m
                    };
                }, null);
                __d('legacy:fb.appevents', ['Assert', 'sdk.AppEvents', 'FB', 'sdk.feature', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    if (c.__markCompiled) c.__markCompiled();
                    j.provide('AppEvents', {
                        logEvent: function(m, n, o) {
                            h.isTrue(k('allow_non_canvas_app_events', false) || l.isCanvasEnvironment(), 'You can only use this function in Facebook Canvas environment');
                            h.isString(m, 'Invalid eventName');
                            h.maybeNumber(n, 'Invalid valueToSum');
                            h.maybeObject(o, 'Invalid params');
                            var p = l.getClientID();
                            h.isTrue(p !== null && p.length > 0, 'You need to call FB.init() with App ID first.');
                            i.logEvent(p, m, n, o);
                        },
                        logPurchase: function(m, n, o) {
                            h.isTrue(k('allow_non_canvas_app_events', false) || l.isCanvasEnvironment(), 'You can only use this function in Facebook Canvas environment');
                            h.isNumber(m, 'Invalid purchaseAmount');
                            h.isString(n, 'Invalid currency');
                            h.maybeObject(o, 'Invalid params');
                            var p = l.getClientID();
                            h.isTrue(p !== null && p.length > 0, 'You need to call FB.init() with App ID first.');
                            i.logPurchase(p, m, n, o);
                        },
                        activateApp: function() {
                            h.isTrue(k('allow_non_canvas_app_events', false) || l.isCanvasEnvironment(), 'You can only use this function in Facebook Canvas environment');
                            var m = l.getClientID();
                            h.isTrue(m !== null && m.length > 0, 'You need to call FB.init() with App ID first.');
                            i.activateApp(m);
                        },
                        EventNames: i.EventNames,
                        ParameterNames: i.ParameterNames
                    });
                }, 3);
                __d('resolveURI', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i) {
                        if (!i) return window.location.href;
                        i = i.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
                        var j = document.createElement('div');
                        j.innerHTML = '<a href="' + i + '"></a>';
                        return j.firstChild.href;
                    }
                    f.exports = h;
                }, null);
                __d('sdk.Canvas.Environment', ['sdk.RPC'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(l) {
                        h.remote.getPageInfo(function(m) {
                            l(m.result);
                        });
                    }

                    function j(l, m) {
                        h.remote.scrollTo({
                            x: l || 0,
                            y: m || 0
                        });
                    }
                    h.stub('getPageInfo');
                    h.stub('scrollTo');
                    var k = {
                        getPageInfo: i,
                        scrollTo: j
                    };
                    f.exports = k;
                }, null);
                __d('sdk.DialogUtils', ['sdk.Content', 'sdk.DOM', 'DOMEventListener', 'sdk.UA', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var m = {
                        isOrientationPotrait: function() {
                            return window.innerWidth < window.innerHeight;
                        },
                        addDoubleClickAction: function(n, o, p) {
                            var q = null;
                            return j.add(n, 'click', function() {
                                if (q !== null) {
                                    clearTimeout(q);
                                    q = null;
                                    o();
                                }
                                q = setTimeout(function() {
                                    q = null;
                                }, p);
                            });
                        },
                        addIdleDesktopAction: function(n, o, p) {
                            var q = void 0,
                                event = void 0,
                                r = function() {
                                    q = setTimeout(o, p);
                                };
                            r();
                            return j.add(n, 'mouseenter', function() {
                                clearTimeout(q);
                                if (!event) event = j.add(n, 'mouseleave', function() {
                                    r();
                                });
                            });
                        },
                        addMobileOrientationChangeAction: function(n) {
                            if (!k.mobile()) return null;
                            var event = 'onorientationchange' in window ? 'orientationchange' : 'resize',
                                o = function(p) {
                                    return setTimeout(function(q) {
                                        return n(q);
                                    }, 50);
                                };
                            return j.add(window, event, o);
                        },
                        applyScreenDimensions: function(n) {
                            if (n == null) return;
                            var o = i.getViewportInfo();
                            n.style.minHeight = o.height || o.width ? o.height + 'px' : '';
                            n.style.top = o.scrollTop ? o.scrollTop + 'px' : '';
                        },
                        setDialogPositionToCenter: function(n, o, p) {
                            var q = function(aa) {
                                    return typeof aa === 'number' ? aa : parseInt(aa, 10);
                                },
                                r = i.getViewportInfo(),
                                s = q(n.offsetWidth),
                                t = q(n.offsetHeight),
                                u = r.scrollLeft + (r.width - s) / 2,
                                v = (r.height - t) / 2.5;
                            if (u < v) v = u;
                            var w = r.height - t - v,
                                x = (r.height - t) / 2;
                            if (p) x = p.scrollTop - p.offsetTop + (p.clientHeight - t) / 2;
                            if (x < v) {
                                x = v;
                            } else if (x > w) x = w;
                            x += r.scrollTop;
                            if (k.mobile()) {
                                var y = 100;
                                if (o) {
                                    y += (r.height - t) / 2;
                                    i.addCss(document.body, 'fb_reposition');
                                } else {
                                    i.addCss(document.body, 'fb_hidden');
                                    if (l('dialog_resize_refactor', false)) document.body.style.width = 'auto';
                                    x = 10000;
                                }
                                var z = i.getByClass('fb_dialog_padding', n);
                                if (z.length) z[0].style.height = y + 'px';
                            }
                            n.style.left = (u > 0 ? u : 0) + 'px';
                            n.style.top = (x > 0 ? x : 0) + 'px';
                        },
                        setDialogPositionToTop: function(n, o, p) {
                            this.setDialogPositionToCenter(n, o, p);
                            var q = i.getViewportInfo(),
                                r = q.scrollTop + (q.height - n.offsetHeight) * .05;
                            i.setStyle(n, 'top', r + 'px');
                        },
                        setupNewDarkOverlay: function() {
                            var n = document.createElement('div');
                            n.setAttribute('id', 'fb_dialog_ipad_overlay');
                            this.applyScreenDimensions(n);
                            return n;
                        },
                        setupNewDialog: function(n) {
                            n = n || {};
                            var o = document.createElement('div');
                            if (n.closeIcon && n.onClose) {
                                var p = document.createElement('a');
                                p.className = 'fb_dialog_close_icon';
                                j.add(p, 'click', n.onClose);
                                o.appendChild(p);
                            }
                            var q = 'fb_dialog';
                            q += ' ' + (n.classes || '');
                            if (k.ie()) {
                                q += ' fb_dialog_legacy';
                                ES(['vert_left', 'vert_right', 'horiz_top', 'horiz_bottom', 'top_left', 'top_right', 'bottom_left', 'bottom_right'], 'forEach', true, function(u) {
                                    var v = document.createElement('span');
                                    v.className = 'fb_dialog_' + u;
                                    o.appendChild(v);
                                });
                            } else q += k.mobile() ? ' fb_dialog_mobile' : ' fb_dialog_advanced';
                            o.className = q;
                            if (n.width) {
                                var r = parseInt(n.width, 10);
                                if (!isNaN(r)) o.style.width = r + 'px';
                            }
                            var s = document.createElement('div');
                            if (n.content) h.append(n.content, s);
                            s.className = 'fb_dialog_content';
                            o.appendChild(s);
                            if (k.mobile()) {
                                var t = document.createElement('div');
                                t.className = 'fb_dialog_padding';
                                o.appendChild(t);
                            }
                            return {
                                dialogElement: o,
                                contentRoot: s
                            };
                        },
                        onDialogHideCleanup: function(n) {
                            var o = document.body;
                            if (n) {
                                i.removeCss(o, 'fb_reposition');
                            } else i.removeCss(o, 'fb_hidden');
                        }
                    };
                    f.exports = m;
                }, null);
                __d('sdk.fbt', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {
                        _: function(i) {
                            return typeof i === 'string' ? i : i[0];
                        }
                    };
                    f.exports = h;
                }, null);
                __d('sdk.Dialog', ['sdk.Canvas.Environment', 'sdk.Content', 'sdk.DialogUtils', 'sdk.DOM', 'DOMEventListener', 'ObservableMixin', 'sdk.Runtime', 'Type', 'sdk.UA', 'sdk.fbt', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                    if (c.__markCompiled) c.__markCompiled();
                    var s = 30,
                        t = 590,
                        u = 500,
                        v = 240,
                        w = 575;

                    function x() {
                        if (r('dialog_resize_refactor', false)) {
                            var aa = k.getViewportInfo();
                            if (aa.height && aa.width) return {
                                width: Math.min(aa.width, u),
                                height: Math.min(aa.height, t)
                            };
                        }
                        return null;
                    }
                    var y = o.extend({
                            constructor: function aa(ba, ca) {
                                this.parent();
                                this.id = ba;
                                this.display = ca;
                                this._e2e = {};
                                if (!z._dialogs) {
                                    z._dialogs = {};
                                    z._addOrientationHandler();
                                }
                                z._dialogs[ba] = this;
                                this.trackEvent('init');
                            },
                            trackEvent: function(aa, ba) {
                                if (this._e2e[aa]) return this;
                                this._e2e[aa] = ba || ES('Date', 'now', false);
                                if (aa == 'close') this.inform('e2e:end', this._e2e);
                                return this;
                            },
                            trackEvents: function(aa) {
                                if (typeof aa === 'string') aa = ES('JSON', 'parse', false, aa);
                                for (var ba in aa)
                                    if (aa.hasOwnProperty(ba)) this.trackEvent(ba, aa[ba]);
                                return this;
                            }
                        }, m),
                        z = {
                            newInstance: function(aa, ba) {
                                return new y(aa, ba);
                            },
                            _dialogs: null,
                            _lastYOffset: 0,
                            _overlayListeners: [],
                            _loaderEl: null,
                            _overlayEl: null,
                            _stack: [],
                            _active: null,
                            _forceTabletStyle: null,
                            _closeOnOverlayTap: null,
                            _positionDialogAtTopWhenPortrait: null,
                            get: function(aa) {
                                return z._dialogs[aa];
                            },
                            _findRoot: function(aa) {
                                while (aa) {
                                    if (k.containsCss(aa, 'fb_dialog')) return aa;
                                    aa = aa.parentNode;
                                }
                            },
                            _createWWWLoader: function(aa) {
                                aa = aa ? aa : 460;
                                return z.create({
                                    content: '<div class="dialog_title">' + '  <a id="fb_dialog_loader_close">' + '    <div class="fb_dialog_close_icon"></div>' + '  </a>' + '  <span>Facebook</span>' + '  <div style="clear:both;"></div>' + '</div>' + '<div class="dialog_content"></div>' + '<div class="dialog_footer"></div>',
                                    width: aa
                                });
                            },
                            _createMobileLoader: function() {
                                var aa;
                                if (p.nativeApp()) {
                                    aa = '<div class="dialog_header"></div>';
                                } else if (z.isTabletStyle()) {
                                    aa = '<div class="overlayLoader">' + '<div id="fb_dialog_loader_spinner"></div>' + '<a id="fb_dialog_loader_close" href="#">' + q._("Cancel") + '</a>' + '</div>';
                                } else aa = '<div class="dialog_header">' + '<table>' + '  <tbody>' + '    <tr>' + '      <td class="header_left">' + '        <label class="touchable_button">' + '          <input type="submit" value="' + q._("Cancel") + '"' + '            id="fb_dialog_loader_close"/>' + '        </label>' + '      </td>' + '      <td class="header_center">' + '        <div>' + '         ' + q._("Loading...") + '        </div>' + '      </td>' + '      <td class="header_right">' + '      </td>' + '    </tr>' + '  </tbody>' + '</table>' + '</div>';
                                return z.create({
                                    classes: 'loading' + (z.isTabletStyle() ? ' centered' : ''),
                                    content: aa
                                });
                            },
                            _setDialogOverlayStyle: function() {
                                j.applyScreenDimensions(z._overlayEl);
                            },
                            _showTabletOverlay: function(aa) {
                                if (!z.isTabletStyle()) return;
                                if (!z._overlayEl) {
                                    z._overlayEl = j.setupNewDarkOverlay();
                                    i.append(z._overlayEl, null);
                                }
                                if (z._closeOnOverlayTap) {
                                    var ba = j.addDoubleClickAction(z._overlayEl, ES(aa, 'bind', true, this), 5000);
                                    z._overlayListeners.push(ba);
                                }
                                z._overlayEl.className = '';
                            },
                            _hideTabletOverlay: function() {
                                if (z.isTabletStyle()) {
                                    z._overlayEl.className = 'hidden';
                                    ES(z._overlayListeners, 'forEach', true, function(aa) {
                                        return aa.remove();
                                    });
                                    z._overlayListeners = [];
                                }
                            },
                            showLoader: function(aa, ba) {
                                if (!aa) aa = function() {};
                                var ca = function() {
                                    z._hideLoader();
                                    j.onDialogHideCleanup(z.isTabletStyle());
                                    z._hideTabletOverlay();
                                    aa();
                                };
                                z._showTabletOverlay(ca);
                                if (!z._loaderEl) z._loaderEl = z._findRoot(p.mobile() ? z._createMobileLoader() : z._createWWWLoader(ba));
                                var da = document.getElementById('fb_dialog_loader_close');
                                if (da) {
                                    k.removeCss(da, 'fb_hidden');
                                    var ea = l.add(da, 'click', ca);
                                    z._overlayListeners.push(ea);
                                }
                                z._makeActive(z._loaderEl);
                            },
                            setCloseOnOverlayTap: function(aa) {
                                z._closeOnOverlayTap = !!aa;
                            },
                            setPositionDialogAtTopWhenPortrait: function(aa) {
                                z._positionDialogAtTopWhenPortrait = !!aa;
                            },
                            _hideLoader: function() {
                                if (z._loaderEl && z._loaderEl == z._active) z._loaderEl.style.top = '-10000px';
                            },
                            _makeActive: function(aa) {
                                z._setDialogSizes();
                                z._lowerActive();
                                z._active = aa;
                                if (n.isEnvironment(n.ENVIRONMENTS.CANVAS)) h.getPageInfo(function(ba) {
                                    z._centerActive(ba);
                                });
                                z._centerActive();
                            },
                            _lowerActive: function() {
                                if (!z._active) return;
                                z._active.style.top = '-10000px';
                                z._active = null;
                            },
                            _removeStacked: function(aa) {
                                z._stack = ES(z._stack, 'filter', true, function(ba) {
                                    return ba != aa;
                                });
                            },
                            _centerActive: function(aa) {
                                var ba = z._active;
                                if (!ba) return;
                                if (z._positionDialogAtTopWhenPortrait && j.isOrientationPotrait()) {
                                    j.setDialogPositionToTop(ba, z.isTabletStyle(), aa);
                                } else j.setDialogPositionToCenter(ba, z.isTabletStyle(), aa);
                            },
                            _setDialogSizes: function() {
                                var aa = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
                                if (!p.mobile()) return;
                                for (var ba in z._dialogs)
                                    if (z._dialogs.hasOwnProperty(ba)) {
                                        var ca = document.getElementById(ba);
                                        if (ca) {
                                            ca.style.width = z.getDefaultSize().width + 'px';
                                            if (!aa) ca.style.height = z.getDefaultSize().height + 'px';
                                        }
                                    }
                            },
                            getDefaultSize: function() {
                                if (p.mobile()) {
                                    var aa = x();
                                    if (aa) {
                                        if (k.getViewportInfo().width <= aa.width) aa.width = k.getViewportInfo().width - s;
                                        if (k.getViewportInfo().height <= aa.height) aa.height = k.getViewportInfo().height - s;
                                        return aa;
                                    }
                                    if (p.ipad()) return {
                                        width: u,
                                        height: t
                                    };
                                    if (p.android()) {
                                        return {
                                            width: screen.availWidth,
                                            height: screen.availHeight
                                        };
                                    } else {
                                        var ba = window.innerWidth,
                                            ca = window.innerHeight,
                                            da = ba / ca > 1.2;
                                        return {
                                            width: ba,
                                            height: Math.max(ca, da ? screen.width : screen.height)
                                        };
                                    }
                                }
                                return {
                                    width: w,
                                    height: v
                                };
                            },
                            _handleOrientationChange: function() {
                                var aa = r('dialog_resize_refactor', false) ? k.getViewportInfo().width : screen.availWidth;
                                z._availScreenWidth = aa;
                                if (z.isTabletStyle()) {
                                    z._setDialogSizes(true);
                                    z._centerActive();
                                    z._setDialogOverlayStyle();
                                } else {
                                    var ba = z.getDefaultSize().width;
                                    for (var ca in z._dialogs)
                                        if (z._dialogs.hasOwnProperty(ca)) {
                                            var da = document.getElementById(ca);
                                            if (da) da.style.width = ba + 'px';
                                        }
                                }
                            },
                            _addOrientationHandler: function() {
                                if (!p.mobile()) return null;
                                z._availScreenWidth = r('dialog_resize_refactor', false) ? k.getViewportInfo().width : screen.availWidth;
                                j.addMobileOrientationChangeAction(z._handleOrientationChange);
                            },
                            create: function(aa) {
                                var ba = j.setupNewDialog(aa);
                                i.append(ba.dialogElement);
                                if (aa.visible) z.show(ba.dialogElement);
                                if (typeof aa.styles === 'object') ES('Object', 'assign', false, ba.dialogElement.style, aa.styles);
                                return ba.contentRoot;
                            },
                            show: function(aa) {
                                var ba = z._findRoot(aa);
                                if (ba) {
                                    z._removeStacked(ba);
                                    z._hideLoader();
                                    z._makeActive(ba);
                                    z._stack.push(ba);
                                    if ('fbCallID' in aa) z.get(aa.fbCallID).inform('iframe_show').trackEvent('show');
                                }
                            },
                            hide: function(aa) {
                                var ba = z._findRoot(aa);
                                z._hideLoader();
                                if (ba == z._active) {
                                    z._lowerActive();
                                    j.onDialogHideCleanup(z.isTabletStyle());
                                    z._hideTabletOverlay();
                                    if ('fbCallID' in aa) z.get(aa.fbCallID).inform('iframe_hide').trackEvent('hide');
                                }
                            },
                            remove: function(aa) {
                                aa = z._findRoot(aa);
                                if (aa) {
                                    var ba = z._active == aa;
                                    z._removeStacked(aa);
                                    if (ba) {
                                        z._hideLoader();
                                        if (z._stack.length > 0) {
                                            z.show(z._stack.pop());
                                        } else {
                                            z._lowerActive();
                                            j.onDialogHideCleanup(z.isTabletStyle());
                                            z._hideTabletOverlay();
                                        }
                                    } else if (z._active === null && z._stack.length > 0) z.show(z._stack.pop());
                                    setTimeout(function() {
                                        aa.parentNode.removeChild(aa);
                                    }, 3000);
                                }
                            },
                            isActive: function(aa) {
                                var ba = z._findRoot(aa);
                                return ba && ba === z._active;
                            },
                            setForceTabletStyle: function(aa) {
                                z._forceTabletStyle = !!aa;
                            },
                            isTabletStyle: function() {
                                var aa;
                                if (!p.mobile()) return false;
                                if (z._forceTabletStyle) return true;
                                if (r('dialog_resize_refactor', false)) {
                                    var ba = x();
                                    aa = ba && (ba.height >= t || ba.width >= u);
                                } else aa = !!p.ipad();
                                return aa;
                            }
                        };
                    f.exports = z;
                }, null);
                __d('sdk.Frictionless', ['sdk.Auth', 'sdk.api', 'sdk.Event', 'sdk.Dialog'], function a(b, c, d, e, f, g, h, i, j, k) {
                    if (c.__markCompiled) c.__markCompiled();
                    var l = {
                        _allowedRecipients: {},
                        _useFrictionless: false,
                        _updateRecipients: function() {
                            l._allowedRecipients = {};
                            i('/me/apprequestformerrecipients', function(m) {
                                if (!m || m.error) return;
                                ES(m.data, 'forEach', true, function(n) {
                                    l._allowedRecipients[n.recipient_id] = true;
                                });
                            });
                        },
                        init: function() {
                            l._useFrictionless = true;
                            h.getLoginStatus(function(m) {
                                if (m.status == 'connected') l._updateRecipients();
                            });
                            j.subscribe('auth.login', function(m) {
                                if (m.authResponse) l._updateRecipients();
                            });
                        },
                        _processRequestResponse: function(m, n) {
                            return function(o) {
                                var p = o && o.updated_frictionless;
                                if (l._useFrictionless && p) l._updateRecipients();
                                if (o) {
                                    if (!n && o.frictionless) {
                                        k._hideLoader();
                                        k._restoreBodyPosition();
                                        k._hideIPadOverlay();
                                    }
                                    delete o.frictionless;
                                    delete o.updated_frictionless;
                                }
                                m && m(o);
                            };
                        },
                        isAllowed: function(m) {
                            if (!m) return false;
                            if (typeof m === 'number') return m in l._allowedRecipients;
                            if (typeof m === 'string') m = m.split(',');
                            m = ES(m, 'map', true, function(p) {
                                return ES(String(p), 'trim', true);
                            });
                            var n = true,
                                o = false;
                            ES(m, 'forEach', true, function(p) {
                                n = n && p in l._allowedRecipients;
                                o = true;
                            });
                            return n && o;
                        }
                    };
                    j.subscribe('init:post', function(m) {
                        if (m.frictionlessRequests) l.init();
                    });
                    f.exports = l;
                }, null);
                __d('sdk.Native', ['Log', 'sdk.UA'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    var j = 'fbNativeReady',
                        k = {
                            onready: function(l) {
                                if (!i.nativeApp()) {
                                    h.error('FB.Native.onready only works when the page is rendered ' + 'in a WebView of the native Facebook app. Test if this is the ' + 'case calling FB.UA.nativeApp()');
                                    return;
                                }
                                if (window.__fbNative && !this.nativeReady) ES('Object', 'assign', false, this, window.__fbNative);
                                if (this.nativeReady) {
                                    l();
                                } else {
                                    var m = function(n) {
                                        window.removeEventListener(j, m);
                                        this.onready(l);
                                    };
                                    window.addEventListener(j, m, false);
                                }
                            }
                        };
                    f.exports = k;
                }, null);
                __d('sdk.openMessenger', ['sdk.UA'], function a(b, c, d, e, f, g, h) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var i = 'https://itunes.apple.com/us/app/messenger/id454638411',
                        j = 'https://play.google.com/store/apps/details?id=com.facebook.orca',
                        k = 3000;

                    function l(m) {
                        var n = void 0,
                            o = void 0,
                            p = m.link,
                            q = m.app_id;
                        if (h.android()) {
                            n = 'intent://share/#Intent;' + 'package=com.facebook.orca;' + 'scheme=fb-messenger;' + 'S.android.intent.extra.TEXT=' + encodeURIComponent(p) + ';' + 'S.trigger=send_plugin;';
                            if (q) n += 'S.platform_app_id=' + encodeURIComponent(q) + ';';
                            n += 'end';
                            o = j;
                        } else {
                            n = 'fb-messenger://share?link=' + encodeURIComponent(p);
                            if (q) n += '&app_id=' + encodeURIComponent(q);
                            o = i;
                        }
                        setTimeout(function() {
                            window.location.href = o;
                        }, k);
                        window.location.href = n;
                    }
                    f.exports = l;
                }, null);
                __d('sdk.UIServer', ['sdk.Auth', 'sdk.Content', 'sdk.DOM', 'sdk.Dialog', 'sdk.Event', 'sdk.Frictionless', 'Log', 'sdk.Native', 'QueryString', 'sdk.RPC', 'sdk.Runtime', 'JSSDKConfig', 'sdk.UA', 'UrlMap', 'sdk.XD', 'createObjectFrom', 'sdk.feature', 'sdk.fbt', 'flattenObject', 'sdk.getContextType', 'guid', 'insertIframe', 'sdk.openMessenger', 'resolveURI'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea) {
                    if (c.__markCompiled) c.__markCompiled();
                    var fa = {
                            transform: function(la) {
                                if (la.params.display === 'touch' && ka.canIframe(la.params) && window.postMessage) {
                                    la.params.channel = ka._xdChannelHandler(la.id, 'parent');
                                    if (!t.nativeApp()) la.params.in_iframe = 1;
                                    return la;
                                } else return ka.genericTransform(la);
                            },
                            getXdRelation: function(la) {
                                var ma = la.display;
                                if (ma === 'touch' && window.postMessage && la.in_iframe) return 'parent';
                                return ka.getXdRelation(la);
                            }
                        },
                        ga = {
                            'stream.share': {
                                size: {
                                    width: 670,
                                    height: 340
                                },
                                url: 'sharer.php',
                                transform: function(la) {
                                    if (!la.params.u) la.params.u = window.location.toString();
                                    la.params.display = 'popup';
                                    return la;
                                }
                            },
                            apprequests: {
                                transform: function(la) {
                                    la = fa.transform(la);
                                    la.params.frictionless = m && m._useFrictionless;
                                    if (la.params.frictionless) {
                                        if (m.isAllowed(la.params.to)) {
                                            la.params.display = 'iframe';
                                            la.params.in_iframe = true;
                                            la.hideLoader = true;
                                        }
                                        la.cb = m._processRequestResponse(la.cb, la.hideLoader);
                                    }
                                    la.closeIcon = false;
                                    return la;
                                },
                                getXdRelation: fa.getXdRelation
                            },
                            'permissions.oauth': {
                                url: 'dialog/oauth',
                                size: {
                                    width: t.mobile() ? null : 475,
                                    height: t.mobile() ? null : 183
                                },
                                transform: function(la) {
                                    if (!r.getClientID()) {
                                        n.error('FB.login() called before FB.init().');
                                        return;
                                    }
                                    if (h.getAuthResponse() && !la.params.scope && !la.params.auth_type) {
                                        n.error('FB.login() called when user is already connected.');
                                        la.cb && la.cb({
                                            status: r.getLoginStatus(),
                                            authResponse: h.getAuthResponse()
                                        });
                                        return;
                                    }
                                    var ma = la.cb,
                                        na = la.id;
                                    delete la.cb;
                                    var oa = ES('Object', 'keys', false, ES('Object', 'assign', false, la.params.response_type ? w(la.params.response_type.split(',')) : {}, {
                                        token: true,
                                        signed_request: true
                                    })).join(',');
                                    if (la.params.display === 'async') {
                                        ES('Object', 'assign', false, la.params, {
                                            client_id: r.getClientID(),
                                            origin: aa(),
                                            response_type: oa,
                                            domain: location.hostname
                                        });
                                        la.cb = h.xdResponseWrapper(ma, h.getAuthResponse(), 'permissions.oauth');
                                    } else ES('Object', 'assign', false, la.params, {
                                        client_id: r.getClientID(),
                                        redirect_uri: ea(ka.xdHandler(ma, na, 'opener', h.getAuthResponse(), 'permissions.oauth')),
                                        origin: aa(),
                                        response_type: oa,
                                        domain: location.hostname
                                    });
                                    return la;
                                }
                            },
                            'auth.logout': {
                                url: 'logout.php',
                                transform: function(la) {
                                    if (!r.getClientID()) {
                                        n.error('FB.logout() called before calling FB.init().');
                                    } else if (!h.getAuthResponse()) {
                                        n.error('FB.logout() called without an access token.');
                                    } else {
                                        la.params.next = ka.xdHandler(la.cb, la.id, 'parent', h.getAuthResponse(), 'logout');
                                        return la;
                                    }
                                }
                            },
                            'login.status': {
                                url: 'dialog/oauth',
                                transform: function(la) {
                                    var ma = la.cb,
                                        na = la.id;
                                    delete la.cb;
                                    ES('Object', 'assign', false, la.params, {
                                        client_id: r.getClientID(),
                                        redirect_uri: ka.xdHandler(ma, na, 'parent', h.getAuthResponse(), 'login_status'),
                                        origin: aa(),
                                        response_type: 'token,signed_request,code',
                                        domain: location.hostname
                                    });
                                    return la;
                                }
                            },
                            pay: {
                                size: {
                                    width: 555,
                                    height: 120
                                },
                                connectDisplay: 'popup'
                            },
                            live_broadcast: {
                                transform: function(la) {
                                    if (la.params.phase === 'create') la.size = {
                                        width: 480,
                                        height: 280
                                    };
                                    if (la.params.phase === 'publish') la.size = {
                                        width: 772,
                                        height: 540
                                    };
                                    return la;
                                },
                                require_access_token: true
                            }
                        },
                        ha = {};

                    function ia(la, ma) {
                        ha[ma] = true;
                        return function(na) {
                            delete ha[ma];
                            la(na);
                        };
                    }

                    function ja(la) {
                        if (!x('should_force_single_dialog_instance', true)) return false;
                        var ma = la.method.toLowerCase();
                        if (ma === 'pay' && la.display === 'async') return true;
                        return false;
                    }
                    var ka = {
                        Methods: ga,
                        _loadedNodes: {},
                        _defaultCb: {},
                        _resultToken: '"xxRESULTTOKENxx"',
                        genericTransform: function(la) {
                            if (la.params.display == 'dialog' || la.params.display == 'iframe') ES('Object', 'assign', false, la.params, {
                                display: 'iframe',
                                channel: ka._xdChannelHandler(la.id, 'parent.parent')
                            }, true);
                            return la;
                        },
                        checkOauthDisplay: function(la) {
                            var ma = la.scope || la.perms || r.getScope();
                            if (!ma) return la.display;
                            var na = ma.split(/\s|,/g);
                            for (var oa = 0; oa < na.length; oa++)
                                if (!s.initSitevars.iframePermissions[ES(na[oa], 'trim', true)]) return 'popup';
                            return la.display;
                        },
                        prepareCall: function(la, ma) {
                            var na = la.method.toLowerCase(),
                                oa = ka.Methods.hasOwnProperty(na) ? ES('Object', 'assign', false, {}, ka.Methods[na]) : {},
                                pa = ba(),
                                qa = r.getSecure() || na !== 'auth.status' && na != 'login.status';
                            ES('Object', 'assign', false, la, {
                                app_id: r.getClientID(),
                                locale: r.getLocale(),
                                sdk: 'joey',
                                access_token: qa && r.getAccessToken() || undefined
                            });
                            if (na === 'share' || na === 'share_open_graph') {
                                la.mobile_iframe = t.mobile() && (la.mobile_iframe || la.iframe_test);
                                if (la.mobile_iframe) oa = ES('Object', 'assign', false, {}, fa);
                            }
                            la.display = ka.getDisplayMode(oa, la);
                            if (!oa.url) oa.url = 'dialog/' + na;
                            if ((oa.url == 'dialog/oauth' || oa.url == 'dialog/permissions.request') && (la.display == 'iframe' || la.display == 'touch' && la.in_iframe)) la.display = ka.checkOauthDisplay(la);
                            if (la.display == 'popup' && !oa.require_access_token) delete la.access_token;
                            if (r.getIsVersioned() && oa.url.substring(0, 7) === 'dialog/') oa.url = la.version + '/' + oa.url;
                            if (ja(la)) {
                                if (ha[na]) {
                                    var ra = 'Dialog "' + na + '" is trying to run more than once.';
                                    n.warn(ra);
                                    ma({
                                        error_code: -100,
                                        error_message: ra
                                    });
                                    return;
                                }
                                ma = ia(ma, na);
                            }
                            var sa = {
                                    cb: ma,
                                    id: pa,
                                    size: oa.size || ka.getDefaultSize(),
                                    url: u.resolve(la.display == 'touch' ? 'm' : 'www', qa) + '/' + oa.url,
                                    params: la,
                                    name: na,
                                    dialog: k.newInstance(pa, la.display)
                                },
                                ta = oa.transform ? oa.transform : ka.genericTransform;
                            if (ta) {
                                sa = ta(sa);
                                if (!sa) return;
                            }
                            if (la.display === 'touch' && la.in_iframe) sa.params.parent_height = window.innerHeight;
                            var ua = oa.getXdRelation || ka.getXdRelation,
                                va = ua(sa.params);
                            if (!(sa.id in ka._defaultCb) && !('next' in sa.params) && !('redirect_uri' in sa.params)) sa.params.next = ka._xdResult(sa.cb, sa.id, va, true);
                            if (va === 'parent') ES('Object', 'assign', false, sa.params, {
                                channel_url: ka._xdChannelHandler(pa, 'parent.parent')
                            }, true);
                            sa = ka.prepareParams(sa);
                            return sa;
                        },
                        prepareParams: function(la) {
                            if (la.params.display !== 'async') delete la.params.method;
                            la.params = z(la.params);
                            var ma = p.encode(la.params);
                            if (!t.nativeApp() && ka.urlTooLongForIE(la.url + '?' + ma)) {
                                la.post = true;
                            } else if (ma) la.url += '?' + ma;
                            return la;
                        },
                        urlTooLongForIE: function(la) {
                            return t.ie() && t.ie() <= 8 && la.length > 2048;
                        },
                        getDisplayMode: function(la, ma) {
                            if (ma.display === 'hidden' || ma.display === 'none' || ma.display === 'native') return ma.display;
                            var na = r.isEnvironment(r.ENVIRONMENTS.CANVAS) || r.isEnvironment(r.ENVIRONMENTS.PAGETAB);
                            if (na && !ma.display) return 'async';
                            if (t.mobile() || ma.display === 'touch') return 'touch';
                            if (ma.display == 'iframe' || ma.display == 'dialog')
                                if (!ka.canIframe(ma)) {
                                    n.error('"dialog" mode can only be used when the user is connected.');
                                    return 'popup';
                                }
                            if (la.connectDisplay && !na) return la.connectDisplay;
                            return ma.display || (ka.canIframe(ma) ? 'dialog' : 'popup');
                        },
                        canIframe: function(la) {
                            if (r.getAccessToken()) return true;
                            if (t.mobile() && r.getLoggedIntoFacebook()) return !!la.mobile_iframe;
                            return false;
                        },
                        getXdRelation: function(la) {
                            var ma = la.display;
                            if (ma === 'popup' || ma === 'touch') return 'opener';
                            if (ma === 'dialog' || ma === 'iframe' || ma === 'hidden' || ma === 'none') return 'parent';
                            if (ma === 'async') return 'parent.frames[' + window.name + ']';
                        },
                        popup: function(la) {
                            var ma = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
                                na = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
                                oa = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.documentElement.clientWidth,
                                pa = typeof window.outerHeight != 'undefined' ? window.outerHeight : document.documentElement.clientHeight - 22,
                                qa = t.mobile() ? null : la.size.width,
                                ra = t.mobile() ? null : la.size.height,
                                sa = ma < 0 ? window.screen.width + ma : ma,
                                ta = parseInt(sa + (oa - qa) / 2, 10),
                                ua = parseInt(na + (pa - ra) / 2.5, 10),
                                va = [];
                            if (qa !== null) va.push('width=' + qa);
                            if (ra !== null) va.push('height=' + ra);
                            va.push('left=' + ta);
                            va.push('top=' + ua);
                            va.push('scrollbars=1');
                            if (la.name == 'permissions.request' || la.name == 'permissions.oauth') va.push('location=1,toolbar=0');
                            va = va.join(',');
                            var wa;
                            if (la.post) {
                                wa = window.open('about:blank', la.id, va);
                                if (wa) {
                                    ka.setLoadedNode(la, wa, 'popup');
                                    i.submitToTarget({
                                        url: la.url,
                                        target: la.id,
                                        params: la.params
                                    });
                                }
                            } else {
                                wa = window.open(la.url, la.id, va);
                                if (wa) ka.setLoadedNode(la, wa, 'popup');
                            }
                            if (!wa) return;
                            if (la.id in ka._defaultCb) ka._popupMonitor();
                        },
                        setLoadedNode: function(la, ma, na) {
                            if (na === 'iframe') ma.fbCallID = la.id;
                            ma = {
                                node: ma,
                                type: na,
                                fbCallID: la.id
                            };
                            ka._loadedNodes[la.id] = ma;
                        },
                        getLoadedNode: function(la) {
                            var ma = typeof la == 'object' ? la.id : la,
                                na = ka._loadedNodes[ma];
                            return na ? na.node : null;
                        },
                        hidden: function(la) {
                            la.className = 'FB_UI_Hidden';
                            la.root = i.appendHidden('');
                            ka._insertIframe(la);
                        },
                        iframe: function(la) {
                            la.className = 'FB_UI_Dialog';
                            if (la.params.mobile_iframe) {
                                k.setForceTabletStyle(true);
                                k.setCloseOnOverlayTap(true);
                                k.setPositionDialogAtTopWhenPortrait(true);
                            }
                            var ma = function() {
                                    var oa = ES('JSON', 'stringify', false, {
                                        error_code: 4201,
                                        error_message: y._("User canceled the Dialog flow")
                                    });
                                    ka._triggerDefault(la.id, oa);
                                },
                                na = {
                                    onClose: ma,
                                    closeIcon: la.closeIcon === undefined ? true : la.closeIcon,
                                    classes: k.isTabletStyle() ? 'centered' : ''
                                };
                            if (la.params.mobile_iframe) na.styles = {
                                'border-radius': '8px'
                            };
                            la.root = k.create(na);
                            if (!la.hideLoader) k.showLoader(ma, la.size.width);
                            j.addCss(la.root, 'fb_dialog_iframe');
                            ka._insertIframe(la);
                        },
                        touch: function(la) {
                            if (la.params && la.params.in_iframe) {
                                if (la.ui_created) {
                                    k.showLoader(function() {
                                        ka._triggerDefault(la.id, null);
                                    }, 0);
                                } else ka.iframe(la);
                            } else if (t.nativeApp() && !la.ui_created) {
                                la.frame = la.id;
                                o.onready(function() {
                                    ka.setLoadedNode(la, o.open(la.url + '#cb=' + la.frameName), 'native');
                                });
                                ka._popupMonitor();
                            } else if (!la.ui_created) ka.popup(la);
                        },
                        async: function(la) {
                            la.params.redirect_uri = location.protocol + '//' + location.host + location.pathname;
                            delete la.params.access_token;
                            q.remote.showDialog(la.params, function(ma) {
                                var na = ma.result;
                                if (na && na.e2e) {
                                    var oa = k.get(la.id);
                                    oa.trackEvents(na.e2e);
                                    oa.trackEvent('close');
                                    delete na.e2e;
                                }
                                la.cb(na);
                            });
                        },
                        native: function(la) {
                            da(la.params);
                        },
                        getDefaultSize: function() {
                            return k.getDefaultSize();
                        },
                        _insertIframe: function(la) {
                            ka._loadedNodes[la.id] = false;
                            var ma = function(na) {
                                if (la.id in ka._loadedNodes) ka.setLoadedNode(la, na, 'iframe');
                            };
                            if (la.post) {
                                ca({
                                    url: 'about:blank',
                                    root: la.root,
                                    className: la.className,
                                    width: la.size.width,
                                    height: la.size.height,
                                    id: la.id,
                                    onInsert: ma,
                                    onload: function(na) {
                                        i.submitToTarget({
                                            url: la.url,
                                            target: na.name,
                                            params: la.params
                                        });
                                    }
                                });
                            } else ca({
                                url: la.url,
                                root: la.root,
                                className: la.className,
                                width: la.size.width,
                                height: la.size.height,
                                id: la.id,
                                name: la.frameName,
                                onInsert: ma
                            });
                        },
                        _handleResizeMessage: function(la, ma) {
                            var na = ka.getLoadedNode(la);
                            if (!na) return;
                            if (ma.height) na.style.height = ma.height + 'px';
                            if (ma.width) na.style.width = ma.width + 'px';
                            v.inform('resize.ack', ma || {}, 'parent.frames[' + na.name + ']');
                            if (!k.isActive(na)) {
                                k.show(na);
                            } else k._centerActive();
                        },
                        _triggerDefault: function(la, ma) {
                            var na = {
                                frame: la
                            };
                            if (ma) na.result = ma;
                            ka._xdRecv(na, ka._defaultCb[la] || function() {});
                        },
                        _popupMonitor: function() {
                            var la;
                            for (var ma in ka._loadedNodes)
                                if (ka._loadedNodes.hasOwnProperty(ma) && ma in ka._defaultCb) {
                                    var na = ka._loadedNodes[ma];
                                    if (na.type != 'popup' && na.type != 'native') continue;
                                    var oa = na.node;
                                    try {
                                        if (oa.closed) {
                                            ka._triggerDefault(ma, null);
                                        } else la = true;
                                    } catch (pa) {}
                                }
                            if (la && !ka._popupInterval) {
                                ka._popupInterval = setInterval(ka._popupMonitor, 100);
                            } else if (!la && ka._popupInterval) {
                                clearInterval(ka._popupInterval);
                                ka._popupInterval = null;
                            }
                        },
                        _xdChannelHandler: function(la, ma) {
                            return v.handler(function(na) {
                                var oa = ka.getLoadedNode(la);
                                if (!oa) return;
                                if (na.type == 'resize') {
                                    ka._handleResizeMessage(la, na);
                                } else if (na.type == 'hide') {
                                    k.hide(oa);
                                } else if (na.type == 'rendered') {
                                    var pa = k._findRoot(oa);
                                    k.show(pa);
                                } else if (na.type == 'fireevent') l.fire(na.event);
                            }, ma, true, null);
                        },
                        _xdNextHandler: function(la, ma, na, oa) {
                            if (oa) ka._defaultCb[ma] = la;
                            return v.handler(function(pa) {
                                ka._xdRecv(pa, la);
                            }, na) + '&frame=' + ma;
                        },
                        _xdRecv: function(la, ma) {
                            var na = ka.getLoadedNode(la.frame);
                            if (na)
                                if (na.close) {
                                    try {
                                        na.close();
                                        if (/iPhone.*Version\/(5|6)/.test(navigator.userAgent) && RegExp.$1 !== '5') window.focus();
                                        ka._popupCount--;
                                    } catch (oa) {}
                                } else if (j.containsCss(na, 'FB_UI_Hidden')) {
                                setTimeout(function() {
                                    na.parentNode.parentNode.removeChild(na.parentNode);
                                }, 3000);
                            } else if (j.containsCss(na, 'FB_UI_Dialog')) k.remove(na);
                            delete ka._loadedNodes[la.frame];
                            delete ka._defaultCb[la.frame];
                            if (la.e2e) {
                                var pa = k.get(la.frame);
                                pa.trackEvents(la.e2e);
                                pa.trackEvent('close');
                                delete la.e2e;
                            }
                            ma(la);
                        },
                        _xdResult: function(la, ma, na, oa) {
                            return (ka._xdNextHandler(function(pa) {
                                la && la(pa.result && pa.result != ka._resultToken && ES('JSON', 'parse', false, pa.result));
                            }, ma, na, oa) + '&result=' + encodeURIComponent(ka._resultToken));
                        },
                        xdHandler: function(la, ma, na, oa, pa) {
                            return ka._xdNextHandler(h.xdResponseWrapper(la, oa, pa), ma, na, true);
                        }
                    };
                    q.stub('showDialog');
                    f.exports = ka;
                }, null);
                __d('sdk.ui', ['Assert', 'sdk.Impressions', 'Log', 'sdk.PlatformVersioning', 'sdk.Runtime', 'sdk.UIServer', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    if (c.__markCompiled) c.__markCompiled();

                    function o(p, q) {
                        h.isObject(p);
                        h.maybeFunction(q);
                        if (l.getIsVersioned()) {
                            k.assertVersionIsSet();
                            if (p.version) {
                                k.assertValidVersion(p.version);
                            } else p.version = l.getVersion();
                        }
                        p = ES('Object', 'assign', false, {}, p);
                        if (!p.method) {
                            j.error('"method" is a required parameter for FB.ui().');
                            return null;
                        }
                        if (p.method == 'pay.prompt') p.method = 'pay';
                        var r = p.method;
                        if (p.redirect_uri) {
                            j.warn('When using FB.ui, you should not specify a redirect_uri.');
                            delete p.redirect_uri;
                        }
                        if ((r == 'permissions.request' || r == 'permissions.oauth') && (p.display == 'iframe' || p.display == 'dialog')) p.display = m.checkOauthDisplay(p);
                        if (p.display === 'native' && r !== 'send') {
                            j.error('display type "native" not supported');
                            return null;
                        }
                        var s = n('e2e_tracking', true);
                        if (s) p.e2e = {};
                        var t = m.prepareCall(p, q || function() {});
                        if (!t) return null;
                        var u = t.params.display;
                        if (u === 'dialog') {
                            u = 'iframe';
                        } else if (u === 'none') u = 'hidden';
                        var v = m[u];
                        if (!v) {
                            j.error('"display" must be one of "popup", ' + '"dialog", "iframe", "touch", "async", "hidden", or "none"');
                            return null;
                        }
                        if (s) t.dialog.subscribe('e2e:end', function(w) {
                            w.method = r;
                            w.display = u;
                            j.debug('e2e: %s', ES('JSON', 'stringify', false, w));
                            i.log(114, {
                                payload: w
                            });
                        });
                        v(t);
                        return t.dialog;
                    }
                    f.exports = o;
                }, null);
                __d('legacy:fb.auth', ['sdk.Auth', 'sdk.Cookie', 'sdk.Event', 'FB', 'Log', 'sdk.Runtime', 'sdk.SignedRequest', 'sdk.ui'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    if (c.__markCompiled) c.__markCompiled();
                    k.provide('', {
                        getLoginStatus: function() {
                            debugger
                            return h.getLoginStatus.apply(h, arguments);
                        },
                        getAuthResponse: function() {
                            return h.getAuthResponse();
                        },
                        getAccessToken: function() {
                            return m.getAccessToken() || null;
                        },
                        getUserID: function() {
                            return m.getUserID() || m.getCookieUserID();
                        },
                        login: function(p, q) {
                            if (q && q.perms && !q.scope) {
                                q.scope = q.perms;
                                delete q.perms;
                                l.warn('OAuth2 specification states that \'perms\' ' + 'should now be called \'scope\'.  Please update.');
                            }
                            var r = m.isEnvironment(m.ENVIRONMENTS.CANVAS) || m.isEnvironment(m.ENVIRONMENTS.PAGETAB);
                            o(babelHelpers['extends']({
                                method: 'permissions.oauth',
                                display: r ? 'async' : 'popup',
                                domain: location.hostname
                            }, q || {}), p);
                        },
                        logout: function(p) {
                            o({
                                method: 'auth.logout',
                                display: 'hidden'
                            }, p);
                        }
                    });
                    h.subscribe('logout', ES(j.fire, 'bind', true, j, 'auth.logout'));
                    h.subscribe('login', ES(j.fire, 'bind', true, j, 'auth.login'));
                    h.subscribe('authresponse.change', ES(j.fire, 'bind', true, j, 'auth.authResponseChange'));
                    h.subscribe('status.change', ES(j.fire, 'bind', true, j, 'auth.statusChange'));
                    j.subscribe('init:post', function(p) {
                        if (p.status) h.getLoginStatus();
                        if (m.getClientID())
                            if (p.authResponse) {
                                h.setAuthResponse(p.authResponse, 'connected');
                            } else if (m.getUseCookie()) {
                            var q = i.loadSignedRequest(),
                                r;
                            if (q) {
                                try {
                                    r = n.parse(q);
                                } catch (s) {
                                    i.clearSignedRequestCookie();
                                }
                                if (r && r.user_id) m.setCookieUserID(r.user_id);
                            }
                            i.loadMeta();
                        }
                    });
                }, 3);
                __d('sdk.Canvas.IframeHandling', ['DOMWrapper', 'sdk.RPC'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    var j = null,
                        k;

                    function l() {
                        var p = h.getWindow().document,
                            q = p.body,
                            r = p.documentElement,
                            s = Math.max(q.offsetTop, 0),
                            t = Math.max(r.offsetTop, 0),
                            u = q.scrollHeight + s,
                            v = q.offsetHeight + s,
                            w = r.scrollHeight + t,
                            x = r.offsetHeight + t;
                        return Math.max(u, v, w, x);
                    }

                    function m(p) {
                        if (typeof p != 'object') p = {};
                        var q = 0,
                            r = 0;
                        if (!p.height) {
                            p.height = l();
                            q = 16;
                            r = 4;
                        }
                        if (!p.frame) p.frame = window.name || 'iframe_canvas';
                        if (k) {
                            var s = k.height,
                                t = p.height - s;
                            if (t <= r && t >= -q) return false;
                        }
                        k = p;
                        i.remote.setSize(p);
                        return true;
                    }

                    function n(p, q) {
                        if (q === undefined && typeof p === 'number') {
                            q = p;
                            p = true;
                        }
                        if (p || p === undefined) {
                            if (j === null) j = setInterval(function() {
                                m();
                            }, q || 100);
                            m();
                        } else if (j !== null) {
                            clearInterval(j);
                            j = null;
                        }
                    }
                    i.stub('setSize');
                    var o = {
                        setSize: m,
                        setAutoGrow: n
                    };
                    f.exports = o;
                }, null);
                __d('sdk.Canvas.Navigation', ['sdk.RPC'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(k) {
                        h.local.navigate = function(l) {
                            k({
                                path: l
                            });
                        };
                        h.remote.setNavigationEnabled(true);
                    }
                    h.stub('setNavigationEnabled');
                    var j = {
                        setUrlHandler: i
                    };
                    f.exports = j;
                }, null);
                __d('sdk.Canvas.Plugin', ['Log', 'sdk.RPC', 'sdk.Runtime', 'sdk.UA', 'sdk.api'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    if (c.__markCompiled) c.__markCompiled();
                    var m = 'CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000',
                        n = 'CLSID:444785F1-DE89-4295-863A-D46C3A781394',
                        o = null,
                        p = k.osx() && k.osx.getVersionParts(),
                        q = !(p && p[0] > 10 && p[1] > 10 && (k.chrome() >= 31 || k.webkit() >= 537.71 || k.firefox() >= 25));

                    function r(ba) {
                        ba._hideunity_savedstyle = {};
                        ba._hideunity_savedstyle.left = ba.style.left;
                        ba._hideunity_savedstyle.position = ba.style.position;
                        ba._hideunity_savedstyle.width = ba.style.width;
                        ba._hideunity_savedstyle.height = ba.style.height;
                        ba.style.left = '-10000px';
                        ba.style.position = 'absolute';
                        ba.style.width = '1px';
                        ba.style.height = '1px';
                    }

                    function s(ba) {
                        if (ba._hideunity_savedstyle) {
                            ba.style.left = ba._hideunity_savedstyle.left;
                            ba.style.position = ba._hideunity_savedstyle.position;
                            ba.style.width = ba._hideunity_savedstyle.width;
                            ba.style.height = ba._hideunity_savedstyle.height;
                        }
                    }

                    function t(ba) {
                        ba._old_visibility = ba.style.visibility;
                        ba.style.visibility = 'hidden';
                    }

                    function u(ba) {
                        ba.style.visibility = ba._old_visibility || '';
                        delete ba._old_visibility;
                    }

                    function v(ba) {
                        var ca = ba.type ? ba.type.toLowerCase() : null,
                            da = ca === 'application/x-shockwave-flash' || ba.classid && ba.classid.toUpperCase() == m;
                        if (!da) return false;
                        var ea = /opaque|transparent/i;
                        if (ea.test(ba.getAttribute('wmode'))) return false;
                        for (var fa = 0; fa < ba.childNodes.length; fa++) {
                            var ga = ba.childNodes[fa];
                            if (/param/i.test(ga.nodeName) && /wmode/i.test(ga.name) && ea.test(ga.value)) return false;
                        }
                        return true;
                    }

                    function w(ba) {
                        var ca = ba.type ? ba.type.toLowerCase() : null;
                        return ca === 'application/vnd.unity' || ba.classid && ba.classid.toUpperCase() == n;
                    }

                    function x(ba) {
                        var ca = ES('Array', 'from', false, window.document.getElementsByTagName('object'));
                        ca = ca.concat(ES('Array', 'from', false, window.document.getElementsByTagName('embed')));
                        var da = false,
                            ea = false;
                        ES(ca, 'forEach', true, function(ga) {
                            var ha = v(ga),
                                ia = q && w(ga);
                            if (!ha && !ia) return;
                            da = da || ha;
                            ea = ea || ia;
                            var ja = function() {
                                if (ba.state === 'opened') {
                                    if (ha) {
                                        t(ga);
                                    } else r(ga);
                                } else if (ha) {
                                    u(ga);
                                } else s(ga);
                            };
                            if (o) {
                                h.info('Calling developer specified callback');
                                var ka = {
                                    state: ba.state,
                                    elem: ga
                                };
                                o(ka);
                                setTimeout(ja, 200);
                            } else ja();
                        });
                        if (Math.random() <= 1 / 1000) {
                            var fa = {
                                unity: ea,
                                flash: da
                            };
                            l(j.getClientID() + '/occludespopups', 'post', fa);
                        }
                    }
                    i.local.hidePluginObjects = function() {
                        h.info('hidePluginObjects called');
                        x({
                            state: 'opened'
                        });
                    };
                    i.local.showPluginObjects = function() {
                        h.info('showPluginObjects called');
                        x({
                            state: 'closed'
                        });
                    };
                    i.local.showFlashObjects = i.local.showPluginObjects;
                    i.local.hideFlashObjects = i.local.hidePluginObjects;

                    function y() {
                        t();
                        r();
                    }

                    function z() {
                        u();
                        s();
                    }
                    var aa = {
                        _setHidePluginCallback: function(ba) {
                            o = ba;
                        },
                        hidePluginElement: y,
                        showPluginElement: z
                    };
                    f.exports = aa;
                }, null);
                __d('sdk.Canvas.Tti', ['sdk.RPC', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();

                    function j(o, p) {
                        var q = {
                                appId: i.getClientID(),
                                time: ES('Date', 'now', false),
                                name: p
                            },
                            r = [q];
                        if (o) r.push(function(s) {
                            o(s.result);
                        });
                        h.remote.logTtiMessage.apply(null, r);
                    }

                    function k() {
                        j(null, 'StartIframeAppTtiTimer');
                    }

                    function l(o) {
                        j(o, 'StopIframeAppTtiTimer');
                    }

                    function m(o) {
                        j(o, 'RecordIframeAppTti');
                    }
                    h.stub('logTtiMessage');
                    var n = {
                        setDoneLoading: m,
                        startTimer: k,
                        stopTimer: l
                    };
                    f.exports = n;
                }, null);
                __d('legacy:fb.canvas', ['Assert', 'sdk.Canvas.Environment', 'sdk.Event', 'FB', 'sdk.Canvas.IframeHandling', 'sdk.Canvas.Navigation', 'sdk.Canvas.Plugin', 'sdk.RPC', 'sdk.Runtime', 'sdk.Canvas.Tti'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                    if (c.__markCompiled) c.__markCompiled();
                    k.provide('Canvas', {
                        setSize: function(r) {
                            h.maybeObject(r, 'Invalid argument');
                            return l.setSize.apply(null, arguments);
                        },
                        setAutoGrow: function() {
                            return l.setAutoGrow.apply(null, arguments);
                        },
                        getPageInfo: function(r) {
                            h.isFunction(r, 'Invalid argument');
                            return i.getPageInfo.apply(null, arguments);
                        },
                        scrollTo: function(r, s) {
                            h.maybeNumber(r, 'Invalid argument');
                            h.maybeNumber(s, 'Invalid argument');
                            return i.scrollTo.apply(null, arguments);
                        },
                        setDoneLoading: function(r) {
                            h.maybeFunction(r, 'Invalid argument');
                            return q.setDoneLoading.apply(null, arguments);
                        },
                        startTimer: function() {
                            return q.startTimer.apply(null, arguments);
                        },
                        stopTimer: function(r) {
                            h.maybeFunction(r, 'Invalid argument');
                            return q.stopTimer.apply(null, arguments);
                        },
                        getHash: function(r) {
                            h.isFunction(r, 'Invalid argument');
                            return m.getHash.apply(null, arguments);
                        },
                        setHash: function(r) {
                            h.isString(r, 'Invalid argument');
                            return m.setHash.apply(null, arguments);
                        },
                        setUrlHandler: function(r) {
                            h.isFunction(r, 'Invalid argument');
                            return m.setUrlHandler.apply(null, arguments);
                        }
                    });
                    o.local.fireEvent = ES(j.fire, 'bind', true, j);
                    j.subscribe('init:post', function(r) {
                        if (p.isEnvironment(p.ENVIRONMENTS.CANVAS)) {
                            h.isTrue(!r.hideFlashCallback || !r.hidePluginCallback, 'cannot specify deprecated hideFlashCallback and new hidePluginCallback');
                            n._setHidePluginCallback(r.hidePluginCallback || r.hideFlashCallback);
                        }
                    });
                }, 3);
                __d('sdk.Canvas.Prefetcher', ['JSSDKCanvasPrefetcherConfig', 'sdk.Runtime', 'sdk.api'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k = {
                            AUTOMATIC: 0,
                            MANUAL: 1
                        },
                        l = h.sampleRate,
                        m = h.blacklist,
                        n = k.AUTOMATIC,
                        o = [];

                    function p() {
                        var u = {
                            object: 'data',
                            link: 'href',
                            script: 'src'
                        };
                        if (n == k.AUTOMATIC) ES(ES('Object', 'keys', false, u), 'forEach', true, function(v) {
                            var w = u[v];
                            ES(ES('Array', 'from', false, document.getElementsByTagName(v)), 'forEach', true, function(x) {
                                if (x[w]) o.push(x[w]);
                            });
                        });
                        if (o.length === 0) return;
                        j(i.getClientID() + '/staticresources', 'post', {
                            urls: ES('JSON', 'stringify', false, o),
                            is_https: location.protocol === 'https:'
                        });
                        o = [];
                    }

                    function q() {
                        if (!i.isEnvironment(i.ENVIRONMENTS.CANVAS) || !i.getClientID() || !l) return;
                        if (Math.random() > 1 / l || m == '*' || ~ES(m, 'indexOf', true, i.getClientID())) return;
                        setTimeout(p, 30000);
                    }

                    function r(u) {
                        n = u;
                    }

                    function s(u) {
                        o.push(u);
                    }
                    var t = {
                        COLLECT_AUTOMATIC: k.AUTOMATIC,
                        COLLECT_MANUAL: k.MANUAL,
                        addStaticResource: s,
                        setCollectionMode: r,
                        _maybeSample: q
                    };
                    f.exports = t;
                }, null);
                __d('legacy:fb.canvas.prefetcher', ['FB', 'sdk.Canvas.Prefetcher', 'sdk.Event', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i, j, k) {
                    if (c.__markCompiled) c.__markCompiled();
                    h.provide('Canvas.Prefetcher', i);
                    j.subscribe('init:post', function(l) {
                        if (k.isEnvironment(k.ENVIRONMENTS.CANVAS)) i._maybeSample();
                    });
                }, 3);
                __d('legacy:fb.canvas.presence', ['sdk.RPC', 'sdk.Event'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    i.subscribe(i.SUBSCRIBE, j);
                    i.subscribe(i.UNSUBSCRIBE, k);
                    h.stub('useFriendsOnline');

                    function j(l, m) {
                        if (l != 'canvas.friendsOnlineUpdated') return;
                        if (m.length === 1) h.remote.useFriendsOnline(true);
                    }

                    function k(l, m) {
                        if (l != 'canvas.friendsOnlineUpdated') return;
                        if (m.length === 0) h.remote.useFriendsOnline(false);
                    }
                }, 3);
                __d('legacy:fb.canvas.syncrequests', ['sdk.RPC', 'sdk.Event'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    h.stub('initPendingSyncRequests');

                    function j(k, l) {
                        if (k != 'canvas.syncRequestUpdated') return;
                        h.remote.initPendingSyncRequests();
                        i.unsubscribe(i.SUBSCRIBE, j);
                    }
                    i.subscribe(i.SUBSCRIBE, j);
                }, 3);
                __d('legacy:fb.event', ['FB', 'sdk.Event', 'sdk.Runtime', 'sdk.Scribe', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    if (c.__markCompiled) c.__markCompiled();
                    var m = [],
                        n = null,
                        o = l('event_subscriptions_log', false);
                    h.provide('Event', {
                        subscribe: function(p, q) {
                            if (o) {
                                m.push(p);
                                if (!n) n = setTimeout(function() {
                                    k.log('jssdk_error', {
                                        appId: j.getClientID(),
                                        error: 'EVENT_SUBSCRIPTIONS_LOG',
                                        extra: {
                                            line: 0,
                                            name: 'EVENT_SUBSCRIPTIONS_LOG',
                                            script: 'N/A',
                                            stack: 'N/A',
                                            message: m.sort().join(',')
                                        }
                                    });
                                    m.length = 0;
                                    n = null;
                                }, o);
                            }
                            return i.subscribe(p, q);
                        },
                        unsubscribe: ES(i.unsubscribe, 'bind', true, i)
                    });
                }, 3);
                __d('legacy:fb.frictionless', ['FB', 'sdk.Frictionless'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    h.provide('Frictionless', i);
                }, 3);
                __d('sdk.init', ['sdk.Cookie', 'sdk.ErrorHandling', 'sdk.Event', 'sdk.Impressions', 'Log', 'ManagedError', 'sdk.PlatformVersioning', 'QueryString', 'sdk.Runtime', 'sdk.URI', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                    if (c.__markCompiled) c.__markCompiled();

                    function s(u) {
                        var v = typeof u == 'number' && u > 0 || typeof u == 'string' && /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(u);
                        if (v) return u.toString();
                        l.warn('Invalid App Id: Must be a number or numeric string representing ' + 'the application id.');
                        return null;
                    }

                    function t(u) {
                        if (p.getInitialized()) l.warn('FB.init has already been called - this could indicate a problem');
                        if (p.getIsVersioned()) {
                            if (Object.prototype.toString.call(u) !== '[object Object]') throw new m('Invalid argument');
                            if (u.authResponse) l.warn('Setting authResponse is not supported');
                            if (!u.version) u.version = new q(location.href).getQueryData().sdk_version;
                            n.assertValidVersion(u.version);
                            p.setVersion(u.version);
                        } else {
                            if (/number|string/.test(typeof u)) {
                                l.warn('FB.init called with invalid parameters');
                                u = {
                                    apiKey: u
                                };
                            }
                            u = ES('Object', 'assign', false, {
                                status: true
                            }, u || {});
                        }
                        var v = s(u.appId || u.apiKey);
                        if (v !== null) p.setClientID(v);
                        if ('scope' in u) p.setScope(u.scope);
                        if (u.cookie) {
                            p.setUseCookie(true);
                            if (typeof u.cookie === 'string') h.setDomain(u.cookie);
                        }
                        if (u.kidDirectedSite) p.setKidDirectedSite(true);
                        p.setInitialized(true);
                        if (r('js_sdk_impression_on_load', true)) k.log(115, {});
                        j.fire('init:post', u);
                    }
                    setTimeout(function() {
                        var u = /(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;
                        ES(ES('Array', 'from', false, fb_fif_window.document.getElementsByTagName('script')), 'forEach', true, function(v) {
                            if (v.src) {
                                var w = u.exec(v.src);
                                if (w) {
                                    var x = o.decode(w[2]);
                                    for (var y in x)
                                        if (x.hasOwnProperty(y)) {
                                            var z = x[y];
                                            if (z == '0') x[y] = 0;
                                        }
                                    t(x);
                                }
                            }
                        });
                        if (window.fbAsyncInit && !window.fbAsyncInit.hasRun) {
                            window.fbAsyncInit.hasRun = true;
                            i.unguard(window.fbAsyncInit)();
                        }
                    }, 0);
                    f.exports = t;
                }, null);
                __d('legacy:fb.init', ['FB', 'sdk.init'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    h.provide('', {
                        init: i
                    });
                }, 3);
                __d('legacy:fb.ui', ['FB', 'sdk.ui'], function a(b, c, d, e, f, g, h, i) {
                    if (c.__markCompiled) c.__markCompiled();
                    h.provide('', {
                        ui: i
                    });
                }, 3);
                __d('legacy:fb.versioned-sdk', ['sdk.Runtime'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    h.setIsVersioned(true);
                }, 3);
                __d("runOnce", [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i) {
                        var j, k;
                        return function() {
                            if (!j) {
                                j = true;
                                k = i();
                            }
                            return k;
                        };
                    }
                    f.exports = h;
                }, null);
                __d('XFBML', ['Assert', 'sdk.DOM', 'Log', 'ObservableMixin', 'sdk.UA', 'runOnce'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    if (c.__markCompiled) c.__markCompiled();
                    var n = {},
                        o = {},
                        p = 0,
                        q = new k();

                    function r(y, z) {
                        return ES(y[z] + '', 'trim', true);
                    }

                    function s(y) {
                        return y.scopeName ? y.scopeName + ':' + y.nodeName : '';
                    }

                    function t(y) {
                        return n[r(y, 'nodeName').toLowerCase()] || n[s(y).toLowerCase()];
                    }

                    function u(y) {
                        var z = ES(r(y, 'className').split(/\s+/), 'filter', true, function(aa) {
                            return o.hasOwnProperty(aa);
                        });
                        if (z.length === 0) return undefined;
                        if (y.getAttribute('fb-xfbml-state') || !y.childNodes || y.childNodes.length === 0 || y.childNodes.length === 1 && y.childNodes[0].nodeType === 3 || y.children.length === 1 && r(y.children[0], 'className') === 'fb-xfbml-parse-ignore') return o[z[0]];
                    }

                    function v(y) {
                        var z = {};
                        ES(ES('Array', 'from', false, y.attributes), 'forEach', true, function(aa) {
                            z[r(aa, 'name')] = r(aa, 'value');
                        });
                        return z;
                    }

                    function w(y, z, aa) {
                        var ba = document.createElement('div');
                        i.addCss(y, z + '-' + aa);
                        ES(ES('Array', 'from', false, y.childNodes), 'forEach', true, function(ca) {
                            ba.appendChild(ca);
                        });
                        ES(ES('Array', 'from', false, y.attributes), 'forEach', true, function(ca) {
                            ba.setAttribute(ca.name, ca.value);
                        });
                        y.parentNode.replaceChild(ba, y);
                        return ba;
                    }

                    function x(y, z, aa) {
                        h.isTrue(y && y.nodeType && y.nodeType === 1 && !!y.getElementsByTagName, 'Invalid DOM node passed to FB.XFBML.parse()');
                        h.isFunction(z, 'Invalid callback passed to FB.XFBML.parse()');
                        var ba = ++p;
                        j.info('XFBML Parsing Start %s', ba);
                        var ca = 1,
                            da = 0,
                            ea = function() {
                                ca--;
                                if (ca === 0) {
                                    j.info('XFBML Parsing Finish %s, %s tags found', ba, da);
                                    z();
                                    q.inform('render', ba, da);
                                }
                                h.isTrue(ca >= 0, 'onrender() has been called too many times');
                            };
                        ES(ES('Array', 'from', false, y.getElementsByTagName('*')), 'forEach', true, function(ga) {
                            if (!aa && ga.getAttribute('fb-xfbml-state')) return;
                            if (ga.nodeType !== 1) return;
                            var ha = t(ga) || u(ga);
                            if (!ha) return;
                            if (l.ie() < 9 && ga.scopeName) ga = w(ga, ha.xmlns, ha.localName);
                            ca++;
                            da++;
                            var ia = new ha.ctor(ga, ha.xmlns, ha.localName, v(ga));
                            ia.subscribe('render', m(function() {
                                ga.setAttribute('fb-xfbml-state', 'rendered');
                                ea();
                            }));
                            var ja = function() {
                                if (ga.getAttribute('fb-xfbml-state') == 'parsed') {
                                    q.subscribe('render.queue', ja);
                                } else {
                                    ga.setAttribute('fb-xfbml-state', 'parsed');
                                    ia.process();
                                }
                            };
                            ja();
                        });
                        q.inform('parse', ba, da);
                        var fa = 30000;
                        setTimeout(function() {
                            if (ca > 0) j.warn('%s tags failed to render in %s ms', ca, fa);
                        }, fa);
                        ea();
                    }
                    q.subscribe('render', function() {
                        var y = q.getSubscribers('render.queue');
                        q.clearSubscribers('render.queue');
                        ES(y, 'forEach', true, function(z) {
                            z();
                        });
                    });
                    ES('Object', 'assign', false, q, {
                        registerTag: function(y) {
                            var z = y.xmlns + ':' + y.localName;
                            h.isUndefined(n[z], z + ' already registered');
                            n[z] = y;
                            o[y.xmlns + '-' + y.localName] = y;
                        },
                        parse: function(y, z) {
                            x(y || document.body, z || function() {}, true);
                        },
                        parseNew: function() {
                            x(document.body, function() {}, false);
                        }
                    });
                    f.exports = q;
                }, null);
                __d('PluginPipe', ['sdk.Content', 'sdk.feature', 'guid', 'insertIframe', 'Miny', 'ObservableMixin', 'JSSDKPluginPipeConfig', 'sdk.Runtime', 'sdk.UA', 'UrlMap', 'XFBML'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                    if (c.__markCompiled) c.__markCompiled();
                    var s = new m(),
                        t = n.threshold,
                        u = [];

                    function v() {
                        return !!(i('plugin_pipe', false) && o.getSecure() !== undefined && (p.chrome() || p.firefox()) && n.enabledApps[o.getClientID()]);
                    }

                    function w() {
                        var y = u;
                        u = [];
                        if (y.length <= t) {
                            ES(y, 'forEach', true, function(ba) {
                                k(ba.config);
                            });
                            return;
                        }
                        var z = y.length + 1;

                        function aa() {
                            z--;
                            if (z === 0) x(y);
                        }
                        ES(y, 'forEach', true, function(ba) {
                            var ca = {};
                            for (var da in ba.config) ca[da] = ba.config[da];
                            ca.url = q.resolve('www', o.getSecure()) + '/plugins/plugin_pipe_shell.php';
                            ca.onload = aa;
                            k(ca);
                        });
                        aa();
                    }
                    r.subscribe('parse', w);

                    function x(y) {
                        var z = document.createElement('span');
                        h.appendHidden(z);
                        var aa = {};
                        ES(y, 'forEach', true, function(fa) {
                            aa[fa.config.name] = {
                                plugin: fa.tag,
                                params: fa.params
                            };
                        });
                        var ba = ES('JSON', 'stringify', false, aa),
                            ca = l.encode(ba);
                        ES(y, 'forEach', true, function(fa) {
                            var ga = document.getElementsByName(fa.config.name)[0];
                            ga.onload = fa.config.onload;
                        });
                        var da = q.resolve('www', o.getSecure()) + '/plugins/pipe.php',
                            ea = j();
                        k({
                            url: 'about:blank',
                            root: z,
                            name: ea,
                            className: 'fb_hidden fb_invisible',
                            onload: function() {
                                h.submitToTarget({
                                    url: da,
                                    target: ea,
                                    params: {
                                        plugins: ca.length < ba.length ? ca : ba
                                    }
                                });
                            }
                        });
                    }
                    ES('Object', 'assign', false, s, {
                        add: function(y) {
                            var z = v();
                            z && u.push({
                                config: y._config,
                                tag: y._tag,
                                params: y._params
                            });
                            return z;
                        }
                    });
                    f.exports = s;
                }, null);
                __d('IframePlugin', ['sdk.Auth', 'sdk.DOM', 'sdk.Event', 'Log', 'ObservableMixin', 'sdk.PlatformVersioning', 'PluginPipe', 'QueryString', 'sdk.Runtime', 'Type', 'sdk.UA', 'sdk.URI', 'UrlMap', 'sdk.XD', 'sdk.createIframe', 'sdk.feature', 'guid', 'resolveURI'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
                    if (c.__markCompiled) c.__markCompiled();
                    var z = {
                        skin: 'string',
                        font: 'string',
                        width: 'string',
                        height: 'px',
                        ref: 'string',
                        color_scheme: 'string'
                    };

                    function aa(ia, ja, ka) {
                        if (ja || ja === 0)
                            if (ja === '100%') {
                                ia.style.width = '100%';
                            } else ia.style.width = ja + 'px';
                        if (ka || ka === 0) ia.style.height = ka + 'px';
                    }

                    function ba(ia) {
                        return function(ja) {
                            var ka = {
                                width: ja.width,
                                height: ja.height,
                                pluginID: ia
                            };
                            j.fire('xfbml.resize', ka);
                        };
                    }
                    var ca = {
                        string: function(ia) {
                            return ia;
                        },
                        bool: function(ia) {
                            return ia ? /^(?:true|1|yes|on)$/i.test(ia) : undefined;
                        },
                        url: function(ia) {
                            return y(ia);
                        },
                        url_maybe: function(ia) {
                            return ia ? y(ia) : ia;
                        },
                        hostname: function(ia) {
                            return ia || window.location.hostname;
                        },
                        px: function(ia) {
                            return (/^(\d+)(?:px)?$/.test(ia) ? parseInt(RegExp.$1, 10) : undefined);
                        },
                        text: function(ia) {
                            return ia;
                        }
                    };

                    function da(ia, ja) {
                        var ka = ia[ja] || ia[ja.replace(/_/g, '-')] || ia[ja.replace(/_/g, '')] || ia['data-' + ja] || ia['data-' + ja.replace(/_/g, '-')] || ia['data-' + ja.replace(/_/g, '')] || undefined;
                        return ka;
                    }

                    function ea(ia, ja, ka, la) {
                        ES(ES('Object', 'keys', false, ia), 'forEach', true, function(ma) {
                            if (ia[ma] == 'text' && !ka[ma]) {
                                ka[ma] = ja.textContent || ja.innerText || '';
                                ja.setAttribute(ma, ka[ma]);
                            }
                            la[ma] = ca[ia[ma]](da(ka, ma));
                        });
                    }

                    function fa(ia) {
                        if (ia === '100%') return '100%';
                        return ia || ia === '0' || ia === 0 ? parseInt(ia, 10) : undefined;
                    }

                    function ga(ia) {
                        if (ia) aa(ia, 0, 0);
                    }
                    var ha = q.extend({
                        constructor: function(ia, ja, ka, la) {
                            this.parent();
                            ka = ka.replace(/-/g, '_');
                            var ma = da(la, 'plugin_id');
                            this.subscribe('xd.resize', ba(ma));
                            this.subscribe('xd.resize.flow', ba(ma));
                            this.subscribe('xd.resize.flow', ES(function(sa) {
                                ES('Object', 'assign', false, this._iframeOptions.root.style, {
                                    verticalAlign: 'bottom',
                                    overflow: ''
                                });
                                aa(this._iframeOptions.root, fa(sa.width), fa(sa.height));
                                this.updateLift();
                                clearTimeout(this._timeoutID);
                            }, 'bind', true, this));
                            this.subscribe('xd.resize', ES(function(sa) {
                                ES('Object', 'assign', false, this._iframeOptions.root.style, {
                                    verticalAlign: 'bottom',
                                    overflow: ''
                                });
                                aa(this._iframeOptions.root, fa(sa.width), fa(sa.height));
                                aa(this._iframe, fa(sa.width), fa(sa.height));
                                this._isIframeResized = true;
                                this.updateLift();
                                clearTimeout(this._timeoutID);
                            }, 'bind', true, this));
                            this.subscribe('xd.resize.iframe', ES(function(sa) {
                                if (sa.reposition === 'true' && w('reposition_iframe', false)) this.reposition(fa(sa.width));
                                aa(this._iframe, fa(sa.width), fa(sa.height));
                                this._isIframeResized = true;
                                this.updateLift();
                                clearTimeout(this._timeoutID);
                            }, 'bind', true, this));
                            this.subscribe('xd.sdk_event', function(sa) {
                                var ta = ES('JSON', 'parse', false, sa.data);
                                ta.pluginID = ma;
                                j.fire(sa.event, ta, ia);
                            });
                            var na = p.getSecure() || window.location.protocol == 'https:',
                                oa = t.resolve('www', na) + '/plugins/' + ka + '.php?',
                                pa = {};
                            ea(this.getParams(), ia, la, pa);
                            ea(z, ia, la, pa);
                            ES('Object', 'assign', false, pa, {
                                app_id: p.getClientID(),
                                locale: p.getLocale(),
                                sdk: 'joey',
                                kid_directed_site: p.getKidDirectedSite(),
                                channel: u.handler(ES(function(sa) {
                                    return this.inform('xd.' + sa.type, sa);
                                }, 'bind', true, this), 'parent.parent', true)
                            });
                            pa.container_width = ia.offsetWidth;
                            i.addCss(ia, 'fb_iframe_widget');
                            var qa = x();
                            this.subscribe('xd.verify', function(sa) {
                                u.sendToFacebook(qa, {
                                    method: 'xd/verify',
                                    params: ES('JSON', 'stringify', false, sa.token)
                                });
                            });
                            this.subscribe('xd.refreshLoginStatus', ES(function() {
                                h.removeLogoutState();
                                h.getLoginStatus(ES(this.inform, 'bind', true, this, 'login.status'), true);
                            }, 'bind', true, this));
                            var ra = document.createElement('span');
                            ES('Object', 'assign', false, ra.style, {
                                verticalAlign: 'top',
                                width: '0px',
                                height: '0px',
                                overflow: 'hidden'
                            });
                            this._element = ia;
                            this._ns = ja;
                            this._tag = ka;
                            this._params = pa;
                            this._config = this.getConfig();
                            this._iframeOptions = {
                                root: ra,
                                url: oa + o.encode(pa),
                                name: qa,
                                width: this._config.mobile_fullsize && r.mobile() ? void 0 : pa.width || 1000,
                                height: pa.height || 1000,
                                style: {
                                    border: 'none',
                                    visibility: 'hidden'
                                },
                                title: this._ns + ':' + this._tag + ' Facebook Social Plugin',
                                onload: ES(function() {
                                    return this.inform('render');
                                }, 'bind', true, this),
                                onerror: ES(function() {
                                    return ga(this._iframe);
                                }, 'bind', true, this)
                            };
                            if (this.isFluid() && pa.width !== 'auto') {
                                i.addCss(this._element, 'fb_iframe_widget_fluid_desktop');
                                if (!pa.width && this._config.full_width) {
                                    this._element.style.width = '100%';
                                    this._iframeOptions.root.style.width = '100%';
                                    this._iframeOptions.style.width = '100%';
                                    this._params.container_width = this._element.offsetWidth;
                                    this._iframeOptions.url = oa + o.encode(this._params);
                                }
                            }
                        },
                        process: function() {
                            if (p.getIsVersioned()) {
                                m.assertVersionIsSet();
                                var ia = new s(this._iframeOptions.url);
                                this._iframeOptions.url = ia.setPath('/' + p.getVersion() + ia.getPath()).toString();
                            }
                            var ja = ES('Object', 'assign', false, {}, this._params);
                            delete ja.channel;
                            var ka = o.encode(ja);
                            if (this._element.getAttribute('fb-iframe-plugin-query') == ka) {
                                k.info('Skipping render: %s:%s %s', this._ns, this._tag, ka);
                                this.inform('render');
                                return;
                            }
                            this._element.setAttribute('fb-iframe-plugin-query', ka);
                            this.subscribe('render', ES(function() {
                                this._iframe.style.visibility = 'visible';
                                if (!this._isIframeResized) ga(this._iframe);
                            }, 'bind', true, this));
                            while (this._element.firstChild) this._element.removeChild(this._element.firstChild);
                            this._element.appendChild(this._iframeOptions.root);
                            var la = r.mobile() ? 120 : 45;
                            this._timeoutID = setTimeout(ES(function() {
                                ga(this._iframe);
                                k.warn('%s:%s failed to resize in %ss', this._ns, this._tag, la);
                            }, 'bind', true, this), la * 1000);
                            if (!n.add(this)) this._iframe = v(this._iframeOptions);
                            if (r.mobile() || ja.width === 'auto') {
                                i.addCss(this._element, 'fb_iframe_widget_fluid');
                                if (!this._iframeOptions.width) {
                                    ES('Object', 'assign', false, this._element.style, {
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto'
                                    });
                                    ES('Object', 'assign', false, this._iframeOptions.root.style, {
                                        width: '100%',
                                        height: 'auto'
                                    });
                                    var ma = {
                                        height: 'auto',
                                        position: 'static',
                                        width: '100%'
                                    };
                                    if (r.iphone() || r.ipad()) ES('Object', 'assign', false, ma, {
                                        width: '220px',
                                        'min-width': '100%'
                                    });
                                    ES('Object', 'assign', false, this._iframe.style, ma);
                                }
                            }
                        },
                        getConfig: function() {
                            return {};
                        },
                        isFluid: function() {
                            var ia = this.getConfig();
                            return ia.fluid;
                        },
                        reposition: function(ia) {
                            var ja = i.getPosition(this._iframe).x,
                                ka = i.getViewportInfo().width,
                                la = parseInt(i.getStyle(this._iframe, 'width'), 10),
                                ma = {};
                            if (ja + ia > ka && ja > ia) {
                                this._iframe.style.left = parseInt(i.getStyle(this._iframe, 'width'), 10) - ia + 'px';
                                this._isRepositioned = true;
                                ma.type = 'reposition';
                            } else if (this._isRepositioned && la - ia !== 0) {
                                this._iframe.style.left = '0px';
                                this._isRepositioned = false;
                                ma.type = 'restore';
                            } else return;
                            u.sendToFacebook(this._iframe.name, {
                                method: 'xd/reposition',
                                params: ES('JSON', 'stringify', false, ma)
                            });
                        },
                        updateLift: function() {
                            var ia = this._iframe.style.width === this._iframeOptions.root.style.width && this._iframe.style.height === this._iframeOptions.root.style.height;
                            i[ia ? 'removeCss' : 'addCss'](this._iframe, 'fb_iframe_widget_lift');
                        }
                    }, l);
                    ha.getVal = da;
                    ha.withParams = function(ia, ja) {
                        return ha.extend({
                            getParams: function() {
                                return ia;
                            },
                            getConfig: function() {
                                return ja ? ja : {};
                            }
                        });
                    };
                    f.exports = ha;
                }, null);
                __d('PluginConfig', ['sdk.feature'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();
                    var i = {
                        messengerpreconfirmation: {
                            mobile_fullsize: true
                        },
                        messengeraccountconfirmation: {
                            mobile_fullsize: true
                        },
                        messengerbusinesslink: {
                            mobile_fullsize: true
                        },
                        messengertoggle: {
                            mobile_fullsize: true
                        },
                        messengermessageus: {
                            mobile_fullsize: true
                        },
                        send_to_messenger: {
                            mobile_fullsize: true
                        },
                        post: {
                            fluid: h('fluid_embed', false),
                            mobile_fullsize: true
                        }
                    };
                    f.exports = i;
                }, null);
                __d('PluginTags', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {
                            comment_embed: {
                                href: 'url',
                                include_parent: 'bool'
                            },
                            composer: {
                                action_type: 'string',
                                action_properties: 'string'
                            },
                            create_event_button: {},
                            follow: {
                                href: 'url',
                                layout: 'string',
                                show_faces: 'bool'
                            },
                            like: {
                                href: 'url',
                                layout: 'string',
                                show_faces: 'bool',
                                share: 'bool',
                                action: 'string',
                                send: 'bool'
                            },
                            like_box: {
                                href: 'string',
                                show_faces: 'bool',
                                header: 'bool',
                                stream: 'bool',
                                force_wall: 'bool',
                                show_border: 'bool',
                                id: 'string',
                                connections: 'string',
                                profile_id: 'string',
                                name: 'string'
                            },
                            page: {
                                href: 'string',
                                hide_cta: 'bool',
                                hide_cover: 'bool',
                                small_header: 'bool',
                                adapt_container_width: 'bool',
                                show_facepile: 'bool',
                                show_posts: 'bool',
                                tabs: 'string'
                            },
                            messengerpreconfirmation: {
                                messenger_app_id: 'string',
                                page_id: 'string'
                            },
                            messengeraccountconfirmation: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                state: 'string'
                            },
                            messengerbusinesslink: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                state: 'string'
                            },
                            messengertoggle: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                token: 'string',
                                psid: 'string'
                            },
                            messengermessageus: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                color: 'string',
                                size: 'string'
                            },
                            send_to_messenger: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                color: 'string',
                                size: 'string'
                            },
                            page_events: {
                                href: 'url'
                            },
                            post: {
                                href: 'url',
                                show_text: 'bool'
                            },
                            profile_pic: {
                                uid: 'string',
                                linked: 'bool',
                                href: 'string',
                                size: 'string',
                                facebook_logo: 'bool'
                            },
                            send: {
                                href: 'url'
                            },
                            send_to_mobile: {
                                max_rows: 'string',
                                show_faces: 'bool',
                                size: 'string'
                            }
                        },
                        i = {
                            subscribe: 'follow',
                            fan: 'like_box',
                            likebox: 'like_box'
                        };
                    ES(ES('Object', 'keys', false, i), 'forEach', true, function(j) {
                        h[j] = h[i[j]];
                    });
                    f.exports = h;
                }, null);
                __d('sdk.Arbiter', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = {
                        BEHAVIOR_EVENT: 'e',
                        BEHAVIOR_PERSISTENT: 'p',
                        BEHAVIOR_STATE: 's'
                    };
                    f.exports = h;
                }, null);
                __d('sdk.XFBML.Element', ['sdk.DOM', 'Type', 'ObservableMixin'], function a(b, c, d, e, f, g, h, i, j) {
                    if (c.__markCompiled) c.__markCompiled();
                    var k = i.extend({
                        constructor: function(l) {
                            this.parent();
                            this.dom = l;
                        },
                        fire: function() {
                            this.inform.apply(this, arguments);
                        },
                        getAttribute: function(l, m, n) {
                            var o = h.getAttr(this.dom, l);
                            return o ? n ? n(o) : o : m;
                        },
                        _getBoolAttribute: function(l, m) {
                            var n = h.getBoolAttr(this.dom, l);
                            return n === null ? m : n;
                        },
                        _getPxAttribute: function(l, m) {
                            return this.getAttribute(l, m, function(n) {
                                var o = parseInt(n, 10);
                                return isNaN(o) ? m : o;
                            });
                        },
                        _getLengthAttribute: function(l, m) {
                            return this.getAttribute(l, m, function(n) {
                                if (n === '100%' || n === 'auto') return n;
                                var o = parseInt(n, 10);
                                return isNaN(o) ? m : o;
                            });
                        },
                        _getAttributeFromList: function(l, m, n) {
                            return this.getAttribute(l, m, function(o) {
                                o = o.toLowerCase();
                                return ES(n, 'indexOf', true, o) > -1 ? o : m;
                            });
                        },
                        isValid: function() {
                            for (var l = this.dom; l; l = l.parentNode)
                                if (l == document.body) return true;
                        },
                        clear: function() {
                            h.html(this.dom, '');
                        }
                    }, j);
                    f.exports = k;
                }, null);
                __d('sdk.XFBML.IframeWidget', ['sdk.Arbiter', 'sdk.Auth', 'sdk.Content', 'sdk.DOM', 'sdk.Event', 'sdk.XFBML.Element', 'guid', 'insertIframe', 'QueryString', 'sdk.Runtime', 'sdk.ui', 'UrlMap', 'sdk.XD'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
                    if (c.__markCompiled) c.__markCompiled();
                    var u = m.extend({
                            _iframeName: null,
                            _showLoader: true,
                            _refreshOnAuthChange: false,
                            _allowReProcess: false,
                            _fetchPreCachedLoader: false,
                            _visibleAfter: 'load',
                            _widgetPipeEnabled: false,
                            _borderReset: false,
                            _repositioned: false,
                            getUrlBits: function() {
                                throw new Error('Inheriting class needs to implement getUrlBits().');
                            },
                            setupAndValidate: function() {
                                return true;
                            },
                            oneTimeSetup: function() {},
                            getSize: function() {},
                            getIframeName: function() {
                                return this._iframeName;
                            },
                            getIframeTitle: function() {
                                return 'Facebook Social Plugin';
                            },
                            getChannelUrl: function() {
                                if (!this._channelUrl) {
                                    var y = this;
                                    this._channelUrl = t.handler(function(z) {
                                        y.fire('xd.' + z.type, z);
                                    }, 'parent.parent', true);
                                }
                                return this._channelUrl;
                            },
                            getIframeNode: function() {
                                return this.dom.getElementsByTagName('iframe')[0];
                            },
                            arbiterInform: function(event, y, z) {
                                t.sendToFacebook(this.getIframeName(), {
                                    method: event,
                                    params: ES('JSON', 'stringify', false, y || {}),
                                    behavior: z || h.BEHAVIOR_PERSISTENT
                                });
                            },
                            _arbiterInform: function(event, y, z) {
                                var aa = 'parent.frames["' + this.getIframeNode().name + '"]';
                                t.inform(event, y, aa, z);
                            },
                            getDefaultWebDomain: function() {
                                return s.resolve('www');
                            },
                            process: function(y) {
                                if (this._done) {
                                    if (!this._allowReProcess && !y) return;
                                    this.clear();
                                } else this._oneTimeSetup();
                                this._done = true;
                                this._iframeName = this.getIframeName() || this._iframeName || n();
                                if (!this.setupAndValidate()) {
                                    this.fire('render');
                                    return;
                                }
                                if (this._showLoader) this._addLoader();
                                k.addCss(this.dom, 'fb_iframe_widget');
                                if (this._visibleAfter != 'immediate') {
                                    k.addCss(this.dom, 'fb_hide_iframes');
                                } else this.subscribe('iframe.onload', ES(this.fire, 'bind', true, this, 'render'));
                                var z = this.getSize() || {},
                                    aa = this.getFullyQualifiedURL();
                                if (z.width == '100%') k.addCss(this.dom, 'fb_iframe_widget_fluid');
                                this.clear();
                                o({
                                    url: aa,
                                    root: this.dom.appendChild(document.createElement('span')),
                                    name: this._iframeName,
                                    title: this.getIframeTitle(),
                                    className: q.getRtl() ? 'fb_rtl' : 'fb_ltr',
                                    height: z.height,
                                    width: z.width,
                                    onload: ES(this.fire, 'bind', true, this, 'iframe.onload')
                                });
                                this._resizeFlow(z);
                                this.loaded = false;
                                this.subscribe('iframe.onload', ES(function() {
                                    this.loaded = true;
                                    if (!this._isResizeHandled) k.addCss(this.dom, 'fb_hide_iframes');
                                }, 'bind', true, this));
                            },
                            generateWidgetPipeIframeName: function() {
                                v++;
                                return 'fb_iframe_' + v;
                            },
                            getFullyQualifiedURL: function() {
                                var y = this._getURL();
                                y += '?' + p.encode(this._getQS());
                                if (y.length > 2000) {
                                    y = 'about:blank';
                                    var z = ES(function() {
                                        this._postRequest();
                                        this.unsubscribe('iframe.onload', z);
                                    }, 'bind', true, this);
                                    this.subscribe('iframe.onload', z);
                                }
                                return y;
                            },
                            _getWidgetPipeShell: function() {
                                return s.resolve('www') + '/common/widget_pipe_shell.php';
                            },
                            _oneTimeSetup: function() {
                                this.subscribe('xd.resize', ES(this._handleResizeMsg, 'bind', true, this));
                                this.subscribe('xd.resize', ES(this._bubbleResizeEvent, 'bind', true, this));
                                this.subscribe('xd.resize.iframe', ES(this._resizeIframe, 'bind', true, this));
                                this.subscribe('xd.resize.flow', ES(this._resizeFlow, 'bind', true, this));
                                this.subscribe('xd.resize.flow', ES(this._bubbleResizeEvent, 'bind', true, this));
                                this.subscribe('xd.refreshLoginStatus', function() {
                                    i.getLoginStatus(function() {}, true);
                                });
                                this.subscribe('xd.logout', function() {
                                    r({
                                        method: 'auth.logout',
                                        display: 'hidden'
                                    }, function() {});
                                });
                                if (this._refreshOnAuthChange) this._setupAuthRefresh();
                                if (this._visibleAfter == 'load') this.subscribe('iframe.onload', ES(this._makeVisible, 'bind', true, this));
                                this.subscribe('xd.verify', ES(function(y) {
                                    this.arbiterInform('xd/verify', y.token);
                                }, 'bind', true, this));
                                this.oneTimeSetup();
                            },
                            _makeVisible: function() {
                                this._removeLoader();
                                k.removeCss(this.dom, 'fb_hide_iframes');
                                this.fire('render');
                            },
                            _setupAuthRefresh: function() {
                                i.getLoginStatus(ES(function(y) {
                                    var z = y.status;
                                    l.subscribe('auth.statusChange', ES(function(aa) {
                                        if (!this.isValid()) return;
                                        if (z == 'unknown' || aa.status == 'unknown') this.process(true);
                                        z = aa.status;
                                    }, 'bind', true, this));
                                }, 'bind', true, this));
                            },
                            _handleResizeMsg: function(y) {
                                if (!this.isValid()) return;
                                this._resizeIframe(y);
                                this._resizeFlow(y);
                                if (!this._borderReset) {
                                    this.getIframeNode().style.border = 'none';
                                    this._borderReset = true;
                                }
                                this._isResizeHandled = true;
                                this._makeVisible();
                            },
                            _bubbleResizeEvent: function(y) {
                                var z = {
                                    height: y.height,
                                    width: y.width,
                                    pluginID: this.getAttribute('plugin-id')
                                };
                                l.fire('xfbml.resize', z);
                            },
                            _resizeIframe: function(y) {
                                var z = this.getIframeNode();
                                if (y.reposition === "true") this._repositionIframe(y);
                                y.height && (z.style.height = y.height + 'px');
                                y.width && (z.style.width = y.width + 'px');
                                this._updateIframeZIndex();
                            },
                            _resizeFlow: function(y) {
                                var z = this.dom.getElementsByTagName('span')[0];
                                y.height && (z.style.height = y.height + 'px');
                                y.width && (z.style.width = y.width + 'px');
                                this._updateIframeZIndex();
                            },
                            _updateIframeZIndex: function() {
                                var y = this.dom.getElementsByTagName('span')[0],
                                    z = this.getIframeNode(),
                                    aa = z.style.height === y.style.height && z.style.width === y.style.width,
                                    ba = aa ? 'removeCss' : 'addCss';
                                k[ba](z, 'fb_iframe_widget_lift');
                            },
                            _repositionIframe: function(y) {
                                var z = this.getIframeNode(),
                                    aa = parseInt(k.getStyle(z, 'width'), 10),
                                    ba = k.getPosition(z).x,
                                    ca = k.getViewportInfo().width,
                                    da = parseInt(y.width, 10);
                                if (ba + da > ca && ba > da) {
                                    z.style.left = aa - da + 'px';
                                    this.arbiterInform('xd/reposition', {
                                        type: 'horizontal'
                                    });
                                    this._repositioned = true;
                                } else if (this._repositioned) {
                                    z.style.left = '0px';
                                    this.arbiterInform('xd/reposition', {
                                        type: 'restore'
                                    });
                                    this._repositioned = false;
                                }
                            },
                            _addLoader: function() {
                                if (!this._loaderDiv) {
                                    k.addCss(this.dom, 'fb_iframe_widget_loader');
                                    this._loaderDiv = document.createElement('div');
                                    this._loaderDiv.className = 'FB_Loader';
                                    this.dom.appendChild(this._loaderDiv);
                                }
                            },
                            _removeLoader: function() {
                                if (this._loaderDiv) {
                                    k.removeCss(this.dom, 'fb_iframe_widget_loader');
                                    if (this._loaderDiv.parentNode) this._loaderDiv.parentNode.removeChild(this._loaderDiv);
                                    this._loaderDiv = null;
                                }
                            },
                            _getQS: function() {
                                return ES('Object', 'assign', false, {
                                    api_key: q.getClientID(),
                                    locale: q.getLocale(),
                                    sdk: 'joey',
                                    kid_directed_site: q.getKidDirectedSite(),
                                    ref: this.getAttribute('ref')
                                }, this.getUrlBits().params);
                            },
                            _getURL: function() {
                                var y = this.getDefaultWebDomain(),
                                    z = '';
                                return y + '/plugins/' + z + this.getUrlBits().name + '.php';
                            },
                            _postRequest: function() {
                                j.submitToTarget({
                                    url: this._getURL(),
                                    target: this.getIframeNode().name,
                                    params: this._getQS()
                                });
                            }
                        }),
                        v = 0,
                        w = {};

                    function x() {
                        var y = {};
                        for (var z in w) {
                            var aa = w[z];
                            y[z] = {
                                widget: aa.getUrlBits().name,
                                params: aa._getQS()
                            };
                        }
                        return y;
                    }
                    f.exports = u;
                }, null);
                __d('sdk.XFBML.Comments', ['sdk.Event', 'sdk.XFBML.IframeWidget', 'QueryString', 'sdk.Runtime', 'JSSDKConfig', 'sdk.UA', 'UrlMap'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    if (c.__markCompiled) c.__markCompiled();
                    var o = i.extend({
                        _visibleAfter: 'immediate',
                        _refreshOnAuthChange: true,
                        setupAndValidate: function() {
                            var p = {
                                channel_url: this.getChannelUrl(),
                                colorscheme: this.getAttribute('colorscheme'),
                                skin: this.getAttribute('skin'),
                                numposts: this.getAttribute('num-posts', 10),
                                width: this._getLengthAttribute('width'),
                                href: this.getAttribute('href'),
                                permalink: this.getAttribute('permalink'),
                                publish_feed: this.getAttribute('publish_feed'),
                                order_by: this.getAttribute('order_by'),
                                mobile: this._getBoolAttribute('mobile'),
                                version: this.getAttribute('version')
                            };
                            if (!p.width && !p.permalink) p.width = 550;
                            if (l.initSitevars.enableMobileComments && m.mobile() && p.mobile !== false) {
                                p.mobile = true;
                                delete p.width;
                            }
                            if (!p.skin) p.skin = p.colorscheme;
                            if (!p.href) {
                                p.migrated = this.getAttribute('migrated');
                                p.xid = this.getAttribute('xid');
                                p.title = this.getAttribute('title', document.title);
                                p.url = this.getAttribute('url', document.URL);
                                p.quiet = this.getAttribute('quiet');
                                p.reverse = this.getAttribute('reverse');
                                p.simple = this.getAttribute('simple');
                                p.css = this.getAttribute('css');
                                p.notify = this.getAttribute('notify');
                                if (!p.xid) {
                                    var q = ES(document.URL, 'indexOf', true, '#');
                                    if (q > 0) {
                                        p.xid = encodeURIComponent(document.URL.substring(0, q));
                                    } else p.xid = encodeURIComponent(document.URL);
                                }
                                if (p.migrated) p.href = n.resolve('www') + '/plugins/comments_v1.php?' + 'app_id=' + k.getClientID() + '&xid=' + encodeURIComponent(p.xid) + '&url=' + encodeURIComponent(p.url);
                            } else {
                                var r = this.getAttribute('fb_comment_id');
                                if (!r) {
                                    r = j.decode(document.URL.substring(ES(document.URL, 'indexOf', true, '?') + 1)).fb_comment_id;
                                    if (r && ES(r, 'indexOf', true, '#') > 0) r = r.substring(0, ES(r, 'indexOf', true, '#'));
                                }
                                if (r) {
                                    p.fb_comment_id = r;
                                    this.subscribe('render', ES(function() {
                                        if (!window.location.hash) window.location.hash = this.getIframeNode().id;
                                    }, 'bind', true, this));
                                }
                            }
                            if (!p.version) p.version = k.getVersion();
                            this._attr = p;
                            return true;
                        },
                        oneTimeSetup: function() {
                            this.subscribe('xd.sdk_event', function(p) {
                                h.fire(p.event, ES('JSON', 'parse', false, p.data));
                            });
                        },
                        getSize: function() {
                            if (!this._attr.permalink) return {
                                width: this._attr.mobile || this._attr.width === 'auto' ? '100%' : this._attr.width,
                                height: 100
                            };
                        },
                        getUrlBits: function() {
                            return {
                                name: 'comments',
                                params: this._attr
                            };
                        },
                        getDefaultWebDomain: function() {
                            return n.resolve('www', true);
                        }
                    });
                    f.exports = o;
                }, null);
                __d('sdk.XFBML.CommentsCount', ['ApiClient', 'sdk.DOM', 'sdk.XFBML.Element', 'sprintf'], function a(b, c, d, e, f, g, h, i, j, k) {
                    if (c.__markCompiled) c.__markCompiled();
                    var l = j.extend({
                        process: function() {
                            i.addCss(this.dom, 'fb_comments_count_zero');
                            var m = this.getAttribute('href', window.location.href);
                            h.scheduleBatchCall('/v2.1/' + encodeURIComponent(m), {
                                fields: 'share'
                            }, ES(function(n) {
                                var o = n.share && n.share.comment_count || 0;
                                i.html(this.dom, k('<span class="fb_comments_count">%s</span>', o));
                                if (o > 0) i.removeCss(this.dom, 'fb_comments_count_zero');
                                this.fire('render');
                            }, 'bind', true, this));
                        }
                    });
                    f.exports = l;
                }, null);
                __d('safeEval', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i, j) {
                        if (i === null || typeof i === 'undefined') return;
                        if (typeof i !== 'string') return i;
                        if (/^\w+$/.test(i) && typeof window[i] === 'function') return window[i].apply(null, j || []);
                        return Function('return eval("' + i.replace(/"/g, '\\"') + '");').apply(null, j || []);
                    }
                    f.exports = h;
                }, null);
                __d('sdk.Helper', ['sdk.ErrorHandling', 'sdk.Event', 'UrlMap', 'safeEval', 'sprintf'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    if (c.__markCompiled) c.__markCompiled();
                    var m = {
                        isUser: function(n) {
                            return n < 2.2e+09 || n >= 1e+14 && n <= 100099999989999 || n >= 8.9e+13 && n <= 89999999999999 || n >= 6.000001e+13 && n <= 60000019999999;
                        },
                        upperCaseFirstChar: function(n) {
                            if (n.length > 0) {
                                return n.substr(0, 1).toUpperCase() + n.substr(1);
                            } else return n;
                        },
                        getProfileLink: function(n, o, p) {
                            if (!p && n) p = l('%s/profile.php?id=%s', j.resolve('www'), n.uid || n.id);
                            if (p) o = l('<a class="fb_link" href="%s">%s</a>', p, o);
                            return o;
                        },
                        invokeHandler: function(n, o, p) {
                            if (n)
                                if (typeof n === 'string') {
                                    h.unguard(k)(n, p);
                                } else if (n.apply) h.unguard(n).apply(o, p || []);
                        },
                        fireEvent: function(n, o) {
                            var p = o._attr.href;
                            o.fire(n, p);
                            i.fire(n, p, o);
                        },
                        executeFunctionByName: function(n) {
                            var o = Array.prototype.slice.call(arguments, 1),
                                p = n.split("."),
                                q = p.pop(),
                                r = window;
                            for (var s = 0; s < p.length; s++) r = r[p[s]];
                            return r[q].apply(this, o);
                        }
                    };
                    f.exports = m;
                }, null);
                __d('sdk.XFBML.LoginButton', ['sdk.Helper', 'IframePlugin', 'Log', 'sdk.ui'], function a(b, c, d, e, f, g, h, i, j, k) {
                    if (c.__markCompiled) c.__markCompiled();
                    var l = i.extend({
                        constructor: function(m, n, o, p) {
                            this.parent(m, n, o, p);
                            var q = i.getVal(p, 'on_login'),
                                r = null;
                            if (q) {
                                r = function(s) {
                                    if (s.error_code) {
                                        j.debug('Plugin Return Error (%s): %s', s.error_code, s.error_message || s.error_description);
                                        return;
                                    }
                                    h.invokeHandler(q, null, [s]);
                                };
                                this.subscribe('login.status', r);
                            }
                            this.subscribe('xd.login_button_native_open', function(s) {
                                k(ES('JSON', 'parse', false, s.params), r);
                            });
                        },
                        getParams: function() {
                            return {
                                scope: 'string',
                                perms: 'string',
                                size: 'string',
                                login_text: 'text',
                                show_faces: 'bool',
                                max_rows: 'string',
                                show_login_face: 'bool',
                                registration_url: 'url_maybe',
                                auto_logout_link: 'bool',
                                one_click: 'bool',
                                show_banner: 'bool',
                                auth_type: 'string',
                                default_audience: 'string'
                            };
                        }
                    });
                    f.exports = l;
                }, null);
                __d('escapeHTML', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();
                    var h = /[&<>"'\/]/g,
                        i = {
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            '"': '&quot;',
                            "'": '&#039;',
                            '/': '&#x2F;'
                        };

                    function j(k) {
                        return k.replace(h, function(l) {
                            return i[l];
                        });
                    }
                    f.exports = j;
                }, null);
                __d('sdk.XFBML.Name', ['ApiClient', 'escapeHTML', 'sdk.Event', 'sdk.XFBML.Element', 'sdk.Helper', 'Log', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    if (c.__markCompiled) c.__markCompiled();
                    var o = {}.hasOwnProperty,
                        p = k.extend({
                            process: function() {
                                ES('Object', 'assign', false, this, {
                                    _uid: this.getAttribute('uid'),
                                    _firstnameonly: this._getBoolAttribute('first-name-only'),
                                    _lastnameonly: this._getBoolAttribute('last-name-only'),
                                    _possessive: this._getBoolAttribute('possessive'),
                                    _reflexive: this._getBoolAttribute('reflexive'),
                                    _objective: this._getBoolAttribute('objective'),
                                    _linked: this._getBoolAttribute('linked', true),
                                    _subjectId: this.getAttribute('subject-id')
                                });
                                if (!this._uid) {
                                    m.error('"uid" is a required attribute for <fb:name>');
                                    this.fire('render');
                                    return;
                                }
                                var q = [];
                                if (this._firstnameonly) {
                                    q.push('first_name');
                                } else if (this._lastnameonly) {
                                    q.push('last_name');
                                } else q.push('name');
                                if (this._subjectId) {
                                    q.push('gender');
                                    if (this._subjectId == n.getUserID()) this._reflexive = true;
                                }
                                j.monitor('auth.statusChange', ES(function() {
                                    if (!this.isValid()) {
                                        this.fire('render');
                                        return true;
                                    }
                                    if (!this._uid || this._uid == 'loggedinuser') this._uid = n.getUserID();
                                    if (!this._uid) return;
                                    h.scheduleBatchCall('/v1.0/' + this._uid, {
                                        fields: q.join(',')
                                    }, ES(function(r) {
                                        if (o.call(r, 'error')) {
                                            m.warn('The name is not found for ID: ' + this._uid);
                                            return;
                                        }
                                        if (this._subjectId == this._uid) {
                                            this._renderPronoun(r);
                                        } else this._renderOther(r);
                                        this.fire('render');
                                    }, 'bind', true, this));
                                }, 'bind', true, this));
                            },
                            _renderPronoun: function(q) {
                                var r = '',
                                    s = this._objective;
                                if (this._subjectId) {
                                    s = true;
                                    if (this._subjectId === this._uid) this._reflexive = true;
                                }
                                if (this._uid == n.getUserID() && this._getBoolAttribute('use-you', true)) {
                                    if (this._possessive) {
                                        if (this._reflexive) {
                                            r = 'your own';
                                        } else r = 'your';
                                    } else if (this._reflexive) {
                                        r = 'yourself';
                                    } else r = 'you';
                                } else switch (q.gender) {
                                    case 'male':
                                        if (this._possessive) {
                                            r = this._reflexive ? 'his own' : 'his';
                                        } else if (this._reflexive) {
                                            r = 'himself';
                                        } else if (s) {
                                            r = 'him';
                                        } else r = 'he';
                                        break;
                                    case 'female':
                                        if (this._possessive) {
                                            r = this._reflexive ? 'her own' : 'her';
                                        } else if (this._reflexive) {
                                            r = 'herself';
                                        } else if (s) {
                                            r = 'her';
                                        } else r = 'she';
                                        break;
                                    default:
                                        if (this._getBoolAttribute('use-they', true)) {
                                            if (this._possessive) {
                                                if (this._reflexive) {
                                                    r = 'their own';
                                                } else r = 'their';
                                            } else if (this._reflexive) {
                                                r = 'themselves';
                                            } else if (s) {
                                                r = 'them';
                                            } else r = 'they';
                                        } else if (this._possessive) {
                                            if (this._reflexive) {
                                                r = 'his/her own';
                                            } else r = 'his/her';
                                        } else if (this._reflexive) {
                                            r = 'himself/herself';
                                        } else if (s) {
                                            r = 'him/her';
                                        } else r = 'he/she';
                                        break;
                                }
                                if (this._getBoolAttribute('capitalize', false)) r = l.upperCaseFirstChar(r);
                                this.dom.innerHTML = r;
                            },
                            _renderOther: function(q) {
                                var r = '',
                                    s = '';
                                if (this._uid == n.getUserID() && this._getBoolAttribute('use-you', true)) {
                                    if (this._reflexive) {
                                        if (this._possessive) {
                                            r = 'your own';
                                        } else r = 'yourself';
                                    } else if (this._possessive) {
                                        r = 'your';
                                    } else r = 'you';
                                } else if (q) {
                                    if (null === q.first_name) q.first_name = '';
                                    if (null === q.last_name) q.last_name = '';
                                    if (this._firstnameonly && q.first_name !== undefined) {
                                        r = i(q.first_name);
                                    } else if (this._lastnameonly && q.last_name !== undefined) r = i(q.last_name);
                                    if (!r) r = i(q.name);
                                    if (r !== '' && this._possessive) r += '\'s';
                                }
                                if (!r) r = i(this.getAttribute('if-cant-see', 'Facebook User'));
                                if (r) {
                                    if (this._getBoolAttribute('capitalize', false)) r = l.upperCaseFirstChar(r);
                                    if (q && this._linked) {
                                        s = l.getProfileLink(q, r, this.getAttribute('href', null));
                                    } else s = r;
                                }
                                this.dom.innerHTML = s;
                            }
                        });
                    f.exports = p;
                }, null);
                __d('UnicodeUtils', ['invariant'], function a(b, c, d, e, f, g, h) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var i = 55296,
                        j = 56319,
                        k = 56320,
                        l = 57343,
                        m = /[\uD800-\uDFFF]/;

                    function n(w) {
                        return i <= w && w <= l;
                    }

                    function o(w, x) {
                        !(0 <= x && x < w.length) ? h(0): void 0;
                        if (x + 1 === w.length) return false;
                        var y = w.charCodeAt(x),
                            z = w.charCodeAt(x + 1);
                        return (i <= y && y <= j && k <= z && z <= l);
                    }

                    function p(w) {
                        return m.test(w);
                    }

                    function q(w, x) {
                        return 1 + n(w.charCodeAt(x));
                    }

                    function r(w) {
                        if (!p(w)) return w.length;
                        var x = 0;
                        for (var y = 0; y < w.length; y += q(w, y)) x++;
                        return x;
                    }

                    function s(w, x, y) {
                        x = x || 0;
                        y = y === undefined ? Infinity : y || 0;
                        if (!p(w)) return w.substr(x, y);
                        var z = w.length;
                        if (z <= 0 || x > z || y <= 0) return '';
                        var aa = 0;
                        if (x > 0) {
                            for (; x > 0 && aa < z; x--) aa += q(w, aa);
                            if (aa >= z) return '';
                        } else if (x < 0) {
                            for (aa = z; x < 0 && 0 < aa; x++) aa -= q(w, aa - 1);
                            if (aa < 0) aa = 0;
                        }
                        var ba = z;
                        if (y < z)
                            for (ba = aa; y > 0 && ba < z; y--) ba += q(w, ba);
                        return w.substring(aa, ba);
                    }

                    function t(w, x, y) {
                        x = x || 0;
                        y = y === undefined ? Infinity : y || 0;
                        if (x < 0) x = 0;
                        if (y < 0) y = 0;
                        var z = Math.abs(y - x);
                        x = x < y ? x : y;
                        return s(w, x, z);
                    }

                    function u(w) {
                        var x = [];
                        for (var y = 0; y < w.length; y += q(w, y)) x.push(w.codePointAt(y));
                        return x;
                    }
                    var v = {
                        getCodePoints: u,
                        getUTF16Length: q,
                        hasSurrogateUnit: p,
                        isCodeUnitInSurrogateRange: n,
                        isSurrogatePair: o,
                        strlen: r,
                        substring: t,
                        substr: s
                    };
                    f.exports = v;
                }, null);
                __d('isNode', [], function a(b, c, d, e, f, g) {
                    if (c.__markCompiled) c.__markCompiled();

                    function h(i) {
                        return !!(i && (typeof Node === 'function' ? i instanceof Node : typeof i === 'object' && typeof i.nodeType === 'number' && typeof i.nodeName === 'string'));
                    }
                    f.exports = h;
                }, null);
                __d('isTextNode', ['isNode'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(j) {
                        return h(j) && j.nodeType == 3;
                    }
                    f.exports = i;
                }, null);
                __d('containsNode', ['isTextNode'], function a(b, c, d, e, f, g, h) {
                    if (c.__markCompiled) c.__markCompiled();

                    function i(j, k) {
                        if (!j || !k) {
                            return false;
                        } else if (j === k) {
                            return true;
                        } else if (h(j)) {
                            return false;
                        } else if (h(k)) {
                            return i(j, k.parentNode);
                        } else if ('contains' in j) {
                            return ES(j, 'contains', true, k);
                        } else if (j.compareDocumentPosition) {
                            return !!(j.compareDocumentPosition(k) & 16);
                        } else return false;
                    }
                    f.exports = i;
                }, null);
                __d('sdk.XFBML.Quote', ['sdk.DOM', 'DOMEventListener', 'IframePlugin', 'UnicodeUtils', 'sdk.UA', 'sdk.XD', 'containsNode', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var p = 'fb-quotable',
                        q = 155,
                        r = 70,
                        s = '',
                        t = null,
                        u = [],
                        v = false,
                        w = null,
                        x = l.mobile();

                    function y(ca) {
                        if (!document.getSelection || x) return;
                        var da = document.getSelection();
                        if (da.rangeCount === 0) {
                            aa();
                            return;
                        }
                        var ea = u.length;
                        aa();
                        if (ea) {
                            var fa = false;
                            for (var ga = 0; ga < ea; ga++)
                                if (n(u[ga], da.focusNode)) {
                                    fa = true;
                                    break;
                                }
                            if (!fa) return;
                        }
                        s = da.toString();
                        if (s === '') {
                            aa();
                            return;
                        }
                        s = ES(s.toString().replace(/\s+/g, ' '), 'trim', true);
                        var ha = Number(o('sharequotelimit', 500));
                        if (k.strlen(s) > ha) {
                            s = k.substr(s, 0, ha - 3) + '...';
                        } else s = k.substr(s, 0, ha);
                        if (!v && w) {
                            var ia = z(da);
                            w.style.left = ia.x + 'px';
                            w.style.top = ia.y + 'px';
                        }
                    }

                    function z(ca) {
                        var da = w && w.offsetWidth,
                            ea = da ? w.offsetHeight : r,
                            fa = da ? w.offsetWidth : q,
                            ga = ca.getRangeAt(0),
                            ha = document.createElement('span'),
                            ia = document.createElement('span'),
                            ja = document.createRange();
                        ja.setStart(ga.startContainer, ga.startOffset);
                        ja.insertNode(ha);
                        var ka = document.createRange();
                        ka.setStart(ga.endContainer, ga.endOffset);
                        ka.insertNode(ia);
                        var la = ha.offsetTop - ea,
                            ma = ha.offsetLeft + (ia.offsetLeft - ha.offsetLeft) / 2 - fa / 2;
                        ha.parentNode.removeChild(ha);
                        ia.parentNode.removeChild(ia);
                        return {
                            x: ma,
                            y: la
                        };
                    }

                    function aa() {
                        s = '';
                        if (!v && w) w.style.left = '-9999px';
                    }
                    var ba = j.extend({
                        constructor: function(ca, da, ea, fa) {
                            if (t) return t;
                            this.parent(ca, da, ea, fa);
                            v = h.getAttr(ca, 'layout') === 'button';
                            w = ca;
                            w.style.position = 'absolute';
                            w.style.display = '';
                            i.add(document, 'keyup', y);
                            i.add(document, 'mouseup', y);
                            this.subscribe('xd.getTextSelection', ES(function() {
                                m.sendToFacebook(this._iframeOptions.name, {
                                    method: 'setTextSelection',
                                    params: ES('JSON', 'stringify', false, {
                                        text: s
                                    })
                                });
                                aa();
                            }, 'bind', true, this));
                            u = ES(ES('Array', 'from', false, document.getElementsByTagName('*')), 'filter', true, function(ga) {
                                return (ga.nodeName.toLowerCase() === 'article' || h.containsCss(ga, p));
                            });
                            aa();
                            t = this;
                            return t;
                        },
                        getParams: function() {
                            return {
                                href: 'url',
                                layout: 'string'
                            };
                        }
                    });
                    f.exports = ba;
                }, null);
                __d('sdk.XFBML.Save', ['sdk.Content', 'sdk.DialogUtils', 'sdk.DOM', 'sdk.Event', 'IframePlugin', 'QueryString', 'sdk.UA', 'sdk.XD', 'sdk.createIframe'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var q = l.extend({
                        constructor: function(r, s, t, u) {
                            this.parent(r, s, t, u);
                            var v = n.mobile();
                            this.subscribe('xd.savePluginGetBlankIframe', ES(function(w) {
                                var x = void 0,
                                    y = void 0,
                                    z = void 0,
                                    aa = function(fa) {
                                        if (fa) j.removeCss(fa, 'fb_invisible');
                                    },
                                    ba = function(fa) {
                                        if (fa) j.addCss(fa, 'fb_invisible');
                                    };
                                if (v) {
                                    x = i.setupNewDarkOverlay();
                                    ba(x);
                                    h.append(x);
                                    i.addDoubleClickAction(x, function() {
                                        return ES(z, 'forEach', true, ba);
                                    }, 5000);
                                }
                                y = this.setupNewIframeDialog(ES('JSON', 'parse', false, w.data), w.fromIframe, ES('JSON', 'parse', false, w.isHTTPS));
                                ba(y);
                                h.append(y);
                                z = [y, x];
                                var ca = function() {
                                        ES(z, 'forEach', true, ba);
                                        i.onDialogHideCleanup(v);
                                    },
                                    da = void 0;
                                this.subscribe('xd.savePluginShowIframe', ES(function() {
                                    k.fire('savePlugin:hideDialog');
                                    ES(z, 'forEach', true, aa);
                                    this.positionOnScreen(y, x);
                                    if (!v && !da) da = i.addIdleDesktopAction(y, ca, 7000);
                                }, 'bind', true, this));
                                this.subscribe('xd.savePluginHideIframe', function() {
                                    return ca();
                                });
                                k.subscribe('savePlugin:hideDialog', function() {
                                    return ca();
                                });
                                var ea = setInterval(function() {
                                    var fa = document.getElementsByName(w.fromIframe);
                                    if (fa.length === 0) {
                                        clearTimeout(ea);
                                        ca();
                                        ES(z, 'forEach', true, function(ga) {
                                            ga && ga.parentNode.removeChild(ga);
                                        });
                                    }
                                }, 500);
                            }, 'bind', true, this));
                        },
                        positionOnScreen: function(r, s) {
                            var t = n.mobile();
                            if (t) {
                                i.setDialogPositionToCenter(r, t);
                                i.addMobileOrientationChangeAction(function(u) {
                                    if (s != null) i.setDialogPositionToCenter(s, t);
                                    i.setDialogPositionToCenter(r, t);
                                });
                            } else {
                                j.setStyle(r, 'position', 'fixed');
                                j.setStyle(r, 'top', '20px');
                                j.setStyle(r, 'right', '20px');
                            }
                        },
                        setupNewIframeDialog: function(r, s, t) {
                            var u = '#' + m.encode({
                                    forIframe: s
                                }),
                                v = i.setupNewDialog();
                            p({
                                url: o.getXDArbiterURL(t) + u,
                                name: 'blank_' + this._iframeOptions.name,
                                root: v.contentRoot,
                                tabindex: -1
                            });
                            j.addCss(v.contentRoot, 'fb_dialog_iframe');
                            ES('Object', 'assign', false, v.dialogElement.style, r.style || {});
                            j.setStyle(v.dialogElement, 'width', r.width + 'px');
                            j.setStyle(v.dialogElement, 'height', r.height + 'px');
                            ES(r.classList, 'forEach', true, function(w) {
                                return j.addCss(v.dialogElement, w);
                            });
                            j.removeCss(v.dialogElement, 'fb_dialog_advanced');
                            return v.dialogElement;
                        },
                        getParams: function() {
                            return {
                                uri: 'url',
                                url_category: 'string',
                                size: 'string'
                            };
                        }
                    });
                    f.exports = q;
                }, null);
                __d('sdk.XFBML.ShareButton', ['IframePlugin', 'sdk.UA', 'sdk.ui'], function a(b, c, d, e, f, g, h, i, j) {
                    'use strict';
                    if (c.__markCompiled) c.__markCompiled();
                    var k = h.extend({
                        constructor: function(l, m, n, o) {
                            this.parent(l, m, n, o);
                            this.subscribe('xd.shareTriggerMobileIframe', function(p) {
                                var q = ES('JSON', 'parse', false, p.data);
                                j({
                                    method: 'share',
                                    href: q.href,
                                    mobile_iframe: i.mobile()
                                });
                            });
                        },
                        getParams: function() {
                            return {
                                href: 'url',
                                layout: 'string',
                                mobile_iframe: 'bool',
                                type: 'string'
                            };
                        }
                    });
                    f.exports = k;
                }, null);
                __d('sdk.XFBML.Video', ['Assert', 'sdk.Event', 'IframePlugin', 'ObservableMixin', 'sdk.XD'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    if (c.__markCompiled) c.__markCompiled();

                    function m(p) {
                        'use strict';
                        this.$VideoCache1 = p.isMuted;
                        this.$VideoCache2 = p.volume;
                        this.$VideoCache3 = p.timePosition;
                        this.$VideoCache4 = p.duration;
                    }
                    m.prototype.update = function(p) {
                        'use strict';
                        if (p.isMuted !== undefined) this.$VideoCache1 = p.isMuted;
                        if (p.volume !== undefined) this.$VideoCache2 = p.volume;
                        if (p.timePosition !== undefined) this.$VideoCache3 = p.timePosition;
                        if (p.duration !== undefined) this.$VideoCache4 = p.duration;
                    };
                    m.prototype.isMuted = function() {
                        'use strict';
                        return this.$VideoCache1;
                    };
                    m.prototype.getVolume = function() {
                        'use strict';
                        return this.$VideoCache1 ? 0 : this.$VideoCache2;
                    };
                    m.prototype.getCurrentPosition = function() {
                        'use strict';
                        return this.$VideoCache3;
                    };
                    m.prototype.getDuration = function() {
                        'use strict';
                        return this.$VideoCache4;
                    };

                    function n(p, q, r) {
                        'use strict';
                        this.$VideoController1 = p;
                        this.$VideoController2 = q;
                        this.$VideoController3 = r;
                    }
                    n.prototype.play = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'play',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.pause = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'pause',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.seek = function(p) {
                        'use strict';
                        h.isNumber(p, 'Invalid argument');
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'seek',
                            params: ES('JSON', 'stringify', false, {
                                target: p
                            })
                        });
                    };
                    n.prototype.mute = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'mute',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.unmute = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'unmute',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.setVolume = function(p) {
                        'use strict';
                        h.isNumber(p, 'Invalid argument');
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'setVolume',
                            params: ES('JSON', 'stringify', false, {
                                volume: p
                            })
                        });
                    };
                    n.prototype.isMuted = function() {
                        'use strict';
                        return this.$VideoController3.isMuted();
                    };
                    n.prototype.getVolume = function() {
                        'use strict';
                        return this.$VideoController3.getVolume();
                    };
                    n.prototype.getCurrentPosition = function() {
                        'use strict';
                        return this.$VideoController3.getCurrentPosition();
                    };
                    n.prototype.getDuration = function() {
                        'use strict';
                        return this.$VideoController3.getDuration();
                    };
                    n.prototype.subscribe = function(event, p) {
                        'use strict';
                        h.isString(event, 'Invalid argument');
                        h.isFunction(p, 'Invalid argument');
                        this.$VideoController2.subscribe(event, p);
                        return {
                            release: ES(function() {
                                this.$VideoController2.unsubscribe(event, p);
                            }, 'bind', true, this)
                        };
                    };
                    var o = j.extend({
                        constructor: function(p, q, r, s) {
                            this.parent(p, q, r, s);
                            this._videoController = null;
                            this._sharedObservable = null;
                            this._sharedVideoCache = null;
                            this.subscribe('xd.onVideoAPIReady', function(t) {
                                this._sharedObservable = new k();
                                this._sharedVideoCache = new m(ES('JSON', 'parse', false, t.data));
                                this._videoController = new n(this._iframeOptions.name, this._sharedObservable, this._sharedVideoCache);
                                i.fire('xfbml.ready', {
                                    type: 'video',
                                    id: s.id,
                                    instance: this._videoController
                                });
                            });
                            this.subscribe('xd.stateChange', function(t) {
                                this._sharedObservable.inform(t.state);
                            });
                            this.subscribe('xd.cachedStateUpdateRequest', function(t) {
                                this._sharedVideoCache.update(ES('JSON', 'parse', false, t.data));
                            });
                        },
                        getParams: function() {
                            return {
                                allowfullscreen: 'bool',
                                autoplay: 'bool',
                                controls: 'bool',
                                href: 'url',
                                show_text: 'bool'
                            };
                        },
                        getConfig: function() {
                            return {
                                fluid: true,
                                full_width: true
                            };
                        }
                    });
                    f.exports = o;
                }, null);
                __d('legacy:fb.xfbml', ['Assert', 'sdk.Event', 'FB', 'IframePlugin', 'PluginConfig', 'PluginTags', 'XFBML', 'sdk.domReady', 'sdk.feature', 'wrapFunction', 'sdk.XFBML.Comments', 'sdk.XFBML.CommentsCount', 'sdk.XFBML.LoginButton', 'sdk.XFBML.Name', 'sdk.XFBML.Quote', 'sdk.XFBML.Save', 'sdk.XFBML.ShareButton', 'sdk.XFBML.Video'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                    if (c.__markCompiled) c.__markCompiled();
                    var r = {
                            comments: c('sdk.XFBML.Comments'),
                            comments_count: c('sdk.XFBML.CommentsCount'),
                            login_button: c('sdk.XFBML.LoginButton'),
                            name: c('sdk.XFBML.Name'),
                            quote: c('sdk.XFBML.Quote'),
                            save: c('sdk.XFBML.Save'),
                            share_button: c('sdk.XFBML.ShareButton'),
                            video: c('sdk.XFBML.Video')
                        },
                        s = p('plugin_tags_blacklist', []);
                    ES(ES('Object', 'keys', false, m), 'forEach', true, function(u) {
                        if (ES(s, 'indexOf', true, u) !== -1) return;
                        n.registerTag({
                            xmlns: 'fb',
                            localName: u.replace(/_/g, '-'),
                            ctor: k.withParams(m[u], l[u])
                        });
                    });
                    ES(ES('Object', 'keys', false, r), 'forEach', true, function(u) {
                        if (ES(s, 'indexOf', true, u) !== -1) return;
                        n.registerTag({
                            xmlns: 'fb',
                            localName: u.replace(/_/g, '-'),
                            ctor: r[u]
                        });
                    });
                    j.provide('XFBML', {
                        parse: function(u) {
                            h.maybeXfbml(u, 'Invalid argument');
                            if (u && u.nodeType === 9) u = u.body;
                            return n.parse.apply(null, arguments);
                        }
                    });
                    n.subscribe('parse', ES(i.fire, 'bind', true, i, 'xfbml.parse'));
                    n.subscribe('render', ES(i.fire, 'bind', true, i, 'xfbml.render'));
                    i.subscribe('init:post', function(u) {
                        if (u.xfbml) setTimeout(q(ES(o, 'bind', true, null, n.parse), 'entry', 'init:post:xfbml.parse'), 0);
                    });
                    h.define('Xfbml', function(u) {
                        return (u.nodeType === 1 || u.nodeType === 9) && typeof u.nodeName === 'string';
                    });
                    try {
                        if (document.namespaces && !document.namespaces.item.fb) document.namespaces.add('fb');
                    } catch (t) {}
                }, 3);
            }
        }).call(global);
    })(window.inDapIF ? parent.window : window, window);
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"2300520","namespace":"FB","message":"' + e.message + '"}}');
}
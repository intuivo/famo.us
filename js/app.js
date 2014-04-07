
//define l as undefined, p as true, s as null, w as false, da as undefined, and C as undefined
var l = void 0, p = !0, s = null, w = !1, da, C;
function ea(c, k) {
	//define  allt he letters c,k   and   j, f, h, e, a, b, d, g, x,  as undefined
	//if k has something I supouse adn 
    var j, f, h, e, a, b, d, g, x, q = k && k.split("/"), t = I.map, F = t && t["*"] || {};
    if (c && "." === c.charAt(0) && k) {
        q = q.slice(0, q.length - 1);
        c = q.concat(c.split("/"));
        for (g = 0; g < c.length; g += 1)if (j = c[g], "." === j)c.splice(g, 1), g -= 1; else if (".." === j)if (1 === g && (".." === c[2] || ".." === c[0]))break; else 0 < g && (c.splice(g - 1, 2), g -= 2);
        c = c.join("/")
    }
    if ((q || F) && t) {
        j = c.split("/");
        for (g = j.length; 0 < g; g -= 1) {
            f = j.slice(0, g).join("/");
            if (q)for (x = q.length; 0 < x; x -= 1)if (h = t[q.slice(0, x).join("/")])if (h = h[f]) {
                e = h;
                a = g;
                break
            }
            if (e)break;
            !b && (F && F[f]) && (b = F[f], d = g)
        }
        !e && b && (e = b, a = d);
        e && (j.splice(0, a, e), c = j.join("/"))
    }
    return c
}
function oa(c, k) {
    return function () {
        return pa.apply(l, qa.call(arguments, 0).concat([c, k]))
    }
}
function Ia(c) {
    return function (k) {
        Y[c] = k
    }
}
function Ja(c) {
    if (eb.hasOwnProperty(c)) {
        var k = eb[c];
        delete eb[c];
        fb[c] = p;
        gb.apply(l, k)
    }
    if (!Y.hasOwnProperty(c) && !fb.hasOwnProperty(c))throw Error("No " + c);
    return Y[c]
}
function Cb(c) {
    var k, j = c ? c.indexOf("!") : -1;
    -1 < j && (k = c.substring(0, j), c = c.substring(j + 1, c.length));
    return[k, c]
}

//define db & pa & Db & Z as undefined, define Y & eb & I & fb as  objects {} and qa as the function slice from array object Array().slice or [].slice
var gb, pa, Db, Z, Y = {}, eb = {}, I = {}, fb = {}, qa = [].slice;

	Db = function (c, k) {
    var j, f = Cb(c), h = f[0], c = f[1];
    h && (h = ea(h, k), j = Ja(h));
    h ? c = j && j.normalize ? j.normalize(c, function (e) {
        return ea(e, k)
    }) : ea(c, k) : (c = ea(c, k), f = Cb(c), h = f[0], c = f[1], h && (j = Ja(h)));
    return{Zd: h ? h + "!" + c : c, Vf: c, Dg: h, re: j}
};
Z = {Yf: function (c) {
    return oa(c)
}, e: function (c) {
    var k = Y[c];
    return"undefined" !== typeof k ? k : Y[c] = {}
}, Tf: function (c) {
    return{id: c, uri: "", e: Y[c], Ic: function () {
        return I && I.Ic && I.Ic[c] || {}
    }}
}};
gb = function (c, k, j, f) {
    var h, e, a, b, d = [], g, f = f || c;
    if ("function" === typeof j) {
        k = !k.length && j.length ? ["require", "exports", "module"] : k;
        for (b = 0; b < k.length; b += 1)if (a = Db(k[b], f), e = a.Zd, "require" === e)d[b] = Z.Yf(c); else if ("exports" === e)d[b] = Z.e(c), g = p; else if ("module" === e)h = d[b] = Z.Tf(c); else if (Y.hasOwnProperty(e) || eb.hasOwnProperty(e) || fb.hasOwnProperty(e))d[b] = Ja(e); else if (a.re)a.re.load(a.Vf, oa(f, p), Ia(e), {}), d[b] = Y[e]; else throw Error(c + " missing " + e);
        k = j.apply(Y[c], d);
        if (c)if (h && h.e !== l && h.e !== Y[c])Y[c] =
            h.e; else if (k !== l || !g)Y[c] = k
    } else c && (Y[c] = j)
};
da = pa = function (c, k, j, f, h) {
    if ("string" === typeof c)return Z[c] ? Z[c](k) : Ja(Db(c, k).Zd);
    c.splice || (I = c, k.splice ? (c = k, k = j, j = s) : c = l);
    k = k || function () {
    };
    "function" === typeof j && (j = f, f = h);
    f ? gb(l, c, k, j) : setTimeout(function () {
        gb(l, c, k, j)
    }, 15);
    return pa
};
pa.Ic = function (c) {
    I = c;
    return pa
};
C = function (c, k, j) {
    k.splice || (j = k, k = []);
    eb[c] = [c, k, j]
};
C.ng = {ug: p};
C("5/1e", function () {
});
C("0/a", ["require", "exports", "module"], function (c, k, j) {
    function f(h) {
        this.cd = h;
        this.next = l
    }

    f.prototype = {get: function () {
        return this.cd
    }, f: function (h) {
        h = new f(h);
        this.Fe(h);
        return h
    }, Fe: function (h) {
        this.next = h
    }, execute: function () {
        var h = this.next, e = this.get(), h = h ? h.execute() : l;
        if (e) {
            if ("function" == typeof e)return e(h);
            if (e.z)return e.z(h);
            var h = [], a;
            for (a in e)h.push(e[a].z())
        }
        return h
    }};
    j.e = f
});
C("0/6", ["require", "exports", "module"], function (c, k, j) {
    function f(h) {
        this.Tc = [];
        h && (this.Tc = h.slice(0));
        this.fc = {}
    }

    f.prototype = {d: function (h, e) {
        e || (e = {});
        e.origin = this;
        for (var a = 0; a < this.Tc.length; a++)this.Tc[a].d(h, e);
        var b = this.fc[h];
        if (b)for (a = 0; a < b.length; a++)b[a].call(this, e)
    }, k: function (h, e) {
        this.fc[h] || (this.fc[h] = []);
        this.fc[h].push(e);
        return this
    }};
    j.e = f
});
C("0/3", ["require", "exports", "module", "./a", "./6"], function (c, k, j) {
    function f(a) {
        this.aa = a;
        this.tc = l;
        this.pb = new e
    }

    var h = c("./a"), e = c("./6");
    f.prototype = {Qb: function (a) {
        return this.tc = new h(a)
    }, update: function () {
        this.tc && this.aa.update(this.tc.execute())
    }, d: function (a, b) {
        this.pb.d(a, b)
    }, k: function (a, b) {
        this.pb.k(a, b)
    }};
    j.e = f
});
C("0/8", ["require", "exports", "module"], function (c, k, j) {
    function f(h) {
        this.cd = h;
        this.next = l
    }

    f.prototype = {get: function () {
        return this.cd
    }, Fe: function (h) {
        this.next = h
    }, d: function (h, e) {
        var a;
        a = this.get().d(h, e);
        a = "object" != typeof a ? [] : "string" == typeof a[0] ? [a] : a;
        var b = [], d = this.next;
        if (d)for (var g = 0; g < a.length; g++)d.d(a[g][0], a[g][1]);
        if (0 != b.length)return 1 == b.length ? b[0] : b
    }};
    j.e = f
});
C("0/7", ["require", "exports", "module", "./8"], function (c, k, j) {
    function f(e) {
        this.Xb = [];
        e && this.m(e)
    }

    var h = c("./8");
    f.prototype = {Ga: function (e) {
        e = new h(e);
        this.Xb.push(e);
        return e
    }, m: function (e) {
        "object" == typeof e && e.d && (e = [e]);
        for (var a = 0; a < e.length; a++)this.Ga(e[a])
    }, reset: function () {
        this.Xb = []
    }, d: function (e, a) {
        a || (a = {});
        a.origin || (a.origin = this);
        for (var b = 0; b < this.Xb.length; b++)this.Xb[b].d(e, a)
    }};
    j.e = f
});
C("0/c", ["require", "exports", "module", "./7", "./6"], function (c, k, j) {
    function f(a, b) {
        this.id = f.qf++;
        this.J = {};
        this.da = {};
        this.content = "";
        this.Ba = w;
        this.classList = [];
        this.Dc = [];
        var d = this;
        this.Wb = function (b) {
            d.d(b.type, b)
        };
        this.Lc = new h;
        this.pb = new e;
        this.size = l;
        "object" == typeof a && this.pa(a);
        "undefined" != typeof b && this.R(b);
        f.he[this.id] = this
    }

    var h = c("./7"), e = c("./6");
    f.qf = 0;
    f.he = {};
    f.get = function (a) {
        return f.he[a]
    };
    f.Qe = ["touchstart", "touchmove", "touchend", "touchcancel", "click"];
    f.prototype = {k: function (a, b) {
        this.pb.k(a, b)
    }, d: function (a, b) {
        b && (b.origin = this);
        this.pb.d(a, b);
        this.Lc.d(a, b)
    }, z: function () {
        return this.id
    }, m: function (a) {
        return this.Lc = new h(a)
    }, Bb: function (a) {
        for (n in a)a.hasOwnProperty(n) && (this.da[n] = a[n], this.Ba = p)
    }, j: function (a) {
        0 > this.classList.indexOf(a) && (this.classList.push(a), this.Ba = p)
    }, R: function (a) {
        this.content != a && (this.content = a, this.Ba = p)
    }, cf: function (a) {
        for (var b in this.J)this.J.hasOwnProperty(b) && a.addEventListener(b, this.Wb);
        b = f.Qe;
        for (var d = 0; d < b.length; d++)a.addEventListener(b[d],
            this.Wb)
    }, gf: function (a) {
        for (var b in this.J)this.J.hasOwnProperty(b) && a.removeEventListener(b, this.Wb);
        b = f.Qe;
        for (var d = 0; d < b.length; d++)a.removeEventListener(b[d], this.Wb)
    }, Gd: function (a) {
        for (var b = 0; b < this.Dc.length; b++)a.classList.remove(this.Dc[b]);
        this.Dc = []
    }, dg: function (a) {
        this.size ? (a.style.width = this.size[0] + "px", a.style.height = this.size[1] + "px") : this.Cc = l;
        for (var b in this.da)this.da.hasOwnProperty(b) && (a.style[b] = this.da[b]);
        b = this.classList;
        this.Gd(a);
        for (var d = 0; d < b.length; d++)a.classList.add(b[d]);
        this.Rd(a);
        this.cf(a);
        this.Ba = w;
        this.Kb = a
    }, of: function (a) {
        this.nd();
        a.style.width = "";
        a.style.height = "";
        for (var b in this.da)this.da.hasOwnProperty(b) && (a.style[b] = "");
        b = this.classList;
        this.Gd(a);
        for (var d = 0; d < b.length; d++)a.classList.remove(b[d]);
        this.gf(a);
        this.Kb = l
    }, Rd: function (a) {
        a.innerHTML = this.content;
        this.d("deploy", a)
    }, nd: function () {
    }, Sc: function () {
        if (this.size)return this.size.slice(0);
        if (this.Kb) {
            if (this.Cc)return this.Cc.slice(0);
            var a = this.Kb.offsetWidth, b = this.Kb.offsetHeight;
            a && b && (this.Cc =
                [a, b]);
            return[a, b]
        }
        return[0, 0]
    }, pa: function (a) {
        this.size = a.slice(0, 2);
        this.Ba = p
    }};
    j.e = f
});
C("0/9", ["require", "exports", "module"], function (c, k, j) {
    var f = {precision: 1E-6, W: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], yg: function e(a, b) {
        var d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        d[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
        d[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
        d[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
        d[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
        d[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
        d[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
        d[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
        d[7] =
            a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
        d[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
        d[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
        d[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
        d[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
        d[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
        d[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
        d[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
        d[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
        return 2 >= arguments.length ? d : e.apply(s, [d].concat(Array.prototype.slice.call(arguments,
            2)))
    }, multiply: function a(b, d) {
        var g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        g[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8];
        g[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9];
        g[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10];
        g[4] = b[4] * d[0] + b[5] * d[4] + b[6] * d[8];
        g[5] = b[4] * d[1] + b[5] * d[5] + b[6] * d[9];
        g[6] = b[4] * d[2] + b[5] * d[6] + b[6] * d[10];
        g[8] = b[8] * d[0] + b[9] * d[4] + b[10] * d[8];
        g[9] = b[8] * d[1] + b[9] * d[5] + b[10] * d[9];
        g[10] = b[8] * d[2] + b[9] * d[6] + b[10] * d[10];
        g[12] = b[12] * d[0] + b[13] * d[4] + b[14] * d[8] + d[12];
        g[13] = b[12] * d[1] + b[13] * d[5] + b[14] * d[9] + d[13];
        g[14] = b[12] * d[2] + b[13] *
            d[6] + b[14] * d[10] + d[14];
        return 2 >= arguments.length ? g : a.apply(s, [g].concat(Array.prototype.slice.call(arguments, 2)))
    }, move: function (a, b) {
        b[2] || (b[2] = 0);
        return[a[0], a[1], a[2], 0, a[4], a[5], a[6], 0, a[8], a[9], a[10], 0, a[12] + b[0], a[13] + b[1], a[14] + b[2], 1]
    }, translate: function (a, b, d) {
        "number" != typeof d && (d = 0);
        return[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a, b, d, 1]
    }, scale: function (a, b, d) {
        "number" != typeof d && (d = 1);
        return[a, 0, 0, 0, 0, b, 0, 0, 0, 0, d, 0, 0, 0, 0, 1]
    }, Ce: function (a) {
        var b = Math.cos(a), a = Math.sin(a);
        return[1, 0, 0, 0, 0, b, a, 0, 0, -a,
            b, 0, 0, 0, 0, 1]
    }, Za: function (a) {
        var b = Math.cos(a), a = Math.sin(a);
        return[b, 0, -a, 0, 0, 1, 0, 0, a, 0, b, 0, 0, 0, 0, 1]
    }, vd: function (a) {
        var b = Math.cos(a), a = Math.sin(a);
        return[b, a, 0, 0, -a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }, rotate: function (a, b, d) {
        var g = Math.cos(a), a = Math.sin(a), c = Math.cos(b), b = Math.sin(b), f = Math.cos(d), d = Math.sin(d), t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        t[0] = c * f;
        t[1] = g * d + a * b * f;
        t[2] = a * d - g * b * f;
        t[4] = -c * d;
        t[5] = g * f - a * b * d;
        t[6] = a * f + g * b * d;
        t[8] = b;
        t[9] = -a * c;
        t[10] = g * c;
        return t
    }, zf: function (a) {
        for (var a = a.slice(0), b = 0; b < a.length; b++)Math.abs(a[b]) <
            f.precision && (a[b] = 0);
        return"matrix3d(" + a.join() + ")"
    }, Ja: function (a, b, d) {
        return[1, 0, 0, 0, Math.tan(d), 1, 0, 0, Math.tan(b), Math.tan(a), 1, 0, 0, 0, 0, 1]
    }, Ta: function (a) {
        return[a[12], a[13], a[14]]
    }, inverse: function (a) {
        var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], d = a[5] * a[10] - a[6] * a[9], g = a[4] * a[10] - a[6] * a[8], c = a[4] * a[9] - a[5] * a[8], f = a[1] * a[10] - a[2] * a[9], t = a[0] * a[10] - a[2] * a[8], j = a[0] * a[9] - a[1] * a[8], y = a[1] * a[6] - a[2] * a[5], k = a[0] * a[6] - a[2] * a[4], D = a[0] * a[5] - a[1] * a[4], v = 1 / (a[0] * d - a[1] * g + a[2] * c);
        b[0] = v * d;
        b[1] = -v * f;
        b[2] = v *
            y;
        b[4] = -v * g;
        b[5] = v * t;
        b[6] = -v * k;
        b[8] = v * c;
        b[9] = -v * j;
        b[10] = v * D;
        b[12] = -a[12] * b[0] - a[13] * b[4] - a[14] * b[8];
        b[13] = -a[12] * b[1] - a[13] * b[5] - a[14] * b[9];
        b[14] = -a[12] * b[2] - a[13] * b[6] - a[14] * b[10];
        return b
    }, ka: function (a) {
        function b(b) {
            return 2 == b.length ? b[0] * b[0] + b[1] * b[1] : b[0] * b[0] + b[1] * b[1] + b[2] * b[2]
        }

        var d = [a[0], a[1], a[2]], g = [d[0] + (0 > d[0] ? -1 : 1) * Math.sqrt(b(d)), d[1], d[2]], c = 2 / b(g), d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        d[0] = 1 - c * g[0] * g[0];
        d[5] = 1 - c * g[1] * g[1];
        d[10] = 1 - c * g[2] * g[2];
        d[1] = -c * g[0] * g[1];
        d[2] = -c * g[0] * g[2];
        d[6] =
            -c * g[1] * g[2];
        d[4] = d[1];
        d[8] = d[2];
        d[9] = d[6];
        var g = f.multiply(a, d), g = [g[5], g[6]], g = [g[0] + (0 > g[0] ? -1 : 1) * Math.sqrt(b(g)), g[1]], c = 2 / b(g), q = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        q[5] = 1 - c * g[0] * g[0];
        q[10] = 1 - c * g[1] * g[1];
        q[6] = -c * g[0] * g[1];
        q[9] = q[6];
        d = f.multiply(d, q);
        g = f.multiply(a, d);
        c = f.scale(0 > g[0] ? -1 : 1, 0 > g[5] ? -1 : 1, 0 > g[10] ? -1 : 1);
        g = f.multiply(c, g);
        d = f.multiply(d, c);
        c = {};
        c.translate = f.Ta(a);
        c.rotate = [Math.atan2(-d[6], d[10]), Math.asin(d[2]), Math.atan2(-d[1], d[0])];
        c.rotate[0] || (c.rotate[0] = 0, c.rotate[2] = Math.atan2(d[4],
            d[5]));
        c.scale = [g[0], g[5], g[10]];
        c.Ja = [Math.atan(g[9] / c.scale[2]), Math.atan(g[8] / c.scale[2]), Math.atan(g[4] / c.scale[0])];
        return c
    }, mf: function (a) {
        var b = f.scale(a.scale[0], a.scale[1], a.scale[2]), d = f.Ja(a.Ja[0], a.Ja[1], a.Ja[2]), g = f.rotate(a.rotate[0], a.rotate[1], a.rotate[2]);
        return f.move(f.multiply(b, d, g), a.translate)
    }, Yd: function (a, b) {
        if (!a || !b)return w;
        if (a == b)return p;
        for (var d = 0; d < a.length; d++)if (Math.abs(a[d] - b[d]) >= f.precision)return w;
        return p
    }, bd: function (a) {
        a = a.slice(0);
        if (a[0] == Math.PI / 2 ||
            a[0] == -Math.PI / 2)a[0] = -a[0], a[1] = Math.PI - a[1], a[2] -= Math.PI;
        a[0] > Math.PI / 2 && (a[0] -= Math.PI, a[1] = Math.PI - a[1], a[2] -= Math.PI);
        a[0] < -Math.PI / 2 && (a[0] += Math.PI, a[1] = -Math.PI - a[1], a[2] -= Math.PI);
        for (; a[1] < -Math.PI;)a[1] += 2 * Math.PI;
        for (; a[1] >= Math.PI;)a[1] -= 2 * Math.PI;
        for (; a[2] < -Math.PI;)a[2] += 2 * Math.PI;
        for (; a[2] >= Math.PI;)a[2] -= 2 * Math.PI;
        return a
    }};
    j.e = f
});
C("0/b", ["require", "exports", "module", "./9"], function (c, k, j) {
    function f() {
        this.reset()
    }

    var h = c("./9");
    f.prototype = {parse: function (e) {
        this.reset();
        this.Lb(e);
        return{C: this.C, n: this.n, tb: this.tb, lc: this.lc, sb: this.sb, ac: this.ac, cc: this.cc}
    }, reset: function () {
        this.lc = {};
        this.C = {};
        this.ac = {};
        this.n = {};
        this.tb = {};
        this.sb = {};
        this.cc = {};
        this.ce = 0
    }, Lb: function (e, a, b, d, g) {
        b || (b = h.W);
        "number" != typeof d && (d = 1);
        if ("number" == typeof e)this.C[e] = b, this.lc[e] = d, g && (this.ac[e] = g), a && (this.n[e] = a); else if (e)if ("number" == typeof e.length)for (var c = 0; c < e.length; c++)this.Lb(e[c], a, b, d, g); else if ("undefined" != typeof e.target) {
            var c = e.target, f = b, t = d, j = e.group;
            "object" == typeof e.transform && (f = h.multiply(e.transform, b));
            "number" == typeof e.opacity && (t = d * e.opacity);
            "undefined" != typeof e.Da && (g = e.Da);
            j ? (this.ce++, e = this.ce, this.tb[e] = a ? h.multiply(f, this.tb[a]) : f, this.sb[e] = a ? this.sb[a] * t : t, g && (this.cc[e] = g), this.Lb(c, e, h.W, 1, g)) : this.Lb(c, a, f, t, g)
        }
    }};
    j.e = f
});
C("0/f", ["require", "exports", "module"], function (c, k, j) {
    function f(b) {
        this.ia = s;
        this.Nb = [];
        this.Hc = [];
        this.le = 0;
        this.Ha({duration: 500, h: function (b) {
            return b
        }});
        this.set(b)
    }

    function h() {
        0 >= this.Nb.length ? this.set(this.state) : (this.ia = this.Nb.shift(), this.startTime = (new Date).getTime(), this.Oe = e(this.state))
    }

    function e(b) {
        if ("object" == typeof b) {
            if (b.slice)return b.slice(0);
            var a = {}, g;
            for (g in b)b.hasOwnProperty(g) && (a[g] = b[g]);
            return a
        }
        return b
    }

    var a = {};
    f.Ya = function (b, d) {
        a[b] || (a[b] = d)
    };
    f.Fg = function (b) {
        return a[b] ?
            (delete a[b], p) : w
    };
    f.Cf = function (b) {
        return a[b]
    };
    f.prototype = {Ha: function (b) {
        this.Qd = {};
        for (var a in b)this.Qd[a] = b[a]
    }, set: function (b, a, g) {
        if (a) {
            var c = this.Qd, q = {h: c.h};
            c.duration && (q.duration = c.duration);
            c.speed && (q.speed = c.speed);
            "object" == typeof a && ("number" == typeof a.duration && (q.duration = a.duration), a.h && (q.h = a.h), a.speed && (q.speed = a.speed));
            "string" == typeof q.h && (q.h = f.Cf(q.h));
            a = q;
            if (a.speed) {
                c = this.get();
                q = 0;
                if ("object" == typeof c)for (var t in c)q += Math.pow(b[t] - c[t], 2); else q = Math.pow(b -
                    c, 2);
                a.duration = Math.sqrt(q) / a.speed
            }
            this.Nb.push([b, a.duration, a.h]);
            this.Hc.push(g);
            this.ia || h.call(this)
        } else this.startTime = 0, this.Oe = this.state = e(b), this.ia = s, this.Nb = [], this.Hc = [], g && g()
    }, get: function (b) {
        this.update(b);
        return this.state
    }, update: function (b) {
        if (this.ia && (b || (b = (new Date).getTime()), this.le != b)) {
            this.le = b;
            var a = this.Oe, g = this.ia[0], e = this.ia[2], b = (b - this.startTime) / this.ia[1], c = Math.min(Math.max(b, 0), 1);
            if ("object" == typeof this.state)for (var f in this.state) {
                var j = this.state, y =
                    f, k = e(c);
                j[y] = (1 - k) * a[f] + k * g[f]
            } else e = e(c), this.state = (1 - e) * a + e * g;
            1 <= b && (a = this.Hc.shift(), h.call(this), a && a())
        }
    }, ec: function () {
        return!!this.ia
    }, o: function () {
        this.set(this.get())
    }};
    j.e = f
});
C("0/g", ["require", "exports", "module", "./f"], function (c, k, j) {
    c = c("./f");
    k = {Qf: function (c) {
        return c
    }, Ud: function (c) {
        return c * c
    }, Ca: function (c) {
        return c * (2 - c)
    }, Qa: function (c) {
        return 0.5 >= c ? 2 * c * c : -2 * c * c + 4 * c - 1
    }, Vd: function (c) {
        return c * (3 - 2 * c)
    }, hb: function (c) {
        return(1 - c) * Math.sin(6 * Math.PI * c) + c
    }};
    c.Ya("linear", k.Qf);
    c.Ya("easeIn", k.Ud);
    c.Ya("easeOut", k.Ca);
    c.Ya("easeInOut", k.Qa);
    c.Ya("easeOutBounce", k.Vd);
    c.Ya("spring", k.hb);
    j.e = {H: k, dd: {tl: [0, 0], t: [0.5, 0], tr: [1, 0], l: [0, 0.5], c: [0.5, 0.5], r: [1, 0.5], bl: [0,
        1], b: [0.5, 1], br: [1, 1]}}
});
C("0/d", "require exports module ./c ./9 ./b ./g".split(" "), function (c, k, j) {
    function f(a, b) {
        this.P = a;
        this.Y = {};
        this.ic = {};
        this.Yc = {};
        this.jc = {};
        this.ad = {};
        this.kc = {};
        this.$c = {};
        this.Va = {};
        this.n = {};
        this.sf = {P: this.P, lb: [], Zc: 0};
        this.a = b;
        this.a || (this.a = {});
        this.a.Pe || (this.a.Pe = "surface");
        this.a.be || (this.a.be = "group");
        this.a.oe || (this.a.oe = 30);
        this.a.dc || (this.a.dc = 0);
        this.a.Da || (this.a.Da = "c");
        this.a.size || (this.a.size = [a.offsetWidth, a.offsetHeight])
    }

    function h(a, b) {
        var g = d.zf(b);
        q ? a.style.webkitTransform =
            g : a.style.transform = g
    }

    function e(a, b) {
        return!a && !b ? p : !a || !b ? w : a[0] == b[0] && a[1] == b[1]
    }

    function a(a, b) {
        b = b || this.a.Da;
        "string" == typeof b && (b = x.dd[b]);
        return 0 === b[0] && 0 === b[1] ? a : d.move(a, [b[0] * this.a.size[0], b[1] * this.a.size[1], 0])
    }

    var b = c("./c"), d = c("./9"), g = c("./b"), x = c("./g"), q = document.body.style.webkitTransform !== l;
    f.prototype = {update: function (b) {
        var a = (new g).parse(b), b = a.C, d = a.n, e = a.lc, c = a.ac, h = a.tb, f = a.sb, a = a.cc, x = {}, q = [], j;
        for (j in d)if (d.hasOwnProperty(j)) {
            var k = this.Va[j];
            k && (x.hasOwnProperty(k) ?
                q.push(k) : x[k] = d[j])
        }
        for (j = 0; j < q.length; j++)x.hasOwnProperty(q[j]) && delete x[q[j]];
        for (var m in this.Va)this.Va.hasOwnProperty(m) && (this.Va[m] = x[this.Va[m]]);
        j = {};
        for (m in this.n)if (this.n.hasOwnProperty(m))if (x.hasOwnProperty(m)) {
            j.hasOwnProperty(x[m]) || (j[x[m]] = []);
            for (q = 0; q < this.n[m].length; q++)this.n[m][q].rb = x[m], j[x[m]].push(this.n[m][q])
        } else for (q = 0; q < this.n[m].length; q++)delete this.n[m][q].rb;
        this.n = j;
        for (var u in this.Y)b.hasOwnProperty(u) || this.detach(u);
        for (u in b)this.hg(u, b[u], d[u],
            e[u], c[u]);
        for (u in h)this.gg(u, h[u], f[u], a[u])
    }, gg: function (b, g, e, c) {
        if (b = this.n[b])for (var f = 0; f < b.length; f++) {
            if (!d.Yd(b[f].ne, g)) {
                b[f].ne = g;
                var x = d.multiply(d.translate(0, 0, this.a.dc), a.call(this, g, c));
                h(b[f].P, x)
            }
            b[f].opacity != e && (b[f].opacity = e, b[f].P.style.opacity = e)
        }
    }, jf: function (b, a) {
        this.n[b] || (this.n[b] = []);
        var d = this.n[b];
        a.rb = b;
        d.push(a)
    }, Wf: function (b) {
        this.n.hasOwnProperty(b) || (this.n[b] = []);
        for (var a = this.n[b], d = 0, g = this.a.oe; d < a.length && !(0 < a[d].lb.length || a[d].Zc < g);)d++;
        d >= a.length &&
        (g = document.createElement("div"), g.classList.add(this.a.be), this.P.appendChild(g), a.push({rb: b, P: g, Zc: 0, lb: []}));
        return a[d]
    }, hg: function (g, c, f, q, j) {
        var k = b.get(g), A = this.Yc[g];
        A && f && (A.rb || this.jf(f, A), A.rb != f && this.detach(g));
        this.Va[g] = f;
        this.Y[g] || this.hf(g, f);
        A = this.Y[g];
        if (k.Ba || this.ic[g])k.dg(A), this.ic[g] = w;
        k = k.Sc();
        if (!e(k, this.ad[g]) || !e(j, this.$c[g]) || !d.Yd(c, this.jc[g])) {
            this.jc[g] = c;
            this.ad[g] = k;
            this.$c[g] = "object" == typeof j ? j.slice(0) : j;
            var G;
            G = j || this.a.Da;
            "string" == typeof G && (G = x.dd[G]);
            c = 0 === G[0] && 0 === G[1] ? c : d.move(c, [-G[0] * k[0], -G[1] * k[1], 0]);
            f ? (f = d.move(c, [0, 0, -this.a.dc]), h(A, f)) : h(A, a.call(this, c, j))
        }
        q != this.kc[g] && (this.kc[g] = q, A.style.opacity = 0.999999 < q ? 0.999999 : q)
    }, hf: function (b, a) {
        var d = a != l ? this.Wf(a) : this.sf, g;
        d.lb.length ? g = d.lb.pop() : (d.Zc++, g = document.createElement("div"), g.classList.add(this.a.Pe), d.P.appendChild(g));
        this.Yc[b] = d;
        this.Y[b] = g;
        this.ic[b] = p;
        return g
    }, detach: function (a) {
        var g = this.Y[a];
        delete this.Y[a];
        delete this.jc[a];
        delete this.ad[a];
        delete this.$c[a];
        delete this.kc[a];
        g && (b.get(a).of(g), this.Yc[a].lb.push(g), h(g, d.scale(0, 0, 0)));
        this.ic[a] = p
    }, rc: function (b) {
        this.a.Da = b
    }, pa: function (b) {
        this.a.size = b.slice(0);
        this.jc = {};
        this.kc = {};
        for (var a in this.n)for (var b = this.n[a], d = 0; d < b.length; d++)delete b[d].ne, delete b[d].opacity
    }};
    j.e = f
});
C("0/4", "require exports module ./3 ./7 ./8 ./d".split(" "), function (c, k, j) {
    function f() {
        document.activeElement && "INPUT" == document.activeElement.nodeName ? document.activeElement.addEventListener("blur", function y() {
            this.removeEventListener("blur", y);
            f()
        }) : (window.scrollTo(0, 0), h(function () {
            for (var a = window.innerWidth, d = window.innerHeight, g = 0; g < b.length; g++) {
                b[g].d("resize");
                var e = b[g].aa;
                e && e.pa([a, d])
            }
        }))
    }

    function h(b) {
        g.push(b)
    }

    var e = c("./3"), k = c("./7");
    c("./8");
    var a = c("./d"), b = [], d = [], g = [], x = (new Date).getTime(),
        q = l, t = new k;
    requestAnimationFrame(function y() {
        var a = (new Date).getTime();
        q = 1E3 / (a - x);
        x = a;
        for (a = 0; a < d.length; a++) {
            var e = d[a];
            "function" == typeof e ? e.call(this) : e.update()
        }
        for (a = 0; a < g.length; a++)g[a].call(this);
        g = [];
        for (a = 0; a < b.length; a++)b[a].update();
        requestAnimationFrame(y)
    });
    window.addEventListener("resize", f);
    f();
    window.addEventListener("touchmove", function (a) {
        a.preventDefault()
    });
    c = "touchstart touchmove touchend touchcancel click keydown keyup keypress mouseenter mousemove mouseleave".split(" ");
    for (k = 0; k < c.length; k++)(function (a) {
        document.body.addEventListener(a, function (b) {
            t.d(a, b)
        })
    }).call(this, c[k]);
    j.e = {I: function (a) {
        0 > d.indexOf(a) && d.push(a)
    }, zb: function (a) {
        a = d.indexOf(a);
        0 <= a && d.splice(a, 1)
    }, wd: function (a) {
        d = a.slice(0)
    }, m: function (a) {
        return t.m(a)
    }, Ga: function (a) {
        return t.Ga(a)
    }, Zf: function () {
        return eventMultiplex.Zf()
    }, Pd: function (d) {
        d || (d = document.createElement("div"), console.warn("Tried to create context on non-existent element"));
        var g = d.aa ? d.aa : new a(d, {dc: -1E5});
        d.aa = g;
        d = new e(g);
        b.push(d);
        return d
    }, sg: function () {
        return q
    }, Xc: h}
});
C("0/2", "require exports module ./d ./c ./a".split(" "), function (c, k, j) {
    function f() {
        e.apply(this, arguments);
        this.P = document.createElement("div");
        this.P.classList.add("container-surface");
        this.Vb = document.createElement("div");
        this.Vb.appendChild(this.P);
        this.aa = new h(this.P, {size: this.size});
        this.Ba = p;
        this.Rb = l
    }

    var h = c("./d"), e = c("./c"), a = c("./a");
    f.prototype = {Rd: function (a) {
        if (this.Pa) {
            if (this.Pa == a)return;
            this.nd()
        }
        a.innerHTML = "";
        this.Pa = a;
        this.Pa.appendChild(this.Vb.removeChild(this.Vb.firstChild))
    }, nd: function () {
        this.Vb.appendChild(this.Pa.removeChild(this.Pa.firstChild));
        this.Pa = l
    }, update: function (a) {
        this.aa.update(a)
    }, z: function (a) {
        !a && this.Rb && (a = this.Rb.execute());
        this.update(a);
        return e.prototype.z.call(this)
    }, Qb: function (b) {
        return this.Rb = new a(b)
    }, rc: function (a) {
        this.aa.rc(a)
    }, pa: function (a) {
        e.prototype.pa.apply(this, arguments);
        this.aa && this.aa.pa(a)
    }};
    for (var b in e.prototype)e.prototype.hasOwnProperty(b) && !f.prototype.hasOwnProperty(b) && (f.prototype[b] = e.prototype[b]);
    j.e = f
});
C("0/e", "require exports module ./9 ./f ./g".split(" "), function (c, k, j) {
    function f(d, e, c) {
        d || (d = a.W);
        "number" != typeof e && (e = 1);
        this.va = new b([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]);
        this.mc = new b(e);
        this.bc = new b([0, 0]);
        this.setTransform(d);
        this.ab(e);
        this.rc(c)
    }

    function h(a) {
        return[].concat(a.translate, a.rotate, a.Ja, a.scale)
    }

    function e(a) {
        return{translate: [a[0], a[1], a[2]], rotate: [a[3], a[4], a[5]], Ja: [a[6], a[7], a[8]], scale: [a[9], a[10], a[11]]}
    }

    var a = c("./9"), b = c("./f"), d = c("./g");
    f.prototype = {V: function () {
        return this.va.ec() ?
            a.mf(e(this.va.get())) : this.Pc
    }, setTransform: function (b, d, e) {
        d ? (this.Ld && (this.va.set(h(a.ka(this.Pc))), this.Ld = w), this.va.set(h(a.ka(b)), d, e)) : (this.va.o(), this.Ld = p);
        this.Pc = b
    }, Rc: function () {
        return this.mc.get()
    }, ab: function (a, b, d) {
        this.mc.set(a, b, d)
    }, Df: function () {
        return this.bc.get()
    }, rc: function (a, b, e) {
        "string" == typeof a && (a = d.dd[a]);
        this.bc.set(a, b, e)
    }, De: function (a) {
        this.va.Ha(a);
        this.mc.Ha(a);
        this.bc.Ha(a)
    }, o: function () {
        this.va.o();
        this.mc.o();
        this.bc.o()
    }, vb: function () {
        return this.va.ec()
    },
        z: function (a) {
            return{transform: this.V(), opacity: this.Rc(), Da: this.Df(), target: a}
        }};
    j.e = f
});
C("0/1", ["require", "exports", "module", "./a"], function (c, k, j) {
    function f() {
        this.reset()
    }

    var h = c("./a");
    f.prototype = {i: function (e) {
        e = new h(e);
        this.Y.push(e);
        return e
    }, reset: function () {
        this.Y = []
    }, z: function () {
        for (var e = [], a = 0; a < this.Y.length; a++)e.push(this.Y[a].execute());
        return e
    }};
    j.e = f
});
C("0/5", ["require", "exports", "module", "./8", "./7"], function (c, k, j) {
    function f() {
    }

    function h(a) {
        this.Sb = {};
        this.Jc = a
    }

    c("./8");
    var e = c("./7");
    f.prototype.d = function (a, b) {
        return[a, b]
    };
    h.prototype = {Ia: function (a) {
        this.Jc = a
    }, Q: function (a) {
        this.Sb[a] || (this.Sb[a] = new e(new f));
        return this.Sb[a]
    }, d: function (a, b) {
        if ("undefined" != typeof this.Jc) {
            b || (b = {});
            b.origin = this;
            var d = this.Sb[this.Jc];
            if (d)return d.d(a, b)
        }
    }};
    j.e = h
});
C("1/i", "require exports module 0/9 0/f 0/g".split(" "), function (c, k, j) {
    function f(b) {
        this.a = b;
        this.a || (this.a = {});
        this.a.hasOwnProperty("xBounds") || (this.a.yc = [-Infinity, Infinity]);
        this.a.hasOwnProperty("yBounds") || (this.a.zc = [-Infinity, Infinity]);
        this.a.hasOwnProperty("zBounds") || (this.a.Ac = [-Infinity, Infinity]);
        this.Xa = new e([0, 0, 0]);
        this.$a = new e([0, 0, 0]);
        this.Ka = new e([0, 0, 0]);
        this.Xa.Ha({duration: 3E3, h: a.H.Ca});
        this.$a.Ha({duration: 1E3, h: a.H.Ca});
        this.Ka.Ha({duration: 1E3, h: a.H.Ca})
    }

    var h = c("0/9"),
        e = c("0/f"), a = c("0/g");
    f.prototype = {jb: function () {
        var a = this.Xa.get(), d = this.$a.get(), g = this.Ka.get(), g = h.rotate(-g[0], -g[1], -g[2]), d = h.multiply(h.vd(d[2]), h.Za(d[1]), h.Ce(d[0])), e = h.translate(a[0], a[1], a[2]), a = h.translate(-a[0], -a[1], -a[2]);
        return h.multiply(a, d, e, g, a)
    }, z: function (a) {
        a || (a = []);
        return{transform: this.jb(), target: a, group: p}
    }, vb: function () {
        return this.Xa.ec() || this.Ka.ec()
    }, o: function () {
        this.Xa.o();
        this.$a.o();
        this.Ka.o()
    }, K: function () {
        return this.Xa.get()
    }, A: function (a, d, g) {
        a[0] < this.a.yc[0] &&
        (a[0] = this.a.yc[0]);
        a[0] > this.a.yc[1] && (a[0] = this.a.yc[1]);
        a[1] < this.a.zc[0] && (a[1] = this.a.zc[0]);
        a[1] > this.a.zc[1] && (a[1] = this.a.zc[1]);
        a[2] < this.a.Ac[0] && (a[2] = this.a.Ac[0]);
        a[2] > this.a.Ac[1] && (a[2] = this.a.Ac[1]);
        this.Xa.set(a, d, g)
    }, ja: function () {
        return this.$a.get()
    }, F: function (a, d, g) {
        if (d) {
            for (var e = this.ja(), c = 0; 3 > c; c++)a[c] > 0.5 * Math.PI && e[c] <= -0.5 * Math.PI && (e[c] += 2 * Math.PI), a[c] < -0.5 * Math.PI && e[c] >= 0.5 * Math.PI && (e[c] -= 2 * Math.PI);
            this.$a.set(e)
        }
        this.$a.set(a, d, g)
    }, Sa: function () {
        return this.Ka.get()
    },
        O: function (a, d, g) {
            if (d) {
                for (var e = this.Sa(), c = 0; 3 > c; c++)a[c] > 0.5 * Math.PI && e[c] <= -0.5 * Math.PI && (e[c] += 2 * Math.PI), a[c] < -0.5 * Math.PI && e[c] >= 0.5 * Math.PI && (e[c] -= 2 * Math.PI);
                this.Ka.set(e)
            }
            this.Ka.set(a, d, g)
        }, pe: function () {
            var a = this.Sa();
            if (a[0] || a[1] || a[2])a = h.ka(h.inverse(this.jb())), this.A(a.translate), this.F([-a.rotate[0], -a.rotate[1], -a.rotate[2]]), this.O([0, 0, 0])
        }, bd: function () {
            var a = this.ja();
            if (a[0] || a[1] || a[2])a = h.ka(this.jb()), this.A([-a.translate[0], -a.translate[1], -a.translate[2]]), this.O([-a.rotate[0],
                -a.rotate[1], -a.rotate[2]]), this.F([0, 0, 0])
        }, Ff: function () {
            var a = this.Sa();
            if (!a[0] && !a[1] && !a[2])return this.ja();
            a = h.ka(h.inverse(this.jb()));
            return[-a.rotate[0], -a.rotate[1], -a.rotate[2]]
        }, Rf: function (a, d, g) {
            var e = h.ka(h.inverse(a)), a = e.translate, e = h.bd(e.rotate);
            this.F([0, 0, 0], d);
            this.O([-e[0], -e[1], -e[2]], d);
            this.A([-a[0], -a[1], -a[2]], d, g)
        }};
    j.e = f
});
C("1/k", ["require", "exports", "module"], function (c, k, j) {
    function f(c) {
        this.g = c
    }

    f.prototype = {move: function (c, e, a) {
        var b = this.g.K();
        this.g.A([b[0] + c[0], b[1] + c[1], b[2] + c[2]], e, a)
    }, rotate: function (c, e, a) {
        var b = this.g.ja();
        this.g.F([b[0] + c[0], b[1] + c[1], b[2] + c[2]], e, a)
    }, v: function (c, e, a) {
        var b = this.g.Sa();
        this.g.O([b[0] + c[0], b[1] + c[1], b[2] + c[2]], e, a)
    }};
    j.e = f
});
C("1/j", ["require", "exports", "module", "./k"], function (c, k, j) {
    function f(a, b) {
        this.g = a;
        this.a = b;
        this.a || (this.a = {});
        this.a.ve || (this.a.ve = 0.8);
        this.a.Se || (this.a.Se = 0.2);
        this.a.Ae || (this.a.Ae = 0.0030);
        this.a.Ie || (this.a.Ie = 0.0030);
        this.a.xe || (this.a.xe = 700);
        this.a.Ue || (this.a.Ue = 1E3);
        this.a.qd || (this.a.qd = 50);
        this.a.yd || (this.a.yd = 50);
        this.a.Re || (this.a.Re = 100);
        this.a.we || (this.a.we = 2E3);
        this.a.Te || (this.a.Te = 2E3);
        this.a.Z || (this.a.Z = 0.5);
        this.a.$ || (this.a.$ = 0.5);
        this.a.Fb || (this.a.Fb = Math.PI / 12);
        this.a.od ||
        (this.a.od = 500);
        this.a.D || (this.a.D = h);
        this.a.ld || (this.a.ld = p);
        this.a.Ve || (this.a.Ve = this.a.ld);
        this.a.ud || (this.a.ud = p);
        this.a.Me || (this.a.Me = this.a.ud);
        this.a.Wa || (this.a.Wa = w);
        this.a.sd || (this.a.sd = w);
        this.a.zd || (this.a.zd = w);
        this.s = new this.a.D(this.g, this.a);
        this.state = s
    }

    var h = c("./k");
    f.Ed = {Na: 1, ha: 2, ga: 3};
    var e = f.Ed;
    f.prototype = {Ab: function () {
        return Math.max(this.g.K()[2] / 300, 1)
    }, kd: function (a) {
        this.g.o();
        this.ma = a.targetTouches[0].pageX;
        this.na = a.targetTouches[0].pageY;
        this.gb = this.fb = 0;
        this.L = (new Date).getTime()
    }, jd: function (a) {
        var b = a.targetTouches[0].pageX, a = a.targetTouches[0].pageY, d = b - this.ma, g = a - this.na;
        this.g.Ff();
        var e = this.a.ve * this.Ab(), d = -e * d, g = -e * g;
        this.a.Wa && (Math.abs(d) > Math.abs(g) && (g = 0), Math.abs(g) > Math.abs(d) && (d = 0));
        this.s.move([d, g, 0]);
        this.ma = b;
        this.na = a;
        b = (new Date).getTime();
        this.fb = d / (b - this.L);
        this.gb = g / (b - this.L);
        this.L = b
    }, hd: function () {
        var a = this.a.xe, b = this.Ab() * this.a.we, d = a * this.fb, a = a * this.gb;
        d > b && (d = b);
        a > b && (a = b);
        d < -b && (d = -b);
        a < -b && (a = -b);
        (d || a) &&
        this.s.move([d, a, 0], this.a.ld)
    }, wc: function (a) {
        this.g.o();
        this.ke = this.Xe(a);
        this.Ge = 0;
        this.L = (new Date).getTime()
    }, vc: function (a) {
        a = this.Xe(a);
        diffDistance = a - this.ke;
        var b = 3 * Math.min(Math.abs(diffDistance) / this.a.Re, 1) + 1;
        dZ = -this.Ab() * b * this.a.Se * diffDistance;
        this.s.move([0, 0, dZ]);
        this.ke = a;
        a = (new Date).getTime();
        b = a - this.L;
        if (1 < b || 0 < b && 0 != dZ)this.Ge = dZ / b;
        this.L = a
    }, uc: function () {
        var a = this.a.Ue * this.Ge, b = this.Ab() * this.a.Te;
        a > b && (a = b);
        a < -b && (a = -b);
        a && this.s.move([0, 0, a], this.a.Ve)
    }, td: function (a) {
        this.g.o();
        var b = a.changedTouches.length - 1;
        this.Hb = a.changedTouches[b].identifier;
        this.ma = a.changedTouches[b].pageX;
        this.na = a.changedTouches[b].pageY;
        this.Be = w
    }, rd: function (a) {
        for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.Hb && (b = a.changedTouches[d]);
        if (b) {
            a = b.pageX;
            b = b.pageY;
            var g = this.a.Ae, d = g * (a - this.ma), g = -g * (b - this.na);
            this.a.sd && (Math.abs(d) > Math.abs(g) && (g = 0), Math.abs(g) > Math.abs(d) && (d = 0));
            this.s.rotate([-g, -d, 0]);
            this.Be = p;
            var e = (new Date).getTime();
            this.fb = d / (e - this.L);
            this.gb = g / (e - this.L);
            this.L = e;
            this.ma = a;
            this.na = b
        }
    }, pd: function (a) {
        for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.Hb && (b = a.changedTouches[d]);
        if (b)if (this.Be) {
            b = this.a.qd;
            a = b * this.fb;
            b *= this.gb;
            a > this.a.Z && (a = this.a.Z);
            b > this.a.Z && (b = this.a.Z);
            a < -this.a.Z && (a = -this.a.Z);
            b < -this.a.Z && (b = -this.a.Z);
            var d = this.g.ja(), g = [d[0] - b, d[1] - a, d[2]];
            Math.abs(g[0]) < this.a.Fb && (b = d[0]);
            Math.abs(g[1]) < this.a.Fb && (a = d[1]);
            (a || b) && this.s.rotate([-b, -a, 0], this.a.ud)
        } else this.Fa()
    },
        Fa: function () {
            this.g.F([0, 0, 0], {duration: this.a.od})
        }, Le: function (a) {
            this.g.o();
            var b = a.changedTouches.length - 1;
            this.Hb = a.changedTouches[b].identifier;
            this.ma = a.changedTouches[b].pageX;
            this.na = a.changedTouches[b].pageY;
            this.Ke = w
        }, Je: function (a) {
            for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.Hb && (b = a.changedTouches[d]);
            if (b) {
                a = b.pageX;
                b = b.pageY;
                var g = this.a.Ie, d = g * (a - this.ma), g = -g * (b - this.na);
                this.a.zd && (Math.abs(d) > Math.abs(g) && (g = 0), Math.abs(g) > Math.abs(d) && (d = 0));
                this.s.v([-g, -d, 0]);
                this.Ke = p;
                var e = (new Date).getTime();
                this.fb = d / (e - this.L);
                this.gb = g / (e - this.L);
                this.L = e;
                this.ma = a;
                this.na = b
            }
        }, He: function (a) {
            for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.Hb && (b = a.changedTouches[d]);
            if (b)if (this.Ke) {
                b = this.a.yd;
                a = b * this.fb;
                b *= this.gb;
                a > this.a.$ && (a = this.a.$);
                b > this.a.$ && (b = this.a.$);
                a < -this.a.$ && (a = -this.a.$);
                b < -this.a.$ && (b = -this.a.$);
                var d = this.g.Sa(), g = [d[0] - b, d[1] - a, d[2]];
                Math.abs(g[0]) < this.a.Fb && (b = d[0]);
                Math.abs(g[1]) <
                    this.a.Fb && (a = d[1]);
                (a || b) && this.s.v([-b, -a, 0], this.a.Me)
            } else this.La()
        }, La: function () {
            this.g.O([0, 0, 0], {duration: this.a.od})
        }, Xe: function (a) {
            var b = a.touches[0], d = a.touches[1], a = d.pageX - b.pageX, b = d.pageY - b.pageY;
            return Math.sqrt(a * a + b * b)
        }, ua: function (a) {
            !this.state && 1 >= a.touches.length ? (this.state = e.Na, this.kd(a)) : this.state != e.ha && 2 == a.touches.length ? (this.state = e.ha, this.wc(a)) : this.state != e.ga && 3 == a.touches.length && (this.state = e.ga, this.td(a))
        }, ta: function (a) {
            this.state == e.Na && this.jd(a);
            this.state ==
                e.ha && this.vc(a);
            this.state == e.ga && this.rd(a)
        }, sa: function (a) {
            this.state == e.Na && (this.hd(a), this.state = s);
            this.state == e.ha && 2 > a.touches.length && (this.uc(a), this.state = s);
            this.state == e.ga && 3 > a.touches.length && (this.pd(a), this.state = s)
        }, d: function (a, b) {
            "touchstart" == a ? this.ua(b) : "touchmove" == a ? this.ta(b) : "touchend" == a && this.sa(b)
        }};
    f.prototype.trigger = f.prototype.d;
    j.e = f
});
C("1/s", ["require", "exports", "module", "./j"], function (c, k, j) {
    function f() {
        h.apply(this, arguments)
    }

    var h = c("./j");
    f.prototype = {ua: function (a) {
        !this.state && 1 >= a.touches.length ? (this.state = "pan", this.kd(a)) : "swim" != this.state && 2 == a.touches.length ? (this.state = "swim", this.wc(a)) : "spin" != this.state && 3 == a.touches.length && (this.state = "spin", this.Le(a))
    }, ta: function (a) {
        "pan" == this.state && this.jd(a);
        "swim" == this.state && this.vc(a);
        "spin" == this.state && this.Je(a)
    }, sa: function (a) {
        "pan" == this.state && (this.hd(a),
            this.state = s);
        "swim" == this.state && 2 > a.touches.length && (this.uc(a), this.state = s);
        "spin" == this.state && 3 > a.touches.length && (this.He(a), this.state = s)
    }, La: function () {
        h.prototype.La.call(this, arguments);
        h.prototype.Fa.call(this, arguments)
    }};
    for (var e in h.prototype)h.prototype.hasOwnProperty(e) && !f.prototype.hasOwnProperty(e) && (f.prototype[e] = h.prototype[e]);
    j.e = f
});
C("1/r", ["require", "exports", "module", "./j", "0/9"], function (c, k, j) {
    function f() {
        h.apply(this, arguments);
        this.a.N || (this.a.N = 0);
        this.a.Pb || (this.a.Pb = [0, 0, 0])
    }

    var h = c("./j"), e = c("0/9");
    f.prototype = {ua: function (a) {
        if (!this.state && 1 >= a.touches.length) {
            var d = e.ka(this.g.jb()), g = this.a.Pb[0] - d.translate[0], c = this.a.Pb[1] - d.translate[1], d = this.a.Pb[2] - d.translate[2];
            Math.sqrt(g * g + c * c + d * d) > this.a.N ? (this.g.bd(), this.state = 4, this.Le(a)) : (this.g.pe(), this.state = 3, this.td(a))
        } else 2 != this.state && 2 == a.touches.length &&
        (this.state = 2, this.wc(a))
    }, ta: function (a) {
        2 == this.state && this.vc(a);
        3 == this.state && this.rd(a);
        4 == this.state && this.Je(a)
    }, sa: function (a) {
        2 == this.state && 2 > a.touches.length && (this.uc(a), this.state = s);
        3 == this.state && (this.pd(a), this.state = s);
        4 == this.state && (this.He(a), this.state = s)
    }, La: function () {
        h.prototype.Fa.call(this, arguments);
        h.prototype.La.call(this, arguments)
    }, Fa: function () {
        h.prototype.Fa.call(this, arguments);
        h.prototype.La.call(this, arguments)
    }};
    for (var a in h.prototype)h.prototype.hasOwnProperty(a) && !f.prototype.hasOwnProperty(a) && (f.prototype[a] = h.prototype[a]);
    j.e = f
});
C("1/p", ["require", "exports", "module", "./j"], function (c, k, j) {
    function f() {
        h.apply(this, arguments)
    }

    var h = c("./j"), e = h.Ed;
    f.prototype = {Ab: function () {
        return 2
    }, ua: function (a) {
        !this.state && 1 >= a.touches.length ? (this.state = e.Na, this.kd(a)) : this.state != e.ha && 2 == a.touches.length ? (this.state = e.ha, this.wc(a)) : this.state != e.ga && 3 == a.touches.length && (this.state = e.ga, this.td(a))
    }, ta: function (a) {
        this.state == e.Na && (this.g.pe(), this.jd(a));
        this.state == e.ha && this.vc(a);
        this.state == e.ga && this.rd(a)
    }, sa: function (a) {
        this.state ==
            e.Na && (this.hd(a), this.state = s);
        this.state == e.ha && 2 > a.touches.length && (this.uc(a), this.state = s);
        this.state == e.ga && 3 > a.touches.length && (this.pd(a), this.state = s)
    }, Fa: function () {
        h.prototype.Fa.call(this, arguments);
        h.prototype.La.call(this, arguments)
    }};
    for (var a in h.prototype)h.prototype.hasOwnProperty(a) && !f.prototype.hasOwnProperty(a) && (f.prototype[a] = h.prototype[a]);
    j.e = f
});
C("1/l", ["require", "exports", "module", "./k"], function (c, k, j) {
    function f(e, a) {
        this.g = e;
        this.a = a;
        this.a || (this.a = {});
        "undefined" == typeof this.a.hc && (this.a.hc = 1);
        "undefined" == typeof this.a.ea && (this.a.ea = 0.0010);
        "undefined" == typeof this.a.fa && (this.a.fa = 0.0010);
        this.a.je || (this.a.je = 500);
        this.a.v || (this.a.v = w);
        this.a.X || (this.a.X = w);
        this.a.la || (this.a.la = w);
        this.a.D || (this.a.D = h);
        this.s = new this.a.D(e, a);
        if (!this.a.rg) {
            var b = this;
            setTimeout(function g() {
                b.update();
                setTimeout(g, 20)
            }, 20)
        }
        this.Vc = (new Date).getTime();
        this.timestamp = (new Date).getTime();
        this.Jd()
    }

    var h = c("./k");
    f.prototype = {Jd: function () {
        this.w = [0, 0, 0];
        this.p = [0, 0, 0];
        this.q = [0, 0, 0]
    }, update: function () {
        var e = (new Date).getTime(), a = e - this.timestamp;
        e - this.Vc > this.a.je && this.Jd();
        (this.w[0] || this.w[1] || this.w[2]) && this.s.move([this.w[0] * this.a.hc * a, this.w[1] * this.a.hc * a, this.w[2] * this.a.hc * a]);
        (this.p[0] || this.p[1] || this.p[2]) && this.s.rotate([this.p[0] * this.a.ea * a, this.p[1] * this.a.ea * a, this.p[2] * this.a.ea * a]);
        (this.q[0] || this.q[1] || this.q[2]) && this.s.v([this.q[0] *
            this.a.fa * a, this.q[1] * this.a.fa * a, this.q[2] * this.a.fa * a]);
        this.timestamp = e
    }, d: function (e, a) {
        function b(a, b) {
            this.a.v ? (38 == a.keyCode ? this.q[0] = -b : 40 == a.keyCode ? this.q[0] = b : 37 == a.keyCode ? this.q[1] = b : 39 == a.keyCode && (this.q[1] = -b), this.a.X && (this.q[1] *= -1), this.a.la && (this.q[0] *= -1)) : (38 == a.keyCode ? this.p[0] = b : 40 == a.keyCode ? this.p[0] = -b : 37 == a.keyCode ? this.p[1] = -b : 39 == a.keyCode && (this.p[1] = b), this.a.X && (this.p[1] *= -1), this.a.la && (this.p[0] *= -1));
            87 == a.keyCode ? a.shiftKey ? this.w[1] = -b : this.w[2] = -b : 65 == a.keyCode ?
                this.w[0] = -b : 83 == a.keyCode ? a.shiftKey ? this.w[1] = b : this.w[2] = b : 68 == a.keyCode && (this.w[0] = b)
        }

        "keydown" == e ? (this.Vc = (new Date).getTime(), b.call(this, a, 1), this.update()) : "keyup" == e && b.call(this, a, 0)
    }};
    f.prototype.trigger = f.prototype.d;
    j.e = f
});
C("1/q", ["require", "exports", "module", "./k", "./l"], function (c, k, j) {
    function f(a, b) {
        h.apply(this, arguments)
    }

    c("./k");
    var h = c("./l");
    f.prototype = {d: function (a, b) {
        function d(a, b) {
            this.a.v ? (a.keyCode == e.KEY_UP ? this.q[0] = -b : a.keyCode == e.KEY_DOWN ? this.q[0] = b : a.keyCode == e.KEY_LEFT ? this.q[1] = b : a.keyCode == e.KEY_RIGHT && (this.q[1] = -b), this.a.X && (this.q[1] *= -1), this.a.la && (this.q[0] *= -1)) : (a.keyCode == e.KEY_UP ? this.p[0] = b : a.keyCode == e.KEY_DOWN ? this.p[0] = -b : a.keyCode == e.KEY_LEFT ? this.p[1] = -b : a.keyCode == e.KEY_RIGHT &&
                (this.p[1] = b), this.a.X && (this.p[1] *= -1), this.a.la && (this.p[0] *= -1));
            a.keyCode == e.KEY_2 ? this.w[2] = -b : a.keyCode == e.KEY_3 ? this.w[1] = -b : a.keyCode == e.KEY_4 ? this.w[0] = -b : a.keyCode == e.KEY_9 ? this.w[1] = b : a.keyCode == e.KEY_8 ? this.w[2] = b : a.keyCode == e.KEY_6 && (this.w[0] = b)
        }

        if (Common) {
            var e = new Common.API.TVKeyValue;
            "keydown" == a ? (this.Vc = (new Date).getTime(), d.call(this, b, 1), this.update()) : "keyup" == a && d.call(this, b, 0)
        }
    }};
    for (var e in h.prototype)h.prototype.hasOwnProperty(e) && !f.prototype.hasOwnProperty(e) && (f.prototype[e] =
        h.prototype[e]);
    f.prototype.trigger = f.prototype.d;
    j.e = f
});
C("1/n", ["require", "exports", "module", "./k"], function (c, k, j) {
    function f(e, a) {
        this.g = e;
        this.a = a;
        this.a || (this.a = {});
        "undefined" == typeof this.a.ea && (this.a.ea = 0.0050);
        "undefined" == typeof this.a.fa && (this.a.fa = 0.0050);
        this.a.X || (this.a.X = w);
        this.a.la || (this.a.la = w);
        this.a.v || (this.a.v = w);
        this.a.D || (this.a.D = h);
        this.a.xb || (this.a.xb = 100);
        this.a.Aa || (this.a.Aa = w);
        this.s = new this.a.D(e, a)
    }

    var h = c("./k");
    f.prototype = {d: function (e, a) {
        if ("mouseenter" == e)this.a.Aa && !a.ctrlKey && (this.Ea = l), this.Ea = [a.screenX,
            a.screenY]; else if ("mousemove" == e)if (this.a.Aa && !a.ctrlKey)this.Ea = l; else {
            var b = [a.screenX, a.screenY];
            if (this.Ea) {
                var d = [this.Ea[1] - b[1], b[0] - this.Ea[0], 0];
                if (d[0] || d[1] || d[2])d[0] = Math.min(Math.max(d[0], -this.a.xb), this.a.xb), d[1] = Math.min(Math.max(d[1], -this.a.xb), this.a.xb), this.a.X && (d[1] = -d[1]), this.a.la && (d[0] = -d[0]), this.a.v ? this.s.v([d[0] * -this.a.fa, d[1] * -this.a.fa, d[2] * -this.a.fa]) : this.s.rotate([d[0] * this.a.ea, d[1] * this.a.ea, d[2] * this.a.ea])
            }
            this.Ea = b
        } else"mouseleave" == e && (this.Ea = l)
    }};
    f.prototype.trigger = f.prototype.d;
    j.e = f
});
C("1/o", ["require", "exports", "module", "./k", "0/g"], function (c, k, j) {
    function f(a, b) {
        this.g = a;
        this.a = b;
        this.a || (this.a = {});
        this.a.N || (this.a.N = 0);
        this.a.eb || (this.a.eb = 0);
        this.a.md || (this.a.md = {duration: 3E3, h: e.H.Ca});
        this.s = new h(this.g)
    }

    var h = c("./k"), e = c("0/g");
    f.prototype = {move: function (a, b, d) {
        var e = this.g.K(), e = [e[0], e[1], e[2] + 300], e = Math.max(Math.sqrt(e[0] * e[0] + e[2] * e[2]), 300), c = a[0] / e;
        e < this.a.N && (c = -c);
        b === p && (b = this.a.md);
        this.s.v([0, c, 0], b);
        this.s.move([0, a[1] + this.a.eb * c, a[2]], b, d)
    }, rotate: function (a, b, d) {
        this.s.rotate(a, b, d)
    }, v: function (a, b, d) {
        this.s.move([0, this.a.eb * a[1], 0], b);
        this.s.v(a, b, d)
    }};
    j.e = f
});
C("1/m", ["require", "exports", "module", "0/9", "0/f"], function (c, k, j) {
    function f(a, b, d, c) {
        b || (b = [-Infinity, Infinity]);
        d || (d = [-Infinity, Infinity]);
        c || (c = [-Infinity, Infinity]);
        this.Ze = new e(b);
        this.$e = new e(d);
        this.af = new e(c);
        this.Xf = a
    }

    var h = c("0/9"), e = c("0/f");
    f.prototype = {Hf: function () {
        return this.Ze.get()
    }, Cb: function (a, b, d) {
        this.Ze.set(a, b, d)
    }, If: function () {
        return this.$e.get()
    }, Db: function (a, b, d) {
        this.$e.set(a, b, d)
    }, Jf: function () {
        return this.af.get()
    }, Eb: function (a, b, d) {
        this.af.set(a, b, d)
    }, Id: function (a) {
        var b =
            this.Xf.K(), d = this.Hf(), e = this.If(), c = this.Jf(), f = d[1] - d[0], j = e[1] - e[0], k = c[1] - c[0], y = [b[0] + d[0], b[0] + d[1]], B = [b[1] + e[0], b[1] + e[1]], D = [b[2] + c[0], b[2] + c[1]], v = h.Ta(a), A = [0, 0, 0];
        v[0] < y[0] && (A[0] = f * Math.ceil((y[0] - v[0]) / f));
        v[0] > y[1] && (A[0] = f * Math.floor((y[1] - v[0]) / f));
        v[1] < B[0] && (A[1] = j * Math.ceil((B[0] - v[1]) / j));
        v[1] > B[1] && (A[1] = j * Math.floor((B[1] - v[1]) / j));
        v[2] < D[0] && (A[2] = k * Math.ceil((D[0] - v[2]) / k));
        v[2] > D[1] && (A[2] = k * Math.floor((D[1] - v[2]) / k));
        f = v.slice(0);
        f[0] += A[0] - b[0];
        f[1] += A[1] - b[1];
        f[2] += A[2] -
            b[2];
        b = Math.min(0.0050 * (f[0] - d[0]), 0.0050 * (d[1] - f[0]));
        e = Math.min(0.0050 * (f[1] - e[0]), 0.0050 * (e[1] - f[1]));
        c = Math.min(0.0050 * (f[2] - c[0]), 0.0050 * (c[1] - f[2]));
        c = Math.min(b, e, c, 1);
        return{transform: h.move(a, A), opacity: c}
    }, Ef: function (a) {
        return this.Id(a).transform
    }, z: function (a) {
        for (var b = [], d = 0; d < a.length; d++) {
            var e = this.Id(a[d].transform);
            b.push({transform: e.transform, opacity: e.opacity * a[d].opacity, target: a[d].target})
        }
        return b
    }};
    j.e = f
});
C("3/14", ["require", "exports", "module", "0/f"], function (c, k, j) {
    function f(e, a) {
        "undefined" == typeof e && (e = 0);
        "undefined" == typeof a && (a = p);
        this.wa = new h(e);
        this.Ib = a
    }

    var h = c("0/f");
    f.prototype = {show: function (e) {
        this.set(1, this.Ib, e)
    }, Ua: function (e) {
        this.set(0, this.Ib, e)
    }, set: function (e, a, b) {
        this.wa.o();
        this.wa.set(e, a, b)
    }, z: function (e) {
        var a = this.wa.get();
        return a ? {opacity: a, target: e} : s
    }, Of: function (e) {
        e || (e = 0);
        return 1 <= e ? 1 == this.wa.get() : this.wa.get() > e
    }};
    j.e = f
});
C("3/15", ["require", "exports", "module", "0/9", "0/f"], function (c, k, j) {
    function f(a) {
        "undefined" == typeof a && (a = p);
        this.Kd = 0;
        this.wa = new e(0);
        this.Ib = a;
        this.yf = 0.1
    }

    var h = c("0/9"), e = c("0/f");
    f.prototype = {Zb: function (a, b) {
        "undefined" == typeof a && (a = 1 == this.Kd ? 0 : 1);
        this.Kd = a;
        this.wa.set(a, this.Ib, b)
    }, z: function (a) {
        var b = this.wa.get(), d = {transform: h.Za(Math.PI * b), target: a[0]}, a = {transform: h.Za(Math.PI * (b - 1)), target: a[1]};
        return{transform: h.scale(1, 1, this.yf), target: [d, a]}
    }};
    j.e = f
});
C("3/16", ["require", "exports", "module", "0/f"], function (c, k, j) {
    function f(c, e) {
        this.ge = c;
        this.timeout = e;
        this.enabled = 0 < e;
        this.reset()
    }

    c("0/f");
    f.prototype = {enable: function () {
        this.enabled = p
    }, disable: function () {
        this.enabled = w
    }, update: function () {
        !this.ub && (this.enabled && this.ge) && (new Date).getTime() - this.Pf > this.timeout && (this.ub = p, this.ge.call(this))
    }, reset: function () {
        this.Pf = (new Date).getTime();
        this.ub = w
    }, d: function () {
        this.reset()
    }};
    j.e = f
});
C("3/19", ["require", "exports", "module"], function (c, k, j) {
    function f() {
        this.Eg = this.startTime = 0;
        this.qc = [];
        this.oa = -1
    }

    f.prototype = {ef: function (c) {
        0 > this.oa && (this.oa = 0);
        for (; this.oa < this.qc.length && this.qc[this.oa].Bg <= c;)this.qc[this.oa].action.call(this), this.oa++
    }, update: function () {
        0 > this.oa || this.oa >= this.qc.length || this.ef((new Date).getTime() - this.startTime)
    }};
    j.e = f
});
C("3/1a", "require exports module 0/9 0/e 0/g".split(" "), function (c, k, j) {
    function f(b) {
        this.oc = b;
        this.C = {};
        this.Wc = {};
        for (var d in this.oc)this.C[d] = new e, this.C[d].De({duration: 1E3, h: a.H.Qa})
    }

    var h = c("0/9"), e = c("0/e"), a = c("0/g");
    f.prototype = {o: function (a) {
        this.C[a].o()
    }, de: function (a) {
        for (var d = 0; d < a.length; d++)this.o(d)
    }, Kf: function () {
        this.de(this.all())
    }, set: function (a, d, e, c) {
        this.C[a].setTransform(d, e, c)
    }, bg: function (a, d, e, c) {
        for (var h = 0; h < a.length; h++)this.set(a[h], d(h), e, 0 == h ? c : l)
    }, cb: function (a, d, e) {
        this.bg(this.all(), a, d, e)
    }, modify: function (a, d, e, c) {
        d = h.multiply(this.C[a].Pc, d);
        this.set(a, d, e, c)
    }, ab: function (a, d, e, c) {
        this.C[a].ab(d, e, c)
    }, $f: function (a, d, e, c) {
        for (var h = 0; h < a.length; h++)this.ab(a[h], d, e, 0 == h ? c : l)
    }, bb: function (a, d, e) {
        this.$f(this.all(), a, d, e)
    }, all: function () {
        var a = [], d;
        for (d in this.oc)a.push(d);
        return a
    }, V: function (a) {
        return this.C[a].V()
    }, Rc: function (a) {
        return this.C[a].Rc()
    }, gc: function (a) {
        this.Wc[a] = p
    }, xc: function (a) {
        this.Wc[a] = w
    }, ie: function (a) {
        return this.Wc[a]
    }, vb: function (a) {
        return this.C[a].vb()
    },
        z: function () {
            var a = [], d;
            for (d in this.oc)a.push(this.C[d].z(this.oc[d].z()));
            return a
        }};
    j.e = f
});
C("6/1i", ["require", "exports", "module", "0/9"], function (c, k, j) {
    function f(e, a) {
        this.sc = e;
        this.Ob = a;
        this.Ra = [];
        this.ib = [];
        this.Gc = {}
    }

    var h = c("0/9");
    f.prototype = {Mc: function (e) {
        0 > this.Ra.indexOf(e) && this.Ra.push(e);
        this.update()
    }, fg: function (e) {
        e = this.Ra.indexOf(e);
        0 <= e && this.Ra.splice(e, 1);
        this.update()
    }, nf: function (e) {
        var a = [], b;
        for (b in this.Ob)this.Ob.hasOwnProperty(b) && 0 <= this.Ob[b].indexOf(e) && a.push(b);
        return a
    }, update: function () {
        for (var e = [], a = 0; a < this.Ra.length; a++)for (var b = this.Ob[this.Ra[a]],
                                                                 d = 0; d < b.length; d++)0 > e.indexOf(b[d]) && e.push(b[d]);
        for (var c = this.sc, f = [], b = [], a = 0; a < this.ib.length; a++)d = this.ib[a], 0 > e.indexOf(d) && (b.push(d), c.modify(d, h.translate(0, 0, this.Gc[d]), p), c.xc(d));
        for (a = 0; a < e.length; a++)0 > this.ib.indexOf(e[a]) && f.push(e[a]);
        b = [0, 0, 0];
        for (a = 0; a < f.length; a++) {
            var j = h.Ta(c.V(f[a]));
            b[0] += j[0];
            b[1] += j[1];
            b[2] += j[2]
        }
        b[0] /= f.length;
        b[1] /= f.length;
        b[2] /= f.length;
        for (var k = 0, a = 0; a < f.length; a++) {
            var j = h.Ta(c.V(f[a])), d = j[0] - b[0], F = j[1] - b[1], j = j[2] - b[2], d = Math.sqrt(d * d + F * F + j *
                j);
            d > k && (k = d);
            (function (a, b) {
                var d = this;
                setTimeout(function () {
                    var e = f[a];
                    d.Gc[e] = 1800 * Math.pow(1 - b / k, 2) + 200;
                    c.gc(e);
                    c.modify(e, h.translate(0, 0, -d.Gc[e]), p)
                }, 3 * b)
            }).call(this, a, d)
        }
        this.ib = e
    }, Nf: function (e) {
        return 0 <= this.ib.indexOf(e)
    }};
    j.e = f
});
C("6/1k", "require exports module 0/9 0/f 0/g".split(" "), function (c, k, j) {
    function f(a, d, e) {
        "undefined" == typeof a && (a = 300);
        "undefined" == typeof d && (d = 2E3);
        "undefined" == typeof e && (e = 0.5);
        this.M = [];
        this.qb = [];
        this.Mf = a;
        this.duration = d;
        this.Qc = e;
        this.enabled = p
    }

    var h = c("0/9"), e = c("0/f"), a = c("0/g");
    f.prototype = {enable: function () {
        this.enabled = p
    }, disable: function () {
        if (this.enabled) {
            this.enabled = w;
            for (var a = 0; a < this.M.length; a++)this.bf(a)
        }
    }, Mc: function (a) {
        0 > this.qb.indexOf(a) && this.qb.push(a)
    }, Lf: function (a) {
        a =
            this.qb.indexOf(a);
        0 <= a && this.qb.splice(a, 1)
    }, bf: function (b, d) {
        this.M.hasOwnProperty(b) && ("undefined" == typeof d && (d = 500), this.M[b].o(), this.M[b].set(0, {duration: d, h: a.H.Qa}))
    }, update: function () {
        if (this.enabled && this.M.length && !(Math.random() > this.Qc)) {
            var b = Math.floor(Math.random() * this.M.length);
            if (!(0 <= this.qb.indexOf(b))) {
                var d = Math.round(this.Mf * (Math.random() - 0.5)), e = Math.round(this.duration * (Math.random() + 0.5));
                this.M[b].o();
                this.M[b].set(d, {duration: e, h: a.H.Qa})
            }
        }
    }, z: function (a) {
        this.update();
        for (var d = Array(a.length), c = 0; c < a.length; c++) {
            this.M.hasOwnProperty(c) || (this.M[c] = new e(0));
            var f = a[c];
            d[c] = f.transform ? {transform: h.move(f.transform, [0, 0, this.M[c].get()]), opacity: f.opacity, target: f.target} : {transform: h.translate(0, 0, this.M[c].get()), target: f}
        }
        return d
    }};
    j.e = f
});
C("6/1j", "require exports module 0/9 0/g 3/1a".split(" "), function (c, k, j) {
    function f(a, b) {
        b || (b = 0.1);
        this.sc = a;
        this.Qc = b
    }

    var h = c("0/9"), e = c("0/g");
    c("3/1a");
    f.prototype = {eg: function (a, b) {
        var d = this.sc;
        d.gc(a);
        d.gc(b);
        var c = h.Ta(d.V(a)), f = h.Ta(d.V(b)), j = f[0] - c[0], k = f[1] - c[1], c = f[2] - c[2], f = 100 * Math.random() - 50, F = 100 * Math.random() - 50, y = 100 * Math.random() - 50, B = 100 * Math.random() - 50, D = {duration: 2E3, h: e.H.Ca}, v = {duration: 1E3, h: e.H.Qa};
        d.modify(a, h.translate(0, 0, c), D);
        d.modify(a, h.translate(j + f, 0, 0), D);
        d.modify(a,
            h.translate(0, k + F, 0), D);
        d.modify(a, h.translate(-f, 0, 0), v);
        d.modify(a, h.translate(0, -F, 0), v, function () {
            d.xc(a)
        });
        d.modify(b, h.translate(0, 0, -c), D);
        d.modify(b, h.translate(-j + y, 0, 0), D);
        d.modify(b, h.translate(0, -k + B, 0), D);
        d.modify(b, h.translate(-y, 0, 0), v);
        d.modify(b, h.translate(0, -B, 0), v, function () {
            d.xc(b)
        })
    }, update: function () {
        if (!(Math.random() > this.Qc)) {
            var a = this.sc, b = a.all(), d = b[Math.floor(Math.random() * b.length)], b = b[Math.floor(Math.random() * b.length)];
            d == b || (a.vb(d) || a.vb(b) || a.ie(d) || a.ie(b)) ||
            this.eg(d, b)
        }
    }};
    j.e = f
});
C("2/w", ["require", "exports", "module"], function (c, k, j) {
    function f(c, e) {
        this.G = this.x = 0;
        this.Oa = [];
        this.Oc = 0.5;
        this.Uc = 1E-4;
        this.Sf = 1;
        this.wb = (new Date).getTime();
        this.za = w;
        this.set(c, e)
    }

    f.Tb = function (c) {
        return function (e, a, b) {
            return-c * a * a * b
        }
    };
    f.$b = function (c) {
        return function (e, a, b) {
            return-c * Math.abs(a) * b
        }
    };
    f.hb = function (c, e, a) {
        e || (e = 0);
        a || (a = 0);
        var b = 2 * a * Math.sqrt(e);
        return function (a, g, f) {
            var a = a - c, j = a + g * f, k = 0.5 * e * a * a, F = 0.5 * e * j * j;
            return-(0 > a / j ? k : F - k) - b * g * g * f
        }
    };
    f.Ne = function (c, e, a, b) {
        e || (e = 0);
        a ||
        (a = 0);
        b || (b = 0);
        var d = 2 * a * Math.sqrt(e), g = f.hb(c, e, a), j = w;
        return function (a, f, k) {
            var y = a - c, B = y + f * k;
            1E-4 > Math.abs(f) && Math.abs(B) < b && (j = w);
            if (j || Math.abs(y) >= b || Math.abs(B) >= b)return j = p, g(a, f, k);
            var a = -0.5 * e * b * b * Math.log(b * b - y * y), D = -0.5 * e * b * b * Math.log(b * b - B * B);
            return-(0 > y / B ? -a : D - a) - d * f * f * k
        }
    };
    f.wg = function (c, e) {
        e || (e = 0);
        return function (a, b, d) {
            var g = a - c, a = g + b * d;
            if (0.5 > Math.abs(g) && 0.5 > Math.abs(a))return-0.5 * b * b * d;
            b = -e / Math.max(Math.abs(g), 0.5);
            return-(-e / Math.max(Math.abs(a), 0.5) - b)
        }
    };
    f.prototype = {Md: function () {
        this.wb =
            (new Date).getTime();
        this.za = w
    }, set: function (c, e) {
        "number" == typeof c && this.A(c);
        "number" == typeof e && this.xd(e)
    }, A: function (c) {
        this.x = c;
        this.Md()
    }, xd: function (c) {
        this.G = c;
        this.Md()
    }, I: function (c) {
        "function" != typeof c && console.error("Invalid agent");
        0 > this.Oa.indexOf(c) && (this.Oa.push(c), this.za = w)
    }, zb: function (c) {
        c = this.Oa.indexOf(c);
        0 <= c && (this.Oa.splice(c, 1), this.za = w)
    }, wd: function (c) {
        this.Oa = c.slice(0);
        this.za = w
    }, K: function () {
        this.update();
        return this.x
    }, Gf: function () {
        this.update();
        return this.G
    },
        update: function (c) {
            for (c || (c = (new Date).getTime()); this.wb < c;) {
                var e = c - this.wb;
                this.G && (e = Math.min(e, this.Oc / Math.abs(this.G)));
                e = Math.max(e, this.Sf);
                this.ff(e)
            }
        }, ff: function (c) {
            function e(b, d, c) {
                for (var e = a.Oa, g = 0, f = 0; f < e.length; f++)g += e[f](b, d, c);
                return g
            }

            this.wb += c;
            if (!this.za) {
                var a = this, b = 0, d = 0;
                if (Math.abs(this.G) > this.Uc)b = e(this.x, this.G, c), d = 0 < this.G ? 1 : -1; else {
                    var g = e(this.x, this.Uc, c), f = e(this.x, -this.Uc, c), b = Math.max(g, f), d = g > f ? 1 : -1;
                    0 >= g && 0 >= f && (this.za = p)
                }
                g = this.G;
                g = 0.5 * g * g + b;
                0 > g ? (this.x +=
                    this.G * c * (g / b), this.G = 0) : (b = d * Math.sqrt(2 * Math.abs(g)), this.x += this.G * c, this.G = b);
                this.za && (this.x = Math.round(this.x / this.Oc) * this.Oc)
            }
        }};
    j.e = f
});
C("2/z", ["require", "exports", "module", "0/9", "./w"], function (c, k, j) {
    function f(a, b) {
        this.dir = a;
        this.a = b;
        this.a || (this.a = {});
        this.a.Wd || (this.a.Wd = 0.5);
        this.a.me || (this.a.me = 50);
        this.a.$b || (this.a.$b = 5E-5);
        this.a.Tb || (this.a.Tb = 0.0010);
        this.a.ae || (this.a.ae = 1);
        this.a.ob || (this.a.ob = 2E-4);
        this.a.nb || (this.a.nb = 1);
        this.a.Gb || (this.a.Gb = 4);
        this.a.ca || (this.a.ca = 0);
        this.a.gd || (this.a.gd = w);
        this.a.ed || (this.a.ed = 0.1);
        this.a.ue || (this.a.ue = 300);
        this.a.fd || (this.a.fd = 1);
        this.a.te || (this.a.te = 2E-4);
        this.a.se ||
        (this.a.se = 1);
        this.a.kb || (this.a.kb = "x" == this.dir ? window.innerWidth : window.innerHeight);
        this.a.S || (this.a.S = 0);
        this.a.U || (this.a.U = 0);
        this.a.Nd || (this.a.Nd = w);
        this.a.ca === p && (this.a.ca = this.a.kb);
        this.a.ig && (this.a.U = this.a.S + this.a.ig - this.a.kb);
        this.J = {};
        this.u = new e({position: 0});
        this.pf = this.df();
        this.pc = p;
        this.ba = w;
        this.ya = [];
        this.Ec = 0;
        this.Af = e.$b(this.a.$b);
        this.tf = e.Tb(this.a.Tb);
        this.cg(this.a.S, p);
        this.Ee(this.a.U, p);
        this.Nc = [];
        this.Hd = this.B = this.Bc = 0;
        this.ag();
        this.disabled = w
    }

    var h = c("0/9"),
        e = c("./w");
    f.prototype = {k: function (a, b) {
        this.J[a] || (this.J[a] = []);
        b in this.J[a] || this.J[a].push(b)
    }, d: function (a, b) {
        this.pf.d(a, b);
        if (this.J[a])for (var d = 0; d < this.J[a].length; d++)this.J[a][d](b)
    }, z: function (a) {
        if (this.a.Nd) {
            var b = 0;
            "object" == typeof a && ("function" == typeof a.Sc && (b = a.Sc(), b = "x" == this.dir ? b[0] : b[1]), "object" == typeof a.size && (b = "x" == this.dir ? a.size[0] : a.size[1]));
            b = Math.max(b - this.a.kb, 0);
            this.Ee(this.a.S + b)
        }
        var b = this.u.K(), d = this.u.Gf();
        if (this.a.gd) {
            if (this.Bc != this.B) {
                this.u.zb(this.nc);
                if (0 <= this.B) {
                    var c = Math.min(Math.max(this.a.yb[this.B], this.a.S), this.a.U);
                    this.nc = e.hb(c, this.a.te, this.a.se);
                    this.u.I(this.nc)
                }
                this.Bc = this.B
            }
            0 > this.B && Math.abs(d) < this.a.fd && (this.B = this.Od(b));
            (this.nc && !this.ba || 0 <= this.ya.indexOf("page")) && this.u.I(this.nc)
        }
        if (!this.ba || 0 <= this.ya.indexOf("edge"))if (b < this.a.S || b > this.a.U)this.Ub || (this.u.wd([]), this.Ub = p), this.Ad && (b < this.a.S && 0 >= d) && (this.u.I(this.Ad), this.pc && (this.d("pullDown"), this.pc = w)), this.Kc && (b > this.a.U && 0 <= d) && this.u.I(this.Kc);
        this.d("render", {position: b, Gg: d});
        0 == b && (this.pc = p);
        return{transform: "x" == this.dir ? h.translate(-b, 0) : h.translate(0, -b), target: a, group: p}
    }, df: function () {
        var a = this, b = {};
        return{d: function (d, c) {
            if ("touchmove" == d) {
                for (var e = 0, f = 0; f < c.changedTouches.length; f++) {
                    var h = c.changedTouches[f];
                    if (b.hasOwnProperty(h.identifier)) {
                        var j = b[h.identifier], k = h.pageX - j.x, B = h.pageY - j.y, D = 0, D = "x" == a.dir ? Math.abs(k) > Math.abs(B) ? k : 0 : Math.abs(B) > Math.abs(k) ? B : 0, e = e - D;
                        j.x = h.pageX;
                        j.y = h.pageY
                    }
                }
                a.disabled || (0 < e && (a.pc = w), e &&
                    a.Uf(e), a.d("scrollmove"))
            } else if ("touchstart" == d) {
                if (!a.disabled) {
                    a.lf();
                    for (e = 0; e < c.targetTouches.length; e++)f = c.targetTouches[e], b[f.identifier] = {x: f.pageX, y: f.pageY}
                }
            } else if ("touchend" == d)a:{
                for (e = 0; e < c.changedTouches.length; e++)f = c.changedTouches[e], b.hasOwnProperty(f.identifier) && delete b[f.identifier];
                for (e = 0; e < c.touches.length; e++)if (b.hasOwnProperty(c.touches[e].identifier))break a;
                a.Sd()
            }
        }}
    }, disable: function () {
        this.disabled = p
    }, enable: function () {
        this.disabled = w
    }, K: function () {
        return this.u.K()
    },
        $d: function () {
            return this.a.U - this.a.S
        }, cg: function (a, b) {
            if (b || a != this.a.S)this.a.S = a, this.u.zb(this.Ad), this.Ad = -Infinity < a ? this.a.ca && Infinity > this.a.ca ? e.Ne(a, this.a.ob, this.a.nb, this.a.ca) : e.hb(a, this.a.ob, this.a.nb) : s, this.Ub = w
        }, Ee: function (a, b) {
            if (b || a != this.a.U)this.a.U = a, this.u.zb(this.Kc), this.Kc = Infinity > a ? this.a.ca && Infinity > this.a.ca ? e.Ne(a, this.a.ob, this.a.nb, this.a.ca) : e.hb(a, this.a.ob, this.a.nb) : s, this.Ub = w
        }, kf: function (a) {
            a || (a = this.K());
            return a <= this.a.S || a >= this.a.U
        }, Od: function (a) {
            var b =
                0, d = Infinity;
            for (i = 0; i < this.a.yb.length; i++) {
                var c = this.a.yb[i] - a;
                Math.abs(c) < d && (b = i, d = Math.abs(c))
            }
            return b
        }, ag: function (a) {
            if (Infinity > this.$d() && !a)for (var a = [], b = this.a.kb, d = Math.round(this.$d() / b), c = 0; c < d; c++)a.push(c * b);
            this.a.yb = a;
            this.d("pageStopsChange")
        }, A: function (a) {
            this.u.A(a)
        }, o: function () {
            this.u.xd(0)
        }, qe: function () {
            this.Ub = w;
            this.u.wd([]);
            if (!this.ba || 0 <= this.ya.indexOf("resist"))this.u.I(this.Af), this.u.I(this.tf);
            if (!this.ba || 0 <= this.ya.indexOf("external"))for (var a = 0; a < this.Nc.length; a++)this.Nc[a] &&
            this.u.I(this.Nc[a]);
            if (this.ba)for (a = 0; a < this.xa.length; a++)this.u.I(this.xa[a])
        }, lf: function (a, b) {
            a || (a = []);
            b || (b = []);
            this.ba && this.Sd();
            0 > a.indexOf("flow") && this.o();
            this.ba = p;
            this.ya = a;
            this.xa = b;
            for (var d = 0; d < this.xa.length; d++)this.qg.I(this.xa[d]);
            this.qe();
            this.T = 0;
            this.Fc = (new Date).getTime();
            return++this.Ec
        }, Sd: function (a) {
            if (a && a != this.Bf())return 0;
            (new Date).getTime() - this.Fc > this.a.me && (this.T = 0);
            this.ba = w;
            0 > this.ya.indexOf("flow") && this.u.xd(this.T * this.a.ae);
            this.ya = [];
            for (a = 0; a < this.xa.length; a++)this.u.zb(this.xa[a]);
            this.xa = [];
            this.qe();
            this.a.gd && (a = this.Od(this.K()), 1 < Math.abs(a - this.Bc) && (this.B = a), this.T > this.a.ed ? this.B++ : this.T < -this.a.ed ? this.B-- : this.B = a, 0 > this.B && (this.B = 0), this.B >= this.a.yb.length && (this.B = this.a.yb.length - 1), a = (new Date).getTime(), Math.abs(this.T) > this.a.fd && a - this.Hd < this.a.ue && (this.B = -1), this.Hd = a);
            return this.Ec
        }, Bf: function () {
            return this.ba ? this.Ec : 0
        }, Uf: function (a) {
            var b = this.kf() ? this.a.Wd * a : a;
            this.A(this.K() + b);
            var b = (new Date).getTime(), d = b - this.Fc;
            this.Fc = b;
            d && (this.T = a /
                d);
            this.T > this.a.Gb ? this.T = this.a.Gb : this.T < -this.a.Gb && (this.T = -this.a.Gb)
        }};
    j.e = f
});
C("4/1d", ["require", "exports", "module"], function (c, k, j) {
    function f(c) {
        this.touches = {};
        this.Mb = w;
        this.a = c;
        this.a || (this.a = {});
        this.a.We || (this.a.We = 300);
        this.a.ee || (this.a.ee = 300);
        "undefined" == typeof this.a.Ye && (this.a.Ye = p);
        this.Xd = []
    }

    f.prototype = {ua: function (c) {
        for (var e = this, a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a], d = b.identifier;
            this.touches[d] = {ye: b.pageX, ze: b.pageY, timestamp: (new Date).getTime(), Bd: 0, Cd: 0};
            c.origin.d("grab", {target: c.target});
            (function (a, b) {
                e.touches[a].fe =
                    setTimeout(function () {
                        b.d("hold", {id: a})
                    }, e.a.ee)
            }).call(this, d, c.origin)
        }
        this.Mb = 1 == c.touches.length;
        this.Xd = []
    }, ta: function (c) {
        for (var e = (new Date).getTime(), a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a], d = b.identifier;
            if (this.touches[d]) {
                var f = this.touches[d], j = b.pageX, b = b.pageY, k = j - f.ye, t = b - f.ze, F = e - f.timestamp, y = k / F, B = t / F;
                c.origin.d("move", {id: d, og: k, pg: t, Dd: y, Dd: B, Td: F});
                f.ye = j;
                f.ze = b;
                f.Bd = y;
                f.Cd = B;
                f.timestamp = e;
                clearTimeout(f.fe)
            }
        }
        this.Mb = w
    }, sa: function (c) {
        for (var e = (new Date).getTime(),
                 a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a].identifier;
            if (this.touches[b]) {
                var d = this.touches[b], f = e - d.timestamp;
                c.origin.d("release", {id: b, jg: d.Bd, Dd: d.Cd, Td: f});
                this.Mb && f < this.a.We && (f = {id: b, Td: f, target: c.target}, c.origin.d("tap", f), this.a.Ye && (c.preventDefault(), c.origin.d("click", f)));
                clearTimeout(d.fe);
                this.Xd.push({id: b, jg: d.Bd, Dd: d.Cd, timestamp: e});
                delete this.touches[b]
            }
        }
        0 == c.touches.length && (this.Mb = w)
    }, d: function (c, e) {
        "touchmove" == c ? this.ta(e) : "touchstart" == c ? this.ua(e) :
            "touchend" == c && this.sa(e)
    }};
    j.e = f
});
C("4/1c", ["require", "exports", "module"], function (c, k, j) {
    function f() {
        this.Ma = {}
    }

    f.prototype = {ua: function (c) {
        this.Yb && (this.ra = this.qa = l);
        for (var e = 0; e < c.changedTouches.length; e++) {
            var a = c.changedTouches[e];
            this.Ma[a.identifier] = {x: a.pageX, y: a.pageY};
            "undefined" == typeof this.qa ? this.qa = a.identifier : "undefined" == typeof this.ra && (this.ra = a.identifier, this.Yb = p)
        }
        this.timestamp = (new Date).getTime();
        this.mb = this.Fd(this.Ma[this.qa], this.Ma[this.ra]);
        this.Jb = 0
    }, ta: function (c) {
        for (var e = 0; e < c.changedTouches.length; e++) {
            var a =
                c.changedTouches[e];
            this.Ma[a.identifier] = {x: a.pageX, y: a.pageY}
        }
        if (this.Yb && "undefined" != typeof this.qa && "undefined" != typeof this.ra) {
            c = (new Date).getTime();
            e = c - this.timestamp;
            a = this.Fd(this.Ma[this.qa], this.Ma[this.ra]);
            if (10 < e || 0 < e && a != this.mb)this.Jb = (a - this.mb) / e;
            this.mb = a;
            this.timestamp = c
        }
    }, sa: function (c) {
        for (var e = (new Date).getTime(), a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a];
            this.qa == b.identifier && (this.qa = l);
            this.ra == b.identifier && (this.ra = l);
            delete this.Ma[b.identifier]
        }
        this.Yb &&
            ("undefined" == typeof this.qa && "undefined" == typeof this.ra) && (this.Yb = w, a = e - this.timestamp, 300 > a && 0 > this.Jb ? c.origin.d("pinch", {G: this.Jb, rf: this.mb}) : 300 > a && 0 < this.Jb && c.origin.d("spread", {G: this.Jb, rf: this.mb}));
        this.timestamp = e
    }, Fd: function (c, e) {
        if (c && e) {
            var a = e.x - c.x, b = e.y - c.y;
            return Math.sqrt(a * a + b * b)
        }
    }, d: function (c, e) {
        "touchstart" == c ? this.ua(e) : "touchmove" == c ? this.ta(e) : "touchend" == c && this.sa(e)
    }};
    j.e = f
});
C("6/1l", {xf: "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Rv Fl Uup Lv Uus Ur".split(" "), uf: {Ag: [0, 5, 6, 7, 14, 15, 33], zg: [1, 9, 17, 35, 53, 85, 117], tg: [8, 16, 34, 52, 84, 116], xg: [4, 13, 31, 32, 50, 51, 83], Ib: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 71, 72, 73, 74, 75, 76, 77, 78, 79, 103, 104, 105, 106, 107, 108, 109, 110, 111], Cg: [12, 30, 48, 49, 80, 81, 82, 112, 113, 114, 115], lg: [2, 10, 18, 36, 54, 86], mg: [3, 11, 19, 37, 55, 87], vg: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70], kg: [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102]}, wf: "Hydrogen Helium Lithium Beryllium Boron Carbon Nitrogen Oxygen Fluorine Neon Sodium Magnesium Aluminium Silicon Phosphorus Sulfur Chlorine Argon Potassium Calcium Scandium Titanium Vanadium Chromium Manganese Iron Cobalt Nickel Copper Zinc Gallium Germanium Arsenic Selenium Bromine Krypton Rubidium Strontium Yttrium Zirconium Niobium Molybdenum Technetium Ruthenium Rhodium Palladium Silver Cadmium Indium Tin Antimony Tellurium Iodine Xenon Cesium Barium Lanthanum Cerium Praseodymium Neodymium Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium Hafnium Tantalum Tungsten Rhenium Osmium Iridium Platinum Gold Mercury Thallium Lead Bismuth Polonium Astatine Radon Francium Radium Actinium Thorium Protactinium Uranium Neptunium Plutonium Americium Curium Berkelium Californium Einsteinium Fermium Mendelevium Nobelium Lawrencium Rutherfordium Dubnium Seaborgium Bohrium Hassium Meitnerium Darmstadtium Roentgenium Copernicium Ravikantium Flerovium Ununpentium Livermorium Ununseptium Urasium".split(" "),
    vf: "1.008;4.003;6.941;9.012;10.812;12.011;14.007;15.999;18.998;20.180;22.990;24.305;26.982;28.086;30.974;32.066;35.453;39.948;39.098;40.078;44.956;47.867;50.942;51.996;54.938;55.845;58.933;58.693;63.546;65.382;69.723;72.631;74.922;78.963;79.904;83.798;85.468;87.621;88.906;91.224;92.906;95.962;(98);101.072;102.916;106.421;107.868;112.411;114.818;118.712;121.760;127.603;126.904;131.294;132.905;137.328;138.905;140.116;140.908;144.242;(145);150.362;151.964;157.253;158.925;162.500;164.930;167.259;168.934;173.055;174.967;178.492;180.948;183.841;186.207;190.233;192.217;195.085;196.967;200.592;204.383;207.21;208.980;(209);(210);(222);(223);(226);(227);232.038;231.036;238.029;(237);(244);(243);(247);(247);(251);(252);(257);(258);(259);(262);(267);(268);(269);(270);(269);(278);(281);(281);(285);Angellist Maximus;(289);(288);(293);(294);Michael Arrington".split(";")});
C("app", "require exports module 0/4 0/c 0/2 0/9 0/e 0/f 0/1 0/5 0/7 0/6 0/g 1/i 1/j 1/s 1/r 1/p 1/l 1/q 1/n 1/o 1/m 3/14 3/15 3/16 3/19 3/1a 6/1i 6/1k 6/1j 2/z 4/1d 4/1c 6/1l 6/1l 6/1l 6/1l".split(" "), function (c) {
    function k(a) {
        var b = 1.70158;
        return 1 > (a /= 0.5) ? 0.5 * a * a * (((b *= 1.525) + 1) * a - b) : 0.5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
    }

    function j(a) {
        117 == a ? a = 62 : 62 == a && (a = 117);
        return m.translate(hb * (Math.floor(a / 15) - 3.5), ib * (a % 5 - 2), -jb * (Math.floor(a / 5) % 3) - 500)
    }

    function f(a) {
        0 == a ? a = 112 : 112 == a && (a = 0);
        return kb(a)
    }

    function h(a) {
        if (1 > a)a = [0, 0]; else if (2 > a)a = [17, 0]; else if (4 > a)a = [a - 2, 1]; else if (10 > a)a = [a + 8, 1]; else if (12 > a)a = [a - 10, 2]; else if (18 > a)a = [a, 2]; else if (36 > a)a = [a - 18, 3]; else if (54 > a)a = [a - 36, 4]; else if (56 > a)a = [a - 54, 5]; else if (71 > a)a = [a - 53, 8]; else if (86 > a)a = [a - 68, 5]; else if (88 > a)a = [a - 86, 6]; else if (103 > a)a = [a - 85, 9]; else if (118 > a)a = [a - 100, 6]; else return m.scale(0, 0, 0);
        return m.translate(150 * (a[0] - 8.5), 190 * (a[1] - 4.5), 0)
    }

    function e(a) {
        return m.multiply(m.translate(0, 20 * (a - 59), 700), m.Za(0.1 * a * Math.PI))
    }

    function a(a) {
        return m.multiply(m.translate(0,
            250 * (Math.floor(a / 30) - 1), -900), m.Za(-0.06667 * a * Math.PI))
    }

    function b(b, c) {
        var d = J != b;
        J = "undefined" != typeof b ? b : (J + 1) % 5;
        0 <= K && x(K);
        r.o();
        z.Kf();
        var g = {duration: 1E3, h: ra.H.Ca};
        3 == J ? (z.cb(h, g, c), z.bb(1, g), r.A([0, 0, 700], g), r.F([0, 0, 0], g), r.O([0, 0, 0], g), H.Cb([-5E3, 5E3], g), H.Db([-3E3, 3E3], g), H.Eb([-5E3, 5E3], g), U.setTransform(m.translate(120, 0, 0), p), d && q("periodic table")) : 1 == J ? (r.A([0, 0, 700], g), r.F([0, 0, 0], g), r.O([0, 0, 0], g), z.cb(e, g, c), z.bb(1, g), H.Cb([-5E3, 5E3], g), H.Db([-3E3, 3E3], g), H.Eb([-5E3, 5E3], g), U.setTransform(m.translate(0,
            0, 0), p), d && q("helix")) : 2 == J ? (r.A([0, 0, -500], g), r.F([0, 0, 0], g), r.O([0, 0, 0], g), z.cb(a, g, c), z.bb(1, g), H.Cb([-5E3, 5E3], g), H.Db([-3E3, 3E3], g), H.Eb([-5E3, 5E3], g), U.setTransform(m.translate(60, 0, 0), p), d && q("wall of fame")) : 0 == J ? (r.A([0, 0, 800], g), r.F([0, 0, 0], g), r.O([0, 0, 0], g), z.cb(f, g, c), z.bb(1, g), H.Cb([-5E3, 5E3], g), H.Db([-3E3, 3E3], g), H.Eb([-5E3, 5E3], g), U.setTransform(m.translate(-60, 0, 0), p), d && q("sphere")) : 4 == J && (r.A([0, 0, -600], g), r.F([0, -Math.PI / 11, 0], g), r.O([0, 0, 0], g), z.cb(j, g, c), z.bb(1, g), U.setTransform(m.translate(-120,
            0, 0), p), d && q("paraflow"));
        4 == J ? V.enable() : V.disable();
        W.Ia(J)
    }

    function d() {
        var a = {duration: 1E3};
        x(K);
        r.A(Ka, a);
        r.F(lb, a);
        r.O(La, a)
    }

    function g(a) {
        m.ka(z.V(a));
        K = a;
        mb = z.V(a);
        z.gc(a);
        $.Ia(1);
        var b = Q[a].da.backgroundImage;
        if (b) {
            Q[a].Bb({backgroundImage: aa[a].da.backgroundImage});
            var c = new Image;
            c.onload = function () {
                Q[a].Bb({backgroundImage: b})
            };
            c.src = b.substring(5, b.length - 2)
        }
        Ka = r.K().slice(0);
        lb = r.ja().slice(0);
        La = r.Sa().slice(0);
        ba.Bb({backgroundColor: aa[a].da.backgroundColor});
        c = m.multiply(m.translate(0,
            0, -200), H.Ef(z.V(a)));
        r.Rf(c, {duration: 1E3}, function () {
            K == a && (z.set(a, m.scale(0, 0, 0)), P.Xc(function () {
                Ma.show()
            }))
        });
        V.Mc(a);
        V.bf(a, 500);
        fa.disable()
    }

    function x(a) {
        ga.Zb(0);
        z.set(a, mb);
        z.xc(a);
        V.Lf(a);
        K == a && (fa.enable(), K = -1, $.Ia(0), Ma.Ua())
    }

    function q(a) {
        Na.R(a);
        Oa.set(1, w);
        Oa.Ua()
    }

    function t(a, c, d) {
        c = new E([60, 60], c);
        c.j("shape-button");
        c.m(new L);
        c.k("click", function () {
            G && (b(a), window._gaq && _gaq.push(["_trackEvent", "demo", "shapeshift", d, , w]))
        });
        return c
    }

    function F() {
        sa.Of(1) && (ha.Ua(), sa.Ua(),
            R.Ia(0))
    }

    function y(a, b, c) {
        var d = "http://famo.us";
        b && (d += "/r/" + b);
        c || (b = ["Wow! HTML5 performance solved. Check out famo.us Beta + Demo", "I can't believe what I saw HTML5 do. Check out famo.us Beta + Demo", "The famo.us demo just blew me away. Check out famo.us Beta + Demo", "If I hadn't seen it, I wouldn't believe it: famo.us HTML5 Beta + Demo", "I'm gunna go with holy shitsnacks! famo.us HTML5 Beta + Demo"], c = b[Math.floor(Math.random() * b.length)]);
        return'<a href="https://twitter.com/share?text=' + encodeURIComponent(c) +
            "&url=" + encodeURIComponent(d) + "&via=befamous\" onclick=\"event.preventDefault(); window.open(event.currentTarget.href, '_blank', 'width=700,height=260');\">" + a + "</a>"
    }

    function B(a) {
        return y('<img src="content/icons/twitter.png" alt="Tweet" />', a, l)
    }

    function D() {
        X.R("");
        ha.show();
        ia.ab(1);
        ia.setTransform(m.W, {duration: 500, h: k});
        ta.Ua();
        R.Ia(2)
    }

    function v() {
        ha.Ua();
        ia.setTransform(m.move(m.scale(0.0010, 0.0010, 0.0010), [-0.5 * window.innerWidth, 0, 0]), {duration: 500, h: k}, function () {
            ia.ab(0)
        });
        ta.show();
        R.Ia(0);
        G = p
    }

    if (!("WebKitCSSMatrix"in window) || !("m11"in new WebKitCSSMatrix))window.location.pathname = "" + window.location.pathname; else {
        document.title = "famo.us Stress Test Demo";
        var A = "Common"in window && "API"in Common, G = w, P = c("0/4"), E = c("0/c"), Eb = c("0/2"), m = c("0/9"), u = c("0/e"), Fb = c("0/f"), ja = c("0/1"), Pa = c("0/5"), Gb = c("0/7"), ua = c("0/6"), ra = c("0/g"), Hb = c("1/i");
        c("1/j");
        var Qa = c("1/s"), Ib = c("1/r"), Jb = c("1/p"), ka = c("1/l"), Kb = c("1/q"), va = c("1/n"), ca = c("1/o"), Lb = c("1/m"), la = c("3/14"), Mb = c("3/15"), Nb = c("3/16");
        c("3/19");
        var Ob = c("3/1a"), Pb = c("6/1i"), Qb = c("6/1k"), Rb = c("6/1j");
        c("2/z");
        for (var L = c("4/1d"), Sb = c("4/1c"), Ra = c("6/1l").xf, Tb = c("6/1l").uf, nb = c("6/1l").wf, ob = c("6/1l").vf, ma = Ra.length, Sa = Array(ma), Ta = 0; Ta < ma; Ta++)Sa[Ta] = 0.1 + 0.7 * Math.random();
        for (var aa, Ua = Array(ma), S = 0; S < Ua.length; S++) {
            var wa = new E([120, 160]);
            wa.Bb({backgroundColor: "rgba(73,160,154," + Sa[S] + ")"});
            wa.j("periodic-item");
            wa.R('<div class="number">' + (S + 1) + '</div><div class="symbol">' + Ra[S] + '</div><div class="name">' + nb[S] + '</div><div class="mass">' +
                ob[S] + "</div>");
            Ua[S] = wa
        }
        aa = Ua;
        for (var Q, Va = Array(ma), T = 0; T < Va.length; T++) {
            var xa = new E([360, 480]);
            xa.Bb({backgroundColor: "rgba(73,160,154," + Sa[T] + ")"});
            xa.j("periodic-item-hq");
            xa.R('<div class="number">' + (T + 1) + '</div><div class="symbol">' + Ra[T] + '</div><div class="name">' + nb[T] + '</div><div class="mass">' + ob[T] + "</div>");
            Va[T] = xa
        }
        Q = Va;
        var r = new Hb;
        r.A([0, 0, 5E3]);
        r.F([0, 0, 0]);
        r.O([0, -3 * Math.PI, 0]);
        var H = new Lb(r), Ub = new Qa(r), Vb = new Ib(r, {N: 700, $: 2 * Math.PI, Z: 2 * Math.PI, qd: 200, yd: 200, sd: p, zd: p, Wa: p}),
            Wb = new Jb(r, {Wa: p}), Xb = new Qa(r, {N: 900, D: ca, md: {duration: 2E3, h: ra.H.Vd}, Wa: p}), Yb = new Qa(r, {N: 700, eb: 200 / Math.PI, D: ca, Wa: p});
        A && (ka = Kb);
        var Zb = new ka(r), pb = new ka(r, {v: p}), $b = new ka(r, {N: 700, eb: 200 / Math.PI, v: p, X: p, D: ca}), ac = new ka(r, {N: 900, v: p, D: ca}), bc = new va(r, {Aa: p}), qb = new va(r, {Aa: p, v: p}), cc = new va(r, {Aa: p, N: 700, eb: 200 / Math.PI, v: p, X: p, D: ca}), dc = new va(r, {Aa: p, N: 900, v: p, D: ca}), fa = new Nb(function () {
            function a() {
                d.ub && setTimeout(function ec() {
                    if (d.ub) {
                        var a = r.ja().slice(0), b = a.slice(0), c = 0.5 > Math.random() ?
                            -1 : 1;
                        0.5 > Math.random() ? b[0] += 2 * c * Math.PI : b[1] += 2 * c * Math.PI;
                        r.F(b, {duration: 3E3}, function () {
                            r.F(a);
                            setTimeout(ec, 1E4)
                        })
                    }
                }, 1E4)
            }

            function c() {
                d.ub && (z.de(z.all()), b(4, a))
            }

            var d = this;
            0 == J ? c() : (b(0), setTimeout(c, 200))
        }, 15E3);
        fa.disable();
        P.I(fa);
        var V = new Qb(300, 2E3, 1);
        V.disable();
        for (var hb = 270, ib = 350, jb = 400, kb, ya = [], rb = Math.floor(7), Wa = 0; Wa <= rb; Wa++) {
            var sb = Math.PI / 2 - Wa * (Math.PI / rb), za = Math.floor(1400 * Math.PI * Math.cos(sb) / 160);
            0 == za && (za = 1);
            for (var Xa = 0; Xa < za; Xa++) {
                var fc = Xa * (2 * Math.PI / za) - Math.PI;
                ya.push(m.multiply(m.translate(0,
                    0, 700), m.Ce(sb), m.Za(fc)))
            }
        }
        for (; 118 > ya.length;)ya.push(m.W);
        kb = function (a) {
            return 118 <= a ? m.scale(0, 0, 0) : ya[a]
        };
        var W = new Pa(4);
        W.Q(3).m([Ub, pb, qb]);
        W.Q(0).m([Vb, pb, qb]);
        W.Q(4).m([Wb, Zb, bc]);
        W.Q(1).m([Yb, $b, cc]);
        W.Q(2).m([Xb, ac, dc]);
        var tb = new ua;
        tb.k("keyup", function (a) {
            if (G)if (A) {
                var c = new Common.API.TVKeyValue;
                a.keyCode == c.KEY_ENTER && b()
            } else 32 == a.keyCode && b()
        });
        var J = 4, Aa = new ua([new L, new Sb]);
        Aa.k("click", function (a) {
            a.target == document.body && d()
        });
        Aa.k("pinch", function () {
            d()
        });
        Aa.k("keyup",
            function (a) {
                27 == a.keyCode ? d() : 32 == a.keyCode && ga.Zb()
            });
        var $ = new Pa(0), z = new Ob(aa);
        z.cb(h);
        z.bb(0);
        for (var gc = new Rb(z, 0.1), Ba = new Pb(z, Tb), Ma = new la(0, w), ga = new Mb, K = -1, Ka = l, lb = l, La = l, mb = l, O = 0; O < aa.length; O++)(function (a, b) {
            b.m(new L);
            b.k("click", function () {
                G && (0 > K ? g(a) : (x(K), g(a), Ka = [0, 0, 600], beforeRotate = [0, 0, 0], La = [0, 0, 0]))
            });
            b.k("hold", function () {
                if (G) {
                    var b = Ba.nf(a)[0];
                    Ba.Nf(a) ? Ba.fg(b) : Ba.Mc(b)
                }
            })
        }).call(this, O, aa[O]);
        for (O = 0; O < Q.length; O++)Q[O].m(new L), Q[O].k("click", function () {
            ga.Zb(1)
        });
        new Fb(0);
        var ba = new E([360, 480], "Reserved for Future Examples");
        ba.j("periodic-item-hq");
        ba.j("periodic-item-back");
        ba.m(new L);
        ba.k("click", function () {
            ga.Zb(0)
        });
        var ub = new E([200, 32], "periodic table");
        ub.j("caption");
        var Na = new E([600, 50], "");
        Na.j("shape-flash");
        var Oa = new la(0, {duration: 1E3, h: ra.H.Ud}), U = new u(m.translate(-120, 0, 0), 1, "b");
        U.De({duration: 250, h: ra.H.Qa});
        var vb = new E([60, 60], '<div class="shape-button-indicator-box"></div>');
        vb.j("shape-button-indicator");
        var hc = t(4, '<img src="content/icons/paraflow.png" alt="PF" />',
            "paraflow"), ic = t(3, '<img src="content/icons/periodic.png" alt="P" />', "periodic table"), jc = t(0, '<img src="content/icons/sphere.png" alt="S" />', "sphere"), kc = t(1, '<img src="content/icons/helix.png" alt="H" />', "helix"), lc = t(2, '<img src="content/icons/wall.png" alt="W" />', "wall of fame"), Ya = new E([window.innerWidth, window.innerHeight]);
        Ya.j("obscure");
        var ha = new la(0, {duration: 700, h: k}), Ca = new E([200, 60], "fun things to do &nbsp;&#9432;");
        Ca.j("info-button");
        var sa = new la(0, {duration: 500, h: k});
        Ca.m(new L);
        Ca.k("click", function () {
            G && (ha.show(), sa.show(), R.Ia(1), window._gaq && _gaq.push(["_trackEvent", "sign-up", "info", , , p]))
        });
        sessionStorage.getItem("signedUp") ? (G = p, P.Xc(v)) : (G = w, P.Xc(D));
        var wb = new E([600, 400], "<h3>Fun Things to Do</h3><ul><li>One finger to scroll</li><li>Two fingers to pinch zoom</li><li>Three fingers to plane in 3D</li><li>Touch any object to navigate to that object in 3D space</li><li>Touch-hold an object to disassemble any shape</li></ul><ul><li>Space key to shapeshift</li><li>WASD keys to move forward, left, backward, and right</li><li>Shift + W/S keys to move up/down</li><li>Arrow keys to rotate or spin</li><li>Hold Ctrl to enable mouse rotation</li></ul>");
        wb.j("info");
        var Za = new ua([new L]);
        Za.k("keyup", F);
        Za.k("click", F);
        var ia = new u(m.W), xb = new E([600, 500], '<h3>Welcome to <strong>famo.us</strong><br /><span class="sub">a javascript engine and framework that solves HTML5 performance</span></h3><p>40-60fps on phones, tablets, PCs, and televisions<br /> mod a template, or piece together components<br /> no plug-ins, no WebGL, no Canvas<br /> works on modern browsers<br />everything is DOM<br /> 65KB footprint</p><p class="experience">sign up for the beta, then experience famo.us</p>');
        xb.j("signup-box");
        var $a = new E([600, 150], '<form method="POST" action="#"><div class="input"><input id="email" type="text" size="30" name="email" maxlength="75" placeholder="enter email to sign up for beta" size="35" /><input id="github" class="half" type="text" size="30" name="github" maxlength="75" placeholder="github account" size="35" /><input id="github"  class="half" type="text" size="30" name="twitter" maxlength="75" placeholder="twitter account" size="35" /></div><input class="button" type="submit" value="sign up" /></form>');
        $a.j("signup");
        var X = new E([600, 20]);
        X.j("signup-error");
        var Da = new E([100, 100], '<img src="content/icons/circle-x.png" alt="x" />');
        Da.j("signup-hide");
        Da.m(new L);
        Da.k("click", function () {
            v();
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "hide", , , w])
        });
        var Ea = new E([120, 30], "sign up for beta");
        Ea.j("signup-show");
        Ea.m(new L);
        Ea.k("click", function () {
            D();
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "show", , , w])
        });
        var ta = new la(0), ab = new E([160, 30], '<a href="/privateBeta" target="_blank">private beta</a>');
        ab.j("signup-show");
        ab.m(new L);
        var na = new ja;
        na.i(xb);
        na.i(new u(m.translate(0, 145, 0.01))).f($a);
        na.i(new u(m.translate(0, 210, 0.01))).f(X);
        na.i(new u(m.translate(275, -225, 0.01))).f(Da);
        window.addEventListener("submit", function (a) {
            a.preventDefault();
            for (var b = {}, c = p, a = a.target.querySelectorAll("input"), d = 0; d < a.length; d++) {
                var e = a[d];
                e.name && (b[e.name] = e.value)
            }
            /^$|^[a-zA-Z0-9_]{1,15}$/.test(b.twitter) == w && (c = w);
            /^$|^[a-zA-Z0-9][a-zA-Z0-9-]{0,38}$/.test(b.github) == w && (c = w);
            a = document.location.href.split("/");
            b.referrerId = 2 <= a.length && "r" == a[a.length - 2] ? a[a.length - 1] : "";
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "submit", , 1, p]);
            a = new XMLHttpRequest;
            a.open("POST", "/developers");
            a.setRequestHeader("Content-Type", "application/json");
            a.onreadystatechange = function () {
                if (4 == this.readyState)if (200 == this.status) {
                    var a = JSON.parse(this.responseText);
                    "OK" == a.status ? (X.R(""), $a.R("<p><strong>Success!</strong> We just sent you an email with some more information. We'll send you updates soon.</p>" + ('<div class="tweet-button">' +
                        y("Tweet", a.socialId) + "</div>")), Fa.R(B(a.socialId)), sessionStorage.setItem("signedUp", p), window._gaq && _gaq.push(["_trackEvent", "sign-up", "success", , , w])) : X.R(a.msg)
                } else X.R("Ooops! Something went wrong. Try again."), window._gaq && _gaq.push(["_trackEvent", "sign-up", "error", , , p])
            };
            c ? a.send(JSON.stringify(b)) : (X.R("Ooops! Something went wrong. Try again."), window._gaq && _gaq.push(["_trackEvent", "sign-up", "error", , , p]))
        });
        var yb = new ua;
        yb.k("keyup", function (a) {
            if (A) {
                var b = new Common.API.TVKeyValue;
                a.keyCode ==
                    b.KEY_EXIT && v()
            } else 27 == a.keyCode && v(), 13 == a.keyCode && (document.activeElement && "INPUT" != document.activeElement.nodeName) && v()
        });
        var R = new Pa(0);
        R.Q(0).m($);
        R.Q(1).m(Za);
        R.Q(2).m(yb);
        var zb = new E([100, 60], "famo.us");
        zb.j("overlay-text");
        var Ga = new E([80, 60], '<a href="http://angel.co/famo-us" target="_blank">jobs</a>');
        Ga.j("jobs-button");
        Ga.j("overlay-text");
        Ga.k("click", function () {
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "jobs", , , p])
        });
        var Fa = new E([60, 60], B());
        Fa.j("shape-button");
        Fa.k("click",
            function () {
                window._gaq && _gaq.push(["_trackEvent", "demo", "tweet", , , w])
            });
        var Ab = new E([300, 60], "&copy; 2012 Famous Industries, Inc.");
        Ab.j("copyright");
        var mc = P.Pd(document.querySelector("#main")), Bb = P.Pd(document.querySelector("#overlay")), bb = new ja;
        bb.i(new u(m.move(m.scale(3, 3, 3), [0, -1E3, 0]))).f(ub);
        bb.i(H).f(V).f(z);
        var cb = new ja;
        cb.i(r).f(bb);
        cb.i(Ma).f(new u(m.translate(0, 0, 200))).f(ga).f(function () {
            var a = {transform: m.scale(1 / 3, 1 / 3, 1 / 3), target: 0 <= K ? Q[K].z() : s}, b = {transform: m.scale(1 / 3, 1 / 3, 1 /
                3), target: ba.z()};
            return[a, b]
        });
        var Ha = new Eb([window.innerWidth, 60]);
        Ha.j("bottom-bar");
        Bb.k("resize", function () {
            Ha.pa([window.innerWidth, 60]);
            Ya.pa([window.innerWidth, window.innerHeight])
        });
        var M = new ja;
        M.i(new u(m.translate(240, 0), 1, "b")).f(Fa);
        M.i(new u(m.translate(-120, 0), 1, "b")).f(hc);
        M.i(new u(m.translate(120, 0), 1, "b")).f(ic);
        M.i(new u(m.translate(0, 0), 1, "b")).f(kc);
        M.i(new u(m.translate(60, 0), 1, "b")).f(lc);
        M.i(new u(m.translate(-60, 0), 1, "b")).f(jc);
        M.i(new u(m.translate(0, 0, 0.01), 1, "b")).f(U).f(vb);
        M.i(new u(m.W, 1, "br")).f(Ca);
        M.i(new u(m.W, 1, "bl")).f(Ab);
        Ha.Qb(M);
        var N = new ja;
        N.i(Oa).f(Na);
        N.i(new u(m.W, 1, "tl")).f(zb);
        N.i(new u(m.W, 1, "tr")).f(Ga);
        N.i(new u(m.translate(0, 0, 0), 1, "b")).f(Ha);
        N.i(new u(m.translate(0, 0, 0.09))).f(ha).f(Ya);
        N.i(new u(m.translate(0, 0, 1))).f(sa).f(wb);
        N.i(new u(m.translate(0, 0, 1))).f(ia).f(na);
        N.i(new u(m.move(m.vd(Math.PI / 2), [-45, 0]), 1, "l")).f(ta).f(Ea);
        N.i(new u(m.move(m.vd(-Math.PI / 2), [65, 0]), 1, "r")).f(ta).f(ab);
        mc.Qb(cb);
        Bb.Qb(N);
        $.Q(0).Ga(W);
        $.Q(0).Ga(tb);
        $.Q(1).m(Aa);
        var db = new Gb;
        db.Ga(R);
        db.Ga(fa);
        P.m(db);
        P.I(function () {
            if (4 == J) {
                var a = Math.ceil(ma / 15) * hb, b = 5 * ib, c = 3 * jb, d = r.ja(), e = 0.5 * Math.abs(Math.sin(d[1]) + 1), d = 0.5 * Math.abs(-Math.sin(d[0]) + 1);
                H.Cb([(e - 1) * a, e * a], w);
                H.Db([(d - 1) * b, d * b], w);
                H.Eb([-c + 400, 400], w);
                gc.update()
            }
        });
        b(4)
    }
});
da(["app"]);

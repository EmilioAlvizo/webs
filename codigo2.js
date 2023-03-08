"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6617], {
    6617: function (e, t, n) {
        n.r(t),
            n.d(t, {
                SuperNavBar: function () {
                    return B
                }
            });
        var s, a = n(5893), r = n(7294), i = n(5152), o = n.n(i), l = n(3538), u = function () {
            if (void 0 !== s)
                return s;
            var e = !1
                , t = {
                    get passive() {
                        e = !0
                    }
                }
                , n = function () { };
            return window.addEventListener("t", n, t),
                window.removeEventListener("t", n, t),
                s = e,
                e
        }, c = r.useLayoutEffect, p = function (e) {
            var t = r.useRef(e);
            return c(function () {
                t.current = e
            }),
                t
        }, d = "touchstart", f = ["mousedown", d], h = function (e) {
            if (e === d && u())
                return {
                    passive: !0
                }
        }, v = function (e, t) {
            var n = p(t);
            (0,
                r.useEffect)(function () {
                    if (t) {
                        var s = function (t) {
                            !e.current || !n.current || e.current.contains(t.target) || n.current(t)
                        };
                        return f.forEach(function (e) {
                            document.addEventListener(e, s, h(e))
                        }),
                            function () {
                                f.forEach(function (e) {
                                    document.removeEventListener(e, s, h(e))
                                })
                            }
                    }
                }, [!t])
        };
        function m() {
            return (m = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var s in n)
                        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function x(e, t) {
            if (null == e)
                return {};
            var n, s, a = {}, r = Object.keys(e);
            for (s = 0; s < r.length; s++)
                n = r[s],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        function E(e, t) {
            return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
            )(e, t)
        }
        function b(e, t) {
            e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                E(e, t)
        }
        function g(e, t) {
            return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }
        var N = n(3935)
            , C = {
                disabled: !1
            }
            , j = r.createContext(null)
            , _ = function (e) {
                return e.scrollTop
            }
            , k = "unmounted"
            , y = "exited"
            , S = "entering"
            , O = "entered"
            , R = "exiting"
            , T = function (e) {
                function t(t, n) {
                    s = e.call(this, t, n) || this;
                    var s, a, r = n && !n.isMounting ? t.enter : t.appear;
                    return s.appearStatus = null,
                        t.in ? r ? (a = y,
                            s.appearStatus = S) : a = O : a = t.unmountOnExit || t.mountOnEnter ? k : y,
                        s.state = {
                            status: a
                        },
                        s.nextCallback = null,
                        s
                }
                b(t, e),
                    t.getDerivedStateFromProps = function (e, t) {
                        return e.in && t.status === k ? {
                            status: y
                        } : null
                    }
                    ;
                var n = t.prototype;
                return n.componentDidMount = function () {
                    this.updateStatus(!0, this.appearStatus)
                }
                    ,
                    n.componentDidUpdate = function (e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== S && n !== O && (t = S) : (n === S || n === O) && (t = R)
                        }
                        this.updateStatus(!1, t)
                    }
                    ,
                    n.componentWillUnmount = function () {
                        this.cancelNextCallback()
                    }
                    ,
                    n.getTimeouts = function () {
                        var e, t, n, s = this.props.timeout;
                        return e = t = n = s,
                            null != s && "number" != typeof s && (e = s.exit,
                                t = s.enter,
                                n = void 0 !== s.appear ? s.appear : t),
                        {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }
                    ,
                    n.updateStatus = function (e, t) {
                        if (void 0 === e && (e = !1),
                            null !== t) {
                            if (this.cancelNextCallback(),
                                t === S) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : N.findDOMNode(this);
                                    n && _(n)
                                }
                                this.performEnter(e)
                            } else
                                this.performExit()
                        } else
                            this.props.unmountOnExit && this.state.status === y && this.setState({
                                status: k
                            })
                    }
                    ,
                    n.performEnter = function (e) {
                        var t = this
                            , n = this.props.enter
                            , s = this.context ? this.context.isMounting : e
                            , a = this.props.nodeRef ? [s] : [N.findDOMNode(this), s]
                            , r = a[0]
                            , i = a[1]
                            , o = this.getTimeouts()
                            , l = s ? o.appear : o.enter;
                        if (!e && !n || C.disabled) {
                            this.safeSetState({
                                status: O
                            }, function () {
                                t.props.onEntered(r)
                            });
                            return
                        }
                        this.props.onEnter(r, i),
                            this.safeSetState({
                                status: S
                            }, function () {
                                t.props.onEntering(r, i),
                                    t.onTransitionEnd(l, function () {
                                        t.safeSetState({
                                            status: O
                                        }, function () {
                                            t.props.onEntered(r, i)
                                        })
                                    })
                            })
                    }
                    ,
                    n.performExit = function () {
                        var e = this
                            , t = this.props.exit
                            , n = this.getTimeouts()
                            , s = this.props.nodeRef ? void 0 : N.findDOMNode(this);
                        if (!t || C.disabled) {
                            this.safeSetState({
                                status: y
                            }, function () {
                                e.props.onExited(s)
                            });
                            return
                        }
                        this.props.onExit(s),
                            this.safeSetState({
                                status: R
                            }, function () {
                                e.props.onExiting(s),
                                    e.onTransitionEnd(n.exit, function () {
                                        e.safeSetState({
                                            status: y
                                        }, function () {
                                            e.props.onExited(s)
                                        })
                                    })
                            })
                    }
                    ,
                    n.cancelNextCallback = function () {
                        null !== this.nextCallback && (this.nextCallback.cancel(),
                            this.nextCallback = null)
                    }
                    ,
                    n.safeSetState = function (e, t) {
                        t = this.setNextCallback(t),
                            this.setState(e, t)
                    }
                    ,
                    n.setNextCallback = function (e) {
                        var t = this
                            , n = !0;
                        return this.nextCallback = function (s) {
                            n && (n = !1,
                                t.nextCallback = null,
                                e(s))
                        }
                            ,
                            this.nextCallback.cancel = function () {
                                n = !1
                            }
                            ,
                            this.nextCallback
                    }
                    ,
                    n.onTransitionEnd = function (e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : N.findDOMNode(this)
                            , s = null == e && !this.props.addEndListener;
                        if (!n || s) {
                            setTimeout(this.nextCallback, 0);
                            return
                        }
                        if (this.props.addEndListener) {
                            var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback]
                                , r = a[0]
                                , i = a[1];
                            this.props.addEndListener(r, i)
                        }
                        null != e && setTimeout(this.nextCallback, e)
                    }
                    ,
                    n.render = function () {
                        var e = this.state.status;
                        if (e === k)
                            return null;
                        var t = this.props
                            , n = t.children
                            , s = (t.in,
                                t.mountOnEnter,
                                t.unmountOnExit,
                                t.appear,
                                t.enter,
                                t.exit,
                                t.timeout,
                                t.addEndListener,
                                t.onEnter,
                                t.onEntering,
                                t.onEntered,
                                t.onExit,
                                t.onExiting,
                                t.onExited,
                                t.nodeRef,
                                x(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return r.createElement(j.Provider, {
                            value: null
                        }, "function" == typeof n ? n(e, s) : r.cloneElement(r.Children.only(n), s))
                    }
                    ,
                    t
            }(r.Component);
        function L() { }
        T.contextType = j,
            T.propTypes = {},
            T.defaultProps = {
                in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: L,
                onEntering: L,
                onEntered: L,
                onExit: L,
                onExiting: L,
                onExited: L
            },
            T.UNMOUNTED = k,
            T.EXITED = y,
            T.ENTERING = S,
            T.ENTERED = O,
            T.EXITING = R;
        var w = function (e, t) {
            return e && t && t.split(" ").forEach(function (t) {
                var n;
                (n = e).classList ? n.classList.remove(t) : "string" == typeof n.className ? n.className = g(n.className, t) : n.setAttribute("class", g(n.className && n.className.baseVal || "", t))
            })
        }
            , P = function (e) {
                function t() {
                    for (var t, n = arguments.length, s = Array(n), a = 0; a < n; a++)
                        s[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(s)) || this).appliedClasses = {
                        appear: {},
                        enter: {},
                        exit: {}
                    },
                        t.onEnter = function (e, n) {
                            var s = t.resolveArguments(e, n)
                                , a = s[0]
                                , r = s[1];
                            t.removeClasses(a, "exit"),
                                t.addClass(a, r ? "appear" : "enter", "base"),
                                t.props.onEnter && t.props.onEnter(e, n)
                        }
                        ,
                        t.onEntering = function (e, n) {
                            var s = t.resolveArguments(e, n)
                                , a = s[0]
                                , r = s[1];
                            t.addClass(a, r ? "appear" : "enter", "active"),
                                t.props.onEntering && t.props.onEntering(e, n)
                        }
                        ,
                        t.onEntered = function (e, n) {
                            var s = t.resolveArguments(e, n)
                                , a = s[0]
                                , r = s[1] ? "appear" : "enter";
                            t.removeClasses(a, r),
                                t.addClass(a, r, "done"),
                                t.props.onEntered && t.props.onEntered(e, n)
                        }
                        ,
                        t.onExit = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "appear"),
                                t.removeClasses(n, "enter"),
                                t.addClass(n, "exit", "base"),
                                t.props.onExit && t.props.onExit(e)
                        }
                        ,
                        t.onExiting = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.addClass(n, "exit", "active"),
                                t.props.onExiting && t.props.onExiting(e)
                        }
                        ,
                        t.onExited = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "exit"),
                                t.addClass(n, "exit", "done"),
                                t.props.onExited && t.props.onExited(e)
                        }
                        ,
                        t.resolveArguments = function (e, n) {
                            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
                        }
                        ,
                        t.getClassNames = function (e) {
                            var n = t.props.classNames
                                , s = "string" == typeof n
                                , a = s ? (s && n ? n + "-" : "") + e : n[e]
                                , r = s ? a + "-active" : n[e + "Active"]
                                , i = s ? a + "-done" : n[e + "Done"];
                            return {
                                baseClassName: a,
                                activeClassName: r,
                                doneClassName: i
                            }
                        }
                        ,
                        t
                }
                b(t, e);
                var n = t.prototype;
                return n.addClass = function (e, t, n) {
                    var s, a = this.getClassNames(t)[n + "ClassName"], r = this.getClassNames("enter").doneClassName;
                    "appear" === t && "done" === n && r && (a += " " + r),
                        "active" === n && e && _(e),
                        a && (this.appliedClasses[t][n] = a,
                            s = a,
                            e && s && s.split(" ").forEach(function (t) {
                                var n, s;
                                return n = e,
                                    s = t,
                                    void (n.classList ? n.classList.add(s) : (n.classList ? s && n.classList.contains(s) : -1 !== (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + s + " ")) || ("string" == typeof n.className ? n.className = n.className + " " + s : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + s)))
                            }))
                }
                    ,
                    n.removeClasses = function (e, t) {
                        var n = this.appliedClasses[t]
                            , s = n.base
                            , a = n.active
                            , r = n.done;
                        this.appliedClasses[t] = {},
                            s && w(e, s),
                            a && w(e, a),
                            r && w(e, r)
                    }
                    ,
                    n.render = function () {
                        var e = this.props
                            , t = (e.classNames,
                                x(e, ["classNames"]));
                        return r.createElement(T, m({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }
                    ,
                    t
            }(r.Component);
        P.defaultProps = {
            classNames: ""
        },
            P.propTypes = {};
        var A = n(1163)
            , D = n(4802)
            , M = n(9843)
            , I = n(4976);
        let z = e => (0,
            a.jsx)(I.r, {
                uri: e.href,
                onClick: e.onClick,
                className: (0,
                    M.cn)("super-navbar__item", e.className, e.currentPath === e.href ? "active" : void 0),
                children: e.children
            })
            , V = e => {
                var t;
                let { navbar: n, open: s, close: i } = e
                    , o = (0,
                        A.useRouter)()
                    , l = (0,
                        r.useRef)()
                    , u = (0,
                        r.useRef)();
                return v(u, i),
                    (0,
                        a.jsx)(P, {
                            nodeRef: l,
                            in: s,
                            timeout: 200,
                            unmountOnExit: !0,
                            className: "super-navbar__menu-wrapper",
                            children: (0,
                                a.jsx)("div", {
                                    ref: l,
                                    children: (0,
                                        a.jsxs)("div", {
                                            className: "super-navbar__menu",
                                            ref: u,
                                            children: [(0,
                                                a.jsx)("div", {
                                                    className: "super-navbar__button super-navbar__menu-close",
                                                    onClick: i,
                                                    children: (0,
                                                        a.jsx)(D.J, {
                                                            type: "closeMenu",
                                                            size: "1.25rem"
                                                        })
                                                }), (0,
                                                    a.jsx)("div", {
                                                        className: "super-navbar__menu-item-list",
                                                        children: null === (t = n.links) || void 0 === t ? void 0 : t.map(e => (0,
                                                            a.jsx)(z, {
                                                                href: e.link,
                                                                onClick: i,
                                                                currentPath: o.asPath,
                                                                children: e.label
                                                            }, e.label))
                                                    })]
                                        })
                                })
                        })
            }
            , F = e => {
                let { navbar: t } = e
                    , n = (0,
                        A.useRouter)();
                return (0,
                    a.jsx)("div", {
                        className: "super-navbar__item-list",
                        children: t.links.map(e => (0,
                            a.jsx)(z, {
                                href: e.link,
                                currentPath: n.asPath,
                                children: e.label
                            }, e.label))
                    })
            }
            , U = e => (0,
                a.jsx)(I.r, {
                    uri: e.href,
                    onClick: e.onClick,
                    children: (0,
                        a.jsx)("div", {
                            className: "super-navbar__cta",
                            children: e.label
                        })
                })
            , G = e => {
                var t, n, s, r, i, o;
                let { navbar: l, siteSearch: u, toggleSearch: c, openMenu: p } = e;
                return (null === (t = l.cta) || void 0 === t ? void 0 : t.label) || (null === (n = l.links) || void 0 === n ? void 0 : n.length) || u ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                            a.jsx)(F, {
                                ...e
                            }), (0,
                                a.jsxs)("div", {
                                    className: "super-navbar__actions ".concat((null === (s = l.cta) || void 0 === s ? void 0 : s.label) || u || "minimal" === l.type ? "" : "hide"),
                                    children: [(null === (r = l.cta) || void 0 === r ? void 0 : r.label) ? (0,
                                        a.jsx)(U, {
                                            href: l.cta.link,
                                            label: l.cta.label
                                        }) : null, u ? (0,
                                            a.jsx)("div", {
                                                className: "super-navbar__button super-navbar__search",
                                                onClick: c,
                                                children: (0,
                                                    a.jsx)(D.J, {
                                                        type: "search",
                                                        size: "1.25rem"
                                                    })
                                            }) : null, (null === (i = l.links) || void 0 === i ? void 0 : i.length) ? (0,
                                                a.jsx)("div", {
                                                    className: "super-navbar__button super-navbar__menu-open",
                                                    style: {
                                                        display: (null === (o = l.links) || void 0 === o ? void 0 : o.length) > 6 ? "flex" : null
                                                    },
                                                    onClick: p,
                                                    children: (0,
                                                        a.jsx)(D.J, {
                                                            type: "menu",
                                                            size: "1.25rem"
                                                        })
                                                }) : null]
                                })]
                    }) : null
            }
            ;
        var J = n(9312);
        let$ = e => {
            var t;
            let { navbar: n, style: s, title: r } = e;
            return (0,
                a.jsx)(I.r, {
                    uri: "/",
                    className: "super-navbar__logo",
                    children: n.logo.type === l.Vj.Text && n.logo.textContent ? (0,
                        a.jsx)("span", {
                            className: "super-navbar__logo-text",
                            style: s.logo,
                            children: n.logo.textContent
                        }) : n.logo.type === l.Vj.Image && n.logo.imageContent ? (0,
                            a.jsx)("div", {
                                className: "super-navbar__logo-image",
                                style: {
                                    width: "".concat((null == s ? void 0 : null === (t = s.logo) || void 0 === t ? void 0 : t.width) || 24, "px")
                                },
                                children: (0,
                                    a.jsx)(J.t, {
                                        src: n.logo.imageContent,
                                        alt: "Logo",
                                        layout: "fill",
                                        priority: !0,
                                        objectFit: "contain",
                                        objectPosition: "left"
                                    })
                            }) : (0,
                                a.jsx)("span", {
                                    className: "super-navbar__logo-text",
                                    style: s.logo,
                                    children: r
                                })
                })
        }
            , X = o()(() => n.e(3696).then(n.bind(n, 3696)).then(e => e.Search), {
                loadableGenerated: {
                    webpack: () => [3696]
                }
            })
            , B = e => {
                var t, n, s;
                let i = e.siteId
                    , o = null == e ? void 0 : null === (t = e.root) || void 0 === t ? void 0 : t.id
                    , u = e.domainName
                    , { navbar: c } = e
                    , [p, d] = (0,
                        r.useState)(!1)
                    , [f, h] = (0,
                        r.useState)(!1)
                    , [v, m] = (0,
                        r.useState)(!1)
                    , x = {
                        navbar: {
                            position: c.style.isSticky ? "sticky" : "static"
                        },
                        logo: (null === (n = c.logo) || void 0 === n ? void 0 : n.type) === l.Vj.Image ? {
                            width: c.logo.width,
                            fontSize: c.logo.fontSize
                        } : {
                            fontSize: c.logo.fontSize
                        }
                    }
                    , E = () => {
                        h(!0),
                            m(!v)
                    }
                    ;
                return (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                            a.jsxs)("div", {
                                className: "super-navbar ".concat(c.type),
                                style: x.navbar,
                                children: [(0,
                                    a.jsxs)("div", {
                                        className: "super-navbar__content",
                                        children: [(0,
                                            a.jsx)($, {
                                                navbar: c,
                                                style: x,
                                                title: e.root.title
                                            }), (0,
                                                a.jsx)(G, {
                                                    navbar: c,
                                                    toggleSearch: E,
                                                    siteSearch: e.siteSearch,
                                                    openMenu: () => d(!0)
                                                })]
                                    }), (null === (s = c.links) || void 0 === s ? void 0 : s.length) ? (0,
                                        a.jsx)(V, {
                                            navbar: c,
                                            open: p,
                                            close: () => d(!1)
                                        }) : null]
                            }), e.siteSearch && f ? (0,
                                a.jsx)(X, {
                                    siteId: i,
                                    rootPageId: o,
                                    domainName: u,
                                    open: v,
                                    close: () => m(!1)
                                }) : null]
                    })
            }
    }
}]);

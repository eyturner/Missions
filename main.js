!(function (e) {
  var t = {};
  function n(d) {
    if (t[d]) return t[d].exports;
    var i = (t[d] = { i: d, l: !1, exports: {} });
    return e[d].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, d) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: d });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var d = Object.create(null);
      if (
        (n.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            d,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return d;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    const d = () => {
        let e = document.createElement("div");
        return (e.id = "myModal"), e.classList.add("modal"), e;
      },
      i = (e, t) => {
        let n = document.createElement("div");
        n.classList.add("modal-header"), n.classList.add(t);
        let d = document.createElement("span");
        d.classList.add("close"),
          (d.innerHTML = "&times;"),
          d.addEventListener("click", r);
        let i = document.createElement("h2");
        return (i.innerHTML = e), n.appendChild(i), n.appendChild(d), n;
      },
      l = (e) => {
        let t = document.createElement("div");
        t.classList.add("modal-footer"), t.classList.add(e);
        let n = document.createElement("h3");
        return (
          (n.innerHTML = "Submit"),
          n.classList.add("submitBtn"),
          t.appendChild(n),
          t
        );
      },
      a = () => {
        let e = d();
        window.onclick = (t) => {
          t.target == e && r();
        };
        let t = document.createElement("div");
        t.classList.add("modal-content");
        let n = i("Add Mission", "missionModal"),
          a = (() => {
            let e = document.createElement("div");
            e.classList.add("modal-body");
            let t = document.createElement("form");
            t.classList.add("newMissionForm");
            let n = document.createElement("div");
            n.classList.add("modalTitleDiv");
            let d = document.createElement("input");
            d.id = "titleInput";
            let i = document.createElement("label");
            (i.id = "missionTitleLabel"),
              (i.for = d.id),
              (i.innerHTML = "Mission Title"),
              n.appendChild(i),
              n.appendChild(d);
            let l = document.createElement("div");
            l.classList.add("newMissionDescriptionDiv");
            let a = document.createElement("input");
            a.id = "descriptionInput";
            let s = document.createElement("label");
            return (
              (s.for = a.id),
              (s.innerHTML = "Mission Description"),
              l.appendChild(s),
              l.appendChild(a),
              t.appendChild(n),
              t.appendChild(l),
              e.appendChild(t),
              e
            );
          })(),
          s = l("missionModal");
        return (
          t.appendChild(n),
          t.appendChild(a),
          t.appendChild(s),
          e.appendChild(t),
          (e.style.display = "block"),
          document.body.appendChild(e),
          e
        );
      },
      s = () => {
        r();
        let e = d();
        window.onclick = (t) => {
          t.target == e && r();
        };
        let t = document.createElement("div");
        t.classList.add("modal-content");
        let n = i("Add TaskSet", "taskSetModal"),
          a = (() => {
            let e = document.createElement("div");
            e.classList.add("modal-body");
            let t = document.createElement("form");
            t.classList.add("newTaskSetForm");
            let n = document.createElement("div");
            n.classList.add("modalTitleDiv");
            let d = document.createElement("input");
            d.id = "titleInput";
            let i = document.createElement("label");
            (i.id = "taskSetTitleLabel"),
              (i.for = d.id),
              (i.innerHTML = "TaskSet Title"),
              n.appendChild(i),
              n.appendChild(d);
            let l = document.createElement("div");
            l.classList.add("newTaskSetNoteDiv");
            let a = document.createElement("input");
            a.id = "noteInput";
            let s = document.createElement("label");
            return (
              (s.id = "taskSetDescriptionLabel"),
              (s.for = a.id),
              (s.innerHTML = "TaskSet Note"),
              l.appendChild(s),
              l.appendChild(a),
              t.appendChild(n),
              t.appendChild(l),
              e.appendChild(t),
              e
            );
          })(),
          s = l("taskSetModal");
        return (
          t.appendChild(n),
          t.appendChild(a),
          t.appendChild(s),
          e.appendChild(t),
          (e.style.display = "block"),
          document.body.appendChild(e),
          e
        );
      },
      o = (e) => {
        let t = d();
        window.onclick = (e) => {
          e.target == t && r();
        };
        let n = document.createElement("div");
        n.classList.add("modal-content");
        let a = i("Edit TaskSet", "taskSetModal"),
          s = ((e) => {
            let t = document.createElement("div");
            t.classList.add("modal-body");
            let n = document.createElement("form");
            n.classList.add("newTaskSetForm");
            let d = document.createElement("div");
            d.classList.add("modalTitleDiv");
            let i = document.createElement("input");
            (i.id = "titleInput"), (i.value = e.getTitle());
            let l = document.createElement("label");
            (l.id = "taskSetTitleLabel"),
              (l.for = i.id),
              (l.innerHTML = "TaskSet Title"),
              d.appendChild(l),
              d.appendChild(i);
            let a = document.createElement("div");
            a.classList.add("newTaskSetNoteDiv");
            let s = document.createElement("input");
            (s.id = "noteInput"), (s.value = e.getNote());
            let o = document.createElement("label");
            return (
              (o.id = "taskSetDescriptionLabel"),
              (o.for = s.id),
              (o.innerHTML = "TaskSet Note"),
              a.appendChild(o),
              a.appendChild(s),
              n.appendChild(d),
              n.appendChild(a),
              t.appendChild(n),
              t
            );
          })(e),
          o = l("taskSetModal");
        return (
          n.appendChild(a),
          n.appendChild(s),
          n.appendChild(o),
          t.appendChild(n),
          (t.style.display = "block"),
          document.body.appendChild(t),
          t
        );
      },
      r = () => {
        let e = document.getElementById("myModal");
        e && document.body.removeChild(e);
      };
    function c(e, t, n) {
      (this.title = e),
        (this.taskArr = []),
        (this.id = t),
        (this.note = n || ""),
        (this.getTitle = function () {
          return this.title;
        }),
        (this.getId = function () {
          return this.id;
        }),
        (this.getNote = function () {
          return this.note;
        }),
        (this.setTitle = function (e) {
          this.title = e;
        }),
        (this.setNote = function (e) {
          this.note = e;
        }),
        (this.addTask = function (e) {
          this.taskArr.push(e);
        }),
        (this.getTasks = function () {
          return this.taskArr;
        }),
        (this.isEmpty = function () {
          return 0 == this.taskArr.length;
        }),
        (this.removeTask = function (e) {
          for (let t = 0; t < this.taskArr.length; ++t)
            this.taskArr[t] == e && this.taskArr.splice(t, 1);
        });
    }
    function u(e, t, n) {
      (this.title = e),
        (this.id = t),
        (this.dueDate = n),
        (this.isComplete = !1),
        (this.setDueDate = function (e) {
          this.dueDate = e;
        }),
        (this.setTitle = function (e) {
          this.title = e;
        }),
        (this.getId = function () {
          return this.id;
        }),
        (this.completeTask = function () {
          this.isComplete = !0;
        });
    }
    let m = document.querySelector(".mission"),
      p = null,
      h = [];
    const k = (e) => {
        let t = document.getElementById("titleInput").value,
          n = document.getElementById("noteInput").value;
        e.setTitle(t), e.setNote(n), r(), v(p);
      },
      T = (e) => {
        p = e;
      },
      y = (e) => {
        let t = document.querySelector(".newTaskSetForm"),
          n = t.elements[0].value,
          d = t.elements[1].value,
          i = new c(n, e.getTaskSets().length, d);
        return e.addTaskSet(i), i;
      },
      E = (e, t) => {
        let n = document.createElement("div");
        n.classList.add("task");
        let d = document.createElement("input");
        (d.type = "checkbox"),
          d.addEventListener("change", () => {
            d.checked
              ? (t.removeTask(e), t.isEmpty() && v(p))
              : (p.getTaskSets().includes(t) || p.addTaskSet(t), t.addTask(e));
          });
        let i = e.title,
          l = document.createElement("p");
        return (l.innerHTML = i), n.appendChild(d), n.appendChild(l), n;
      },
      f = (e) => {
        let t = e.title,
          n = e.note,
          d = e.getTasks(),
          i = document.createElement("div");
        i.classList.add("taskSet");
        let l = document.createElement("div");
        l.classList.add("taskSetNameOptions");
        let a = document.createElement("h4");
        a.classList.add("taskSetTitle"), (a.innerHTML = t);
        let s = document.createElement("h6");
        s.innerHTML = n;
        let r = document.createElement("h4");
        r.classList.add("optionsBtn"),
          (r.innerHTML = "..."),
          r.addEventListener("click", () => {
            o(e).addEventListener("keydown", (t) => {
              13 == t.keyCode && k(e);
            }),
              document
                .getElementById("submitBtn")
                .addEventListener("click", () => {
                  k(e);
                });
          }),
          l.appendChild(a),
          l.appendChild(s),
          l.appendChild(r),
          i.appendChild(l);
        for (let t = 0; t < d.length; t++) {
          let n = E(d[t], e);
          i.appendChild(n);
        }
        let c = document.createElement("input");
        return (
          c.classList.add("newTaskInput"),
          (c.placeholder = "Add new task"),
          i.appendChild(c),
          c.addEventListener("keydown", (t) => {
            if (13 == t.keyCode) {
              let t = c.value;
              e.addTask(new u(t, d.length, "Eventually")), v(p);
            }
          }),
          i
        );
      },
      g = () => {
        m.textContent = "";
      },
      v = (e) => {
        T(e),
          (document.getElementById("landingDiv").style.display = "none"),
          g();
        let t = e.title,
          n = e.description,
          d = e.getTaskSets();
        var i;
        ((e) => {
          let t = document.createElement("div");
          t.id = "missionHeaderDiv";
          let n = document.createElement("h1");
          (n.id = "missionTitle"), (n.innerHTML = e);
          let d = document.createElement("h3");
          (d.innerHTML = "+"),
            (d.id = "addTaskSetBtn"),
            d.addEventListener("click", () => {
              let e = s();
              (document.querySelector(".submitBtn").onclick = function () {
                y(p), r(), v(p);
              }),
                e.addEventListener("keydown", (e) => {
                  13 == e.keyCode && (e.preventDefault(), y(p), r(), v(p));
                });
            }),
            t.appendChild(n),
            t.appendChild(d),
            m.appendChild(t);
        })(t),
          ((e) => {
            let t = document.createElement("p");
            (t.innerHTML = e), m.appendChild(t);
          })(n),
          (i = e.id),
          (m.id = i);
        for (let e = 0; e < d.length; e++) {
          let t = f(d[e]);
          m.appendChild(t);
        }
      };
    let L = !0;
    const C = (e) => {
        let t = e.title,
          n = e.id,
          l = document.getElementById("sidebarMissionDiv");
        console.log("Adding Mission", t, n);
        let a = document.createElement("div");
        a.classList.add("sidebarMission"), (a.id = n);
        let s = document.createElement("div");
        s.classList.add("sidebarMissionTitle"), (s.innerHTML = t);
        let o = document.createElement("div");
        return (
          o.classList.add("sidebarCloseBtn"),
          (o.innerHTML = "&times;"),
          o.addEventListener("click", () => {
            (() => {
              let e = d();
              window.onclick = (t) => {
                t.target == e && r();
              };
              let t = document.createElement("div");
              t.classList.add("modal-content");
              let n = i("Delete Mission", "deleteMissionModal"),
                l = document.createElement("div");
              l.classList.add("modal-body"), (l.id = "deleteModalBody");
              let a = document.createElement("button");
              a.classList.add("deleteBtn"),
                (a.innerHTML = "Yes"),
                l.appendChild(a);
              let s = document.createElement("button");
              s.classList.add("saveBtn"),
                (s.innerHTML = "No"),
                l.appendChild(s),
                t.appendChild(n),
                t.appendChild(l),
                e.appendChild(t),
                (e.style.display = "block"),
                document.body.appendChild(e);
            })(),
              document
                .querySelector(".deleteBtn")
                .addEventListener("click", () => {
                  b(l, a),
                    ((e) => {
                      for (let t = 0; t < h.length; t++)
                        h[t].id == e.id && h.splice(t, 1);
                    })(a),
                    g(),
                    M();
                }),
              document
                .querySelector(".saveBtn")
                .addEventListener("click", () => {
                  r();
                });
          }),
          a.appendChild(s),
          a.appendChild(o),
          l.appendChild(a),
          s.addEventListener("click", () => {
            S(a), v(e);
          }),
          L || S(a),
          a
        );
      },
      S = (e) => {
        document.querySelectorAll(".sidebarMission").forEach((t) => {
          if (t.classList.contains("selected")) {
            if (t != e) return void t.classList.toggle("selected");
          } else t == e && t.classList.toggle("selected");
        });
      },
      b = (e, t) => {
        e.removeChild(t);
      },
      M = () => {
        let e = document.getElementById("landingDiv");
        if (e) e.style.display = "flex";
        else {
          let e = document.createElement("div");
          e.id = "landingDiv";
          let t = document.createElement("img");
          (t.id = "landingImage"), (t.src = "images/astronaut.png");
          let n = document.createElement("h2");
          (n.id = "landingHeader"),
            (n.innerHTML = "Choose or Add a Mission to Get Started!"),
            e.appendChild(t),
            e.appendChild(n),
            document.getElementById("content").appendChild(e);
        }
      };
    function w(e, t, n) {
      (this.title = e),
        (this.id = t),
        (this.taskSetArr = []),
        (this.description = n || ""),
        (this.getID = function () {
          return this.id;
        }),
        (this.setDescription = function (e) {
          this.description = e;
        }),
        (this.addTaskSet = function (e) {
          this.taskSetArr.push(e);
        }),
        (this.getTaskSets = function () {
          return this.taskSetArr;
        }),
        (this.removeTaskSet = function (e) {
          for (let t = 0; t < this.taskSetArr.length; t++)
            e == this.taskSetArr[t] && this.taskSetArr.splice(t, 1);
        });
    }
    let H = 0,
      D = new u("Design Layout", H++, "Eventually"),
      A = new u("Implement JS", H++, "Eventually"),
      I = new u("Connect to Skeleton", H++, "Eventually"),
      B = 0,
      N = new c("Coding Tasks", B++);
    N.setNote(
      "Gotta get that job son! How else are you going to pay for your stuff?"
    ),
      N.addTask(D),
      N.addTask(A),
      N.addTask(I);
    let O = new c("Cleaning", B++);
    O.setNote(
      "Gotta get that house clean son! How else are you going to lounge around?"
    ),
      O.addTask(D),
      O.addTask(A),
      O.addTask(I);
    let j = new c("Fun", B++);
    j.setNote(
      "Gotta get that play in son! How else are you going to get relief?"
    ),
      j.addTask(D),
      j.addTask(A),
      j.addTask(I);
    let q = 0,
      x = new w("Today", q++);
    x.setDescription(
      "Make sure to do all of this today AT LEAST. Once you finish this, you can spend your time how you like."
    ),
      x.addTaskSet(N),
      x.addTaskSet(O),
      x.addTaskSet(j);
    let F = new c("Coding Tasks", B++);
    F.setNote(
      "Gotta get that job son! How else are you going to pay for your stuff?"
    ),
      F.addTask(D),
      F.addTask(A),
      F.addTask(I);
    let G = new c("Cleaning", B++);
    G.setNote(
      "Gotta get that house clean son! How else are you going to lounge around?"
    ),
      G.addTask(D),
      G.addTask(A),
      G.addTask(I);
    let _ = new c("Fun", B++);
    _.setNote(
      "Gotta get that play in son! How else are you going to get relief?"
    ),
      _.addTask(D),
      _.addTask(A),
      _.addTask(I);
    let P = new w("Tomorrow", q++);
    P.setDescription(
      "Make sure to do all of this tomorrow AT LEAST. Once you finish this, you can spend your time how you like."
    ),
      P.addTaskSet(F),
      P.addTaskSet(G),
      P.addTaskSet(_);
    let J = h;
    J.push(x), J.push(P);
    let Y = J.length;
    ((e) => {
      ((e) => {
        for (let t = 0; t < e.length; t++) C(e[t]);
      })(e),
        M(),
        (L = !1);
    })(J);
    const z = () => {
      let e = (() => {
        let e = document.querySelector(".newMissionForm"),
          t = e.elements[0].value,
          n = e.elements[1].value,
          d = new w(t, Y++, n);
        return J.push(d), C(d), d;
      })();
      r(), v(e), T(e);
    };
    document.getElementById("addMissionBtn").onclick = function () {
      let e = a();
      document.querySelector(".submitBtn").addEventListener("click", () => {
        z();
      }),
        e.addEventListener("keydown", (e) => {
          13 == e.keyCode && (e.preventDefault(), z());
        });
    };
  },
]);

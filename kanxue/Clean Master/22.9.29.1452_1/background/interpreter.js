!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.interpreter = e())
    : (t.interpreter = e());
})("undefined" != typeof self ? self : this, function () {
  return (
    (i = [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {},
          r =
            ((n.prototype.$set = function (t) {
              return "const" !== this.value && ((this.value = t), !0);
            }),
            (n.prototype.$get = function () {
              return this.value;
            }),
            n);
        function n(t, e) {
          (this.value = e), (this.kind = t);
        }
        function a(t, e) {
          (this.object = t), (this.property = e);
        }
        function o(t, e, i) {
          (this.prefix = "@"),
            (this.type = t),
            (this.parent = e || null),
            (this.content = {}),
            (this.invasived = !1);
        }
        (e.ScopeVar = r),
          (a.prototype.$set = function (t) {
            return (this.object[this.property] = t), !0;
          }),
          (a.prototype.$get = function () {
            return this.object[this.property];
          }),
          (a.prototype.$delete = function () {
            delete this.object[this.property];
          }),
          (e.PropVar = a),
          (o.prototype.$find = function (t) {
            var e = this.prefix + t;
            return this.content.hasOwnProperty(e)
              ? this.content[e]
              : this.parent
              ? this.parent.$find(t)
              : t in s
              ? new r("const", s[t])
              : null;
          }),
          (o.prototype.$let = function (t, e) {
            t = this.prefix + t;
            return (
              !this.content[t] && ((this.content[t] = new r("let", e)), !0)
            );
          }),
          (o.prototype.$const = function (t, e) {
            t = this.prefix + t;
            return (
              !this.content[t] && ((this.content[t] = new r("const", e)), !0)
            );
          }),
          (o.prototype.$var = function (t, e) {
            for (
              var t = this.prefix + t, i = this;
              null !== i.parent && "function" !== i.type;

            )
              i = i.parent;
            return !i.content[t] && ((this.content[t] = new r("var", e)), !0);
          }),
          (o.prototype.$declar = function (t, e, i) {
            var s = this;
            return {
              var: function () {
                return s.$var(e, i);
              },
              let: function () {
                return s.$let(e, i);
              },
              const: function () {
                return s.$const(e, i);
              },
            }[t]();
          }),
          (e.Scope = o);
      },
      function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = i(2),
          r = i(0),
          n = i(3),
          a = { ecmaVersion: 5, sourceType: "script", locations: !0 };
        e.run = function (t) {
          var e = new r.Scope("block"),
            i = (e.$const("this", this), {});
          return (
            e.$const("module", { exports: i }),
            e.$const("exports", i),
            n.default(s.parse(t, a), e),
            (i = e.$find("module")) ? i.$get().exports : null
          );
        };
      },
      function (t, e, i) {
        (function (s) {
          "use strict";
          var a = {
              3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
              5: "class enum extends super const export import",
              6: "enum",
              strict:
                "implements interface let package private protected public static yield",
              strictBind: "eval arguments",
            },
            t =
              "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
            O = { 5: t, 6: t + " const class extends export import super" },
            M = /^in(stanceof)?$/,
            t =
              "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
            B = new RegExp("[" + t + "]"),
            F = new RegExp(
              "[" +
                t +
                "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿]"
            ),
            i = [
              0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28,
              4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157,
              19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3,
              0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21,
              11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28,
              36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14,
              50, 14, 35, 477, 28, 11, 0, 9, 21, 190, 52, 76, 44, 33, 24, 27,
              35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2,
              24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2,
              6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1,
              2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 26, 230, 43, 117,
              63, 32, 0, 257, 0, 11, 39, 8, 0, 22, 0, 12, 39, 3, 3, 20, 0, 35,
              56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26,
              5, 2, 1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749,
              1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20,
              6, 18, 689, 63, 129, 68, 12, 0, 67, 12, 65, 1, 31, 6129, 15, 754,
              9486, 286, 82, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70,
              2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2,
              6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2,
              24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60,
              67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7,
              0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2,
              0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2,
              4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104,
              541,
            ],
            U = [
              509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0,
              166, 1, 574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46,
              10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3,
              4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2,
              10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9,
              214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9,
              243, 14, 166, 9, 280, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406,
              7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9,
              9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26,
              9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3,
              149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361,
              6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239,
            ];
          function r(t, e) {
            for (var i = 65536, s = 0; s < e.length; s += 2) {
              if (t < (i += e[s])) return !1;
              if (t <= (i += e[s + 1])) return !0;
            }
          }
          function o(t, e) {
            return t < 65
              ? 36 === t
              : t < 91 ||
                  (t < 97
                    ? 95 === t
                    : t < 123 ||
                      (t <= 65535
                        ? 170 <= t && B.test(String.fromCharCode(t))
                        : !1 !== e && r(t, i)));
          }
          function h(t, e) {
            return t < 48
              ? 36 === t
              : t < 58 ||
                  (!(t < 65) &&
                    (t < 91 ||
                      (t < 97
                        ? 95 === t
                        : t < 123 ||
                          (t <= 65535
                            ? 170 <= t && F.test(String.fromCharCode(t))
                            : !1 !== e && (r(t, i) || r(t, U))))));
          }
          function n(t, e) {
            void 0 === e && (e = {}),
              (this.label = t),
              (this.keyword = e.keyword),
              (this.beforeExpr = !!e.beforeExpr),
              (this.startsExpr = !!e.startsExpr),
              (this.isLoop = !!e.isLoop),
              (this.isAssign = !!e.isAssign),
              (this.prefix = !!e.prefix),
              (this.postfix = !!e.postfix),
              (this.binop = e.binop || null),
              (this.updateContext = null);
          }
          function e(t, e) {
            return new n(t, { beforeExpr: !0, binop: e });
          }
          var t = { beforeExpr: !0 },
            p = { startsExpr: !0 },
            c = {};
          function u(t, e) {
            return (
              ((e = void 0 === e ? {} : e).keyword = t), (c[t] = new n(t, e))
            );
          }
          var g = {
              num: new n("num", p),
              regexp: new n("regexp", p),
              string: new n("string", p),
              name: new n("name", p),
              eof: new n("eof"),
              bracketL: new n("[", { beforeExpr: !0, startsExpr: !0 }),
              bracketR: new n("]"),
              braceL: new n("{", { beforeExpr: !0, startsExpr: !0 }),
              braceR: new n("}"),
              parenL: new n("(", { beforeExpr: !0, startsExpr: !0 }),
              parenR: new n(")"),
              comma: new n(",", t),
              semi: new n(";", t),
              colon: new n(":", t),
              dot: new n("."),
              question: new n("?", t),
              arrow: new n("=>", t),
              template: new n("template"),
              invalidTemplate: new n("invalidTemplate"),
              ellipsis: new n("...", t),
              backQuote: new n("`", p),
              dollarBraceL: new n("${", { beforeExpr: !0, startsExpr: !0 }),
              eq: new n("=", { beforeExpr: !0, isAssign: !0 }),
              assign: new n("_=", { beforeExpr: !0, isAssign: !0 }),
              incDec: new n("++/--", {
                prefix: !0,
                postfix: !0,
                startsExpr: !0,
              }),
              prefix: new n("!/~", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              logicalOR: e("||", 1),
              logicalAND: e("&&", 2),
              bitwiseOR: e("|", 3),
              bitwiseXOR: e("^", 4),
              bitwiseAND: e("&", 5),
              equality: e("==/!=/===/!==", 6),
              relational: e("</>/<=/>=", 7),
              bitShift: e("<</>>/>>>", 8),
              plusMin: new n("+/-", {
                beforeExpr: !0,
                binop: 9,
                prefix: !0,
                startsExpr: !0,
              }),
              modulo: e("%", 10),
              star: e("*", 10),
              slash: e("/", 10),
              starstar: new n("**", { beforeExpr: !0 }),
              _break: u("break"),
              _case: u("case", t),
              _catch: u("catch"),
              _continue: u("continue"),
              _debugger: u("debugger"),
              _default: u("default", t),
              _do: u("do", { isLoop: !0, beforeExpr: !0 }),
              _else: u("else", t),
              _finally: u("finally"),
              _for: u("for", { isLoop: !0 }),
              _function: u("function", p),
              _if: u("if"),
              _return: u("return", t),
              _switch: u("switch"),
              _throw: u("throw", t),
              _try: u("try"),
              _var: u("var"),
              _const: u("const"),
              _while: u("while", { isLoop: !0 }),
              _with: u("with"),
              _new: u("new", { beforeExpr: !0, startsExpr: !0 }),
              _this: u("this", p),
              _super: u("super", p),
              _class: u("class", p),
              _extends: u("extends", t),
              _export: u("export"),
              _import: u("import"),
              _null: u("null", p),
              _true: u("true", p),
              _false: u("false", p),
              _in: u("in", { beforeExpr: !0, binop: 7 }),
              _instanceof: u("instanceof", { beforeExpr: !0, binop: 7 }),
              _typeof: u("typeof", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              _void: u("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
              _delete: u("delete", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
            },
            l = /\r\n?|\n|\u2028|\u2029/,
            d = new RegExp(l.source, "g");
          function f(t, e) {
            return 10 === t || 13 === t || (!e && (8232 === t || 8233 === t));
          }
          var m = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            x = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            t = Object.prototype,
            $ = t.hasOwnProperty,
            j = t.toString;
          function y(t, e) {
            return $.call(t, e);
          }
          function v(t, e) {
            (this.line = t), (this.column = e);
          }
          function b(t, e, i) {
            (this.start = e),
              (this.end = i),
              null !== t.sourceFile && (this.source = t.sourceFile);
          }
          var _ =
            Array.isArray ||
            function (t) {
              return "[object Array]" === j.call(t);
            };
          function G(t, e) {
            for (var i = 1, s = 0; ; ) {
              d.lastIndex = s;
              var r = d.exec(t);
              if (!(r && r.index < e)) return new v(i, e - s);
              ++i, (s = r.index + r[0].length);
            }
          }
          var k = {
            ecmaVersion: 7,
            sourceType: "script",
            onInsertedSemicolon: null,
            onTrailingComma: null,
            allowReserved: null,
            allowReturnOutsideFunction: !(v.prototype.offset = function (t) {
              return new v(this.line, this.column + t);
            }),
            allowImportExportEverywhere: !1,
            allowAwaitOutsideFunction: !1,
            allowHashBang: !1,
            locations: !1,
            onToken: null,
            onComment: null,
            ranges: !1,
            program: null,
            sourceFile: null,
            directSourceFile: null,
            preserveParens: !1,
            plugins: {},
          };
          function q(t) {
            var e,
              i,
              a,
              o,
              s = {};
            for (e in k) s[e] = (t && y(t, e) ? t : k)[e];
            return (
              2015 <= s.ecmaVersion && (s.ecmaVersion -= 2009),
              null == s.allowReserved && (s.allowReserved = s.ecmaVersion < 5),
              _(s.onToken) &&
                ((i = s.onToken),
                (s.onToken = function (t) {
                  return i.push(t);
                })),
              _(s.onComment) &&
                (s.onComment =
                  ((o = (a = s).onComment),
                  function (t, e, i, s, r, n) {
                    t = {
                      type: t ? "Block" : "Line",
                      value: e,
                      start: i,
                      end: s,
                    };
                    a.locations && (t.loc = new b(this, r, n)),
                      a.ranges && (t.range = [i, s]),
                      o.push(t);
                  })),
              s
            );
          }
          var W = {};
          function S(t) {
            return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$");
          }
          function w(t, e, i) {
            (this.options = t = q(t)),
              (this.sourceFile = t.sourceFile),
              (this.keywords = S(O[6 <= t.ecmaVersion ? 6 : 5]));
            var s = "";
            if (!t.allowReserved) {
              for (var r = t.ecmaVersion; !(s = a[r]); r--);
              "module" === t.sourceType && (s += " await");
            }
            this.reservedWords = S(s);
            var n = (s ? s + " " : "") + a.strict;
            (this.reservedWordsStrict = S(n)),
              (this.reservedWordsStrictBind = S(n + " " + a.strictBind)),
              (this.input = String(e)),
              (this.containsEsc = !1),
              this.loadPlugins(t.plugins),
              i
                ? ((this.pos = i),
                  (this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1),
                  (this.curLine = this.input
                    .slice(0, this.lineStart)
                    .split(l).length))
                : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
              (this.type = g.eof),
              (this.value = null),
              (this.start = this.end = this.pos),
              (this.startLoc = this.endLoc = this.curPosition()),
              (this.lastTokEndLoc = this.lastTokStartLoc = null),
              (this.lastTokStart = this.lastTokEnd = this.pos),
              (this.context = this.initialContext()),
              (this.exprAllowed = !0),
              (this.inModule = "module" === t.sourceType),
              (this.strict = this.inModule || this.strictDirective(this.pos)),
              (this.potentialArrowAt = -1),
              (this.inFunction = this.inGenerator = this.inAsync = !1),
              (this.yieldPos = this.awaitPos = 0),
              (this.labels = []),
              0 === this.pos &&
                t.allowHashBang &&
                "#!" === this.input.slice(0, 2) &&
                this.skipLineComment(2),
              (this.scopeStack = []),
              this.enterFunctionScope(),
              (this.regexpState = null);
          }
          (w.prototype.isKeyword = function (t) {
            return this.keywords.test(t);
          }),
            (w.prototype.isReservedWord = function (t) {
              return this.reservedWords.test(t);
            }),
            (w.prototype.extend = function (t, e) {
              this[t] = e(this[t]);
            }),
            (w.prototype.loadPlugins = function (t) {
              for (var e in t) {
                var i = W[e];
                if (!i) throw new Error("Plugin '" + e + "' not found");
                i(this, t[e]);
              }
            }),
            (w.prototype.parse = function () {
              var t = this.options.program || this.startNode();
              return this.nextToken(), this.parseTopLevel(t);
            });
          var p = w.prototype,
            H = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
          function E() {
            this.shorthandAssign =
              this.trailingComma =
              this.parenthesizedAssign =
              this.parenthesizedBind =
              this.doubleProto =
                -1;
          }
          (p.strictDirective = function (t) {
            for (;;) {
              (x.lastIndex = t), (t += x.exec(this.input)[0].length);
              var e = H.exec(this.input.slice(t));
              if (!e) return !1;
              if ("use strict" === (e[1] || e[2])) return !0;
              t += e[0].length;
            }
          }),
            (p.eat = function (t) {
              return this.type === t && (this.next(), !0);
            }),
            (p.isContextual = function (t) {
              return (
                this.type === g.name && this.value === t && !this.containsEsc
              );
            }),
            (p.eatContextual = function (t) {
              return !!this.isContextual(t) && (this.next(), !0);
            }),
            (p.expectContextual = function (t) {
              this.eatContextual(t) || this.unexpected();
            }),
            (p.canInsertSemicolon = function () {
              return (
                this.type === g.eof ||
                this.type === g.braceR ||
                l.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (p.insertSemicolon = function () {
              if (this.canInsertSemicolon())
                return (
                  this.options.onInsertedSemicolon &&
                    this.options.onInsertedSemicolon(
                      this.lastTokEnd,
                      this.lastTokEndLoc
                    ),
                  !0
                );
            }),
            (p.semicolon = function () {
              this.eat(g.semi) || this.insertSemicolon() || this.unexpected();
            }),
            (p.afterTrailingComma = function (t, e) {
              if (this.type === t)
                return (
                  this.options.onTrailingComma &&
                    this.options.onTrailingComma(
                      this.lastTokStart,
                      this.lastTokStartLoc
                    ),
                  e || this.next(),
                  !0
                );
            }),
            (p.expect = function (t) {
              this.eat(t) || this.unexpected();
            }),
            (p.unexpected = function (t) {
              this.raise(null != t ? t : this.start, "Unexpected token");
            }),
            (p.checkPatternErrors = function (t, e) {
              t &&
                (-1 < t.trailingComma &&
                  this.raiseRecoverable(
                    t.trailingComma,
                    "Comma is not permitted after the rest element"
                  ),
                -1 < (e = e ? t.parenthesizedAssign : t.parenthesizedBind) &&
                  this.raiseRecoverable(e, "Parenthesized pattern"));
            }),
            (p.checkExpressionErrors = function (t, e) {
              return (
                !!t &&
                ((i = t.shorthandAssign),
                (t = t.doubleProto),
                e
                  ? (0 <= i &&
                      this.raise(
                        i,
                        "Shorthand property assignments are valid only in destructuring patterns"
                      ),
                    void (
                      0 <= t &&
                      this.raiseRecoverable(
                        t,
                        "Redefinition of __proto__ property"
                      )
                    ))
                  : 0 <= i || 0 <= t)
              );
              var i;
            }),
            (p.checkYieldAwaitInDefaultParams = function () {
              this.yieldPos &&
                (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                this.raise(
                  this.yieldPos,
                  "Yield expression cannot be a default value"
                ),
                this.awaitPos &&
                  this.raise(
                    this.awaitPos,
                    "Await expression cannot be a default value"
                  );
            }),
            (p.isSimpleAssignTarget = function (t) {
              return "ParenthesizedExpression" === t.type
                ? this.isSimpleAssignTarget(t.expression)
                : "Identifier" === t.type || "MemberExpression" === t.type;
            });
          function C(t, e, i) {
            (this.type = ""),
              (this.start = e),
              (this.end = 0),
              t.options.locations && (this.loc = new b(t, i)),
              t.options.directSourceFile &&
                (this.sourceFile = t.options.directSourceFile),
              t.options.ranges && (this.range = [e, 0]);
          }
          var t = w.prototype,
            A =
              ((t.parseTopLevel = function (t) {
                var e = {};
                for (t.body || (t.body = []); this.type !== g.eof; ) {
                  var i = this.parseStatement(!0, !0, e);
                  t.body.push(i);
                }
                return (
                  this.adaptDirectivePrologue(t.body),
                  this.next(),
                  6 <= this.options.ecmaVersion &&
                    (t.sourceType = this.options.sourceType),
                  this.finishNode(t, "Program")
                );
              }),
              { kind: "loop" }),
            z = { kind: "switch" },
            Q =
              ((t.isLet = function () {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
                  return !1;
                x.lastIndex = this.pos;
                var t = x.exec(this.input),
                  t = this.pos + t[0].length,
                  e = this.input.charCodeAt(t);
                if (91 === e || 123 === e) return !0;
                if (o(e, !0)) {
                  for (var i = t + 1; h(this.input.charCodeAt(i), !0); ) ++i;
                  e = this.input.slice(t, i);
                  if (!M.test(e)) return !0;
                }
                return !1;
              }),
              (t.isAsyncFunction = function () {
                if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
                  return !1;
                x.lastIndex = this.pos;
                var t = x.exec(this.input),
                  t = this.pos + t[0].length;
                return !(
                  l.test(this.input.slice(this.pos, t)) ||
                  "function" !== this.input.slice(t, t + 8) ||
                  (t + 8 !== this.input.length && h(this.input.charAt(t + 8)))
                );
              }),
              (t.parseStatement = function (t, e, i) {
                var s,
                  r = this.type,
                  n = this.startNode();
                switch ((this.isLet() && ((r = g._var), (s = "let")), r)) {
                  case g._break:
                  case g._continue:
                    return this.parseBreakContinueStatement(n, r.keyword);
                  case g._debugger:
                    return this.parseDebuggerStatement(n);
                  case g._do:
                    return this.parseDoStatement(n);
                  case g._for:
                    return this.parseForStatement(n);
                  case g._function:
                    return (
                      !t && 6 <= this.options.ecmaVersion && this.unexpected(),
                      this.parseFunctionStatement(n, !1)
                    );
                  case g._class:
                    return t || this.unexpected(), this.parseClass(n, !0);
                  case g._if:
                    return this.parseIfStatement(n);
                  case g._return:
                    return this.parseReturnStatement(n);
                  case g._switch:
                    return this.parseSwitchStatement(n);
                  case g._throw:
                    return this.parseThrowStatement(n);
                  case g._try:
                    return this.parseTryStatement(n);
                  case g._const:
                  case g._var:
                    return (
                      (s = s || this.value),
                      t || "var" === s || this.unexpected(),
                      this.parseVarStatement(n, s)
                    );
                  case g._while:
                    return this.parseWhileStatement(n);
                  case g._with:
                    return this.parseWithStatement(n);
                  case g.braceL:
                    return this.parseBlock();
                  case g.semi:
                    return this.parseEmptyStatement(n);
                  case g._export:
                  case g._import:
                    return (
                      this.options.allowImportExportEverywhere ||
                        (e ||
                          this.raise(
                            this.start,
                            "'import' and 'export' may only appear at the top level"
                          ),
                        this.inModule ||
                          this.raise(
                            this.start,
                            "'import' and 'export' may appear only with 'sourceType: module'"
                          )),
                      r === g._import
                        ? this.parseImport(n)
                        : this.parseExport(n, i)
                    );
                  default:
                    if (this.isAsyncFunction())
                      return (
                        t || this.unexpected(),
                        this.next(),
                        this.parseFunctionStatement(n, !0)
                      );
                    var a = this.value,
                      o = this.parseExpression();
                    return r === g.name &&
                      "Identifier" === o.type &&
                      this.eat(g.colon)
                      ? this.parseLabeledStatement(n, a, o)
                      : this.parseExpressionStatement(n, o);
                }
              }),
              (t.parseBreakContinueStatement = function (t, e) {
                for (
                  var i = "break" === e,
                    s =
                      (this.next(),
                      this.eat(g.semi) || this.insertSemicolon()
                        ? (t.label = null)
                        : this.type !== g.name
                        ? this.unexpected()
                        : ((t.label = this.parseIdent()), this.semicolon()),
                      0);
                  s < this.labels.length;
                  ++s
                ) {
                  var r = this.labels[s];
                  if (null == t.label || r.name === t.label.name) {
                    if (null != r.kind && (i || "loop" === r.kind)) break;
                    if (t.label && i) break;
                  }
                }
                return (
                  s === this.labels.length &&
                    this.raise(t.start, "Unsyntactic " + e),
                  this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
                );
              }),
              (t.parseDebuggerStatement = function (t) {
                return (
                  this.next(),
                  this.semicolon(),
                  this.finishNode(t, "DebuggerStatement")
                );
              }),
              (t.parseDoStatement = function (t) {
                return (
                  this.next(),
                  this.labels.push(A),
                  (t.body = this.parseStatement(!1)),
                  this.labels.pop(),
                  this.expect(g._while),
                  (t.test = this.parseParenExpression()),
                  6 <= this.options.ecmaVersion
                    ? this.eat(g.semi)
                    : this.semicolon(),
                  this.finishNode(t, "DoWhileStatement")
                );
              }),
              (t.parseForStatement = function (t) {
                this.next();
                var e =
                  9 <= this.options.ecmaVersion &&
                  (this.inAsync ||
                    (!this.inFunction &&
                      this.options.allowAwaitOutsideFunction)) &&
                  this.eatContextual("await")
                    ? this.lastTokStart
                    : -1;
                if (
                  (this.labels.push(A),
                  this.enterLexicalScope(),
                  this.expect(g.parenL),
                  this.type === g.semi)
                )
                  return -1 < e && this.unexpected(e), this.parseFor(t, null);
                var i = this.isLet();
                if (this.type === g._var || this.type === g._const || i)
                  return (
                    (s = this.startNode()),
                    (i = i ? "let" : this.value),
                    this.next(),
                    this.parseVar(s, !0, i),
                    this.finishNode(s, "VariableDeclaration"),
                    !(
                      this.type === g._in ||
                      (6 <= this.options.ecmaVersion && this.isContextual("of"))
                    ) ||
                    1 !== s.declarations.length ||
                    ("var" !== i && s.declarations[0].init)
                      ? (-1 < e && this.unexpected(e), this.parseFor(t, s))
                      : (9 <= this.options.ecmaVersion &&
                          (this.type === g._in
                            ? -1 < e && this.unexpected(e)
                            : (t.await = -1 < e)),
                        this.parseForIn(t, s))
                  );
                var i = new E(),
                  s = this.parseExpression(!0, i);
                return this.type === g._in ||
                  (6 <= this.options.ecmaVersion && this.isContextual("of"))
                  ? (9 <= this.options.ecmaVersion &&
                      (this.type === g._in
                        ? -1 < e && this.unexpected(e)
                        : (t.await = -1 < e)),
                    this.toAssignable(s, !1, i),
                    this.checkLVal(s),
                    this.parseForIn(t, s))
                  : (this.checkExpressionErrors(i, !0),
                    -1 < e && this.unexpected(e),
                    this.parseFor(t, s));
              }),
              (t.parseFunctionStatement = function (t, e) {
                return this.next(), this.parseFunction(t, !0, !1, e);
              }),
              (t.parseIfStatement = function (t) {
                return (
                  this.next(),
                  (t.test = this.parseParenExpression()),
                  (t.consequent = this.parseStatement(
                    !this.strict && this.type === g._function
                  )),
                  (t.alternate = this.eat(g._else)
                    ? this.parseStatement(
                        !this.strict && this.type === g._function
                      )
                    : null),
                  this.finishNode(t, "IfStatement")
                );
              }),
              (t.parseReturnStatement = function (t) {
                return (
                  this.inFunction ||
                    this.options.allowReturnOutsideFunction ||
                    this.raise(this.start, "'return' outside of function"),
                  this.next(),
                  this.eat(g.semi) || this.insertSemicolon()
                    ? (t.argument = null)
                    : ((t.argument = this.parseExpression()), this.semicolon()),
                  this.finishNode(t, "ReturnStatement")
                );
              }),
              (t.parseSwitchStatement = function (t) {
                var e,
                  i = this;
                this.next(),
                  (t.discriminant = this.parseParenExpression()),
                  (t.cases = []),
                  this.expect(g.braceL),
                  this.labels.push(z),
                  this.enterLexicalScope();
                for (var s, r = !1; this.type !== g.braceR; )
                  i.type === g._case || i.type === g._default
                    ? ((s = i.type === g._case),
                      e && i.finishNode(e, "SwitchCase"),
                      t.cases.push((e = i.startNode())),
                      (e.consequent = []),
                      i.next(),
                      s
                        ? (e.test = i.parseExpression())
                        : (r &&
                            i.raiseRecoverable(
                              i.lastTokStart,
                              "Multiple default clauses"
                            ),
                          (r = !0),
                          (e.test = null)),
                      i.expect(g.colon))
                    : (e || i.unexpected(),
                      e.consequent.push(i.parseStatement(!0)));
                return (
                  this.exitLexicalScope(),
                  e && this.finishNode(e, "SwitchCase"),
                  this.next(),
                  this.labels.pop(),
                  this.finishNode(t, "SwitchStatement")
                );
              }),
              (t.parseThrowStatement = function (t) {
                return (
                  this.next(),
                  l.test(this.input.slice(this.lastTokEnd, this.start)) &&
                    this.raise(this.lastTokEnd, "Illegal newline after throw"),
                  (t.argument = this.parseExpression()),
                  this.semicolon(),
                  this.finishNode(t, "ThrowStatement")
                );
              }),
              []),
            p =
              ((t.parseTryStatement = function (t) {
                var e;
                return (
                  this.next(),
                  (t.block = this.parseBlock()),
                  (t.handler = null),
                  this.type === g._catch &&
                    ((e = this.startNode()),
                    this.next(),
                    this.eat(g.parenL)
                      ? ((e.param = this.parseBindingAtom()),
                        this.enterLexicalScope(),
                        this.checkLVal(e.param, "let"),
                        this.expect(g.parenR))
                      : (this.options.ecmaVersion < 10 && this.unexpected(),
                        (e.param = null),
                        this.enterLexicalScope()),
                    (e.body = this.parseBlock(!1)),
                    this.exitLexicalScope(),
                    (t.handler = this.finishNode(e, "CatchClause"))),
                  (t.finalizer = this.eat(g._finally)
                    ? this.parseBlock()
                    : null),
                  t.handler ||
                    t.finalizer ||
                    this.raise(t.start, "Missing catch or finally clause"),
                  this.finishNode(t, "TryStatement")
                );
              }),
              (t.parseVarStatement = function (t, e) {
                return (
                  this.next(),
                  this.parseVar(t, !1, e),
                  this.semicolon(),
                  this.finishNode(t, "VariableDeclaration")
                );
              }),
              (t.parseWhileStatement = function (t) {
                return (
                  this.next(),
                  (t.test = this.parseParenExpression()),
                  this.labels.push(A),
                  (t.body = this.parseStatement(!1)),
                  this.labels.pop(),
                  this.finishNode(t, "WhileStatement")
                );
              }),
              (t.parseWithStatement = function (t) {
                return (
                  this.strict &&
                    this.raise(this.start, "'with' in strict mode"),
                  this.next(),
                  (t.object = this.parseParenExpression()),
                  (t.body = this.parseStatement(!1)),
                  this.finishNode(t, "WithStatement")
                );
              }),
              (t.parseEmptyStatement = function (t) {
                return this.next(), this.finishNode(t, "EmptyStatement");
              }),
              (t.parseLabeledStatement = function (t, e, i) {
                for (var s = 0, r = this.labels; s < r.length; s += 1)
                  r[s].name === e &&
                    this.raise(
                      i.start,
                      "Label '" + e + "' is already declared"
                    );
                for (
                  var n = this.type.isLoop
                      ? "loop"
                      : this.type === g._switch
                      ? "switch"
                      : null,
                    a = this.labels.length - 1;
                  0 <= a;
                  a--
                ) {
                  var o = this.labels[a];
                  if (o.statementStart !== t.start) break;
                  (o.statementStart = this.start), (o.kind = n);
                }
                return (
                  this.labels.push({
                    name: e,
                    kind: n,
                    statementStart: this.start,
                  }),
                  (t.body = this.parseStatement(!0)),
                  ("ClassDeclaration" === t.body.type ||
                    ("VariableDeclaration" === t.body.type &&
                      "var" !== t.body.kind) ||
                    ("FunctionDeclaration" === t.body.type &&
                      (this.strict || t.body.generator || t.body.async))) &&
                    this.raiseRecoverable(
                      t.body.start,
                      "Invalid labeled declaration"
                    ),
                  this.labels.pop(),
                  (t.label = i),
                  this.finishNode(t, "LabeledStatement")
                );
              }),
              (t.parseExpressionStatement = function (t, e) {
                return (
                  (t.expression = e),
                  this.semicolon(),
                  this.finishNode(t, "ExpressionStatement")
                );
              }),
              (t.parseBlock = function (t) {
                void 0 === t && (t = !0);
                var e = this.startNode();
                for (
                  e.body = [],
                    this.expect(g.braceL),
                    t && this.enterLexicalScope();
                  !this.eat(g.braceR);

                ) {
                  var i = this.parseStatement(!0);
                  e.body.push(i);
                }
                return (
                  t && this.exitLexicalScope(),
                  this.finishNode(e, "BlockStatement")
                );
              }),
              (t.parseFor = function (t, e) {
                return (
                  (t.init = e),
                  this.expect(g.semi),
                  (t.test =
                    this.type === g.semi ? null : this.parseExpression()),
                  this.expect(g.semi),
                  (t.update =
                    this.type === g.parenR ? null : this.parseExpression()),
                  this.expect(g.parenR),
                  this.exitLexicalScope(),
                  (t.body = this.parseStatement(!1)),
                  this.labels.pop(),
                  this.finishNode(t, "ForStatement")
                );
              }),
              (t.parseForIn = function (t, e) {
                var i =
                  this.type === g._in ? "ForInStatement" : "ForOfStatement";
                return (
                  this.next(),
                  "ForInStatement" != i ||
                    ("AssignmentPattern" !== e.type &&
                      ("VariableDeclaration" !== e.type ||
                        null == e.declarations[0].init ||
                        (!this.strict &&
                          "Identifier" === e.declarations[0].id.type))) ||
                    this.raise(
                      e.start,
                      "Invalid assignment in for-in loop head"
                    ),
                  (t.left = e),
                  (t.right =
                    "ForInStatement" == i
                      ? this.parseExpression()
                      : this.parseMaybeAssign()),
                  this.expect(g.parenR),
                  this.exitLexicalScope(),
                  (t.body = this.parseStatement(!1)),
                  this.labels.pop(),
                  this.finishNode(t, i)
                );
              }),
              (t.parseVar = function (t, e, i) {
                var s = this;
                for (t.declarations = [], t.kind = i; ; ) {
                  var r = s.startNode();
                  if (
                    (s.parseVarId(r, i),
                    s.eat(g.eq)
                      ? (r.init = s.parseMaybeAssign(e))
                      : "const" !== i ||
                        s.type === g._in ||
                        (6 <= s.options.ecmaVersion && s.isContextual("of"))
                      ? "Identifier" === r.id.type ||
                        (e && (s.type === g._in || s.isContextual("of")))
                        ? (r.init = null)
                        : s.raise(
                            s.lastTokEnd,
                            "Complex binding patterns require an initialization value"
                          )
                      : s.unexpected(),
                    t.declarations.push(s.finishNode(r, "VariableDeclarator")),
                    !s.eat(g.comma))
                  )
                    break;
                }
                return t;
              }),
              (t.parseVarId = function (t, e) {
                (t.id = this.parseBindingAtom(e)), this.checkLVal(t.id, e, !1);
              }),
              (t.parseFunction = function (t, e, i, s) {
                this.initFunction(t),
                  (9 <= this.options.ecmaVersion ||
                    (6 <= this.options.ecmaVersion && !s)) &&
                    (t.generator = this.eat(g.star)),
                  8 <= this.options.ecmaVersion && (t.async = !!s),
                  e &&
                    ((t.id =
                      "nullableID" === e && this.type !== g.name
                        ? null
                        : this.parseIdent()),
                    t.id &&
                      this.checkLVal(
                        t.id,
                        this.inModule && !this.inFunction ? "let" : "var"
                      ));
                var s = this.inGenerator,
                  r = this.inAsync,
                  n = this.yieldPos,
                  a = this.awaitPos,
                  o = this.inFunction;
                return (
                  (this.inGenerator = t.generator),
                  (this.inAsync = t.async),
                  (this.yieldPos = 0),
                  (this.awaitPos = 0),
                  (this.inFunction = !0),
                  this.enterFunctionScope(),
                  e || (t.id = this.type === g.name ? this.parseIdent() : null),
                  this.parseFunctionParams(t),
                  this.parseFunctionBody(t, i),
                  (this.inGenerator = s),
                  (this.inAsync = r),
                  (this.yieldPos = n),
                  (this.awaitPos = a),
                  (this.inFunction = o),
                  this.finishNode(
                    t,
                    e ? "FunctionDeclaration" : "FunctionExpression"
                  )
                );
              }),
              (t.parseFunctionParams = function (t) {
                this.expect(g.parenL),
                  (t.params = this.parseBindingList(
                    g.parenR,
                    !1,
                    8 <= this.options.ecmaVersion
                  )),
                  this.checkYieldAwaitInDefaultParams();
              }),
              (t.parseClass = function (t, e) {
                this.next(), this.parseClassId(t, e), this.parseClassSuper(t);
                var i = this.startNode(),
                  s = !1;
                for (
                  i.body = [], this.expect(g.braceL);
                  !this.eat(g.braceR);

                ) {
                  var r = this.parseClassMember(i);
                  r &&
                    "MethodDefinition" === r.type &&
                    "constructor" === r.kind &&
                    (s &&
                      this.raise(
                        r.start,
                        "Duplicate constructor in the same class"
                      ),
                    (s = !0));
                }
                return (
                  (t.body = this.finishNode(i, "ClassBody")),
                  this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
                );
              }),
              (t.parseClassMember = function (t) {
                var r = this;
                if (this.eat(g.semi)) return null;
                function e(t, e) {
                  void 0 === e && (e = !1);
                  var i = r.start,
                    s = r.startLoc;
                  return (
                    !!r.eatContextual(t) &&
                    (!(r.type === g.parenL || (e && r.canInsertSemicolon())) ||
                      (n.key && r.unexpected(),
                      (n.computed = !1),
                      (n.key = r.startNodeAt(i, s)),
                      (n.key.name = t),
                      r.finishNode(n.key, "Identifier"),
                      !1))
                  );
                }
                var n = this.startNode(),
                  i =
                    ((n.kind = "method"),
                    (n.static = e("static")),
                    this.eat(g.star)),
                  s = !1,
                  a =
                    (i ||
                      (8 <= this.options.ecmaVersion && e("async", !0)
                        ? ((s = !0),
                          (i =
                            9 <= this.options.ecmaVersion && this.eat(g.star)))
                        : e("get")
                        ? (n.kind = "get")
                        : e("set") && (n.kind = "set")),
                    n.key || this.parsePropertyName(n),
                    n.key);
                return (
                  n.computed ||
                  n.static ||
                  !(
                    ("Identifier" === a.type && "constructor" === a.name) ||
                    ("Literal" === a.type && "constructor" === a.value)
                  )
                    ? n.static &&
                      "Identifier" === a.type &&
                      "prototype" === a.name &&
                      this.raise(
                        a.start,
                        "Classes may not have a static property named prototype"
                      )
                    : ("method" !== n.kind &&
                        this.raise(
                          a.start,
                          "Constructor can't have get/set modifier"
                        ),
                      i &&
                        this.raise(a.start, "Constructor can't be a generator"),
                      s &&
                        this.raise(
                          a.start,
                          "Constructor can't be an async method"
                        ),
                      (n.kind = "constructor")),
                  this.parseClassMethod(t, n, i, s),
                  "get" === n.kind &&
                    0 !== n.value.params.length &&
                    this.raiseRecoverable(
                      n.value.start,
                      "getter should have no params"
                    ),
                  "set" === n.kind &&
                    1 !== n.value.params.length &&
                    this.raiseRecoverable(
                      n.value.start,
                      "setter should have exactly one param"
                    ),
                  "set" === n.kind &&
                    "RestElement" === n.value.params[0].type &&
                    this.raiseRecoverable(
                      n.value.params[0].start,
                      "Setter cannot use rest params"
                    ),
                  n
                );
              }),
              (t.parseClassMethod = function (t, e, i, s) {
                (e.value = this.parseMethod(i, s)),
                  t.body.push(this.finishNode(e, "MethodDefinition"));
              }),
              (t.parseClassId = function (t, e) {
                t.id =
                  this.type === g.name
                    ? this.parseIdent()
                    : !0 === e
                    ? this.unexpected()
                    : null;
              }),
              (t.parseClassSuper = function (t) {
                t.superClass = this.eat(g._extends)
                  ? this.parseExprSubscripts()
                  : null;
              }),
              (t.parseExport = function (t, e) {
                var i, s;
                if ((this.next(), this.eat(g.star)))
                  return (
                    this.expectContextual("from"),
                    this.type !== g.string && this.unexpected(),
                    (t.source = this.parseExprAtom()),
                    this.semicolon(),
                    this.finishNode(t, "ExportAllDeclaration")
                  );
                if (this.eat(g._default))
                  return (
                    this.checkExport(e, "default", this.lastTokStart),
                    this.type === g._function || (i = this.isAsyncFunction())
                      ? ((s = this.startNode()),
                        this.next(),
                        i && this.next(),
                        (t.declaration = this.parseFunction(
                          s,
                          "nullableID",
                          !1,
                          i
                        )))
                      : this.type === g._class
                      ? ((s = this.startNode()),
                        (t.declaration = this.parseClass(s, "nullableID")))
                      : ((t.declaration = this.parseMaybeAssign()),
                        this.semicolon()),
                    this.finishNode(t, "ExportDefaultDeclaration")
                  );
                if (this.shouldParseExportStatement())
                  (t.declaration = this.parseStatement(!0)),
                    "VariableDeclaration" === t.declaration.type
                      ? this.checkVariableExport(e, t.declaration.declarations)
                      : this.checkExport(
                          e,
                          t.declaration.id.name,
                          t.declaration.id.start
                        ),
                    (t.specifiers = []),
                    (t.source = null);
                else {
                  if (
                    ((t.declaration = null),
                    (t.specifiers = this.parseExportSpecifiers(e)),
                    this.eatContextual("from"))
                  )
                    this.type !== g.string && this.unexpected(),
                      (t.source = this.parseExprAtom());
                  else {
                    for (var r = 0, n = t.specifiers; r < n.length; r += 1) {
                      var a = n[r];
                      this.checkUnreserved(a.local);
                    }
                    t.source = null;
                  }
                  this.semicolon();
                }
                return this.finishNode(t, "ExportNamedDeclaration");
              }),
              (t.checkExport = function (t, e, i) {
                t &&
                  (y(t, e) &&
                    this.raiseRecoverable(i, "Duplicate export '" + e + "'"),
                  (t[e] = !0));
              }),
              (t.checkPatternExport = function (t, e) {
                var i = e.type;
                if ("Identifier" === i) this.checkExport(t, e.name, e.start);
                else if ("ObjectPattern" === i)
                  for (var s = 0, r = e.properties; s < r.length; s += 1) {
                    var n = r[s];
                    this.checkPatternExport(t, n);
                  }
                else if ("ArrayPattern" === i)
                  for (var a = 0, o = e.elements; a < o.length; a += 1) {
                    var h = o[a];
                    h && this.checkPatternExport(t, h);
                  }
                else
                  "Property" === i
                    ? this.checkPatternExport(t, e.value)
                    : "AssignmentPattern" === i
                    ? this.checkPatternExport(t, e.left)
                    : "RestElement" === i
                    ? this.checkPatternExport(t, e.argument)
                    : "ParenthesizedExpression" === i &&
                      this.checkPatternExport(t, e.expression);
              }),
              (t.checkVariableExport = function (t, e) {
                if (t)
                  for (var i = 0, s = e; i < s.length; i += 1) {
                    var r = s[i];
                    this.checkPatternExport(t, r.id);
                  }
              }),
              (t.shouldParseExportStatement = function () {
                return (
                  "var" === this.type.keyword ||
                  "const" === this.type.keyword ||
                  "class" === this.type.keyword ||
                  "function" === this.type.keyword ||
                  this.isLet() ||
                  this.isAsyncFunction()
                );
              }),
              (t.parseExportSpecifiers = function (t) {
                var e = this,
                  i = [],
                  s = !0;
                for (this.expect(g.braceL); !this.eat(g.braceR); ) {
                  if (s) s = !1;
                  else if ((e.expect(g.comma), e.afterTrailingComma(g.braceR)))
                    break;
                  var r = e.startNode();
                  (r.local = e.parseIdent(!0)),
                    (r.exported = e.eatContextual("as")
                      ? e.parseIdent(!0)
                      : r.local),
                    e.checkExport(t, r.exported.name, r.exported.start),
                    i.push(e.finishNode(r, "ExportSpecifier"));
                }
                return i;
              }),
              (t.parseImport = function (t) {
                return (
                  this.next(),
                  this.type === g.string
                    ? ((t.specifiers = Q), (t.source = this.parseExprAtom()))
                    : ((t.specifiers = this.parseImportSpecifiers()),
                      this.expectContextual("from"),
                      (t.source =
                        this.type === g.string
                          ? this.parseExprAtom()
                          : this.unexpected())),
                  this.semicolon(),
                  this.finishNode(t, "ImportDeclaration")
                );
              }),
              (t.parseImportSpecifiers = function () {
                var t = this,
                  e = [],
                  i = !0;
                if (this.type === g.name) {
                  var s = this.startNode();
                  if (
                    ((s.local = this.parseIdent()),
                    this.checkLVal(s.local, "let"),
                    e.push(this.finishNode(s, "ImportDefaultSpecifier")),
                    !this.eat(g.comma))
                  )
                    return e;
                }
                if (this.type === g.star)
                  return (
                    (s = this.startNode()),
                    this.next(),
                    this.expectContextual("as"),
                    (s.local = this.parseIdent()),
                    this.checkLVal(s.local, "let"),
                    e.push(this.finishNode(s, "ImportNamespaceSpecifier")),
                    e
                  );
                for (this.expect(g.braceL); !this.eat(g.braceR); ) {
                  if (i) i = !1;
                  else if ((t.expect(g.comma), t.afterTrailingComma(g.braceR)))
                    break;
                  var r = t.startNode();
                  (r.imported = t.parseIdent(!0)),
                    t.eatContextual("as")
                      ? (r.local = t.parseIdent())
                      : (t.checkUnreserved(r.imported), (r.local = r.imported)),
                    t.checkLVal(r.local, "let"),
                    e.push(t.finishNode(r, "ImportSpecifier"));
                }
                return e;
              }),
              (t.adaptDirectivePrologue = function (t) {
                for (
                  var e = 0;
                  e < t.length && this.isDirectiveCandidate(t[e]);
                  ++e
                )
                  t[e].directive = t[e].expression.raw.slice(1, -1);
              }),
              (t.isDirectiveCandidate = function (t) {
                return (
                  "ExpressionStatement" === t.type &&
                  "Literal" === t.expression.type &&
                  "string" == typeof t.expression.value &&
                  ('"' === this.input[t.start] || "'" === this.input[t.start])
                );
              }),
              w.prototype),
            t =
              ((p.toAssignable = function (t, e, i) {
                if (6 <= this.options.ecmaVersion && t)
                  switch (t.type) {
                    case "Identifier":
                      this.inAsync &&
                        "await" === t.name &&
                        this.raise(
                          t.start,
                          "Can not use 'await' as identifier inside an async function"
                        );
                      break;
                    case "ObjectPattern":
                    case "ArrayPattern":
                    case "RestElement":
                      break;
                    case "ObjectExpression":
                      (t.type = "ObjectPattern"),
                        i && this.checkPatternErrors(i, !0);
                      for (var s = 0, r = t.properties; s < r.length; s += 1) {
                        var n = r[s];
                        this.toAssignable(n, e),
                          "RestElement" !== n.type ||
                            ("ArrayPattern" !== n.argument.type &&
                              "ObjectPattern" !== n.argument.type) ||
                            this.raise(n.argument.start, "Unexpected token");
                      }
                      break;
                    case "Property":
                      "init" !== t.kind &&
                        this.raise(
                          t.key.start,
                          "Object pattern can't contain getter or setter"
                        ),
                        this.toAssignable(t.value, e);
                      break;
                    case "ArrayExpression":
                      (t.type = "ArrayPattern"),
                        i && this.checkPatternErrors(i, !0),
                        this.toAssignableList(t.elements, e);
                      break;
                    case "SpreadElement":
                      (t.type = "RestElement"),
                        this.toAssignable(t.argument, e),
                        "AssignmentPattern" === t.argument.type &&
                          this.raise(
                            t.argument.start,
                            "Rest elements cannot have a default value"
                          );
                      break;
                    case "AssignmentExpression":
                      "=" !== t.operator &&
                        this.raise(
                          t.left.end,
                          "Only '=' operator can be used for specifying default value."
                        ),
                        (t.type = "AssignmentPattern"),
                        delete t.operator,
                        this.toAssignable(t.left, e);
                    case "AssignmentPattern":
                      break;
                    case "ParenthesizedExpression":
                      this.toAssignable(t.expression, e);
                      break;
                    case "MemberExpression":
                      if (!e) break;
                    default:
                      this.raise(t.start, "Assigning to rvalue");
                  }
                else i && this.checkPatternErrors(i, !0);
                return t;
              }),
              (p.toAssignableList = function (t, e) {
                for (var i, s = t.length, r = 0; r < s; r++) {
                  var n = t[r];
                  n && this.toAssignable(n, e);
                }
                return (
                  s &&
                    ((i = t[s - 1]),
                    6 === this.options.ecmaVersion &&
                      e &&
                      i &&
                      "RestElement" === i.type &&
                      "Identifier" !== i.argument.type &&
                      this.unexpected(i.argument.start)),
                  t
                );
              }),
              (p.parseSpread = function (t) {
                var e = this.startNode();
                return (
                  this.next(),
                  (e.argument = this.parseMaybeAssign(!1, t)),
                  this.finishNode(e, "SpreadElement")
                );
              }),
              (p.parseRestBinding = function () {
                var t = this.startNode();
                return (
                  this.next(),
                  6 === this.options.ecmaVersion &&
                    this.type !== g.name &&
                    this.unexpected(),
                  (t.argument = this.parseBindingAtom()),
                  this.finishNode(t, "RestElement")
                );
              }),
              (p.parseBindingAtom = function () {
                if (6 <= this.options.ecmaVersion)
                  switch (this.type) {
                    case g.bracketL:
                      var t = this.startNode();
                      return (
                        this.next(),
                        (t.elements = this.parseBindingList(
                          g.bracketR,
                          !0,
                          !0
                        )),
                        this.finishNode(t, "ArrayPattern")
                      );
                    case g.braceL:
                      return this.parseObj(!0);
                  }
                return this.parseIdent();
              }),
              (p.parseBindingList = function (t, e, i) {
                for (var s = this, r = [], n = !0; !this.eat(t); )
                  if (
                    (n ? (n = !1) : s.expect(g.comma), e && s.type === g.comma)
                  )
                    r.push(null);
                  else {
                    if (i && s.afterTrailingComma(t)) break;
                    if (s.type === g.ellipsis) {
                      var a = s.parseRestBinding();
                      s.parseBindingListItem(a),
                        r.push(a),
                        s.type === g.comma &&
                          s.raise(
                            s.start,
                            "Comma is not permitted after the rest element"
                          ),
                        s.expect(t);
                      break;
                    }
                    a = s.parseMaybeDefault(s.start, s.startLoc);
                    s.parseBindingListItem(a), r.push(a);
                  }
                return r;
              }),
              (p.parseBindingListItem = function (t) {
                return t;
              }),
              (p.parseMaybeDefault = function (t, e, i) {
                if (
                  ((i = i || this.parseBindingAtom()),
                  this.options.ecmaVersion < 6 || !this.eat(g.eq))
                )
                  return i;
                t = this.startNodeAt(t, e);
                return (
                  (t.left = i),
                  (t.right = this.parseMaybeAssign()),
                  this.finishNode(t, "AssignmentPattern")
                );
              }),
              (p.checkLVal = function (t, e, i) {
                switch (t.type) {
                  case "Identifier":
                    this.strict &&
                      this.reservedWordsStrictBind.test(t.name) &&
                      this.raiseRecoverable(
                        t.start,
                        (e ? "Binding " : "Assigning to ") +
                          t.name +
                          " in strict mode"
                      ),
                      i &&
                        (y(i, t.name) &&
                          this.raiseRecoverable(t.start, "Argument name clash"),
                        (i[t.name] = !0)),
                      e &&
                        "none" !== e &&
                        ((("var" === e && !this.canDeclareVarName(t.name)) ||
                          ("var" !== e &&
                            !this.canDeclareLexicalName(t.name))) &&
                          this.raiseRecoverable(
                            t.start,
                            "Identifier '" +
                              t.name +
                              "' has already been declared"
                          ),
                        "var" === e
                          ? this.declareVarName(t.name)
                          : this.declareLexicalName(t.name));
                    break;
                  case "MemberExpression":
                    e &&
                      this.raiseRecoverable(
                        t.start,
                        "Binding member expression"
                      );
                    break;
                  case "ObjectPattern":
                    for (var s = 0, r = t.properties; s < r.length; s += 1) {
                      var n = r[s];
                      this.checkLVal(n, e, i);
                    }
                    break;
                  case "Property":
                    this.checkLVal(t.value, e, i);
                    break;
                  case "ArrayPattern":
                    for (var a = 0, o = t.elements; a < o.length; a += 1) {
                      var h = o[a];
                      h && this.checkLVal(h, e, i);
                    }
                    break;
                  case "AssignmentPattern":
                    this.checkLVal(t.left, e, i);
                    break;
                  case "RestElement":
                    this.checkLVal(t.argument, e, i);
                    break;
                  case "ParenthesizedExpression":
                    this.checkLVal(t.expression, e, i);
                    break;
                  default:
                    this.raise(
                      t.start,
                      (e ? "Binding" : "Assigning to") + " rvalue"
                    );
                }
              }),
              w.prototype),
            K =
              ((t.checkPropClash = function (t, e, i) {
                if (
                  !(
                    (9 <= this.options.ecmaVersion &&
                      "SpreadElement" === t.type) ||
                    (6 <= this.options.ecmaVersion &&
                      (t.computed || t.method || t.shorthand))
                  )
                ) {
                  var s = t.key;
                  switch (s.type) {
                    case "Identifier":
                      r = s.name;
                      break;
                    case "Literal":
                      r = String(s.value);
                      break;
                    default:
                      return;
                  }
                  var r,
                    t = t.kind;
                  6 <= this.options.ecmaVersion
                    ? "__proto__" === r &&
                      "init" === t &&
                      (e.proto &&
                        (i && i.doubleProto < 0
                          ? (i.doubleProto = s.start)
                          : this.raiseRecoverable(
                              s.start,
                              "Redefinition of __proto__ property"
                            )),
                      (e.proto = !0))
                    : ((i = e[(r = "$" + r)])
                        ? ("init" === t
                            ? (this.strict && i.init) || i.get || i.set
                            : i.init || i[t]) &&
                          this.raiseRecoverable(
                            s.start,
                            "Redefinition of property"
                          )
                        : (i = e[r] = { init: !1, get: !1, set: !1 }),
                      (i[t] = !0));
                }
              }),
              (t.parseExpression = function (t, e) {
                var i = this.start,
                  s = this.startLoc,
                  r = this.parseMaybeAssign(t, e);
                if (this.type !== g.comma) return r;
                var n = this.startNodeAt(i, s);
                for (n.expressions = [r]; this.eat(g.comma); )
                  n.expressions.push(this.parseMaybeAssign(t, e));
                return this.finishNode(n, "SequenceExpression");
              }),
              (t.parseMaybeAssign = function (t, e, i) {
                if (this.inGenerator && this.isContextual("yield"))
                  return this.parseYield();
                var s = !1,
                  r = -1,
                  n = -1,
                  a =
                    (e
                      ? ((r = e.parenthesizedAssign),
                        (n = e.trailingComma),
                        (e.parenthesizedAssign = e.trailingComma = -1))
                      : ((e = new E()), (s = !0)),
                    this.start),
                  o = this.startLoc,
                  h =
                    ((this.type !== g.parenL && this.type !== g.name) ||
                      (this.potentialArrowAt = this.start),
                    this.parseMaybeConditional(t, e));
                return (
                  i && (h = i.call(this, h, a, o)),
                  this.type.isAssign
                    ? (((i = this.startNodeAt(a, o)).operator = this.value),
                      (i.left =
                        this.type === g.eq ? this.toAssignable(h, !1, e) : h),
                      s || E.call(e),
                      (e.shorthandAssign = -1),
                      this.checkLVal(h),
                      this.next(),
                      (i.right = this.parseMaybeAssign(t)),
                      this.finishNode(i, "AssignmentExpression"))
                    : (s && this.checkExpressionErrors(e, !0),
                      -1 < r && (e.parenthesizedAssign = r),
                      -1 < n && (e.trailingComma = n),
                      h)
                );
              }),
              (t.parseMaybeConditional = function (t, e) {
                var i = this.start,
                  s = this.startLoc,
                  r = this.parseExprOps(t, e);
                return !this.checkExpressionErrors(e) && this.eat(g.question)
                  ? (((e = this.startNodeAt(i, s)).test = r),
                    (e.consequent = this.parseMaybeAssign()),
                    this.expect(g.colon),
                    (e.alternate = this.parseMaybeAssign(t)),
                    this.finishNode(e, "ConditionalExpression"))
                  : r;
              }),
              (t.parseExprOps = function (t, e) {
                var i = this.start,
                  s = this.startLoc,
                  r = this.parseMaybeUnary(e, !1);
                return this.checkExpressionErrors(e) ||
                  (r.start === i && "ArrowFunctionExpression" === r.type)
                  ? r
                  : this.parseExprOp(r, i, s, -1, t);
              }),
              (t.parseExprOp = function (t, e, i, s, r) {
                var n,
                  a,
                  o,
                  h,
                  p = this.type.binop;
                if (null != p && (!r || this.type !== g._in) && s < p)
                  return (
                    (n =
                      this.type === g.logicalOR || this.type === g.logicalAND),
                    (a = this.value),
                    this.next(),
                    (o = this.start),
                    (h = this.startLoc),
                    (o = this.parseExprOp(
                      this.parseMaybeUnary(null, !1),
                      o,
                      h,
                      p,
                      r
                    )),
                    (h = this.buildBinary(e, i, t, o, a, n)),
                    this.parseExprOp(h, e, i, s, r)
                  );
                return t;
              }),
              (t.buildBinary = function (t, e, i, s, r, n) {
                t = this.startNodeAt(t, e);
                return (
                  (t.left = i),
                  (t.operator = r),
                  (t.right = s),
                  this.finishNode(
                    t,
                    n ? "LogicalExpression" : "BinaryExpression"
                  )
                );
              }),
              (t.parseMaybeUnary = function (t, e) {
                var i,
                  s = this,
                  r = this.start,
                  n = this.startLoc;
                if (
                  this.isContextual("await") &&
                  (this.inAsync ||
                    (!this.inFunction &&
                      this.options.allowAwaitOutsideFunction))
                )
                  (i = this.parseAwait()), (e = !0);
                else if (this.type.prefix) {
                  var a = this.startNode(),
                    o = this.type === g.incDec;
                  (a.operator = this.value),
                    (a.prefix = !0),
                    this.next(),
                    (a.argument = this.parseMaybeUnary(null, !0)),
                    this.checkExpressionErrors(t, !0),
                    o
                      ? this.checkLVal(a.argument)
                      : this.strict &&
                        "delete" === a.operator &&
                        "Identifier" === a.argument.type
                      ? this.raiseRecoverable(
                          a.start,
                          "Deleting local variable in strict mode"
                        )
                      : (e = !0),
                    (i = this.finishNode(
                      a,
                      o ? "UpdateExpression" : "UnaryExpression"
                    ));
                } else {
                  if (
                    ((i = this.parseExprSubscripts(t)),
                    this.checkExpressionErrors(t))
                  )
                    return i;
                  for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                    var h = s.startNodeAt(r, n);
                    (h.operator = s.value),
                      (h.prefix = !1),
                      (h.argument = i),
                      s.checkLVal(i),
                      s.next(),
                      (i = s.finishNode(h, "UpdateExpression"));
                  }
                }
                return !e && this.eat(g.starstar)
                  ? this.buildBinary(
                      r,
                      n,
                      i,
                      this.parseMaybeUnary(null, !1),
                      "**",
                      !1
                    )
                  : i;
              }),
              (t.parseExprSubscripts = function (t) {
                var e = this.start,
                  i = this.startLoc,
                  s = this.parseExprAtom(t),
                  r =
                    "ArrowFunctionExpression" === s.type &&
                    ")" !==
                      this.input.slice(this.lastTokStart, this.lastTokEnd);
                if (this.checkExpressionErrors(t) || r) return s;
                r = this.parseSubscripts(s, e, i);
                return (
                  t &&
                    "MemberExpression" === r.type &&
                    (t.parenthesizedAssign >= r.start &&
                      (t.parenthesizedAssign = -1),
                    t.parenthesizedBind >= r.start &&
                      (t.parenthesizedBind = -1)),
                  r
                );
              }),
              (t.parseSubscripts = function (t, e, i, s) {
                for (
                  var r = this,
                    n =
                      8 <= this.options.ecmaVersion &&
                      "Identifier" === t.type &&
                      "async" === t.name &&
                      this.lastTokEnd === t.end &&
                      !this.canInsertSemicolon() &&
                      "async" === this.input.slice(t.start, t.end);
                  ;

                )
                  if ((o = r.eat(g.bracketL)) || r.eat(g.dot)) {
                    var a = r.startNodeAt(e, i);
                    (a.object = t),
                      (a.property = o ? r.parseExpression() : r.parseIdent(!0)),
                      (a.computed = !!o),
                      o && r.expect(g.bracketR),
                      (t = r.finishNode(a, "MemberExpression"));
                  } else if (!s && r.eat(g.parenL)) {
                    var o = new E(),
                      a = r.yieldPos,
                      h = r.awaitPos,
                      p =
                        ((r.yieldPos = 0),
                        (r.awaitPos = 0),
                        r.parseExprList(
                          g.parenR,
                          8 <= r.options.ecmaVersion,
                          !1,
                          o
                        ));
                    if (n && !r.canInsertSemicolon() && r.eat(g.arrow))
                      return (
                        r.checkPatternErrors(o, !1),
                        r.checkYieldAwaitInDefaultParams(),
                        (r.yieldPos = a),
                        (r.awaitPos = h),
                        r.parseArrowExpression(r.startNodeAt(e, i), p, !0)
                      );
                    r.checkExpressionErrors(o, !0),
                      (r.yieldPos = a || r.yieldPos),
                      (r.awaitPos = h || r.awaitPos);
                    o = r.startNodeAt(e, i);
                    (o.callee = t),
                      (o.arguments = p),
                      (t = r.finishNode(o, "CallExpression"));
                  } else {
                    if (r.type !== g.backQuote) return t;
                    h = r.startNodeAt(e, i);
                    (h.tag = t),
                      (h.quasi = r.parseTemplate({ isTagged: !0 })),
                      (t = r.finishNode(h, "TaggedTemplateExpression"));
                  }
              }),
              (t.parseExprAtom = function (t) {
                var e = this.potentialArrowAt === this.start;
                switch (this.type) {
                  case g._super:
                    return (
                      this.inFunction ||
                        this.raise(
                          this.start,
                          "'super' outside of function or class"
                        ),
                      (a = this.startNode()),
                      this.next(),
                      this.type !== g.dot &&
                        this.type !== g.bracketL &&
                        this.type !== g.parenL &&
                        this.unexpected(),
                      this.finishNode(a, "Super")
                    );
                  case g._this:
                    return (
                      (a = this.startNode()),
                      this.next(),
                      this.finishNode(a, "ThisExpression")
                    );
                  case g.name:
                    var i = this.start,
                      s = this.startLoc,
                      r = this.containsEsc,
                      n = this.parseIdent(this.type !== g.name);
                    if (
                      8 <= this.options.ecmaVersion &&
                      !r &&
                      "async" === n.name &&
                      !this.canInsertSemicolon() &&
                      this.eat(g._function)
                    )
                      return this.parseFunction(
                        this.startNodeAt(i, s),
                        !1,
                        !1,
                        !0
                      );
                    if (e && !this.canInsertSemicolon()) {
                      if (this.eat(g.arrow))
                        return this.parseArrowExpression(
                          this.startNodeAt(i, s),
                          [n],
                          !1
                        );
                      if (
                        8 <= this.options.ecmaVersion &&
                        "async" === n.name &&
                        this.type === g.name &&
                        !r
                      )
                        return (
                          (n = this.parseIdent()),
                          (!this.canInsertSemicolon() && this.eat(g.arrow)) ||
                            this.unexpected(),
                          this.parseArrowExpression(
                            this.startNodeAt(i, s),
                            [n],
                            !0
                          )
                        );
                    }
                    return n;
                  case g.regexp:
                    var a,
                      r = this.value;
                    return (
                      ((a = this.parseLiteral(r.value)).regex = {
                        pattern: r.pattern,
                        flags: r.flags,
                      }),
                      a
                    );
                  case g.num:
                  case g.string:
                    return this.parseLiteral(this.value);
                  case g._null:
                  case g._true:
                  case g._false:
                    return (
                      ((a = this.startNode()).value =
                        this.type === g._null ? null : this.type === g._true),
                      (a.raw = this.type.keyword),
                      this.next(),
                      this.finishNode(a, "Literal")
                    );
                  case g.parenL:
                    (i = this.start),
                      (s = this.parseParenAndDistinguishExpression(e));
                    return (
                      t &&
                        (t.parenthesizedAssign < 0 &&
                          !this.isSimpleAssignTarget(s) &&
                          (t.parenthesizedAssign = i),
                        t.parenthesizedBind < 0 && (t.parenthesizedBind = i)),
                      s
                    );
                  case g.bracketL:
                    return (
                      (a = this.startNode()),
                      this.next(),
                      (a.elements = this.parseExprList(g.bracketR, !0, !0, t)),
                      this.finishNode(a, "ArrayExpression")
                    );
                  case g.braceL:
                    return this.parseObj(!1, t);
                  case g._function:
                    return (
                      (a = this.startNode()),
                      this.next(),
                      this.parseFunction(a, !1)
                    );
                  case g._class:
                    return this.parseClass(this.startNode(), !1);
                  case g._new:
                    return this.parseNew();
                  case g.backQuote:
                    return this.parseTemplate();
                  default:
                    this.unexpected();
                }
              }),
              (t.parseLiteral = function (t) {
                var e = this.startNode();
                return (
                  (e.value = t),
                  (e.raw = this.input.slice(this.start, this.end)),
                  this.next(),
                  this.finishNode(e, "Literal")
                );
              }),
              (t.parseParenExpression = function () {
                this.expect(g.parenL);
                var t = this.parseExpression();
                return this.expect(g.parenR), t;
              }),
              (t.parseParenAndDistinguishExpression = function (t) {
                var e,
                  i = this,
                  s = this.start,
                  r = this.startLoc,
                  n = 8 <= this.options.ecmaVersion;
                if (6 <= this.options.ecmaVersion) {
                  this.next();
                  var a,
                    o = this.start,
                    h = this.startLoc,
                    p = [],
                    c = !0,
                    u = !1,
                    l = new E(),
                    d = this.yieldPos,
                    f = this.awaitPos;
                  for (
                    this.yieldPos = 0, this.awaitPos = 0;
                    this.type !== g.parenR;

                  ) {
                    if (
                      (c ? (c = !1) : i.expect(g.comma),
                      n && i.afterTrailingComma(g.parenR, !0))
                    ) {
                      u = !0;
                      break;
                    }
                    if (i.type === g.ellipsis) {
                      (a = i.start),
                        p.push(i.parseParenItem(i.parseRestBinding())),
                        i.type === g.comma &&
                          i.raise(
                            i.start,
                            "Comma is not permitted after the rest element"
                          );
                      break;
                    }
                    p.push(i.parseMaybeAssign(!1, l, i.parseParenItem));
                  }
                  var m = this.start,
                    x = this.startLoc;
                  if (
                    (this.expect(g.parenR),
                    t && !this.canInsertSemicolon() && this.eat(g.arrow))
                  )
                    return (
                      this.checkPatternErrors(l, !1),
                      this.checkYieldAwaitInDefaultParams(),
                      (this.yieldPos = d),
                      (this.awaitPos = f),
                      this.parseParenArrowList(s, r, p)
                    );
                  (p.length && !u) || this.unexpected(this.lastTokStart),
                    a && this.unexpected(a),
                    this.checkExpressionErrors(l, !0),
                    (this.yieldPos = d || this.yieldPos),
                    (this.awaitPos = f || this.awaitPos),
                    1 < p.length
                      ? (((e = this.startNodeAt(o, h)).expressions = p),
                        this.finishNodeAt(e, "SequenceExpression", m, x))
                      : (e = p[0]);
                } else e = this.parseParenExpression();
                return this.options.preserveParens
                  ? (((t = this.startNodeAt(s, r)).expression = e),
                    this.finishNode(t, "ParenthesizedExpression"))
                  : e;
              }),
              (t.parseParenItem = function (t) {
                return t;
              }),
              (t.parseParenArrowList = function (t, e, i) {
                return this.parseArrowExpression(this.startNodeAt(t, e), i);
              }),
              []),
            p =
              ((t.parseNew = function () {
                var t = this.startNode(),
                  e = this.parseIdent(!0);
                if (6 <= this.options.ecmaVersion && this.eat(g.dot))
                  return (
                    (t.meta = e),
                    (e = this.containsEsc),
                    (t.property = this.parseIdent(!0)),
                    ("target" === t.property.name && !e) ||
                      this.raiseRecoverable(
                        t.property.start,
                        "The only valid meta property for new is new.target"
                      ),
                    this.inFunction ||
                      this.raiseRecoverable(
                        t.start,
                        "new.target can only be used in functions"
                      ),
                    this.finishNode(t, "MetaProperty")
                  );
                var e = this.start,
                  i = this.startLoc;
                return (
                  (t.callee = this.parseSubscripts(
                    this.parseExprAtom(),
                    e,
                    i,
                    !0
                  )),
                  this.eat(g.parenL)
                    ? (t.arguments = this.parseExprList(
                        g.parenR,
                        8 <= this.options.ecmaVersion,
                        !1
                      ))
                    : (t.arguments = K),
                  this.finishNode(t, "NewExpression")
                );
              }),
              (t.parseTemplateElement = function (t) {
                var t = t.isTagged,
                  e = this.startNode();
                return (
                  this.type === g.invalidTemplate
                    ? (t ||
                        this.raiseRecoverable(
                          this.start,
                          "Bad escape sequence in untagged template literal"
                        ),
                      (e.value = { raw: this.value, cooked: null }))
                    : (e.value = {
                        raw: this.input
                          .slice(this.start, this.end)
                          .replace(/\r\n?/g, "\n"),
                        cooked: this.value,
                      }),
                  this.next(),
                  (e.tail = this.type === g.backQuote),
                  this.finishNode(e, "TemplateElement")
                );
              }),
              (t.parseTemplate = function (t) {
                var e = this,
                  i = (t = void 0 === t ? {} : t).isTagged,
                  s = (void 0 === i && (i = !1), this.startNode()),
                  r =
                    (this.next(),
                    (s.expressions = []),
                    this.parseTemplateElement({ isTagged: i }));
                for (s.quasis = [r]; !r.tail; )
                  e.type === g.eof &&
                    e.raise(e.pos, "Unterminated template literal"),
                    e.expect(g.dollarBraceL),
                    s.expressions.push(e.parseExpression()),
                    e.expect(g.braceR),
                    s.quasis.push(
                      (r = e.parseTemplateElement({ isTagged: i }))
                    );
                return this.next(), this.finishNode(s, "TemplateLiteral");
              }),
              (t.isAsyncProp = function (t) {
                return (
                  !t.computed &&
                  "Identifier" === t.key.type &&
                  "async" === t.key.name &&
                  (this.type === g.name ||
                    this.type === g.num ||
                    this.type === g.string ||
                    this.type === g.bracketL ||
                    this.type.keyword ||
                    (9 <= this.options.ecmaVersion && this.type === g.star)) &&
                  !l.test(this.input.slice(this.lastTokEnd, this.start))
                );
              }),
              (t.parseObj = function (t, e) {
                var i = this.startNode(),
                  s = !0,
                  r = {};
                for (i.properties = [], this.next(); !this.eat(g.braceR); ) {
                  if (s) s = !1;
                  else if (
                    (this.expect(g.comma), this.afterTrailingComma(g.braceR))
                  )
                    break;
                  var n = this.parseProperty(t, e);
                  t || this.checkPropClash(n, r, e), i.properties.push(n);
                }
                return this.finishNode(
                  i,
                  t ? "ObjectPattern" : "ObjectExpression"
                );
              }),
              (t.parseProperty = function (t, e) {
                var i,
                  s,
                  r,
                  n,
                  a = this.startNode();
                if (9 <= this.options.ecmaVersion && this.eat(g.ellipsis))
                  return t
                    ? ((a.argument = this.parseIdent(!1)),
                      this.type === g.comma &&
                        this.raise(
                          this.start,
                          "Comma is not permitted after the rest element"
                        ),
                      this.finishNode(a, "RestElement"))
                    : (this.type === g.parenL &&
                        e &&
                        (e.parenthesizedAssign < 0 &&
                          (e.parenthesizedAssign = this.start),
                        e.parenthesizedBind < 0 &&
                          (e.parenthesizedBind = this.start)),
                      (a.argument = this.parseMaybeAssign(!1, e)),
                      this.type === g.comma &&
                        e &&
                        e.trailingComma < 0 &&
                        (e.trailingComma = this.start),
                      this.finishNode(a, "SpreadElement"));
                6 <= this.options.ecmaVersion &&
                  ((a.method = !1),
                  (a.shorthand = !1),
                  (t || e) && ((r = this.start), (n = this.startLoc)),
                  t || (i = this.eat(g.star)));
                var o = this.containsEsc;
                return (
                  this.parsePropertyName(a),
                  !t &&
                  !o &&
                  8 <= this.options.ecmaVersion &&
                  !i &&
                  this.isAsyncProp(a)
                    ? ((s = !0),
                      (i = 9 <= this.options.ecmaVersion && this.eat(g.star)),
                      this.parsePropertyName(a, e))
                    : (s = !1),
                  this.parsePropertyValue(a, t, i, s, r, n, e, o),
                  this.finishNode(a, "Property")
                );
              }),
              (t.parsePropertyValue = function (t, e, i, s, r, n, a, o) {
                (i || s) && this.type === g.colon && this.unexpected(),
                  this.eat(g.colon)
                    ? ((t.value = e
                        ? this.parseMaybeDefault(this.start, this.startLoc)
                        : this.parseMaybeAssign(!1, a)),
                      (t.kind = "init"))
                    : 6 <= this.options.ecmaVersion && this.type === g.parenL
                    ? (e && this.unexpected(),
                      (t.kind = "init"),
                      (t.method = !0),
                      (t.value = this.parseMethod(i, s)))
                    : e ||
                      o ||
                      !(5 <= this.options.ecmaVersion) ||
                      t.computed ||
                      "Identifier" !== t.key.type ||
                      ("get" !== t.key.name && "set" !== t.key.name) ||
                      this.type === g.comma ||
                      this.type === g.braceR
                    ? 6 <= this.options.ecmaVersion &&
                      !t.computed &&
                      "Identifier" === t.key.type
                      ? (this.checkUnreserved(t.key),
                        (t.kind = "init"),
                        e
                          ? (t.value = this.parseMaybeDefault(r, n, t.key))
                          : this.type === g.eq && a
                          ? (a.shorthandAssign < 0 &&
                              (a.shorthandAssign = this.start),
                            (t.value = this.parseMaybeDefault(r, n, t.key)))
                          : (t.value = t.key),
                        (t.shorthand = !0))
                      : this.unexpected()
                    : ((i || s) && this.unexpected(),
                      (t.kind = t.key.name),
                      this.parsePropertyName(t),
                      (t.value = this.parseMethod(!1)),
                      (o = "get" === t.kind ? 0 : 1),
                      t.value.params.length !== o
                        ? ((e = t.value.start),
                          "get" === t.kind
                            ? this.raiseRecoverable(
                                e,
                                "getter should have no params"
                              )
                            : this.raiseRecoverable(
                                e,
                                "setter should have exactly one param"
                              ))
                        : "set" === t.kind &&
                          "RestElement" === t.value.params[0].type &&
                          this.raiseRecoverable(
                            t.value.params[0].start,
                            "Setter cannot use rest params"
                          ));
              }),
              (t.parsePropertyName = function (t) {
                if (6 <= this.options.ecmaVersion) {
                  if (this.eat(g.bracketL))
                    return (
                      (t.computed = !0),
                      (t.key = this.parseMaybeAssign()),
                      this.expect(g.bracketR),
                      t.key
                    );
                  t.computed = !1;
                }
                return (t.key =
                  this.type === g.num || this.type === g.string
                    ? this.parseExprAtom()
                    : this.parseIdent(!0));
              }),
              (t.initFunction = function (t) {
                (t.id = null),
                  6 <= this.options.ecmaVersion &&
                    ((t.generator = !1), (t.expression = !1)),
                  8 <= this.options.ecmaVersion && (t.async = !1);
              }),
              (t.parseMethod = function (t, e) {
                var i = this.startNode(),
                  s = this.inGenerator,
                  r = this.inAsync,
                  n = this.yieldPos,
                  a = this.awaitPos,
                  o = this.inFunction;
                return (
                  this.initFunction(i),
                  6 <= this.options.ecmaVersion && (i.generator = t),
                  8 <= this.options.ecmaVersion && (i.async = !!e),
                  (this.inGenerator = i.generator),
                  (this.inAsync = i.async),
                  (this.yieldPos = 0),
                  (this.awaitPos = 0),
                  (this.inFunction = !0),
                  this.enterFunctionScope(),
                  this.expect(g.parenL),
                  (i.params = this.parseBindingList(
                    g.parenR,
                    !1,
                    8 <= this.options.ecmaVersion
                  )),
                  this.checkYieldAwaitInDefaultParams(),
                  this.parseFunctionBody(i, !1),
                  (this.inGenerator = s),
                  (this.inAsync = r),
                  (this.yieldPos = n),
                  (this.awaitPos = a),
                  (this.inFunction = o),
                  this.finishNode(i, "FunctionExpression")
                );
              }),
              (t.parseArrowExpression = function (t, e, i) {
                var s = this.inGenerator,
                  r = this.inAsync,
                  n = this.yieldPos,
                  a = this.awaitPos,
                  o = this.inFunction;
                return (
                  this.enterFunctionScope(),
                  this.initFunction(t),
                  8 <= this.options.ecmaVersion && (t.async = !!i),
                  (this.inGenerator = !1),
                  (this.inAsync = t.async),
                  (this.yieldPos = 0),
                  (this.awaitPos = 0),
                  (this.inFunction = !0),
                  (t.params = this.toAssignableList(e, !0)),
                  this.parseFunctionBody(t, !0),
                  (this.inGenerator = s),
                  (this.inAsync = r),
                  (this.yieldPos = n),
                  (this.awaitPos = a),
                  (this.inFunction = o),
                  this.finishNode(t, "ArrowFunctionExpression")
                );
              }),
              (t.parseFunctionBody = function (t, e) {
                var i = e && this.type !== g.braceL,
                  s = this.strict,
                  r = !1;
                i
                  ? ((t.body = this.parseMaybeAssign()),
                    (t.expression = !0),
                    this.checkParams(t, !1))
                  : ((i =
                      7 <= this.options.ecmaVersion &&
                      !this.isSimpleParamList(t.params)),
                    (s && !i) ||
                      ((r = this.strictDirective(this.end)) &&
                        i &&
                        this.raiseRecoverable(
                          t.start,
                          "Illegal 'use strict' directive in function with non-simple parameter list"
                        )),
                    (i = this.labels),
                    (this.labels = []),
                    r && (this.strict = !0),
                    this.checkParams(
                      t,
                      !s && !r && !e && this.isSimpleParamList(t.params)
                    ),
                    (t.body = this.parseBlock(!1)),
                    (t.expression = !1),
                    this.adaptDirectivePrologue(t.body.body),
                    (this.labels = i)),
                  this.exitFunctionScope(),
                  this.strict && t.id && this.checkLVal(t.id, "none"),
                  (this.strict = s);
              }),
              (t.isSimpleParamList = function (t) {
                for (var e = 0, i = t; e < i.length; e += 1)
                  if ("Identifier" !== i[e].type) return !1;
                return !0;
              }),
              (t.checkParams = function (t, e) {
                for (var i = {}, s = 0, r = t.params; s < r.length; s += 1) {
                  var n = r[s];
                  this.checkLVal(n, "var", e ? null : i);
                }
              }),
              (t.parseExprList = function (t, e, i, s) {
                for (var r = this, n = [], a = !0; !this.eat(t); ) {
                  if (a) a = !1;
                  else if ((r.expect(g.comma), e && r.afterTrailingComma(t)))
                    break;
                  var o = void 0;
                  i && r.type === g.comma
                    ? (o = null)
                    : r.type === g.ellipsis
                    ? ((o = r.parseSpread(s)),
                      s &&
                        r.type === g.comma &&
                        s.trailingComma < 0 &&
                        (s.trailingComma = r.start))
                    : (o = r.parseMaybeAssign(!1, s)),
                    n.push(o);
                }
                return n;
              }),
              (t.checkUnreserved = function (t) {
                var e = t.start,
                  i = t.end,
                  t = t.name;
                this.inGenerator &&
                  "yield" === t &&
                  this.raiseRecoverable(
                    e,
                    "Can not use 'yield' as identifier inside a generator"
                  ),
                  this.inAsync &&
                    "await" === t &&
                    this.raiseRecoverable(
                      e,
                      "Can not use 'await' as identifier inside an async function"
                    ),
                  this.isKeyword(t) &&
                    this.raise(e, "Unexpected keyword '" + t + "'"),
                  (this.options.ecmaVersion < 6 &&
                    -1 !== this.input.slice(e, i).indexOf("\\")) ||
                    ((this.strict
                      ? this.reservedWordsStrict
                      : this.reservedWords
                    ).test(t) &&
                      (this.inAsync ||
                        "await" !== t ||
                        this.raiseRecoverable(
                          e,
                          "Can not use keyword 'await' outside an async function"
                        ),
                      this.raiseRecoverable(
                        e,
                        "The keyword '" + t + "' is reserved"
                      )));
              }),
              (t.parseIdent = function (t, e) {
                var i = this.startNode();
                return (
                  t && "never" === this.options.allowReserved && (t = !1),
                  this.type === g.name
                    ? (i.name = this.value)
                    : this.type.keyword
                    ? ((i.name = this.type.keyword),
                      ("class" !== i.name && "function" !== i.name) ||
                        (this.lastTokEnd === this.lastTokStart + 1 &&
                          46 === this.input.charCodeAt(this.lastTokStart)) ||
                        this.context.pop())
                    : this.unexpected(),
                  this.next(),
                  this.finishNode(i, "Identifier"),
                  t || this.checkUnreserved(i),
                  i
                );
              }),
              (t.parseYield = function () {
                this.yieldPos || (this.yieldPos = this.start);
                var t = this.startNode();
                return (
                  this.next(),
                  this.type === g.semi ||
                  this.canInsertSemicolon() ||
                  (this.type !== g.star && !this.type.startsExpr)
                    ? ((t.delegate = !1), (t.argument = null))
                    : ((t.delegate = this.eat(g.star)),
                      (t.argument = this.parseMaybeAssign())),
                  this.finishNode(t, "YieldExpression")
                );
              }),
              (t.parseAwait = function () {
                this.awaitPos || (this.awaitPos = this.start);
                var t = this.startNode();
                return (
                  this.next(),
                  (t.argument = this.parseMaybeUnary(null, !0)),
                  this.finishNode(t, "AwaitExpression")
                );
              }),
              w.prototype),
            t =
              ((p.raise = function (t, e) {
                var i = G(this.input, t),
                  e =
                    ((e += " (" + i.line + ":" + i.column + ")"),
                    new SyntaxError(e));
                throw ((e.pos = t), (e.loc = i), (e.raisedAt = this.pos), e);
              }),
              (p.raiseRecoverable = p.raise),
              (p.curPosition = function () {
                if (this.options.locations)
                  return new v(this.curLine, this.pos - this.lineStart);
              }),
              w.prototype),
            X =
              Object.assign ||
              function (t) {
                for (var e = [], i = arguments.length - 1; 0 < i--; )
                  e[i] = arguments[i + 1];
                for (var s = 0, r = e; s < r.length; s += 1) {
                  var n,
                    a = r[s];
                  for (n in a) y(a, n) && (t[n] = a[n]);
                }
                return t;
              },
            p =
              ((t.enterFunctionScope = function () {
                this.scopeStack.push({
                  var: {},
                  lexical: {},
                  childVar: {},
                  parentLexical: {},
                });
              }),
              (t.exitFunctionScope = function () {
                this.scopeStack.pop();
              }),
              (t.enterLexicalScope = function () {
                var t = this.scopeStack[this.scopeStack.length - 1],
                  e = { var: {}, lexical: {}, childVar: {}, parentLexical: {} };
                this.scopeStack.push(e),
                  X(e.parentLexical, t.lexical, t.parentLexical);
              }),
              (t.exitLexicalScope = function () {
                var t = this.scopeStack.pop(),
                  e = this.scopeStack[this.scopeStack.length - 1];
                X(e.childVar, t.var, t.childVar);
              }),
              (t.canDeclareVarName = function (t) {
                var e = this.scopeStack[this.scopeStack.length - 1];
                return !y(e.lexical, t) && !y(e.parentLexical, t);
              }),
              (t.canDeclareLexicalName = function (t) {
                var e = this.scopeStack[this.scopeStack.length - 1];
                return !y(e.lexical, t) && !y(e.var, t) && !y(e.childVar, t);
              }),
              (t.declareVarName = function (t) {
                this.scopeStack[this.scopeStack.length - 1].var[t] = !0;
              }),
              (t.declareLexicalName = function (t) {
                this.scopeStack[this.scopeStack.length - 1].lexical[t] = !0;
              }),
              w.prototype);
          function Y(t, e, i, s) {
            return (
              (t.type = e),
              (t.end = i),
              this.options.locations && (t.loc.end = s),
              this.options.ranges && (t.range[1] = i),
              t
            );
          }
          (p.startNode = function () {
            return new C(this, this.start, this.startLoc);
          }),
            (p.startNodeAt = function (t, e) {
              return new C(this, t, e);
            }),
            (p.finishNode = function (t, e) {
              return Y.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
            });
          function P(t, e, i, s, r) {
            (this.token = t),
              (this.isExpr = !!e),
              (this.preserveSpace = !!i),
              (this.override = s),
              (this.generator = !!r);
          }
          function I(t) {
            (this.parser = t),
              (this.validFlags =
                "gim" +
                (6 <= t.options.ecmaVersion ? "uy" : "") +
                (9 <= t.options.ecmaVersion ? "s" : "")),
              (this.source = ""),
              (this.flags = ""),
              (this.start = 0),
              (this.switchU = !1),
              (this.switchN = !1),
              (this.pos = 0),
              (this.lastIntValue = 0),
              (this.lastStringValue = ""),
              (this.lastAssertionIsQuantifiable = !1),
              (this.numCapturingParens = 0),
              (this.maxBackReference = 0),
              (this.groupNames = []),
              (this.backReferenceNames = []);
          }
          var L = {
              b_stat: new P(
                "{",
                !(p.finishNodeAt = function (t, e, i, s) {
                  return Y.call(this, t, e, i, s);
                })
              ),
              b_expr: new P("{", !0),
              b_tmpl: new P("${", !1),
              p_stat: new P("(", !1),
              p_expr: new P("(", !0),
              q_tmpl: new P("`", !0, !0, function (t) {
                return t.tryReadTemplateToken();
              }),
              f_stat: new P("function", !1),
              f_expr: new P("function", !0),
              f_expr_gen: new P("function", !0, !1, null, !0),
              f_gen: new P("function", !1, !1, null, !0),
            },
            t = w.prototype,
            T =
              ((t.initialContext = function () {
                return [L.b_stat];
              }),
              (t.braceIsBlock = function (t) {
                var e = this.curContext();
                return (
                  e === L.f_expr ||
                  e === L.f_stat ||
                  (t !== g.colon || (e !== L.b_stat && e !== L.b_expr)
                    ? t === g._return || (t === g.name && this.exprAllowed)
                      ? l.test(this.input.slice(this.lastTokEnd, this.start))
                      : t === g._else ||
                        t === g.semi ||
                        t === g.eof ||
                        t === g.parenR ||
                        t === g.arrow ||
                        (t === g.braceL
                          ? e === L.b_stat
                          : t !== g._var && t !== g.name && !this.exprAllowed)
                    : !e.isExpr)
                );
              }),
              (t.inGeneratorContext = function () {
                for (var t = this.context.length - 1; 1 <= t; t--) {
                  var e = this.context[t];
                  if ("function" === e.token) return e.generator;
                }
                return !1;
              }),
              (t.updateContext = function (t) {
                var e,
                  i = this.type;
                i.keyword && t === g.dot
                  ? (this.exprAllowed = !1)
                  : (e = i.updateContext)
                  ? e.call(this, t)
                  : (this.exprAllowed = i.beforeExpr);
              }),
              (g.parenR.updateContext = g.braceR.updateContext =
                function () {
                  var t;
                  1 === this.context.length
                    ? (this.exprAllowed = !0)
                    : ((t = this.context.pop()) === L.b_stat &&
                        "function" === this.curContext().token &&
                        (t = this.context.pop()),
                      (this.exprAllowed = !t.isExpr));
                }),
              (g.braceL.updateContext = function (t) {
                this.context.push(this.braceIsBlock(t) ? L.b_stat : L.b_expr),
                  (this.exprAllowed = !0);
              }),
              (g.dollarBraceL.updateContext = function () {
                this.context.push(L.b_tmpl), (this.exprAllowed = !0);
              }),
              (g.parenL.updateContext = function (t) {
                t =
                  t === g._if ||
                  t === g._for ||
                  t === g._with ||
                  t === g._while;
                this.context.push(t ? L.p_stat : L.p_expr),
                  (this.exprAllowed = !0);
              }),
              (g.incDec.updateContext = function () {}),
              (g._function.updateContext = g._class.updateContext =
                function (t) {
                  t.beforeExpr &&
                  t !== g.semi &&
                  t !== g._else &&
                  ((t !== g.colon && t !== g.braceL) ||
                    this.curContext() !== L.b_stat)
                    ? this.context.push(L.f_expr)
                    : this.context.push(L.f_stat),
                    (this.exprAllowed = !1);
                }),
              (g.backQuote.updateContext = function () {
                this.curContext() === L.q_tmpl
                  ? this.context.pop()
                  : this.context.push(L.q_tmpl),
                  (this.exprAllowed = !1);
              }),
              (g.star.updateContext = function (t) {
                t === g._function &&
                  ((t = this.context.length - 1),
                  this.context[t] === L.f_expr
                    ? (this.context[t] = L.f_expr_gen)
                    : (this.context[t] = L.f_gen)),
                  (this.exprAllowed = !0);
              }),
              (g.name.updateContext = function (t) {
                var e = !1;
                6 <= this.options.ecmaVersion &&
                  t !== g.dot &&
                  (("of" === this.value && !this.exprAllowed) ||
                    ("yield" === this.value && this.inGeneratorContext())) &&
                  (e = !0),
                  (this.exprAllowed = e);
              }),
              {
                $LONE: [
                  "ASCII",
                  "ASCII_Hex_Digit",
                  "AHex",
                  "Alphabetic",
                  "Alpha",
                  "Any",
                  "Assigned",
                  "Bidi_Control",
                  "Bidi_C",
                  "Bidi_Mirrored",
                  "Bidi_M",
                  "Case_Ignorable",
                  "CI",
                  "Cased",
                  "Changes_When_Casefolded",
                  "CWCF",
                  "Changes_When_Casemapped",
                  "CWCM",
                  "Changes_When_Lowercased",
                  "CWL",
                  "Changes_When_NFKC_Casefolded",
                  "CWKCF",
                  "Changes_When_Titlecased",
                  "CWT",
                  "Changes_When_Uppercased",
                  "CWU",
                  "Dash",
                  "Default_Ignorable_Code_Point",
                  "DI",
                  "Deprecated",
                  "Dep",
                  "Diacritic",
                  "Dia",
                  "Emoji",
                  "Emoji_Component",
                  "Emoji_Modifier",
                  "Emoji_Modifier_Base",
                  "Emoji_Presentation",
                  "Extender",
                  "Ext",
                  "Grapheme_Base",
                  "Gr_Base",
                  "Grapheme_Extend",
                  "Gr_Ext",
                  "Hex_Digit",
                  "Hex",
                  "IDS_Binary_Operator",
                  "IDSB",
                  "IDS_Trinary_Operator",
                  "IDST",
                  "ID_Continue",
                  "IDC",
                  "ID_Start",
                  "IDS",
                  "Ideographic",
                  "Ideo",
                  "Join_Control",
                  "Join_C",
                  "Logical_Order_Exception",
                  "LOE",
                  "Lowercase",
                  "Lower",
                  "Math",
                  "Noncharacter_Code_Point",
                  "NChar",
                  "Pattern_Syntax",
                  "Pat_Syn",
                  "Pattern_White_Space",
                  "Pat_WS",
                  "Quotation_Mark",
                  "QMark",
                  "Radical",
                  "Regional_Indicator",
                  "RI",
                  "Sentence_Terminal",
                  "STerm",
                  "Soft_Dotted",
                  "SD",
                  "Terminal_Punctuation",
                  "Term",
                  "Unified_Ideograph",
                  "UIdeo",
                  "Uppercase",
                  "Upper",
                  "Variation_Selector",
                  "VS",
                  "White_Space",
                  "space",
                  "XID_Continue",
                  "XIDC",
                  "XID_Start",
                  "XIDS",
                ],
                General_Category: [
                  "Cased_Letter",
                  "LC",
                  "Close_Punctuation",
                  "Pe",
                  "Connector_Punctuation",
                  "Pc",
                  "Control",
                  "Cc",
                  "cntrl",
                  "Currency_Symbol",
                  "Sc",
                  "Dash_Punctuation",
                  "Pd",
                  "Decimal_Number",
                  "Nd",
                  "digit",
                  "Enclosing_Mark",
                  "Me",
                  "Final_Punctuation",
                  "Pf",
                  "Format",
                  "Cf",
                  "Initial_Punctuation",
                  "Pi",
                  "Letter",
                  "L",
                  "Letter_Number",
                  "Nl",
                  "Line_Separator",
                  "Zl",
                  "Lowercase_Letter",
                  "Ll",
                  "Mark",
                  "M",
                  "Combining_Mark",
                  "Math_Symbol",
                  "Sm",
                  "Modifier_Letter",
                  "Lm",
                  "Modifier_Symbol",
                  "Sk",
                  "Nonspacing_Mark",
                  "Mn",
                  "Number",
                  "N",
                  "Open_Punctuation",
                  "Ps",
                  "Other",
                  "C",
                  "Other_Letter",
                  "Lo",
                  "Other_Number",
                  "No",
                  "Other_Punctuation",
                  "Po",
                  "Other_Symbol",
                  "So",
                  "Paragraph_Separator",
                  "Zp",
                  "Private_Use",
                  "Co",
                  "Punctuation",
                  "P",
                  "punct",
                  "Separator",
                  "Z",
                  "Space_Separator",
                  "Zs",
                  "Spacing_Mark",
                  "Mc",
                  "Surrogate",
                  "Cs",
                  "Symbol",
                  "S",
                  "Titlecase_Letter",
                  "Lt",
                  "Unassigned",
                  "Cn",
                  "Uppercase_Letter",
                  "Lu",
                ],
                Script: [
                  "Adlam",
                  "Adlm",
                  "Ahom",
                  "Anatolian_Hieroglyphs",
                  "Hluw",
                  "Arabic",
                  "Arab",
                  "Armenian",
                  "Armn",
                  "Avestan",
                  "Avst",
                  "Balinese",
                  "Bali",
                  "Bamum",
                  "Bamu",
                  "Bassa_Vah",
                  "Bass",
                  "Batak",
                  "Batk",
                  "Bengali",
                  "Beng",
                  "Bhaiksuki",
                  "Bhks",
                  "Bopomofo",
                  "Bopo",
                  "Brahmi",
                  "Brah",
                  "Braille",
                  "Brai",
                  "Buginese",
                  "Bugi",
                  "Buhid",
                  "Buhd",
                  "Canadian_Aboriginal",
                  "Cans",
                  "Carian",
                  "Cari",
                  "Caucasian_Albanian",
                  "Aghb",
                  "Chakma",
                  "Cakm",
                  "Cham",
                  "Cherokee",
                  "Cher",
                  "Common",
                  "Zyyy",
                  "Coptic",
                  "Copt",
                  "Qaac",
                  "Cuneiform",
                  "Xsux",
                  "Cypriot",
                  "Cprt",
                  "Cyrillic",
                  "Cyrl",
                  "Deseret",
                  "Dsrt",
                  "Devanagari",
                  "Deva",
                  "Duployan",
                  "Dupl",
                  "Egyptian_Hieroglyphs",
                  "Egyp",
                  "Elbasan",
                  "Elba",
                  "Ethiopic",
                  "Ethi",
                  "Georgian",
                  "Geor",
                  "Glagolitic",
                  "Glag",
                  "Gothic",
                  "Goth",
                  "Grantha",
                  "Gran",
                  "Greek",
                  "Grek",
                  "Gujarati",
                  "Gujr",
                  "Gurmukhi",
                  "Guru",
                  "Han",
                  "Hani",
                  "Hangul",
                  "Hang",
                  "Hanunoo",
                  "Hano",
                  "Hatran",
                  "Hatr",
                  "Hebrew",
                  "Hebr",
                  "Hiragana",
                  "Hira",
                  "Imperial_Aramaic",
                  "Armi",
                  "Inherited",
                  "Zinh",
                  "Qaai",
                  "Inscriptional_Pahlavi",
                  "Phli",
                  "Inscriptional_Parthian",
                  "Prti",
                  "Javanese",
                  "Java",
                  "Kaithi",
                  "Kthi",
                  "Kannada",
                  "Knda",
                  "Katakana",
                  "Kana",
                  "Kayah_Li",
                  "Kali",
                  "Kharoshthi",
                  "Khar",
                  "Khmer",
                  "Khmr",
                  "Khojki",
                  "Khoj",
                  "Khudawadi",
                  "Sind",
                  "Lao",
                  "Laoo",
                  "Latin",
                  "Latn",
                  "Lepcha",
                  "Lepc",
                  "Limbu",
                  "Limb",
                  "Linear_A",
                  "Lina",
                  "Linear_B",
                  "Linb",
                  "Lisu",
                  "Lycian",
                  "Lyci",
                  "Lydian",
                  "Lydi",
                  "Mahajani",
                  "Mahj",
                  "Malayalam",
                  "Mlym",
                  "Mandaic",
                  "Mand",
                  "Manichaean",
                  "Mani",
                  "Marchen",
                  "Marc",
                  "Masaram_Gondi",
                  "Gonm",
                  "Meetei_Mayek",
                  "Mtei",
                  "Mende_Kikakui",
                  "Mend",
                  "Meroitic_Cursive",
                  "Merc",
                  "Meroitic_Hieroglyphs",
                  "Mero",
                  "Miao",
                  "Plrd",
                  "Modi",
                  "Mongolian",
                  "Mong",
                  "Mro",
                  "Mroo",
                  "Multani",
                  "Mult",
                  "Myanmar",
                  "Mymr",
                  "Nabataean",
                  "Nbat",
                  "New_Tai_Lue",
                  "Talu",
                  "Newa",
                  "Nko",
                  "Nkoo",
                  "Nushu",
                  "Nshu",
                  "Ogham",
                  "Ogam",
                  "Ol_Chiki",
                  "Olck",
                  "Old_Hungarian",
                  "Hung",
                  "Old_Italic",
                  "Ital",
                  "Old_North_Arabian",
                  "Narb",
                  "Old_Permic",
                  "Perm",
                  "Old_Persian",
                  "Xpeo",
                  "Old_South_Arabian",
                  "Sarb",
                  "Old_Turkic",
                  "Orkh",
                  "Oriya",
                  "Orya",
                  "Osage",
                  "Osge",
                  "Osmanya",
                  "Osma",
                  "Pahawh_Hmong",
                  "Hmng",
                  "Palmyrene",
                  "Palm",
                  "Pau_Cin_Hau",
                  "Pauc",
                  "Phags_Pa",
                  "Phag",
                  "Phoenician",
                  "Phnx",
                  "Psalter_Pahlavi",
                  "Phlp",
                  "Rejang",
                  "Rjng",
                  "Runic",
                  "Runr",
                  "Samaritan",
                  "Samr",
                  "Saurashtra",
                  "Saur",
                  "Sharada",
                  "Shrd",
                  "Shavian",
                  "Shaw",
                  "Siddham",
                  "Sidd",
                  "SignWriting",
                  "Sgnw",
                  "Sinhala",
                  "Sinh",
                  "Sora_Sompeng",
                  "Sora",
                  "Soyombo",
                  "Soyo",
                  "Sundanese",
                  "Sund",
                  "Syloti_Nagri",
                  "Sylo",
                  "Syriac",
                  "Syrc",
                  "Tagalog",
                  "Tglg",
                  "Tagbanwa",
                  "Tagb",
                  "Tai_Le",
                  "Tale",
                  "Tai_Tham",
                  "Lana",
                  "Tai_Viet",
                  "Tavt",
                  "Takri",
                  "Takr",
                  "Tamil",
                  "Taml",
                  "Tangut",
                  "Tang",
                  "Telugu",
                  "Telu",
                  "Thaana",
                  "Thaa",
                  "Thai",
                  "Tibetan",
                  "Tibt",
                  "Tifinagh",
                  "Tfng",
                  "Tirhuta",
                  "Tirh",
                  "Ugaritic",
                  "Ugar",
                  "Vai",
                  "Vaii",
                  "Warang_Citi",
                  "Wara",
                  "Yi",
                  "Yiii",
                  "Zanabazar_Square",
                  "Zanb",
                ],
              }),
            p =
              (Array.prototype.push.apply(T.$LONE, T.General_Category),
              (T.gc = T.General_Category),
              (T.sc = T.Script_Extensions = T.scx = T.Script),
              w.prototype);
          function N(t) {
            return t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
          }
          function Z(t) {
            return (
              36 === t ||
              (40 <= t && t <= 43) ||
              46 === t ||
              63 === t ||
              (91 <= t && t <= 94) ||
              (123 <= t && t <= 125)
            );
          }
          function J(t) {
            return (65 <= t && t <= 90) || (97 <= t && t <= 122);
          }
          function tt(t) {
            return J(t) || 95 === t;
          }
          function V(t) {
            return 48 <= t && t <= 57;
          }
          function et(t) {
            return (
              (48 <= t && t <= 57) ||
              (65 <= t && t <= 70) ||
              (97 <= t && t <= 102)
            );
          }
          function it(t) {
            return 65 <= t && t <= 70
              ? t - 65 + 10
              : 97 <= t && t <= 102
              ? t - 97 + 10
              : t - 48;
          }
          function st(t) {
            return 48 <= t && t <= 55;
          }
          (I.prototype.reset = function (t, e, i) {
            var s = -1 !== i.indexOf("u");
            (this.start = 0 | t),
              (this.source = e + ""),
              (this.flags = i),
              (this.switchU = s && 6 <= this.parser.options.ecmaVersion),
              (this.switchN = s && 9 <= this.parser.options.ecmaVersion);
          }),
            (I.prototype.raise = function (t) {
              this.parser.raiseRecoverable(
                this.start,
                "Invalid regular expression: /" + this.source + "/: " + t
              );
            }),
            (I.prototype.at = function (t) {
              var e = this.source,
                i = e.length;
              if (i <= t) return -1;
              var s = e.charCodeAt(t);
              if (!this.switchU || s <= 55295 || 57344 <= s || i <= t + 1)
                return s;
              i = e.charCodeAt(t + 1);
              return 56320 <= i && i <= 57343 ? (s << 10) + i - 56613888 : s;
            }),
            (I.prototype.nextIndex = function (t) {
              var e = this.source,
                i = e.length;
              if (i <= t) return i;
              var s = e.charCodeAt(t);
              return !this.switchU ||
                s <= 55295 ||
                57344 <= s ||
                i <= t + 1 ||
                (s = e.charCodeAt(t + 1)) < 56320 ||
                57343 < s
                ? t + 1
                : t + 2;
            }),
            (I.prototype.current = function () {
              return this.at(this.pos);
            }),
            (I.prototype.lookahead = function () {
              return this.at(this.nextIndex(this.pos));
            }),
            (I.prototype.advance = function () {
              this.pos = this.nextIndex(this.pos);
            }),
            (I.prototype.eat = function (t) {
              return this.current() === t && (this.advance(), !0);
            }),
            (p.validateRegExpFlags = function (t) {
              for (
                var e = t.validFlags, i = t.flags, s = 0;
                s < i.length;
                s++
              ) {
                var r = i.charAt(s);
                -1 === e.indexOf(r) &&
                  this.raise(t.start, "Invalid regular expression flag"),
                  -1 < i.indexOf(r, s + 1) &&
                    this.raise(t.start, "Duplicate regular expression flag");
              }
            }),
            (p.validateRegExpPattern = function (t) {
              this.regexp_pattern(t),
                !t.switchN &&
                  9 <= this.options.ecmaVersion &&
                  0 < t.groupNames.length &&
                  ((t.switchN = !0), this.regexp_pattern(t));
            }),
            (p.regexp_pattern = function (t) {
              (t.pos = 0),
                (t.lastIntValue = 0),
                (t.lastStringValue = ""),
                (t.lastAssertionIsQuantifiable = !1),
                (t.numCapturingParens = 0),
                (t.maxBackReference = 0),
                (t.groupNames.length = 0),
                (t.backReferenceNames.length = 0),
                this.regexp_disjunction(t),
                t.pos !== t.source.length &&
                  (t.eat(41) && t.raise("Unmatched ')'"),
                  (t.eat(93) || t.eat(125)) &&
                    t.raise("Lone quantifier brackets")),
                t.maxBackReference > t.numCapturingParens &&
                  t.raise("Invalid escape");
              for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
                var s = i[e];
                -1 === t.groupNames.indexOf(s) &&
                  t.raise("Invalid named capture referenced");
              }
            }),
            (p.regexp_disjunction = function (t) {
              for (this.regexp_alternative(t); t.eat(124); )
                this.regexp_alternative(t);
              this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"),
                t.eat(123) && t.raise("Lone quantifier brackets");
            }),
            (p.regexp_alternative = function (t) {
              for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
            }),
            (p.regexp_eatTerm = function (t) {
              return this.regexp_eatAssertion(t)
                ? (t.lastAssertionIsQuantifiable &&
                    this.regexp_eatQuantifier(t) &&
                    t.switchU &&
                    t.raise("Invalid quantifier"),
                  !0)
                : !(t.switchU
                    ? !this.regexp_eatAtom(t)
                    : !this.regexp_eatExtendedAtom(t)) &&
                    (this.regexp_eatQuantifier(t), !0);
            }),
            (p.regexp_eatAssertion = function (t) {
              var e = t.pos;
              if (
                ((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36))
              )
                return !0;
              if (t.eat(92)) {
                if (t.eat(66) || t.eat(98)) return !0;
                t.pos = e;
              }
              if (t.eat(40) && t.eat(63)) {
                var i = !1;
                if (
                  (9 <= this.options.ecmaVersion && (i = t.eat(60)),
                  t.eat(61) || t.eat(33))
                )
                  return (
                    this.regexp_disjunction(t),
                    t.eat(41) || t.raise("Unterminated group"),
                    (t.lastAssertionIsQuantifiable = !i),
                    !0
                  );
              }
              return (t.pos = e), !1;
            }),
            (p.regexp_eatQuantifier = function (t, e) {
              return (
                !!this.regexp_eatQuantifierPrefix(
                  t,
                  (e = void 0 === e ? !1 : e)
                ) && (t.eat(63), !0)
              );
            }),
            (p.regexp_eatQuantifierPrefix = function (t, e) {
              return (
                t.eat(42) ||
                t.eat(43) ||
                t.eat(63) ||
                this.regexp_eatBracedQuantifier(t, e)
              );
            }),
            (p.regexp_eatBracedQuantifier = function (t, e) {
              var i = t.pos;
              if (t.eat(123)) {
                var s,
                  r = -1;
                if (
                  this.regexp_eatDecimalDigits(t) &&
                  ((s = t.lastIntValue),
                  t.eat(44) &&
                    this.regexp_eatDecimalDigits(t) &&
                    (r = t.lastIntValue),
                  t.eat(125))
                )
                  return (
                    -1 !== r &&
                      r < s &&
                      !e &&
                      t.raise("numbers out of order in {} quantifier"),
                    !0
                  );
                t.switchU && !e && t.raise("Incomplete quantifier"),
                  (t.pos = i);
              }
              return !1;
            }),
            (p.regexp_eatAtom = function (t) {
              return (
                this.regexp_eatPatternCharacters(t) ||
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t)
              );
            }),
            (p.regexp_eatReverseSolidusAtomEscape = function (t) {
              var e = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatAtomEscape(t)) return !0;
                t.pos = e;
              }
              return !1;
            }),
            (p.regexp_eatUncapturingGroup = function (t) {
              var e = t.pos;
              if (t.eat(40)) {
                if (t.eat(63) && t.eat(58)) {
                  if ((this.regexp_disjunction(t), t.eat(41))) return !0;
                  t.raise("Unterminated group");
                }
                t.pos = e;
              }
              return !1;
            }),
            (p.regexp_eatCapturingGroup = function (t) {
              if (t.eat(40)) {
                if (
                  (9 <= this.options.ecmaVersion
                    ? this.regexp_groupSpecifier(t)
                    : 63 === t.current() && t.raise("Invalid group"),
                  this.regexp_disjunction(t),
                  t.eat(41))
                )
                  return (t.numCapturingParens += 1), !0;
                t.raise("Unterminated group");
              }
              return !1;
            }),
            (p.regexp_eatExtendedAtom = function (t) {
              return (
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t) ||
                this.regexp_eatInvalidBracedQuantifier(t) ||
                this.regexp_eatExtendedPatternCharacter(t)
              );
            }),
            (p.regexp_eatInvalidBracedQuantifier = function (t) {
              return (
                this.regexp_eatBracedQuantifier(t, !0) &&
                  t.raise("Nothing to repeat"),
                !1
              );
            }),
            (p.regexp_eatSyntaxCharacter = function (t) {
              var e = t.current();
              return !!Z(e) && ((t.lastIntValue = e), t.advance(), !0);
            }),
            (p.regexp_eatPatternCharacters = function (t) {
              for (var e, i = t.pos; -1 !== (e = t.current()) && !Z(e); )
                t.advance();
              return t.pos !== i;
            }),
            (p.regexp_eatExtendedPatternCharacter = function (t) {
              var e = t.current();
              return (
                !(
                  -1 === e ||
                  36 === e ||
                  (40 <= e && e <= 43) ||
                  46 === e ||
                  63 === e ||
                  91 === e ||
                  94 === e ||
                  124 === e
                ) && (t.advance(), !0)
              );
            }),
            (p.regexp_groupSpecifier = function (t) {
              if (t.eat(63)) {
                if (this.regexp_eatGroupName(t))
                  return (
                    -1 !== t.groupNames.indexOf(t.lastStringValue) &&
                      t.raise("Duplicate capture group name"),
                    void t.groupNames.push(t.lastStringValue)
                  );
                t.raise("Invalid group");
              }
            }),
            (p.regexp_eatGroupName = function (t) {
              if (((t.lastStringValue = ""), t.eat(60))) {
                if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62))
                  return !0;
                t.raise("Invalid capture group name");
              }
              return !1;
            }),
            (p.regexp_eatRegExpIdentifierName = function (t) {
              if (
                ((t.lastStringValue = ""),
                this.regexp_eatRegExpIdentifierStart(t))
              ) {
                for (
                  t.lastStringValue += N(t.lastIntValue);
                  this.regexp_eatRegExpIdentifierPart(t);

                )
                  t.lastStringValue += N(t.lastIntValue);
                return !0;
              }
              return !1;
            }),
            (p.regexp_eatRegExpIdentifierStart = function (t) {
              var e,
                i = t.pos,
                s = t.current();
              return (
                t.advance(),
                92 === s &&
                  this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
                  (s = t.lastIntValue),
                o((e = s), !0) || 36 === e || 95 === e
                  ? ((t.lastIntValue = s), !0)
                  : ((t.pos = i), !1)
              );
            }),
            (p.regexp_eatRegExpIdentifierPart = function (t) {
              var e,
                i = t.pos,
                s = t.current();
              return (
                t.advance(),
                92 === s &&
                  this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
                  (s = t.lastIntValue),
                h((e = s), !0) ||
                36 === e ||
                95 === e ||
                8204 === e ||
                8205 === e
                  ? ((t.lastIntValue = s), !0)
                  : ((t.pos = i), !1)
              );
            }),
            (p.regexp_eatAtomEscape = function (t) {
              return (
                !!(
                  this.regexp_eatBackReference(t) ||
                  this.regexp_eatCharacterClassEscape(t) ||
                  this.regexp_eatCharacterEscape(t) ||
                  (t.switchN && this.regexp_eatKGroupName(t))
                ) ||
                (t.switchU &&
                  (99 === t.current() && t.raise("Invalid unicode escape"),
                  t.raise("Invalid escape")),
                !1)
              );
            }),
            (p.regexp_eatBackReference = function (t) {
              var e = t.pos;
              if (this.regexp_eatDecimalEscape(t)) {
                var i = t.lastIntValue;
                if (t.switchU)
                  return i > t.maxBackReference && (t.maxBackReference = i), !0;
                if (i <= t.numCapturingParens) return !0;
                t.pos = e;
              }
              return !1;
            }),
            (p.regexp_eatKGroupName = function (t) {
              if (t.eat(107)) {
                if (this.regexp_eatGroupName(t))
                  return t.backReferenceNames.push(t.lastStringValue), !0;
                t.raise("Invalid named reference");
              }
              return !1;
            }),
            (p.regexp_eatCharacterEscape = function (t) {
              return (
                this.regexp_eatControlEscape(t) ||
                this.regexp_eatCControlLetter(t) ||
                this.regexp_eatZero(t) ||
                this.regexp_eatHexEscapeSequence(t) ||
                this.regexp_eatRegExpUnicodeEscapeSequence(t) ||
                (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
                this.regexp_eatIdentityEscape(t)
              );
            }),
            (p.regexp_eatCControlLetter = function (t) {
              var e = t.pos;
              if (t.eat(99)) {
                if (this.regexp_eatControlLetter(t)) return !0;
                t.pos = e;
              }
              return !1;
            }),
            (p.regexp_eatZero = function (t) {
              return (
                48 === t.current() &&
                !V(t.lookahead()) &&
                ((t.lastIntValue = 0), t.advance(), !0)
              );
            }),
            (p.regexp_eatControlEscape = function (t) {
              var e = t.current();
              return 116 === e
                ? ((t.lastIntValue = 9), t.advance(), !0)
                : 110 === e
                ? ((t.lastIntValue = 10), t.advance(), !0)
                : 118 === e
                ? ((t.lastIntValue = 11), t.advance(), !0)
                : 102 === e
                ? ((t.lastIntValue = 12), t.advance(), !0)
                : 114 === e && ((t.lastIntValue = 13), t.advance(), !0);
            }),
            (p.regexp_eatControlLetter = function (t) {
              var e = t.current();
              return !!J(e) && ((t.lastIntValue = e % 32), t.advance(), !0);
            }),
            (p.regexp_eatRegExpUnicodeEscapeSequence = function (t) {
              var e = t.pos;
              if (t.eat(117)) {
                if (this.regexp_eatFixedHexDigits(t, 4)) {
                  var i = t.lastIntValue;
                  if (t.switchU && 55296 <= i && i <= 56319) {
                    var s = t.pos;
                    if (
                      t.eat(92) &&
                      t.eat(117) &&
                      this.regexp_eatFixedHexDigits(t, 4)
                    ) {
                      var r = t.lastIntValue;
                      if (56320 <= r && r <= 57343)
                        return (
                          (t.lastIntValue =
                            1024 * (i - 55296) + (r - 56320) + 65536),
                          !0
                        );
                    }
                    (t.pos = s), (t.lastIntValue = i);
                  }
                  return !0;
                }
                if (
                  t.switchU &&
                  t.eat(123) &&
                  this.regexp_eatHexDigits(t) &&
                  t.eat(125) &&
                  0 <= (r = t.lastIntValue) &&
                  r <= 1114111
                )
                  return !0;
                t.switchU && t.raise("Invalid unicode escape"), (t.pos = e);
              }
              return !1;
            }),
            (p.regexp_eatIdentityEscape = function (t) {
              if (t.switchU)
                return (
                  !!this.regexp_eatSyntaxCharacter(t) ||
                  (!!t.eat(47) && ((t.lastIntValue = 47), !0))
                );
              var e = t.current();
              return (
                !(99 === e || (t.switchN && 107 === e)) &&
                ((t.lastIntValue = e), t.advance(), !0)
              );
            }),
            (p.regexp_eatDecimalEscape = function (t) {
              t.lastIntValue = 0;
              var e = t.current();
              if (49 <= e && e <= 57) {
                for (
                  ;
                  (t.lastIntValue = 10 * t.lastIntValue + (e - 48)),
                    t.advance(),
                    48 <= (e = t.current()) && e <= 57;

                );
                return !0;
              }
              return !1;
            }),
            (p.regexp_eatCharacterClassEscape = function (t) {
              var e,
                i = t.current();
              if (
                100 === (e = i) ||
                68 === e ||
                115 === e ||
                83 === e ||
                119 === e ||
                87 === e
              )
                return (t.lastIntValue = -1), t.advance(), !0;
              if (
                t.switchU &&
                9 <= this.options.ecmaVersion &&
                (80 === i || 112 === i)
              ) {
                if (
                  ((t.lastIntValue = -1),
                  t.advance(),
                  t.eat(123) &&
                    this.regexp_eatUnicodePropertyValueExpression(t) &&
                    t.eat(125))
                )
                  return !0;
                t.raise("Invalid property name");
              }
              return !1;
            }),
            (p.regexp_eatUnicodePropertyValueExpression = function (t) {
              var e = t.pos;
              if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                var i,
                  s = t.lastStringValue;
                if (this.regexp_eatUnicodePropertyValue(t))
                  return (
                    (i = t.lastStringValue),
                    this.regexp_validateUnicodePropertyNameAndValue(t, s, i),
                    !0
                  );
              }
              return (
                (t.pos = e),
                !!this.regexp_eatLoneUnicodePropertyNameOrValue(t) &&
                  ((s = t.lastStringValue),
                  this.regexp_validateUnicodePropertyNameOrValue(t, s),
                  !0)
              );
            }),
            (p.regexp_validateUnicodePropertyNameAndValue = function (t, e, i) {
              (T.hasOwnProperty(e) && -1 !== T[e].indexOf(i)) ||
                t.raise("Invalid property name");
            }),
            (p.regexp_validateUnicodePropertyNameOrValue = function (t, e) {
              -1 === T.$LONE.indexOf(e) && t.raise("Invalid property name");
            }),
            (p.regexp_eatUnicodePropertyName = function (t) {
              var e;
              for (t.lastStringValue = ""; tt((e = t.current())); )
                (t.lastStringValue += N(e)), t.advance();
              return "" !== t.lastStringValue;
            }),
            (p.regexp_eatUnicodePropertyValue = function (t) {
              var e, i;
              for (t.lastStringValue = ""; tt((i = e = t.current())) || V(i); )
                (t.lastStringValue += N(e)), t.advance();
              return "" !== t.lastStringValue;
            }),
            (p.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
              return this.regexp_eatUnicodePropertyValue(t);
            }),
            (p.regexp_eatCharacterClass = function (t) {
              if (t.eat(91)) {
                if ((t.eat(94), this.regexp_classRanges(t), t.eat(93)))
                  return !0;
                t.raise("Unterminated character class");
              }
              return !1;
            }),
            (p.regexp_classRanges = function (t) {
              for (; this.regexp_eatClassAtom(t); ) {
                var e,
                  i = t.lastIntValue;
                t.eat(45) &&
                  this.regexp_eatClassAtom(t) &&
                  ((e = t.lastIntValue),
                  !t.switchU ||
                    (-1 !== i && -1 !== e) ||
                    t.raise("Invalid character class"),
                  -1 !== i &&
                    -1 !== e &&
                    e < i &&
                    t.raise("Range out of order in character class"));
              }
            }),
            (p.regexp_eatClassAtom = function (t) {
              var e = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatClassEscape(t)) return !0;
                t.switchU &&
                  ((99 !== (i = t.current()) && !st(i)) ||
                    t.raise("Invalid class escape"),
                  t.raise("Invalid escape")),
                  (t.pos = e);
              }
              var i = t.current();
              return 93 !== i && ((t.lastIntValue = i), t.advance(), !0);
            }),
            (p.regexp_eatClassEscape = function (t) {
              var e = t.pos;
              if (t.eat(98)) return (t.lastIntValue = 8), !0;
              if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
              if (!t.switchU && t.eat(99)) {
                if (this.regexp_eatClassControlLetter(t)) return !0;
                t.pos = e;
              }
              return (
                this.regexp_eatCharacterClassEscape(t) ||
                this.regexp_eatCharacterEscape(t)
              );
            }),
            (p.regexp_eatClassControlLetter = function (t) {
              var e = t.current();
              return (
                !(!V(e) && 95 !== e) &&
                ((t.lastIntValue = e % 32), t.advance(), !0)
              );
            }),
            (p.regexp_eatHexEscapeSequence = function (t) {
              var e = t.pos;
              if (t.eat(120)) {
                if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                t.switchU && t.raise("Invalid escape"), (t.pos = e);
              }
              return !1;
            }),
            (p.regexp_eatDecimalDigits = function (t) {
              var e,
                i = t.pos;
              for (t.lastIntValue = 0; V((e = t.current())); )
                (t.lastIntValue = 10 * t.lastIntValue + (e - 48)), t.advance();
              return t.pos !== i;
            }),
            (p.regexp_eatHexDigits = function (t) {
              var e,
                i = t.pos;
              for (t.lastIntValue = 0; et((e = t.current())); )
                (t.lastIntValue = 16 * t.lastIntValue + it(e)), t.advance();
              return t.pos !== i;
            }),
            (p.regexp_eatLegacyOctalEscapeSequence = function (t) {
              var e, i;
              return (
                !!this.regexp_eatOctalDigit(t) &&
                ((e = t.lastIntValue),
                this.regexp_eatOctalDigit(t)
                  ? ((i = t.lastIntValue),
                    e <= 3 && this.regexp_eatOctalDigit(t)
                      ? (t.lastIntValue = 64 * e + 8 * i + t.lastIntValue)
                      : (t.lastIntValue = 8 * e + i))
                  : (t.lastIntValue = e),
                !0)
              );
            }),
            (p.regexp_eatOctalDigit = function (t) {
              var e = t.current();
              return st(e)
                ? ((t.lastIntValue = e - 48), t.advance(), !0)
                : ((t.lastIntValue = 0), !1);
            }),
            (p.regexp_eatFixedHexDigits = function (t, e) {
              for (var i = t.pos, s = (t.lastIntValue = 0); s < e; ++s) {
                var r = t.current();
                if (!et(r)) return (t.pos = i), !1;
                (t.lastIntValue = 16 * t.lastIntValue + it(r)), t.advance();
              }
              return !0;
            });
          function R(t) {
            (this.type = t.type),
              (this.value = t.value),
              (this.start = t.start),
              (this.end = t.end),
              t.options.locations &&
                (this.loc = new b(t, t.startLoc, t.endLoc)),
              t.options.ranges && (this.range = [t.start, t.end]);
          }
          t = w.prototype;
          function D(t) {
            return t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
          }
          (t.next = function () {
            this.options.onToken && this.options.onToken(new R(this)),
              (this.lastTokEnd = this.end),
              (this.lastTokStart = this.start),
              (this.lastTokEndLoc = this.endLoc),
              (this.lastTokStartLoc = this.startLoc),
              this.nextToken();
          }),
            (t.getToken = function () {
              return this.next(), new R(this);
            }),
            "undefined" != typeof Symbol &&
              (t[Symbol.iterator] = function () {
                var e = this;
                return {
                  next: function () {
                    var t = e.getToken();
                    return { done: t.type === g.eof, value: t };
                  },
                };
              }),
            (t.curContext = function () {
              return this.context[this.context.length - 1];
            }),
            (t.nextToken = function () {
              var t = this.curContext();
              return (
                (t && t.preserveSpace) || this.skipSpace(),
                (this.start = this.pos),
                this.options.locations && (this.startLoc = this.curPosition()),
                this.pos >= this.input.length
                  ? this.finishToken(g.eof)
                  : t.override
                  ? t.override(this)
                  : void this.readToken(this.fullCharCodeAtPos())
              );
            }),
            (t.readToken = function (t) {
              return o(t, 6 <= this.options.ecmaVersion) || 92 === t
                ? this.readWord()
                : this.getTokenFromCode(t);
            }),
            (t.fullCharCodeAtPos = function () {
              var t = this.input.charCodeAt(this.pos);
              return t <= 55295 || 57344 <= t
                ? t
                : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
            }),
            (t.skipBlockComment = function () {
              var t,
                e = this.options.onComment && this.curPosition(),
                i = this.pos,
                s = this.input.indexOf("*/", (this.pos += 2));
              if (
                (-1 === s && this.raise(this.pos - 2, "Unterminated comment"),
                (this.pos = s + 2),
                this.options.locations)
              )
                for (
                  d.lastIndex = i;
                  (t = d.exec(this.input)) && t.index < this.pos;

                )
                  ++this.curLine, (this.lineStart = t.index + t[0].length);
              this.options.onComment &&
                this.options.onComment(
                  !0,
                  this.input.slice(i + 2, s),
                  i,
                  this.pos,
                  e,
                  this.curPosition()
                );
            }),
            (t.skipLineComment = function (t) {
              for (
                var e = this.pos,
                  i = this.options.onComment && this.curPosition(),
                  s = this.input.charCodeAt((this.pos += t));
                this.pos < this.input.length && !f(s);

              )
                s = this.input.charCodeAt(++this.pos);
              this.options.onComment &&
                this.options.onComment(
                  !1,
                  this.input.slice(e + t, this.pos),
                  e,
                  this.pos,
                  i,
                  this.curPosition()
                );
            }),
            (t.skipSpace = function () {
              var t = this;
              t: for (; this.pos < this.input.length; ) {
                var e = t.input.charCodeAt(t.pos);
                switch (e) {
                  case 32:
                  case 160:
                    ++t.pos;
                    break;
                  case 13:
                    10 === t.input.charCodeAt(t.pos + 1) && ++t.pos;
                  case 10:
                  case 8232:
                  case 8233:
                    ++t.pos,
                      t.options.locations &&
                        (++t.curLine, (t.lineStart = t.pos));
                    break;
                  case 47:
                    switch (t.input.charCodeAt(t.pos + 1)) {
                      case 42:
                        t.skipBlockComment();
                        break;
                      case 47:
                        t.skipLineComment(2);
                        break;
                      default:
                        break t;
                    }
                    break;
                  default:
                    if (
                      !(
                        (8 < e && e < 14) ||
                        (5760 <= e && m.test(String.fromCharCode(e)))
                      )
                    )
                      break t;
                    ++t.pos;
                }
              }
            }),
            (t.finishToken = function (t, e) {
              (this.end = this.pos),
                this.options.locations && (this.endLoc = this.curPosition());
              var i = this.type;
              (this.type = t), (this.value = e), this.updateContext(i);
            }),
            (t.readToken_dot = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              if (48 <= t && t <= 57) return this.readNumber(!0);
              var e = this.input.charCodeAt(this.pos + 2);
              return 6 <= this.options.ecmaVersion && 46 === t && 46 === e
                ? ((this.pos += 3), this.finishToken(g.ellipsis))
                : (++this.pos, this.finishToken(g.dot));
            }),
            (t.readToken_slash = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              return this.exprAllowed
                ? (++this.pos, this.readRegexp())
                : 61 === t
                ? this.finishOp(g.assign, 2)
                : this.finishOp(g.slash, 1);
            }),
            (t.readToken_mult_modulo_exp = function (t) {
              var e = this.input.charCodeAt(this.pos + 1),
                i = 1,
                s = 42 === t ? g.star : g.modulo;
              return (
                7 <= this.options.ecmaVersion &&
                  42 === t &&
                  42 === e &&
                  (++i,
                  (s = g.starstar),
                  (e = this.input.charCodeAt(this.pos + 2))),
                61 === e ? this.finishOp(g.assign, i + 1) : this.finishOp(s, i)
              );
            }),
            (t.readToken_pipe_amp = function (t) {
              var e = this.input.charCodeAt(this.pos + 1);
              return e === t
                ? this.finishOp(124 === t ? g.logicalOR : g.logicalAND, 2)
                : 61 === e
                ? this.finishOp(g.assign, 2)
                : this.finishOp(124 === t ? g.bitwiseOR : g.bitwiseAND, 1);
            }),
            (t.readToken_caret = function () {
              return 61 === this.input.charCodeAt(this.pos + 1)
                ? this.finishOp(g.assign, 2)
                : this.finishOp(g.bitwiseXOR, 1);
            }),
            (t.readToken_plus_min = function (t) {
              var e = this.input.charCodeAt(this.pos + 1);
              return e === t
                ? 45 !== e ||
                  this.inModule ||
                  62 !== this.input.charCodeAt(this.pos + 2) ||
                  (0 !== this.lastTokEnd &&
                    !l.test(this.input.slice(this.lastTokEnd, this.pos)))
                  ? this.finishOp(g.incDec, 2)
                  : (this.skipLineComment(3),
                    this.skipSpace(),
                    this.nextToken())
                : 61 === e
                ? this.finishOp(g.assign, 2)
                : this.finishOp(g.plusMin, 1);
            }),
            (t.readToken_lt_gt = function (t) {
              var e = this.input.charCodeAt(this.pos + 1),
                i = 1;
              return e === t
                ? ((i =
                    62 === t && 62 === this.input.charCodeAt(this.pos + 2)
                      ? 3
                      : 2),
                  61 === this.input.charCodeAt(this.pos + i)
                    ? this.finishOp(g.assign, i + 1)
                    : this.finishOp(g.bitShift, i))
                : 33 !== e ||
                  60 !== t ||
                  this.inModule ||
                  45 !== this.input.charCodeAt(this.pos + 2) ||
                  45 !== this.input.charCodeAt(this.pos + 3)
                ? this.finishOp(g.relational, (i = 61 === e ? 2 : i))
                : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
            }),
            (t.readToken_eq_excl = function (t) {
              var e = this.input.charCodeAt(this.pos + 1);
              return 61 === e
                ? this.finishOp(
                    g.equality,
                    61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
                  )
                : 61 === t && 62 === e && 6 <= this.options.ecmaVersion
                ? ((this.pos += 2), this.finishToken(g.arrow))
                : this.finishOp(61 === t ? g.eq : g.prefix, 1);
            }),
            (t.getTokenFromCode = function (t) {
              switch (t) {
                case 46:
                  return this.readToken_dot();
                case 40:
                  return ++this.pos, this.finishToken(g.parenL);
                case 41:
                  return ++this.pos, this.finishToken(g.parenR);
                case 59:
                  return ++this.pos, this.finishToken(g.semi);
                case 44:
                  return ++this.pos, this.finishToken(g.comma);
                case 91:
                  return ++this.pos, this.finishToken(g.bracketL);
                case 93:
                  return ++this.pos, this.finishToken(g.bracketR);
                case 123:
                  return ++this.pos, this.finishToken(g.braceL);
                case 125:
                  return ++this.pos, this.finishToken(g.braceR);
                case 58:
                  return ++this.pos, this.finishToken(g.colon);
                case 63:
                  return ++this.pos, this.finishToken(g.question);
                case 96:
                  if (this.options.ecmaVersion < 6) break;
                  return ++this.pos, this.finishToken(g.backQuote);
                case 48:
                  var e = this.input.charCodeAt(this.pos + 1);
                  if (120 === e || 88 === e) return this.readRadixNumber(16);
                  if (6 <= this.options.ecmaVersion) {
                    if (111 === e || 79 === e) return this.readRadixNumber(8);
                    if (98 === e || 66 === e) return this.readRadixNumber(2);
                  }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  return this.readNumber(!1);
                case 34:
                case 39:
                  return this.readString(t);
                case 47:
                  return this.readToken_slash();
                case 37:
                case 42:
                  return this.readToken_mult_modulo_exp(t);
                case 124:
                case 38:
                  return this.readToken_pipe_amp(t);
                case 94:
                  return this.readToken_caret();
                case 43:
                case 45:
                  return this.readToken_plus_min(t);
                case 60:
                case 62:
                  return this.readToken_lt_gt(t);
                case 61:
                case 33:
                  return this.readToken_eq_excl(t);
                case 126:
                  return this.finishOp(g.prefix, 1);
              }
              this.raise(this.pos, "Unexpected character '" + D(t) + "'");
            }),
            (t.finishOp = function (t, e) {
              var i = this.input.slice(this.pos, this.pos + e);
              return (this.pos += e), this.finishToken(t, i);
            }),
            (t.readRegexp = function () {
              for (var t, e, i = this, s = this.pos; ; ) {
                i.pos >= i.input.length &&
                  i.raise(s, "Unterminated regular expression");
                var r = i.input.charAt(i.pos);
                if (
                  (l.test(r) && i.raise(s, "Unterminated regular expression"),
                  t)
                )
                  t = !1;
                else {
                  if ("[" === r) e = !0;
                  else if ("]" === r && e) e = !1;
                  else if ("/" === r && !e) break;
                  t = "\\" === r;
                }
                ++i.pos;
              }
              var n = this.input.slice(s, this.pos),
                a = (++this.pos, this.pos),
                o = this.readWord1(),
                a =
                  (this.containsEsc && this.unexpected(a),
                  this.regexpState || (this.regexpState = new I(this))),
                a =
                  (a.reset(s, n, o),
                  this.validateRegExpFlags(a),
                  this.validateRegExpPattern(a),
                  null);
              try {
                a = new RegExp(n, o);
              } catch (t) {}
              return this.finishToken(g.regexp, {
                pattern: n,
                flags: o,
                value: a,
              });
            }),
            (t.readInt = function (t, e) {
              for (
                var i = this.pos, s = 0, r = 0, n = null == e ? 1 / 0 : e;
                r < n;
                ++r
              ) {
                var a = this.input.charCodeAt(this.pos),
                  o = void 0;
                if (
                  t <=
                  (o =
                    97 <= a
                      ? a - 97 + 10
                      : 65 <= a
                      ? a - 65 + 10
                      : 48 <= a && a <= 57
                      ? a - 48
                      : 1 / 0)
                )
                  break;
                ++this.pos, (s = s * t + o);
              }
              return this.pos === i || (null != e && this.pos - i !== e)
                ? null
                : s;
            }),
            (t.readRadixNumber = function (t) {
              this.pos += 2;
              var e = this.readInt(t);
              return (
                null == e &&
                  this.raise(this.start + 2, "Expected number in radix " + t),
                o(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, "Identifier directly after number"),
                this.finishToken(g.num, e)
              );
            }),
            (t.readNumber = function (t) {
              var e = this.pos,
                t =
                  (t ||
                    null !== this.readInt(10) ||
                    this.raise(e, "Invalid number"),
                  2 <= this.pos - e && 48 === this.input.charCodeAt(e)),
                i =
                  (t && this.strict && this.raise(e, "Invalid number"),
                  t && /[89]/.test(this.input.slice(e, this.pos)) && (t = !1),
                  this.input.charCodeAt(this.pos)),
                i =
                  (46 !== i ||
                    t ||
                    (++this.pos,
                    this.readInt(10),
                    (i = this.input.charCodeAt(this.pos))),
                  (69 !== i && 101 !== i) ||
                    t ||
                    ((43 !== (i = this.input.charCodeAt(++this.pos)) &&
                      45 !== i) ||
                      ++this.pos,
                    null === this.readInt(10) &&
                      this.raise(e, "Invalid number")),
                  o(this.fullCharCodeAtPos()) &&
                    this.raise(this.pos, "Identifier directly after number"),
                  this.input.slice(e, this.pos)),
                e = t ? parseInt(i, 8) : parseFloat(i);
              return this.finishToken(g.num, e);
            }),
            (t.readCodePoint = function () {
              var t, e;
              return (
                123 === this.input.charCodeAt(this.pos)
                  ? (this.options.ecmaVersion < 6 && this.unexpected(),
                    (t = ++this.pos),
                    (e = this.readHexChar(
                      this.input.indexOf("}", this.pos) - this.pos
                    )),
                    ++this.pos,
                    1114111 < e &&
                      this.invalidStringToken(t, "Code point out of bounds"))
                  : (e = this.readHexChar(4)),
                e
              );
            }),
            (t.readString = function (t) {
              for (var e = this, i = "", s = ++this.pos; ; ) {
                e.pos >= e.input.length &&
                  e.raise(e.start, "Unterminated string constant");
                var r = e.input.charCodeAt(e.pos);
                if (r === t) break;
                92 === r
                  ? ((i =
                      (i += e.input.slice(s, e.pos)) + e.readEscapedChar(!1)),
                    (s = e.pos))
                  : (f(r, 10 <= e.options.ecmaVersion) &&
                      e.raise(e.start, "Unterminated string constant"),
                    ++e.pos);
              }
              return (
                (i += this.input.slice(s, this.pos++)),
                this.finishToken(g.string, i)
              );
            });
          var rt = {};
          (t.tryReadTemplateToken = function () {
            this.inTemplateElement = !0;
            try {
              this.readTmplToken();
            } catch (t) {
              if (t !== rt) throw t;
              this.readInvalidTemplateToken();
            }
            this.inTemplateElement = !1;
          }),
            (t.invalidStringToken = function (t, e) {
              if (this.inTemplateElement && 9 <= this.options.ecmaVersion)
                throw rt;
              this.raise(t, e);
            }),
            (t.readTmplToken = function () {
              for (var t = this, e = "", i = this.pos; ; ) {
                t.pos >= t.input.length &&
                  t.raise(t.start, "Unterminated template");
                var s = t.input.charCodeAt(t.pos);
                if (
                  96 === s ||
                  (36 === s && 123 === t.input.charCodeAt(t.pos + 1))
                )
                  return t.pos !== t.start ||
                    (t.type !== g.template && t.type !== g.invalidTemplate)
                    ? ((e += t.input.slice(i, t.pos)),
                      t.finishToken(g.template, e))
                    : 36 === s
                    ? ((t.pos += 2), t.finishToken(g.dollarBraceL))
                    : (++t.pos, t.finishToken(g.backQuote));
                if (92 === s)
                  (e = (e += t.input.slice(i, t.pos)) + t.readEscapedChar(!0)),
                    (i = t.pos);
                else if (f(s)) {
                  switch (((e += t.input.slice(i, t.pos)), ++t.pos, s)) {
                    case 13:
                      10 === t.input.charCodeAt(t.pos) && ++t.pos;
                    case 10:
                      e += "\n";
                      break;
                    default:
                      e += String.fromCharCode(s);
                  }
                  t.options.locations && (++t.curLine, (t.lineStart = t.pos)),
                    (i = t.pos);
                } else ++t.pos;
              }
            }),
            (t.readInvalidTemplateToken = function () {
              for (var t = this; this.pos < this.input.length; this.pos++)
                switch (t.input[t.pos]) {
                  case "\\":
                    ++t.pos;
                    break;
                  case "$":
                    if ("{" !== t.input[t.pos + 1]) break;
                  case "`":
                    return t.finishToken(
                      g.invalidTemplate,
                      t.input.slice(t.start, t.pos)
                    );
                }
              this.raise(this.start, "Unterminated template");
            }),
            (t.readEscapedChar = function (t) {
              var e,
                i,
                s = this.input.charCodeAt(++this.pos);
              switch ((++this.pos, s)) {
                case 110:
                  return "\n";
                case 114:
                  return "\r";
                case 120:
                  return String.fromCharCode(this.readHexChar(2));
                case 117:
                  return D(this.readCodePoint());
                case 116:
                  return "\t";
                case 98:
                  return "\b";
                case 118:
                  return "\v";
                case 102:
                  return "\f";
                case 13:
                  10 === this.input.charCodeAt(this.pos) && ++this.pos;
                case 10:
                  return (
                    this.options.locations &&
                      ((this.lineStart = this.pos), ++this.curLine),
                    ""
                  );
                default:
                  return 48 <= s && s <= 55
                    ? ((e = this.input
                        .substr(this.pos - 1, 3)
                        .match(/^[0-7]+/)[0]),
                      255 < (i = parseInt(e, 8)) &&
                        ((e = e.slice(0, -1)), (i = parseInt(e, 8))),
                      (this.pos += e.length - 1),
                      (s = this.input.charCodeAt(this.pos)),
                      ("0" === e && 56 !== s && 57 !== s) ||
                        (!this.strict && !t) ||
                        this.invalidStringToken(
                          this.pos - 1 - e.length,
                          t
                            ? "Octal literal in template string"
                            : "Octal literal in strict mode"
                        ),
                      String.fromCharCode(i))
                    : String.fromCharCode(s);
              }
            }),
            (t.readHexChar = function (t) {
              var e = this.pos,
                t = this.readInt(16, t);
              return (
                null === t &&
                  this.invalidStringToken(e, "Bad character escape sequence"),
                t
              );
            }),
            (t.readWord1 = function () {
              for (
                var t = this,
                  e = "",
                  i = !(this.containsEsc = !1),
                  s = this.pos,
                  r = 6 <= this.options.ecmaVersion;
                this.pos < this.input.length;

              ) {
                var n = t.fullCharCodeAtPos();
                if (h(n, r)) t.pos += n <= 65535 ? 1 : 2;
                else {
                  if (92 !== n) break;
                  (t.containsEsc = !0), (e += t.input.slice(s, t.pos));
                  var n = t.pos,
                    a =
                      (117 !== t.input.charCodeAt(++t.pos) &&
                        t.invalidStringToken(
                          t.pos,
                          "Expecting Unicode escape sequence \\uXXXX"
                        ),
                      ++t.pos,
                      t.readCodePoint());
                  (i ? o : h)(a, r) ||
                    t.invalidStringToken(n, "Invalid Unicode escape"),
                    (e += D(a)),
                    (s = t.pos);
                }
                i = !1;
              }
              return e + this.input.slice(s, this.pos);
            }),
            (t.readWord = function () {
              var t = this.readWord1(),
                e = g.name;
              return (
                this.keywords.test(t) &&
                  (this.containsEsc &&
                    this.raiseRecoverable(
                      this.start,
                      "Escape sequence in keyword " + t
                    ),
                  (e = c[t])),
                this.finishToken(e, t)
              );
            });
          (s.version = "5.7.3"),
            (s.parse = function (t, e) {
              return new w(e, t).parse();
            }),
            (s.parseExpressionAt = function (t, e, i) {
              return (i = new w(i, t, e)).nextToken(), i.parseExpression();
            }),
            (s.tokenizer = function (t, e) {
              return new w(e, t);
            }),
            (s.addLooseExports = function (t, e, i) {
              (s.parse_dammit = t), (s.LooseParser = e), (s.pluginsLoose = i);
            }),
            (s.Parser = w),
            (s.plugins = W),
            (s.defaultOptions = k),
            (s.Position = v),
            (s.SourceLocation = b),
            (s.getLineInfo = G),
            (s.Node = C),
            (s.TokenType = n),
            (s.tokTypes = g),
            (s.keywordTypes = c),
            (s.TokContext = P),
            (s.tokContexts = L),
            (s.isIdentifierChar = h),
            (s.isIdentifierStart = o),
            (s.Token = R),
            (s.isNewLine = f),
            (s.lineBreak = l),
            (s.lineBreakG = d),
            (s.nonASCIIwhitespace = m),
            Object.defineProperty(s, "__esModule", { value: !0 });
        })(e);
      },
      function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var h = i(0),
          p = {},
          c = {},
          u = { result: void 0 },
          s = {
            Program: function (t, e) {
              for (var i = 0, s = t.body; i < s.length; i++) {
                var r = s[i];
                l(r, e);
              }
            },
            Identifier: function (t, e) {
              if ("undefined" !== t.name) {
                e = e.$find(t.name);
                if (e) return e.$get();
                throw "[Error] " + t.loc + ", '" + t.name + "' 未定义";
              }
            },
            Literal: function (t, e) {
              return t.value;
            },
            BlockStatement: function (t, e) {
              for (
                var i = e.invasived ? e : new h.Scope("block", e),
                  s = 0,
                  r = t.body;
                s < r.length;
                s++
              ) {
                var n = r[s],
                  n = l(n, i);
                if (n === p || n === c || n === u) return n;
              }
            },
            EmptyStatement: function (t, e) {},
            DebuggerStatement: function (t, e) {
              debugger;
            },
            ExpressionStatement: function (t, e) {
              l(t.expression, e);
            },
            ReturnStatement: function (t, e) {
              return (u.result = t.argument ? l(t.argument, e) : void 0), u;
            },
            LabeledStatement: function (t, e) {
              t.type;
            },
            BreakStatement: function (t, e) {
              return p;
            },
            ContinueStatement: function (t, e) {
              return c;
            },
            IfStatement: function (t, e) {
              return l(t.test, e)
                ? l(t.consequent, e)
                : t.alternate
                ? l(t.alternate, e)
                : void 0;
            },
            SwitchStatement: function (t, e) {
              for (
                var i = l(t.discriminant, e),
                  s = new h.Scope("switch", e),
                  r = !1,
                  n = 0,
                  a = t.cases;
                n < a.length;
                n++
              ) {
                var o = a[n];
                if ((r = r || (o.test && i !== l(o.test, s)) ? r : !0)) {
                  o = l(o, s);
                  if (o === p) break;
                  if (o === c || o === u) return o;
                }
              }
            },
            SwitchCase: function (t, e) {
              for (var i = 0, s = t.consequent; i < s.length; i++) {
                var r = s[i],
                  r = l(r, e);
                if (r === p || r === c || r === u) return r;
              }
            },
            WithStatement: function (t, e) {
              throw "因为 with 很多问题，已经被基本弃用了，不实现";
            },
            ThrowStatement: function (t, e) {
              throw l(t.argument, e);
            },
            TryStatement: function (e, i) {
              try {
                return l(e.block, i);
              } catch (t) {
                var s, r;
                if (e.handler)
                  return (
                    (s = e.handler.param),
                    ((r = new h.Scope("block", i)).invasived = !0),
                    r.$const(s.name, t),
                    l(e.handler, r)
                  );
                throw t;
              } finally {
                if (e.finalizer) return l(e.finalizer, i);
              }
            },
            CatchClause: function (t, e) {
              return l(t.body, e);
            },
            WhileStatement: function (t, e) {
              for (; l(t.test, e); ) {
                var i = new h.Scope("loop", e),
                  i = ((i.invasived = !0), l(t.body, i));
                if (i === p) break;
                if (i !== c && i === u) return i;
              }
            },
            DoWhileStatement: function (t, e) {
              do {
                var i = new h.Scope("loop", e),
                  i = ((i.invasived = !0), l(t.body, i));
                if (i === p) break;
                if (i !== c && i === u) return i;
              } while (l(t.test, e));
            },
            ForStatement: function (t, e) {
              var i = new h.Scope("loop", e);
              for (
                t.init && l(t.init, i);
                !t.test || l(t.test, i);
                t.update && l(t.update, i)
              ) {
                var s = l(t.body, i);
                if (s === p) break;
                if (s !== c && s === u) return s;
              }
            },
            ForInStatement: function (t, e) {
              var i,
                s = t.left.kind,
                r = t.left.declarations[0].id.name;
              for (i in l(t.right, e)) {
                var n = new h.Scope("loop", e),
                  n = ((n.invasived = !0), e.$declar(s, r, i), l(t.body, n));
                if (n === p) break;
                if (n !== c && n === u) return n;
              }
            },
            FunctionDeclaration: function (t, e) {
              var i = s.FunctionExpression(t, e),
                t = t.id.name;
              if (!e.$const(t, i)) throw "[Error] " + name + " 重复定义";
            },
            VariableDeclaration: function (t, e) {
              for (
                var i = t.kind, s = 0, r = t.declarations;
                s < r.length;
                s++
              ) {
                var n = r[s],
                  a = n.id.name,
                  n = n.init ? l(n.init, e) : void 0;
                if (!e.$declar(i, a, n)) throw "[Error] " + a + " 重复定义";
              }
            },
            VariableDeclarator: function (t, e) {
              throw "执行这里就错了";
            },
            ThisExpression: function (t, e) {
              e = e.$find("this");
              return e ? e.$get() : null;
            },
            ArrayExpression: function (t, e) {
              return t.elements.map(function (t) {
                return l(t, e);
              });
            },
            ObjectExpression: function (t, e) {
              for (var i = {}, s = 0, r = t.properties; s < r.length; s++) {
                var n = r[s],
                  a = n.kind,
                  o = void 0;
                if ("Literal" === n.key.type) o = l(n.key, e);
                else {
                  if ("Identifier" !== n.key.type) throw "这里绝对就错了";
                  o = n.key.name;
                }
                n = l(n.value, e);
                if ("init" === a) i[o] = n;
                else if ("set" === a) Object.defineProperty(i, o, { set: n });
                else {
                  if ("get" !== a) throw "这里绝对就错了";
                  Object.defineProperty(i, o, { get: n });
                }
              }
              return i;
            },
            FunctionExpression: function (a, o) {
              return function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var i = new h.Scope("function", o);
                i.invasived = !0;
                for (var s = 0; s < a.params.length; s++) {
                  var r = a.params[s].name;
                  i.$const(r, t[s]);
                }
                i.$const("this", this), i.$const("arguments", arguments);
                var n = l(a.body, i);
                if (n === u) return n.result;
              };
            },
            UnaryExpression: function (s, r) {
              return {
                "-": function () {
                  return -l(s.argument, r);
                },
                "+": function () {
                  return +l(s.argument, r);
                },
                "!": function () {
                  return !l(s.argument, r);
                },
                "~": function () {
                  return ~l(s.argument, r);
                },
                void: function () {
                  l(s.argument, r);
                },
                typeof: function () {
                  var t;
                  return "Identifier" === s.argument.type
                    ? (t = r.$find(s.argument.name))
                      ? typeof t.$get()
                      : "undefined"
                    : typeof l(s.argument, r);
                },
                delete: function () {
                  var t, e;
                  if ("MemberExpression" === s.argument.type)
                    return (
                      (t = (i = s.argument).object),
                      (e = i.property),
                      i.computed
                        ? delete l(t, r)[l(e, r)]
                        : delete l(t, r)[e.name]
                    );
                  if ("Identifier" === s.argument.type) {
                    var i = r.$find("this");
                    if (i) return i.$get()[s.argument.name];
                  }
                },
              }[s.operator]();
            },
            UpdateExpression: function (t, e) {
              var i,
                s,
                r = t.prefix;
              if ("Identifier" === t.argument.type) {
                var n,
                  a = t.argument.name;
                if (!(n = e.$find(a))) throw a + " 未定义";
              } else
                "MemberExpression" === t.argument.type &&
                  ((a = t.argument),
                  (i = l(a.object, e)),
                  (s = a.computed ? l(a.property, e) : a.property.name),
                  (n = {
                    $set: function (t) {
                      return (i[s] = t), !0;
                    },
                    $get: function () {
                      return i[s];
                    },
                  }));
              return {
                "--": function (t) {
                  return n.$set(t - 1), r ? --t : t--;
                },
                "++": function (t) {
                  return n.$set(t + 1), r ? ++t : t++;
                },
              }[t.operator](l(t.argument, e));
            },
            BinaryExpression: function (t, e) {
              return {
                "==": function (t, e) {
                  return t == e;
                },
                "!=": function (t, e) {
                  return t != e;
                },
                "===": function (t, e) {
                  return t === e;
                },
                "!==": function (t, e) {
                  return t !== e;
                },
                "<": function (t, e) {
                  return t < e;
                },
                "<=": function (t, e) {
                  return t <= e;
                },
                ">": function (t, e) {
                  return e < t;
                },
                ">=": function (t, e) {
                  return e <= t;
                },
                "<<": function (t, e) {
                  return t << e;
                },
                ">>": function (t, e) {
                  return t >> e;
                },
                ">>>": function (t, e) {
                  return t >>> e;
                },
                "+": function (t, e) {
                  return t + e;
                },
                "-": function (t, e) {
                  return t - e;
                },
                "*": function (t, e) {
                  return t * e;
                },
                "/": function (t, e) {
                  return t / e;
                },
                "%": function (t, e) {
                  return t % e;
                },
                "|": function (t, e) {
                  return t | e;
                },
                "^": function (t, e) {
                  return t ^ e;
                },
                "&": function (t, e) {
                  return t & e;
                },
                in: function (t, e) {
                  return t in e;
                },
                instanceof: function (t, e) {
                  return t instanceof e;
                },
              }[t.operator](l(t.left, e), l(t.right, e));
            },
            AssignmentExpression: function (t, e) {
              if ("Identifier" === t.left.type) {
                var i = t.left.name,
                  s = e.$find(i);
                if (!s) throw i + " 未定义";
                a = s;
              } else {
                if ("MemberExpression" !== t.left.type)
                  throw "如果出现在这里，那就说明有问题了";
                var i = t.left,
                  r = l(i.object, e),
                  n = i.computed ? l(i.property, e) : i.property.name,
                  a = {
                    $set: function (t) {
                      return (r[n] = t), !0;
                    },
                    $get: function () {
                      return r[n];
                    },
                  };
              }
              return {
                "=": function (t) {
                  return a.$set(t), t;
                },
                "+=": function (t) {
                  return a.$set(a.$get() + t), a.$get();
                },
                "-=": function (t) {
                  return a.$set(a.$get() - t), a.$get();
                },
                "*=": function (t) {
                  return a.$set(a.$get() * t), a.$get();
                },
                "/=": function (t) {
                  return a.$set(a.$get() / t), a.$get();
                },
                "%=": function (t) {
                  return a.$set(a.$get() % t), a.$get();
                },
                "<<=": function (t) {
                  return a.$set(a.$get() << t), a.$get();
                },
                ">>=": function (t) {
                  return a.$set(a.$get() >> t), a.$get();
                },
                ">>>=": function (t) {
                  return a.$set(a.$get() >>> t), a.$get();
                },
                "|=": function (t) {
                  return a.$set(a.$get() | t), a.$get();
                },
                "^=": function (t) {
                  return a.$set(a.$get() ^ t), a.$get();
                },
                "&=": function (t) {
                  return a.$set(a.$get() & t), a.$get();
                },
              }[t.operator](l(t.right, e));
            },
            LogicalExpression: function (t, e) {
              return {
                "||": function () {
                  return l(t.left, e) || l(t.right, e);
                },
                "&&": function () {
                  return l(t.left, e) && l(t.right, e);
                },
              }[t.operator]();
            },
            MemberExpression: function (t, e) {
              var i = t.object,
                s = t.property;
              return t.computed ? l(i, e)[l(s, e)] : l(i, e)[s.name];
            },
            ConditionalExpression: function (t, e) {
              return l(t.test, e) ? l(t.consequent, e) : l(t.alternate, e);
            },
            CallExpression: function (t, e) {
              var i = l(t.callee, e),
                s = t.arguments.map(function (t) {
                  return l(t, e);
                });
              return "MemberExpression" === t.callee.type
                ? ((t = l(t.callee.object, e)), i.apply(t, s))
                : i.apply(null, s);
            },
            NewExpression: function (t, e) {
              var i = l(t.callee, e),
                t = t.arguments.map(function (t) {
                  return l(t, e);
                });
              return new (i.bind.apply(i, [null].concat(t)))();
            },
            SequenceExpression: function (t, e) {
              for (var i = 0, s = t.expressions; i < s.length; i++)
                var r = s[i], n = l(r, e);
              return n;
            },
            Property: function (t, e, i) {
              throw "这里如果被执行了那也是错的...";
            },
            ClassExpression: function (t, e) {
              throw t.type + " 未实现";
            },
            RestElement: function (t, e) {
              throw t.type + " 未实现";
            },
            MetaProperty: function (t, e) {
              throw t.type + " 未实现";
            },
            AwaitExpression: function (t, e) {
              throw t.type + " 未实现";
            },
            Super: function (t, e) {
              throw t.type + " 未实现";
            },
            SpreadElement: function (t, e) {
              throw t.type + " 未实现";
            },
            TemplateElement: function (t, e) {
              throw t.type + " 未实现";
            },
            ClassDeclaration: function (t, e) {
              throw t.type + " 未实现";
            },
            TaggedTemplateExpression: function (t, e) {
              throw t.type + " 未实现";
            },
            MethodDefinition: function (t, e) {
              throw t.type + " 未实现";
            },
            AssignmentPattern: function (t, e) {
              throw t.type + " 未实现";
            },
            ObjectPattern: function (t, e) {
              throw t.type + " 未实现";
            },
            ArrayPattern: function (t, e) {
              throw t.type + " 未实现";
            },
            ForOfStatement: function (t, e) {
              throw t.type + " 未实现";
            },
            TemplateLiteral: function (t, e) {
              throw t.type + " 未实现";
            },
            ClassBody: function (t, e) {
              throw t.type + " 未实现";
            },
            ImportDeclaration: function (t, e) {
              throw t.type + " 未实现";
            },
            ExportNamedDeclaration: function (t, e) {
              throw t.type + " 未实现";
            },
            ExportDefaultDeclaration: function (t, e) {
              throw t.type + " 未实现";
            },
            ExportAllDeclaration: function (t, e) {
              throw t.type + " 未实现";
            },
            ImportSpecifier: function (t, e) {
              throw t.type + " 未实现";
            },
            ImportDefaultSpecifier: function (t, e) {
              throw t.type + " 未实现";
            },
            ImportNamespaceSpecifier: function (t, e) {
              throw t.type + " 未实现";
            },
            ExportSpecifier: function (t, e) {
              throw t.type + " 未实现";
            },
            YieldExpression: function (t, e) {
              throw t.type + " 未实现";
            },
            ArrowFunctionExpression: function (t, e) {
              throw t.type + " 未实现";
            },
          },
          l = function (t, e, i) {
            return (0, s[t.type])(t, e, i);
          };
        e.default = l;
      },
    ]),
    (r = {}),
    (s.m = i),
    (s.c = r),
    (s.d = function (t, e, i) {
      s.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = ""),
    s((s.s = 1))
  );
  function s(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return i[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
  }
  var i, r;
});

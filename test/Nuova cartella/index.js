var app = new Vue({
    el: '#app',
    data: {
        colectionName: 'Hello Vue!',
        ready: false,
        mongodata: {
            data: [],
            mainx: [],
            indexs: []
        },
        variables: {
            moredatax: {}
        },
        methods: {
            keyFilter: function(a, b) {
                let res = [];
                b.forEach((el, ix, arr) => {
                    if (el == a[ix]) res.push(el);
                    else if (arr.slice(ix).filter((f) => a.includes(f)).length > 0) res.push(el);
                });
                return res;
            },
            fillSpace: function(i, a, b, e) {
                if (!app.variables.moredatax.hasOwnProperty(i))
                    app.variables.moredatax[i] = { val: Object.getOwnPropertyNames(a).slice(0,-1).filter((el) => !b.includes(el)), use: true }
                if (e) return app.variables.moredatax[i].val.pop();
                return app.variables.moredatax[i].val[app.variables.moredatax[i].val.length - 1];
            },
            getMoredatax: function(i, a, b) {
                if (app.variables.moredatax.hasOwnProperty(i) && app.variables.moredatax[i].use) return app.variables.moredatax[i].val;
                else return Object.getOwnPropertyNames(a).slice(0,-1).filter((el) => !b.includes(el))
            },
            dataIsArray: function(a) {
                return Array.isArray(a);
            },
            arrayCompare: function(a, b) {
                let i = a.length;
                if (i != b.length) return false;
                while (i--) if (a[i] !== b[i]) return false;
                return true;
            }
        }
    }
});

//

let PureData = [
    { DatoA: "Valore1", DatoB: "Valore2", DatoC: "Valore3" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore1", DatoC: "Valore3" },
    { DatoA: "Valore1", DatoC: "Valore3" },
    { DatoA: [ "Valore", "Valore", "Valore" ], DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoAA: "ValoreAA", DatoBB: "ValoreBB" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore", DatoBB: "ValoreBB" },
    { DatoA: [ "Valore", "Valore", "Valore" ], DatoB: [ "Valore", "Valore" ], DatoC: [ "Valore", "Valore", "Valore" ] },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: [ "Valore", "Valore", "Valore" ], DatoB: [ "Valore", "Valore" ], DatoC: [ "Valore", "Valore", [ "Valore", "Valore", "Valore" ] ] },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG", DatoC: "ValoreC" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG", DatoC: "ValoreC" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: { fff: 23 }, DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoBB: "ValoreBB", DatoAA: "{ ... }", DatoC: "ValoreC" },
    { DatoBB: "ValoreBB", DatoAA: "VAA", DatoC: "ValoreC" },
    { DatoBB: "ValoreBB", DatoAA: "ValoreAA", DatoC: "ValoreC" },
    { DatoA: "Valore", DatoB: [ "{ ... }", "{ ... }", "{ ... }" ], DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoT: "Valore", DatH: "Valore" },
    { DatoA: "Valore", DatoT: "Valore", DatH: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" }
];

app.mongodata.data = PureData;
app.mongodata.mainx = [ "DatoA", "DatoB", "DatoC" ];
app.mongodata.indexs = Array.apply(null, { length: PureData.length }).map(Number.call, Number);
app.ready = true;

//
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        ready: false,
        mongodata: {
            data: [],
            mainx: [],
            currentx: [],
            indexs: []
        },
        methods: {
            keyFilter: function (a, b) {
                let res = [];
                b.forEach((el, ix, arr) => {
                    if (el == a[ix]) res.push(el);
                    else if (arr.slice(ix).filter((f) => a.includes(f)).length > 0) res.push(el);
                });
                return res;
            },
            dataIsArray: function (a) {
                return Array.isArray(a);
            }
        }
    }
});

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
    { DatoA: "Valore", DatoB: "{ ... }", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "ValoreA", DatoAA: "{ ... }", DatoC: "ValoreC" },
    { DatoA: "Valore", DatoB: [ "{ ... }", "{ ... }", "{ ... }" ], DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" }
];

app.mongodata.data = PureData;
app.mongodata.mainx = [ "DatoA", "DatoB", "DatoC" ];
app.mongodata.currentx = app.mongodata.mainx;
app.mongodata.indexs = Array.apply(null, { length: PureData.length }).map(Number.call, Number)
app.ready = true;

//
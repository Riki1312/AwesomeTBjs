var app = new Vue({
    el: '#app',
    data: {
        version: '1.0.0',
        ready: false,
        mongodata: {
            data: [],
            mainx: [],
            mainy: [],
            collectionName: "Collection",
            changes: {
                update: [],
                insert: [],
                remove: []
            }
        },
        mode: {
            edit: false,
            debug: false
        },
        methods: {
            x_scroll: function(yline) {
                return Object.getOwnPropertyNames(app.mongodata.data[yline]).slice(0,-1);
            },
            x_matchMain: function(yline) {
                const compareArray = (a, b) => {
                    let i = a.length;
                    if (i != b.length) return false;
                    while (i--) if (a[i] !== b[i]) return false;
                    return true;
                };

                return compareArray(app.methods.x_scroll(yline), app.mongodata.mainx);
            },
            x_containsInY: function(xline, yline) {
                return app.methods.x_scroll(yline).includes(xline);
            },
            xy_scrollNoMatch: function(yline) {
                let ret = [];
                let xlineNoMatch = app.methods.x_scroll(yline).filter((el) => !app.mongodata.mainx.includes(el));

                app.mongodata.mainx.forEach((i) => {
                    if (app.mongodata.data[yline][i] === "") app.mongodata.data[yline][i] = "​\u200B";
                    if (app.mongodata.data[yline][i]) {
                        ret.push({ el: app.mongodata.data[yline][i], xline: i });
                    }
                    else {
                        let xline_ = xlineNoMatch.pop();

                        if (app.mongodata.data[yline][xline_] === "") app.mongodata.data[yline][xline_] = "​\u200B";
                        ret.push({ el: app.mongodata.data[yline][xline_], xline: xline_ });
                    }
                });
                xlineNoMatch.forEach((j) => {
                    if (app.mongodata.data[yline][j] === "") app.mongodata.data[yline][j] = "​\u200B";
                    ret.push({ el: app.mongodata.data[yline][j], xline: j });
                });

                return ret;
            },
            el_isArray: function(yline, xline) {
                return Array.isArray(app.mongodata.data[yline][xline]);
            },
            vl_isArray: function(value) {
                return Array.isArray(value);
            }
        }
    },
    methods: {
        edit_confirm: function() {
            if (app.mode.debug) console.log("confirm");
        },
        edit_cancel: function() {
            if (app.mode.debug) console.log("cancel");
        },
        line_delete: function(yline) {
            if (app.mode.debug) console.log("delete y:" + yline);

            app.mongodata.mainy.splice(app.mongodata.mainy.indexOf(yline), 1);
            app.mongodata.data[yline] = {};

            //history changes
            app.mongodata.changes.remove.push({ dataindex: yline });
        },
        line_add: function(initial) {
            if (app.mode.debug) console.log("add vl:" + initial);

            let newLine = {};
            app.mongodata.mainx.forEach((x) => {
                newLine[x] = initial;
            });

            app.mongodata.data.push(newLine);
            app.mongodata.mainy.push(app.mongodata.data.length - 1);

            //history changes
            app.mongodata.changes.insert.push({ dataindex: app.mongodata.data.length - 1 });
        },
        line_edit: function(yline, xline) {
            //history changes
            let infos = { dataindex: yline, propertyname: xline };
            if (!app.mongodata.changes.update.filter(x => x.dataindex == infos.dataindex && x.propertyname == infos.propertyname).length > 0)
            {
                app.mongodata.changes.update.push(infos);
                if (app.mode.debug) console.log("edit y:" + yline + " x:" + xline);
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
    { DatoA: [ "Valore01", "Valore01", "Valore01" ], DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoAA: "ValoreAA", DatoBB: "ValoreBB" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG" },
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: ["ValoreGGG", "ValoreGGG"] },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore" },
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
    { DatoA: "Valore1", DatoB: "Valore2", DatoC: "Valore3" },
    { DatoA: "Valore1", DatoB: "Valore2", DatoC: "Valore3" },
    { DatoC: "Valore3", DatoNN: "Valoren", DatoMM: "Valorem", DatoUU: "Valoreu" }
];

app.mongodata.data = PureData;
app.mongodata.mainx = [ "DatoA", "DatoB", "DatoC" ];
app.mongodata.mainy = Array.apply(null, { length: PureData.length }).map(Number.call, Number);
//app.mode.edit = true;
//app.mode.debug = true;
app.ready = true;

/*
Quando si eseguono le query partire da insert poi update e infine delete
*/

//
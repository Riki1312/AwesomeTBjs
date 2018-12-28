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
    { DatoA: "Valore", DatoAA: "Valore", DatoBB: "Valore" },
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
    { DatoA: "Valore", DatoB: "Valore", DatoEEE: "ValoreEEE", DatoFFF: "ValoreFFF", DatoGGG: "ValoreGGG", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "{ ... }", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" },
    { DatoA: "Valore", DatoSSSS: "{ ... }", DatoC: "Valore" },
    { DatoA: "Valore", DatoB: [ "{ ... }", "{ ... }", "{ ... }" ], DatoC: "Valore" },
    { DatoA: "Valore", DatoB: "Valore", DatoC: "Valore" }
];

//Normalize(PureData);
app.mongodata.data = PureData;
app.mongodata.mainx = [ "DatoA", "DatoB", "DatoC" ];
app.mongodata.currentx = app.mongodata.mainx;
app.mongodata.indexs = Array.apply(null, { length: PureData.length }).map(Number.call, Number)
app.ready = true;

function Normalize(arraydata)
{
    /*let x = Object.getOwnPropertyNames(arraydata[0]);
    console.log(x);*/
    
    for (let index = 0; index < arraydata.length; index++)
    {
        for (let key in arraydata[0])
        {
            //console.log(key);
            if (arraydata[index][key])
            {
                //console.log("ok");
            }
            else
            {
                arraydata[index][key] = "null";
            }
        }
    }
}
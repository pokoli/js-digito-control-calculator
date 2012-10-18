
function calculaDigito(valores) {
         pesos = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
         d = 0;
         for (i=0; i<=9; i++) {
           d += parseInt(valores.charAt(i)) * pesos[i];
         }
         d = 11 - (d % 11);
         if (d==11) d=0;
         if (d==10) d=1;
         return d;
}

function calcularDC(banco,entidad,cuenta){
        banco = banco.toString();
        entidad = entidad.toString();
        cuenta = cuenta.toString();
        d1 = calculaDigito('00'+banco+entidad);
        d2 = calculaDigito(cuenta);
        return d1.toString()+d2.toString();
}

var banco = "2100";
var entidad = "0509";
var cuenta = "0100050958";

console.log(calcularDC(banco,entidad,cuenta));

  
function calcular(){

var mes=0;
var totalp = 0;
var tam= document.getElementById("disabledTextInput").value;
var rec = document.getElementById("FS").value;
var tipo = document.getElementById("TIPE").value;
// Casteamos el valor de la var a Pesos colombianos con la siguiente funcion:
const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
//Validamos que el tamaño del inmueble sea valido
if(tam>0){
    //calculamos segun tipo y cambiamos valores
    switch(tipo){
    
        case "0":
            document.getElementById("result").innerHTML = ("Debe seleccionar el tipo de inmueble...");
            break;
        case "1":
            //cuando el inmueble es tipo oficina
            switch(rec){
               default:
               document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
               break;
               case"1":
               totalp = tam*859;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"2":
               totalp = tam*797;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"3":
               totalp = tam*742;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"5":
               totalp = tam*687;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"6":
               totalp = tam*1031;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
               case"7":
               totalp = tam*1117;
               document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
               break;
            }
            break ;
       case"2":
            //cuando el inmueble es tipo residencial 
            switch(rec){
                default:
                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                break;
                case"1":
                totalp = tam*1030;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"2":
                totalp = tam*956;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"3":
                totalp = tam*890;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"5":
                totalp = tam*824;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"6":
                totalp = tam*1236;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                mes=totalp*4.345;
                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
                case"7":
                totalp = tam*1339;
                document.getElementById("result").innerHTML = ("El valor estimado de una intervencion de limpieza es : <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
               mes=totalp*4.345;
               document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es : <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                break;
             }
             break ;
            break;
        default:
            document.getElementById("result").innerHTML = ("No se puede calcular debe hacer las selecciones...");
            document.getElementById("result1").innerHTML = ("No se puede calcular debe hacer las selecciones...");
            break;       
       }
       

}else{
    document.getElementById("result").innerHTML = ("Debe ingresar el tamaño para calcular... ");
    document.getElementById("result1").innerHTML = ("");
}
}

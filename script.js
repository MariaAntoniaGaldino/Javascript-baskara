// function calcularMedia(N1,N2,N3){
//     let resultado = (N1 + N2 + N3)/3;
//     return resultado;
// }
// function calcularExame(nota){
//     let resultado = 10 - nota;
//     return resultado;
function calcularDelta(a, b, c){
    let delta = b*b - (4*a*c); 
    return delta; 
}
function calcularx1(a, b, delta){
    let x1 = (-1*b + Math.sqrt(delta)) / 2 * a; 
    return x1; 
}
function calcularx2(a,b,delta){
    let x2 = (-1*b - Math.sqrt(delta)) / 2 * a;
    return x2;
}
$('#inputOla').click(
    function(){
        calculo =
        {
            'N1':document.getElementById('inputA').value,
            'N2':document.getElementById('inputB').value,
            'N3':document.getElementById('inputC').value
        }
        let media = calcularMedia (parseInt(calculo.N1), parseInt(calculo.N2), parseInt(calculo.N3));
    
   
        if 
        (media >= 7) {
        alert('Você foi aprovado' + media);
         } else {
            alert('Você esta de recuperação' + calcularExame(media));

           // let exame= 10-media;
           // alert (exame);
         }

}
)

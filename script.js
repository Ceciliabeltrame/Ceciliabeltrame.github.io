// Creación lista vacía
let group_split = [];
let money_list=[]

// Ingresa participantes
groupTotal.addEventListener('click', (e) => {
  e.preventDefault();
  split_for_group()
  clearF();
})

// Vacíar input cuando ingreso participantes
function clearF() {
  var grab = document.getElementById("group");
    if (grab.value !="") {
        grab.value = "";
    }
}

// Funcion de agregacion de participantes a la lista
function split_for_group() {
  let people = (document.querySelector('#group').value).toLowerCase();
  if(people!== ""){
    group_split.push(people.toLowerCase())
    console.log(group_split);
  }
  else if(group_split.includes(people.toLowerCase())){

  }
  document.getElementById("groupTotal").textContent="Ingresar otro";
  console.log(group_split.length)
}

// Función de suma del total y division entre los participantes
const splitting = () => {
    let dinero = document.querySelector('#total').value;
    console.log(dinero)
    mostrarElementos()
    let result=''
    let suma = 0;

    if(group_split.includes(person_name.value.toLowerCase())){
      money_list.push(dinero)
      for(const monto of money_list){
        suma += parseFloat(monto);
      }
      result = suma / group_split.length;
      document.querySelector('#totalGastado').innerHTML=`El total gastado es $${suma.toFixed(2)}`;
      document.querySelector('#perPerson').innerHTML = `Cada uno debe pagar $${result.toFixed(2)}`

      for(const person of group_split){
        let amount_this_person_owes=suma-dinero;
        console.log(`${person_name.value} debe ${amount_this_person_owes}`)
      }
    } 
    else{
      result='No coinciden los participantes con quien realizo el gasto'
      document.querySelector('#perPerson').innerHTML = result;
    }

      } 

  // Función de boton de Dividir gastos
  const splitBtn = document.querySelector('#splitBtn')
    splitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      splitting();
  })

    // Función de reset de form
  document.querySelector('#resetBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelector('#perPerson').innerHTML = "Cada uno debe pagar $0"
    document.getElementById("groupTotal").textContent="Ingresar";
    group_split.splice(0, group_split.length)
    document.querySelector('#totalGastado').innerHTML="";
    listElements=document.getElementById('listElements')
    listElements.textContent=""
  })

// Función lista de gastos - Rendición de gastos
function mostrarElementos(){
  let namesParticipants= person_name.value.toLowerCase();

  if(group_split.includes(namesParticipants.toLowerCase())){
    var list = document.getElementById('listElements')
    var li= document.createElement('li')
    li.className ='listParticipates'
    li.textContent=`${namesParticipants.charAt(0).toUpperCase()+namesParticipants.slice(1)} gastó $${total.value}`
    list.appendChild(li);
  }

}







